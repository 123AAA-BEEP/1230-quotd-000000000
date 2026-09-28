# C6 — Conversions, additions, accessibility, life-event and disaster restoration (GTA)

`retrieved_at: 2026-09-28` · proof metro Toronto; 905 municipalities where the rules differ · evidence file for the GBP-gap pass (research only, no repo changes)

## Method

- Read `spec/build-spec.md` §0–§4, `spec/ADDENDUM-2026-08-01.md` §A11–A12, `data/niches/nichecandidates.csv`, `data/niches/taxonomy-premium-v1.csv`, `data/validation/p0-report.md`.
- Web: 17 WebSearch calls ran before the shared session search budget (200) was used up. After that I used only WebFetch/curl on official pages, pages surfaced earlier, sitemaps of GTA contractor sites and public open-data APIs. No search-engine scraping.
- Local data, counted by me (retrieved 2026-09-28). The tags below are used in the rows:
  - **[OD-P]** Toronto Building Permits, Active and Cleared-since-2017 — https://open.toronto.ca/dataset/building-permits-active-permits/ ; https://open.toronto.ca/dataset/building-permits-cleared-permits/ . Counts are unique permits (revision 00) by application year. I used WORK categories where they exist ("New Laneway / Rear Yard Suite", "Second Suite (New)", "Fire Damage", "Demolition Folder (DM)", "Underpinning", "Walk-Out Stair", "Porch", "Back Water Valve"). Otherwise I matched a DESCRIPTION regex on building-permit types, which is approximate. "Declared" means EST_CONST_COST, the applicant's declared value for 2023–26 applications; it is a floor, not a contract price. "2026" covers Jan 1 to Sep 28.
  - **[OD-F]** Toronto Fire Incidents, 2011–2024 — https://open.toronto.ca/dataset/fire-incidents/ . "Low-rise house" means property-use codes 301/302/303/321/332/334/335/336.
  - **[OD-N]** 2021 Census Neighbourhood Profiles (158 neighbourhoods, summed to the city) — https://open.toronto.ca/dataset/neighbourhood-profiles/
  - **[BR-ARU]** Brampton registered additional residential units (ArcGIS layer; total count plus count by registration year) — https://geohub.brampton.ca/datasets/brampton::registered-additional-residential-units/about ; https://maps1.brampton.ca/arcgis/rest/services/Two_Unit_Dwellings/Planning_Registered_Additional_Residential_Units/MapServer/0
  - **[MS-REG]** Mississauga Second Units Registry PDF (run date Sept 2026) — https://www.mississauga.ca/wp-content/uploads/2019/04/16101531/Second-Units-Registry-RunDate2026Sept.pdf
- GBP beliefs were cross-checked against the session's category list (scratchpad `gbp_ca.tsv`, 4,045 categories). They remain beliefs for the verifier.
- Prices come from GTA contractor cost guides (marketing sources, mostly dated 2026) and declared permit values. US prices appear only as a labelled fallback, never converted.

## Limitations

- Because the search budget ran out early, there are no Reddit or HomeStars demand signals; open-data permit counts stand in for demand. HomeStars and HomeGuide (Cloudflare), fsrao.ca and vaughan.ca (HTTP 403) could not be read, and StatCan pages render client-side.
- Oakville, Burlington, Milton, Ajax and Pickering second-unit rules were not verified. Vaughan, Whitby, Oshawa and Hamilton facts come from search-result snippets and are marked "(snippet)".
- Permit regex counts undercount, and unpermitted work is invisible. Declared values understate true cost.
- The Canada Secondary Suite Loan Program terms conflict across sources and were not verified.
- **Freshness trap for the data layer:** the Home Accessibility Tax Credit (HATC) is 14% for 2026, a C$2,800 maximum (Bill C-4) — https://leedwaygroup.com/home-accessibility-tax-credit-ontario-2026-what-hatc-pays-now/ . Yet GTA contractor, dealer and cost pages still quote C$3,000, C$1,500 or a C$10,000 cap. The Multigenerational Home Renovation Tax Credit (MHRTC) is quoted as 15% (C$7,500) by most pages and 14.5% (C$7,250) by one.

## Data-layer note: second units differ by municipality (the survival-rule module)

**Provincial floor (same everywhere).**
- Ontario Building Code (OBC) second-unit rules: 1.95 m ceiling (1.85 m under beams); 30-min fire separation, or 15-min with whole-house interconnected smoke alarms; basement escape window ≥0.38 m² with sill ≤900 mm; separate ESA electrical permit — https://www.ontario.ca/page/add-second-unit-your-house
- Two-unit houses that existed on or before 1994-07-14 may use the Fire Code 9.8 retrofit route — https://ontariofirecode.com/ontario-fire-code/ontario-fire-code/division-b-acceptable-solutions/part-9-retrofit/section-9-8-two-unit-residential-occupancies/
- Bill 23: up to 3 units per lot as-of-right, exempt from development charges (DCs) and parkland fees, ≤1 parking space per unit, no minimum floor area — https://www.blg.com/en/insights/2022/12/bill-23-in-ontario-the-more-homes-built-faster-act-2022-receives-royal-assent
- O. Reg. 462/24 (in force 2024-11-20): no angular plane or floor-space-index limits on additional units, lot coverage up to 45%, separation requirement capped at 4 m — https://www.bvmhomes.com/blog/ontario-regulation-462-24
- Programs used across rows: HATC (federal, up to C$20,000 a year of eligible spend) — https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html ; MHRTC (federal, up to C$50,000 of spend on a unit for a senior or an adult with a disability) — https://www.renocalc.ca/en/blog/renovation-financing-options-canada-2026 ; March of Dimes Home and Vehicle Modification Program (HVMP, Ontario, up to C$15,000 lifetime) — https://www.acornstairlifts.ca/info/funding-tax-credits

| Municipality | Registration | Fees | Public data | Other local rule |
|---|---|---|---|---|
| Toronto | no second-unit registry found; building permit only ("Second Suite (New)" 469/485/440 in 2023–25 [OD-P]) | permit | [OD-P] permits; 46,485 census "flat in a duplex" dwellings [OD-N] | fourplex citywide; sixplex in Toronto & East York + Ward 23; DCs exempt for 2nd–4th units |
| Mississauga | mandatory (Second Units Registration By-law) | free to register | registry header total: 4,909 units (105-page PDF) [MS-REG] | 2 extra units or a fourplex; pre-approved garden-suite plans |
| Brampton | mandatory two-unit registration | C$200 + C$1,186.24 permit | 30,491 registered units; 5,755 registered in 2025 [BR-ARU] | recall fee after two failed inspections |
| Markham | register with Markham Fire & Emergency Services | C$260 inspection + C$246 registration | — | units built before 1993-07-01 use Fire Code 9.8, with a declaration form |
| Vaughan | permit + Vaughan Fire (VFRS) final inspection (snippet) | — | — | renovators need a City of Vaughan business licence (snippet) |
| Richmond Hill | building permit; registration not stated | — | — | up to 3 extra units, max 4 per lot |
| Hamilton | ADU by-laws 22-132 to 22-138 (snippet) | — | — | rental licensing pilot in Wards 1, 8 and part of 14, to 2025-12-31 (snippet) |
| Whitby | accessory-apartment registration (snippet) | C$250; +C$525 if built without a permit (snippet) | — | — |
| Oshawa | permit needed to legalize units created after July 1994 (snippet) | — | rental-licence open data | licensing near Durham College / Ontario Tech (snippet) |

Table sources: https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/multiplex-housing/ ; https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/garden-suites/ ; https://www.mississauga.ca/services-and-programs/building-and-renovating/registering-a-second-unit/ ; https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/ ; https://www.brampton.ca/EN/residents/Building-Permits/second-dwelling/pages/two-unit-process.aspx ; https://www.markham.ca/about-city-markham/city-hall/bylaw/registration-basement-apartments-and-second-suites ; https://www.vaughan.ca/residential/secondary-suites/how-get-secondary-suite-adu ; https://richmondhill.ca/en/register-apply-or-pay/additional-residential-unit.aspx ; https://suite-spot.ca/the-bylaws/ ; https://pub-hamilton.escribemeetings.com/filestream.ashx?DocumentId=427549 ; https://pub-whitby.escribemeetings.com/filestream.ashx?documentid=10153 ; https://www.oshawa.ca/living-here/building-and-renovating/accessory-apartments/ ; https://city-oshawa.opendata.arcgis.com/datasets/oshawa::oshawa-rental-housing-licenses-issued/about

---

## Niche rows

### laneway-suites
- name: laneway suite builders
- status: TAXONOMY-ROW (Laneway & garden suites)
- level: SERVICE
- tier: T1
- gta_price_cad: C$350k–750k+ (C$400–700/sq ft) — https://orielrenovations.com/toronto-renovation-blog/what-is-the-cost-of-a-laneway-house-or-garden-suite-in-toronto; C$365k–525k all-in for ~600 sq ft — https://maserat.ca/blog/laneway-and-garden-suite-cost-toronto/; declared median C$300k (n=581) [OD-P]
- gbp_belief: PARTIAL — nearest: "Home builder" (also "Custom home builder")
- gta_drivers: Toronto-only (the lot must abut a public lane). By-law 847-2025 (passed 2025-07-24) dropped the angular plane. The entrance must be ≤45 m from the street, or ≤90 m with sprinklers — https://www.toronto.ca/wp-content/uploads/2025/03/9689-Laneway-Suite-Fire-Access-Travel-Distance02282025AODA.pdf; https://keydraftdesigns.com/laneway-suite-design-toronto-2026-the-new-by-law-847-2025-rules-you-need-to-know-for-permit-approval/
- data_hooks: laneway permits 142/172/175 (2023–25) [OD-P]; 1,607 laneway+garden permits 2018–Jan 2026 — https://schoolofcities.github.io/gentle-density/toronto-backyard-housing; DC exemption; 4 pre-approved designs
- season: applications peak Aug–Oct [OD-P]; build Apr–Nov
- web: garden suites, fire access & sprinklers, add rental income, parents moving in, downsizing in place
- queries: "laneway suite builders toronto", "laneway house cost toronto", "is my lot eligible for a laneway suite"
- verdict: STRONG — bylaw-born, lot-level eligibility data; volume flat.

### garden-suites
- name: garden suite builders (backyard suites)
- status: TAXONOMY-ROW (Laneway & garden suites)
- level: SERVICE
- tier: T1
- gta_price_cad: C$365k–525k all-in for ~600 sq ft — https://maserat.ca/blog/laneway-and-garden-suite-cost-toronto/; C$120k–250k+ — https://leedwaygroup.com/in-law-suite-cost-ontario-your-complete-2026-guide/; declared median C$200k (IQR 100k–350k) [OD-P]
- gbp_belief: PARTIAL — nearest: "Home builder" (also "Modular home builder")
- gta_drivers: allowed in Toronto since Feb 2022 (by-law 101-2022); amended June 2025 to match O. Reg. 462/24. Bill 23 makes a detached third unit as-of-right in Ontario — https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/garden-suites/. Mississauga: pre-approved plans — https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/
- data_hooks: garden permits 54→219→328→445 (2022–25) [OD-P]; 1.0 m fire path (0.9 m sprinklered); limiting-distance agreements; tree declaration
- season: applications peak Aug–Oct [OD-P]; build Apr–Nov
- web: laneway suites, prefab & tiny suites, fire access, parents moving in, downsizing in place
- queries: "garden suite builders toronto", "garden suite cost mississauga", "backyard suite rules ontario"
- verdict: STRONG — fastest-growing suite type (2.5× laneway in 2025); rules vary by city.

### basement-apartment-conversion
- name: legal basement apartment contractors
- status: NEW (adjacent TAXONOMY-ROW "Basement suite legalization")
- level: SERVICE
- tier: T1
- gta_price_cad: C$60k–130k+ from an unfinished basement — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026; C$60k–85k basic to C$120k–180k+ high-end (snippet) — https://www.adeptrenoandpaint.ca/articles/legal-basement-suite-toronto-guide-2026; Toronto declared median C$40k (n=1,734) [OD-P]
- gbp_belief: NONE — nearest: "General contractor" (also "Remodeler")
- gta_drivers: the code is provincial; the volume is in the 905. Brampton registered 5,755 units in 2025 [BR-ARU], against about 440–485 new Toronto second-suite permits a year [OD-P]. Top census "flat in a duplex" neighbourhoods are inner suburbs (West Humber-Clairville 1,835) [OD-N]
- data_hooks: registration and fee matrix; registries; low ceilings → underpinning (EXISTING basement-lowering-underpinning; 156/203/150 permits 2023–25 [OD-P])
- season: year-round; applications peak Jul and Oct [OD-P]
- web: legalization, fire separation & egress, egress windows (LAUNCH-10), add rental income
- queries: "legal basement apartment contractor brampton", "basement apartment cost toronto"
- verdict: STRONG — highest GTA volume; city-by-city registration is the data layer.

### basement-suite-legalization
- name: basement apartment legalization
- status: TAXONOMY-ROW (Basement suite legalization)
- level: SERVICE
- tier: T1
- gta_price_cad: C$45k–95k to legalize a finished basement — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026; declared median C$25k (IQR 10k–50k, n=151) on Toronto permits that describe legalizing an existing unit [OD-P]
- gbp_belief: NONE — nearest: "General contractor" (drawings: "Drafting service", "Building designer")
- gta_drivers: the route depends on date: units existing by 1994-07-14 can use the Fire Code 9.8 retrofit; newer units need a full OBC permit. Markham asks for a pre-1993-07-01 declaration — https://www.markham.ca/about-city-markham/city-hall/bylaw/registration-basement-apartments-and-second-suites. renocalc wrongly lists Toronto and Mississauga registration fees; Mississauga's is free — https://www.mississauga.ca/services-and-programs/building-and-renovating/registering-a-second-unit/
- data_hooks: legalization permits 27/42/45 (2023–25) [OD-P]; public registries [BR-ARU][MS-REG]; fee matrix
- season: year-round; spikes before listing (EST)
- web: can't sell with an unpermitted apartment, fire separation & egress, basement conversion
- queries: "legalize basement apartment toronto", "is my basement apartment legal"
- verdict: STRONG — purest regulation-born niche; web answers are often wrong.

### basement-suite-fire-separation-egress
- name: fire separation and egress upgrades for a second unit
- status: NEW (links LAUNCH-10 basement-egress-windows)
- level: USE
- tier: T2
- gta_price_cad: EST C$10k–30k from line items: Type X drywall C$4k–8k, rated door C$1.5k–3k, egress window C$3k–8k each, separate entrance C$5k–15k — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026; walk-out stair declared median C$12k (n=486) [OD-P]
- gbp_belief: NONE — nearest: "Dry wall contractor" (also "Window installation service")
- gta_drivers: a 30-min separation drops to 15-min with interconnected alarms; a shared exit needs 30-min separation plus interconnected alarms; basement escape windows ≥0.38 m², sill ≤900 mm — https://www.ontario.ca/page/add-second-unit-your-house
- data_hooks: walk-out stair permits 143/169/95 (2023–25) [OD-P]; OBC vs Fire Code 9.8 route; ESA permit; which fire service inspects
- season: interior year-round; excavation Apr–Nov
- web: legalization, egress windows, walk-outs, legal basement bedroom
- queries: "fire separation basement apartment ontario", "basement egress window size ontario"
- verdict: GOOD — a section or FAQ under legalization and egress pages, not standalone.

### suite-fire-access-sprinklers
- name: fire access and sprinklers for laneway and garden suites
- status: NEW
- level: USE
- tier: T3 (EST)
- gta_price_cad: EST C$8k–25k for an NFPA 13D sprinkler, strobe and S540 alarm; no GTA price source was retrieved
- gbp_belief: PARTIAL — nearest: "Fire protection service"
- gta_drivers: hydrant ≤45 m from the truck; entrance ≤45 m, or ≤90 m with Option 1 (engineer-designed NFPA 13/13R/13D sprinkler, strobe, CAN/ULC-S540 alarm) or Option 2 (upgraded materials). Path 0.9 m × 2.1 m for laneway suites; 1.0 m for garden suites (0.9 m if sprinklered), which may use a neighbour's limiting-distance agreement — https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/new-laneway-suite/providing-fire-department-access-to-a-new-laneway-suite/; https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/new-garden-suite/providing-fire-department-access-to-a-new-garden-suite/
- data_hooks: parcel geometry → travel distance; hydrant locations; side-yard width
- season: design stage
- web: laneway suites, garden suites, prefab suites
- queries: "laneway suite fire access 45m", "garden suite sprinkler requirement toronto"
- verdict: GOOD — an eligibility-calculator module inside suite pages, not its own page.

### garage-conversions
- name: garage conversion contractors
- status: TAXONOMY-ROW (Garage conversions)
- level: SERVICE
- tier: T1 (office or bedroom conversions are T2)
- gta_price_cad: C$48k–68k office; C$90k–135k self-contained suite; C$120k–185k detached garage → garden suite — https://905reno.ca/garage-conversion-toronto-2026-summer-guide/; Toronto office or bedroom C$27k–54k — https://www.renocalc.ca/en/blog/garage-conversion-cost-canada-2026; declared median C$75k (n=252) [OD-P]
- gbp_belief: NONE — nearest: "General contractor" ("Garage builder" is a mis-fit)
- gta_drivers: change-of-use permit mandatory in Toronto and the 905; slab raising and insulation C$8k–14k; lost parking may need replacing; fire separation from the remaining garage (905reno; renocalc)
- data_hooks: garage-conversion permits 56/83/70 (2023–25) [OD-P]; parking capped at 1 per unit (Bill 23); unit caps by city
- season: year-round; slab and door work Apr–Nov
- web: garden suites, in-law suites, parents moving in, add rental income, house too small
- queries: "garage conversion cost toronto", "convert detached garage to garden suite"
- verdict: GOOD — clear path to a legal unit; modest Toronto volume.

### multiplex-conversions
- name: multiplex conversion builders (house to triplex or fourplex)
- status: TAXONOMY-ROW (Duplex & triplex conversions)
- level: SERVICE
- tier: T1
- gta_price_cad: C$350k–600k all-in for a fourplex conversion; +C$400k–500k for a 4+1 garden suite — https://905reno.ca/fourplex-conversion-toronto/; declared median C$500k (n=1,096) on permits creating 3–6 units [OD-P]
- gbp_belief: NONE — nearest: "General contractor" (also "Home builder")
- gta_drivers: fourplexes citywide since May 2023; sixplexes in Toronto & East York and Ward 23 (by-laws 2025-06-25/26) — https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/multiplex-housing/. Mississauga allows a fourplex. Electrical upgrade and separate meters C$15k–40k+ (905reno)
- data_hooks: permits creating 3–6 units 90→263→414 (2023–25), 338 in 2026 [OD-P]; "Rental Renovation Licence" permits (11 in 2025, 19 in 2026) [OD-P]
- season: year-round
- web: garden suites (4+1), basement suites, fire separation, add rental income
- queries: "fourplex conversion toronto cost", "convert house to triplex toronto", "sixplex toronto east york"
- verdict: STRONG — 4.6× permit growth since 2023; law varies by ward.

### second-storey-additions
- name: second-storey addition contractors
- status: TAXONOMY-ROW (Second-storey additions)
- level: SERVICE
- tier: T1
- gta_price_cad: C$375–450/sq ft; C$280k–360k (800 sq ft) and C$350k–550k (1,000 sq ft) — https://maserat.ca/blog/how-much-does-a-second-floor-addition-cost-toronto/; C$150k–350k (C$250–450/sq ft) — https://www.renocalc.ca/en/blog/home-addition-cost-canada-2026; declared median C$300k (n=2,143) [OD-P]
- gbp_belief: NONE — nearest: "General contractor" (also "Structural engineer")
- gta_drivers: 28.8% of Toronto dwellings date from 1961–80 [OD-N]. Rubble or undersized footings may need reinforcement (maserat). Land-transfer tax makes adding a floor cheaper than trading up — https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/
- data_hooks: 2nd/3rd-storey addition permits 644/609/538 (2023–25) [OD-P]; Committee of Adjustment variances; heritage districts
- season: applications peak May–Jul [OD-P]; roof-off work May–Oct
- web: house too small, rear additions, underpinning, structural engineers, heritage additions, attic dormers
- queries: "second storey addition cost toronto", "add second floor to bungalow mississauga", "second floor addition permit toronto"
- verdict: GOOD — Track-2 slice; large volume but a crowded general-contractor field.

### rear-and-heritage-additions
- name: rear additions on semis and heritage-home additions
- status: TAXONOMY-ROW (Heritage home additions); rear slice NEW
- level: USE
- tier: T1
- gta_price_cad: C$360–480/sq ft; C$180k–240k for 500 sq ft; C$400k+ for 800 sq ft — https://maserat.ca/blog/rear-home-addition-in-toronto/; declared median C$225k (n=1,711) [OD-P]
- gbp_belief: NONE — nearest: "General contractor" (heritage: "Building restoration service")
- gta_drivers: typical rules are a 7.5 m rear setback and 33–50% lot coverage. A variance adds 3–6 months. Street-visible additions need Part IV or Part V heritage permits (South Rosedale, Cabbagetown) — https://maserat.ca/blog/heritage-home-renovation-toronto/
- data_hooks: rear-addition permits 460/475/418 (2023–25); party-wall permits 468/500/403; heritage-mentioned permits 5–11 a year [OD-P]; heritage district (HCD) boundaries
- season: build Apr–Nov
- web: second-storey additions, underpinning, party walls, heritage permits, century homes, house too small
- queries: "rear addition semi detached toronto", "heritage district addition permit toronto"
- verdict: GOOD — Track-2 slice; semi and heritage-district geometry is real local data.

### attic-dormer-conversions
- name: attic conversion and dormer contractors
- status: NEW
- level: SERVICE
- tier: T1 (EST; small dormers T2)
- gta_price_cad: dormer declared median C$100k (IQR 50k–400k, n=175); attic conversion median C$90k (n=12) [OD-P]; no GTA cost guide found, so EST C$60k–150k for a dormered attic room with bath
- gbp_belief: NONE — nearest: "General contractor" (also "Carpenter", "Roofing contractor")
- gta_drivers: an attic unit needs a 2.03 m ceiling over ≥50% of the required floor area — https://www.ontario.ca/page/add-second-unit-your-house. Dormers must meet Toronto height, floor-area and heritage limits — https://landsignal.ai/blog/attic-conversion-toronto/
- data_hooks: dormer permits 52/47/46 (2023–25) [OD-P]; headroom rule; insulation rebates up to C$7,700 — https://maserat.ca/resources/home-additions/toronto-additions-renovation-rebates/
- season: roof-open work May–Oct
- web: second-storey additions, house too small, skylights, century homes
- queries: "attic conversion toronto", "dormer addition cost toronto"
- verdict: BORDERLINE — about 50 dormer permits a year; fold into the additions hub.

### porch-enclosures-mudrooms
- name: porch enclosure and mudroom additions
- status: TAXONOMY-ROW (Porch enclosure systems)
- level: SERVICE
- tier: T2
- gta_price_cad: C$15k–50k three-season; C$35k–180k+ four-season — https://leedwaygroup.com/sunroom-and-room-addition-cost-ontario-2026-complete-honest-price-breakdown/; declared median C$50k (IQR 15k–175k, n=437) on enclosure, mudroom and vestibule permits [OD-P]
- gbp_belief: PARTIAL — nearest: "Sunroom contractor" (also "Patio enclosure supplier")
- gta_drivers: a permit is mandatory (C$200–1,500, 2–8 weeks, per leedway). Street-facing porches meet front-yard averaging and heritage review (EST)
- data_hooks: enclosure, mudroom and vestibule permits 96/115/126 (2023–25); "Porch" permits 142/174/146 [OD-P]
- season: build Apr–Oct
- web: rear additions, front-porch rebuilds, heritage additions, house too small
- queries: "enclose front porch toronto", "mudroom addition cost ontario", "vestibule addition permit toronto"
- verdict: GOOD — steady permit flow; a craft slice of sunrooms.

### bathroom-additions
- name: add a bathroom where none exists
- status: NEW
- level: USE
- tier: T2
- gta_price_cad: Toronto basement three-piece with rough-in C$14k–28k; +C$4k–8k without rough-in — https://www.renocalc.ca/en/blog/basement-bathroom-cost-canada; declared median C$46k (n=255) on "new washroom" permits [OD-P]
- gbp_belief: PARTIAL — nearest: "Bathroom remodeler"
- gta_drivers: basement bathrooms often need an ejector pump and a backwater valve. Toronto issued 1,493/1,935/1,455 backwater-valve permits in 2023–25 [OD-P]
- data_hooks: plumbing permits; basement flooding subsidy (another cluster)
- season: year-round
- web: basement conversion, in-law suites, aging in place, garage conversions
- queries: "add bathroom to basement toronto", "cost to add a bathroom ontario"
- verdict: EXCLUDE — bathroom-remodelling red ocean (A12); keep as a section inside suite pages.

### in-law-suites
- name: in-law suite builders
- status: NEW
- level: USE
- tier: T1
- gta_price_cad: basement C$50k–150k (typically C$70k–100k); attached addition C$175k–330k; garden suite C$120k–250k+ — https://leedwaygroup.com/in-law-suite-cost-ontario-your-complete-2026-guide/; multigenerational additions C$150k–500k+ — https://maserat.ca/blog/multi-generational-home-addition-toronto/
- gbp_belief: NONE — nearest: "General contractor"
- gta_drivers: the MHRTC refunds a share of up to C$50,000 spent on a unit for a senior 65+ or an adult with a disability. Most pages quote 15% (C$7,500); one quotes 14.5% (C$7,250) — https://leedwaygroup.com/multigenerational-home-renovation-tax-credit-a-smart-way-to-upgrade-your-home/; https://www.renocalc.ca/en/blog/renovation-financing-options-canada-2026
- data_hooks: MHRTC calculator; unit caps; accessibility spec; Canada Secondary Suite Loan Program (reported as C$40k at 2% over 10 years; unverified)
- season: year-round
- web: parents moving in, garden suites, basement conversion, aging in place, garage conversions
- queries: "in-law suite toronto cost", "granny flat ontario rules", "build suite for parents tax credit"
- verdict: GOOD — a consumer term; a USE section across suite pages plus one guide.

### prefab-modular-and-tiny-suites
- name: prefab/modular suite builders and tiny homes as garden suites
- status: TAXONOMY-ROW (Prefab addition systems; Modular home construction); tiny-home slice NEW
- level: SERVICE
- tier: T1
- gta_price_cad: modular C$180k–380k installed (C$200–450/sq ft turnkey), crane and delivery C$3k–12k — https://leedwaygroup.com/modular-homes-ontario-2026-guide-to-costs-rules/; prefab garden suites are unpriced — https://landsignal.ai/blog/prefab-garden-suites-toronto/; tiny suite EST C$80k–250k
- gbp_belief: PARTIAL — nearest: "Modular home builder" (tiny homes: "Mobile home dealer", "Shed builder")
- gta_drivers: CSA A277 factory certification skips repeat inspections (Toronto recognises it since 2024, per leedway). Garden suites must be permanent, permitted buildings (City page). Tiny homes on wheels as units: not verified.
- data_hooks: prefab/modular permits 6/13/2 (2023–25) [OD-P]; crane access vs fire-access path
- season: install Apr–Nov
- web: garden suites, laneway suites, downsizing in place
- queries: "prefab garden suite toronto", "tiny home backyard toronto legal"
- verdict: BORDERLINE — curiosity demand, few permits; a section or FAQ inside garden suites.

### era-specific-renovation
- name: century-home and mid-century-modern renovation specialists
- status: TAXONOMY-ROW (Century home restoration; Mid-century modern renovation)
- level: SERVICE
- tier: T1
- gta_price_cad: declared median C$200k (n=26) on heritage-mentioned permits [OD-P]; heritage premiums are "project-specific" — https://maserat.ca/blog/heritage-home-renovation-toronto/; whole-house EST C$150k–600k
- gbp_belief: PARTIAL — nearest: "Building restoration service" (century homes); NONE for mid-century ("Remodeler", "Architect")
- gta_drivers: 29.3% of Toronto dwellings were built before 1961 (84% in Runnymede-Bloor West Village; 77% in North Riverdale and Danforth), and 28.8% in 1961–80 [OD-N]. Don Mills (designed 1952–65) was Canada's first planned modernist suburb — https://en.wikipedia.org/wiki/Don_Mills
- data_hooks: period of construction by neighbourhood; heritage districts; asbestos surveys
- season: exterior May–Oct; interior year-round
- web: heritage additions, lime-mortar repointing, plaster repair, historic windows (LAUNCH-10), underpinning
- queries: "century home renovation toronto", "mid century modern renovation toronto"
- verdict: GOOD — Track-2 hub linking craft niches; the mid-century half is BORDERLINE.

### condo-renovation
- name: condo renovation contractors
- status: NEW
- level: USE
- tier: T1
- gta_price_cad: C$70k–150k+ for a full unit; C$100–300/sq ft by building class — https://maserat.ca/blog/condo-renovation-cost-toronto/; no second source found
- gbp_belief: NONE — nearest: "Remodeler" (also "Interior construction contractor")
- gta_drivers: board approval under the Condominium Act, 1998 takes 4–10 weeks. Boards want C$2M–5M liability cover naming the corporation, WSIB (workers' compensation) clearance, 9-to-5 weekday noise windows and elevator bookings — https://maserat.ca/blog/condo-board-approval-checklist-toronto/. 46.9% of Toronto dwellings are in buildings of 5+ storeys [OD-N]
- data_hooks: per-building rules (underlay ratings, moving plumbing stacks); board checklist
- season: year-round
- web: soundproofing, flooring underlay, aging in place, pre-listing renovation
- queries: "condo renovation contractor toronto", "condo board approval renovation toronto"
- verdict: BORDERLINE — huge housing stock but generic remodel search results; enter through the board-approval slice.

### home-elevators
- name: home elevator installers (including through-floor and platform lifts)
- status: EXISTING(home-elevators)
- level: SERVICE
- tier: T1
- gta_price_cad: US$30k–40k shaftless 2-stop; US$45k–75k traditional 2–3 stops (US fallback) — https://www.savaria.com/news/how-much-does-a-home-elevator-cost; no CAD source found, so EST C$45k–100k+ with a shaft
- gbp_belief: PARTIAL — nearest: "Elevator service" (also "Elevator manufacturer")
- gta_drivers: TSSA regulates elevating devices (O. Reg. 209/01) with a private-dwelling exemption test; a multiplex or a house with a second unit may fall outside it — https://www.tssa.org/questionnaire-determine-applicability-private-dwelling-exemption-form-oreg-20901. The HATC eligible-expense cap is C$20k (canada.ca)
- data_hooks: permits mentioning an elevator or lift 72/53/95 (2023–25) [OD-P]; TSSA contractor registration; HATC and March of Dimes HVMP grants
- season: year-round
- web: stair lifts, aging in place, multiplex conversions, downsizing in place
- queries: "home elevator toronto cost", "residential elevator installation ontario", "through floor lift toronto"
- verdict: GOOD — T1, thin dealer networks, partial GBP fit; modest volume.

### stair-lifts
- name: stair lift installers
- status: EXISTING(stair-lifts)
- level: SERVICE
- tier: T3 (curved units T2)
- gta_price_cad: C$3,000–5,500 installed, straight — https://leedwaygroup.com/home-accessibility-tax-credit-ontario-2026-what-hatc-pays-now/; curved US$10k–25k (US fallback) — https://www.savaria.com/news/how-much-does-a-curved-stairlift-cost-in-2026
- gbp_belief: PARTIAL — nearest: "Mobility equipment supplier" ("Stair contractor" is a mis-fit)
- gta_drivers: stair lifts are exempt from HST/GST — https://silvercrossstores.com/straight-stairlifts/. The March of Dimes HVMP pays up to C$15,000 — https://www.acornstairlifts.ca/info/funding-tax-credits. The HATC is 14% for 2026 (C$2,800 maximum; leedway)
- data_hooks: credit and grant eligibility; rent-to-own and reconditioned supply
- season: year-round; driven by hospital discharges (EST)
- web: home elevators, aging in place, ramps, porch lifts, downsizing in place, parents moving in
- queries: "stair lift toronto price", "curved stair lift cost ontario", "march of dimes stair lift funding"
- verdict: BORDERLINE — sold through medical-supply dealers; straight units are low ticket.

### aging-in-place-renovations
- name: aging-in-place and accessibility renovation contractors
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: curbless shower C$8k–18k; full accessible bathroom C$25k–55k; ramp C$3k–10k — https://905reno.ca/accessible-home-renovations-in-the-gta-walk-in-showers-grab-bars-and-the-ontario-grants-that-help-pay-for-them/; comprehensive retrofit C$30k–50k — https://leedwaygroup.com/aging-in-place-renovations-in-ontario-costs-ideas-accessibility-guide/
- gbp_belief: PARTIAL — nearest: "Bathroom remodeler" (also "Disability equipment supplier", "Occupational therapist")
- gta_drivers: the HATC caps eligible spend at C$20,000 a year — https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html. That is worth C$2,800 at the 2026 rate (leedway), yet GTA pages still quote C$1,500–3,000. The HVMP pays C$15k; Ontario Renovates pays C$15k–25k (905reno)
- data_hooks: incentive calculator (HATC, MHRTC, the medical expense credit, and the Ontario Seniors Care at Home credit: 25% of C$6k for ages 70+)
- season: year-round
- web: stair lifts, home elevators, walk-in tubs, curbless showers, ramps, in-law suites, downsizing in place
- queries: "aging in place renovation toronto", "accessible bathroom renovation cost toronto", "walk-in tub installation mississauga"
- verdict: GOOD — incentive data changes the advice; the bathroom adjacency is crowded.

### fire-damage-restoration
- name: fire damage restoration companies
- status: TAXONOMY-ROW (Luxury fire damage restoration)
- level: SERVICE
- tier: T1
- gta_price_cad: Toronto low-rise house fires in 2024 had a median loss of C$10k; 125 were ≥C$50k (median C$100k, 75th percentile C$250k) [OD-F]; declared median C$50k (n=34) on Fire Damage permits [OD-P]; restorers publish no prices because work is insurer-billed
- gbp_belief: EXACT — nearest: "Fire damage restoration service" (confirmed in the category list)
- gta_drivers: work is routed through insurers. National franchises run board-up, soot, contents, deodorization and rebuild — https://www.pauldavis.ca/fire-damage-restoration-from-emergency-to-rebuild
- data_hooks: fires by ward, cause and smoke-alarm status [OD-F]; Fire Damage permits 144/143/137 (2023–25) [OD-P]
- season: permit applications peak Oct–Nov [OD-P]
- web: insurance rebuild after fire, smoke odour & contents, public adjusters, demolition
- queries: "fire damage restoration toronto", "fire restoration company mississauga"
- verdict: EXCLUDE — exact GBP category, controlled by franchises and insurers; keep the rebuild outcome.

### smoke-odour-contents-restoration
- name: smoke odour removal and contents restoration
- status: TAXONOMY-ROW (Smoke odor remediation; Art-safe pack-out and contents restoration)
- level: SERVICE
- tier: T3 (EST)
- gta_price_cad: EST C$2.5k–15k outside an insurance claim; no GTA prices are published; service lines exist — https://firstonsite.com/en-CA/service/odor-removal/; https://www.pauldavis.ca/the-science-and-success-of-removing-smoke-odours-from-furnishings-and-fabrics
- gbp_belief: PARTIAL — nearest: "Fire damage restoration service"
- gta_drivers: most work sits inside fire claims; demand outside claims is tobacco and wildfire smoke (EST)
- data_hooks: smoke-spread field on each fire record [OD-F]
- season: follows fire season
- web: fire damage restoration, insurance rebuild after fire, estate cleanouts
- queries: "smoke smell removal toronto", "contents cleaning after fire"
- verdict: BORDERLINE — a sub-use of fire restoration; small market outside claims.

### water-damage-restoration
- name: water damage restoration
- status: TAXONOMY-ROW (Luxury water damage restoration)
- level: SERVICE
- tier: T3 (EST; large losses T2)
- gta_price_cad: EST C$3k–25k; restorers publish cost factors, not prices — https://servicemasterrestore.ca/post/TOP-10-FACTORS-THAT-AFFECT-THE-COST-OF-WATER-DAMAGE-RESTORATION
- gbp_belief: EXACT — nearest: "Water damage restoration service"
- gta_drivers: Canada's insured severe-weather losses were over C$2.4B in 2025 (CatIQ via the Insurance Bureau of Canada) — https://servicemasterrestore.ca/post/Severe-Weather-Made-2025-The-Tenth-Costliest-Year-on-Record; Toronto basement flooding
- data_hooks: backwater-valve permits 1,493/1,935/1,455 (2023–25) [OD-P]
- season: spring thaw, summer storms
- web: basement waterproofing, backwater valves, mould remediation, insurance claims
- queries: "water damage restoration toronto", "flooded basement cleanup toronto"
- verdict: EXCLUDE — exact GBP category; emergency work routed by insurers to franchises.

### hoarding-biohazard-cleanup
- name: hoarding cleanup and biohazard cleaning
- status: NEW
- level: SERVICE
- tier: T3 (EST)
- gta_price_cad: EST C$3k–15k per home; no Canadian price page could be retrieved (HomeGuide blocked)
- gbp_belief: NONE — nearest: "House cleaning service" (also "Junk removal service", "Professional organizer")
- gta_drivers: franchised restorers sell hoarding and trauma cleanup as insurance-covered service lines, and hoarding raises fire risk — https://www.pauldavis.ca/residential/biohazard-cleanup; https://steamatic.ca/tips-and-tricks/hoarding-fire-safety/; https://steamatic.ca/cleaning/crime-and-trauma-scene-clean-up/
- data_hooks: thin; no public registry or permit trail
- season: year-round
- web: estate cleanouts, junk removal, smoke odour, downsizing
- queries: "hoarding cleanup toronto", "biohazard cleaning toronto"
- verdict: EXCLUDE — sensitive, no local-data wedge, not a craft.

### public-adjusters
- name: public adjusters (insurance claim help for homeowners)
- status: NEW
- level: SERVICE
- tier: T2 (EST)
- gta_price_cad: EST fee of 10–15% of the settlement, about C$10k–30k on a C$100k–250k claim (claim sizes from [OD-F]); no Ontario fee source was retrieved
- gbp_belief: PARTIAL — nearest: "Loss adjuster" (names the function but not the policyholder side; also "Insurance attorney")
- gta_drivers: 82–105 Toronto low-rise house fires a year had losses ≥C$100k (2022–24) [OD-F]. Licensing by FSRA (Ontario's financial regulator) is unverified because fsrao.ca returned 403
- data_hooks: fire losses by ward; claim-step guides
- season: follows fires and floods
- web: insurance rebuild after fire, fire damage restoration, water damage
- queries: "public adjuster toronto", "insurance claim help house fire ontario"
- verdict: BORDERLINE — a financial service, not a trade; selling these leads carries regulatory risk.

### house-demolition
- name: house demolition contractors (knock down to rebuild)
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: GTA C$18k–55k+; asbestos abatement C$3.5k–22k; survey C$850–2,400 — https://leedwaygroup.com/demolition-costs-in-ontario-pricing-budget-guide/; C$10k–30k (C$4–10/sq ft) — https://landsignal.ai/blog/cost-to-demolish-a-house-in-toronto/
- gbp_belief: EXACT — nearest: "Demolition contractor"
- gta_drivers: a Toronto demolition permit with a replacement building needs a demolition-control acknowledgement, an infill public notice, a tree declaration and a road-damage deposit. The fee is C$0.18/m² (2026) — https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/residential-demolition-permit-with-replacement-building/
- data_hooks: house demolition permits 904/881/777 (2023–25); new-house permits 1,245/943/878 [OD-P]
- season: applications peak in March and Jul–Aug [OD-P]
- web: asbestos abatement, tree permits, insurance rebuild after fire
- queries: "house demolition cost toronto", "demolish and rebuild permit toronto"
- verdict: BORDERLINE — exact GBP category and falling volume; useful as a module in a rebuild guide.

### pre-listing-renovation
- name: pre-listing renovation (fix before selling)
- status: NEW
- level: USE
- tier: T3 (up to T2)
- gta_price_cad: paint C$4k–7k for 2,000 sq ft; bathroom C$15k–35k — https://leedwaygroup.com/best-home-improvements-before-selling-a-house-in-canada/; total EST C$5k–40k
- gbp_belief: PARTIAL — nearest: "Home staging service"
- gta_drivers: the only local slice is legal status. A legal second unit is a resale asset, and lenders count its rent — https://landsignal.ai/blog/legal-duplex-requirements-ontario/. Brampton and Mississauga registries are public [BR-ARU][MS-REG]
- data_hooks: registries; open-permit check [OD-P]; Fire Code 9.8 date rule
- season: spring listing season (EST)
- web: can't sell with an unpermitted apartment, legalization, staging, condo renovation
- queries: "renovations before selling toronto", "legalize basement before selling"
- verdict: EXCLUDE — generic head term; keep only the legalize-before-selling slice.

### outcome-add-rental-income
- name: add rental income to my house
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: basement suite C$42.5k–108.75k; garden or laneway suite C$220k–450k — https://www.renocalc.ca/en/blog/secondary-suite-cost-canada-2026
- gbp_belief: NONE — nearest: "General contractor"
- gta_drivers: a Toronto one-bedroom rents for about C$1,800/mo, so a C$80k suite pays back in about 3.7 years gross — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026. Laneway and garden suites rent for C$2,000–4,500/mo (Oriel). Bill 23 allows three units as-of-right.
- data_hooks: suite permits and registries by city; DC exemptions; payback calculator
- season: year-round
- web: basement conversion, garden suites, laneway suites, multiplex conversions, garage conversions, legalization
- queries: "add a rental unit to my house toronto", "is a basement apartment worth it ontario", "garden suite rental income toronto"
- verdict: STRONG — hub or guide; payback maths on city rules is survival-rule native.

### outcome-parents-moving-in
- name: parents moving in with us
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: C$50k–330k depending on suite type — https://leedwaygroup.com/in-law-suite-cost-ontario-your-complete-2026-guide/
- gbp_belief: NONE — nearest: "General contractor"
- gta_drivers: three programs stack: MHRTC (C$50k cap), HATC (C$20k cap) and HVMP (C$15k) — https://leedwaygroup.com/multigenerational-home-renovation-tax-credit-a-smart-way-to-upgrade-your-home/; https://www.acornstairlifts.ca/info/funding-tax-credits
- data_hooks: credit calculator; unit caps; accessibility spec
- season: year-round
- web: in-law suites, garden suites, basement conversion, aging in place, stair lifts, home elevators
- queries: "build a suite for my parents toronto", "multigenerational home renovation tax credit", "granny flat for parents ontario"
- verdict: GOOD — a guide routing to suite pages, anchored by the credits.

### outcome-unpermitted-basement-apartment
- name: can't sell a house with an unpermitted basement apartment
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: C$45k–95k to legalize — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026
- gbp_belief: NONE — nearest: "General contractor" (also "Real estate attorney", "Home inspector")
- gta_drivers: the Fire Code 9.8 cutoff is 1994-07-14, while Markham uses a 1993-07-01 declaration. Brampton and Mississauga registries show buyers which units are legal [BR-ARU][MS-REG]
- data_hooks: registry lookups; legalization permits 27/42/45 (2023–25) [OD-P]
- season: before listing (EST)
- web: legalization, fire separation & egress, pre-listing renovation, home inspectors, real-estate lawyers
- queries: "selling house with illegal basement apartment ontario", "is my basement apartment legal brampton"
- verdict: STRONG — deadline-driven and high stakes; registry lookups are unique data.

### outcome-insurance-rebuild-after-fire
- name: insurance rebuild after a house fire
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: among Toronto house fires with ≥C$50k losses in 2024, the median was C$100k and the 75th percentile C$250k [OD-F]
- gbp_belief: EXACT — nearest: "Fire damage restoration service" (the rebuild itself falls to "General contractor")
- gta_drivers: 82–105 Toronto low-rise house fires a year had losses ≥C$100k (2022–24) [OD-F], and there are about 140 Fire Damage permits a year [OD-P]. A rebuild may trigger demolition, an asbestos survey and code upgrades (EST)
- data_hooks: fires by ward; Fire Damage permits; restoration stages (Paul Davis)
- season: permits peak Oct–Nov [OD-P]
- web: fire damage restoration, public adjusters, smoke odour, demolition, rebuild contractors
- queries: "rebuilding after a house fire ontario", "choose my own contractor fire insurance claim"
- verdict: GOOD — the owner's example; the opening is the rebuild contractor, not mitigation (which has an EXACT GBP category).

### outcome-downsizing-in-place
- name: downsizing in place (staying on my lot)
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: garden suite C$365k–525k — https://maserat.ca/blog/laneway-and-garden-suite-cost-toronto/; accessibility retrofit C$30k–50k — https://leedwaygroup.com/aging-in-place-renovations-in-ontario-costs-ideas-accessibility-guide/
- gbp_belief: NONE — nearest: "General contractor"
- gta_drivers: owners move into a garden or laneway suite and rent or hand over the main house. Selling triggers Toronto land-transfer tax at 2.0% on C$400k–2M, with graduated rates above C$3M from 2026-04-01 — https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/
- data_hooks: land-transfer tax calculator; unit rules; HATC and MHRTC
- season: year-round
- web: garden suites, laneway suites, aging in place, home elevators, parents moving in
- queries: "downsize without moving toronto", "build garden suite to retire in"
- verdict: GOOD — a guide; tax rules plus suite rules make it data-rich.

### outcome-legal-basement-bedroom
- name: need a legal bedroom in the basement
- status: NEW
- level: OUTCOME
- tier: T3 (T1 if underpinning is needed)
- gta_price_cad: egress window C$3k–8k — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026; underpinning declared median C$50k (n=608) [OD-P]
- gbp_belief: PARTIAL — nearest: "Window installation service"
- gta_drivers: a basement escape window must be ≥0.38 m² with the sill ≤900 mm — https://www.ontario.ca/page/add-second-unit-your-house
- data_hooks: underpinning permits 156/203/150 (2023–25) [OD-P]; walk-outs
- season: excavation Apr–Nov
- web: egress windows (LAUNCH-10), underpinning (EXISTING), basement conversion, window wells
- queries: "legal basement bedroom requirements ontario", "egress window size ontario", "basement bedroom without window legal"
- verdict: GOOD — routes to the LAUNCH-10 egress page; FAQ-level, not its own page.

### outcome-house-too-small
- name: house too small but we can't afford to move
- status: NEW
- level: OUTCOME
- tier: T1
- gta_price_cad: second storey C$280k–550k — https://maserat.ca/blog/how-much-does-a-second-floor-addition-cost-toronto/; rear addition C$180k–400k+ — https://maserat.ca/blog/rear-home-addition-in-toronto/
- gbp_belief: NONE — nearest: "General contractor" (also "Architect")
- gta_drivers: Toronto land-transfer tax on a C$1.5M house is about C$26.5k (computed from the City's brackets), before the provincial tax — https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/. There are about 1,000 storey and rear addition permits a year [OD-P]
- data_hooks: land-transfer tax calculator; zoning envelope; addition permits by ward
- season: plan in winter, build spring–fall
- web: second-storey additions, rear additions, attic dormers, garage conversions, basement conversion
- queries: "renovate or move toronto", "add space instead of moving"
- verdict: GOOD — a renovate-or-move calculator guide, not a money page.

---

## Web map

- **Add a unit** (hubs: add rental income; parents moving in)
  - spokes: laneway suites · garden suites (→ prefab/tiny, fire access & sprinklers) · basement apartment conversion (→ fire separation & egress, bathroom additions) · basement legalization (→ outcome: can't sell with an unpermitted apartment) · garage conversions · multiplex conversions (4+1 with a garden suite) · in-law suites
  - shared data: municipal second-unit matrix, OBC second-unit rules, Fire Code 9.8 date, DC exemptions, MHRTC, registries, [OD-P] permit counts
  - shared specialists: licensed permit designers, fire-separation and drywall crews, egress-window diggers (LAUNCH-10), underpinning (EXISTING), sprinkler contractors, electrical service upgrades
- **Add space** (hub: house too small but can't move)
  - spokes: second-storey additions · rear & heritage additions · attic dormers · porch enclosures & mudrooms · era-specific renovation
  - shared: structural engineers, underpinning, party-wall permits, Committee of Adjustment, heritage districts, land-transfer tax calculator
- **Stay put as you age** (hub: downsizing in place)
  - spokes: aging-in-place renovations · stair lifts · home elevators · in-law and garden suites
  - shared: occupational therapists, HATC/MHRTC/HVMP/Ontario seniors credit calculator, TSSA exemption test
- **After a fire** (hub: insurance rebuild after fire)
  - spokes: fire damage restoration (EXACT GBP, excluded) · smoke odour & contents · public adjusters · house demolition → rebuild contractor · water damage (excluded) · hoarding/biohazard (excluded)
  - shared: [OD-F] fire incidents, Fire Damage permits, asbestos surveys
- **Selling and buying**: can't sell with an unpermitted apartment → legalization · pre-listing slice · Tarion pre-delivery inspections (PDI) and specialty inspections (deferred)
- **Condo owners**: condo renovation (board-approval module) → soundproofing (EXISTING), aging in place

## Deferred (low ticket)

- tarion-pdi-inspector — a third-party inspector at the builder's mandatory pre-delivery inspection (buyer or designate must attend) — EST C$300–700 — https://www.tarion.com/homeowners/pre-delivery-inspection
- tarion-warranty-inspections (30-day, year-end) — EST C$400–800
- sewer-scope-inspection — EST C$250–500 (links EXISTING sewer-camera-inspection)
- thermal-imaging-inspection — EST C$300–600
- knob-and-tube / wiring inspection for insurers — EST C$150–500
- designated-substance (asbestos) survey — C$850–2,400 — https://leedwaygroup.com/demolition-costs-in-ontario-pricing-budget-guide/
- estate cleanouts — EST C$500–3,000; GBP "Junk removal service" / "Estate liquidator"
- grab bars — C$200–600 per bar — https://905reno.ca/accessible-home-renovations-in-the-gta-walk-in-showers-grab-bars-and-the-ontario-grants-that-help-pay-for-them/
- doorway widening (non-load-bearing) — C$800–2,500 — same 905reno source
- interconnected smoke/CO alarms (to qualify for the 15-min separation) — EST C$500–2,000
- second-unit permit drawings — C$2,000–5,000 — https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026 (a provider type, not a niche)
- second-unit registration itself — C$0–506 in fees (Mississauga free; Markham C$506); a data point, not a job

## Excluded (commodity / exact GBP / red ocean)

- Generic custom homes and new-house builders — A12 red ocean; EXACT "Custom home builder" / "Home builder"; Toronto new-house permits fell 1,245 → 878 (2023–25) [OD-P]
- Generic renovations, generic additions, general contracting — A12; "General contractor" / "Remodeler"
- Kitchen remodelling — A12 red ocean; EXACT "Kitchen remodeler"
- Bathroom remodelling — A12 red ocean; EXACT "Bathroom remodeler" (the bathroom-additions row is kept only as a section)
- Basement finishing (not a legal unit) — commodity and platform-locked (EST); the legal-suite slices are kept
- Fire damage restoration (mitigation) — EXACT GBP; see row
- Water damage restoration — EXACT GBP; see row
- Hoarding and biohazard cleanup — no local-data wedge; see row
- Generic pre-listing renovation — see row
- Junk removal and estate cleanouts — EXACT "Junk removal service"; low ticket
- General home inspection — EXACT "Home inspector"; low ticket
- Prefab sunroom kits — EXACT "Sunroom contractor", product-led; the porch-enclosure slice is kept

## Sources

Official and open data
- https://open.toronto.ca/dataset/building-permits-active-permits/
- https://open.toronto.ca/dataset/building-permits-cleared-permits/
- https://open.toronto.ca/dataset/fire-incidents/
- https://open.toronto.ca/dataset/neighbourhood-profiles/
- https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=building-permits-active-permits
- https://geohub.brampton.ca/datasets/brampton::registered-additional-residential-units/about
- https://maps1.brampton.ca/arcgis/rest/services/Two_Unit_Dwellings/Planning_Registered_Additional_Residential_Units/MapServer/0
- https://www.mississauga.ca/wp-content/uploads/2019/04/16101531/Second-Units-Registry-RunDate2026Sept.pdf
- https://www.mississauga.ca/services-and-programs/building-and-renovating/registering-a-second-unit/
- https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/
- https://www.brampton.ca/EN/residents/Building-Permits/second-dwelling/pages/two-unit-process.aspx
- https://www.markham.ca/about-city-markham/city-hall/bylaw/registration-basement-apartments-and-second-suites
- https://www.vaughan.ca/residential/secondary-suites/how-get-secondary-suite-adu (snippet; fetch returned 403)
- https://richmondhill.ca/en/register-apply-or-pay/additional-residential-unit.aspx
- https://pub-hamilton.escribemeetings.com/filestream.ashx?DocumentId=427549 (snippet)
- https://pub-whitby.escribemeetings.com/filestream.ashx?documentid=10153 (snippet)
- https://www.oshawa.ca/living-here/building-and-renovating/accessory-apartments/ (snippet)
- https://city-oshawa.opendata.arcgis.com/datasets/oshawa::oshawa-rental-housing-licenses-issued/about (snippet)
- https://www.ontario.ca/page/add-second-unit-your-house
- https://ontariofirecode.com/ontario-fire-code/ontario-fire-code/division-b-acceptable-solutions/part-9-retrofit/section-9-8-two-unit-residential-occupancies/
- https://www.toronto.ca/community-people/public-safety-alerts/safety-tips-prevention/home-high-rise-school-workplace-safety/low-rise-small-multi-unit-residential-fire-safety/two-dwelling-unit-houses-basement-apartments/
- https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/garden-suites/
- https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/
- https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/multiplex-housing/
- https://www.toronto.ca/legdocs/bylaws/2025/law0847.pdf
- https://www.toronto.ca/wp-content/uploads/2025/03/9689-Laneway-Suite-Fire-Access-Travel-Distance02282025AODA.pdf
- https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/new-laneway-suite/providing-fire-department-access-to-a-new-laneway-suite/
- https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/new-garden-suite/providing-fire-department-access-to-a-new-garden-suite/
- https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/pre-approved-garden-and-laneway-suite-plans/
- https://www.toronto.ca/community-people/community-partners/housing-partners/housing-initiatives/laneway-suites-program/
- https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/residential-demolition-permit-with-replacement-building/
- https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/
- https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html
- https://www.tssa.org/questionnaire-determine-applicability-private-dwelling-exemption-form-oreg-20901
- https://www.tarion.com/homeowners/pre-delivery-inspection
- https://www.blg.com/en/insights/2022/12/bill-23-in-ontario-the-more-homes-built-faster-act-2022-receives-royal-assent (snippet)
- https://schoolofcities.github.io/gentle-density/toronto-backyard-housing

Prices, programs and industry
- https://orielrenovations.com/toronto-renovation-blog/what-is-the-cost-of-a-laneway-house-or-garden-suite-in-toronto
- https://maserat.ca/blog/laneway-and-garden-suite-cost-toronto/
- https://maserat.ca/blog/how-much-does-a-second-floor-addition-cost-toronto/
- https://maserat.ca/blog/rear-home-addition-in-toronto/
- https://maserat.ca/blog/heritage-home-renovation-toronto/
- https://maserat.ca/blog/multi-generational-home-addition-toronto/
- https://maserat.ca/blog/condo-board-approval-checklist-toronto/
- https://maserat.ca/blog/condo-renovation-cost-toronto/
- https://maserat.ca/resources/home-renovations/accessible-bathroom-renovations-toronto/
- https://maserat.ca/resources/home-additions/toronto-additions-renovation-rebates/
- https://maserat.ca/resources/home-renovations-accessibility-rebate-calculator-toronto/
- https://www.renocalc.ca/en/blog/legal-basement-suite-cost-ontario-2026
- https://www.renocalc.ca/en/blog/garage-conversion-cost-canada-2026
- https://www.renocalc.ca/en/blog/home-addition-cost-canada-2026
- https://www.renocalc.ca/en/blog/secondary-suite-cost-canada-2026
- https://www.renocalc.ca/en/blog/basement-bathroom-cost-canada
- https://www.renocalc.ca/en/blog/renovation-financing-options-canada-2026
- https://www.adeptrenoandpaint.ca/articles/legal-basement-suite-toronto-guide-2026 (snippet)
- https://905reno.ca/fourplex-conversion-toronto/
- https://905reno.ca/garage-conversion-toronto-2026-summer-guide/
- https://905reno.ca/accessible-home-renovations-in-the-gta-walk-in-showers-grab-bars-and-the-ontario-grants-that-help-pay-for-them/
- https://leedwaygroup.com/demolition-costs-in-ontario-pricing-budget-guide/
- https://leedwaygroup.com/home-accessibility-tax-credit-ontario-2026-what-hatc-pays-now/
- https://leedwaygroup.com/multigenerational-home-renovation-tax-credit-a-smart-way-to-upgrade-your-home/
- https://leedwaygroup.com/aging-in-place-renovations-in-ontario-costs-ideas-accessibility-guide/
- https://leedwaygroup.com/modular-homes-ontario-2026-guide-to-costs-rules/
- https://leedwaygroup.com/in-law-suite-cost-ontario-your-complete-2026-guide/
- https://leedwaygroup.com/sunroom-and-room-addition-cost-ontario-2026-complete-honest-price-breakdown/
- https://leedwaygroup.com/best-home-improvements-before-selling-a-house-in-canada/
- https://landsignal.ai/blog/cost-to-demolish-a-house-in-toronto/
- https://landsignal.ai/blog/attic-conversion-toronto/
- https://landsignal.ai/blog/prefab-garden-suites-toronto/
- https://landsignal.ai/blog/legal-duplex-requirements-ontario/
- https://keydraftdesigns.com/laneway-suite-design-toronto-2026-the-new-by-law-847-2025-rules-you-need-to-know-for-permit-approval/ (snippet)
- https://www.bvmhomes.com/blog/ontario-regulation-462-24 (snippet)
- https://suite-spot.ca/the-bylaws/ (snippet)
- https://www.savaria.com/news/how-much-does-a-home-elevator-cost
- https://www.savaria.com/news/how-much-does-a-curved-stairlift-cost-in-2026
- https://silvercrossstores.com/straight-stairlifts/
- https://silvercross.com/getting-funding-for-accessibility-equipment-in-canada/
- https://www.acornstairlifts.ca/info/funding-tax-credits
- https://www.pauldavis.ca/fire-damage-restoration-from-emergency-to-rebuild
- https://www.pauldavis.ca/residential/biohazard-cleanup
- https://www.pauldavis.ca/the-science-and-success-of-removing-smoke-odours-from-furnishings-and-fabrics
- https://firstonsite.com/en-CA/service/odor-removal/
- https://servicemasterrestore.ca/post/TOP-10-FACTORS-THAT-AFFECT-THE-COST-OF-WATER-DAMAGE-RESTORATION
- https://servicemasterrestore.ca/post/Severe-Weather-Made-2025-The-Tenth-Costliest-Year-on-Record
- https://steamatic.ca/tips-and-tricks/hoarding-fire-safety/
- https://steamatic.ca/cleaning/crime-and-trauma-scene-clean-up/
- https://en.wikipedia.org/wiki/Don_Mills
