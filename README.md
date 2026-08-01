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

## Status

Pre-build. Domain chosen (getquotd.com); trademark screen on "Quotd/GetQuotd"
still recommended before brand-asset spend. Change control: spec §0 survival
rule, §3.3 sequencing, §6.3 anti-Bark commitments, and kill criteria require
owner sign-off to alter.
