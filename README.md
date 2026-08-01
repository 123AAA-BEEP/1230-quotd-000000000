# Quotd — getquotd.com

Homeowners get quotes from specialists in unusual, high-skill home services
(limewash, venetian plaster, french drains, holiday lighting, ~100 niches)
across North American cities. Programmatic SEO on a real local-data layer;
verified quote-request capture; four compounding loops (proprietary quote data,
claimed profiles, recurring contractor revenue, AI-search citation).

## Read first

1. **`spec/build-spec.md`** — the complete build spec (v1.1, GetQuotd branding).
2. **`CLAUDE.md`** — project rules for AI-assisted sessions; auto-loaded by
   Claude Code when this repo is opened.

## How to run the build (new environment)

1. Create the repo from this seed; connect it to a Claude Code environment.
2. Add secrets as environment variables when P1 asks: SUPABASE_URL,
   SUPABASE_SERVICE_ROLE_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,
   TWILIO_VERIFY_SID. Never commit them.
3. (Optional but recommended) export keyword data into `data/validation/`.
4. Paste `prompts/P0-validate.md` as the first task. Sign off on its report.
5. Then `prompts/P1-foundation.md`, then `prompts/P2-launch.md` — each phase
   requires sign-off on the previous one's exit criteria (spec §10).

## Site (Astro)

Static-first Astro app in `src/`. Node ≥20.

```
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
```

Deploys on Vercel (framework auto-detected). Production tracks the repo's
default branch; domain setup is owner-side (getquotd.com apex + www 301).

## Status

**Holding page live-able** (skeleton + tokens + homepage; no money pages yet).
P0 validation is the next work block; money pages ship in P1/P2 behind the
publish gates. Spec amendments to date: `spec/ADDENDUM-2026-08-01.md`.
Trademark screen on "Quotd/GetQuotd" still recommended before brand-asset
spend. Change control: spec §0 survival rule, §3.3 sequencing, §6.3 anti-Bark
commitments, and kill criteria require owner sign-off to alter.
