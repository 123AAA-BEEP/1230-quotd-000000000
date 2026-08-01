# Money-Page Spec v1 — the niche×city landing page

*The build contract for the P1 template. Supersedes `build-spec.md` §5.1's section list (per `ADDENDUM-2026-08-01.md` A8). Everything here inherits the survival rule (§0), publish gates (§5.4 as amended), the §8 design system, the §8.1 banned list, and the claim-classes rule (Addendum A2).*

Order matters: value first, form early but not obnoxious. Desktop is a 12-col asymmetric grid (guide 8 / form rail 4, form card sticky); mobile is single column with the form after the data band plus a sticky bottom "Get quoted" bar.

---

## Sections, in order

### 1. Breadcrumb · H1 · straight-answer block
- Breadcrumb (BreadcrumbList schema): Home → {Niche} → {City}.
- H1 uses the niche's measured consumer person-form term: **"Limewash painters in Toronto"** (never "…painting services").
- 2–3 plain sentences answering the query immediately, city numbers inline: typical project range, the application/install window, the one local fact that most changes the advice. Featured-snippet bait and instant relevance in one block.

### 2. Local data band — 3–5 stat tiles
- Tiles derive from data modules and are footnoted to sources (tap/hover reveals "where this comes from"). Examples: typical project cost (wage-localized until quote data unlocks), application window (climate), share of pre-1940 masonry stock (housing age), permits pulled last year (permits, where wired).
- No provider tiles, no manufactured counts (Addendum A1/A2). Every tile must change the advice; a tile that would render identically in every city is cut.

### 3. Quote form ("Get quoted")
- **Step 1 (commitment-free):** niche-specific project questions from `form_questions` (e.g. surface, interior/exterior, approximate size, timeline: ASAP / 1–3 months / researching). Progress indicator. No contact fields visible.
- **Step 2:** name, email, phone, street address (autocomplete), TCPA/CASL consent checkboxes (versioned text, timestamped).
- Submit → validate → write to Supabase `leads` → email notification to leads@getquotd.com. No SMS OTP at launch (Addendum A3); honeypot + time-to-complete + format validation.
- Form microcopy (policy claims only): "Free, no obligation." · "Up to 3 quotes from specialists." Post-submit sets honest expectations: "A specialist typically responds within 2 business days" appears **only after** we can measure it; until then: "We'll confirm by email and get your request to the right specialists."
- No roster meta-copy anywhere on or around the form (A1).

### 4. Suitability verdict — "should you even do this here?"
- The honesty block, promoted high: when this work is right for this city's housing, when it's overkill, the cheaper/permanent alternative (cross-niche link, e.g. limewash → brick staining), the DIY threshold.
- This is the E-E-A-T carrier and the voice of the brand. Pull-quote treatment per §8.2.

### 5. Climate & timing
- 12-month application/install window strip + only the climate facts that alter decisions (freeze-thaw counts, curing temperature band, humidity/rain pattern) rendered as advice: "book exterior work for May–June; windows close fast after October."
- No weather widgets, no decoration (survival rule).

### 6. Cost section
- Real table: project type × localized typical range; cost-driver list (surface condition, access, prep). Launch source: BLS/StatCan wage localization with methodology stated.
- Flips to proprietary data at ≥10 accumulated quotes for the city: "Quotd data: based on N quoted projects in {City}" (claim class 3 with provenance). At that point the `/cost/` sub-page unlocks per §3.2.

### 7. Neighborhoods / service area
- Only neighborhoods with *differentiating* data ("Riverdale's century brick takes mineral finishes well; postwar Etobicoke stock is mostly painted brick — different prep"). Service-area schema.
- Never a bare neighborhood name list — that is doorway-page smell and fails the survival rule.

### 8. Process — what happens after you submit
- 4–5 niche-specific steps (site visit → sample panel → firm quote → weather window). Sets expectations that make leads convert to jobs downstream.

### 9. FAQ — 5–8 questions from the three-tier bank
- **Tier A — universal** ("what is limewash?"): answered once on the niche hub; city pages *link*, never duplicate (dedup linter enforces).
- **Tier B — localized-template** ("how long does it last?" / "what does it cost?"): answers parameterized by module data, genuinely different per city.
- **Tier C — city-specific** ("do I need heritage-district approval in {City}?"): permits/bylaws modules.
- Money pages render mostly B + C. Sourcing pipeline: People-Also-Ask per niche → owner GSC query mining (the torontolimewash export seeds limewash) → forum/Reddit phrasing → real lead questions over time. FAQPage schema.

### 10. Related-links band
- Sibling cities (nearest first), adjacent niches (shared-specialist logic: limewash ↔ venetian plaster ↔ brick staining), the niche hub, relevant guides (product rankings, cost deep-dives). Satisfies the ≥3-in/≥3-out gate; no footer link farms.

### 11. Sources & freshness footer
- "Climate: Environment Canada normals 1991–2020 · Housing: StatCan 2021 census · verified {date}" + last-verified stamp; changelog link once cost pages unlock.
- Machine-readable twin at `/{niche}/{city}/data.json`; listed in `llms.txt`. We want AI engines citing the data layer.

---

## Hero imagery (Addendum A4)
- Aesthetic niches: one real, captioned material/finish photo per niche as a band within/below the hero. Functional niches: sectional line diagram. Fallback: pure typographic hero. Never full-bleed banners, stock, or AI imagery; never the LCP bottleneck.

## Per-page technical kit
- Title: `{Consumer term} in {City}: Cost, Season & Who Does It ({Year})` — year only where data refreshes. Meta description written from the straight-answer block.
- Schema: Service + FAQPage + BreadcrumbList (page), Organization (sitewide). No AggregateRating anywhere until real reviews exist.
- Static HTML; the form is the only JS island. Green Core Web Vitals; H1 or hero image as LCP, budgeted.
- Canonical to self; per-niche segmented sitemap membership; OG image = clean typographic card (niche × city), one template sitewide.
- Analytics events (Plausible): `form_start`, `form_step2`, `form_submit`, plus outbound-guide clicks. Conversion is measurable per section variant later.

## What is deliberately absent
- Provider names, counts, or roster meta-talk (A1). Testimonials/star ratings until real. Stock or AI imagery. Chat widgets, exit popups, urgency counters, fake precision of any kind (A2).

## Publish gates (as amended)
1. ≥3 data modules populated with non-default values that alter on-page advice
2. ≥1 sellable provider identified **in the database** (or owner-approved scarce-market exception)
3. Cross-page dedup linter: <35% same-niche prose overlap
4. Schema validation passes
5. Internal links: ≥3 in, ≥3 out
6. Claim-classes lint: every numeric claim carries a source annotation (class 2) or measured provenance (class 3)
