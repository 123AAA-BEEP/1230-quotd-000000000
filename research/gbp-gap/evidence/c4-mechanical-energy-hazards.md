# C4: Mechanical, energy, environmental hazards and insurance-driven work (GTA)

retrieved_at: 2026-09-28

**Method.** I read the brief, spec §0–§4, addendum §A11–A12, the P0 report, both niche CSVs and the P0 radon and EV evidence files. Then I ran about 75 web searches (Toronto, Ontario or GTA in every query) and opened official and contractor pages to check the prices and rules. I checked GBP beliefs against two public category lists: lobstr.io's 2026 list of 4,053 categories and a 3,968-row GitHub gist. The separate verifier still owns the final call on every category.

**Limitations.**
- The session's WebSearch cap (200 calls, shared) ran out partway through. After that I checked facts by opening known official pages (HRSP, City of Toronto, TSSA, ESA, OEB, Toronto Hydro).
- HomeStars returned 403. I captured no Reddit threads, so demand signals are news, program and contractor pages.
- † means the figure comes from a search-result snippet and I did not open the page. Where two URLs are cited together, the snippet may belong to either one.
- EST means my estimate. Prices are CAD unless marked USD. US figures are fallbacks and are not converted.

**Program facts used across rows (all opened and read):**
- **Heat pump rebates (HRSP).** Ontario's Home Renovation Savings Program (HRSP) is run jointly by Enbridge Gas and Save on Energy.
  - Cold-climate air-source: $1,250/ton up to $7,500 for homes heated by electricity, oil, propane or wood. Enbridge gas customers get $500/ton up to $2,000.
  - Ground-source: $2,000/ton up to $12,000 for non-gas homes, or a flat $3,000 for gas homes.
  - Pre-approval is mandatory, and the work must be done by a participating contractor. https://www.homerenovationsavings.ca/without-assessment/heat-pumps
- **Insulation and other HRSP measures.**
  - Attic: up to $1,250. Cathedral ceilings and flat roofs: up to $650 (R-20) or $750 (R-28).
  - Assessment-bundle insulation: up to $7,700. Home energy assessment: $600.
  - Air sealing: up to $250. Heat pump water heater: $500.
  - https://www.homerenovationsavings.ca/help-and-support; https://www.saveonenergy.ca/homerenovationsavings
- **Solar and batteries (HRSP).** Solar pays $1,000/kW; batteries pay $300/kWh; each is capped at $5,000 and at 50% of cost. The battery must be paired with a new solar array. Any system that takes the rebate cannot use net metering. https://www.homerenovationsavings.ca/without-assessment/solar
- **Canada Greener Homes Loan.** Closed; the last day to apply was October 1, 2025. https://www.homerenovationsavings.ca/help-and-support
- **Toronto HELP loans.** Up to $125k, repaid on the property tax bill. Rates are 3.34–4.75% through September 30, 2026. The official page shows **no 0% heat-pump offer**, although a rebate blog claims one (https://claimrebate.ca/energy-rebates/heat-pump-rebate-toronto †). Batteries, solar, EV chargers, geothermal and high-efficiency boilers all qualify. https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- **Toronto Hydro Heat Pump Assistance Program.** It funded 200 income-qualified homes and is now closed to applicants. https://www.torontohydro.com/for-home/savings-sustainability/offers-rebates/heat-pump-assistance-program

---

## Niche rows

### knob-and-tube-rewiring
- name: knob and tube rewiring / "knob and tube electricians"
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: C$8k–15k small home, C$12k–25k mid-size with panel, C$20k–45k+ large pre-1930 — https://renohouse.ca/blog/knob-tube-cost-rewiring-toronto; C$12k–32k+ average detached — https://www.416construction.com/post/how-much-does-it-cost-to-remove-knob-and-tube-wiring-in-toronto
- gbp_belief: PARTIAL — nearest: "Electrician"
- gta_drivers: ESA: safe if maintained and the code is not retroactive, but "many insurers will not provide or renew coverage", so insurers force the job. About 29% of Toronto dwellings predate 1961† — https://esasafe.com/home-renovation-buying-and-selling/knob-and-tube/; https://www.point2homes.com/CA/Demographics/ON/Toronto-Demographics.html
- data_hooks: census period of construction; ESA licensed electrical contractor lookup; ESA certificate (what insurers accept); plaster-era share
- season: year-round; spring closings (EST)
- web: insurance won't cover knob and tube, 200 amp upgrade, plaster repair, vermiculite removal, aluminum wiring
- queries: "knob and tube removal cost toronto", "rewire century home toronto", "knob and tube electrician near me"
- verdict: STRONG — insurance-forced T2 job hidden in generic "Electrician" packs.

### aluminum-wiring-remediation
- name: aluminum wiring repair / "aluminum wiring pigtailing"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$2k–4.5k to pigtail a 3-bed home; C$8k–15k+ for full replacement — https://kvbearelectrical.ca/blog/aluminum-wiring-pigtailing-vs-replacement
- gbp_belief: PARTIAL — nearest: "Electrician"
- gta_drivers: Common in Ontario homes built from the mid-1960s to the late 1970s; "most Ontario insurers accept pigtailing with ESA documentation" — https://kvbearelectrical.ca/blog/aluminum-wiring-pigtailing-vs-replacement. It hits the 1960s–70s suburban ring (Scarborough, Etobicoke, Mississauga, Brampton) rather than old Toronto (EST).
- data_hooks: census share of dwellings built 1961–1980 by municipality; ESA contractor lookup; ESA certificate
- season: year-round; driven by home sales
- web: aluminum wiring insurance surcharge, AlumiConn vs COPALUM, full rewire, panel upgrade, home inspection findings
- queries: "aluminum wiring pigtailing cost ontario", "aluminum wiring insurance ontario", "copalum electrician toronto"
- verdict: GOOD — the insurance-driven suburban twin of knob and tube; mid-T3 ticket.

### electrical-service-upgrade
- name: 200 amp service upgrade / "panel upgrade"
- status: EXISTING(whole-house-surge-panel-upgrades)
- level: SERVICE
- tier: T3
- gta_price_cad: C$1.5k–4k Toronto including ESA permit† — https://torontoevexperts.ca/cost-to-upgrade-to-200-amp-service-toronto/; C$3k–5k GTA† — https://xboct.ca/how-much-does-it-cost-to-upgrade-to-200-amp-panel/
- gbp_belief: PARTIAL — nearest: "Electrician" (in practice every electrician does it)
- gta_drivers: Needs an ESA permit plus a utility disconnect and reconnect, which Toronto Hydro books weeks out†. Heat pumps, EV chargers and knob-and-tube rewires all trigger it — https://torontoevexperts.ca/cost-to-upgrade-to-200-amp-service-toronto/
- data_hooks: local utility connection rules and fees (Toronto Hydro, Alectra, Elexicon); ESA notification fee; housing age
- season: year-round; utility booking lead time
- web: heat pump conversion, EV charger, knob and tube rewiring, 60 amp fuse panel insurance, battery backup
- queries: "100 amp to 200 amp upgrade cost toronto", "60 amp service upgrade toronto", "do i need 200 amp for heat pump"
- verdict: BORDERLINE — commodity electrician job; best as a supporting section on heat-pump and knob-and-tube pages.

### asbestos-abatement
- name: asbestos removal / "asbestos removal contractors"
- status: NEW (adjacent: popcorn-ceiling-removal probe hub)
- level: SERVICE
- tier: T3
- gta_price_cad: overall C$1.5k–15k+. By risk class: Type 1 C$500–2k, Type 2 C$1.5k–5k, Type 3 C$5k–15k+. Air clearance C$200–500 — https://glrestoration.ca/blog/asbestos-removal-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Asbestos testing service" (no removal category)
- gta_drivers: Under OHSA s.30 and O. Reg. 278/05, the project owner must identify designated substances (asbestos, lead, silica and others) before tendering. This applies to small renovations, not just demolition† — https://www.ihsa.ca/pdfs/products/id/w130.pdf; https://iesconsulting.ca/renovating-or-demolishing-in-ontario-dss/
- data_hooks: Type 1/2/3 risk classes; pre-renovation designated substance survey; housing age; permit counts
- season: year-round; renovation season (EST)
- web: designated substance survey, vermiculite removal, popcorn ceiling removal, plaster demolition, floor tiles, lead paint
- queries: "asbestos removal toronto cost", "asbestos test before renovation ontario", "designated substance survey toronto house"
- verdict: STRONG — a regulation-gated renovation step with no removal category in GBP.

### vermiculite-attic-removal
- name: vermiculite removal
- status: NEW
- level: USE
- tier: T2
- gta_price_cad: C$10k–15k typical attic; asbestos survey C$400–2k; clearance report about C$700 — https://www.atticinsulationtoronto.ca/blog/the-cost-to-remove-vermiculite-attic-insulation/. Adds C$3k–8k when bundled into a knob-and-tube rewire — https://renohouse.ca/blog/knob-tube-cost-rewiring-toronto
- gbp_belief: PARTIAL — nearest: "Asbestos testing service" / "Insulation contractor"
- gta_drivers: Zonolite vermiculite (from the Libby mine, sold until 1990) may contain amphibole asbestos, and Health Canada advises leaving it undisturbed† — https://www.canada.ca/en/news/archive/2004/04/health-canada-advising-canadians-about-potential-risks-health-posed-vermiculite-insulation-may-contain-asbestos.html. It blocks both attic insulation upgrades and attic wiring runs.
- data_hooks: HRSP attic rebate up to $1,250 once removed; housing age; Type 3 classification
- season: year-round; avoid peak summer attic heat (EST)
- web: vermiculite in attic, attic insulation rebate, knob and tube rewiring, asbestos testing, spray foam
- queries: "vermiculite removal cost toronto", "vermiculite insulation asbestos ontario", "zonolite removal toronto"
- verdict: STRONG — T2 ticket, limited asbestos-certified supply, and it unlocks insulation rebates.

### uffi-removal
- name: UFFI removal
- status: NEW
- level: SERVICE
- tier: T2 (EST)
- gta_price_cad: I found no current GTA price. A 2015 Ontario case cites C$65k–90k where finished walls were gutted† — https://www.municipalworld.com/articles/urea-formaldehyde-foam-insulation-removal-cost-of-removal-from-home/. EST C$10k–30k for localized wall cavities.
- gbp_belief: PARTIAL — nearest: "Insulation contractor" / "Environmental consultant"
- gta_drivers: UFFI was used in the 1970s–80s, then banned — https://allclearenvironmental.ca/uffi-removal/. Ontario sale agreements carry a UFFI clause and buyers ask for UFFI-free warranties† — https://medium.com/@richardsilver/you-used-uffi-to-insulate-your-house-prepare-for-trouble-if-you-decide-to-sell-c2e6f6f06ecb
- data_hooks: UFFI clause in the Ontario real estate (OREA) purchase agreement; share of 1970s housing; formaldehyde air test
- season: year-round; driven by home sales
- web: UFFI test, formaldehyde testing, asbestos abatement, home inspection red flags, insulation replacement
- queries: "UFFI removal ontario", "UFFI test toronto", "selling house with UFFI"
- verdict: BORDERLINE — thin and fading demand; an FAQ under a hazards hub, not its own page.

### mould-remediation
- name: mould removal / "mould remediation"
- status: TAXONOMY-ROW (Fine-finish / Attic / Crawlspace mold remediation)
- level: SERVICE
- tier: T3
- gta_price_cad: C$3.5k–8k average project; finished basement C$8k–25k+; attic of 50–200 sq ft C$3.5k–6.5k — https://www.wrightrestorations.ca/blog/mold-removal-cost-toronto-2026
- gbp_belief: PARTIAL — nearest: "Water damage restoration service" (there is no mould category)
- gta_drivers: On July 16, 2024 Toronto got 100 mm of rain, its fifth-largest on record, flooding basements — https://www.torontohydro.com/documents/20143/204243691/major-event-report-july-16-2024. Policies pay for mould only after a sudden, insured event — https://www.wrightrestorations.ca/blog/mold-removal-cost-toronto-2026
- data_hooks: extreme-rainfall history; insurance rules; IICRC S520 standard; testing C$350–600; City flooding subsidy (adjacent cluster)
- season: summer storms and spring thaw
- web: musty smell after flood, water damage restoration, dehumidifier, basement waterproofing, crawlspace encapsulation
- queries: "mould removal toronto cost", "basement mould after flood toronto", "attic mould removal toronto"
- verdict: GOOD — no GBP category and a flood-data hook; restoration franchises likely compete (EST).

### oil-tank-removal
- name: oil tank removal
- status: NEW
- level: SERVICE
- tier: T3 (buried tanks; basement tanks are DEFER)
- gta_price_cad: basement C$450–1.5k; buried 500-gallon C$4.5k–5k before soil clean-up — https://www.waterlineenvironmental.ca/are-oil-tank-removal-costs-covered-by-the-government-or-insurance/; C$1k–5k — https://oiltankremoval.ca/. Remediation EST C$10k–100k+.
- gbp_belief: NONE — nearest: "Heating oil supplier" / "Environmental consultant"
- gta_drivers: Unused buried tanks must be removed by TSSA-registered contractors, with an environmental report — https://www.tssa.org/faqs-storage-tanks. Insurance Bureau of Canada: tanks over 15 years (outdoor) or 25 (indoor) are uninsurable — https://www.thinkinsure.ca/insurance-help-centre/home-oil-heating.html
- data_hooks: TSSA registry; O. Reg. 213/01; HRSP heat pump $7,500 (oil) vs $2,000 (gas); federal oil-to-heat-pump grant (up to $10k, income-tested)
- season: Apr–Nov; home sales
- web: oil to heat pump, oil to gas, soil testing, boiler replacement
- queries: "oil tank removal toronto cost", "buried oil tank removal ontario", "tssa oil tank removal"
- verdict: STRONG — no GBP category; TSSA and insurers force it; heat pump upsell.

### lead-paint-abatement
- name: lead paint removal
- status: NEW
- level: SERVICE
- tier: T3 (US fallback)
- gta_price_cad: No GTA price found; a Toronto firm lists the service without pricing — https://perilcanada.com/our-services/lead-paint-removal. US fallback: average US$1,478–5,520; whole-house exterior US$5k–21k† — https://www.angi.com/articles/how-much-cost-removing-lead-paint.htm; https://homeguide.com/costs/lead-paint-removal-cost
- gbp_belief: NONE — nearest: "Environmental consultant" / "Painter"
- gta_drivers: Lead is an O. Reg. 278/05 designated substance, so it is covered by the same pre-renovation survey† — https://iesconsulting.ca/renovating-or-demolishing-in-ontario-dss/. The City flags lead water pipes in homes built before the mid-1950s — https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/priority-lead-water-service-replacement-program/
- data_hooks: pre-renovation designated substance survey; housing age; City of Toronto Priority Lead Water Service Replacement Program
- season: exterior Apr–Oct
- web: designated substance survey, historic window restoration (LAUNCH-10), asbestos abatement, lead pipe replacement
- queries: "lead paint removal toronto", "lead paint test ontario", "lead paint old house renovation toronto"
- verdict: BORDERLINE — no Canadian price data; a section inside the survey and window-restoration pages.

### radon-mitigation
- name: radon mitigation
- status: LAUNCH-10
- level: SERVICE
- tier: T3 (low end DEFER)
- gta_price_cad: C$1.8k–3.2k in Toronto; quotes from certified (C-NRPP) mitigators cluster at C$3k–4k across the GTA, Hamilton and KW† — https://breatheradonfree.ca/blog/radon-mitigation-cost-ontario/; https://radondepot.ca/pages/radon-mitigation-cost-canada
- gbp_belief: NONE — nearest: "Environmental consultant" / "Home inspector" (there is no radon category in the 2026 list)
- gta_drivers: Toronto is low-radon: average 43 Bq/m³, about 1 in 22 homes at or above 200 — https://evictradon.org/radon-research-series-radon-levels-in-canadas-six-largest-cities/ (a contractor blog claims 19%†: https://renohouse.ca/blog/radon-levels-gta-19-percent-above-guideline). The 2024 building code requires a radon rough-in in new houses from Apr 2025† — https://www.collingwood.ca/media/file/2024-obc-radonpdf
- data_hooks: Health Canada 200 Bq/m³ guideline; survey results by region; C-NRPP registry
- season: test Oct–Apr
- web: high radon test, radon testing, sump pit sealing, HRV
- queries: "radon mitigation toronto cost", "radon test toronto", "c-nrpp radon contractor ontario"
- verdict: GOOD — launch niche, but GTA pages must say plainly that radon is uncommon here.

### heat-pump-conversion
- name: cold-climate heat pump installation / "heat pump installers"
- status: NEW
- level: SERVICE
- tier: T3 (T2 with panel or duct work)
- gta_price_cad: C$5k–14k installed before rebate† — https://megacityhvac.com/blog/heat-pump-cost-toronto-2026; C$3.5k–20k Ontario† — https://www.custom-contracting.ca/resources/heat-pump-cost-ontario
- gbp_belief: PARTIAL — nearest: "HVAC contractor" (in practice exact: every HVAC shop sells heat pumps)
- gta_drivers: The $7,500 HRSP maximum is only for homes not heated by gas; Enbridge gas customers, most homes here, are capped at $2,000 — https://www.homerenovationsavings.ca/without-assessment/heat-pumps. HELP loans run 3.34–4.75%, no 0% offer — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- data_hooks: rebate by heating fuel; HRSP participating-contractor list (a roster); NRCan qualifying-model list; HELP; winter design temperature
- season: book spring/fall
- web: 200 amp upgrade, ductless multi-split, high-velocity AC, oil tank removal, boiler replacement
- queries: "heat pump installation toronto cost", "heat pump rebate ontario 2026", "hybrid heat pump enbridge rebate"
- verdict: BORDERLINE — rich rebate data, crowded HVAC SERPs; enter via oil-heat and radiator slices.

### geothermal-heat-pump
- name: geothermal heating installers
- status: NEW
- level: SERVICE
- tier: T1
- gta_price_cad: C$40k–80k+ typical; C$60k–95k+ for a retrofit with drilling — https://buildersontario.com/geothermal-system-cost-in-2026-ontario/; C$20k–50k, with vertical loops C$35k–55k — https://superiorplumbing.ca/hvac/geothermal-heat-pump-cost/
- gbp_belief: PARTIAL — nearest: "HVAC contractor" / "Drilling contractor"
- gta_drivers: HRSP pays $2,000/ton up to $12,000 in non-gas homes but a flat $3,000 to Enbridge gas customers — https://www.homerenovationsavings.ca/without-assessment/heat-pumps. HELP allows 20-year terms for geothermal — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- data_hooks: rebate by heating fuel; HELP; lot size from parcel data (decides horizontal vs vertical loop); drilling geology
- season: drilling Apr–Nov
- web: borehole drilling, radiant floor heating (EXISTING radiant-floor-heating), deep energy retrofit, hydronic distribution
- queries: "geothermal heating cost ontario", "geothermal installers toronto", "geothermal rebate ontario 2026"
- verdict: GOOD — T1 ticket with few true installers; fits suburban and estate lots (EST).

### boiler-hydronic-replacement
- name: boiler replacement / "hot water radiator heating specialists"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$5.5k–15k complete install. Condensing boilers vent through PVC out the wall, which disconnects the chimney — https://hvacnearme.ca/boiler-installation-cost-ontario/
- gbp_belief: PARTIAL — nearest: "Heating contractor" / "Boiler supplier"
- gta_drivers: 14.6% of Toronto dwellings predate 1946†, the radiator era — https://www.point2homes.com/CA/Demographics/ON/Toronto-Demographics.html. High-efficiency boilers qualify for HELP loans — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- data_hooks: housing age; TSSA gas rules; HELP; HRSP lists no boiler rebate, only heat pumps
- season: replace May–Sep; winter breakdowns
- web: chimney relining, high-velocity AC, ductless heads, radiator balancing, cold rooms, air-to-water heat pump
- queries: "boiler replacement toronto cost", "combi boiler radiators toronto", "radiator heating contractor toronto"
- verdict: GOOD — a century-home Track-2 slice; fewer hydronic specialists than furnace shops (EST).

### high-velocity-ac
- name: high-velocity air conditioning installers (small-duct systems)
- status: NEW
- level: SERVICE
- tier: T3 (T2 with a heat-pump air handler, EST)
- gta_price_cad: C$7k–9.5k+ in the GTA, depending on size and zones — https://forsaving.ca/spacepak-unit-installation-in-toronto/. EST C$12k–25k with a cold-climate heat pump and several zones.
- gbp_belief: PARTIAL — nearest: "Air conditioning contractor"
- gta_drivers: The 2-inch mini-ducts hide in floors, walls and ceilings and suit century homes — https://www.airtreatment.net/products-services/home-cooling-systems-and-services/mini-duct-high-velocity-air-conditioning/. Unico air handlers pair with cold-climate heat pumps in Toronto Victorians — https://forsaving.ca/unico-system-toronto/
- data_hooks: share of pre-1946 housing; HRSP heat pump rebate when paired; heritage-district flags (EST)
- season: book Feb–May
- web: no ductwork for AC, ductless multi-split, boiler homes, cold rooms, plaster patching
- queries: "high velocity air conditioning toronto", "spacepak cost toronto", "central air without ductwork toronto", "unico system toronto"
- verdict: STRONG — scarce specialists within HVAC; native to century homes.

### ductless-multi-split
- name: ductless heat pump installation / "mini-split installers"
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$3k–14k installed; multi-zone with 2–5 heads C$6k–14k† — https://megacityhvac.com/blog/ductless-mini-split-cost-toronto
- gbp_belief: PARTIAL — nearest: "Air conditioning contractor" (in practice exact)
- gta_drivers: Gets the same HRSP rebate by heating fuel ($2,000 in gas homes, $7,500 in others) — https://www.homerenovationsavings.ca/without-assessment/heat-pumps. Suits radiator homes, additions and suites without ducts.
- data_hooks: HRSP; condo and heritage rules for outdoor units (other clusters); winter design temperature
- season: Mar–Jun, before cooling season
- web: high-velocity AC, cold rooms, heat pump conversion, laneway suite HVAC, 200 amp upgrade
- queries: "ductless heat pump toronto cost", "mini split installation toronto", "multi zone mini split house with radiators"
- verdict: BORDERLINE — commodity HVAC; use as the comparison section on the no-ductwork page.

### hrv-erv-installation
- name: HRV installation / ERV installation
- status: NEW
- level: SERVICE
- tier: T3 (low end DEFER)
- gta_price_cad: C$2.8k for a basic retrofit up to C$11k+ premium; mid-range ducted ERV C$4.5k–6.5k† — https://renohouse.ca/blog/hrv-installation-cost-toronto-comparison; C$1.5k–3.25k average† — https://www.homestars.com/air-conditioning/price-guides/heat-recovery-ventilation-system-cost
- gbp_belief: PARTIAL — nearest: "HVAC contractor"
- gta_drivers: Becomes necessary once a home is air-sealed. The HRSP bundle pays for air sealing and insulation after a $600 home energy assessment — https://www.saveonenergy.ca/homerenovationsavings
- data_hooks: HRSP bundle; CSA F326 commissioning; radon adjacency
- season: year-round
- web: air sealing, deep energy retrofit, spray foam, radon, basement suite ventilation
- queries: "hrv installation cost toronto", "hrv vs erv ontario", "hrv for old house toronto"
- verdict: BORDERLINE — mid-to-low ticket and commodity HVAC; a section under deep energy retrofit.

### spray-foam-century-home
- name: spray foam insulation for old houses
- status: NEW (the spec §4.2 bench lists "foam insulation"; it is not in the CSV)
- level: USE (Track-2 slice)
- tier: T3
- gta_price_cad: closed-cell C$2.50–5.00/sq ft; a 1,200 sq ft attic C$2.4k–7.2k† — https://sprayfoamkings.ca/spray-foam-insulation-toronto-cost-per-square-foot-complete/
- gbp_belief: EXACT — nearest: "Insulation contractor" (enter through the slice only)
- gta_drivers: HRSP pays up to $7,700 through the assessment bundle, or $1,250 for an attic alone; participating contractors only — https://www.homerenovationsavings.ca/help-and-support. In solid-masonry century walls, foam placement is a moisture-risk decision (EST).
- data_hooks: HRSP rebate by assembly; housing age; freeze-thaw cycles; participating-contractor list
- season: interior year-round; roof decks with a reroof
- web: vermiculite removal (first), knob and tube rewiring (first), flat roof insulation, ice dams, HRV
- queries: "spray foam insulation century home toronto", "insulating brick walls old house toronto", "spray foam old house moisture"
- verdict: GOOD — Track-2 regret angle; avoid the "insulation toronto" head.

### flat-roof-cathedral-insulation
- name: flat roof insulation / cathedral ceiling insulation
- status: NEW
- level: USE (Track-2 slice)
- tier: T3
- gta_price_cad: EST C$3k–10k (closed-cell rates × roof area, plus ceiling repair) — https://sprayfoamkings.ca/spray-foam-insulation-toronto-cost-per-square-foot-complete/ †
- gbp_belief: EXACT — nearest: "Insulation contractor" / "Roofing contractor"
- gta_drivers: HRSP has its own rebate line for cathedral ceilings and flat roofs: up to $650 at R-20 or $750 at R-28 — https://www.homerenovationsavings.ca/help-and-support. Unvented cathedral ceilings need closed-cell foam to avoid condensation and ice dams† (same sprayfoam source).
- data_hooks: HRSP R-value tiers; ice-dam and snow days; flat-roof permits (other cluster)
- season: exterior with a reroof May–Oct; interior year-round
- web: flat roof replacement on a semi, ice dams, spray foam, attic ventilation, hot third floor
- queries: "flat roof insulation toronto", "cathedral ceiling insulation rebate ontario", "insulate flat roof from inside toronto"
- verdict: GOOD — the rebate line is itself a data module; pairs with flat-roof Track-2.

### deep-energy-retrofit
- name: deep energy retrofit / whole-house energy retrofit
- status: NEW
- level: SERVICE
- tier: T1
- gta_price_cad: A study of three Toronto archetypes (century detached, century semi, wartime) found C$65k–93k life-cycle cost for a 69–72% energy cut† — https://ascelibrary.org/doi/abs/10.1061/JAEIED.AEENG-1639. EST upfront C$60k–150k+.
- gbp_belief: NONE — nearest: "Energy advisory service" / "General contractor"
- gta_drivers: HELP lends up to $125k through property tax, with 20-year terms for heat pumps, solar, windows or geothermal — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/. The federal Greener Homes Loan has closed — https://www.homerenovationsavings.ca/help-and-support
- data_hooks: HELP; HRSP bundle plus $600 assessment; housing archetype mix by ward; EnerGuide ratings
- season: plan in winter, build Apr–Nov
- web: heat pump, exterior insulation, windows, HRV, air sealing, solar plus battery, EnerGuide audit
- queries: "deep energy retrofit toronto", "net zero retrofit toronto house", "energy retrofit contractor toronto"
- verdict: GOOD — T1 ticket and no GBP category, but thin demand, so a probe hub.

### standby-generator
- name: standby generator installation / "whole-home generator installers"
- status: EXISTING(standby-generators)
- level: SERVICE
- tier: T2
- gta_price_cad: 22 kW installed C$10.5k–12.5k — https://truesourcegenerators.ca/generac-generator-cost-canada-guide/; partial-home C$8k–15k, whole-home C$18k–35k — https://www.koljibroselectrical.ca/cost-generator-installation
- gbp_belief: EXACT — nearest: "Electric generator shop"
- gta_drivers: The July 16, 2024 storm cut power to about 207,000 Toronto Hydro customers, roughly 26% of the base — https://www.torontohydro.com/documents/20143/204243691/major-event-report-july-16-2024. The May 2022 derecho cut about 1.1M Ontario customers† — https://en.wikipedia.org/wiki/May_2022_Canadian_derecho
- data_hooks: Ontario Energy Board scorecards, which report reliability for every utility — https://www.oeb.ca/utility-performance-and-monitoring; ESA and TSSA permits
- season: Sep–Nov; spikes after storms
- web: battery backup, transfer switch, 200 amp upgrade, sump pump backup, frequent outages
- queries: "standby generator cost ontario", "generac installer toronto", "whole home generator toronto"
- verdict: GOOD — T2 with outage data by utility, but the EXACT dealer category weakens the gap.

### home-battery-backup
- name: home battery backup installers
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: a Powerwall 3 installed costs C$19k–24k — https://solarguide.ca/tesla-powerwall/; same range† — https://solar-x.ca/blog/tesla-powerwall-3-ontario-cost-2026
- gbp_belief: PARTIAL — nearest: "Solar energy company" / "Electrician"
- gta_drivers: The HRSP battery rebate ($300/kWh, up to $5,000) applies only when the battery is paired with new solar, and a rebated system gives up net metering — https://www.homerenovationsavings.ca/without-assessment/solar. HELP loans cover batteries — https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- data_hooks: HRSP; HELP; OEB reliability scorecards; time-of-use electricity rates (EST)
- season: year-round; before winter
- web: solar plus battery, standby generator, frequent outages, EV charger, 200 amp upgrade
- queries: "home battery backup toronto", "battery rebate ontario 2026", "powerwall cost ontario"
- verdict: GOOD — the new rebate rules confuse buyers, which is the content moat.

### solar-plus-battery
- name: solar panel installers
- status: NEW
- level: SERVICE
- tier: T2
- gta_price_cad: C$2.42–3.50 per watt† — https://solar-x.ca/blog/solar-panels-cost-ontario-2026; C$13k–16.5k for 5 kW† — https://greenbuildingcanada.ca/average-solar-panel-cost-ontario/
- gbp_belief: EXACT — nearest: "Solar energy company" / "Solar energy system service"
- gta_drivers: HRSP pays $1,000/kW up to $5,000, but only for systems that use all their own power (no net metering) — https://www.homerenovationsavings.ca/without-assessment/solar
- data_hooks: HRSP; net metering through the local utility; HELP; solar irradiance
- season: install Apr–Nov
- web: battery backup, net metering vs rebate, roof replacement, 200 amp upgrade
- queries: "solar panels toronto cost", "net metering vs rebate ontario", "solar battery rebate ontario"
- verdict: EXCLUDE — EXACT GBP category and SERPs full of installers and aggregators; keep only the rebate-vs-net-metering guide.

### chimney-relining
- name: chimney relining / chimney liner installation
- status: EXISTING(chimney-relining)
- level: SERVICE
- tier: T3 (gas liners DEFER)
- gta_price_cad: 6" flexible gas liner C$1.8k–2.4k; 8" rigid insulated wood liner C$3k–4k; dual-flue C$5k–6.8k — https://renohouse.ca/services/exterior/chimney-liner-relining
- gbp_belief: PARTIAL — nearest: "Chimney services" / "Chimney sweep"
- gta_drivers: Switching to a condensing boiler or furnace moves the venting to PVC and disconnects the chimney — https://hvacnearme.ca/boiler-installation-cost-ontario/ — which often leaves a water heater that needs a liner (EST). Insurers require a WETT wood-appliance inspection report† — https://www.torontocomfortzone.com/guides/wett-inspection-ontario-guide
- data_hooks: WETT; TSSA gas rules; housing age; freeze-thaw counts (masonry wear)
- season: Aug–Nov
- web: WETT inspection, chimney rebuild (EXISTING chimney-rebuilds), fireplace conversion, boiler replacement, repointing
- queries: "chimney liner cost toronto", "chimney relining toronto", "stainless steel chimney liner ontario"
- verdict: BORDERLINE — the chimney-services GBP category covers it, and the ticket straddles T3 and DEFER.

### fireplace-conversion
- name: fireplace conversion / wood to gas fireplace insert
- status: EXISTING(fireplace-conversions)
- level: SERVICE
- tier: T3
- gta_price_cad: gas insert C$3k–6.5k; new direct-vent fireplace C$4.5k–10k+ — https://www.torontocomfortzone.com/guides/gas-fireplace-installation-cost-toronto
- gbp_belief: PARTIAL — nearest: "Fireplace store" / "Gas installation service"
- gta_drivers: Gas work needs licensed gas technicians and an inspection — https://www.torontocomfortzone.com/guides/gas-fireplace-installation-cost-toronto. Ontario insurers almost always require a WETT report for wood-burning† — https://www.torontocomfortzone.com/guides/wett-inspection-ontario-guide
- data_hooks: TSSA; WETT; Enbridge gas availability; insurance surcharges
- season: Aug–Nov
- web: chimney relining, WETT inspection, gas line, electric fireplace insert, heritage mantel restoration
- queries: "convert wood fireplace to gas toronto cost", "gas fireplace insert toronto", "wood to electric fireplace conversion"
- verdict: GOOD — the GBP category is a retail store, not an installer, and WETT and insurers drive the work.

### kitec-replacement
- name: Kitec replacement / "Kitec plumbing replacement"
- status: NEW
- level: SERVICE
- tier: T3 (houses T2)
- gta_price_cad: from C$5k for a 1-bed condo, C$15k+ for 3-bed and larger, C$5k–25k+ overall; Mississauga permit from C$237 — https://djasonplumbing.com/blog/the-real-cost-of-replacing-kitec-plumbing-in-a-mississauga-condo/. About C$8k for a 2-bed/2-bath — https://urbaneer.com/blog/toronto_condominiums_kitec_plumbing
- gbp_belief: PARTIAL — nearest: "Plumber"
- gta_drivers: Common in Toronto condos from about 1995 to the early 2000s; condo corporation numbers 1200–1900 are a screening flag. The City favours whole-building replacement under one permit; the class action closed January 2020 — https://urbaneer.com/blog/toronto_condominiums_kitec_plumbing
- data_hooks: condo corporation number and registration year (building-level lookup); status certificates; plumbing permits
- season: year-round; driven by home sales
- web: Kitec in a condo, condo board approval, drywall and ceiling repair, whole-house repiping
- queries: "kitec replacement cost toronto condo", "kitec plumbing toronto", "kitec insurance ontario"
- verdict: STRONG — native to the GTA, forced by insurers and resale, and checkable building by building.

### whole-house-repiping
- name: whole-house repiping (galvanized, Poly-B, cast-iron stack)
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: bungalow C$3k–7k; 2-bath C$5k–10k; 2-storey with 3 baths C$8k–15k — https://www.antaplumbing.com/answer/house-repiping-cost/. Cast-iron drain C$70–150+ per linear foot plus C$1.5k–5k excavation — https://canadianrooter.com/drain-pipe-replacement.php
- gbp_belief: PARTIAL — nearest: "Plumber"
- gta_drivers: Many Toronto and Oakville homes built before 1960 still have galvanized or lead supply pipes — https://www.antaplumbing.com/answer/house-repiping-cost/. Once owners replace their side, the City replaces its lead side on priority — https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/priority-lead-water-service-replacement-program/. Insurers refuse or surcharge Poly-B† — https://www.mychoice.ca/blog/poly-b-plumbing-insurance-guide/
- data_hooks: City lead-pipe replacement program; housing age; plumbing permits
- season: year-round
- web: lead pipe replacement, Kitec, cast-iron stack, main drain (other cluster), low water pressure
- queries: "galvanized pipe replacement toronto", "repipe house toronto cost", "cast iron stack replacement toronto"
- verdict: GOOD — the lead-pipe program and insurers drive it; enter through "galvanized/lead" terms.

### outcome-knob-and-tube-insurance
- name: insurance won't cover knob and tube
- status: NEW
- level: OUTCOME
- tier: T2 (leads to knob-and-tube-rewiring)
- gta_price_cad: see knob-and-tube-rewiring — https://renohouse.ca/blog/knob-tube-cost-rewiring-toronto; https://www.416construction.com/post/how-much-does-it-cost-to-remove-knob-and-tube-wiring-in-toronto
- gbp_belief: NONE — nearest: "Electrician" (an informational query; the local pack is probably thin, EST)
- gta_drivers: ESA itself says "many insurers will not provide or renew coverage" — https://esasafe.com/home-renovation-buying-and-selling/knob-and-tube/. Insurers refuse, surcharge or demand removal before issuing a new policy† — https://www.onlia.ca/magazine/blogs/can-i-get-home-insurance-with-knob-and-tube-wiring
- data_hooks: a table of insurer policies that we compile (EST product idea); ESA assessment and certificate; housing age
- season: spring closings
- web: knob-and-tube rewiring, partial rewire, ESA inspection, insurance broker, home inspection
- queries: "knob and tube insurance ontario", "can't get home insurance knob and tube toronto", "insurance company wants knob and tube removed"
- verdict: STRONG — worth its own page: distinct demand plus insurer data.

### outcome-vermiculite-found
- name: vermiculite in the attic
- status: NEW
- level: OUTCOME
- tier: T2 (leads to vermiculite-attic-removal)
- gta_price_cad: a limited asbestos survey costs C$400–800 and removal C$10k–15k — https://www.atticinsulationtoronto.ca/blog/the-cost-to-remove-vermiculite-attic-insulation/
- gbp_belief: NONE — nearest: "Asbestos testing service"
- gta_drivers: Treat older vermiculite as possibly asbestos-bearing: leave it alone or hire trained removers† — https://www.ccohs.ca/oshanswers/diseases/vermiculite.html
- data_hooks: testing costs; HRSP attic rebate after removal; housing age
- season: year-round; around home purchases
- web: vermiculite removal, asbestos testing, attic insulation rebate, knob and tube rewiring, home inspection
- queries: "vermiculite in attic buying house ontario", "is vermiculite dangerous", "vermiculite test toronto"
- verdict: GOOD — a section or FAQ on the vermiculite page, not its own URL.

### outcome-kitec-in-condo
- name: Kitec in my condo
- status: NEW
- level: OUTCOME
- tier: T3 (leads to kitec-replacement)
- gta_price_cad: C$5k–15k+ depending on unit size — https://djasonplumbing.com/blog/the-real-cost-of-replacing-kitec-plumbing-in-a-mississauga-condo/
- gbp_belief: NONE — nearest: "Plumber"
- gta_drivers: The 1200–1900 corporation-number screen, and the City's preference for building-wide replacement — https://urbaneer.com/blog/toronto_condominiums_kitec_plumbing. Insurers apply higher Kitec deductibles or decline coverage† — https://www.thinkinsure.ca/insurance-help-centre/kitec-plumbing.html
- data_hooks: condo corporation number → Kitec-era flag (a lookup module no one else has); status certificate
- season: year-round
- web: Kitec replacement, condo board approval, status certificate review, water damage deductible
- queries: "does my condo have kitec", "kitec condo toronto buying", "tscc kitec list"
- verdict: STRONG — worth its own page: a building-level lookup is exactly the local data the survival rule asks for.

### outcome-oil-tank-found
- name: buying a house with an oil tank
- status: NEW
- level: OUTCOME
- tier: T3 (T2 when converted to a heat pump)
- gta_price_cad: C$450–5k for removal, before any clean-up — https://www.waterlineenvironmental.ca/are-oil-tank-removal-costs-covered-by-the-government-or-insurance/
- gbp_belief: NONE — nearest: "Heating oil supplier"
- gta_drivers: Insurance Bureau of Canada age limits: 15 years for an outdoor tank, 25 years for an indoor one — https://www.thinkinsure.ca/insurance-help-centre/home-oil-heating.html. Unused buried tanks must be removed — https://www.tssa.org/faqs-storage-tanks
- data_hooks: TSSA rules; HRSP $7,500 heat pump rebate for oil-heated homes — https://www.homerenovationsavings.ca/without-assessment/heat-pumps
- season: spring market; digging Apr–Nov
- web: oil tank removal, oil to heat pump, soil test, fill pipe, home insurance
- queries: "house has oil tank ontario insurance", "old oil tank in basement toronto", "buried oil tank found ontario"
- verdict: GOOD — a section plus a conversion guide under the oil tank page.

### outcome-high-radon-test
- name: high radon test result
- status: NEW (adjacent to LAUNCH-10 radon)
- level: OUTCOME
- tier: T3
- gta_price_cad: see radon-mitigation — https://breatheradonfree.ca/blog/radon-mitigation-cost-ontario/ †
- gbp_belief: NONE — nearest: "Environmental consultant"
- gta_drivers: The guideline is 200 Bq/m³, and the higher the reading, the sooner to act — https://www.canada.ca/en/health-canada/services/environmental-workplace-health/radiation/radon/government-canada-radon-guideline.html. About 1 in 22 Toronto homes is at or above 200 — https://evictradon.org/radon-research-series-radon-levels-in-canadas-six-largest-cities/
- data_hooks: survey results by region; C-NRPP registry; Ontario Building Code radon rough-in
- season: test Oct–Apr
- web: radon mitigation, retest, sump sealing, HRV
- queries: "radon level 300 what to do", "high radon toronto", "radon test result meaning canada"
- verdict: GOOD — a section on the LAUNCH-10 radon page.

### outcome-cold-rooms-century-home
- name: cold rooms in an old house
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: C$3k–14k for ductless heads or multi-zone† — https://megacityhvac.com/blog/ductless-mini-split-cost-toronto; HRSP pays $600 for the home energy assessment — https://www.saveonenergy.ca/homerenovationsavings
- gbp_belief: NONE — nearest: "HVAC contractor"
- gta_drivers: 14.6% of Toronto dwellings predate 1946† — https://www.point2homes.com/CA/Demographics/ON/Toronto-Demographics.html. HRSP has rebate lines for attics, cathedral ceilings and flat roofs — https://www.homerenovationsavings.ca/help-and-support
- data_hooks: housing age; HRSP assessment; winter design temperature; thermal imaging (TAXONOMY-ROW "Thermal imaging diagnostics")
- season: complaints Nov–Mar; fixes Apr–Oct
- web: ductless head, radiator balancing, boiler replacement, spray foam, flat roof insulation, high-velocity AC
- queries: "cold room in house fix toronto", "third floor cold century home", "uneven heat old house radiators"
- verdict: GOOD — a diagnostic hub guide linking the HVAC and insulation rows; demand unmeasured.

### outcome-no-ductwork-for-ac
- name: central air for a house without ducts
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: high-velocity C$7k–9.5k+ — https://forsaving.ca/spacepak-unit-installation-in-toronto/; multi-zone ductless C$6k–14k† — https://megacityhvac.com/blog/ductless-mini-split-cost-toronto
- gbp_belief: NONE — nearest: "Air conditioning contractor"
- gta_drivers: Century homes are radiator-heated with no ducts; mini-ducts thread through plaster walls — https://www.airtreatment.net/products-services/home-cooling-systems-and-services/mini-duct-high-velocity-air-conditioning/
- data_hooks: housing age; HRSP heat pump rebate by fuel; heritage-district flags
- season: book Feb–May
- web: high-velocity AC, ductless multi-split, heat pump, window units, boiler replacement
- queries: "central air without ductwork toronto", "air conditioning house with radiators", "best ac for old house no ducts"
- verdict: STRONG — worth its own page: a high-velocity vs ductless comparison built on housing-stock data.

### outcome-musty-smell-after-flood
- name: musty smell after a basement flood
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: see mould-remediation — https://www.wrightrestorations.ca/blog/mold-removal-cost-toronto-2026
- gbp_belief: NONE — nearest: "Water damage restoration service"
- gta_drivers: Toronto got more than 208 mm of rain in July 2024, 100 mm of it on July 16 — https://www.torontohydro.com/documents/20143/204243691/major-event-report-july-16-2024. CBC reported repeated storms and flooding† — https://www.cbc.ca/news/canada/toronto/rain-thunderstorm-warning-gta-1.7264873
- data_hooks: storm history; the insurance "sudden and accidental" rule; City flooding subsidy (other cluster)
- season: Jul–Aug storms; spring thaw
- web: mould remediation, water damage restoration, dehumidifier, backwater valve, waterproofing
- queries: "musty smell basement after flood", "mould after basement flood toronto insurance", "mould behind drywall signs"
- verdict: GOOD — a section on the mould page, timed to storm events.

### outcome-frequent-power-outages
- name: backup power for outages
- status: NEW
- level: OUTCOME
- tier: T2
- gta_price_cad: generator C$10.5k–12.5k — https://truesourcegenerators.ca/generac-generator-cost-canada-guide/; battery C$19k–24k — https://solarguide.ca/tesla-powerwall/
- gbp_belief: NONE — nearest: "Electric generator shop"
- gta_drivers: About 207,000 Toronto Hydro customers lost power on July 16, 2024 — https://www.torontohydro.com/documents/20143/204243691/major-event-report-july-16-2024. Researchers warn of more heavy-rain outages unless the grid is strengthened† — https://www.cbc.ca/news/canada/toronto/toronto-grid-flooding-resilience-1.7271387
- data_hooks: OEB scorecards by utility (reliability varies by city); HRSP battery rules
- season: Sep–Nov; after storms
- web: standby generator, battery backup, sump pump battery, transfer switch, 200 amp upgrade
- queries: "power keeps going out toronto", "generator vs battery backup ontario", "backup power sump pump toronto"
- verdict: GOOD — a generator-vs-battery decision page built on reliability data by utility.

---

## Web map

- **Hub A: Old-house hazards and insurance** (a guide organized around what the insurer or home inspector flagged)
  - Electrical: outcome-knob-and-tube-insurance → knob-and-tube-rewiring. Related: aluminum-wiring-remediation. Enabling job: electrical-service-upgrade.
  - Asbestos: asbestos-abatement (with a survey section) → vermiculite-attic-removal ← outcome-vermiculite-found. Also uffi-removal and lead-paint-abatement.
  - Fuel: outcome-oil-tank-found → oil-tank-removal → heat-pump-conversion. Non-gas homes get the $7,500 rebate, so this is the best rebate path in the cluster.
  - Plumbing: outcome-kitec-in-condo → kitec-replacement. Related: whole-house-repiping (lead service, Poly-B, stack).
  - Moisture: outcome-musty-smell-after-flood → mould-remediation → dehumidifier (deferred).
  - Shared specialists:
    - ESA licensed electricians: knob and tube, aluminum wiring, 200 amp upgrades, generator and battery hookups.
    - Type 3 abatement firms: asbestos, vermiculite, UFFI, mould, lead.
    - TSSA fuel contractors: oil tanks, fuel conversions, gas fireplaces.
    - Plumbers: Kitec, repiping, lead service lines.
- **Hub B: Century-home comfort and electrification**
  - Entry points: outcome-cold-rooms-century-home and outcome-no-ductwork-for-ac lead to high-velocity-ac, ductless-multi-split, boiler-hydronic-replacement, heat-pump-conversion and geothermal-heat-pump.
  - Building envelope: spray-foam-century-home, flat-roof-cathedral-insulation and hrv-erv-installation, all under deep-energy-retrofit as the umbrella.
  - Order of work: remove vermiculite and knob and tube before insulating; upgrade to 200 amp before a heat pump.
  - Shared: HRSP participating HVAC and insulation contractors (verifiable rosters). Funding is HRSP plus HELP.
- **Hub C: Backup power**
  - outcome-frequent-power-outages leads to standby-generator, home-battery-backup and solar-plus-battery (guide only).
  - Links: 200 amp upgrade, sump pump backup (drainage cluster).
- **Hub D: Hearth and venting**
  - fireplace-conversion ↔ chimney-relining ↔ WETT (deferred) ↔ boiler-hydronic-replacement (a condensing boiler can leave the water heater without a proper vent).
- **Cross-cluster links**
  - radon (LAUNCH-10) ↔ HRV ↔ basement finishing.
  - lead paint ↔ historic window restoration (LAUNCH-10).
  - flat-roof insulation ↔ flat-roof replacement (roofing).
  - mould ↔ basement waterproofing (drainage).

## Deferred (low ticket)

- designated-substance-survey — DEFER(C$400–2k). A limited survey costs C$400–800 and most homes C$1.2k–2k (https://www.atticinsulationtoronto.ca/blog/the-cost-to-remove-vermiculite-attic-insulation/). Nearest GBP: "Asbestos testing service". Keep it as the O. Reg. 278/05 section inside asbestos-abatement.
- oil-tank-removal (basement or above-ground) — DEFER(C$450–2k) — https://www.waterlineenvironmental.ca/are-oil-tank-removal-costs-covered-by-the-government-or-insurance/; https://oiltankremoval.ca/
- wett-inspection — DEFER(C$200–450)† — https://www.torontocomfortzone.com/guides/wett-inspection-ontario-guide; https://www.asads.ca/services/wett (C$249). Nearest GBP: "Chimney sweep" / "Home inspector".
- radon-testing — DEFER(EST C$50–300). Upstream of LAUNCH-10 radon.
- lead-water-service-private-side — DEFER(C$1.5k–3.5k)† — https://torontoplumbingpros.com/guides/lead-pipe-replacement-toronto/. The City's lead-pipe replacement program is a strong data hook; revisit as a Toronto-only page.
- central-vacuum (EXISTING central-vacuum-systems) — DEFER(C$2k–4k retrofit)† — https://candoductcleaning.com/central-vacuum-installation-cost/. GBP EXACT: "Vacuum cleaning system supplier".
- ice-dam-heat-cables (TAXONOMY-ROW "Ice dam mitigation retrofits") — DEFER(C$400–1.5k)† — https://www.custom-contracting.ca/resources/ice-dam-prevention-cost-ontario. Nearest GBP: "Roofing contractor".
- attic-ventilation — DEFER(EST C$500–2k; no source found). A roofing and insulation sub-use.
- whole-home-dehumidifier (TAXONOMY-ROW "Whole-home dehumidification systems") — DEFER(C$1.5k–2.8k)† — https://www.ecofrostheating.ca/blog/whole-house-dehumidifier-worth-it-ontario. Nearest GBP: "HVAC contractor".
- whole-home-humidifier — DEFER(EST C$500–1.5k; no source found).
- lightning-protection (EXISTING lightning-protection) — no residential price found. One Ontario installer exists (https://dlrc.com/services/commercial-industrial-installation/ †). No GBP category and no GTA demand evidence; revisit.

## Excluded (commodity / exact GBP / red ocean)

- Smart home and security — EXACT "Home automation company" / "Security system installation service"; red ocean.
- Water softeners and whole-home filtration (EXISTING water-treatment-systems) — EXACT "Water softening equipment supplier" / "Water treatment supplier". Toronto's lake water is only moderately hard (about 6–8 gpg)†. C$1.8k–4.5k† — https://premierplumbing.ca/water-softener-system-cost/
- Tankless and heat-pump water heaters — "Hot water system supplier" / "Plumber". Enercare and Reliance dominate through rentals (about C$35–50/month†, https://reliancehomecomfort.com/learning-centre/ontario-water-heater-pricing-guide/). HRSP pays only $500, and only in the bundle. Guide idea: buying out a water heater rental.
- EV charger installation (P0 cut; EXISTING ev-charger-installation) — the 2026 list now has an EXACT "Electric vehicle charging station contractor" category, which supports the cut. Use it only as a link from the 200 amp and battery pages.
- Solar PV head term — EXACT; see the solar-plus-battery row (EXCLUDE).
- Furnace and AC replacement head term — EXACT "HVAC contractor" / "Furnace repair service" / "Air conditioning contractor".
- Water damage restoration head term — EXACT "Water damage restoration service"; enter only through the mould slice.
- General electrician head term (panels, pot lights) — EXACT "Electrician"; enter only through the insurance-driven slices.
- Attic insulation top-up — EXACT "Insulation contractor" and low ticket (EST C$1.5k–4k); HRSP pays up to $1,250. Keep only the century-home, cathedral and flat-roof slices.

## Sources

Repo: spec/build-spec.md; spec/ADDENDUM-2026-08-01.md; data/validation/p0-report.md; data/niches/nichecandidates.csv; data/niches/taxonomy-premium-v1.csv; data/validation/evidence/radon-mitigation.md; data/validation/evidence/ev-charger-installation.md

GBP category lists:
- https://www.lobstr.io/blog/google-business-categories
- https://gist.github.com/manchumahara/dc88a6b9b157ada5f02cb8408653b80f

Programs and regulation:
- https://www.homerenovationsavings.ca/without-assessment/heat-pumps
- https://www.homerenovationsavings.ca/without-assessment/solar
- https://www.homerenovationsavings.ca/help-and-support
- https://www.homerenovationsavings.ca/
- https://www.saveonenergy.ca/homerenovationsavings
- https://www.toronto.ca/services-payments/water-environment/environmental-grants-incentives/home-energy-loan-program-help/
- https://claimrebate.ca/energy-rebates/heat-pump-rebate-toronto
- https://www.torontohydro.com/for-home/savings-sustainability/offers-rebates/heat-pump-assistance-program
- https://www.ecohome.net/en/news/1653/canadian-government-cancels-green-home-retrofit-loan-program/
- https://esasafe.com/home-renovation-buying-and-selling/knob-and-tube/
- https://www.tssa.org/faqs-storage-tanks
- https://www.ihsa.ca/pdfs/products/id/w130.pdf
- https://iesconsulting.ca/renovating-or-demolishing-in-ontario-dss/
- https://www.toronto.ca/services-payments/water-environment/tap-water-in-toronto/lead-drinking-water/priority-lead-water-service-replacement-program/
- https://www.canada.ca/en/health-canada/services/environmental-workplace-health/radiation/radon/government-canada-radon-guideline.html
- https://www.canada.ca/en/news/archive/2004/04/health-canada-advising-canadians-about-potential-risks-health-posed-vermiculite-insulation-may-contain-asbestos.html
- https://www.ccohs.ca/oshanswers/diseases/vermiculite.html
- https://www.collingwood.ca/media/file/2024-obc-radonpdf
- https://www.oeb.ca/utility-performance-and-monitoring
- https://www.toronto.ca/services-payments/water-environment/net-zero-homes-buildings/better-buildings-partnership/deep-retrofit-challenge/

Data, news and research:
- https://www.point2homes.com/CA/Demographics/ON/Toronto-Demographics.html
- https://evictradon.org/radon-research-series-radon-levels-in-canadas-six-largest-cities/
- https://crosscanadaradon.ca/survey/
- https://renohouse.ca/blog/radon-levels-gta-19-percent-above-guideline
- https://www.torontohydro.com/documents/20143/204243691/major-event-report-july-16-2024
- https://en.wikipedia.org/wiki/May_2022_Canadian_derecho
- https://www.cbc.ca/news/canada/toronto/toronto-grid-flooding-resilience-1.7271387
- https://www.cbc.ca/news/canada/toronto/rain-thunderstorm-warning-gta-1.7264873
- https://ascelibrary.org/doi/abs/10.1061/JAEIED.AEENG-1639
- https://www.theglobeandmail.com/real-estate/article-despite-headwinds-ambitious-deep-retrofits-charge-forward-in-name-of/
- https://urbaneer.com/blog/toronto_condominiums_kitec_plumbing
- https://www.municipalworld.com/articles/urea-formaldehyde-foam-insulation-removal-cost-of-removal-from-home/
- https://medium.com/@richardsilver/you-used-uffi-to-insulate-your-house-prepare-for-trouble-if-you-decide-to-sell-c2e6f6f06ecb

Electrical:
- https://renohouse.ca/blog/knob-tube-cost-rewiring-toronto
- https://www.416construction.com/post/how-much-does-it-cost-to-remove-knob-and-tube-wiring-in-toronto
- https://www.onlia.ca/magazine/blogs/can-i-get-home-insurance-with-knob-and-tube-wiring
- https://kvbearelectrical.ca/blog/aluminum-wiring-pigtailing-vs-replacement
- https://torontoevexperts.ca/cost-to-upgrade-to-200-amp-service-toronto/
- https://xboct.ca/how-much-does-it-cost-to-upgrade-to-200-amp-panel/

Hazards:
- https://glrestoration.ca/blog/asbestos-removal-cost-toronto/
- https://www.atticinsulationtoronto.ca/blog/the-cost-to-remove-vermiculite-attic-insulation/
- https://allclearenvironmental.ca/uffi-removal/
- https://www.wrightrestorations.ca/blog/mold-removal-cost-toronto-2026
- https://www.waterlineenvironmental.ca/are-oil-tank-removal-costs-covered-by-the-government-or-insurance/
- https://oiltankremoval.ca/
- https://www.danoshconstruction.com/toronto-tank-removal
- https://www.thinkinsure.ca/insurance-help-centre/home-oil-heating.html
- https://perilcanada.com/our-services/lead-paint-removal
- https://www.angi.com/articles/how-much-cost-removing-lead-paint.htm
- https://homeguide.com/costs/lead-paint-removal-cost
- https://breatheradonfree.ca/blog/radon-mitigation-cost-ontario/
- https://radondepot.ca/pages/radon-mitigation-cost-canada

HVAC and envelope:
- https://megacityhvac.com/blog/heat-pump-cost-toronto-2026
- https://www.custom-contracting.ca/resources/heat-pump-cost-ontario
- https://buildersontario.com/geothermal-system-cost-in-2026-ontario/
- https://superiorplumbing.ca/hvac/geothermal-heat-pump-cost/
- https://hvacnearme.ca/boiler-installation-cost-ontario/
- https://forsaving.ca/spacepak-unit-installation-in-toronto/
- https://forsaving.ca/unico-system-toronto/
- https://www.airtreatment.net/products-services/home-cooling-systems-and-services/mini-duct-high-velocity-air-conditioning/
- https://megacityhvac.com/blog/ductless-mini-split-cost-toronto
- https://renohouse.ca/blog/hrv-installation-cost-toronto-comparison
- https://www.homestars.com/air-conditioning/price-guides/heat-recovery-ventilation-system-cost
- https://sprayfoamkings.ca/spray-foam-insulation-toronto-cost-per-square-foot-complete/

Power:
- https://truesourcegenerators.ca/generac-generator-cost-canada-guide/
- https://www.koljibroselectrical.ca/cost-generator-installation
- https://solarguide.ca/tesla-powerwall/
- https://solar-x.ca/blog/tesla-powerwall-3-ontario-cost-2026
- https://solar-x.ca/blog/solar-panels-cost-ontario-2026
- https://greenbuildingcanada.ca/average-solar-panel-cost-ontario/

Hearth:
- https://renohouse.ca/services/exterior/chimney-liner-relining
- https://www.torontocomfortzone.com/guides/gas-fireplace-installation-cost-toronto
- https://www.torontocomfortzone.com/guides/wett-inspection-ontario-guide
- https://www.asads.ca/services/wett

Plumbing:
- https://djasonplumbing.com/blog/the-real-cost-of-replacing-kitec-plumbing-in-a-mississauga-condo/
- https://www.thinkinsure.ca/insurance-help-centre/kitec-plumbing.html
- https://www.antaplumbing.com/answer/house-repiping-cost/
- https://canadianrooter.com/drain-pipe-replacement.php
- https://www.drainworks.com/plumbing-services-in-toronto/cast-iron-stack-repair
- https://www.mychoice.ca/blog/poly-b-plumbing-insurance-guide/
- https://torontoplumbingpros.com/guides/lead-pipe-replacement-toronto/

Deferred and excluded:
- https://candoductcleaning.com/central-vacuum-installation-cost/
- https://www.custom-contracting.ca/resources/ice-dam-prevention-cost-ontario
- https://www.ecofrostheating.ca/blog/whole-house-dehumidifier-worth-it-ontario
- https://premierplumbing.ca/water-softener-system-cost/
- https://reliancehomecomfort.com/learning-centre/ontario-water-heater-pricing-guide/
- https://dlrc.com/services/commercial-industrial-installation/
