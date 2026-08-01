# P1 — Foundation (paste this prompt to start Phase 1; requires P0 sign-off)

Read `spec/build-spec.md` (§3, §5, §6, §8) and `CLAUDE.md` first. P0's approved launch list is in `data/validation/p0-report.md`.

Your task: build the platform foundation and prove it with ONE niche×city money page at full polish, live data end to end.

## Deliverables

1. **Scaffold** — Astro project per spec §3.1; repo layout per CLAUDE.md; CI with the publish-gate checks stubbed in from day one (they run even when trivially passing).
2. **Supabase schema** — `niches`, `cities`, `providers`, `pages`, `leads`, `quotes`, `data_modules` per spec §3.1 and §6.2, RLS on, leads locked to service role. Provide the migration files; do not apply to production without me.
3. **Data pipelines** (in `/pipelines`, runnable + scheduled): the 6 core modules from spec §5.2 — `climate_curing`, `housing_age`, `home_value`, `wages`, `frost_dates`, `providers` (Places + manual seed). Permits/licenses/soil come in P2+. Every output carries `sources` and `retrieved_at`.
4. **Design tokens + money-page template** — spec §8 in full: type scale (serif display + humanist body, tabular figures), the single accent color, light/dark, stat tiles, data tables, the two-step quote form (UI only in this phase; OTP wiring lands with the live form in P2). Run the §8.1 banned-list review on your own output before showing me.
5. **The proof page** — pick the strongest niche×city from P0 (default: limewash × the metro with best data coverage) and build it to spec §5.1 anatomy with real pipeline data, passing every publish gate. This page is the template every future page inherits.
6. **Lead intake edge function** — validates, stamps metadata (page URL, niche, city, UTM, form version), writes to `leads`, notifies by email. OTP (Twilio Verify) behind a feature flag, off until P2.

## Exit criteria (spec §10)

One niche×city page at full polish with live data, passing all publish gates, deployed to a preview URL for my review. Home page and hubs are NOT in this phase — money page first, on purpose.

## Constraints

- Zero content generation at scale in this phase. One page, perfect.
- No paid API spend above $20 without asking; free sources first.
- Secrets from environment only; if a needed secret is missing, list what you need and stop that sub-task rather than mocking silently.
