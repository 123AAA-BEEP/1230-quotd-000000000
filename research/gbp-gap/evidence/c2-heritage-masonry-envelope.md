# C2: Heritage, masonry, exterior envelope and roofing craft-slices (GTA)

retrieved_at: 2026-09-28 · rows: 35 (26 SERVICE/USE + 9 OUTCOME) · proof metro: Toronto

**Method.**
- Ran web searches (US vantage, Canadian sources preferred) until the shared session budget hit 200/200 partway through this pass. After that, used direct fetches only (WebFetch/curl) of pages already surfaced or on known domains. No search-engine workarounds.
- Pulled primary data directly:
  - StatCan Table 98-10-0233-01 via the WDS API (period of construction by census subdivision, 2021).
  - Toronto Open Data: Building Permits – Active (203,904 rows, refreshed 2026-09-28; keyword counts are Quotd's own analysis) and Heritage Register (Q3-2026 file).
  - toronto.ca: HCD page (modified 2026-09-02), Heritage Permit Guide, Heritage Grant, Heritage Register Review, HELP; plus Save on Energy HRSP.
- GBP beliefs were checked against a third-party 2026 list of about 4,200 GBP categories (daltonluka.com), not Google's own. That list has no "Tuckpointing contractor", porch, window-restoration or slate category. It does have: "Masonry contractor", "Bricklayer", "Chimney services", "Stucco contractor", "Sheet metal contractor", "Coppersmith", "Building restoration service", "Heritage preservation", "Paint stripping service", "Graffiti removal service", "Skylight contractor", "Millwork shop", "Railing contractor".

**Limitations.**
- Because the search budget ran out, several rows carry EST prices with no GTA page behind them (windows, storms, copper and built-in gutters, bargeboard, heritage consulting, exterior insulation).
- Reddit returned 403 and HomeStars 403. Figures marked "(search-surfaced)" come from search snippets of pages that blocked direct fetch.
- Permit declared values are self-reported at filing. Keyword counts come from the active-permits file only; cleared permits (since 2017) were not analysed, so counts are floors.
- Most of this cluster's work is permit-free (repointing, like-for-like roofing), so permit counts understate demand badly for everything except porches.
- The "pre-war core" postal-area (FSA) list is EST. Heritage Register rows are address points, not properties.

**GTA facts verified this pass (reusable modules).**
- **Pre-1946 housing (StatCan 98-10-0233-01, 2021; "1920 or before" + "1921 to 1945"):**
  - Toronto: 14.6% (169,710 of 1,160,895); pre-1961: 29.3%.
  - Toronto semi-detached houses: 40.8% pre-1946.
  - "Major repairs needed": 9.9% of pre-1946 dwellings vs 6.4% of all dwellings.
  - Other GTA municipalities: Hamilton 15.8% · Guelph 10.1% · Oshawa 9.3% · Kitchener 8.1% · Newmarket 4.6% · Barrie 4.0% · Waterloo 3.9% · Aurora 2.9% · Burlington/Whitby/Milton 2.6% · Ajax 2.3% · Pickering 2.1% · Oakville 1.7% · Mississauga/Brampton 1.5% · Richmond Hill 1.3% · Markham 1.0% · Vaughan 0.6%.
  - **Implication:** heritage-masonry pages clear the data bar in Toronto, Hamilton, Guelph, Oshawa and Kitchener, not in the 905 suburbs. Exceptions are rows driven by post-war stock: lintels, brick staining, ice dams.
  - **Correction for the repo:** `data/modules/housing/toronto-on.verification.md` says the 14.6% / 14.7% split "does not exist in the 2021 Census". It exists in Table 98-10-0233-01 (1920-or-before 88,110 + 1921–45 81,600 = 14.6%; 1946–60 = 170,475 = 14.7%).
- **Heritage Conservation Districts (HCDs):** the City's table has 24 rows, which is 29 districts by the City's own counting convention. The FAQ still says "created 27" (page modified 2026-09-02). West Queen West is under appeal; West Toronto Junction and West Annex Phase II are in study.
- **Heritage permits:**
  - HCD alterations go through the building-permit application; if no building permit is needed, owners email Heritage Planning.
  - A standalone heritage permit is free, and minor applications are approved in about a week.
  - Each HCD Plan lists the minor alterations that are exempt; interior work is exempt.
  - The Ontario Heritage Act sets a 90-day decision deadline, after which the permit is deemed approved.
- **Heritage Register (open data, Q3-2026):** 12,332 address points: Part V 7,280, listed 3,484, Part IV 1,568. 92% are in the former City of Toronto; Wards 13, 11 and 10 hold 72%.
  - About 4,000 listed properties leave the register on 2027-01-01 unless designated (Bills 23/200).
- **Toronto Heritage Grant:**
  - 50% matching, one grant per property every 5 years.
  - Eligible: masonry, porches, woodwork, original windows and doors, slate roofs (up to C$20,000, whole roof including copper eavestroughs), and technical studies.
  - Ineligible: general painting, asphalt, and new windows that replace repairable originals.
  - 2026 applications are due **Nov 7, 2026**.
- **Energy programs:**
  - Toronto HELP: loans up to C$125,000 for insulation including exterior walls, repaid on the property-tax bill.
  - Ontario HRSP: up to C$7,700 insulation rebates (assessment path); attic insulation C$1,000–1,250 without an assessment; C$100 per window opening, only for ENERGY STAR units.
- **Competitor alert:** kildrin.ca (sitemap updated 2026-09-27) publishes Toronto cost pages built from building-permit declared values, split by former municipality. It covers porches, underpinning, decks, additions, second, garden and laneway suites. Its model is lead-gen, "paid by the contractor". smartbuyerguide.ca is a lead-gen hybrid.

---

## Niche rows

### lime-mortar-repointing
- name: "lime mortar repointing" / "tuckpointing contractors"
- status: EXISTING(lime-mortar-repointing)
- level: SERVICE
- tier: T2
- gta_price_cad: repoint C$10–25/sq ft; tuckpoint C$15–30/sq ft; C$1,500–2,500 minimum; full-perimeter detached C$3,000–6,000; whole semi EST C$12k–35k — https://www.brickaidmasonry.com/blog/brick-repair-cost-toronto; https://stonemasonrytoronto.com/service/tuckpointing/
- gbp_belief: PARTIAL — nearest: "Masonry contractor" (also "Bricklayer"; no tuckpointing category)
- gta_drivers: 169,710 Toronto dwellings (14.6%) predate 1946 and were laid in lime mortar; cement repointing spalls pre-1950 brick within 2–5 winters. — https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810023301; https://stonemasonrytoronto.com/service/tuckpointing/
- data_hooks: pre-1946 share by census subdivision; Heritage Register; Heritage Grant (masonry, due 2026-11-07); freeze-thaw proxy 58.4 days/yr (data/modules/climate/toronto-on.json)
- season: Apr–Nov (mortar must cure above freezing)
- web: crumbling brick, spalled brick replacement, chimney rebuild, limewash on brick, efflorescence, stone repointing, heritage permit
- queries: "lime mortar repointing toronto", "tuckpointing cost toronto", "repoint century home brick", "heritage masonry contractor toronto"
- verdict: STRONG — wrong-mortar regret; housing-age and grant data change advice by city.

### spalled-brick-restoration
- name: "brick restoration" / "spalled brick replacement"
- status: TAXONOMY-ROW (Invisible facade patch repair; Brick tinting and blending)
- level: SERVICE
- tier: T3
- gta_price_cad: small spall repair C$500–1,500; wall/corner rebuild C$5,000+ — https://www.brickaidmasonry.com/blog/brick-repair-cost-toronto; bricks C$25–50 each, full wall C$5k–30k+ — https://callmantle.ca/blog-brick-cleaning-toronto
- gbp_belief: PARTIAL — nearest: "Masonry contractor" (also "Building restoration service")
- gta_drivers: 9.9% of Toronto's pre-1946 dwellings need major repairs vs 6.4% overall; HCDs make "alteration of existing cladding and/or brickwork" a permit item. — https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810023301; https://southrosedale.org/heritage-qa/
- data_hooks: dwelling condition × period of construction; HCD boundaries; Heritage Grant; Property Standards orders (Municipal Code Ch. 629)
- season: Apr–Nov
- web: lime mortar repointing, salvaged-brick matching, bulging brick wall, lintel repair, crack stitching, paint removal
- queries: "spalling brick repair toronto", "replace damaged bricks old house", "brick matching toronto", "crumbling brick wall repair"
- verdict: GOOD — generic masonry pack; condition data strong; sibling of repointing page.

### chimney-rebuild
- name: "chimney rebuild" / "chimney masons"
- status: EXISTING(chimney-rebuilds)
- level: SERVICE
- tier: T3
- gta_price_cad: above-roofline C$2,500–5,500, full rebuild C$5,000–15,000+ — https://gtabrickworks.com/how-much-does-chimney-repair-cost-in-toronto/; above-roofline C$5,000–10,000 — https://www.brickaidmasonry.com/chimney-repair-toronto
- gbp_belief: EXACT — nearest: "Chimney services" (Track-2 slice: lime-mortar heritage rebuild)
- gta_drivers: 40.8% of Toronto semis predate 1946, most with brick stacks; HCD permit drawings must show chimney changes. — https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810023301; https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/
- data_hooks: housing age; HCD and Part IV register; freeze-thaw; Heritage Grant (masonry)
- season: Apr–Nov; leaning stacks year-round
- web: leaning chimney, chimney removal, chimney relining, flashing leak, slate roof, lime repointing
- queries: "chimney rebuild cost toronto", "rebuild chimney above roofline", "repair or remove chimney toronto"
- verdict: GOOD — exact GBP category, but the rebuild-vs-remove decision makes data-rich content.

### chimney-removal
- name: "chimney removal"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: to roofline C$3,500–7,500; full C$5,000–15,000; water-heater vent reroute C$1,500–3,500; permit C$300–600 — https://renohouse.ca/blog/chimney-removal-cost-toronto-process
- gbp_belief: PARTIAL — nearest: "Chimney services" (also "Demolition contractor")
- gta_drivers: Toronto requires a demolition/alteration permit, and heritage review adds 4–8 weeks. Only 8 chimney-scoped active permits were filed since 2024, so most removals likely go unpermitted (EST). — https://renohouse.ca/blog/chimney-removal-cost-toronto-process; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: building permits; HCD boundaries; housing age; asbestos survey flag (O. Reg. 278/05)
- season: Apr–Nov (roof open)
- web: chimney rebuild, reroofing, furnace/water-heater venting, party-wall chimneys on semis, leaning chimney
- queries: "chimney removal cost toronto", "remove unused chimney", "chimney removal permit toronto"
- verdict: GOOD — distinct query; permit, venting and heritage rules change the advice.

### historic-window-restoration
- name: "heritage window restoration" / "wood window restorers"
- status: LAUNCH-10(historic-window-restoration)
- level: SERVICE
- tier: T2
- gta_price_cad: EST C$800–2,000/window, C$10k–35k whole house; floor anchor: heritage-window painting C$400–600+ plus reglazing C$75–150 — https://www.homepainterspro.ca/services/exterior-window-painting-toronto/; US fallback US$300–1,400/window (data/validation/evidence/historic-window-restoration.md)
- gbp_belief: PARTIAL — nearest: "Glazier" (no repair/restoration category; "Window installation service" means replacement)
- gta_drivers: Replacing windows in an HCD needs a permit. The grant funds original-window repair, not replacement of repairable originals. HRSP rebates only ENERGY STAR replacements. — https://southrosedale.org/heritage-qa/; https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- data_hooks: HCD and Heritage Register; Heritage Grant; HRSP rebate asymmetry; housing age
- season: exterior May–Oct; shop sash work year-round
- web: interior storm windows, drafty windows in HCD, sash cords, reglazing, leaded glass, heritage permit
- queries: "window restoration toronto", "restore old wood windows cost", "heritage windows toronto", "repair or replace heritage windows"
- verdict: STRONG — no GBP category; permit, grant and rebate rules pull opposite ways.

### interior-storm-windows
- name: "interior storm windows" / "window inserts"
- status: EXISTING(storm-windows-interior)
- level: USE
- tier: T3
- gta_price_cad: EST C$350–900/window, C$5k–15k whole house (no GTA source retrieved); the HRSP window rebate requires ENERGY STAR units — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- gbp_belief: PARTIAL — nearest: "Window supplier"
- gta_drivers: Reversible storms keep original sash where HCD rules make replacement a permit item (storms not listed). — https://southrosedale.org/heritage-qa/
- data_hooks: HCD and Heritage Register; HELP (air sealing); 101 days/yr at or below 0 °C (data/modules/climate/toronto-on.json)
- season: install Sep–Nov
- web: heritage window restoration, drafty windows, weatherstripping, HELP loan, energy audit
- queries: "interior storm windows toronto", "window inserts for old windows", "storm windows heritage home"
- verdict: BORDERLINE — thin local pricing; best as a section under window restoration.

### porch-restoration
- name: "porch restoration" / "front porch rebuild"
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: 327 porch-scoped permits since 2024, median declared C$15,000, IQR C$9k–30k (Quotd count) — https://open.toronto.ca/dataset/building-permits-active-permits/; Old Toronto/York median C$20,000 — https://kildrin.ca/cost/front-porch-replacement/old-toronto-york; covered porch C$25k–40k+ — https://smartbuyerguide.ca/blog/porch-renovation-cost-toronto
- gbp_belief: PARTIAL — nearest: "Deck builder" (also "Carpenter"; no porch category)
- gta_drivers: Half of porch permits fall in pre-war postal areas (M6H, M4L, M6E lead; FSA list EST). HCD porch changes need permits, and the grant funds porch repair. — https://southrosedale.org/heritage-qa/; https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- data_hooks: permit counts and declared values by FSA; HCD; Heritage Grant
- season: May–Oct
- web: rotting porch, columns and railings, front steps, porch roof, porch painting, heritage permit
- queries: "porch rebuild toronto", "front porch repair cost toronto", "victorian porch restoration", "porch columns replacement"
- verdict: STRONG — no GBP category; permit data prices it locally (Kildrin already does).

### heritage-exterior-painting
- name: "heritage house painters" / "painting Victorian trim"
- status: NEW
- level: USE
- tier: T3
- gta_price_cad: semi exterior C$5,500–9,500; detailed Victorian trim +C$1,000–3,500; third-storey scaffold +C$1,500–4,000 — https://www.homepainterspro.ca/blogs/exterior-house-painting-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Painter"
- gta_drivers: The grant excludes general painting but funds paint analysis. Pre-1980 trim means lead-safe stripping, which adds 20–30%. — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/; https://www.homepainterspro.ca/services/paint-stripping-toronto/
- data_hooks: HCD; housing age; Heritage Grant (paint analysis)
- season: mid-May–mid-Sep
- web: bargeboard restoration, porch restoration, window reglazing, paint stripping, limewash
- queries: "victorian house painters toronto", "heritage exterior painting toronto", "painting old wood trim lead paint"
- verdict: BORDERLINE — commodity Painter pack; slice rests on heritage and lead content.

### bargeboard-trim-restoration
- name: "bargeboard and gingerbread trim restoration"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$3k–12k to replicate and install (no GTA price retrieved); painting detailed trim alone adds C$1,000–3,500 — https://www.homepainterspro.ca/blogs/exterior-house-painting-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Millwork shop" (install: "Carpenter")
- gta_drivers: Bay-and-gable houses (1860s–1895) are ubiquitous in old Toronto, nearly half of Cabbagetown's 1880s homes, with carved gable boards. Removing decorative trim needs a permit; the grant funds rebuilding lost features. — https://en.wikipedia.org/wiki/Bay-and-gable; https://southrosedale.org/heritage-qa/
- data_hooks: Heritage Register (construction-year field); HCD; Heritage Grant
- season: May–Oct
- web: heritage painting, porch restoration, slate roof, cornice sheet metal, heritage permit
- queries: "bargeboard replacement toronto", "gingerbread trim restoration", "bay and gable restoration"
- verdict: BORDERLINE — Toronto-native craft; demand and price unverified; start as a guide.

### slate-roof-repair
- name: "slate roof repair" / "slate roofers"
- status: LAUNCH-10(slate-roof-repair)
- level: SERVICE
- tier: T3
- gta_price_cad: repair EST C$1k–10k (US fallback US$500–3,200, data/validation/evidence/slate-roof-repair.md); replacement C$20–35/sq ft, C$40k–70k per 2,000 sq ft (T1) — https://greenbuildingcanada.ca/roof-replacement-costs-ontario/; grant 50% up to C$20,000 — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- gbp_belief: PARTIAL — nearest: "Roofing contractor"
- gta_drivers: The grant singles out slate: whole-roof funding regardless of visibility, while asphalt is ineligible. Like-for-like work leaves no permit trail (2 active permits mention slate). — https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: Heritage Grant; Heritage Register; listed-property deadline 2027-01-01; housing age
- season: Apr–Nov; leak calls year-round
- web: copper valleys and flashing, built-in gutters, copper eavestroughs, chimney rebuild, ice dams, heritage permit
- queries: "slate roof repair toronto", "slate roofer toronto", "slate roof heritage grant", "replace slate with asphalt"
- verdict: STRONG — grant names slate; scarce specialists; full restorations reach T1.

### cedar-shake-roofing
- name: "cedar shake roofers"
- status: EXISTING(cedar-shake-roofing)
- level: SERVICE
- tier: T2
- gta_price_cad: C$16–24/sq ft installed (Toronto) — https://www.custom-contracting.ca/resources/roofing-cost-toronto; C$15–25/sq ft, C$30k–50k per 2,000 sq ft (Ontario) — https://greenbuildingcanada.ca/roof-replacement-costs-ontario/
- gbp_belief: PARTIAL — nearest: "Roofing contractor"
- gta_drivers: Real cedar is rare in Toronto (3 active permits mention shakes); century-home owners mostly buy cedar-look asphalt. — https://open.toronto.ca/dataset/building-permits-active-permits/; https://www.custom-contracting.ca/resources/roofing-cost-toronto
- data_hooks: HCD roof-material rules; climate; permits (sparse)
- season: May–Oct
- web: slate roof repair, copper flashing, cedar shingle siding, ice dams, skylights
- queries: "cedar shake roof toronto", "cedar roof replacement cost ontario", "cedar shake roofers gta"
- verdict: BORDERLINE — T2 ticket but thin GTA stock; better in cottage-country metros.

### copper-zinc-standing-seam-roofing
- name: "copper and standing-seam roofing" / "copper roofers"
- status: EXISTING(copper-roofing-flashing); TAXONOMY-ROW (Copper standing-seam roofing; Zinc roofing; Bay window copper roofs)
- level: SERVICE
- tier: T2
- gta_price_cad: standing seam C$14–22/sq ft — https://www.custom-contracting.ca/resources/roofing-cost-toronto; metal C$7–30/sq ft, C$14k–60k — https://greenbuildingcanada.ca/roof-replacement-costs-ontario/; copper EST C$30–60/sq ft; bay or porch accent roofs EST C$4k–15k
- gbp_belief: PARTIAL — nearest: "Sheet metal contractor" (also "Coppersmith", "Roofing contractor")
- gta_drivers: Heritage sheet-metal firms do copper, lead-coated valleys and cornices on Rosedale homes; HCD permit drawings must show roof changes. — https://heatherandlittle.com/what-we-do/roofs-and-walls/slate-roofs/; https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/
- data_hooks: HCD; Heritage Grant (copper eavestroughs with slate); permits (porch canopies)
- season: Apr–Nov
- web: porch roof, bay window roof, copper eavestroughs, built-in gutters, slate roof, flashing
- queries: "copper roofing toronto", "standing seam porch roof toronto", "zinc roof toronto", "copper bay window roof"
- verdict: GOOD — Track-2 slice with an identifiable heritage sheet-metal tier.

### flat-roof-replacement-toronto
- name: "flat roof replacement" (semis, rowhouses)
- status: NEW
- level: USE
- tier: T3
- gta_price_cad: C$7,000–14,000 for a 600–900 sq ft mod-bit roof on a semi or row house (search-surfaced) — https://videlroofing.ca/blog/flat-roof-replacement-cost-toronto/; TPO/mod-bit C$8–14/sq ft — https://www.custom-contracting.ca/resources/roofing-cost-toronto
- gbp_belief: PARTIAL — nearest: "Roofing contractor" (the head term is exact; this slice is unnamed)
- gta_drivers: Row houses and workers' cottages have partial flat sections priced separately. Like-for-like reroofs need no permit; skylights and roof decks do (210 active permits since 2024 mention roof decks). — https://www.custom-contracting.ca/resources/roofing-cost-toronto; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permits (roof decks, skylights); HCD skylight rules; freeze-thaw
- season: May–Oct
- web: leaking flat roof, roof deck, skylight replacement, ice dams, parapet flashing, porch roof
- queries: "flat roof replacement toronto", "flat roof semi detached cost", "mod bit vs tpo toronto", "flat roof leak repair toronto"
- verdict: GOOD — Track-2 slice; semi/row geometry is Toronto-specific; roofing head is platform-locked.

### built-in-gutter-restoration
- name: "built-in (box / Yankee) gutter restoration"
- status: TAXONOMY-ROW (Built-in gutter restoration; Yankee gutter restoration)
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$4k–20k (no GTA price retrieved); the grant funds copper eavestroughs only as part of a whole slate-roof restoration — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- gbp_belief: PARTIAL — nearest: "Sheet metal contractor" (also "Gutter service")
- gta_drivers: The heritage sheet-metal tier fabricates custom gutters and cornices. General eavestrough firms quote C$150–700 repairs, a different trade. — https://heatherandlittle.com/what-we-do/roofs-and-walls/slate-roofs/; https://www.custom-contracting.ca/locations/toronto/eavestrough-repair
- data_hooks: Heritage Grant; HCD; freeze-thaw
- season: May–Oct
- web: copper eavestroughs, slate roof, ice dams, cornice restoration, soffit rot
- queries: "built in gutter repair toronto", "box gutter restoration", "yankee gutter repair"
- verdict: BORDERLINE — genuine craft, unproven Toronto stock; section under slate/copper.

### copper-eavestroughs
- name: "copper eavestroughs" / "copper gutters"
- status: EXISTING(copper-gutters)
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$4k–12k per house (no GTA price retrieved); aluminum repairs C$150–700 for contrast — https://www.custom-contracting.ca/locations/toronto/eavestrough-repair
- gbp_belief: PARTIAL — nearest: "Gutter service" (also "Coppersmith")
- gta_drivers: The grant pays for copper or zinc-coated copper eavestroughs only inside a slate-roof restoration; Forest Hill heritage jobs match copper. — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/; https://www.custom-contracting.ca/locations/toronto/eavestrough-repair
- data_hooks: Heritage Grant; HCD; home value by ward
- season: Apr–Nov
- web: half-round copper, leader heads, slate roof, built-in gutters, standing seam
- queries: "copper eavestrough toronto", "copper gutters cost toronto", "half round copper gutters gta"
- verdict: GOOD — Track-2 slice of commodity eavestrough; GTA pricing still needed.

### stucco-eifs-remediation
- name: "EIFS / stucco repair"
- status: EXISTING(stucco-remediation)
- level: SERVICE
- tier: T2
- gta_price_cad: repairs C$400–4,000+; full removal and re-application C$15–25/sq ft (EST C$20k–35k on a semi) — https://www.homepainterspro.ca/services/stucco-repair-painting-toronto/; reclad alternative C$12k–28k on a semi — https://www.custom-contracting.ca/resources/siding-cost-toronto
- gbp_belief: EXACT — nearest: "Stucco contractor"
- gta_drivers: Most Toronto "stucco" is EIFS, softer and moisture-vulnerable. 42 stucco/EIFS/overclad-scoped active permits since 2024, mostly apartments. — https://www.homepainterspro.ca/services/stucco-repair-painting-toronto/; https://open.toronto.ca/dataset/building-permits-active-permits/
- data_hooks: permits (overclad/EIFS); climate; housing age (1981–2000 stock)
- season: May–Oct
- web: EIFS inspection, exterior insulation retrofit, siding replacement, stucco painting, water intrusion
- queries: "eifs repair toronto", "stucco repair toronto", "stucco replacement cost toronto", "water behind stucco"
- verdict: BORDERLINE — exact GBP category; the remediation slice lacks Toronto-specific data.

### exterior-insulation-retrofit
- name: "exterior insulation retrofit" / "deep energy retrofit"
- status: NEW
- level: USE
- tier: T1
- gta_price_cad: EST C$40k–120k (walls, windows, air sealing); HELP loans up to C$125,000 — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/; HRSP insulation rebates up to C$7,700 — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- gbp_belief: PARTIAL — nearest: "Insulation contractor" (also "Energy advisory service")
- gta_drivers: HELP funds exterior-wall insulation repaid on the tax bill. In HCDs, over-cladding a front façade is a brickwork alteration needing a permit. — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/; https://southrosedale.org/heritage-qa/
- data_hooks: HELP; HRSP; NRCan energy advisors; HCD; permits (73 EIFS/exterior-insulation mentions since 2024)
- season: May–Oct
- web: EIFS, insulating solid brick walls, window restoration vs replacement, heat pumps, air sealing, ice dams
- queries: "exterior insulation retrofit toronto", "insulate double brick house", "deep energy retrofit cost toronto", "help loan toronto"
- verdict: GOOD — T1 ticket, program-rich data; thin supply; consumer term unsettled.

### stone-restoration
- name: "stone restoration" / "sandstone and limestone repair"
- status: TAXONOMY-ROW (Stone facade repointing; Cast stone repair; Terra cotta facade repair)
- level: SERVICE
- tier: T3
- gta_price_cad: heritage NHL5 stone repointing C$20–40/sq ft; dutchman or sill repair EST C$1k–5k per element — https://stonemasonrytoronto.com/service/exterior-stonework/
- gbp_belief: PARTIAL — nearest: "Masonry contractor" (also "Stone cutter", "Building restoration service")
- gta_drivers: Cabbagetown, Annex, Riverdale, Roncesvalles and Leslieville houses carry Owen Sound sandstone and Indiana limestone trim; bay-and-gables add terracotta. — https://stonemasonrytoronto.com/service/exterior-stonework/; https://en.wikipedia.org/wiki/Bay-and-gable
- data_hooks: Heritage Register (reason codes); HCD; Heritage Grant
- season: Apr–Nov
- web: lime repointing, lintel and sill repair, paint removal, brick restoration, heritage permit
- queries: "sandstone repair toronto", "limestone sill replacement", "stone restoration heritage home toronto"
- verdict: GOOD — scarce dutchman and carving skill; low volume EST; strong register data.

### masonry-paint-removal
- name: "paint removal from brick"
- status: TAXONOMY-ROW (Historic paint removal on masonry; Soft-wash facade restoration)
- level: SERVICE
- tier: T3
- gta_price_cad: chemical stripping C$8–14/sq ft — https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/; lead adds 20–30% — https://www.homepainterspro.ca/services/paint-stripping-toronto/; semi façade EST C$6k–20k
- gbp_belief: PARTIAL — nearest: "Paint stripping service" (also "Sandblasting service")
- gta_drivers: Painted brick traps moisture under freeze-thaw; abrasive blasting strips the brick's fired face; painting a brick façade is an HCD permit item. — https://www.nps.gov/orgs/1739/upload/preservation-brief-06-abrasive-cleaning.pdf; https://southrosedale.org/heritage-qa/
- data_hooks: HCD; climate; graffiti bylaw (Municipal Code Ch. 485)
- season: May–Oct
- web: limewash as re-cover, brick staining, graffiti removal, efflorescence, spalling brick
- queries: "remove paint from brick toronto", "soda blasting brick toronto", "undo painted brick", "strip paint brick house cost"
- verdict: GOOD — regret-driven demand; method education differentiates; priced locally.

### brick-staining
- name: "brick staining" / "german schmear"
- status: EXISTING(brick-staining); german schmear folded in: EXISTING(german-schmear)
- level: SERVICE
- tier: T3
- gta_price_cad: stain C$3–6/sq ft + HST (paint C$5–10) — https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/; semi EST C$4k–9k; german schmear unpriced, EST C$6–12/sq ft
- gbp_belief: PARTIAL — nearest: "Painter" (also "Masonry contractor")
- gta_drivers: Penetrating stain breathes and lasts 15–20 years where film paint fails under freeze-thaw. 28.8% of Toronto dwellings are 1961–80 post-war brick. — https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/; data/modules/housing/toronto-on.verification.md
- data_hooks: housing age; HCD; climate
- season: mid-May–mid-Sep, nights above 10 °C
- web: limewash, german schmear, paint removal, brick tinting, efflorescence
- queries: "brick staining toronto", "change brick colour", "german schmear toronto", "brick stain vs paint"
- verdict: GOOD — same buyer as limewash; cheap cluster extension.

### exterior-limewash-heritage-brick
- name: "limewash on exterior brick"
- status: LAUNCH-10(limewash-painting)
- level: USE
- tier: T3
- gta_price_cad: C$4–8/sq ft + HST — https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/; data/modules/cost/limewash-toronto-on.json
- gbp_belief: PARTIAL — nearest: "Painter"
- gta_drivers: Limewash is breathable and partly reversible, which suits soft Victorian brick, but it won't bond over paint. Painting brick in an HCD may need approval. — https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/; https://thehandyforce.com/painted-brick-toronto/
- data_hooks: HCD boundaries; housing age; curing window May–Sep (data/modules/climate/toronto-on.json)
- season: May–Sep full; Apr and Oct marginal
- web: paint removal, brick staining, german schmear, lime repointing, heritage permit
- queries: "limewash brick house toronto", "limewash heritage home permit", "limewash painter toronto"
- verdict: STRONG — launch niche; HCD and curing data localize it.

### lintel-and-arch-repair
- name: "lintel replacement" / "brick arch repair"
- status: TAXONOMY-ROW (Lintel replacement; Window arch reconstruction)
- level: SERVICE
- tier: T3
- gta_price_cad: per opening C$1,500–2,500 ground floor, C$2,500–3,500 second storey, C$4,000–5,500+ severe; engineer C$500–1,200; permit C$200–500 — https://installixwnd.ca/blog/replacing-rusty-lintel-beams-above-windows/
- gbp_belief: PARTIAL — nearest: "Masonry contractor"
- gta_drivers: 1950–75 brick houses in Etobicoke, North York and Scarborough got primed steel lintels with weak flashing, so rust-jacking is common. — https://installixwnd.ca/blog/replacing-rusty-lintel-beams-above-windows/
- data_hooks: housing age (43% of Toronto dwellings built 1946–80); freeze-thaw; permits (28 lintel-scoped since 2024)
- season: Apr–Nov
- web: cracked lintel, window replacement, brick restoration, arch rebuild, crack stitching
- queries: "lintel replacement toronto", "rusted lintel above window", "brick arch repair toronto"
- verdict: GOOD — urgent; fits post-war stock, so it widens beyond heritage cities.

### heritage-permit-consulting
- name: "heritage consultants" / "heritage permit help"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$2k–15k for a heritage impact assessment or conservation plan; the permit itself is free — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-conservation-districts-planning-studies/
- gbp_belief: PARTIAL — nearest: "Heritage preservation" (also "Architect")
- gta_drivers: 29 HCDs (the FAQ still says 27) and 7,280 Part V address points. About 4,000 listed properties drop off the register on 2027-01-01. The grant reimburses HIA fees. — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-register-review/
- data_hooks: HCD plans; Heritage Register; Bill 23/200 deadline; OHA 90-day rule; grant deadline 2026-11-07
- season: year-round; peaks before the November grant deadline
- web: heritage permit required, window restoration, porch rebuild, masonry, grant application
- queries: "heritage consultant toronto", "heritage impact assessment cost", "renovating in heritage district toronto"
- verdict: GOOD — pure regulatory data; the buyer tier is consultants and architects.

### wood-siding-restoration
- name: "wood siding restoration" / "board-and-batten siding"
- status: EXISTING(board-batten-siding); TAXONOMY-ROW (Exterior wood siding restoration)
- level: SERVICE
- tier: T2
- gta_price_cad: new siding on a semi C$12k–20k vinyl, C$18k–28k fibre cement — https://www.custom-contracting.ca/resources/siding-cost-toronto; wood prep adds C$1,500–5,000 to painting — https://www.homepainterspro.ca/blogs/exterior-house-painting-cost-toronto/; wood restoration EST
- gbp_belief: PARTIAL — nearest: "Siding contractor" (also "Carpenter")
- gta_drivers: Toronto's 1900–1960 houses are mostly brick veneer or solid brick, so wood cladding is a minority. New siding in an HCD needs a permit. — https://www.custom-contracting.ca/resources/siding-cost-toronto; https://southrosedale.org/heritage-qa/
- data_hooks: HCD; permits; housing age
- season: May–Oct
- web: heritage painting, stucco, exterior insulation, cedar shingles
- queries: "board and batten siding toronto", "wood siding repair toronto", "cedar siding restoration"
- verdict: BORDERLINE — brick-dominant GTA stock; revisit for wood-clad metros.

### ice-dam-prevention-retrofit
- name: "ice dam prevention" (attic air sealing, insulation, venting)
- status: TAXONOMY-ROW (Ice dam mitigation retrofits)
- level: SERVICE
- tier: T3
- gta_price_cad: EST C$3k–10k; HRSP attic insulation C$1,000–1,250, air sealing up to C$250 — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings; ice-dam damage repair from C$350 — https://www.custom-contracting.ca/locations/toronto/eavestrough-repair
- gbp_belief: PARTIAL — nearest: "Insulation contractor" (also "Roofing contractor")
- gta_drivers: Toronto City averages 101 days/yr at or below 0 °C and about 58 freeze-thaw crossing days (1991–2020 normals). — https://github.com/wmo-im/WMO-climatological-normals-CLINO/blob/main/data/Region-4-WMO-Normals-9120/Canada/CSV/Toronto_City_71508.csv
- data_hooks: climate normals; HRSP; HELP; housing age
- season: book Sep–Nov; symptoms Jan–Mar
- web: ice dams every winter, attic insulation, roof venting, heat cables, eavestroughs, flat roof
- queries: "ice dam prevention toronto", "stop ice dams on roof", "attic insulation ice dams", "heat cables roof toronto"
- verdict: GOOD — outcome-led; rebate and climate data localize; works across the 905 suburbs.

### front-steps-rebuild
- name: "front steps rebuild" (stone, precast)
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: stair replacement C$2,500–10,000 — https://smartbuyerguide.ca/blog/porch-renovation-cost-toronto; concrete steps full replacement C$3,000–8,000 (southwestern Ontario) — https://www.theartofconcrete.ca/post/2025-concrete-porch-repair-costs
- gbp_belief: PARTIAL — nearest: "Concrete contractor" (also "Masonry contractor")
- gta_drivers: Steps usually ride on porch permits (23 porch-scoped permits since 2024 mention stairs); front-porch and landscape changes need HCD permits. — https://open.toronto.ca/dataset/building-permits-active-permits/; https://southrosedale.org/heritage-qa/
- data_hooks: permits; HCD; freeze-thaw and de-icing salt
- season: May–Oct
- web: porch rebuild, iron railings, stone restoration, walkway, parging
- queries: "front steps replacement toronto", "precast concrete steps toronto", "stone steps repair"
- verdict: BORDERLINE — landscaping-adjacent commodity; better as a porch-page section.

### heritage-permit-required-exterior
- name: "do I need a heritage permit" (exterior work in an HCD)
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: permit is free; minor ones approved in about a week; downstream porch, window and masonry jobs are T2–T3 — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-conservation-districts-planning-studies/
- gbp_belief: NONE — nearest: "Heritage preservation"
- gta_drivers: HCD alterations are reviewed through the building-permit application. Each HCD Plan lists exempt minor work. Decisions are due within 90 days or the permit is deemed approved. — https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/
- data_hooks: 29 HCD boundaries and plans; Heritage Register address lookup (quarterly open data); West Queen West under appeal; Junction and West Annex II in study
- season: year-round
- web: heritage consulting, window restoration, porch rebuild, limewash, slate roof, masonry, storm windows
- queries: "do i need a heritage permit toronto", "heritage permit to replace windows", "heritage district renovation rules toronto"
- verdict: STRONG — OWN PAGE: city-specific rules, no GBP competition, feeds every spoke.

### crumbling-spalling-brick
- name: "bricks crumbling / spalling"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: small spall repair C$500–1,500; full-perimeter repoint C$3,000–6,000 — https://www.brickaidmasonry.com/blog/brick-repair-cost-toronto
- gbp_belief: PARTIAL — nearest: "Masonry contractor"
- gta_drivers: Cement mortar on soft pre-1950 brick causes spalling within two to five winters. — https://stonemasonrytoronto.com/service/tuckpointing/
- data_hooks: housing age; freeze-thaw; dwelling condition
- season: diagnose Apr–May after the thaw
- web: lime repointing, spalled brick replacement, paint removal, efflorescence, downspouts
- queries: "bricks crumbling on old house", "spalling brick toronto", "why are my bricks flaking"
- verdict: GOOD — OWN GUIDE page; cause-first advice routes to repointing.

### white-stains-on-brick
- name: "white stains on brick" (efflorescence)
- status: TAXONOMY-ROW (Efflorescence treatment)
- level: OUTCOME
- tier: DEFER(C$300–2,500 EST)
- gta_price_cad: EST cleaning C$300–2,500; underlying repointing or drainage fixes reach T3 — https://callmantle.ca/blog-brick-cleaning-toronto
- gbp_belief: NONE — nearest: "Pressure washing service"
- gta_drivers: Heritage brick takes soft washing only; acid or high-pressure washing does irreversible damage within two to five winters. — https://callmantle.ca/blog-brick-cleaning-toronto
- data_hooks: housing age; precipitation days (climate module)
- season: spring
- web: crumbling brick, lime repointing, eavestrough leaks, pressure-washing damage
- queries: "white stuff on bricks", "efflorescence removal toronto", "white stains on brick house"
- verdict: BORDERLINE — informational; FAQ section routing to masonry diagnosis.

### leaning-chimney
- name: "leaning chimney"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: full rebuild C$5,000–15,000+ — https://gtabrickworks.com/how-much-does-chimney-repair-cost-in-toronto/; removal to roofline C$3,500–7,500 — https://renohouse.ca/blog/chimney-removal-cost-toronto-process
- gbp_belief: PARTIAL — nearest: "Chimney services"
- gta_drivers: Toronto masons treat a leaning stack as an emergency, not a repair. — https://www.brickaidmasonry.com/chimney-repair-toronto
- data_hooks: housing age; freeze-thaw; HCD (removal needs review)
- season: year-round (urgent)
- web: chimney rebuild, chimney removal, flashing leak, roof repair, insurance claim
- queries: "leaning chimney what to do", "chimney tilting toronto", "chimney pulling away from house"
- verdict: GOOD — urgent trigger; section on the rebuild-vs-remove pages.

### rotting-porch
- name: "rotting porch"
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: partial rebuild C$3,000–15,000; small open rebuild C$10k–25k — https://smartbuyerguide.ca/blog/porch-renovation-cost-toronto
- gbp_belief: NONE — nearest: "Deck builder"
- gta_drivers: Toronto porch permits concentrate in pre-war postal areas; HCD porch changes need permits, and the grant funds repair. — https://open.toronto.ca/dataset/building-permits-active-permits/; https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- data_hooks: permits by FSA; HCD; Heritage Grant
- season: May–Oct
- web: porch restoration, front steps, porch columns, porch painting, heritage permit
- queries: "rotting porch repair toronto", "porch floor rotting", "porch columns rotten"
- verdict: GOOD — funnels to the porch page; FAQ/section.

### drafty-windows-heritage-district
- name: "drafty old windows where replacement is restricted"
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: see window restoration (EST C$10k–35k whole house); heritage-window painting plus reglazing C$475–750/window — https://www.homepainterspro.ca/services/exterior-window-painting-toronto/
- gbp_belief: NONE — nearest: "Window installation service" (the wrong answer)
- gta_drivers: Replacement needs a heritage permit; the grant refuses new windows where originals are repairable; HRSP rebates only ENERGY STAR replacements. — https://southrosedale.org/heritage-qa/; https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- data_hooks: HCD; Heritage Grant; HRSP; HELP
- season: Sep–Nov (before heating season)
- web: window restoration, interior storm windows, weatherstripping, heritage permit, HELP loan
- queries: "drafty old windows heritage home", "can i replace windows in heritage district toronto", "make old windows energy efficient"
- verdict: STRONG — OWN PAGE: the permit-versus-rebate conflict is unique local data.

### leaking-flat-roof
- name: "leaking flat roof"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: replacement C$7,000–14,000 on a semi (search-surfaced) — https://videlroofing.ca/blog/flat-roof-replacement-cost-toronto/; repair EST C$400–2,500
- gbp_belief: PARTIAL — nearest: "Roofing contractor"
- gta_drivers: Partial flat sections are common on row houses and workers' cottages; local roofers publicly warn that replacement is often premature. — https://www.custom-contracting.ca/resources/roofing-cost-toronto; https://rightchoiceroofing.ca/2026/04/06/think-your-flat-roof-needs-replacing-read-this-before-you-spend-a-dollar/
- data_hooks: climate; permits (roof decks, skylights)
- season: fix May–Oct; leaks peak at spring thaw
- web: flat roof replacement, skylight leak, roof deck, ice dams, parapet flashing
- queries: "flat roof leaking toronto", "flat roof repair or replace", "water through ceiling flat roof"
- verdict: GOOD — section on the flat-roof page; repair-vs-replace honesty block.

### ice-dams-every-winter
- name: "ice dams every winter"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: EST C$3k–10k retrofit; attic-insulation rebate C$1,000–1,250 — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- gbp_belief: PARTIAL — nearest: "Roofing contractor"
- gta_drivers: 101 days/yr at or below 0 °C and about 58 derived freeze-thaw crossings (Toronto City normals). — data/modules/climate/toronto-on.json
- data_hooks: climate normals by city; HRSP; HELP
- season: symptoms Jan–Mar; fix Sep–Nov
- web: ice dam prevention retrofit, attic insulation, heat cables, eavestroughs, slate roof, flat roof
- queries: "ice dams every winter", "how to prevent ice dams toronto", "icicles and water in ceiling"
- verdict: GOOD — OWN GUIDE page; climate and rebate data change the advice.

### cracked-lintel-above-window
- name: "cracked brick or lintel above window"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: C$1,500–5,500+ per opening — https://installixwnd.ca/blog/replacing-rusty-lintel-beams-above-windows/
- gbp_belief: PARTIAL — nearest: "Masonry contractor"
- gta_drivers: Rust stains and step cracks from window corners signal rust-jacking, common in post-war brick. — https://installixwnd.ca/blog/replacing-rusty-lintel-beams-above-windows/
- data_hooks: housing age (1946–80 share); freeze-thaw
- season: Apr–Nov
- web: lintel replacement, brick restoration, window replacement, crack stitching
- queries: "crack above window brick", "rusted lintel toronto", "sagging brick over window"
- verdict: GOOD — section under the lintel page; demand spans post-war suburbs.

---

## Web map

- **Hub: century-home exterior (Toronto, Hamilton, Guelph, Oshawa, Kitchener)**, where the pre-1946 share clears the data bar
  - **Regulatory spine:** `heritage-permit-required-exterior` (OUTCOME, own page) ↔ `heritage-permit-consulting`. Links to every spoke below; the Heritage Grant (due Nov 7) and the 2027-01-01 listed-property deadline are its data.
  - **Masonry spoke:** `lime-mortar-repointing`, fed by `crumbling-spalling-brick` and `white-stains-on-brick`
    - → `spalled-brick-restoration`, `stone-restoration`
    - → `lintel-and-arch-repair`, fed by `cracked-lintel-above-window`
    - `masonry-paint-removal` → `exterior-limewash-heritage-brick` / `brick-staining` (re-cover options)
  - **Chimney spoke:** `leaning-chimney` → `chimney-rebuild` vs `chimney-removal` (decision page pair) → reroofing/slate
  - **Openings spoke:** `drafty-windows-heritage-district` (own page) → `historic-window-restoration` → `interior-storm-windows` (door restoration deferred)
  - **Porch and trim spoke:** `rotting-porch` → `porch-restoration` → `front-steps-rebuild`; porch roof → copper/standing seam
    - `bargeboard-trim-restoration` ↔ `heritage-exterior-painting`
  - **Roof spoke:** `slate-roof-repair` ↔ `copper-zinc-standing-seam-roofing` ↔ `built-in-gutter-restoration` ↔ `copper-eavestroughs`; `cedar-shake-roofing`
    - `leaking-flat-roof` → `flat-roof-replacement-toronto` (Track-2)
    - `ice-dams-every-winter` → `ice-dam-prevention-retrofit`
  - **Envelope and energy spoke:** `stucco-eifs-remediation` ↔ `exterior-insulation-retrofit` (HELP/HRSP) ↔ `ice-dam-prevention-retrofit` ↔ `interior-storm-windows`; `wood-siding-restoration`
- **Shared specialists (lead-buyer pools):**
  - Heritage masons: repointing, brick, stone, lintels, chimney, paint removal.
  - Heritage sheet-metal and slate roofers: slate, copper, built-in gutters, flashing (e.g. Heather & Little).
  - Preservation carpenters: windows, storms, porches, bargeboard, doors.
  - Finish painters: limewash, stain, heritage trim (the same pool as C1 limewash).
  - Energy-retrofit contractors plus NRCan advisors: exterior insulation, ice dams, storms.

## Deferred (low ticket)

- foundation-parging — DEFER(C$1,500–6,500 EST): new parging C$15–25/linear ft, repairs C$300–600+ (search-surfaced, https://www.homepainterspro.ca/services/foundation-parging-repair-toronto/); EMD-saturated (torontoparging.com); overlaps the drainage cluster.
- graffiti-removal-private-property — DEFER(C$300–1,500 EST): owners must remove graffiti under Municipal Code Ch. 485 (https://www.toronto.ca/legdocs/municode/1184_485.pdf); BIAs run removal programs; GBP "Graffiti removal service" is an exact category.
- masonry-crack-stitching (helical bar) — DEFER(C$800–3,000 per crack EST); TAXONOMY-ROW; section under brick restoration.
- ivy-removal-and-wall-repair — DEFER(C$500–2,500 EST); lead-in to repointing.
- heritage-door-restoration — DEFER(C$1,500–4,000 EST): stripping C$350–600 per door side (https://www.homepainterspro.ca/services/paint-stripping-toronto/); grant-eligible; TAXONOMY-ROW (Historic door restoration).
- iron-railing-and-fence-restoration — DEFER(C$1,500–6,000 EST): EXISTING(wrought-iron-restoration); GBP "Railing contractor" / "Iron works" / "Blacksmith"; HCD permit item; section under porch.
- chimney-crown-cap-flashing-repair — DEFER(C$150–1,400): https://gtabrickworks.com/how-much-does-chimney-repair-cost-in-toronto/
- roof-heat-cables — DEFER(C$500–2,000 EST): GBP "Electrician"; section under ice dams.
- window-reglazing-and-painting-only — DEFER(C$150–600/window): https://www.homepainterspro.ca/services/exterior-window-painting-toronto/
- porch-painting — DEFER(C$500–3,500): https://www.homepainterspro.ca/services/porch-painting-toronto/
- stucco-patch-repair — DEFER(C$400–1,500): https://www.homepainterspro.ca/services/stucco-repair-painting-toronto/

## Excluded (commodity / exact GBP / red ocean)

- asphalt reroofing — exact GBP "Roofing contractor", platform-locked, permit-free; a Toronto semi costs C$14k–22k (https://www.custom-contracting.ca/resources/roofing-cost-toronto). Enter via the slate, flat, cedar and metal slices instead.
- vinyl/fibre-cement siding replacement — exact GBP "Siding contractor"; commodity.
- vinyl window replacement — exact GBP "Window installation service"; red ocean. The heritage slice is covered by the restoration rows.
- aluminum eavestrough install/cleaning — exact GBP "Gutter service" / "Gutter cleaning service"; repairs C$150–700.
- skylight replacement on flat roofs — exact GBP "Skylight contractor"; new skylights need building and HCD permits; fold into the flat-roof page.
- chimney sweeping and relining — exact GBP "Chimney sweep" / "Chimney services"; relining is EXISTING(chimney-relining), systems cluster.
- pressure washing brick — exact GBP "Pressure washing service"; harmful to heritage brick (https://callmantle.ca/blog-brick-cleaning-toronto). Content only.
- sandblasting masonry — exact GBP "Sandblasting service"; damages historic brick (NPS Brief 6). Content only.
- general exterior house painting — exact GBP "Painter"; commodity. The heritage slice is kept as a row.

## Sources

**Primary / official**
- https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810023301 (Table 98-10-0233-01; retrieved via https://www150.statcan.gc.ca/t1/wds/rest/getDataFromCubePidCoordAndLatestNPeriods)
- https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-conservation-districts-planning-studies/
- https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/
- https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-incentives/heritage-grant-program/
- https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-register-review/
- https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- https://open.toronto.ca/dataset/heritage-register/ (file heritage_register_address_points_wgs84.zip, Q3-2026)
- https://open.toronto.ca/dataset/building-permits-active-permits/ (CSV refreshed 2026-09-28)
- https://open.toronto.ca/dataset/building-permits-cleared-permits/
- https://www.toronto.ca/legdocs/municode/1184_485.pdf (search-surfaced)
- https://www.toronto.ca/legdocs/municode/1184_629.pdf (search-surfaced)
- https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- https://www.homerenovationsavings.ca/
- https://github.com/wmo-im/WMO-climatological-normals-CLINO/blob/main/data/Region-4-WMO-Normals-9120/Canada/CSV/Toronto_City_71508.csv
- https://www.nps.gov/orgs/1739/upload/preservation-brief-06-abrasive-cleaning.pdf (search-surfaced)
- https://www.airdberlis.com/insights/publications/publication/ontario-extends-the-deadline-for-heritage-property-designation-under-the-ontario-heritage-act (search-surfaced)
- https://www.hamilton.ca/sites/default/files/2022-09/pedpolicies-masonry-restoration-guidelines.pdf (search-surfaced; Hamilton data hook)

**Community / association**
- https://southrosedale.org/heritage-qa/
- https://en.wikipedia.org/wiki/Bay-and-gable

**Prices (GTA / Ontario)**
- https://www.brickaidmasonry.com/blog/brick-repair-cost-toronto
- https://www.brickaidmasonry.com/chimney-repair-toronto
- https://stonemasonrytoronto.com/service/tuckpointing/
- https://stonemasonrytoronto.com/service/exterior-stonework/
- https://gtabrickworks.com/how-much-does-chimney-repair-cost-in-toronto/
- https://www.homestars.com/home-constructions-renovations/price-guides/chimney-build-repair-cost-toronto (search-surfaced; 403 on fetch; C$3,000–10,000 roofline-up)
- https://renohouse.ca/blog/chimney-removal-cost-toronto-process
- https://callmantle.ca/blog-brick-cleaning-toronto
- https://installixwnd.ca/blog/replacing-rusty-lintel-beams-above-windows/
- https://www.homepainterspro.ca/blogs/brick-painting-vs-staining-toronto/
- https://www.homepainterspro.ca/blogs/exterior-house-painting-cost-toronto/
- https://www.homepainterspro.ca/services/stucco-repair-painting-toronto/
- https://www.homepainterspro.ca/services/exterior-window-painting-toronto/
- https://www.homepainterspro.ca/services/paint-stripping-toronto/
- https://www.homepainterspro.ca/services/porch-painting-toronto/
- https://www.homepainterspro.ca/services/foundation-parging-repair-toronto/ (search-surfaced)
- https://www.custom-contracting.ca/resources/roofing-cost-toronto
- https://www.custom-contracting.ca/resources/siding-cost-toronto
- https://www.custom-contracting.ca/locations/toronto/eavestrough-repair
- https://greenbuildingcanada.ca/roof-replacement-costs-ontario/
- https://videlroofing.ca/blog/flat-roof-replacement-cost-toronto/ (search-surfaced; 403 on fetch)
- https://kildrin.ca/cost/front-porch-replacement/toronto
- https://kildrin.ca/cost/front-porch-replacement/old-toronto-york
- https://kildrin.ca/sitemap.xml
- https://smartbuyerguide.ca/blog/porch-renovation-cost-toronto
- https://www.theartofconcrete.ca/post/2025-concrete-porch-repair-costs

**Supply / demand signals**
- https://heatherandlittle.com/what-we-do/roofs-and-walls/slate-roofs/
- https://rightchoiceroofing.ca/2026/03/31/toronto-slate-roof-repair-straight-talk-from-a-local-slate-roofer-near-you/
- https://rightchoiceroofing.ca/2026/04/06/think-your-flat-roof-needs-replacing-read-this-before-you-spend-a-dollar/ (search-surfaced)
- https://thehandyforce.com/painted-brick-toronto/
- https://craftsmanssealpainting.ca/articles/cost-breakdown-for-exterior-brick-painting-in-toronto-historic-districts/ (search-surfaced)
- https://forums.redflagdeals.com/cost-options-chimney-repair-removal-2804088/ (search-surfaced; thread title only)
- https://trustedpros.ca/forum/home-improvements/cost-to-installation-a-lintel (search-surfaced)
- https://trustedpros.ca/forum/home-improvements/average-cost-of-a-new-front-porch (search-surfaced)
- https://www.cabbagetownto.com/member-resources2/graffiti-removal-private-property (search-surfaced)
- https://torontoparging.com/ (search-surfaced; EMD example)

**GBP category belief**
- https://daltonluka.com/blog/google-my-business-categories

**Repo files used**
- data/modules/housing/toronto-on.json
- data/modules/housing/toronto-on.verification.md
- data/modules/climate/toronto-on.json
- data/modules/cost/limewash-toronto-on.json
- data/validation/evidence/slate-roof-repair.md
- data/validation/evidence/historic-window-restoration.md
- data/validation/evidence/supply-spotcheck.md
- data/validation/p0-report.md
- data/niches/nichecandidates.csv
- data/niches/taxonomy-premium-v1.csv
- spec/build-spec.md
- spec/ADDENDUM-2026-08-01.md
