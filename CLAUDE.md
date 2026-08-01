# Quotd (getquotd.com) — Project Context

You are working on **Quotd**: a consumer platform where homeowners get quotes from specialists in unusual, high-skill home services (limewash, venetian plaster, french drains, holiday lighting, ~100 niches) across North American cities. Programmatic SEO on a real local-data layer generates demand; verified quote-request capture monetizes it.

**The authoritative document is `spec/build-spec.md`. Read it before any work. If this file and the spec conflict, the spec wins.**

**Owner-approved amendments live in `spec/ADDENDUM-2026-08-01.md` and `spec/money-page-spec.md` — read them with the spec; where they conflict with the spec or this file, the addendum wins.** Headlines: provider layer is internal-only (no provider talk on consumer pages; publish gate 2 checks the database, not the page); no SMS OTP at launch (email-notified lead capture); claim-classes copy rule; money-page anatomy v2; person-form head terms.

## Non-negotiable rules (change only with owner sign-off, in writing)

1. **Survival rule (spec §0):** every published page contains structured local data that changes the advice for that city. AI writes connective prose only — never the substance. A niche×city page that can't clear the data bar does not publish.
2. **Publish gates (spec §5.4)** are CI-enforced, never bypassed: ≥3 populated data modules, ≥1 named provider (or scarce-market treatment), cross-page dedup linter (<35% same-niche prose overlap), schema validation, internal-link minimums.
3. **Sequencing (spec §3.3):** launch 10 niches × 30–50 cities. New batches ship only when the prior batch hits ≥50% indexation. Never mass-publish into a cold domain.
4. **Anti-Bark commitments (spec §6.3):** leads sold exclusive or max-3, phone-verified (OTP) only, dead-lead credit honored without a fight.
5. **Design (spec §8):** editorial reference-site look. The §8.1 banned list (gradient heroes, glassmorphism, emoji bullets, symmetric icon-card rows, fake social proof, stock/AI imagery, "elevate/seamless/unlock" copy) is enforced in review. Real data, real photography, serif display type, near-zero motion.
6. **Compliance (spec §7):** TCPA/CASL consent captured with text-version + timestamp; "licensed/verified" claims only when actually verified, with dates.

## Conventions

- Brand: "Quotd"; domain apex `https://getquotd.com` (www 301s to apex); CTA everywhere is "Get quoted".
- Stack: Astro (static-first) + Supabase (leads/providers/quotes) + edge functions (lead intake, OTP via Twilio Verify) + Cloudflare Pages/Vercel + Plausible.
- Repo layout: `/data` (niche/city/module JSON + pipeline outputs), `/pipelines` (data fetchers), `/src` (site), `/spec`, `/prompts`.
- City slugs `austin-tx` / `toronto-on`; URL scheme per spec §3.2. Canada: local currency/units/spelling; no Quebec/French at launch.
- Secrets via environment only (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TWILIO_*); never committed.
- Data files carry `sources` and `retrieved_at`; keep that discipline in every pipeline.

## Phase state

Work proceeds P0 → P4 (spec §10). Check `prompts/` for the phase kickoff prompts. Do not start a phase before the prior phase's exit criteria are met; if you believe a criterion is wrong, say so to the owner rather than skipping it.
