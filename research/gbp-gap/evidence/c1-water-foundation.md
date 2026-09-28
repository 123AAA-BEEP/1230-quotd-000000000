# GBP-gap evidence: C1, water, foundation, below-grade and structural earthwork (GTA)

- cluster: Water, foundation, below-grade and structural earthwork. GTA first; Toronto is the proof metro.
- retrieved_at: 2026-09-28
- rows: 35 blocks (26 SERVICE or USE, 9 OUTCOME), plus deferred and excluded lines.

## Method

- **Repo read:** spec §0–§4; Addendum A11–A12; `nichecandidates.csv`; `taxonomy-premium-v1.csv`; `p0-report.md`; and the prior evidence files for french drains, egress windows, trenchless, yard drainage, radon, the SERP audits and herringbone Track 2.
- **Official pages fetched directly** (toronto.ca is reachable this session): toronto.ca, ontario.ca, peelregion.ca, mississauga.ca, markham.ca, richmondhill.ca, kitchener.ca, trca.ca.
- **Prices:**
  - Fetched GTA cost pages from OCM Excavation, RenoHouse, Buildoreno, Toronto Basement Underpinning (TBU), CNB Renovation, Canada Waterproofers, DryShield, Alasya and Conterra.
  - HomeStars, RenoNext, HomeGuide, Sprinkler Co. and Aquamaster came only as search-result text (snippets). Those are marked "(snippet)".
  - Prices are in C$ and exclude HST unless the source says otherwise.
- **GBP beliefs** were checked against a PlePer export of **4,043 GBP categories**, pulled 2026-09-28. It uses en-GB display names, so "Landscape Gardener" is likely "Landscaper" in Canada.
  - The list has **no category** for basement, underpinning, foundation repair, radon, sewer, erosion, grading, egress or house raising.
  - The only near-exact matches are "Waterproofing service" (`waterproofing_company`) and "Drainage Service" (`drainage_service`).
  - "Foundation" (`foundation`) is the charitable-foundation category.
- **Permit counts** are my computation from City of Toronto Open Data, "Building Permits – Active Permits" (CSV refreshed 2026-09-28, 203,904 rows, https://open.toronto.ca/dataset/building-permits-active-permits/).
  - Case-insensitive keyword match on DESCRIPTION.
  - Deduplicated to the base permit number, which drops companion plumbing, drain and HVAC permits.
  - Window: APPLICATION_DATE from 2025-09-01 to 2026-08-31.
  - Treat the counts as lower bounds: descriptions that don't use the keyword are missed, and cleared permits are not in this dataset.
  - The dataset also carries BUILDER_NAME (51 distinct builders on the year's underpinning permits). That is an internal provider-discovery hook only, per Addendum A1.

### Task verifications

**1. Toronto Basement Flooding Protection Subsidy** (https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/, page modified 2026-06-18)

- **Current amounts** (work on or after 2025-11-12). Each item pays 80% of cost up to the cap:

  | Item | Cap |
  |---|---|
  | Backwater valve | C$1,600 per device, max 2 |
  | Sump pump | C$2,250 |
  | Sump battery backup | C$300 |
  | Weeping-tile severance or capping | C$400 |
  | Home plumbing assessment | C$500 |
  | **Total per property** | **C$6,650** |

- **Before 2025-11-12:** C$1,250 / C$1,750 / C$400, for C$3,400 total.
- **Eligibility:**
  - Registered owner of a single-family home, duplex, triplex or fourplex.
  - Backwater valves need a building permit and an inspection.
  - The contractor must hold a City business licence: T94 Plumbing, T92 Plumbing & Heating, T87 Drain or T85 Building Renovator.
  - Downspouts must be disconnected or exempted.
  - No tax arrears; original invoices required.
  - Apply within 2 years of the work (1 year for older work).
  - Lifetime cap per device type; first-come, first-served.

**2. Other GTA flood programs**

| Municipality | Backwater valve | Sump pump / weeping-tile disconnection | Other | Total or notes | Source |
|---|---|---|---|---|---|
| Mississauga (City) | Storm-lateral valve C$1,500 | Sump C$6,000; capping C$1,000 | Downspout C$125 each, up to C$500 | Up to C$7,500; pre-approval required since 2025-02-12 | https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/apply-for-a-basement-flooding-prevention-rebate/ |
| Peel Region (Brampton, Mississauga, Caledon) | Sanitary valve 60% up to C$1,500 incl. tax | — | — | Once per 10 years | https://peelregion.ca/water/pipes-downspouts/backwater-valve-rebate |
| Markham | Indoor C$1,750; outdoor C$2,000 | Disconnection + sump C$5,000 | Storm lateral reline C$2,500 | Flood-prone areas only; permit by 2027-04-30 | https://www.markham.ca/neighbourhood-services/water-sewer/basement-flooding-and-sewer-back-prevention |
| Richmond Hill | Up to C$1,500 | — | — | Permit required | https://www.richmondhill.ca/en/online-services/backwater-valve-subsidy-program.aspx |
| Halton (Oakville, Burlington, Milton) | 50% up to C$675 | 100% up to C$5,000 | Downspout 100% up to C$500; lateral lining 50% up to C$2,000 | (snippet) | https://www.halton.ca/repository/basement-flooding-prevention-subsidy-application |
| Hamilton (3P) | Up to C$2,000 with a pre-qualified contractor, else C$500 | — | — | (snippet) | https://www.hamilton.ca/home-neighbourhood/home-property/basement-flooding/protective-plumbing-program |
| Vaughan | 50% up to C$750 | — | — | Unverified: aggregator source, official page returned 403 | https://claimrebate.ca/basement-flooding-subsidy-vaughan |

Durham (Oshawa, Whitby, Ajax) was not checked.

**3. OBC ceiling height for a second suite**

- A basement second unit may have **1.95 m (6'4¾")** over the required floor area, including the route to the exit (https://www.ontario.ca/page/add-second-unit-your-house, updated 2023-01-30).
- Clearance under beams and ducts is **1.85 m** (https://renohouse.ca/blog/basement-lowering-toronto-ceiling-height). That page attributes the rule to "OBC 9.10", which is likely a mis-citation; verify the article.
- The 2024 OBC (in force 2025) extends 6'5" to suites in new homes (http://www.suiteadditions.com/blog/2024/10/7/the-new-2024-ontario-building-code-what-you-need-to-know-for-second-suites-multiplex-conversions-and-detached-garden-suites).

**4. Price per linear foot**

- **Underpinning:** C$350–700 (https://buildoreno.ca/blog/basement-underpinning-cost-toronto/) and C$350–550 (https://ocmexcavation.com/basement-underpinning-cost-toronto-gta/).
- **Exterior waterproofing:**
  - C$250–650 by wall depth (https://ocmexcavation.com/basement-waterproofing-excavation-cost-toronto-2026/)
  - C$120–400+ (https://canadawaterproofers.com/how-much-does-basement-waterproofing-cost-2026/)
  - C$150–350 (https://www.dryshield.ca/blog/april-2026-flooding-crack-injection/)

## Limitations

- **Search budget:** the session-wide WebSearch budget (200 calls) ran out mid-run. Later rows relied on direct fetches, publisher sitemaps and the permit dataset. Consequences:
  - No Reddit threads or news articles were captured as demand signals.
  - Four prices are EST: slope stabilization, sagging floors, rain gardens and garage foundations.
  - The Halton, Hamilton and Vaughan amounts are not confirmed on the official pages.
- **Contractor cost content is uneven and partly AI-written.** Errors found this pass:
  - OCM says Toronto owners own the sewer lateral to the main. toronto.ca says owners are responsible from the property line in.
  - RenoHouse cites "OBC 9.10" for ceiling heights.
  - RenoHouse gives "~19% of GTA homes" above the radon guideline, against Toronto's ~7% in the P0 audit.
  - Strongbasements misstates the federal Multigenerational Home Renovation Tax Credit; I dropped it, and the CRA page URL I tried returned 404.
  - RenoHouse's 2024–2025 flood-event dates are unverified.
  - Use contractor figures as ranges, never as facts on consumer pages.
- **Competitor signal:** GTA contractors already run programmatic long-tail pages:
  - RenoHouse: about 2,500 URLs, including `{city}/{service}` pages (https://renohouse.ca/sitemap-archive.xml).
  - OCM: `{service}-{city}` pages (https://ocmexcavation.com/page-sitemap.xml).
  - claimrebate.ca: a subsidy aggregator (https://claimrebate.ca/basement-flooding-subsidy-ontario).

## Niche rows

### basement-lowering-underpinning
- name: underpinning contractors / basement lowering
- status: EXISTING(basement-lowering-underpinning)
- level: SERVICE
- tier: T1
- gta_price_cad: C$350–700/lin ft; semi (~100 lf) C$35k–55k, detached C$45k–75k; overall C$35k–140k; engineer C$3.5k–8k — https://buildoreno.ca/blog/basement-underpinning-cost-toronto/; https://ocmexcavation.com/basement-underpinning-cost-toronto-gta/
- gbp_belief: PARTIAL — nearest: "Excavating contractor" (also "Concrete contractor"; "Foundation" is the charity category)
- gta_drivers: Pre-1925 Toronto basements measure 5'10"–6'8" against the 1.95 m suite minimum. 853 Toronto permit projects mentioning underpinning were applied for Sep 2025–Aug 2026 (387 detached, 235 semi) — https://renohouse.ca/blog/basement-lowering-toronto-ceiling-height; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permits (count, ward, builder); OBC ceilings; semi party-wall consent (https://strongbasements.com/party-wall-agreement-underpinning-toronto/); O. Reg. 406/19 clean-fill disposal C$40–80/yd³ (https://ocmexcavation.com/soil-disposal-reg-406-19-cost-ontario-2026/); housing_age
- season: year-round; excavation best Apr–Nov; permits 6–12 weeks
- web: bench footing, legal basement apartment, separate entrance, egress window, interior waterproofing, multiplex conversion, low basement ceiling
- queries: "underpinning contractors toronto", "basement lowering cost toronto", "lower basement 2 feet cost", "underpinning semi-detached toronto"
- verdict: STRONG — T1, no GBP category, permit data changes advice by city

### bench-footing
- name: bench footing (basement lowering without full underpinning)
- status: NEW
- level: SERVICE
- tier: T1
- gta_price_cad: detached C$30k–60k, semi C$32k–56k, row C$42k–54k; "20–35% cheaper" than underpinning — https://renohouse.ca/blog/bench-footing-cost-toronto-detached-semi; https://buildoreno.ca/blog/basement-underpinning-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Excavating contractor"
- gta_drivers: Bench footing is the fallback when a semi or row neighbour won't sign a party-wall agreement. The new ledge sits wholly inside the owner's lot line, but the perimeter stays at the old height (benches on three sides of a semi, two on a row house) — https://strongbasements.com/party-wall-agreement-underpinning-toronto/; https://renohouse.ca/blog/bench-footing-cost-toronto-detached-semi
- data_hooks: permits (9 named bench-footing projects/yr vs 853 underpinning); structure-type mix; OBC ceiling rule
- season: year-round (interior dig)
- web: underpinning, party wall agreement, low basement ceiling, interior waterproofing, basement apartment
- queries: "bench footing vs underpinning", "bench footing cost toronto", "lower basement without underpinning"
- verdict: GOOD — distinct query cluster; best as sibling section of underpinning hub

### separate-entrance-walkout
- name: basement walkout / separate entrance contractors
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: side entrance C$18k–28k, walkout C$12k–22k; walkout C$8k–18k incl. engineering + permit — https://cnbrenovation.ca/separate-entrance-for-basement/; https://torontobasementunderpinning.ca/basement-walkout/
- gbp_belief: PARTIAL — nearest: "Excavating contractor" (else "General contractor")
- gta_drivers: This is the job that makes a legal suite possible. A stairwell within 0.6 m of a lot line may need a Committee of Adjustment variance. Toronto logs 509 permit projects/yr mentioning a basement walkout (about 24% are new houses), plus 154 walk-up or side-entrance projects — https://torontobasementunderpinning.ca/basement-walkout/; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permit counts; zoning setbacks/variances; secondary-suite (586/yr) and multiplex (482/yr) permit trends
- season: Apr–Nov excavation
- web: underpinning, legal basement apartment, egress window, retaining wall, stairwell drain, backwater valve
- queries: "separate entrance basement toronto cost", "walkout basement toronto", "side door basement entrance permit"
- verdict: STRONG — suite-driven demand, permit data, no GBP category

### exterior-foundation-waterproofing
- name: exterior basement waterproofing (excavate, membrane, weeping tile)
- status: EXISTING(basement-waterproofing)
- level: SERVICE
- tier: T2
- gta_price_cad: C$250–400/lin ft (7 ft wall) to C$400–650 (9 ft or underpinned); one 30 ft semi wall C$8.5k–13.5k; detached perimeter C$25k–55k; C$120–400+/lin ft — https://ocmexcavation.com/basement-waterproofing-excavation-cost-toronto-2026/; https://canadawaterproofers.com/how-much-does-basement-waterproofing-cost-2026/
- gbp_belief: EXACT — nearest: "Waterproofing service" (`waterproofing_company`)
- gta_drivers: Narrow Toronto side yards force hand-digging, which adds C$50–100/lin ft. Underpinned walls need shoring (+C$4k–10k). Ontario sewer-backup insurance endorsements exclude groundwater seepage — https://ocmexcavation.com/basement-waterproofing-excavation-cost-toronto-2026/; https://renohouse.ca/blog/sewer-backup-insurance-coverage-toronto
- data_hooks: soil; housing_age; lot width; permits (155 waterproofing projects/yr); no subsidy covers membranes
- season: Apr–Nov; demand peaks after thaw and summer storms
- web: weeping tile replacement, wet basement, efflorescence, foundation crack repair, parging, window well drainage
- queries: "exterior waterproofing cost toronto per foot", "basement leaking one wall", "dig down waterproofing toronto"
- verdict: BORDERLINE — exact GBP category and dense local firms; feed outcome pages

### interior-waterproofing
- name: interior basement waterproofing (drain channel, membrane, sump)
- status: EXISTING(basement-waterproofing)
- level: SERVICE
- tier: T2
- gta_price_cad: C$80–120/lin ft; Toronto full perimeter C$14k–18k (semi ~C$13k); interior systems average C$8k–15k — https://torontobasementunderpinning.ca/guide/interior-basement-waterproofing-cost-ontario/; https://www.homestars.com/home-constructions-renovations/price-guides/basement-waterproofing-cost-toronto (snippet)
- gbp_belief: EXACT — nearest: "Waterproofing service"
- gta_drivers: Toronto prices run 20–30% above smaller Ontario cities. The system drops to C$50–80/lin ft when done during underpinning, which suits semis and rows too tight to excavate — https://torontobasementunderpinning.ca/guide/interior-basement-waterproofing-cost-ontario/
- data_hooks: Toronto sump subsidy (C$2,250 + C$300 battery); underpinning-permit co-occurrence; lot width
- season: year-round
- web: sump pump, underpinning, wet basement, efflorescence, crack injection, battery backup
- queries: "interior waterproofing cost toronto", "interior vs exterior waterproofing", "basement membrane system"
- verdict: BORDERLINE — exact category, franchise-heavy; keep as comparison guide

### weeping-tile-replacement
- name: weeping tile replacement (clay foundation drains)
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: drain-only C$90–140/lin ft, or C$135–210 at 7 ft; full perimeter C$12k–20k; sections C$2k–5k (snippet) — https://ocmexcavation.com/basement-waterproofing-excavation-cost-toronto-2026/; https://ocmexcavation.com/french-drain-installation-cost-toronto-2026/; https://aquamasterplumbing.com/post/what-does-weeping-tile-installation-cost-in-toronto/
- gbp_belief: PARTIAL — nearest: "Waterproofing service" / "Drainage Service"
- gta_drivers: Pre-1980 homes used clay tile, which lasts 25–40 years and silts up in Toronto clay (snippet). Many older homes tie weeping tile into the sewer; Toronto pays up to C$400 to sever and cap it — https://renohouse.ca/blog/weeping-tile-guide; https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- data_hooks: housing_age (29.3% of Toronto dwellings pre-1961, StatCan via repo module); severance subsidy; soil
- season: Apr–Nov
- web: exterior waterproofing, sump pump, weeping tile disconnection, drain camera, french drain
- queries: "weeping tile replacement cost toronto", "clay weeping tile collapsed", "weeping tile clogged signs"
- verdict: GOOD — distinct symptom queries; sub-hub of waterproofing

### backwater-valve-installation
- name: backwater valve installers
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$1,800–3,500 gross (permit C$230–320); interior C$2,000–3,500+, exterior C$2,700–4,500+ — https://renohouse.ca/blog/backwater-valve-cost-toronto-installation; https://canadawaterproofers.com/how-much-does-basement-waterproofing-cost-2026/
- gbp_belief: PARTIAL — nearest: "Plumber"
- gta_drivers: Toronto pays 80% up to C$1,600 per valve (max 2), with a building permit and a City-licensed contractor required. Caps vary across the GTA: Peel C$1,500, Markham C$1,750–2,000, Richmond Hill C$1,500, Halton C$675 — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/; https://peelregion.ca/water/pipes-downspouts/backwater-valve-rebate; https://www.markham.ca/neighbourhood-services/water-sewer/basement-flooding-and-sewer-back-prevention
- data_hooks: subsidy-by-municipality table; Toronto permits (281 backwater projects/yr); flood study-area map; insurance norms
- season: year-round; spikes after July–Aug storms
- web: sewer backup, sump pump, flood subsidy, sewer lateral lining, plumbing assessment
- queries: "backwater valve installation toronto", "backwater valve subsidy mississauga", "backwater valve cost"
- verdict: STRONG — subsidy data differs per city; no dedicated GBP category

### sump-pump-weeping-disconnection
- name: sump pump installation and weeping tile disconnection
- status: EXISTING(sump-pump-systems)
- level: SERVICE
- tier: T3
- gta_price_cad: new pit + pump C$1,200–3,500; with battery backup C$2,500–5,500; premium C$4,500–7,000+ — https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Plumber" / "Waterproofing service"
- gta_drivers: Municipal programs cover much of the cost:
  - Toronto: C$2,250 pump + C$300 battery + C$400 severance.
  - Mississauga: C$6,000 sump + C$1,000 capping, pre-approval required.
  - Markham and Halton: up to C$5,000 for disconnection plus sump.
  Sources: https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/; https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/apply-for-a-basement-flooding-prevention-rebate/
- data_hooks: subsidy table; permits (51 sump projects/yr); downspout status
- season: Mar–Apr thaw; summer storms
- web: backwater valve, weeping tile, battery backup, sump running constantly, basement flooding
- queries: "sump pump installation toronto cost", "weeping tile disconnection subsidy", "install sump pump old house"
- verdict: GOOD — subsidy module; plumbing overlap limits scarcity

### french-drain
- name: french drain installers
- status: LAUNCH-10
- level: SERVICE
- tier: T3
- gta_price_cad: yard drain (2–3 ft deep) C$55–95/lin ft; interception drain (4–5 ft) C$85–135; full perimeter C$14k–32k; basic C$24–39/lin ft (snippet) — https://ocmexcavation.com/french-drain-installation-cost-toronto-2026/; https://sprinklercompany.ca/blog/how-much-does-a-french-drain-cost-in-toronto-and-gta/
- gbp_belief: PARTIAL — nearest: "Drainage Service" (`drainage_service`)
- gta_drivers: Toronto yard drainage generally must discharge on-lot. A municipal storm tie adds C$2.5k–6.5k with permit. The Toronto SERP already shows 8 real waterproofing firms with dedicated pages — https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/; data/validation/evidence/serp-audit-a.md
- data_hooks: soil; rainfall intensity; discharge rules; restoration C$40–95/lin ft
- season: May–Nov
- web: yard drainage, catch basin, regrading, window well drainage, dry well, weeping tile
- queries: "french drain installation toronto", "french drain cost ontario", "who installs french drains"
- verdict: STRONG — launch-10 stands; expect dense Toronto local competition

### yard-drainage-catch-basins
- name: yard drainage contractors (catch basins, soak pits, swales)
- status: EXISTING(yard-drainage-systems)
- level: SERVICE
- tier: T3
- gta_price_cad: single catch basin C$1,800–3,500; two basins + soak pit C$4.5k–7.5k; full system C$7.5k–14k — https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/
- gbp_belief: EXACT — nearest: "Drainage Service" (ambiguous: drain-cleaning firms share it)
- gta_drivers: Sanitary discharge is prohibited. In-yard catch basins typically need no Toronto permit, but a storm connection adds C$2k–6k. Mississauga bills a stormwater charge of C$64–219/yr with no residential credit — https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/; https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/stormwater-charge/
- data_hooks: discharge rules by city; stormwater charges; soil; rainfall
- season: May–Nov
- web: french drain, regrading, negative grading, dry well, downspout extension, permeable driveway
- queries: "standing water in backyard toronto", "catch basin installation cost", "yard drainage contractor"
- verdict: GOOD — merge as sub-use under french drain, per P0

### egress-windows
- name: egress window installers
- status: LAUNCH-10
- level: SERVICE
- tier: T3
- gta_price_cad: new foundation cut C$5.5k–11k per opening (one Vaughan invoice C$9,580); C$3.5k–8k nationally — https://ocmexcavation.com/egress-window-installation-cost-toronto-2026/; https://www.homestars.com/windows-doors/price-guides/basement-egress-window-cost (snippet)
- gbp_belief: PARTIAL — nearest: "Window installation service"
- gta_drivers: OBC 9.9.10 minimums: 0.35 m² opening, no dimension under 380 mm, sill no higher than 1.5 m, well clearance 760 mm. Ontario's second-unit guide says 0.38 m², so verify which governs. Toronto logs 95 egress or window-well projects/yr — https://ocmexcavation.com/egress-window-installation-cost-toronto-2026/; https://www.ontario.ca/page/add-second-unit-your-house; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: OBC dimensions; permit counts; secondary-suite permits (586/yr)
- season: Apr–Nov
- web: window well, legal basement bedroom, underpinning, separate entrance, water in window well
- queries: "egress window cost toronto", "basement bedroom window size ontario", "cut foundation for bigger window"
- verdict: STRONG — launch-10 stands; code data is the page

### foundation-settlement-helical-piers
- name: foundation settlement repair (helical piers, footing repair)
- status: EXISTING(helical-piers)
- level: SERVICE
- tier: T2
- gta_price_cad: helical piers C$1,500–2,500/pier (Toronto, snippet); localized footing repair C$8k–25k; wall anchors C$5k–12k; US fallback USD 2,000–4,000/pier (snippet) — https://renonext.com/costs/foundation-repair/toronto; https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/; https://homeguide.com/costs/helical-piers-cost
- gbp_belief: PARTIAL — nearest: "Pile driving service" (`pile_driver`) / "Structural engineer"
- gta_drivers: The Toronto market deepens foundations rather than pinning them. Only 16 permit projects/yr mention helical piles or micropiles, against 853 for underpinning — https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permit counts; soil (clay); engineer letters
- season: year-round
- web: foundation cracks, underpinning, sinking porch, garage foundation, house levelling
- queries: "foundation settling repair toronto", "helical piers cost ontario", "house sinking one corner"
- verdict: BORDERLINE — low GTA incidence; section under the settlement outcome

### parging-stone-foundation
- name: parging and stone (rubble) foundation repair
- status: TAXONOMY-ROW
- level: SERVICE
- tier: T3
- gta_price_cad: parging C$6–12/sq ft; full re-parge C$3.5k–7k; rubble walls: exterior waterproofing C$140–290/lin ft, crack repair C$1.2k–3k — https://alasya-construction.ca/parging-cost-toronto-what-to-budget-in-2026/; https://conterrafoundation.ca/blog/rubble-foundation-repair-guide-for-hamilton-heritage-homes/
- gbp_belief: PARTIAL — nearest: "Masonry contractor" / "Stucco contractor"
- gta_drivers: Pre-1940s rubble and fieldstone foundations are common in Hamilton heritage areas (Ancaster, Dundas, Flamborough). Lime mortar, not modern cement, is preferred so the walls can breathe and flex — https://conterrafoundation.ca/blog/rubble-foundation-repair-guide-for-hamilton-heritage-homes/
- data_hooks: housing_age; heritage districts; freeze-thaw (climate module). Taxonomy rows: Parge coat restoration, Foundation stone restoration, Fieldstone wall restoration
- season: May–Oct
- web: lime mortar repointing, efflorescence, exterior waterproofing, underpinning, crumbling foundation
- queries: "stone foundation repair toronto", "rubble foundation repointing", "parging cost toronto"
- verdict: GOOD — Track-2 heritage slice; parging alone is low ticket

### sewer-lateral-trenchless
- name: sewer lateral replacement / trenchless lining
- status: EXISTING(trenchless-sewer-repair)
- level: SERVICE
- tier: T2
- gta_price_cad: open cut C$8k–25k (downtown C$28k–35k); CIPP lining C$6k–18k; pipe bursting C$10k–22k; spot repair C$3.5k–8k — https://ocmexcavation.com/sewer-line-replacement-cost-toronto-2026/; https://renohouse.ca/blog/pipe-bursting-trenchless-vs-open-cut-toronto
- gbp_belief: PARTIAL — nearest: "Plumber" (no sewer category; "Sewage Disposal Service" is septic-type)
- gta_drivers: Toronto owners are responsible from the property line in; OCM claims to the main, so trust toronto.ca. Clay and Orangeburg pipe dates from 1945–72 (OCM). Markham (C$2,500) and Halton (50%, up to C$2,000) subsidize relining — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/how-to-prevent-basement-flooding/; https://www.markham.ca/neighbourhood-services/water-sewer/basement-flooding-and-sewer-back-prevention
- data_hooks: subsidy table; housing_age; drain permits
- season: year-round (failure-driven)
- web: backwater valve, drain camera, sewer backup, tree roots, lead service
- queries: "sewer line replacement cost toronto", "trenchless sewer repair toronto", "tree roots in sewer pipe"
- verdict: BORDERLINE — P0 cut stands (saturated SERP); adjacency via subsidies

### lead-water-service-replacement
- name: lead water service replacement
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: private side C$5k–9k trenchless, C$7k–12k open cut; C$4.5k–8.5k and C$6k–14k — https://renohouse.ca/blog/lead-water-service-cost-toronto-replacement; https://ocmexcavation.com/utility-trenching-water-gas-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Plumber" / "Utilities contractor"
- gta_drivers: Homes built before the mid-1950s may have lead services. Just under 16,000 City-owned lead pipes remain. An owner who commits to replacing their side gets the City side done, which the City aims to finish within 12 weeks — https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/; https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/priority-lead-water-service-replacement-program/
- data_hooks: priority program; capital-replacement schedule; housing_age; water-service permits (38 rows/yr, not deduplicated)
- season: Apr–Nov open cut; program year-round
- web: galvanized water line, sewer lateral, multiplex conversion, lead water test, water service upgrade
- queries: "lead pipe replacement toronto cost", "replace lead water service toronto", "do I have lead pipes toronto"
- verdict: GOOD — City program data, pre-1955 housing stock, category gap

### ravine-slope-stabilization
- name: ravine lot slope stabilization
- status: EXISTING(erosion-control)
- level: SERVICE
- tier: T2
- gta_price_cad: EST C$20k–150k+ (no slope-specific GTA source found). Anchors: armour stone C$180–320/lin ft, engineering stamps C$1.2k–3.5k — https://ocmexcavation.com/armour-stone-vs-interlocking-vs-concrete-retaining-wall-gta/
- gbp_belief: PARTIAL — nearest: "Excavating contractor" / "Geotechnical engineer"
- gta_drivers: Toronto's ravine bylaw requires a permit to change grade, place fill, build or replace retaining walls, or harm any tree regardless of size. TRCA permits under O. Reg. 41/24 cover slopes, valleys and floodplains — https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/; https://trca.ca/planning-permits/
- data_hooks: ravine-protection map; TRCA, CVC and Conservation Halton regulated areas; tree bylaw (≥30 cm)
- season: summer–fall build; months of permit lead time
- web: retaining walls, armour stone, erosion control, tree permit, geotechnical report, drainage
- queries: "ravine lot erosion toronto", "slope stabilization contractor ontario", "TRCA permit retaining wall"
- verdict: GOOD — regulation-born probe hub; thin demand, EST price

### retaining-walls-armour-stone
- name: engineered retaining walls / armour stone
- status: EXISTING(retaining-walls)
- level: SERVICE
- tier: T2
- gta_price_cad: armour stone C$180–320/lin ft; segmental block C$90–180; poured concrete C$200–400; C$65–220 per sq ft of wall face, by tier — https://ocmexcavation.com/armour-stone-vs-interlocking-vs-concrete-retaining-wall-gta/; https://renohouse.ca/services/exterior/retaining-wall-installation
- gbp_belief: PARTIAL — nearest: "Retaining wall supplier" (a supplier category) / "Landscape Gardener"
- gta_drivers: Engineering and a permit kick in around 1 m of height (OCM) or 1.2 m (RenoHouse); verify the OBC designated-structure rule. Toronto logs 67 permit projects/yr mentioning retaining walls, many under the "Designated Structures" permit type — https://ocmexcavation.com/armour-stone-vs-interlocking-vs-concrete-retaining-wall-gta/; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permit counts; ravine/TRCA overlays; frost depth; soil
- season: Apr–Nov
- web: ravine slope, walkout, regrading, wall drainage, armour stone, interlock
- queries: "armour stone retaining wall cost toronto", "retaining wall permit toronto", "retaining wall leaning"
- verdict: GOOD — Track-2 craft slice (armour stone, engineered walls)

### permeable-driveway
- name: permeable paver driveways
- status: EXISTING(permeable-pavers)
- level: USE
- tier: T2
- gta_price_cad: permeable interlock C$24–38/sq ft vs C$16–25 standard; EST C$12k–27k for 500–700 sq ft — https://khanscapes.ca/interlocking-driveway-cost-toronto/ (repo evidence, 2026-08-01)
- gbp_belief: PARTIAL — nearest: "Paving contractor"
- gta_drivers: Toronto's Chapter 918 requires permeable paving on front-yard parking pads. Kitchener credits permeable pavers against up to 45% of its stormwater fee. Mississauga's charge (C$64–219/yr) offers no residential credit — https://www.toronto.ca/legdocs/municode/1184_918.pdf; https://www.kitchener.ca/en/water-and-environment/stormwater-credits.aspx; https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/stormwater-charge/
- data_hooks: Ch. 918 licences; stormwater charges and credits; Ottawa Rain Ready rebate; frost depth
- season: May–Oct
- web: herringbone driveway, front yard parking pad, catch basin, rain garden, driveway drainage
- queries: "permeable driveway toronto", "front yard parking pad permit toronto", "permeable pavers cost"
- verdict: GOOD — fold into herringbone/clay (LAUNCH-10) as a Track-2 sub-use

### rain-garden-cistern
- name: rain gardens and cisterns
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: not retrieved — EST C$1k–5k per rain garden, C$5k–15k per buried cistern (search budget exhausted; verify)
- gbp_belief: PARTIAL — nearest: "Landscape designer" / "Rainwater tank supplier"
- gta_drivers: Incentives are city-specific:
  - Kitchener: credits of 20–45% of the stormwater fee, depending on litres captured.
  - Ottawa: rebates up to C$5,000.
  - Mississauga: no residential credit.
  - Toronto: no residential program found this pass.
  Sources: https://www.kitchener.ca/en/water-and-environment/stormwater-credits.aspx; https://ottawa.ca/en/living-ottawa/environment-conservation-and-climate/protecting-ottawas-waterways/rain-ready-ottawa/rain-ready-ottawa-rebates; https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/stormwater-charge/
- data_hooks: stormwater credits/rebates; soil infiltration; rainfall intensity
- season: spring/fall install
- web: permeable driveway, downspout disconnection, french drain, catch basin, dry well
- queries: "rain garden installation ontario", "rainwater cistern cost", "stormwater credit kitchener"
- verdict: BORDERLINE — weak GTA incentives, low ticket; data edge in Kitchener-Waterloo only

### crawlspace-encapsulation
- name: crawl space encapsulation
- status: EXISTING(crawlspace-encapsulation)
- level: SERVICE
- tier: T3
- gta_price_cad: C$5k–15k typical; vapour barrier only C$3.5k–6.5k; with water management C$12k–20k+ — https://renohouse.ca/blog/crawl-space-encapsulation-toronto-2026-complete-guide
- gbp_belief: PARTIAL — nearest: "Waterproofing service" / "Insulation Contractor"
- gta_drivers: Most GTA crawl spaces are partial ones and shallow stone-foundation areas in pre-1950 East York, the Beaches, the Junction, Roncesvalles and Cabbagetown; postwar bungalows are simpler jobs — https://renohouse.ca/blog/crawl-space-encapsulation-toronto-2026-complete-guide
- data_hooks: housing_age; radon; permits (43 crawl-space rows/yr, not deduplicated)
- season: year-round
- web: radon mitigation, mould, rear addition, crawl space to basement, sump pump
- queries: "crawl space encapsulation toronto", "crawl space moisture old house", "crawl space vapour barrier cost"
- verdict: BORDERLINE — GTA housing stock is mostly full basements

### radon-mitigation
- name: radon mitigation contractors
- status: LAUNCH-10
- level: SERVICE
- tier: T3
- gta_price_cad: C$2,500–5,000 all-in; long-term test kit ~C$60 — https://renohouse.ca/blog/radon-levels-gta-19-percent-above-guideline
- gbp_belief: NONE — nearest: "Environmental consultant" / "Home inspector" (no radon category among 4,043)
- gta_drivers: Recorded as an adjacency only. Toronto shows ~7% of buildings elevated (P0 audit), against RenoHouse's "~19% of GTA homes" (conflict; verify). The guideline is 200 Bq/m³ — data/validation/evidence/serp-audit-a.md; https://renohouse.ca/blog/radon-levels-gta-19-percent-above-guideline
- data_hooks: C-NRPP roster; Health Canada survey; basement-finishing permits
- season: test Oct–Apr; mitigate year-round
- web: crawl space, sub-slab depressurization, basement finishing, underpinning, real-estate disclosure
- queries: "radon mitigation toronto", "radon test ontario", "radon system cost"
- verdict: STRONG — launch-10; GBP NONE confirms the gap

### load-bearing-wall-removal
- name: load-bearing wall removal and beam installation
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: bare minimum C$8k–11k; steel W-beam (16–20 ft span) C$12k–18k; with utilities and finishes C$22k–35k; P.Eng C$1.5k–4k — https://renohouse.ca/blog/load-bearing-wall-removal-toronto-2026-complete-guide
- gbp_belief: NONE — nearest: "Structural engineer" / "Steel erector" (the job falls to "General contractor")
- gta_drivers: Toronto logs 215 permit projects/yr mentioning load-bearing walls. Houses built 1900–1940 in the Beaches, Riverdale, Cabbagetown and Leslieville add knob-and-tube wiring, plaster-and-lath and asbestos checks — https://open.toronto.ca/dataset/building-permits-active-permits/; https://renohouse.ca/blog/load-bearing-wall-removal-toronto-2026-complete-guide
- data_hooks: permit counts; designated substance survey (O. Reg. 278/05); housing_age
- season: year-round
- web: steel beam, open concept, sagging floor, underpinning (point loads), asbestos survey
- queries: "remove load bearing wall toronto cost", "steel beam installation toronto", "load bearing wall permit toronto"
- verdict: GOOD — no GBP category, permit data; heavy general-contractor competition

### sagging-floor-joist-repair
- name: sagging floor and joist repair
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: not retrieved — EST C$2.5k–12k. Anchors: LVL beam C$4k–7k; surface floor levelling alone C$400–3,500 — https://renohouse.ca/blog/load-bearing-wall-removal-toronto-2026-complete-guide; https://renohouse.ca/services/flooring/floor-leveling-toronto
- gbp_belief: NONE — nearest: "Carpenter" / "Structural engineer"
- gta_drivers: Pre-1960s Toronto houses frequently have settling foundations and uneven subfloors — https://renohouse.ca/services/flooring/floor-leveling-toronto
- data_hooks: housing_age; beam/post permits; engineer letters
- season: year-round
- web: load-bearing wall, teleposts, underpinning, settlement, floor levelling
- queries: "sagging floor repair toronto", "sister floor joists cost", "floors sloping old house"
- verdict: BORDERLINE — diffuse demand, no price data; section under settlement

### porch-pier-repair
- name: sinking porch and pier repair
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: structural repair or partial rebuild C$2k–8k; full rebuild C$5k–15k+; heritage porch with permit C$8.8k–18k — https://renohouse.ca/services/exterior/porch-repair
- gbp_belief: PARTIAL — nearest: "Deck builder" / "Carpenter" / "Concrete contractor"
- gta_drivers: Heritage Conservation District properties need a Toronto heritage permit for porch work, and matched-profile millwork drives the heritage premium — https://renohouse.ca/services/exterior/porch-repair
- data_hooks: HCD boundaries (housing module); housing_age; frost depth; porch permits (keyword too noisy; mostly new builds)
- season: May–Oct
- web: sinking front steps, heritage porch, concrete steps, helical piers, railings
- queries: "porch repair toronto", "front porch sinking", "porch rebuild cost toronto"
- verdict: BORDERLINE — heritage-porch slice possible; otherwise commodity carpentry

### garage-foundation-repair
- name: garage foundation and slab repair
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$5k–25k, anchored on localized footing repair C$8k–25k. Demolition alternative C$3k–12k; slab removal C$1.5k–4k — https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/; https://ocmexcavation.com/garage-demolition-cost-toronto-gta-2026/
- gbp_belief: PARTIAL — nearest: "Garage builder" / "Concrete contractor"
- gta_drivers: Garage demolitions are frequently paired with laneway or garden suite builds; Toronto logged 570 garden-suite projects in the year — https://ocmexcavation.com/garage-demolition-cost-toronto-gta-2026/; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: laneway and garden suite permits; demolition permits; designated substance survey
- season: May–Oct
- web: garage demolition, laneway suite, garden suite, concrete slab, helical piers
- queries: "garage foundation repair", "garage floor cracked sinking", "rebuild detached garage toronto"
- verdict: EXCLUDE — thin repair demand; suite builds absorb the budget

### house-lifting
- name: house raising / new foundation under an existing house
- status: NEW
- level: SERVICE
- tier: T1
- gta_price_cad: C$200k–450k structural (2.5–3.5× underpinning); engineering C$18k–42k; insurance for lift work C$8k–18k — https://renohouse.ca/blog/underpinning-vs-excavation-new-foundation
- gbp_belief: NONE — nearest: "General contractor" (only "Removals company" exists for moving)
- gta_drivers: House lifting is chosen for failing 19th-century rubble foundations, depth gains over 48" and heritage façades (Cabbagetown, Don Vale). No Toronto permit in the year matched raise/lift phrasing — https://renohouse.ca/blog/underpinning-vs-excavation-new-foundation; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permits; heritage districts; housing_age
- season: spring–fall
- web: underpinning, rubble foundation, heritage home, crawl space to basement, multiplex conversion
- queries: "house lifting toronto", "raise house new foundation cost", "replace foundation old house"
- verdict: BORDERLINE — T1 but rare; section under the underpinning hub

### basement-flooding
- name: stop basement flooding (flood protection)
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: EST C$5k–10k package (valve + sump + severance) before subsidy; component prices per rows above — https://renohouse.ca/blog/backwater-valve-cost-toronto-installation; https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Water damage restoration service" (cleanup intent) / "Plumber"
- gta_drivers: Toronto's cap rose from C$3,400 to C$6,650 per property for work since 2025-11-12, including a new C$500 plumbing assessment. The City studied 67 flood areas from 2006 to 2024. Mississauga pays up to C$7,500 — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/; https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-program/
- data_hooks: subsidy table (7 municipalities); flood study-area map; permit counts
- season: spring thaw; July–Aug storms
- web: backwater valve, sump pump, downspout disconnection, sewer backup, weeping tile, exterior waterproofing, insurance
- queries: "how to stop basement flooding toronto", "basement flooding subsidy toronto 2026", "basement flooded after rain"
- verdict: STRONG — own page; subsidy data changes the advice per city

### sewer-backup
- name: sewer backup into the basement
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: backwater valve C$1,800–3,500; lateral lining C$6k–18k if the pipe is failing — https://renohouse.ca/blog/backwater-valve-cost-toronto-installation; https://ocmexcavation.com/sewer-line-replacement-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Plumber" / "Water damage restoration service"
- gta_drivers: In Ontario, sewer-backup cover is an optional endorsement, and insurers discount or require backwater valves (specific carrier claims unverified). Blocked private drains are the owner's responsibility — https://renohouse.ca/blog/sewer-backup-insurance-coverage-toronto; https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/
- data_hooks: flood study areas; subsidies; insurance norms
- season: summer storms
- web: backwater valve, sewer lateral, drain camera, basement flooding, insurance claim
- queries: "sewage backup basement toronto", "sewer backup insurance ontario", "floor drain backing up"
- verdict: GOOD — FAQ/section of the backwater hub; the insurance angle is distinct

### low-basement-ceiling
- name: basement ceiling too low (legal second suite)
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: the fix is underpinning (C$35k–140k) or a bench footing (C$30k–60k) — https://buildoreno.ca/blog/basement-underpinning-cost-toronto/; https://renohouse.ca/blog/bench-footing-cost-toronto-detached-semi
- gbp_belief: NONE — nearest: "General contractor" / "Excavating contractor"
- gta_drivers: Ontario allows 1.95 m over the required area and exit route in a basement second unit, and 1.85 m under beams and ducts. The 2024 OBC extends 6'5" to suites in new homes. Pre-1925 Toronto basements run 5'10"–6'8" — https://www.ontario.ca/page/add-second-unit-your-house; http://www.suiteadditions.com/blog/2024/10/7/the-new-2024-ontario-building-code-what-you-need-to-know-for-second-suites-multiplex-conversions-and-detached-garden-suites; https://renohouse.ca/blog/basement-lowering-toronto-ceiling-height
- data_hooks: OBC rules; secondary-suite (586/yr) and multiplex (482/yr) permits; housing_age
- season: year-round
- web: underpinning, bench footing, legal basement apartment, separate entrance, egress window
- queries: "basement ceiling height ontario legal", "how to make basement ceiling higher", "minimum ceiling height basement apartment"
- verdict: STRONG — guide-level page feeding the T1 hub

### wet-basement-efflorescence
- name: wet basement / white powder on walls (efflorescence)
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: interior system C$8k–15k (snippet); exterior C$150–350/lin ft; crack injection C$750–1,500 — https://www.homestars.com/home-constructions-renovations/price-guides/basement-waterproofing-cost-toronto; https://www.dryshield.ca/blog/april-2026-flooding-crack-injection/
- gbp_belief: EXACT — nearest: "Waterproofing service"
- gta_drivers: Efflorescence signals moisture moving through masonry. The advice: grade the ground to fall at least 5 cm per metre for the first metre, and discharge downspouts at least 1.5 m from the wall — https://www.dryshield.ca/problems/removing-white-chalky-efflorescence-from-basement-walls/
- data_hooks: soil; housing_age; downspout bylaw
- season: spring thaw peak
- web: exterior waterproofing, interior waterproofing, negative grading, parging, crack injection, dehumidifier
- queries: "white powder on basement walls", "damp basement walls toronto", "basement smells musty"
- verdict: GOOD — diagnostic guide routing to T2 jobs

### foundation-cracks-settling
- name: foundation cracks and settling
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: crack injection C$500–1,200 per crack (up to C$1,800–2,400+ per crack from another contractor); carbon-fibre straps C$3k–8k; wall anchors C$5k–12k; footing repair C$8k–25k — https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/; https://canadawaterproofers.com/how-much-does-basement-waterproofing-cost-2026/
- gbp_belief: PARTIAL — nearest: "Waterproofing service" / "Structural engineer"
- gta_drivers: An engineer's assessment (C$500–1.5k) decides between injection and structural repair. Pre-1960s Toronto stock often shows settlement — https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/; https://renohouse.ca/services/flooring/floor-leveling-toronto
- data_hooks: soil; housing_age; permit counts (helical 16/yr)
- season: spring (thaw reveals leaks)
- web: crack injection, helical piers, underpinning, bowing wall, sagging floor, sinking porch
- queries: "foundation crack repair toronto", "is this foundation crack serious", "house settling cracks"
- verdict: GOOD — triage guide routing to helical piers, underpinning and waterproofing

### negative-grading
- name: water pooling against the foundation (negative grading)
- status: NEW
- level: OUTCOME
- tier: DEFER(C$1,200–4,000)
- gta_price_cad: regrading C$1.2k–4k; adding a catch basin C$1.8k–3.5k — https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Landscape Gardener" / "Excavating contractor"
- gta_drivers: Toronto makes owners responsible for flooding from poor lot drainage and tells them to grade away from the foundation — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/; https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/how-to-prevent-basement-flooding/
- data_hooks: downspout bylaw; soil; rainfall intensity
- season: May–Oct
- web: lot regrading, french drain, catch basin, window well, downspout extension, wet basement
- queries: "yard slopes toward house", "regrading around foundation cost", "water pooling next to house"
- verdict: BORDERLINE — section under french drain / yard drainage

### water-in-window-well
- name: water in window well
- status: NEW
- level: OUTCOME
- tier: DEFER(C$400–2,000)
- gta_price_cad: drain tie-in to weeping tile C$400–1,200; new well C$800–2,000 — https://ocmexcavation.com/window-well-excavation-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Waterproofing service"
- gta_drivers: Wells must drain to weeping tile or daylight, not pool against the foundation. A failed clay tile under the well is a likely cause in older stock (EST) — https://ocmexcavation.com/egress-window-installation-cost-toronto-2026/
- data_hooks: egress permit counts; soil; housing_age
- season: spring thaw; storms
- web: egress window, window well cover, weeping tile, french drain, basement flooding
- queries: "water in window well basement", "window well drain clogged", "window well filling with water"
- verdict: BORDERLINE — FAQ under egress (LAUNCH-10)

### sump-running-constantly
- name: sump pump running constantly
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: replacement pump C$450–1,200; battery backup C$1.2k–2.5k; system with backup C$2.5k–5.5k — https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- gbp_belief: PARTIAL — nearest: "Plumber"
- gta_drivers: Toronto's subsidy now covers a C$300 battery backup and requires downspouts to be disconnected, which removes one common inflow — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- data_hooks: subsidy; soil/groundwater; downspout status
- season: Mar–Apr thaw; storms
- web: sump pump, battery backup, downspout disconnection, negative grading, exterior waterproofing
- queries: "sump pump running constantly", "sump pump keeps running no rain", "sump pump cycling every minute"
- verdict: BORDERLINE — FAQ/diagnostic under the sump row

### sinking-front-steps
- name: sinking front steps
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: typical post-war concrete step/slab repair C$1.4k–4.8k; full porch rebuild C$5k–15k+ — https://renohouse.ca/services/exterior/porch-repair
- gbp_belief: PARTIAL — nearest: "Concrete contractor" / "Masonry contractor"
- gta_drivers: Porches on Heritage Conservation District properties need a Toronto heritage permit before rebuilding — https://renohouse.ca/services/exterior/porch-repair
- data_hooks: HCDs; frost depth; housing_age
- season: May–Oct
- web: porch repair, mudjacking, concrete steps, railing, helical piers
- queries: "front steps sinking", "concrete steps pulling away from house", "replace front steps cost toronto"
- verdict: BORDERLINE — low ticket; section under the porch row

## Web map

- **Hub A: basement headroom (T1).** Shared specialists: underpinning/basement contractors, who also sell walkouts, egress windows and interior waterproofing.
  - Spokes: underpinning, bench footing, house lifting, separate entrance/walkout, egress windows (LAUNCH-10).
  - Outcome: low basement ceiling.
  - Links out to basement-suite legalization, multiplex and garden suite (Addendum A12 bench).
- **Hub B: basement water (T2).** Shared specialists: waterproofers, often the same firms as Hub A.
  - Spokes: exterior waterproofing, interior waterproofing, weeping tile, parging/stone foundation, crack injection (deferred).
  - Outcomes: wet basement/efflorescence, foundation cracks.
- **Hub C: flood protection and services (T3, subsidy-driven).** Shared specialists: City-licensed drain and plumbing contractors (Toronto licences T87, T92, T94).
  - Spokes: backwater valve, sump pump + disconnection, downspout disconnection and plumbing assessment (both deferred), sewer lateral (P0 cut), lead service.
  - Outcomes: basement flooding, sewer backup, sump running constantly.
- **Hub D: lot water and earth.** Shared specialists: drainage/excavation contractors and hardscapers.
  - Spokes: french drain (LAUNCH-10), yard drainage/catch basins, regrading (deferred), permeable driveway (→ herringbone, LAUNCH-10), rain garden/cistern, retaining walls, ravine slope.
  - Outcomes: negative grading, water in window well.
- **Hub E: structure.** Shared specialists: structural engineers (P.Eng letters) and underpinning contractors.
  - Spokes: helical piers/settlement, load-bearing wall/beam, sagging floors, porch/pier, garage foundation, house lifting.
  - Outcomes: foundation cracks/settling, sinking front steps.
- **Cross-links:**
  - Underpinning ↔ interior waterproofing (usually done together).
  - Egress ↔ window well ↔ french drain.
  - Backwater valve ↔ sewer lateral ↔ lead service (the same front-yard dig).
  - Radon (LAUNCH-10) ↔ crawl space ↔ underpinning (sub-slab work).

## Deferred (low ticket)

- **Downspout disconnection:** EST under C$500. Toronto makes it mandatory under Property Standards §629-20 and gives up to C$500 aid to eligible low-income seniors. Mississauga rebates C$125 per downspout — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/mandatory-downspout-disconnection/; https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/apply-for-a-basement-flooding-prevention-rebate/
- **Foundation crack injection (single crack):** C$500–1,500 — https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/; https://www.dryshield.ca/blog/april-2026-flooding-crack-injection/
- **Drain camera inspection / plumbing assessment:** price not retrieved. Toronto now subsidizes 80% of an assessment, up to C$500 — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- **Window well install or replacement:** C$800–2,000 per well — https://ocmexcavation.com/window-well-excavation-cost-toronto-2026/
- **Lot regrading:** C$1,200–4,000 — https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/
- **Sump pump replacement:** C$450–1,200 — https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- **Sump battery backup:** C$1,200–2,500; Toronto pays up to C$300 — https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- **Dry well:** C$800–1,800 — https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- **Floor levelling (self-levelling underlayment):** C$400–3,500 — https://renohouse.ca/services/flooring/floor-leveling-toronto
- **Mudjacking / polyurethane lifting of steps and walks:** no GTA price retrieved (search budget).

## Excluded (commodity / exact GBP / red ocean)

- **Flood cleanup / water damage restoration:** exact GBP category ("Water damage restoration service"); insurer-routed emergency work.
- **Drain cleaning / snaking:** exact categories ("Plumber", "Drainage Service"); low-ticket commodity.
- **General plumbing / re-piping:** exact category ("Plumber"). Keep only the lead-service slice.
- **Basement finishing / renovation:** red ocean per Addendum A12. Enter only via suite legalization and the headroom hub.
- **General excavation and demolition:** exact categories ("Excavating contractor", "Demolition contractor").
- **Septic systems:** exact category ("Septic tank service"); rural, off the GTA core.
- **Mould remediation:** restoration trade, insurer- and health-routed; outside this cluster.
- **Generic interlock and landscaping:** exact categories ("Paving contractor", "Landscape Gardener"); platform-locked. Keep only the permeable slice.
- **Structural engineering and home inspection:** exact categories ("Structural engineer", "Home inspector"); professional services, not quote jobs.

## Sources

**Official and public data**
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-program/
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/how-to-prevent-basement-flooding/
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/mandatory-downspout-disconnection/
- https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/
- https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/priority-lead-water-service-replacement-program/
- https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/
- https://www.toronto.ca/legdocs/municode/1184_918.pdf (via repo herringbone evidence)
- https://open.toronto.ca/dataset/building-permits-active-permits/ (API: https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=building-permits-active-permits)
- https://www.ontario.ca/page/add-second-unit-your-house
- https://trca.ca/planning-permits/
- https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/apply-for-a-basement-flooding-prevention-rebate/
- https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/stormwater-charge/
- https://peelregion.ca/water/pipes-downspouts/backwater-valve-rebate
- https://www.markham.ca/neighbourhood-services/water-sewer/basement-flooding-and-sewer-back-prevention
- https://www.richmondhill.ca/en/online-services/backwater-valve-subsidy-program.aspx
- https://www.halton.ca/repository/basement-flooding-prevention-subsidy-application (snippet)
- https://211ontario.ca/service/95021513/halton-public-works-enhanced-basement-flooding-prevention-subsidy-program/ (snippet)
- https://www.hamilton.ca/home-neighbourhood/home-property/basement-flooding/protective-plumbing-program (snippet)
- https://www.kitchener.ca/en/water-and-environment/stormwater-credits.aspx
- https://ottawa.ca/en/living-ottawa/environment-conservation-and-climate/protecting-ottawas-waterways/rain-ready-ottawa/rain-ready-ottawa-rebates (via repo herringbone evidence)
- https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=E&SearchText=toronto&GENDERlist=1&STATISTIClist=1%2C4&DGUIDlist=2021A00053520005&HEADERlist=20%2C3 (via `data/modules/housing/toronto-on.json`)
- https://pleper.com/index.php?do=tools&sdo=gmb_categories&go=1&lang=en&country=38 (GBP category list, 4,043 rows)

**GTA cost and contractor pages (fetched)**
- https://buildoreno.ca/blog/basement-underpinning-cost-toronto/
- https://ocmexcavation.com/basement-underpinning-cost-toronto-gta/
- https://ocmexcavation.com/basement-waterproofing-excavation-cost-toronto-2026/
- https://ocmexcavation.com/french-drain-installation-cost-toronto-2026/
- https://ocmexcavation.com/catch-basin-drainage-cost-toronto-2026/
- https://ocmexcavation.com/sump-pump-installation-cost-toronto-2026/
- https://ocmexcavation.com/egress-window-installation-cost-toronto-2026/
- https://ocmexcavation.com/window-well-excavation-cost-toronto-2026/
- https://ocmexcavation.com/sewer-line-replacement-cost-toronto-2026/
- https://ocmexcavation.com/utility-trenching-water-gas-cost-toronto-2026/
- https://ocmexcavation.com/armour-stone-vs-interlocking-vs-concrete-retaining-wall-gta/
- https://ocmexcavation.com/garage-demolition-cost-toronto-gta-2026/
- https://ocmexcavation.com/soil-disposal-reg-406-19-cost-ontario-2026/
- https://ocmexcavation.com/post-sitemap.xml ; https://ocmexcavation.com/page-sitemap.xml
- https://renohouse.ca/blog/basement-lowering-toronto-ceiling-height
- https://renohouse.ca/blog/bench-footing-cost-toronto-detached-semi
- https://renohouse.ca/blog/backwater-valve-cost-toronto-installation
- https://renohouse.ca/blog/sewer-backup-insurance-coverage-toronto
- https://renohouse.ca/blog/pipe-bursting-trenchless-vs-open-cut-toronto
- https://renohouse.ca/blog/lead-water-service-cost-toronto-replacement
- https://renohouse.ca/blog/crawl-space-encapsulation-toronto-2026-complete-guide
- https://renohouse.ca/blog/radon-levels-gta-19-percent-above-guideline
- https://renohouse.ca/blog/load-bearing-wall-removal-toronto-2026-complete-guide
- https://renohouse.ca/blog/underpinning-vs-excavation-new-foundation
- https://renohouse.ca/blog/toronto-basement-flooding-history-2013-2018 (read; event dates unverified, not used in rows)
- https://renohouse.ca/services/exterior/porch-repair
- https://renohouse.ca/services/exterior/retaining-wall-installation
- https://renohouse.ca/services/flooring/floor-leveling-toronto
- https://renohouse.ca/sitemap-archive.xml
- https://torontobasementunderpinning.ca/basement-walkout/
- https://torontobasementunderpinning.ca/guide/foundation-repair-cost-ontario/
- https://torontobasementunderpinning.ca/guide/interior-basement-waterproofing-cost-ontario/
- https://cnbrenovation.ca/separate-entrance-for-basement/
- https://www.renoduck.com/separate-entrance-to-basement-cost/ (read; C$2.5k–10k looks US-generic, not used)
- https://strongbasements.com/party-wall-agreement-underpinning-toronto/
- https://strongbasements.com/multigenerational-home-renovation-tax-credit-eligibility-benefits/ (read; tax-credit figures contradicted, not used)
- https://canadawaterproofers.com/how-much-does-basement-waterproofing-cost-2026/
- https://www.dryshield.ca/blog/april-2026-flooding-crack-injection/
- https://www.dryshield.ca/problems/removing-white-chalky-efflorescence-from-basement-walls/
- https://alasya-construction.ca/parging-cost-toronto-what-to-budget-in-2026/
- https://conterrafoundation.ca/blog/rubble-foundation-repair-guide-for-hamilton-heritage-homes/
- http://www.suiteadditions.com/blog/2024/10/7/the-new-2024-ontario-building-code-what-you-need-to-know-for-second-suites-multiplex-conversions-and-detached-garden-suites
- https://claimrebate.ca/basement-flooding-subsidy-vaughan ; https://claimrebate.ca/basement-flooding-subsidy-ontario (aggregator)

**Search-result text only (page not fetched: 403 or JavaScript-rendered)**
- https://www.homestars.com/home-constructions-renovations/price-guides/basement-waterproofing-cost-toronto
- https://www.homestars.com/windows-doors/price-guides/basement-egress-window-cost
- https://renonext.com/costs/foundation-repair/toronto
- https://homeguide.com/costs/helical-piers-cost (US, USD)
- https://sprinklercompany.ca/blog/how-much-does-a-french-drain-cost-in-toronto-and-gta/
- https://aquamasterplumbing.com/post/what-does-weeping-tile-installation-cost-in-toronto/
- https://renohouse.ca/blog/weeping-tile-guide

**Repo evidence reused**
- `data/validation/evidence/serp-audit-a.md` (Toronto french-drain SERP density; Toronto radon ~7%)
- `data/validation/evidence/serp-audit-b.md` (trenchless Toronto SERP saturated)
- `data/validation/evidence/herringbone-driveways-track2.md` (Ch. 918; khanscapes permeable pricing, https://khanscapes.ca/interlocking-driveway-cost-toronto/; Ottawa Rain Ready)
- `data/modules/housing/toronto-on.json` (29.3% of dwellings built 1960 or earlier)
