# gtaicf.ca — project context for AI-assisted sessions

This folder is a standalone site: the same contractor as gtahelicalpiles.ca (one company, one phone, one inbox), here building insulated concrete form (ICF) foundations and full-height walls with its own crew across Toronto, Peel, Halton, Hamilton, Guelph and the Niagara corridor. It is **not** a Quotd page family. The repository-root `CLAUDE.md` and `spec/` describe Quotd (a quotes marketplace) and do not apply here. Read `README.md` in this folder first. The code is a clone of `sites/gtahelicalpiles`; keep the two in step when a shared component changes.

## Rules that do apply

1. **First-party voice.** The business forms, reinforces and pours the walls. Copy says "we". Never marketplace framing.
2. **Every claim has a source.** Numeric, engineering, regulatory and price claims come from `data/` files that carry `sources` and `retrieved_at`, or from the owner's documents recorded in `data/claims-register.md`. If it cannot be sourced, it is reworded or cut. AI writes connective prose only.
3. **Credential words are gated.** "Certified", "guaranteed", "licensed", "insured" render only when `data/business.json` carries the backing field with a date. `npm run check` enforces this.
4. **Brand-agnostic.** The crew installs whichever ICF system the local supplier stocks. The site never names one system as ours; it says the system is named on the quote and its CCMC evaluation report goes in the permit package. Performance figures (R-value, STC) are quoted as the manufacturer's tested values with the EPS thickness, nominal separated from effective.
5. **Prices are illustrative.** Every price is an illustrative range per square foot of wall from `data/prices.json`, labelled as such, with the firm price after a site review. Never a bare number without that framing. One source of truth; never hard-code a price in a page.
6. **City pages must differ.** A city page needs at least three facts that are true only of that city (geology and bearing, water and drainage, permit authority and fees, climate) and under 35% prose overlap with any other city page. Stoney Creek, Ancaster and Dundas are sections of Hamilton. Service area: Toronto, Peel, Halton, Hamilton, Guelph and the Niagara corridor to Fort Erie; West Lincoln and Wainfleet are "also serving" without pages. The list lives in `data/business.json`. City data modules under `data/cities/` are shared with the pile site and are trade-independent; do not fork them.
7. **Design system.** `src/styles/global.css` is the system: Inter Tight display, Inter body, ink primary buttons, one moss-green accent for small marks only, radii 8/12/16, hairline borders, tabular figures, no raw font sizes. Banned: gradient heroes, glassmorphism, emoji bullets, symmetric icon-card rows, fake social proof, stock or AI imagery, "elevate/seamless/effortless/unlock" copy, scroll animation.
8. **Landing-page anatomy** (adapted from the owner's thesis): slim header (logo, phone, one CTA), H1 under 10 words, subhead, primary CTA above the fold, form in the right rail on desktop and after the data band on mobile with a sticky Call | Quote bar, benefits, how it works, proof only when real, comparison or data table, illustrative pricing, FAQ (5–8, short answers), final CTA, compact footer with the link mesh. Nav label for guides is "Technical resources", never "Blog".
9. **Compliance.** Canadian only (CASL, PIPEDA). Consent text and version stored with every lead. Canadian spelling, CAD. Secrets via environment only.
10. **Gates before push.** `npm run build && npm run check` must pass. Screenshots via `npm run shots` for any visual change.

## Layout

- `src/pages/` routes; `src/pages/api/lead.ts` is the only server route.
- `src/components/` QuoteForm (two-step), Estimator (wall area to range), Diagram (ICF wall section), StatBand, Faq, Process.
- `data/` business, prices, cities (shared modules), content (city pages), guides, claims register, owner review.
- `scripts/check.mjs` publish gates; `scripts/screenshot.mjs` visual QA; `scripts/polish-content.mjs` wording pass; `scripts/vercel-setup.mjs` deploy.
