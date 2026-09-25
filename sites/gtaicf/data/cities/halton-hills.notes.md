# Halton Hills local-data module — research notes

Retrieved 2026-09-25. Companion to `halton-hills.json`. Every figure in the JSON traces to a URL listed in its `sources` array; anything that could not be retrieved is `null` or flagged with the reason below.

## What was verified (with source host)

**Census (www12.statcan.gc.ca, 2021 Census Profile, Halton Hills Town CSD 3524015, DGUID 2021A00053524015)**
- Population 2021: 62,951. Private dwellings occupied by usual residents: 21,825.
- Single-detached: 15,940 of 21,825 occupied dwellings = 73.0 % (StatCan prints 73.0 % itself).
- Period of construction (25 % sample, total 21,825): pre-1960 4,365 (20.0 %); 1961–1980 5,745 (26.3 %); 1981–1990 1,815 + 1991–2000 3,815 = 5,630 (25.8 %); 2001–2005 2,575 + 2006–2010 1,435 + 2011–2015 1,175 + 2016–2021 895 = 6,080 (27.9 %). Grouped counts sum to 21,820 (random rounding). Percentages derived by division.
- DGUID found via the Census Profile search page (`results-resultats.cfm?...SearchText=Halton%20Hills`).

**Geology (OGS via ArcGIS feature services; en.wikipedia.org)**
- Queried the OGS MRD 128-REV surficial layer (`SurficialGeologyMRD128REV/FeatureServer/3`) and the MRD 219 Paleozoic layer (`MRD219_Paleozoic_Geology_of_Southern_Ontario/FeatureServer/4`) at 11 points. Coordinates used (lat, lon) and results:
  - reference 43.63, −79.95 → 5d clay-to-silt till / Queenston red shale
  - Georgetown (Wikipedia infobox) 43.65028, −79.90361 → 5d till / Queenston
  - Acton (Wikipedia) 43.63139, −80.03889 → 6 ice-contact stratified sand and gravel / Amabel dolostone
  - Glen Williams (Wikipedia) 43.66444, −79.925 → 19 modern alluvium / Queenston
  - Limehouse (Wikipedia) 43.63639, −79.97944 → 6 ice-contact stratified / Amabel
  - Norval (Wikipedia) 43.64667, −79.85889 → 12 older alluvium / Queenston
  - Halton Hills town (Wikipedia infobox) 43.62694, −79.95139 → 7b gravelly glaciofluvial / Queenston
  - Stewarttown (my approximation; Wikipedia has no coordinate) 43.6167, −79.9333 → 7a sandy glaciofluvial / Queenston
  - south Georgetown (my approximation) 43.635, −79.895 → 7b gravelly glaciofluvial / Queenston
  - Ballinafad (my approximation; Wikipedia has no coordinate) 43.70, −80.05 → 5b sandy silt till / Amabel
  - Hornby (my approximation) 43.58, −79.83 → 19 modern alluvium / Queenston
  - Wikipedia coordinates came from the MediaWiki API (`prop=coordinates`). The four approximated points are not surveyed centroids; OGS attributes are quoted verbatim.
- The reference coordinate and the Wikipedia town coordinate are ~350 m apart yet return different surficial units (5d till vs 7b gravel), so the Georgetown area sits on a till/glaciofluvial contact.
- Bedrock: Queenston Formation (Ordovician red shale) at all seven below-Escarpment points; Amabel Formation (Silurian grey/blue-grey dolostone) at Acton, Limehouse and Ballinafad above the Escarpment. Wikipedia's Halton Hills geology section states the same split and adds: Queenston shales of the eastern half are generally under >15 m of glacial sediment, predominantly Halton Till; several areas of thin drift south of Georgetown; the Escarpment face exposes Clinton and Cataract Group shales, sandstones, limestones and dolomites; hummocky Horseshoe Moraines above the Escarpment; South Slope / Peel Plain till plain below; lime quarrying at Limehouse and Acton.
- Item citations: arcgis.com item 4cb9a34cacc04633bb85c708239877e0 (MRD 128-REV) and geohub.lio.gov.on.ca dataset 4b1bbee3cd6f4fde8d3ce9ecfe206630 (MRD 219) both returned their metadata.

**Permits (haltonhills.ca, haltonhills.ic12.esolg.ca, forms.haltonhills.ca)**
- Residential Deck Permit Application Guide (17-page PDF, sample details marked "OBC 2024", also linked from the new site as `getContentAsset/5d0e8f70-...`): permit required when a deck serving a dwelling is both >600 mm (24") above grade and >10 m² (108 ft²); no permit for decks ≤600 mm above grade regardless of size.
- Footing depth: "POURED CONCRETE PIER MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL" (D01a/D01b) and "1.2m DEEP CONCRETE PIERS" (elevation sheet); piers extend ≥150 mm above ground; pier area = supported deck area × 1.9 kPa ÷ soil bearing capacity; bearing table 40–500 kPa (till 300, clay shale 400, sound rock 500); bearing capacity to be determined before construction and halved when water is at or near the excavation bottom.
- Helical piles: **not mentioned** anywhere in the guide (searched for helical, screw, CCMC, BMEC). CCMC appears only for non-wood guard systems. Plans must show foundation type, depth, size and spacing; designers may be the homeowner, a BCIN holder, a P.Eng. or an OAA architect.
- Process: apply online at forms.haltonhills.ca; fee paid at submission; residential damage deposit collected before issuance and released by Engineering Services after close-out; review report → resubmission via SharePoint link → placard and stamped plans downloaded. Inspection requests before 3 p.m. get next-day booking. The Town's Inspection Booking Request page lists footings and foundations, framing, plumbing and HVAC, insulation, occupancy, final.
- Fees: Building Services Fees 2026 (BLDG-2026, header "Transportation & Public Works – Building Services"): Deck, Porch, Roof Over Deck or Porch (Flat Rate) $288.45; Minimum Building Permit Fee – Small Residential $263.37; Damage Deposit – Residential (Flat Rate) $720.34; work started without a permit 1.5× the fee. Caveat: the PDF's Part C table extracts as a column of labels followed by a column of values; $288.45 is the fourth value against the fourth label, and the Balcony flat rate is identical, which is consistent. Verify against the rendered PDF before printing the number.
- The deck guide's fee link `haltonhills.ca/userfees/index.php` and its Building Services page `residents/building-permit-information.aspx` both redirect (the latter to `/work/building-engineering`, the former to page-not-found); the fee PDF was found from the Building & Engineering page instead.

**Climate (climate.weather.gc.ca)**
- Georgetown WWTP (6152695; 43.64 N, 79.88 W; 221 m; ~5.7 km east of the reference coordinate, distance derived from the coordinates), 1981–2010 normals computed from 1981–2006 (26 yrs): January mean −6.3 °C, January daily minimum −10.9 °C, 46.0 days/yr with minimum < −10 °C (Days with Minimum Temperature table), 169.0 days/yr minimum ≤0 °C, 55.8 days/yr maximum ≤0 °C, 135.9 cm snowfall.
- Frost-free: Georgetown publishes only a 12-year (50 % complete) percentile table, no average: at 50 % probability last spring frost May 19, first fall frost Sep 24, frost-free period ≤121 days. `frost_free_days` therefore uses Toronto Pearson (6158731, ~26 km east) 1991–2020: 174 days (Apr 27–Oct 20), with the note that Georgetown's real figure is probably shorter.
- The station-name search endpoint returned the empty search form for every name tried (georgetown, toronto, hamilton, waterloo, orangeville, brampton, milton); direct `climate_id=` URLs worked.
- Pitfall avoided: Days with Maximum Temperature also has a "< −10 °C" row; the JSON uses the Days with Minimum Temperature row.

**Region (halton.ca)**: About Halton Region page confirms Halton Hills is one of the four local municipalities.

## What was NOT verified (and why)

- **OBC clause text.** `code.clause` is `null`. The 1.2 m value is sourced from the Town's own deck guide (1200 mm / 1.2 m), not the Code; ontario.ca/laws is a JS shell and the 2024 Compendium sits behind Publications Ontario. Not re-attempted this run.
- **Town helical-pile requirements.** The deck guide is silent; no Town page retrieved mentions helical/screw piles, CCMC or BMEC for foundations. Ask Building Services (ext. 2925) before claiming any Town position.
- **Paris / Galt moraine names (task hint).** No retrieved source ties either name to Halton Hills; Wikipedia says "Horseshoe Moraines" above the Escarpment. The JSON does not use Paris/Galt.
- **Halton Till name.** Wikipedia (Halton Hills) uses it; the OGS layer attributes do not. The JSON attributes the name to Wikipedia only.
- **Depth to bedrock.** Only Wikipedia's ">15 m" general statement and "thin drift south of Georgetown"; no drift-thickness dataset queried.
- **Stewarttown, Ballinafad, Hornby, south-Georgetown coordinates** are my approximations (listed above).
- **Fee-schedule effective date / by-law number.** The PDF is labelled "2026" and "BLDG-2026"; no effective date or by-law number was extracted.
- **Permit review timeline in days.** Not published.
- **Sub-area coordinates for Terra Cotta, Stewarttown** absent from Wikipedia API (no coordinates returned).

Blocked or dead URLs (one line each):
- `haltonhills.ca/en/residents/building-permits.aspx` → page-not-found (site migrated; used `/building-permits` and `/work/building-engineering`).
- `haltonhills.ca/userfees/index.php` → page-not-found.
- `haltonhills.ca/en/residents/inspection-request-form.aspx` → page-not-found (used the Inspection Booking Request page).
- `climate.weather.gc.ca` station-name search → returned the blank search form (worked around with direct `climate_id` URLs).
- Wikipedia articles "Amabel Formation", "Paris Moraine", "Halton Till" → no extract returned (pages absent or redirects).

## Generic template claims — do they hold for Halton Hills?

| Template claim | Holds? | Basis |
|---|---|---|
| "Ontario's 4-foot frost line" | **Yes, as a municipal requirement, printed in metric** | Halton Hills deck guide: "MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL" and "1.2m DEEP CONCRETE PIERS". Say 1.2 m (about 4 ft); cite the guide, not an OBC clause number. |
| "Queenston shale" | **Only below (east of) the Escarpment** | OGS MRD 219 returns Queenston at Georgetown, Glen Williams, Norval, Stewarttown, Hornby and the reference point, but **Amabel dolostone** at Acton, Limehouse and Ballinafad. A page saying "Queenston shale under Halton Hills" is wrong for Acton and the Escarpment communities; say "Queenston shale below the Escarpment (Georgetown side), Amabel dolostone above it (Acton side)". |
| "[City] Building Department" | **Use "Building Services"** | The guide is issued by "Building Services", the fee schedule is headed "Transportation & Public Works – Building Services", and the website section is "Building & Engineering". The guide's sizing note 11 says "CONTACT YOUR LOCAL BUILDING DEPARTMENT", so the generic phrase is not wrong, but "Town of Halton Hills Building Services" is the department's own name. |
| "36-inch gate" | **Not a municipal requirement; do not present it as one** | No Halton Hills page or PDF retrieved mentions a 36-inch gate. The only 36" figure in the deck guide is the minimum guard height for decks ≤1.8 m above grade. If the line is about rig access, source it to the contractor's own machine specifications. |

## Files written
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/halton-hills.json`
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/halton-hills.notes.md`
