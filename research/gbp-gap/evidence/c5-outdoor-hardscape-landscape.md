# C5 — Outdoor structures, hardscape and landscape systems (GTA)

retrieved_at: 2026-09-28 · cluster owner: research agent c5 · scope: high-ticket outdoor services, GTA first, Toronto as proof metro. Laneway suites, garden suites and other dwellings belong to another cluster. Non-dwelling garden studios and office pods are covered here.

**Method.** I read spec §0–§4, Addendum A11–A12, `data/validation/p0-report.md`, `data/niches/nichecandidates.csv` (114 rows) and `data/niches/taxonomy-premium-v1.csv` (390 rows). I reused the P0 evidence files in `data/validation/evidence/` (heated-driveways, pool-removal, pond-water-features, pickleball-courts, christmas-light-installation, permanent-holiday-lighting, herringbone-driveways-track2). Then I ran about 45 WebSearch queries, each qualified with Toronto, Ontario or GTA, and about 55 WebFetch reads. Every regulatory claim was checked against a toronto.ca page or another municipal page where one could be fetched. Prices come from Canadian cost guides. Any US figure is labelled USD and has not been converted.

**Limitations.**
1. The session-wide WebSearch cap (200 calls) was reached partway through. Later checks used WebFetch on URLs already found or on official pages, so some T3 rows rest on one price source.
2. Most CAD prices come from contractors' own cost guides, which are often SEO pages and self-interested. Treat them as ranges, not medians.
3. `(snippet)` marks a figure taken from a search-result summary whose page I did not fetch.
4. There are no keyword volumes. Demand signals are qualitative.
5. GBP beliefs come from memory of the category list and are unverified. A separate agent checks them.
6. HomeStars (403), Ontario e-Laws and CanLII (empty or 403) could not be read, and Reddit was not captured.
7. The Toronto Chapter 918 PDF would not parse, so its details come from City snippets plus the P0 herringbone evidence file.
8. EST marks my own estimates.

**Corrections found this pass (they matter for data modules):**
- **Toronto flooding subsidy.** The Basement Flooding Protection Subsidy is now up to **C$6,650** for work done on or after 12 Nov 2025. Its eligible items are an assessment, valves, sump pump, battery backup and pipe severance. The City's own incentives index still says C$3,400.
- **Permeable paving is not eligible for that subsidy**, although a GTA contractor says it is.
- **No rain-garden rebate.** Toronto has none, although a search summary claimed C$2,000.
- **Tree bylaw.** Toronto's tree bylaw changed on 1 Sept 2026.

---

## Niche rows

### front-yard-parking-pads-driveway-widening
- name: "front yard parking pad" / "driveway widening"
- status: NEW
- level: USE
- tier: T3
- gta_price_cad: interlock C$20–35/sq ft (snippet) — https://countryreno.com/interlock-driveway-installation-toronto/ ; 2026 City fees: application C$514.41+HST, renewal C$331.13+HST/yr — https://www.toronto.ca/services-payments/streets-parking-transportation/applying-for-a-parking-permit/residential-front-yard-boulevard-parking/
- gbp_belief: PARTIAL — nearest: "Paving contractor" (permit side: NONE)
- gta_drivers: Zoning bars front-yard parking except licensed Ch. 918 pads (permeable, 2.2–2.6 m wide; moratoriums, neighbour polls). Driveways max 2.6 m on lots under 6 m, 6.0 m on 6–23 m lots — https://www.toronto.ca/zoning/bylaw_amendments/ZBL_NewProvision_Chapter10.htm ; https://www.toronto.ca/legdocs/municode/1184_918.pdf ; https://wtfto.ca/stories/the-parking-electric-future-investigation-part-5-torontos-front-yard-parking-double-standard/
- data_hooks: moratorium/poll status by address; fees; widths by frontage; 75% soft landscaping
- season: applications year-round; builds Apr–Nov
- web: permeable pavers, herringbone driveway, EV charger, no parking on my street
- queries: "front yard parking pad toronto", "parking pad permit toronto cost", "can I widen my driveway toronto"
- verdict: STRONG — the law is the content; no category owns permit plus build. Own page.

### heated-driveways
- name: "heated driveway installation" (service-form)
- status: EXISTING(heated-driveways)
- level: SERVICE
- tier: T2
- gta_price_cad: C$12–28/sq ft; 600 sq ft C$7,200–16,800 — https://buildoreno.ca/blog/heated-driveway-cost-guide/ ; electric C$20–60, hydronic C$60–95/sq ft; two-car interlock C$11,000–28,000 — https://actionhomeservices.ca/heated-driveway-cost-ontario/ (sources disagree; EST typical C$12k–30k)
- gbp_belief: PARTIAL — nearest: "Paving contractor" / "Heating contractor"
- gta_drivers: Snow country. Older homes may need a C$2,000–4,500 panel upgrade; electric systems need an ESA permit but usually no building permit (buildoreno). Supply runs through manufacturers (P0 `heated-driveways.md`).
- data_hooks: snow/freeze-thaw normals (repo climate module); ESA; energy rates for a running-cost calculator (C$150–300/season electric); panel capacity by housing age
- season: research Aug–Nov; build May–Oct
- web: herringbone driveway, heated steps, snow removal, driveway widening, EV charger
- queries: "heated driveway cost toronto", "snow melt system ontario", "heated interlock driveway", "is a heated driveway worth it"
- verdict: STRONG — T2, no trade category; local snow and energy data change the math.

### herringbone-clay-paver-driveways
- name: "herringbone driveway" / "clay paver driveway" / "permeable driveway"
- status: LAUNCH-10 (absorbs EXISTING(permeable-pavers) as a sub-use)
- level: SERVICE
- tier: T2
- gta_price_cad: C$20–35/sq ft, 400 sq ft C$18,000–28,000 (snippet) — https://countryreno.com/interlock-driveway-installation-toronto/ ; permeable C$24–38/sq ft vs standard C$16–25/sq ft — https://khanscapes.ca/interlocking-driveway-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Paving contractor"
- gta_drivers: Toronto pads must be permeable. Kitchener credits up to 45% of its stormwater fee; Hamilton's new fee (~C$201/yr from July 2026) gives homes no credits; permeable paving is not a Toronto flooding-subsidy item — https://www.kitchener.ca/water-and-environment/stormwater/stormwater-credits/ ; https://hamiltonindependent.ca/everything-you-need-to-know-about-hamiltons-new-rain-tax/ ; https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- data_hooks: stormwater fee/credit matrix; Ch. 918; Ottawa rebates; clay base depth (P0 evidence); ICPI/manufacturer rosters
- season: Apr–Nov
- web: parking pads, heated driveway, interlock relevelling, sinking interlock, rain gardens
- queries: "herringbone driveway toronto", "clay paver driveway cost", "permeable driveway rebate ontario", "permeable pavers toronto"
- verdict: GOOD — launch-10 as signed off; GTA data reconfirms the Track-2 conditions.

### interlock-relevelling
- name: "interlock repair" / "relevel sunken interlock"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: relevel C$8–15/sq ft; full relay C$15–25/sq ft; 100–200 sq ft relevel C$800–1,800; relay section C$1,500–3,500 — https://khanscapes.ca/interlocking-stone-repair-cost-gta/ ; 400 sq ft relay ≈ C$6,000–10,000 (EST)
- gbp_belief: PARTIAL — nearest: "Paving contractor" / "Landscaper"
- gta_drivers: Pavers sink when the base was poorly compacted (settling over 2–5 years), when edge restraint is missing or when bedding sand washes out. GTA clay soils and freeze-thaw make it worse — https://khanscapes.ca/interlocking-stone-repair-cost-gta/
- data_hooks: freeze-thaw days (repo climate module); soil type; Toronto downspout-disconnection condition; ICPI/CMHA installer roster
- season: Apr–Nov; demand spikes at spring thaw
- web: sinking interlock, herringbone driveway, permeable pavers, polymeric sand, tree roots lifting driveway
- queries: "interlock repair toronto", "sunken interlock fix cost", "relevel pavers gta", "interlock heaving after winter"
- verdict: GOOD — "interlock" is an Ontario-only term; repair intent is not a platform category.

### armour-stone-retaining-walls
- name: "armour stone walls" / "retaining wall contractors"
- status: EXISTING(retaining-walls)
- level: SERVICE
- tier: T2
- gta_price_cad: armour stone C$25–55/sq ft of face; 4 ft wall C$150–300/linear ft; engineering over 1 m C$1,500–3,500 — https://project-landscaping.ca/cost-of-retaining-wall-ontario/ ; 20 ft × 3 ft wall C$4,000–5,500 (Simcoe) — https://www.fortyfivescapes.com/blog-posts/armour-stone-landscaping-costs
- gbp_belief: PARTIAL — nearest: "Landscaper" / "Retaining wall supplier" (belief)
- gta_drivers: OBC: walls over 1,000 mm exposed height beside public property or a building access are designated structures needing engineering and a permit (snippet) — https://www.get.on.ca/uploads/userfiles/files/Designated%20Structures_Retaining%20Walls(1).pdf ; ravine lots add TRCA review and a C$632.51 grade-alteration permit — https://www.toronto.ca/services-payments/water-environment/trees/tree-bylaw-review/
- data_hooks: 1 m trigger; permit fees by city; TRCA regulated areas; ravine map
- season: Apr–Nov
- web: armour stone steps, flagstone, french drains, grading, ravine restoration
- queries: "armour stone wall cost", "retaining wall permit ontario 1 metre", "armour stone steps toronto"
- verdict: STRONG — an Ontario-specific term, a 1 m engineering trigger and ravine data.

### flagstone-natural-stone-patios
- name: "flagstone patio installers"
- status: EXISTING(flagstone-patios)
- level: SERVICE
- tier: T2
- gta_price_cad: C$28–55/sq ft; 300 sq ft dry-laid C$9,600–14,000, mortar-set C$13,500–19,500 — https://donvalleystone.ca/flagstone-installation-cost-toronto-2026/ ; C$35–70+/sq ft (snippet) — https://landschaft.ca/flagstone-patio-costs-in-toronto-2026-installation-materials-and-natural-stone-pricing-guide/
- gbp_belief: PARTIAL — nearest: "Landscaper" / "Masonry contractor" / "Stone supplier"
- gta_drivers: Buyers choose between Ontario Wiarton limestone (C$9–16/sq ft material), Pennsylvania bluestone and Indian flagstone. Quotes under C$25/sq ft usually mean frost heave within two winters — https://donvalleystone.ca/flagstone-installation-cost-toronto-2026/
- data_hooks: local quarries and stone yards; freeze-thaw normals; base spec; heritage-district fit (repo housing/HCD module)
- season: Apr–Nov
- web: armour stone steps, porcelain slab terraces, outdoor kitchen, pergola, landscape lighting, sinking interlock
- queries: "flagstone patio cost toronto", "wiarton limestone patio", "bluestone vs flagstone ontario", "flagstone installer gta"
- verdict: GOOD — a Track-2 craft slice where the stone type localises the advice.

### outdoor-kitchens
- name: "outdoor kitchen builders"
- status: EXISTING(outdoor-kitchens)
- level: SERVICE
- tier: T1
- gta_price_cad: basic C$15,000–25,000; mid C$30,000–60,000; premium C$65,000–100,000 — https://www.landcon.ca/outdoor-kitchen-cost-toronto-gta/ ; modular C$18–24K; custom island C$32–45K; premium C$65–95K — https://renohouse.ca/services/exterior/outdoor-kitchen-build
- gbp_belief: PARTIAL — nearest: "Landscape designer" / "Kitchen remodeler"
- gta_drivers: Gas lines need a TSSA-registered fitter (C$20–35/linear ft) and circuits an ESA permit; footings go 42–48 in deep. A sink draining to Toronto's combined sewer needs a backwater valve and Toronto Water permit; an attached roof needs a building permit — landcon; renohouse.
- data_hooks: TSSA/ESA rules; frost depth; combined-sewer areas; open-air burning rules
- season: design Jan–Apr; build May–Sept
- web: louvered pergola, outdoor fireplace/pizza oven, flagstone patio, landscape lighting, gas fire table
- queries: "outdoor kitchen cost toronto", "outdoor kitchen gas line permit ontario", "built-in bbq island toronto", "outdoor kitchen contractor gta"
- verdict: GOOD — a T1 Track-2 slice; the data is real but landscapers and Houzz crowd it.

### outdoor-fireplaces-pizza-ovens
- name: "outdoor fireplace builders" / "wood-fired pizza oven"
- status: EXISTING(masonry-pizza-ovens) + TAXONOMY-ROW (Outdoor fireplaces; Outdoor pizza oven builds)
- level: SERVICE
- tier: T3
- gta_price_cad: pizza oven add-on C$4,000–8,000 — https://www.landcon.ca/outdoor-kitchen-cost-toronto-gta/ ; US fallback: custom outdoor fireplace US$6,000–20,000 (snippet) — https://homeguide.com/costs/outdoor-fireplace-cost
- gbp_belief: PARTIAL — nearest: "Masonry contractor" / "Fireplace store"
- gta_drivers: Toronto Fire classes outdoor fireplaces and chimineas as open-air burning ("solid fuel burning appliances are unacceptable") and allows certified gas fire pits; small cooking fires are exempt. Toronto advice: gas fireplaces; whether wood ovens count as cooking is unverified — https://www.toronto.ca/community-people/public-safety-alerts/safety-tips-prevention/for-residents/open-air-burning/
- data_hooks: open-air burning bylaw by municipality (varies across the GTA); TSSA gas; frost footings
- season: Apr–Oct
- web: outdoor kitchen, gas fire table, pergola, flagstone
- queries: "outdoor wood burning fireplace toronto legal", "outdoor fireplace cost gta", "pizza oven builder toronto"
- verdict: GOOD — burning rules change the advice city by city, a clean survival-rule fit.

### pergolas-louvered-roofs
- name: "louvered pergola installers"
- status: EXISTING(pergolas-louvered-roofs)
- level: SERVICE
- tier: T2
- gta_price_cad: louvered aluminum C$15,000–30,000; motorized C$20,000–40,000+ — https://deckmaster.ca/blog/pergola-cost-toronto-2026/ ; C$130–200+/sq ft; 12×16 C$25,000–30,700; engineer C$1,500–2,500 — https://www.aluminumpergola.ca/pergola-cost/
- gbp_belief: PARTIAL — nearest: "Awning supplier" / "Patio enclosure supplier"
- gta_drivers: Solid and louvered roofs must be engineered for Ontario snow and rain loads. Footings go about 1.2 m below the frost line. Attached structures need permits and drawings — https://deckmaster.ca/blog/pergola-cost-toronto-2026/
- data_hooks: snow load by municipality (OBC climatic tables); frost depth; permit thresholds by city; dealer rosters
- season: order Feb–Apr; install Apr–Sept
- web: rooftop deck, outdoor kitchen, sunroom/screened room, retractable screens, radiant heaters, landscape lighting
- queries: "louvered pergola cost toronto", "motorized pergola ontario", "do I need a permit for a pergola toronto", "pergola snow load"
- verdict: GOOD — T2 with fragmented dealer supply and snow-load data.

### sunrooms-three-season-rooms
- name: "sunroom contractors" / "three-season room" / "screened porch"
- status: TAXONOMY-ROW (Screened porches; Four-season outdoor rooms; Porch enclosure systems)
- level: SERVICE
- tier: T1
- gta_price_cad: GTA average C$52,800; C$312–408/sq ft — https://www.renoassistance.ca/en/residential/resources-inspirations/article/sunroom-addition-price-toronto-montreal ; three-season C$15,000–50,000 (snippet) — https://renoquotes.com/en/blog/sunroom-cost-in-canada-in-2026-budget-permits-and-key-tips
- gbp_belief: PARTIAL (low confidence; a sunroom-specific category may exist) — nearest: "Patio enclosure supplier" / "Conservatory construction contractor"
- gta_drivers: In Ontario a sunroom is an addition needing a building permit; four-season rooms need insulated glazing and HVAC. Supply is dealer-led (Scandia, Deomax surfaced) — renoassistance.
- data_hooks: permit fees and rear-yard zoning by city; heating degree days (repo climate module); dealer rosters
- season: sell Jan–Apr; build May–Oct
- web: screened porch, pergola, deck enclosure, heat pump (other cluster)
- queries: "sunroom cost toronto", "3 season vs 4 season room ontario", "enclose deck into sunroom", "screened porch builders gta"
- verdict: BORDERLINE — T1, but dealers dominate and RenoAssistance already ranks.

### rooftop-decks-terraces
- name: "rooftop deck builders" / "flat roof deck"
- status: TAXONOMY-ROW (Rooftop terrace build-outs)
- level: SERVICE
- tier: T1
- gta_price_cad: C$20,000–35,000 simple; C$60,000–100,000+ with reinforcement, membrane, bulkhead and glass guard — https://therooftechnician.ca/rooftop-deck-flat-roof-toronto/ ; C$25,000–90,000 for 500 sq ft — https://flatroofstoronto.ca/rooftop-patio-flat-roof-toronto-costs-permits/
- gbp_belief: PARTIAL — nearest: "Deck builder" (roof side: "Roofing contractor")
- gta_drivers: Old Toronto's flat-roofed semis and rear additions. A permit with stamped structural drawings is needed; ~40 psf (1.9 kPa) live load vs ~20 psf for roofs; 1,070 mm guards; privacy screens where decks overlook — same sources.
- data_hooks: permit fees (min C$214.79 in 2026, snippet — https://permitindex.ca/blog/building-permit-cost-toronto); OBC guards; Committee of Adjustment records
- season: permits 4–8 weeks; build Apr–Oct
- web: glass railings, flat roof replacement, louvered pergola, outdoor kitchen
- queries: "rooftop deck toronto cost", "rooftop patio permit toronto", "roof deck on a semi"
- verdict: STRONG — T1, code-dense, falls between roofers and deck builders.

### ipe-hardwood-decks
- name: "ipe deck builders"
- status: NEW (Track-2 slice of commodity deck building)
- level: USE
- tier: T2
- gta_price_cad: ipe C$80–120/sq ft; a 16×20 deck up to about C$42,000 — https://decksforlife.ca/useful-tips-and-news/deck-cost-toronto-2026/ ; C$95–150/sq ft (snippet) — https://local.click/decks/blog/ipe-deck-cost-ontario
- gbp_belief: EXACT for the head term — "Deck builder"; the ipe slice has no category
- gta_drivers: Ipe's 50-plus-year life is pitched against composite in a freeze-thaw climate. It needs pre-drilling and specialist fastening. Toronto permit triggers vary; small, low, detached decks may be exempt — https://decksforlife.ca/useful-tips-and-news/deck-cost-toronto-2026/
- data_hooks: deck permit triggers by city; climate; hardwood sourcing
- season: Apr–Oct
- web: rooftop deck, glass railings, pergola, composite decking, deck refinishing
- queries: "ipe deck cost toronto", "ipe vs composite ontario", "hardwood deck builder gta"
- verdict: BORDERLINE — a real craft slice with thin distinct demand; better as a section of the rooftop-deck page.

### natural-swimming-pools
- name: "natural swimming pool builders" / "swim pond"
- status: EXISTING(natural-swimming-pools)
- level: SERVICE
- tier: T1
- gta_price_cad: from C$81,100 (Plunge) and C$105,900 (Swim) — https://clearwatercreations.com/swimming-ponds ; C$250–600+/sq ft — https://rockleaflandscaping.ca/natural-swimming-ponds-toronto/ ; swim ponds C$50,000+ — https://jacksonpond.com/general/backyard-pond-installation-cost-guide-southern-ontario-edition/
- gbp_belief: PARTIAL — nearest: "Swimming pool contractor" / "Pond contractor"
- gta_drivers: In most Ontario towns, water deeper than 60 cm counts as a pool. Barrie exempts planted ponds but Toronto does not, which means a pool-enclosure permit, a 1.2 m fence and self-closing gates — clearwatercreations; https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/fences/
- data_hooks: pool definition and fencing rules by municipality; enclosure permits; TRCA review near ravines; winter normals
- season: sells in winter; builds May–Sept
- web: ponds, pool conversion, native planting, pool nobody uses
- queries: "natural swimming pool ontario cost", "swim pond toronto", "convert pool to natural pool"
- verdict: GOOD — a T1 scarcity play (a handful of Ontario builders surfaced) whose fencing rule varies by city.

### pond-water-feature-builders
- name: "pond builders" / "koi pond installers"
- status: EXISTING(pond-water-feature-builders)
- level: SERVICE
- tier: T2
- gta_price_cad: small C$10,000–15,000; medium C$15,000–30,000; Southern Ontario average C$15,000–60,000 — https://jacksonpond.com/general/backyard-pond-installation-cost-guide-southern-ontario-edition/ ; Toronto pond-builder supply (P0 evidence `pond-water-features.md`)
- gbp_belief: EXACT (belief) — "Pond contractor"
- gta_drivers: The same 60 cm pool definition applies, so Toronto requires fencing for deep ponds while Barrie does not — https://clearwatercreations.com/swimming-ponds . Freeze and winterization add cost, and a certified-installer roster exists (Aquascape, P0 evidence).
- data_hooks: pool definition by city; certified roster; frost dates
- season: Apr–Oct
- web: natural swimming pools, japanese garden, landscape lighting, armour stone, pond maintenance
- queries: "pond builder toronto", "koi pond cost ontario", "backyard waterfall installation gta"
- verdict: BORDERLINE — probably an exact category and already on marketplaces; the fencing-rule data is the angle.

### pool-removal-fill-in
- name: "pool removal companies" / "fill in a pool"
- status: EXISTING(pool-removal-fill-in)
- level: SERVICE
- tier: T2
- gta_price_cad: C$5,000–20,000+; engineered fill for building over it C$30,000+ — https://www.torontopoolremoval.ca/pool-removal-cost-toronto/ ; partial C$5,000–12,000, full C$12,000–20,000, deck removal +C$2,000–5,000, permit C$200–500 — https://www.swimpool360.ca/services/pool-renovation/pool-fill-in-closure/
- gbp_belief: PARTIAL — nearest: "Swimming pool contractor" / "Demolition contractor"
- gta_drivers: A contractor says Toronto and most GTA cities require a permit to close an inground pool (swimpool360; verify per city). Building over it needs engineered, compaction-tested fill (torontopoolremoval), which matters where a garden suite follows.
- data_hooks: pool-closure permits by city; pool-enclosure permits (Ch. 447); garden-suite link (other cluster); clay soils
- season: May–Oct
- web: pool nobody uses, natural-pool conversion, garden suite, sport court
- queries: "pool removal cost toronto", "fill in pool permit ontario", "remove pool to build garden suite"
- verdict: STRONG — T2 with permit and engineering data; search showed only local contractors and exact-match-domain sites.

### sport-courts-pickleball
- name: "backyard pickleball court builders" / "sport court contractors"
- status: EXISTING(pickleball-court-construction; sport-courts)
- level: SERVICE
- tier: T1
- gta_price_cad: C$35,000–65,000 — https://crowall.ca/how-much-does-building-a-pickleball-court-cost-in-toronto/ ; from C$55,000+tax, enhanced C$100,000+ — https://www.tsspickleball.ca/pickleball-courts-faqs ; basketball half-court C$5,000–25,000+ — https://surfacesynx.ca/blogs/basketball-courtx/backyard-basketball-court-cost-canada ; padel C$45,000–105,000 — https://www.hkcconstruction.com/blogs/the-complete-guide-to-padel-court-construction-in-canada
- gbp_belief: PARTIAL — nearest: "Tennis court construction company". Padel and batting-cage searches probably hit venue categories instead (belief).
- gta_drivers: Lighting poles and fences over 6 ft may need approval (crowall). The Oakville builder is Pickleball Ontario's official court supplier. Buyers are mostly on suburban estate lots (EST).
- data_hooks: lot area; fence and lighting rules; specialist roster; noise-panel options
- season: build May–Sept; sell over winter
- web: basketball half-court, padel court, batting cage, putting green, artificial turf, court lighting, fencing
- queries: "backyard pickleball court cost ontario", "sport court installation toronto", "backyard basketball court cost canada", "build padel court ontario"
- verdict: GOOD — T1 with tiny supply; P0 probe-hub status stands.

### putting-greens
- name: "backyard putting green installers"
- status: EXISTING(putting-greens)
- level: SERVICE
- tier: T3
- gta_price_cad: C$20–35/sq ft depending on size, site prep extra — https://www.swgontario.com/artificial-putting-greens/backyard-putting-greens/cost-of-a-backyard-putting-green ; about 500 sq ft ≈ C$12,500–15,000 (EST from the same rates)
- gbp_belief: PARTIAL — nearest: "Landscaper" / turf supplier category (belief)
- gta_drivers: The outdoor season is short, so indoor and basement greens are the winter variant. Specialists are few (Southwest Greens Ontario, SYNLawn Toronto, Design Turf) — swgontario.
- data_hooks: golf-season length (climate); lot size; specialist roster
- season: Apr–Oct outdoor; indoor year-round
- web: artificial turf, golf simulator (other cluster), sport courts, landscape lighting
- queries: "backyard putting green toronto", "putting green cost ontario", "indoor putting green basement"
- verdict: BORDERLINE — few specialists, but a short season and thin city data.

### artificial-turf
- name: "artificial turf installers"
- status: EXISTING(artificial-turf)
- level: SERVICE
- tier: T3
- gta_price_cad: C$12–22/sq ft; 400–700 sq ft C$5,000–12,000; pet turf C$14–22/sq ft — https://www.designturf.ca/artificial-grass-cost-in-toronto/
- gbp_belief: EXACT (belief) — an artificial-turf supplier category; otherwise "Landscaper"
- gta_drivers: Shade drives adoption. Toronto's tree canopy is 28%, with a target of 40% by 2050, and turf goes in on treed ravine lots where lawns fail. Clay soils need a 4–6 inch limestone base — designturf; https://www.toronto.ca/services-payments/water-environment/trees/
- data_hooks: canopy cover; soil drainage; front-yard soft-landscaping rules (unverified whether turf counts)
- season: Apr–Nov
- web: grass won't grow in shade, putting green, dog run, native shade garden, sport courts
- queries: "artificial grass toronto cost", "turf for dogs toronto", "artificial turf shady backyard"
- verdict: BORDERLINE — leans commodity; enter only through the shade and dog-run outcomes.

### outdoor-saunas
- name: "outdoor sauna builders" / "barrel sauna installation"
- status: LAUNCH-10 (sub-use of sauna-builders)
- level: USE
- tier: T3
- gta_price_cad: mid-range C$5,000–15,000; custom outdoor units up to C$30,000+ — https://www.thetorontosaunaco.com/blog/how-much-does-a-sauna-cost-in-toronto-in-2026
- gbp_belief: PARTIAL — nearest: "Sauna store" (venue categories also exist — belief)
- gta_drivers: Heaters may need electrical or panel upgrades (thetorontosaunaco). Ontario's 15 m² permit exemption covers storage-only buildings (https://buttonhouse.ca/obc-160ft-explained-1), so heated, wired cabins need permits once they pass the local threshold (EST).
- data_hooks: accessory-structure limits by city; ESA; panel capacity; winter normals
- season: sells Sept–Feb; installs year-round
- web: cold plunge, hot tub, garden studio, deck/pad, landscape lighting
- queries: "outdoor sauna toronto", "barrel sauna permit ontario", "backyard sauna installation gta"
- verdict: GOOD — covered as a sub-use section of the launch-10 sauna pages.

### garden-studios-backyard-offices
- name: "backyard office pods" / "garden studio builders"
- status: TAXONOMY-ROW (Garden studios; Backyard offices; Luxury sheds)
- level: SERVICE
- tier: T2
- gta_price_cad: 100–160 sq ft C$25,000–45,000; 160–250 sq ft C$50,000–85,000 — https://redstonecontracting.com/backyard-shed-studio-build-toronto/ ; demand signal: https://torontolife.com/life/this-company-will-build-you-an-all-weather-private-office-studio-in-your-backyard/
- gbp_belief: PARTIAL — nearest: "Shed builder" / "Modular home builder"
- gta_drivers: Ontario's exemption covers sheds up to 15 m² only if storage-only and unplumbed (buttonhouse); wired or insulated studios usually need permits. Exempt sizes: 10 m² in Toronto, Mississauga and Burlington; 15 m² in Vaughan (redstone). Not dwellings; suites are another cluster.
- data_hooks: permit thresholds by city; ESA; zoning setbacks and heights
- season: design over winter; build Apr–Nov
- web: garden suite (other cluster), outdoor sauna, greenhouse, electrical sub-panel
- queries: "backyard office toronto", "permit for backyard office ontario", "garden studio cost gta", "10m2 office pod"
- verdict: GOOD — the permit threshold drives the design and there is no business category.

### greenhouses
- name: "greenhouse builders" / "backyard greenhouse"
- status: EXISTING(greenhouse-construction)
- level: SERVICE
- tier: T3
- gta_price_cad: US fallback only (USD): custom builds US$3,000–10,000+, premium US$60–100+/sq ft — https://riehlstructures.com/custom-backyard-greenhouse-cost-pricing-guide/ ; custom glass over US$25,000 (snippet) — https://homeguide.com/costs/greenhouse-cost . I found no CAD source.
- gbp_belief: PARTIAL — nearest: "Garden building supplier" (belief)
- gta_drivers: Snow-load rating sells here; one builder advertises 32 psf (https://www.bcgreenhouses.com/). Heated or wired structures fall outside the storage-only exemption (buttonhouse; EST).
- data_hooks: snow load; frost-free days; accessory-structure limits; supplier roster
- season: plan Jan–Mar; build Apr–Oct
- web: conservatory, garden studio, raised beds/edible garden, native garden
- queries: "greenhouse installation toronto", "backyard greenhouse permit ontario", "glass greenhouse cost canada"
- verdict: BORDERLINE — led by kits and retail, with no Canadian pricing found.

### landscape-lighting
- name: "landscape lighting installers"
- status: EXISTING(landscape-lighting)
- level: SERVICE
- tier: T3
- gta_price_cad: C$150–500 per fixture; typical Toronto job C$2,500–7,500; 12–25+ fixtures C$3,500–10,000+ — https://sprinklercompany.ca/blog/how-much-does-outdoor-lighting-cost-in-toronto/
- gbp_belief: EXACT (belief) — "Landscape lighting designer"; otherwise "Lighting contractor"
- gta_drivers: Most systems are low-voltage. The same crews pivot to holiday lighting in the fall (P0 evidence `permanent-holiday-lighting.md`).
- data_hooks: ESA contractor licences; daylight hours; fixture counts
- season: Apr–Nov; bundle with holiday lighting Sept–Oct
- web: christmas lights, permanent holiday lighting, outdoor kitchen, pergola, rooftop deck
- queries: "landscape lighting toronto cost", "outdoor lighting installer gta", "low voltage garden lights install"
- verdict: BORDERLINE — probably an exact category; best sold as a cross-sell to holiday-lighting crews.

### christmas-light-installation
- name: "christmas light installers"
- status: LAUNCH-10
- level: SERVICE
- tier: DEFER(C$400–3,000 a year, recurring)
- gta_price_cad: single-storey C$400–800; two-storey C$700–1,500; large homes C$1,500–3,000+ — https://www.settoshine.ca/post/christmas-lights-cost-gta ; C$800–1,500+ a year — https://apeximpressions.com/how-much-do-gemstone-lights-cost-in-the-gta/
- gbp_belief: PARTIAL — nearest: "Lighting contractor" (check whether a holiday-lighting installer category exists)
- gta_drivers: GTA crews say book by mid-October, and most are fully booked by mid-November — settoshine. Franchises such as Shack Shine Toronto are lead buyers (P0).
- data_hooks: first snow and frost dates (repo climate module); booking-window countdown; 5–6 year breakeven against permanent lighting
- season: book Sept–Oct; install Nov
- web: permanent holiday lighting, landscape lighting, eavestrough cleaning, window-cleaning crews
- queries: "christmas light installation toronto cost", "hire someone to hang christmas lights gta", "holiday lighting mississauga"
- verdict: GOOD — launch-10 stands; the ticket is below T3 but the job recurs every year.

### permanent-holiday-lighting
- name: "permanent christmas lights" / "permanent outdoor lighting"
- status: EXISTING(permanent-holiday-lighting) — sub-use of LAUNCH-10
- level: USE
- tier: T3
- gta_price_cad: small home C$2,500–3,000+HST; two-storey C$3,000–5,000; full wrap from C$6,000 — https://apeximpressions.com/how-much-do-gemstone-lights-cost-in-the-gta/ ; front-facing C$3,000–6,000 — https://www.settoshine.ca/post/christmas-lights-cost-gta
- gbp_belief: PARTIAL — nearest: "Lighting contractor"
- gta_drivers: Supply runs through brand-dealer networks (for example Gemstone's Mississauga location page: https://www.gemstonelights.com/location/canada/ontario/permanent-christmas-lights-mississauga-on/). Owners break even against seasonal hanging in 5–6 years (apeximpressions).
- data_hooks: dealer rosters by brand; per-foot price comparison; running cost
- season: sells Aug–Nov; installs year-round
- web: christmas lights, landscape lighting, soffits/eavestroughs, smart home
- queries: "permanent christmas lights toronto cost", "gemstone vs jellyfish lights", "permanent eave lights gta"
- verdict: GOOD — T3 with brand cross-shopping and no trade category.

### horizontal-cedar-fencing
- name: "horizontal fence builders"
- status: EXISTING(horizontal-cedar-fencing)
- level: USE
- tier: T3
- gta_price_cad: cedar C$55–85/linear ft; horizontal styles cost 10–20% more; 100 ft of cedar privacy fence C$4,800–6,500 — https://greensideupcontracting.com/toronto-fence-pricing-in-2025-cost-per-linear-foot-breakdown/
- gbp_belief: EXACT for the head term — "Fence contractor"
- gta_drivers: Toronto's fence bylaw (Ch. 447) sets heights by yard, handles exemptions through Community Council, and requires a permit for pool enclosures — https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/fences/
- data_hooks: Ch. 447 heights; pool-enclosure permits; frost-depth posts
- season: Apr–Nov
- web: automatic gates, privacy hedge, pool enclosure, glass railings, neighbour's tree
- queries: "horizontal cedar fence toronto cost", "modern fence toronto", "fence height bylaw toronto"
- verdict: BORDERLINE — an exact GBP category, so only viable as a Track-2 slice.

### automatic-driveway-gates
- name: "automatic gate installers" / "driveway gates"
- status: EXISTING(automatic-gates) + TAXONOMY-ROW (Driveway gate systems; Estate gate automation)
- level: SERVICE
- tier: T2
- gta_price_cad: automated C$5,000–15,000+; sliding C$6,000–20,000+ — https://art-metal.ca/driveway-gates-cost/ ; sliding automation from C$6,200 (snippet) — https://art-metal.ca/how-much-does-it-cost-to-automate-a-driveway-gate-in-toronto/
- gbp_belief: PARTIAL — nearest: "Fence contractor" / "Garage door supplier" (belief)
- gta_drivers: The market is estate lots in the Bridle Path, King and Oakville (EST). Front-yard fences and gates face lower height limits unless open (verify against Ch. 447 Table 1). The work needs both welders and electricians.
- data_hooks: fence bylaw heights; ESA for operators; ice on sliding tracks (climate)
- season: Apr–Nov
- web: horizontal fence, wrought iron restoration, driveway widening, heated driveway, security systems
- queries: "automatic driveway gate toronto", "sliding gate cost ontario", "electric gate installer gta"
- verdict: BORDERLINE — T2, but a narrow estate market that few GTA cities have.

### tree-permits-arborist-reports
- name: "arborist report for tree permit" / "tree protection plan"
- status: NEW (includes construction tree protection and permitted large removals)
- level: SERVICE
- tier: T3 (report alone: DEFER)
- gta_price_cad: report C$300–800; construction tree-protection plan C$550+ — https://loyaltree.ca/arborist-report-cost-toronto/ ; replanting guarantee or cash-in-lieu C$583/tree — https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/how-to-apply-for-a-tree-or-ravine-permit/
- gbp_belief: EXACT — "Arborist service" / "Tree service"
- gta_drivers: Private trees 30 cm or wider at 1.4 m need permits. From 1 Sept 2026: Distinctive Trees over 61 cm, a 40 cm stump rule, protection for newly planted trees, ravine fees C$87.57–549.08/tree — https://www.toronto.ca/services-payments/water-environment/trees/tree-bylaw-review/ ; https://treedoctors.ca/toronto-tree-bylaw-changes-september-2026
- data_hooks: fee schedule; quarterly permit reports (2026); canopy; ravine map
- season: year-round; construction-driven in spring
- web: large tree removal, construction hoarding, neighbour's tree, roots lifting driveway
- queries: "tree removal permit toronto", "arborist report cost toronto", "distinctive tree toronto"
- verdict: GOOD — exact GBP category, but the new bylaw makes strong guide/hub material.

### ravine-restoration-native-planting
- name: "ravine lot restoration" / "ravine planting"
- status: NEW
- level: USE
- tier: T3
- gta_price_cad: woodland garden C$3,500–5,500 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/ ; stewardship deposit is 120% of cost or C$25/m² — https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/how-to-apply-for-a-tree-or-ravine-permit/
- gbp_belief: NONE — nearest: "Environmental consultant" / "Landscaper"
- gta_drivers: Ch. 658 protects every tree in a ravine area regardless of size (snippet — https://torontotreeservices.ca/guides/toronto-ravine-tree-permit/). TRCA reviews decks, sheds and landscaping near valleys (https://halyardgroup.ca/what-a-ravine-lot-in-toronto-actually-costs-you/). A grade-alteration permit costs C$632.51.
- data_hooks: ravine and natural-feature map; TRCA regulated areas; permit fees; invasive-plant list (Ch. 489)
- season: planting Apr–Jun and Sept–Oct
- web: native woodland garden, armour stone walls, erosion control, buckthorn/knotweed removal, tree permits
- queries: "ravine lot landscaping toronto", "ravine permit toronto planting", "remove buckthorn ravine yard"
- verdict: GOOD — a Toronto-only probe with unique law behind it, though demand is small.

### rain-gardens
- name: "rain garden installers"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$4,500–7,500 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/ ; Ottawa rebates up to C$5,000 — https://ottawa.ca/en/living-ottawa/environment-conservation-and-climate/protecting-ottawas-waterways/rain-ready-ottawa/rain-ready-ottawa-residential-rebates
- gbp_belief: PARTIAL — nearest: "Landscape designer"
- gta_drivers: Toronto lists no rain-garden rebate, and its flooding subsidy excludes yard work. Kitchener credits rain gardens against its stormwater fee at 20–45%. Waterloo requires water to infiltrate within 72 hours (snippet) — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/and-rebates-to-green-your-home/ ; https://www.kitchener.ca/water-and-environment/stormwater/stormwater-credits/ ; https://www.waterloo.ca/water-utilities/manage-drainage-and-stormwater/apply-for-a-stormwater-credit/
- data_hooks: stormwater fee and credit matrix by city; clay infiltration; downspout rules
- season: Apr–Jun and Sept–Oct
- web: backyard floods, french drains (launch-10), permeable pavers, native garden, downspout disconnection
- queries: "rain garden toronto", "rain garden rebate ontario", "stormwater credit rain garden kitchener"
- verdict: BORDERLINE — good city-varying credit data, but low ticket and thin demand.

### japanese-garden-design
- name: "japanese garden designers"
- status: NEW (Track-2 landscape slice)
- level: USE
- tier: T2 (EST)
- gta_price_cad: no Japanese-garden CAD source found; as a proxy, Toronto design fees run C$1,000–7,500, mid-size projects C$20,000–50,000 and full yards C$60,000–150,000+ — https://curbz.ca/general/the-cost-of-landscape-design-build-services-in-toronto-what-to-expect/
- gbp_belief: PARTIAL — nearest: "Landscape designer". The query probably also surfaces public-garden venues (belief).
- gta_drivers: Small Toronto lots suit courtyard and zen designs. Specialists are few; the ones surfaced were https://www.renocompass.ca/blog/create-a-japanese-garden and https://www.bsqdesign.com/ . Freeze-thaw affects stone and water elements.
- data_hooks: specialist roster; hardiness zone; stone suppliers; lot size
- season: design over winter; build Apr–Oct
- web: ponds/water features, flagstone, native woodland garden, landscape lighting, garden studio
- queries: "japanese garden design toronto", "zen garden landscaper gta", "japanese maple garden design"
- verdict: BORDERLINE — a distinct craft, but both the data layer and the supply are thin.

### native-woodland-gardens
- name: "native plant garden designers"
- status: NEW (Track-2 landscape slice)
- level: USE
- tier: T3
- gta_price_cad: pollinator C$2,500–4,500; woodland C$3,500–5,500 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/
- gbp_belief: PARTIAL — nearest: "Landscape designer" / "Plant nursery"
- gta_drivers: Toronto's Ch. 489 dropped natural-garden exemptions. Only turfgrass over 20 cm and a short prohibited-plant list are regulated, so meadows are legal — https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/turfgrass-prohibited-plants/
- data_hooks: grass and weed bylaws by city (other GTA bylaws not checked); prohibited plants; ravine adjacency; native nurseries
- season: Apr–Jun and Sept–Oct
- web: grass won't grow in shade, ravine restoration, rain gardens, lawn replacement, invasive removal
- queries: "native plant garden toronto", "replace lawn with native plants toronto", "pollinator garden installer gta"
- verdict: BORDERLINE — interest is rising and the city-bylaw hook is strong, but the ticket is low.

### sinking-heaving-interlock
- name: "sunken interlock" / "interlock heaving after winter"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: relevel C$8–15/sq ft; relay C$15–25/sq ft — https://khanscapes.ca/interlocking-stone-repair-cost-gta/
- gbp_belief: NONE — a problem query that lands on "Paving contractor" / "Landscaper"
- gta_drivers: Poorly compacted bases settle over 2–5 years, worsened by GTA clay and freeze-thaw (khanscapes). Toronto makes downspout disconnection a condition of its flooding subsidy, which sends roof water onto grade; linking that to washouts is EST — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- data_hooks: freeze-thaw days (repo climate module); soil maps; ICPI roster; warranty terms
- season: peaks at spring thaw
- web: interlock relevelling, herringbone driveway, permeable pavers, tree roots lifting driveway, backyard floods
- queries: "why is my interlock sinking", "interlock lifting after winter toronto", "pavers sinking near downspout"
- verdict: GOOD — a guide that feeds the repair and premium-rebuild pages; section, not own page.

### backyard-floods-after-rain
- name: "backyard floods after rain" / "water pooling in yard"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: rain garden C$4,500–7,500 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/ ; Toronto subsidy up to C$6,650 covers valves and pumps only — https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- gbp_belief: NONE — nearest: "Drainage service" / "Landscaper"
- gta_drivers: Toronto's subsidy requires disconnected downspouts (roof water onto lawns) yet excludes downspout, grading and yard work; clay soils worsen pooling; Kitchener and Waterloo credit infiltration (same sources).
- data_hooks: subsidy rules; rainfall normals (repo climate module); sewer type; stormwater credits
- season: spring melt; summer storms
- web: french drains (launch-10), yard drainage, rain gardens, permeable pavers, grading
- queries: "backyard floods when it rains toronto", "water pooling in backyard after rain", "downspout disconnection flooding yard"
- verdict: STRONG — top feeder to launch-10 french drains; subsidy confusion adds demand. Guide page.

### grass-wont-grow-in-shade
- name: "grass won't grow under trees"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: artificial turf C$12–22/sq ft — https://www.designturf.ca/artificial-grass-cost-in-toronto/ ; woodland planting C$3,500–5,500 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/
- gbp_belief: NONE — lands on "Landscaper" / "Lawn care service"
- gta_drivers: Toronto's canopy is 28% and the City targets 40% by 2050, so shade will grow. Trees 30 cm and wider cannot simply be cut down — https://www.toronto.ca/services-payments/water-environment/trees/ ; https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/
- data_hooks: canopy by neighbourhood; tree-bylaw thresholds; soil
- season: Apr–Oct
- web: artificial turf, native woodland garden, moss/ground cover, pruning permits
- queries: "grass won't grow under maple tree toronto", "shade lawn alternatives ontario", "artificial turf under trees"
- verdict: BORDERLINE — guide content with several paths and no single strong lead buyer.

### no-parking-toronto-street
- name: "no parking on my street toronto"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: pad licence C$514.41+HST to apply, C$331.13+HST a year — https://www.toronto.ca/services-payments/streets-parking-transportation/applying-for-a-parking-permit/residential-front-yard-boulevard-parking/ ; interlock C$20–35/sq ft (snippet) — https://countryreno.com/interlock-driveway-installation-toronto/
- gbp_belief: NONE
- gta_drivers: Front-yard parking is prohibited except on licensed pads. Some areas are under moratorium, others need a neighbour poll, and lane access takes priority. In 2022 an amendment closed the Committee of Adjustment variance route in the former City of Toronto — https://landsignal.ai/blog/front-yard-parking-rules-toronto/ ; https://wtfto.ca/stories/the-parking-electric-future-investigation-part-5-torontos-front-yard-parking-double-standard/ . Of Toronto dwellings, 29.3% predate 1961 (repo housing module).
- data_hooks: Ch. 918 eligibility by address; moratorium map; poll outcomes; lane access
- season: year-round
- web: parking pad, driveway widening, permeable pavers, EV charger, mutual driveway
- queries: "how to get a parking pad toronto", "front yard parking permit denied", "no driveway toronto options"
- verdict: STRONG — distinct demand answered purely by local law; merge into the parking-pad page.

### tree-roots-lifting-driveway
- name: "tree roots lifting driveway"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: relay C$15–25/sq ft — https://khanscapes.ca/interlocking-stone-repair-cost-gta/ ; arborist report C$300–800 — https://loyaltree.ca/arborist-report-cost-toronto/
- gbp_belief: NONE — lands on "Tree service" / "Paving contractor"
- gta_drivers: Excavating, trenching or cutting the roots of a private tree 30 cm or wider counts as injury and needs a permit. Street trees of any size need permits too — https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/ . "Just grind the roots" is illegal advice in Toronto.
- data_hooks: tree-bylaw injury rules; street-tree inventory (not pulled); permit fees
- season: Apr–Nov
- web: tree permits, interlock relevelling, permeable/flexible paving, neighbour's tree, root barrier
- queries: "tree roots lifting driveway toronto", "can I cut tree roots toronto permit", "city tree damaging my driveway"
- verdict: GOOD — the legal twist makes our guide uniquely useful; own guide page.

### neighbours-tree-overhanging
- name: "neighbour's tree overhanging my yard"
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: large removal C$2,000–6,000 (snippet) — https://torontotreeservices.ca/guides/toronto-large-tree-removal-cost-climbing-crew/ ; ravine boundary-tree permits C$183.03–549.08 per tree — https://www.toronto.ca/services-payments/water-environment/trees/tree-bylaw-review/
- gbp_belief: NONE — lands on "Tree service"
- gta_drivers: A boundary tree needs the consent of every owner. A permit does not authorize entering a neighbour's land. The City sends notices within 15 business days — https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/ ; https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/how-to-apply-for-a-tree-or-ravine-permit/
- data_hooks: boundary-tree fees; consent and notice timelines
- season: year-round
- web: tree permits, fence, privacy hedge, roots lifting driveway, leaves in pool
- queries: "neighbour's tree hanging over my yard toronto", "boundary tree toronto consent", "can I cut my neighbour's branches ontario"
- verdict: GOOD — guide traffic that converts to arborist leads; a section of the tree hub.

### pool-nobody-uses
- name: "pool nobody uses" / "get rid of my pool"
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: removal C$5,000–20,000+ — https://www.torontopoolremoval.ca/pool-removal-cost-toronto/ ; partial fill-in from C$5,000 — https://www.swimpool360.ca/services/pool-renovation/pool-fill-in-closure/
- gbp_belief: NONE — lands on "Swimming pool contractor"
- gta_drivers: Closing a pool needs a permit, and so does its enclosure. Engineered fill is required if a garden suite will follow — sources above; https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/fences/
- data_hooks: permit rules by city; garden-suite eligibility (other cluster); pool-enclosure permits
- season: decisions Aug–Oct at closing time (EST)
- web: pool removal, natural-pool conversion, garden suite, sport court, flagstone patio
- queries: "should I remove my pool toronto", "pool removal resale ontario", "turn pool into garden"
- verdict: GOOD — decision content that feeds the pool-removal page; a section, not its own page.

---

## Web map

- **Driveways and front yards** (hub: herringbone-clay-paver-driveways, launch-10)
  - Spokes: permeable pavers (sub-use and data module), front-yard parking pads and driveway widening, heated driveways, interlock relevelling
  - Outcomes: no parking on a Toronto street → parking pad; sunken interlock → relevelling or rebuild; tree roots lifting driveway → tree permits and relay
  - Shared specialists: ICPI/CMHA and manufacturer-authorized interlock crews; heated-driveway installers are electricians or hydronic trades working alongside pavers
- **Water, drainage and walls** (hub: french drains, launch-10, other cluster)
  - Outcome: backyard floods → rain gardens, permeable pavers, grading, armour stone retaining walls
  - Shared specialists: landscape-drainage contractors and excavators
- **Trees, ravines and planting** (hub: tree-permits-arborist-reports)
  - Spokes: large tree removal, tree preservation during construction, ravine restoration, native woodland gardens
  - Outcomes: neighbour's tree, roots lifting driveway, grass won't grow in shade (also leads to artificial turf)
  - Shared specialists: ISA-certified arborists and ecological restoration firms
- **Backyard living** (hub: outdoor-kitchens)
  - Spokes: outdoor fireplaces and pizza ovens (Toronto: gas only), louvered pergolas, sunrooms and screened porches, rooftop decks (with glass guards), ipe decks, flagstone patios, landscape lighting
  - Shared specialists: design-build landscapers, TSSA gas fitters, ESA electricians
- **Water features and pools**
  - natural swimming pools ↔ ponds (same 60 cm pool-fencing rule)
  - pool nobody uses → pool removal → garden suite (other cluster) or sport court
  - Shared specialists: excavation crews and pond builders
- **Play and wellness**
  - sport courts (pickleball, basketball half-court, padel, batting cage) ↔ putting greens ↔ artificial turf
  - outdoor saunas (launch-10 sauna) ↔ hot tubs ↔ garden studios ↔ greenhouses
  - Shared specialists: court builders, turf installers, electricians
- **Lighting** (hub: christmas-light-installation, launch-10)
  - permanent holiday lighting and landscape lighting; the same crews work in opposite seasons
- **Boundaries**
  - horizontal cedar fences ↔ automatic gates ↔ cedar privacy hedges ↔ pool enclosures (Ch. 447)
- **Leads for a later pass (not researched here):**
  - Japanese knotweed, phragmites and buckthorn removal. Toronto's Ch. 489 prohibited-plant list is a hook, and there is probably no GBP category.
  - Refrigerated backyard ice rinks, which are Canada-native.
  - Porcelain slab terraces (taxonomy row) as a Track-2 hardscape slice.

## Deferred (low ticket)

- cedar privacy hedges — 10–15 cedars C$1,800–5,500; C$150–650+ per tree installed (snippet) — https://renoquotes.com/en/blog/cedar-hedge-cost-installation-and-maintenance (it straddles T3 on long lot lines).
- arborist report on its own — C$300–800 — https://loyaltree.ca/arborist-report-cost-toronto/ (bundled into the tree-permits row).
- snow removal contracts — C$400–1,730 a season across GTA guides (snippet) — https://mypropertycare.ca/snow-removal-cost-toronto-gta/ ; probably an exact "Snow removal service" category too.
- hot tub installation only (circuit and pad) — ESA circuit C$1,500–2,500 and pad C$800–1,500 (snippet) — https://getabetterquote.com/guides/hot-tub-electrical-cost-ontario/ ; dealers bundle it.
- tar and chip driveways — US$1–5/sq ft (USD, snippet) — https://homeguide.com/costs/tar-and-chip-driveway-cost ; rural, with no GTA driver.
- batting cages — no Canadian price retrieved; the GBP match is probably the venue category "Batting cage center" (belief). Fold into sport courts.
- stump grinding (EXISTING stump-grinding) and string/bistro lighting (EXISTING string-bistro-lighting) — not priced this pass; low ticket per the CSV.

## Excluded (commodity / exact GBP / red ocean)

- irrigation and sprinkler systems — probably an exact category ("Lawn sprinkler system contractor"); C$2,500–6,000+ (snippet) — https://sprinklercompany.ca/blog/sprinkler-system-installation-cost-toronto/ . Keep Toronto backflow-prevention rules as a module only.
- exposed aggregate and stamped concrete — exact "Concrete contractor"; double driveway C$6,000–12,500 (snippet) — https://svdrestoration.ca/how-much-do-concrete-driveways-cost-toronto/
- large tree removal as a head term — exact "Tree service"; the permit slice lives in tree-permits-arborist-reports.
- glass railings — T3 (a 30 ft run C$3,465–4,895, snippet — https://deckrailingtoronto.ca/cost/glass-railing-cost-toronto/); keep as a sub-use of rooftop decks.
- exterior stairs and landings — commodity concrete and masonry (4–6 stone steps C$2,500–7,000, snippet — https://project-landscaping.ca/cost-of-outdoor-stone-steps-in-ontario/); a sub-use of armour stone and flagstone.
- hot tub purchase and installation — dealer-locked, probably exact "Hot tub store".
- landscaping, landscape design, deck building, fencing and pool construction head terms (including taxonomy rows such as custom concrete, gunite and vanishing-edge pools) — platform-locked or exact categories; the brief forbids these commodity heads.
- dry gardens — no GTA driver (no water-restriction regime found); rock gardens run C$4,500–7,000 per 500 sq ft — https://lotusscape.ca/native-plant-garden-ideas-canada/

## Sources

Regulatory and municipal:
- https://www.toronto.ca/services-payments/streets-parking-transportation/applying-for-a-parking-permit/residential-front-yard-boulevard-parking/
- https://www.toronto.ca/legdocs/municode/1184_918.pdf
- https://www.toronto.ca/zoning/bylaw_amendments/ZBL_NewProvision_Chapter10.htm
- https://www.toronto.ca/home/311-toronto-at-your-service/find-service-information/article/?kb=kA06g000001cwPfCAI
- https://wtfto.ca/stories/the-parking-electric-future-investigation-part-5-torontos-front-yard-parking-double-standard/
- https://landsignal.ai/blog/front-yard-parking-rules-toronto/
- https://www.toronto.ca/services-payments/water-environment/trees/tree-bylaw-review/
- https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/how-to-apply-for-a-tree-or-ravine-permit/
- https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/
- https://treedoctors.ca/toronto-tree-bylaw-changes-september-2026
- https://torontotreeservices.ca/guides/toronto-ravine-tree-permit/
- https://halyardgroup.ca/what-a-ravine-lot-in-toronto-actually-costs-you/
- https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/
- https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/and-rebates-to-green-your-home/
- https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/fences/
- https://www.toronto.ca/community-people/public-safety-alerts/safety-tips-prevention/for-residents/open-air-burning/
- https://www.toronto.ca/city-government/public-notices-bylaws/bylaw-enforcement/turfgrass-prohibited-plants/
- https://www.toronto.ca/services-payments/water-environment/trees/
- https://www.get.on.ca/uploads/userfiles/files/Designated%20Structures_Retaining%20Walls(1).pdf
- https://buttonhouse.ca/obc-160ft-explained-1
- https://www.kitchener.ca/water-and-environment/stormwater/stormwater-credits/
- https://www.waterloo.ca/water-utilities/manage-drainage-and-stormwater/apply-for-a-stormwater-credit/
- https://hamiltonindependent.ca/everything-you-need-to-know-about-hamiltons-new-rain-tax/
- https://ottawa.ca/en/living-ottawa/environment-conservation-and-climate/protecting-ottawas-waterways/rain-ready-ottawa/rain-ready-ottawa-residential-rebates
- https://www.mississauga.ca/services-and-programs/home-and-yard/stormwater/ (rebates of up to C$7,500 for sump pumps and backwater valves and C$3,000 for flood resilience; context only)
- https://permitindex.ca/blog/building-permit-cost-toronto

Prices and supply:
- https://countryreno.com/interlock-driveway-installation-toronto/
- https://khanscapes.ca/interlocking-driveway-cost-toronto/
- https://khanscapes.ca/interlocking-stone-repair-cost-gta/
- https://khanscapes.ca/permeable-patio-gta-stormwater-bylaws/ (the incorrect subsidy claim)
- https://buildoreno.ca/blog/heated-driveway-cost-guide/
- https://actionhomeservices.ca/heated-driveway-cost-ontario/
- https://www.torontopoolremoval.ca/pool-removal-cost-toronto/
- https://www.swimpool360.ca/services/pool-renovation/pool-fill-in-closure/
- https://project-landscaping.ca/cost-of-retaining-wall-ontario/
- https://www.fortyfivescapes.com/blog-posts/armour-stone-landscaping-costs
- https://www.conscapecanada.ca/blog/retaining-walls-toronto
- https://donvalleystone.ca/flagstone-installation-cost-toronto-2026/
- https://landschaft.ca/flagstone-patio-costs-in-toronto-2026-installation-materials-and-natural-stone-pricing-guide/
- https://www.landcon.ca/outdoor-kitchen-cost-toronto-gta/
- https://renohouse.ca/services/exterior/outdoor-kitchen-build
- https://homeguide.com/costs/outdoor-fireplace-cost
- https://deckmaster.ca/blog/pergola-cost-toronto-2026/
- https://www.aluminumpergola.ca/pergola-cost/
- https://www.renoassistance.ca/en/residential/resources-inspirations/article/sunroom-addition-price-toronto-montreal
- https://renoquotes.com/en/blog/sunroom-cost-in-canada-in-2026-budget-permits-and-key-tips
- https://therooftechnician.ca/rooftop-deck-flat-roof-toronto/
- https://flatroofstoronto.ca/rooftop-patio-flat-roof-toronto-costs-permits/
- https://decksforlife.ca/useful-tips-and-news/deck-cost-toronto-2026/
- https://local.click/decks/blog/ipe-deck-cost-ontario
- https://clearwatercreations.com/swimming-ponds
- https://rockleaflandscaping.ca/natural-swimming-ponds-toronto/
- https://jacksonpond.com/general/backyard-pond-installation-cost-guide-southern-ontario-edition/
- https://crowall.ca/how-much-does-building-a-pickleball-court-cost-in-toronto/
- https://www.tsspickleball.ca/pickleball-courts-faqs
- https://surfacesynx.ca/blogs/basketball-courtx/backyard-basketball-court-cost-canada
- https://www.hkcconstruction.com/blogs/the-complete-guide-to-padel-court-construction-in-canada
- https://www.swgontario.com/artificial-putting-greens/backyard-putting-greens/cost-of-a-backyard-putting-green
- https://www.designturf.ca/artificial-grass-cost-in-toronto/
- https://www.thetorontosaunaco.com/blog/how-much-does-a-sauna-cost-in-toronto-in-2026
- https://redstonecontracting.com/backyard-shed-studio-build-toronto/
- https://torontolife.com/life/this-company-will-build-you-an-all-weather-private-office-studio-in-your-backyard/
- https://riehlstructures.com/custom-backyard-greenhouse-cost-pricing-guide/ (USD)
- https://homeguide.com/costs/greenhouse-cost (USD)
- https://www.bcgreenhouses.com/
- https://sprinklercompany.ca/blog/how-much-does-outdoor-lighting-cost-in-toronto/
- https://www.settoshine.ca/post/christmas-lights-cost-gta
- https://apeximpressions.com/how-much-do-gemstone-lights-cost-in-the-gta/
- https://www.gemstonelights.com/location/canada/ontario/permanent-christmas-lights-mississauga-on/
- https://greensideupcontracting.com/toronto-fence-pricing-in-2025-cost-per-linear-foot-breakdown/
- https://art-metal.ca/driveway-gates-cost/
- https://art-metal.ca/how-much-does-it-cost-to-automate-a-driveway-gate-in-toronto/
- https://loyaltree.ca/arborist-report-cost-toronto/
- https://torontotreeservices.ca/guides/toronto-large-tree-removal-cost-climbing-crew/
- https://lotusscape.ca/native-plant-garden-ideas-canada/
- https://curbz.ca/general/the-cost-of-landscape-design-build-services-in-toronto-what-to-expect/
- https://www.renocompass.ca/blog/create-a-japanese-garden
- https://www.bsqdesign.com/
- https://renoquotes.com/en/blog/cedar-hedge-cost-installation-and-maintenance
- https://mypropertycare.ca/snow-removal-cost-toronto-gta/
- https://getabetterquote.com/guides/hot-tub-electrical-cost-ontario/
- https://homeguide.com/costs/tar-and-chip-driveway-cost (USD)
- https://sprinklercompany.ca/blog/sprinkler-system-installation-cost-toronto/
- https://svdrestoration.ca/how-much-do-concrete-driveways-cost-toronto/
- https://deckrailingtoronto.ca/cost/glass-railing-cost-toronto/
- https://project-landscaping.ca/cost-of-outdoor-stone-steps-in-ontario/

Repo inputs: `spec/build-spec.md`; `spec/ADDENDUM-2026-08-01.md`; `data/validation/p0-report.md`; `data/niches/nichecandidates.csv`; `data/niches/taxonomy-premium-v1.csv`; `data/validation/evidence/{heated-driveways,pool-removal,pond-water-features,pickleball-courts,christmas-light-installation,permanent-holiday-lighting,herringbone-driveways-track2}.md`; `data/modules/climate/toronto-on.json`; `data/modules/housing/toronto-on.json`.
