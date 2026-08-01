# P2 — Launch Batch (paste this prompt to start Phase 2; requires P1 sign-off)

Read `spec/build-spec.md` (§3.3, §5, §6, §7, §9) and `CLAUDE.md` first.

Your task: generate the launch batch — the approved 10 niches × 30–50 cities (300–500 money pages plus niche hubs and ~5 opening guides) — through the publish gates, and take the lead system live.

## Deliverables

1. **Content system** — template + data modules + AI connective prose per spec §5.3: forbidden-phrase list enforced, every claim traceable to a module, style conditioned on the human-edited samples from P1. Generate → I review the first 50 pages → freeze the voice → generate the rest with 10% spot-checks surfaced to me.
2. **Publish-gate CI live** — pages failing any gate (≥3 modules, provider minimum, dedup linter <35%, schema, internal links) stay draft/noindex automatically. Report the pass/fail counts per niche; a niche with <60% pass rate gets flagged to me, not force-published.
3. **Lead system live** — two-step form with niche-specific questions, SMS OTP on, TCPA/CASL consent text (versioned) on step 2, honeypot + time-check, admin table with status tracking, email notification per lead. Quote-followup automation (+14-day email, spec §6.2) enabled from the first lead.
4. **SEO plumbing** — per-niche segmented sitemaps, robots, llms.txt, `/{niche}/{city}/data.json` endpoints, Organization/Service/FAQPage schema, GSC + Bing verification, Plausible.
5. **Launch monitoring doc** — `data/launch/monitoring.md`: the weekly GSC ritual, indexation-by-segment tracking, and the expansion-gate math (spec §3.3) that decides when batch 2 ships.

## Exit criteria (spec §10)

300–500 pages live and passing gates; first verified leads flowing; indexation tracking running. Expansion beyond the launch batch is gated on ≥50% indexation of this one — not on the calendar.

## Constraints

- Never bypass a publish gate to hit the page count; a 320-page honest launch beats a 500-page padded one.
- All consumer-visible copy passes the §8.1 banned-language check.
- Any legal-text change (consent language, privacy policy) comes to me before deploy.
