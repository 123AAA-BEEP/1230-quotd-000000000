# gtahelicalpiles.ca — project context for AI-assisted sessions

This folder is a standalone site: the owner's own helical pile installation business in the western GTA (Halton, Peel, Hamilton, Guelph). It is **not** a Quotd page family. The repository-root `CLAUDE.md` and `spec/` describe Quotd (a quotes marketplace) and do not apply here: there is no provider layer, no "Get quoted" brand verb, no marketplace routing rules. Read `README.md` in this folder first.

## Rules that do apply

1. **First-party voice.** The business installs the piles. Copy says "we". Never marketplace framing.
2. **Every claim has a source.** Numeric, engineering, regulatory and price claims come from `data/` files that carry `sources` and `retrieved_at`, or from the owner's documents recorded in `data/claims-register.md`. If it cannot be sourced, it is reworded or cut. AI writes connective prose only.
3. **Credential words are gated.** "Certified", "guaranteed", "licensed", "insured" render only when `data/business.json` carries the backing field with a date. `npm run check` enforces this.
4. **Prices are illustrative.** Every price on the site is an illustrative range from `data/prices.json`, labelled as such, with the firm price after a site review. Never a bare number without that framing. One source of truth; never hard-code a price in a page.
5. **City pages must differ.** A city page needs at least three facts that are true only of that city (geology, permit authority and rules, climate, local jobs) and under 35% prose overlap with any other city page. Stoney Creek, Ancaster and Dundas are sections of Hamilton, not pages. Service area (owner decision 2026-09-25): Toronto, Peel, Halton, Hamilton, Guelph and the Niagara corridor to Fort Erie; West Lincoln and Wainfleet are listed as "also serving" without pages. The list lives in `data/business.json`.
6. **Design system.** `src/styles/global.css` is the system: Inter Tight display, Inter body, ink primary buttons, one steel-blue accent for small marks only, radii 8/12/16, hairline borders, tabular figures, no raw font sizes. Banned: gradient heroes, glassmorphism, emoji bullets, symmetric icon-card rows, fake social proof, stock or AI imagery, "elevate/seamless/effortless/unlock" copy, scroll animation.
7. **Landing-page anatomy** (adapted from the owner's thesis): slim header (logo, phone, one CTA), H1 under 10 words, subhead, primary CTA above the fold, form in the right rail on desktop and after the data band on mobile with a sticky Call | Quote bar, benefits, how it works, proof only when real, comparison or data table, illustrative pricing, FAQ (5–8, short answers), final CTA, compact footer with the link mesh. Nav label for guides is "Technical resources", never "Blog".
8. **Compliance.** Canadian only (CASL, PIPEDA). Consent text and version stored with every lead. Canadian spelling, CAD. Secrets via environment only.
9. **Gates before push.** `npm run build && npm run check` must pass. Screenshots via `npm run shots` for any visual change.

## Layout

- `src/pages/` routes; `src/pages/api/lead.ts` is the only server route.
- `src/components/` QuoteForm (two-step), Estimator (illustrative budget), Diagram (sectional SVG), StatBand, Faq, Process.
- `data/` business, prices, cities, claims register.
- `scripts/check.mjs` publish gates; `scripts/screenshot.mjs` visual QA.
