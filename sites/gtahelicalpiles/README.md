# gtahelicalpiles.ca

First-party lead-generation site for a helical (screw) pile installation contractor serving Halton, Peel, Hamilton and Guelph, Ontario. Static Astro site, one server route for lead intake, no client JavaScript beyond the quote form, the budget calculator and analytics.

This folder is a **standalone project** that happens to live inside the Quotd repository. It has its own `package.json`, its own build, and its own deploy. The Quotd `CLAUDE.md` and `spec/` at the repository root describe a different product and do not govern this site; see `CLAUDE.md` in this folder.

## Run

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output for Vercel
npm run check      # publish-gate checks against the build output
npm run shots      # phone + desktop screenshots of every page into ./shots
```

Node 20 or newer.

## Deploy (Vercel)

Create a Vercel project from this repository and set **Root Directory** to `sites/gtahelicalpiles`. Framework preset: Astro. The `@astrojs/vercel` adapter builds the static pages and the one serverless function (`/api/lead`).

Environment variables (Vercel project settings, never committed):

| Variable | Purpose |
|---|---|
| `LEAD_WEBHOOK_URL` | Optional. Every lead is POSTed here as JSON (CRM, Zapier, a future getquotd.com intake). |
| `RESEND_API_KEY` | Optional. With `LEAD_INBOX`, every lead is emailed via Resend. |
| `LEAD_INBOX` | The address that receives lead emails. |
| `LEAD_FROM` | Optional sender, default `leads@gtahelicalpiles.ca` (domain must be verified in Resend). |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Set to `gtahelicalpiles.ca` to load Plausible. Unset = no analytics script. |

With neither webhook nor Resend configured, the intake endpoint logs the lead and still returns success. That is the local preview mode; do not launch that way.

Domain: apex `gtahelicalpiles.ca` canonical, `www` redirected to apex (Vercel domain settings).

## Content and data

- `data/business.json`: name, phone, email, hours, service area, credentials. While `status` starts with `PLACEHOLDER`, every page renders `noindex` and a preview strip.
- `data/prices.json`: the single source of truth for every price on the site. Illustrative ranges only; the firm price follows a site review. Carries `last_reviewed`.
- `data/cities/<slug>.json`: one file per city page: census, geology, permits, climate, code, each fact with a source URL and retrieval date. `oakville.notes.md` records what was verified and what was not.
- `data/content/<slug>.json`: the editorial content of each city page (answer block, tiles, ground, permits, season, pricing note, FAQ). Written from the city's data module only; the template adds the price line and the nearest-city links. A city goes live when `live: true` is set for it in `business.json`.
- `data/guides/<slug>.json`: the three JSON-rendered guides (sections with per-section sources, FAQ, related links). The cost guide is a hand-built page.
- `data/claims-register.md`: every engineering, regulatory and price claim used on the site, its status and its source. Nothing labelled certified, guaranteed, licensed or insured ships without a backing document.
- `data/owner-review.md`: the aggregated list of things only the owner can confirm, per city and per guide, generated from the research runs. Starred items block launch.
- `scripts/polish-content.mjs`: idempotent rewrite of research-log phrasing ("was not retrieved") into page wording. Run it after adding or regenerating content files.

Content rule: the substance of every page comes from data files, the owner's own answers and cited sources. Prose is connective only.

## Publish gates (`npm run check`)

1. Banned copy list (gradient-hero era words, emoji, fake social proof).
2. Every JSON-LD block parses; FAQPage blocks carry questions.
3. One `h1`, a title and a meta description per page.
4. Credential words only render when `business.json` carries the backing field.
5. City pages: under 35% eight-word-shingle overlap between any two.
6. At least three internal links out of every content page.
7. No raw `font-size` in components; tokens only.

## Moving to its own repository

When the owner wants this site in a dedicated repo:

```
git subtree split --prefix=sites/gtahelicalpiles -b gtahelicalpiles-standalone
git push <new-remote> gtahelicalpiles-standalone:main
```

Then point the Vercel project at the new repository with Root Directory cleared. Nothing in this folder references the parent repository.
