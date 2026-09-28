#!/usr/bin/env python3
"""Assemble the GBP-gap master CSV from the per-cluster evidence files.

Usage:
    python3 research/gbp-gap/build-master.py [--gbp research/gbp-gap/gbp-classification.csv]

Reads every `evidence/c*.md`, parses each `### <slug>` block (the fixed row shape
from the shared research brief), optionally joins the ground-truth GBP class from
a classification CSV (columns: slug,gbp_class,gbp_nearest,gbp_note), and writes
`data/niches/gbp-gap-candidates-2026-09.csv`. Re-run after editing evidence files.
"""
import csv
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
EVIDENCE = os.path.join(HERE, "evidence")
OUT = os.path.join(REPO, "data", "niches", "gbp-gap-candidates-2026-09.csv")

FIELDS = [
    "name", "status", "level", "tier", "gta_price_cad", "gbp_belief",
    "gta_drivers", "data_hooks", "season", "web", "queries", "verdict",
]
TIER_RANK = {"T1": 1, "T2": 2, "T3": 3, "DEFER": 4}
VERDICT_RANK = {"STRONG": 1, "GOOD": 2, "BORDERLINE": 3, "EXCLUDE": 4}

block_re = re.compile(r"^###\s+(?P<slug>[a-z0-9][a-z0-9-]*)\s*$", re.M)
field_re = re.compile(r"^-\s*(?P<key>[a-z_]+):\s*(?P<val>.*)$")


def parse_file(path):
    cluster = os.path.basename(path).split("-")[0]  # c1 … c6
    text = open(path, encoding="utf-8").read()
    rows = []
    matches = list(block_re.finditer(text))
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end]
        # stop at the next H2 so the web map / deferred sections are not swallowed
        h2 = re.search(r"^##\s", body, re.M)
        if h2:
            body = body[: h2.start()]
        row = {"slug": m.group("slug"), "cluster": cluster, "source_file": os.path.relpath(path, REPO)}
        for line in body.splitlines():
            fm = field_re.match(line.strip())
            if fm and fm.group("key") in FIELDS:
                row[fm.group("key")] = fm.group("val").strip()
        if "name" in row and "tier" in row:
            rows.append(row)
    return rows


def split_tier(t):
    t = (t or "").strip()
    base = t.split("(")[0].strip().upper()
    return base if base in TIER_RANK else "UNKNOWN"


def split_belief(b):
    """'PARTIAL — nearest: "Painter"' -> ('PARTIAL', 'Painter')."""
    b = b or ""
    cls = b.split("—")[0].split("-")[0].strip().upper()
    near = ""
    mm = re.search(r'nearest:\s*"?([^"]+)"?', b)
    if mm:
        near = mm.group(1).strip().strip('"')
    return (cls if cls in ("EXACT", "PARTIAL", "NONE") else "UNKNOWN"), near


def load_gbp(path):
    table = {}
    if not path or not os.path.exists(path):
        return table
    with open(path, encoding="utf-8", newline="") as f:
        for r in csv.DictReader(f):
            table[r["slug"].strip()] = r
    return table


def main():
    gbp_path = None
    if "--gbp" in sys.argv:
        gbp_path = sys.argv[sys.argv.index("--gbp") + 1]
    gbp = load_gbp(gbp_path)

    rows = []
    for path in sorted(glob.glob(os.path.join(EVIDENCE, "c*.md"))):
        rows.extend(parse_file(path))

    seen = {}
    for r in rows:
        r["tier_base"] = split_tier(r.get("tier"))
        r["belief_class"], r["belief_nearest"] = split_belief(r.get("gbp_belief"))
        r["verdict_base"] = (r.get("verdict", "").split("—")[0].split("-")[0].strip().upper() or "UNKNOWN")
        g = gbp.get(r["slug"], {})
        r["gbp_class"] = g.get("gbp_class", "").strip().upper() or "UNVERIFIED"
        r["gbp_nearest"] = g.get("gbp_nearest", "").strip()
        r["gbp_note"] = g.get("gbp_note", "").strip()
        if r["slug"] in seen:
            r["duplicate_of"] = seen[r["slug"]]
        else:
            seen[r["slug"]] = r["source_file"]
            r["duplicate_of"] = ""

    rows.sort(key=lambda r: (TIER_RANK.get(r["tier_base"], 9), VERDICT_RANK.get(r["verdict_base"], 9), r["cluster"], r["slug"]))

    cols = [
        "slug", "name", "cluster", "level", "tier_base", "tier", "verdict_base", "verdict",
        "gbp_class", "gbp_nearest", "gbp_note", "belief_class", "belief_nearest",
        "status", "gta_price_cad", "gta_drivers", "data_hooks", "season", "web", "queries",
        "source_file", "duplicate_of",
    ]
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)

    by_tier = {}
    for r in rows:
        by_tier[r["tier_base"]] = by_tier.get(r["tier_base"], 0) + 1
    dups = sum(1 for r in rows if r["duplicate_of"])
    print(f"wrote {len(rows)} rows to {os.path.relpath(OUT, REPO)}; by tier {by_tier}; duplicates {dups}; gbp joined {sum(1 for r in rows if r['gbp_class'] != 'UNVERIFIED')}")


if __name__ == "__main__":
    main()
