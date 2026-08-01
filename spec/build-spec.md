# Build Spec — GetQuotd (getquotd.com)

*Brand: **Quotd** · Domain: **getquotd.com** (chosen 2026-08-01; run a USPTO/CIPO screen on "Quotd"/"GetQuotd" before spending on brand assets). Version 1.1. Status: agreed direction, pre-build. This document is the build prompt: anyone (human or agent) should be able to build the platform from this spec without further context.*

---

## 0. What we are building, in one paragraph

**Quotd (getquotd.com)**: a consumer-facing platform where homeowners get quotes from **specialists for unusual, high-skill home services** — limewash painting, venetian plaster, french drains, herringbone driveways, christmas light installation, specialty fencing, and ~100 niches over time — across North American cities. Programmatic SEO pages built on a **real local data layer** (climate, housing stock, permits, soil, licensed providers) generate organic demand; **verified lead capture** monetizes it. The moat compounds through four loops: proprietary quote/pricing data, claimed profiles + reviews, recurring contractor revenue, and AI-search citation. Rated 7.5/10 pre-build; the loops are the path to 9.

**Non-negotiable principle (the survival rule):** every published page must contain structured local data that changes the advice for that city. AI writes connective prose only — never the substance. A niche×city page without enough real data does not publish. This is the difference between an asset and a Google scaled-content-abuse deindexing.

---

## 1. Goals & metrics

| Horizon | Goal | Metric |
|---|---|---|
| 30 days post-launch | Indexation | ≥60% of published pages indexed (GSC) |
| 90 days | Demand signal | ≥500 organic sessions/mo; ≥20 verified leads total |
| 6 months | Monetization signal | ≥$1k/mo lead revenue OR 3 paying territory contractors |
| 12 months | Compounding | ≥50 claimed profiles; quote-data on ≥3 niches powering cost pages |

**Kill criteria (pre-committed):** <30% indexation at 90 days → architecture problem, stop scaling and fix. <$500/mo total revenue at month 12 with sales effort applied → freeze investment, run as portfolio. Owner (not the builder) may override with reasons written down.

---

## 2. Brand & voice

- Brand: **Quotd**, at **getquotd.com**. The name is the promise: *get quoted* for the jobs nobody seems to do. Tagline directions: *"Rare jobs. Real quotes."* / *"Get quoted for the job nobody else does."*
- The name aligns brand with product: the lead form IS a quote request, the site CTA everywhere is **"Get quoted"**, and Loop 1's proprietary pricing data publishes under the brand ("Quotd data: based on 214 real quotes in Toronto"). Cost pages are the brand's signature asset — lean into it.
- Canonical host: apex `https://getquotd.com` (www 301s to apex). All URLs in §3.2 hang off this root.
- Voice: a knowledgeable neighbor who happens to know every tradesperson in town. Plain, confident, specific. Never salesy, never "unlock your dream home," never exclamation points.
- We are on the **consumer's side**: pages say when a niche is overkill, when a job is DIY-able, when to wait for the right season. That honesty is the brand (and the E-E-A-T signal).
- Trademark rules: no manufacturer or platform brand names in the domain; "works with/for" phrasing when naming products; non-affiliation disclaimer in footer.

## 3. Architecture

### 3.1 Stack

- **Static-first generation**: Astro (preferred) or Next.js SSG. Pages are built from data at deploy time; no server rendering needed for content pages. Fast static pages are an SEO ranking input and an AI-crawler courtesy.
- **Database**: Supabase (Postgres). Tables: `niches`, `cities`, `providers`, `pages`, `leads`, `quotes`, `data_modules`. Row-level security on; leads table locked to service role.
- **Lead intake**: Supabase edge function — validates, verifies OTP, stamps metadata, writes lead, fires notification (email + optional webhook to CRM/Sheet).
- **OTP**: SMS via Twilio Verify (or MessageBird for CA coverage). Budget line item, not optional.
- **Hosting**: Cloudflare Pages or Vercel. Analytics: Plausible (privacy-safe, no cookie banner debt) + Google Search Console + Bing WMT.
- **Repo layout**: `/data` (niche/city/module JSON + pipelines), `/src` (site), `/spec` (this doc), `/pipelines` (data fetchers, scheduled).

### 3.2 URL scheme

```
/                                → brand home: what we do, niche directory, search
/{niche}/                       → niche hub (national): what it is, costs, when you need it
/{niche}/{city-state}/          → THE money page: local guide + providers + lead form
/{niche}/{city-state}/cost/     → cost guide (unlocks when quote data exists; else section on money page)
/pro/{provider-slug}/           → provider profile (claimable)
/guides/{topic}/                → editorial/data pieces that earn links
```

- City slugs: `austin-tx`, `toronto-on`. One page per niche×city; no neighborhood pages until a city page earns them (expansion gate, not default).
- Subfolders always; no subdomains; www or apex, pick one, 301 the other.
- Canada from day one: currency, units, spelling per country; CASL compliance (see §7). Skip Quebec/French at launch (deliberate scope cut, revisit later).

### 3.3 Page-count discipline (launch sequencing)

- Launch: **10 niches × 30–50 cities ≈ 300–500 pages**, plus ~15 hubs/guides.
- Expansion gate: a batch of new pages ships only when the previous batch hits ≥50% indexation and the niche shows lead flow ≥1/wk OR strong impression growth. Scale velocity follows crawl trust — never publish 20k pages into a cold domain.
- Every niche×city page passes the **publish gate**: ≥3 populated data modules + ≥1 named provider (or explicit "scarce market" data treatment) + passes the templated-content linter (see §5.4). Fails → stays draft/noindex.

## 4. Niche portfolio

### 4.1 Scoring rubric (score 1–5 each; launch the top 10 by total)

1. **Job value** — median project ≥$2k (leads worth ≥$40)
2. **Searchability** — consumers know and use the niche's name ("limewash", "french drain")
3. **Provider scarcity** — few pros per metro (weak SERPs, hungry lead buyers)
4. **Platform gap** — no dedicated Angi/Thumbtack/Bark category
5. **Durability** — need persists beyond a design trend
6. **Data richness** — we can wire ≥3 strong data modules to it

### 4.2 Launch-10 candidates (validate volumes with a keyword tool before final — the standing $100 check)

1. Limewash & mineral-paint finishes
2. Venetian plaster / roman clay / tadelakt (same cluster page family)
3. French drains & yard drainage
4. Christmas & holiday light installation
5. Radon mitigation
6. Herringbone & specialty-pattern driveways/paths
7. Specialty fencing (horizontal cedar, wrought iron restoration, deer/agricultural)
8. Land clearing / forestry mulching
9. Sauna & cold-plunge builds
10. EV charger installation

Expansion bench (to ~100, scored later): brick staining/german schmear, popcorn ceiling removal, foam insulation, stucco repair, copper gutters, slate/cedar roof repair, window restoration (historic), bat/wildlife exclusion, water well service, mobile welding, marine canvas, pond/water-feature builds, pergola/louvered roofs, heated driveways, dry stone walling, timber framing, cork/specialty flooring, soundproofing, wine cellars, dog fencing, greenhouse builds, chimney relining, lime mortar repointing, board-and-batten siding, shou sugi ban, epoxy garage floors, artificial turf, putting greens, bocce courts, outdoor kitchens, home elevators, dumbwaiters, laundry chutes, cold rooms, root cellars, storm shelters, murphy beds/custom built-ins, staircase rebuilds, ornamental plaster ceilings, antique hardware restoration…

### 4.3 Data model per niche

```json
{
  "id": "limewash",
  "cluster": "specialty-finishes",
  "consumer_names": ["limewash", "lime wash painting", "mineral paint"],
  "job_value_range_usd": [1500, 12000],
  "modules": ["climate_curing", "housing_age", "historic_districts", "providers", "cost"],
  "seasonal": {"window_rule": "temps 5–30C, low rain", "peak": "spring/fall"},
  "form_questions": ["surface (brick/render/drywall)", "interior/exterior", "sqft estimate", "timeline"],
  "rubric_scores": {"job_value": 4, "searchability": 5, "scarcity": 5, "gap": 5, "durability": 3, "data": 4}
}
```

## 5. The page system

### 5.1 Niche×city page anatomy (the money page)

Order matters — value first, form early but not obnoxious:

1. **H1 + straight answer block** — "Limewash painting in Toronto: what it costs, when to do it, and who actually does it." 2–3 sentences with the city's headline numbers inline.
2. **Local data band** — 3–5 stat tiles *derived from data modules* (e.g. "Application window: Apr–Oct", "38% of homes pre-1940", "4 verified specialists", "Typical project: $3.2k–$8.5k").
3. **Lead form** (right rail desktop / after data band mobile) — see §6.
4. **The local guide** — data-module sections (see 5.2), written as advice, not stats dumps.
5. **Providers** — named local specialists: license status, permit activity where available, Places rating, claim CTA.
6. **Cost section** — BLS-localized ranges at launch; replaced by our quote data as it accumulates ("based on N quoted projects" once N≥10).
7. **FAQ** — real questions (People-Also-Ask sourced), answered with local specifics. FAQPage schema.
8. **Honesty block** — when NOT to do this / DIY threshold / seasonal wait advice. (Differentiator; also the E-E-A-T tell.)

### 5.2 Data modules (the injection layer)

| Module | Source | Powers | Refresh |
|---|---|---|---|
| `climate_curing` | NOAA normals / Open-Meteo (free) | Application windows, freeze-thaw counts, humidity implications | Yearly |
| `rainfall_intensity` | NOAA Atlas 14 (free) | Drainage sizing guidance | Static |
| `soil` | USDA Web Soil Survey (free) | Clay % → drain design; frost-line depth → post/footing specs | Static |
| `housing_age` | Census ACS / StatCan (free) | Pre-1940 share → plaster/masonry/restoration relevance | Yearly |
| `home_value` | Zillow ZHVI CSVs (free) | ROI framing, cost contextualization | Quarterly |
| `permits` | City open-data portals; Shovels.ai API (paid, cheap) | Demand proof ("312 drainage permits last yr"), **provider discovery via permit-holder names**, "most active specialist" rankings | Monthly |
| `licenses` | State/provincial boards | Verified-badge layer, provider vetting | Monthly |
| `providers` | Places API + permits + licenses + manual curation | The provider sections | Monthly |
| `wages` | BLS OES API (free) | Labor-cost localization until quote data replaces it | Yearly |
| `frost_dates` | NOAA (free) | Seasonal install windows (lights, exterior finishes) | Static |
| `historic_districts` | NPS + municipal registries | Restoration niches; permit-requirement flags | Yearly |
| `quotes` (Loop 1) | Our own lead/quote pipeline | Real cost pages — the moat | Continuous |

Rule repeated for emphasis: a module renders only where it **changes the advice**. No weather widgets. No decoration.

### 5.3 Content generation rules

- Content = template skeleton + data modules + AI-written connective prose, **generated once, reviewed, then frozen** (regenerated only when data changes, not on a schedule).
- AI prose constraints: forbidden phrases list ("nestled", "vibrant", "look no further", "hidden gem", "transform your space", "elevate", every em-dash-heavy listicle tic); no city flattery ("Austin's unique charm"); every claim must trace to a data module or be cut; 6th–9th grade reading level; short sentences.
- Human pass: first 50 pages get a human edit to set the voice; a style-sample file then conditions all future generation; spot-check 10% of every batch.
- **Cross-page dedup linter (CI gate)**: shingle-overlap check across same-niche pages; >35% prose overlap between any two pages fails the build. This is the anti-doorway enforcement.

### 5.4 Publish gates (CI, automated)

1. ≥3 data modules populated with non-default values
2. ≥1 named provider OR scarce-market treatment (an honest "this is hard to find here" page with request-routing — only in metros with confirmed search volume)
3. Dedup linter pass
4. Schema validation (LocalBusiness/Service/FAQPage as applicable)
5. Internal links: ≥3 in, ≥3 out (niche hub, sibling cities, related niches)

## 6. Lead system

### 6.1 Form UX (two-step; project first, contact last)

- **Step 1 (commitment-free):** project details — niche-specific questions from `form_questions`, timeline (ASAP / 1–3mo / researching), property type. Progress indicator. No contact fields visible yet.
- **Step 2:** full name, email, phone, street address (autocomplete via Places), consent checkboxes. Submit → **SMS OTP verify** → thank-you with realistic expectation ("A specialist typically responds within 2 business days").
- Every lead auto-stamped: page URL, niche, city, UTM params, timestamp, IP country, form version. Titled `{niche} — {city}` for routing (per owner's convention).
- Anti-spam: OTP is the main gate; plus honeypot field + time-to-complete check. No CAPTCHA (conversion killer).

### 6.2 Lead schema

```json
{
  "id": "uuid", "niche": "limewash", "city": "toronto-on",
  "name": "", "email": "", "phone": "", "phone_verified_at": "",
  "address": "", "project": {"surface": "brick", "scope": "exterior", "sqft": "~1200", "timeline": "1-3mo"},
  "consent": {"tcpa_text_version": "v1", "casl": true, "granted_at": ""},
  "source": {"url": "", "utm": {}, "form_version": "v1"},
  "status": "new|routed|sold|dead", "sale": {"buyer": "", "price": null, "exclusive": true},
  "quote_followup": {"quoted_price": null, "hired": null}
}
```

`quote_followup` is Loop 1 — the pipeline that turns leads into proprietary cost data. Build the follow-up automation (email at +14 days: "did you get quotes? what range?" with a 30-second form) in v1, not later.

### 6.3 Routing & sales (owner-operated)

Concierge model at launch: leads land in Supabase + email notification + a simple admin table (Supabase-backed) with status tracking. Owner sells/routes manually. Self-serve contractor portal (credits, subscriptions) is Phase 3, only after manual sales prove pricing. **Anti-Bark commitments, non-negotiable:** leads sold exclusive or max-3, phone-verified only, dead-lead credit honored without a fight.

## 7. Compliance

- **TCPA (US):** express-consent checkbox with clear language naming who may contact them and how (call/text), stored with timestamp + text version. No pre-checked boxes.
- **CASL (Canada):** separate express-consent for email; sender ID + unsubscribe in every message; consent records retained.
- Privacy policy + terms at launch (template-based, attorney review when revenue justifies). Cookie posture: no third-party ad cookies at launch → no consent banner needed with Plausible.
- Provider claims discipline: "licensed" only when verified against a board, with verification date shown. "Verified specialist" badge criteria published on a public page.

## 8. UI/UX direction — "does not look AI-made"

The AI-site look is a recognizable dialect in 2026, and consumers smell it. We build the opposite: **an editorial reference site** — closer to a well-designed field guide or a good newspaper's service journalism than to a SaaS landing page.

### 8.1 Banned (the AI-slop checklist — CI-enforceable where possible)

- Purple/indigo→blue gradients; glassmorphism; floating blob illustrations
- Centered hero + one-liner + two pill buttons + "Trusted by 10,000+" logos
- Emoji as bullets or in headings; ✨ anywhere; rocket ships
- Perfectly symmetric 3-card feature rows with icon-title-blurb
- Inter/Poppins-for-everything typography; gradient text
- Stock photos of smiling contractors with clipboards; AI-generated imagery of any kind
- Fake urgency/social proof ("3 people are viewing this"), invented review counts
- "Elevate", "seamless", "effortless", "unlock" in UI copy

### 8.2 The look we build instead

- **Typography-led, print-inspired**: a serif display face with character for headings (e.g. Tiempos/Source Serif/Fraunces class), a workhorse humanist sans for body/UI (e.g. Söhne/Inter is fine *for body only*), tabular figures for all data. Big type scale contrast; generous line-length discipline (65–75ch).
- **Color**: paper-warm neutrals + one trade-craft accent (deep green, oxblood, or ochre — pick one, stick to it), full dark-mode variant. Color communicates state (verdicts, availability), never decoration.
- **Data presented as data**: real tables with rules, stat tiles with sources footnoted, small maps where geography matters. The Levels.fyi/Wirecutter/StreetEasy register: dense, confident, sourced. Every number links to "where this comes from."
- **Real photography only**: provider portfolio photos (rights secured at claim time), permit-verified job photos, honest "no photo yet" states. No imagery beats fake imagery.
- **Asymmetric editorial grid**: 12-col with deliberate imbalance (guide 8 / form-rail 4); section rhythm varies down the page; pull-quotes from the honesty block.
- **Micro-signals of humanity**: bylines with a real editorial entity, "last verified {date}" stamps on data, changelogs on cost pages, hand-set footnotes. These are also E-E-A-T signals — the design IS the SEO here.
- **Motion**: near none. Instant page loads, no scroll-triggered fades, no parallax. Speed reads as credibility.
- Accessibility: WCAG AA contrast, full keyboard nav on forms, visible focus states. Non-negotiable.

Deliverable order for design: design tokens + one niche×city page at full polish first (the template every page inherits) → hub page → home page. Home page last, on purpose — the money pages are the product.

## 9. SEO & AI-search spec

- Titles: `{Niche} in {City}: Costs, Season & Local Specialists ({Year})` — year only where data actually refreshes.
- Schema: Service + FAQPage on money pages; LocalBusiness on provider profiles; Dataset on cost pages once quote-powered; Organization sitewide.
- Internal linking: hub↔city mesh, sibling-city bands, cross-niche "same specialist" links (limewash↔venetian plaster). No footer link farms.
- Sitemaps segmented per niche (indexation diagnosis per segment in GSC); `llms.txt` + clean per-page JSON endpoints (`/{niche}/{city}/data.json`) — we *want* AI engines reading and citing the data layer.
- Noindex: zero-provider drafts, thin batches, all `/pro/` pages until claimed or data-rich.
- Monitoring: GSC weekly review ritual; indexation % per batch is THE early-warning metric; prune/consolidate losers quarterly without mercy.
- Link earning (not "building"): the permit-data and quote-data studies are the linkable assets ("Christmas light installation costs, from 400 real quotes") — pitch to local press and trade press per niche, twice a year.

## 10. Build phases

| Phase | Scope | Exit criteria |
|---|---|---|
| **P0 — Validate** | Keyword-tool pass on launch-10 niches × 50 metros; kill/keep each niche | Final launch list, volumes documented |
| **P1 — Foundation** | Repo, Astro scaffold, Supabase schema, data pipelines for 6 core modules, design tokens + money-page template | One niche×city page at full polish with live data |
| **P2 — Launch batch** | 10 niches × 30–50 cities generated through publish gates; lead system live with OTP + consent; admin table | 300–500 pages live, first leads flowing |
| **P3 — Loops** | Quote-followup automation; claim-your-profile flow; cost pages unlock; GSC-driven pruning | First quote-powered cost page; first claimed profile |
| **P4 — Scale** | Niche batches 11–30 per expansion gate; territory subscriptions; press pitch cycle | Gated by P2/P3 metrics, not calendar |

---

*End of spec. Change control: material changes to §0 (survival rule), §3.3 (sequencing), §6.3 (anti-Bark commitments), or kill criteria require owner sign-off in writing. Everything else is builder's discretion within the spirit of the doc.*
