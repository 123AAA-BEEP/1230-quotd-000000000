# P0 — Niche Validation (paste this prompt to start Phase 0)

Read `spec/build-spec.md` (especially §1, §4, §10) and `CLAUDE.md` first.

Your task: validate the launch-10 niche candidates (spec §4.2) before any code is written, and produce the final launch list.

## What to do

1. **Demand sizing per niche.** For each of the 10 candidates, research the query cluster: the niche head terms ("limewash painting"), buyer-intent variants ("limewash painters near me", "limewash cost"), and city-modified forms, across US + Canada. Use whatever keyword data is available to you; where I have provided Ahrefs/Semrush exports in `data/validation/`, treat those as the primary source — web-proxy signals (SERP density, forum recency, Google Trends, marketplace activity) are secondary. Record volumes or clearly-marked proxy estimates.
2. **SERP quality audit.** For 5 representative queries per niche, record who ranks: big platforms, local contractors, thin content, forums. Score how beatable each SERP is (1–5).
3. **Provider-supply spot check.** For 10 diverse metros per niche, count identifiable specialists (Places, permit records where accessible, Instagram/Houzz). We need enough providers to sell leads to — but scarcity is also the moat; the sweet spot is 2–8 per metro.
4. **Score every niche** on the spec §4.1 rubric (job value, searchability, scarcity, platform gap, durability, data richness) using what you found, not priors.
5. **Deliver `data/validation/p0-report.md`:** per-niche scorecard with evidence, a kill/keep/replace call per niche (pull replacements from the §4.2 expansion bench if any of the 10 fail), the final launch-10, and the 30–50 launch cities per niche chosen by demand + provider supply.

## Exit criteria (spec §10)

Final launch list documented with volumes/evidence. Do not proceed to P1 until I sign off on the report.

## Constraints

- Mark every number as measured or estimated; never blend the two silently.
- If keyword tooling is unavailable and proxies are weak for a niche, say "insufficient signal" — that is itself a finding.
- No site code in this phase.
