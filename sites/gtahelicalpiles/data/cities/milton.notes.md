# Milton local-data module — research notes

Retrieved 2026-09-25. Companion to `milton.json`. Every figure in the JSON traces to a URL listed in its `sources` array; anything that could not be retrieved is `null` with the reason below.

## What was verified (with source host)

**Census (www12.statcan.gc.ca, 2021 Census Profile, Milton Town CSD 3524009, DGUID 2021A00053524009)**
- Population 2021: 132,979 (2016: 110,128; +20.7 %). Private dwellings occupied by usual residents: 40,038.
- Single-detached: 22,720 of 40,040 occupied dwellings = 56.7 % (derived). Row houses are 9,140 (22.8 %), semis 3,755 (9.4 %).
- Period of construction (25 % sample, total 40,035): pre-1960 2,165 (5.4 %); 1961–1980 5,385 (13.5 %); 1981–2000 3,270 (8.2 %); 2001–2021 29,215 (73.0 %). Raw counts in the JSON `derivation_note`. Milton is the youngest housing stock of any city in this data set so far: nearly three-quarters of homes are 2001 or later.

**Geology (OGS via ArcGIS feature services; en.wikipedia.org)**
- Both OGS layers (MRD 128-REV surficial, layer 3; MRD 219 Paleozoic bedrock, layer 4) were point-queried at the reference coordinate and at eleven hand-placed points. Coordinates used (lat, lon), so anyone can re-run them:
  - reference 43.51681, −79.88294 · Old Milton / Main St 43.5130, −79.8800 · Town Hall 150 Mary St 43.5100, −79.8850 · Beaty 43.5050, −79.8550 · Clarke 43.5180, −79.8500 · Dempsey 43.5300, −79.8600 · Scott 43.5050, −79.9050 · Willmott 43.4970, −79.8750 · Ford 43.4850, −79.8600 · Campbellville 43.4881, −79.9822 (Wikipedia infobox 43°29′17″N 79°58′56″W) · Kilbride border 43.4450, −79.9350 · escarpment west of Tremaine Rd / Kelso 43.5180, −79.9550.
  - Neighbourhood points other than Campbellville are my approximations placed inside the road boundaries Wikipedia gives for each neighbourhood (Beaty: Derry–Louis St Laurent–James Snow–Thompson; Clarke: Derry–CP tracks–Thompson–James Snow; Dempsey: Steeles–CP tracks–Thompson–James Snow; Scott: Tremaine–Derry–CN tracks–Main; Willmott: Louis St Laurent–Derry–Ontario St–railway; Ford: Bronte St S–Britannia–RR25–Louis St Laurent; Old Milton: Bronte St S–CP tracks–Thompson–Robert/Nipissing). They are not surveyed centroids. OGS attributes are quoted verbatim.
- Surficial results: **fine-textured glaciolacustrine silt and clay (unit 8b)** at Beaty, Clarke, Scott, Willmott and Ford (i.e. most of the post-2001 subdivisions); **clay-to-silt till (unit 5d)** at Dempsey, Town Hall, the escarpment point and the Kilbride-border point; **modern alluvium (unit 19)** at the reference coordinate and Old Milton/Main St (Sixteen Mile Creek corridor); **ice-contact stratified sand and gravel (unit 6)** at Campbellville. No Milton point returned "Paleozoic bedrock at/near surface" (unit 3), unlike Oakville's creek valleys.
- Bedrock results: **Queenston Formation** (red shale) at every urban point (reference, Old Milton, Town Hall, Beaty, Clarke, Dempsey, Scott, Willmott, Ford); **Clinton-Cataract Group** (Whirlpool, Manitoulin, Cabot Head, Grimsby/Reynales/Fossil Hill etc.: shale, sandstone, dolostone, limestone) at the escarpment point west of Tremaine Rd and at the Kilbride border; **Amabel Formation** dolostone at Campbellville on the plateau.
- Wikipedia (Milton, Ontario): "Milton is situated on the Niagara Escarpment"; town founded on Sixteen Mile Creek. Wikipedia (Trafalgar Moraine): silty, clay-rich sand over shale; straddles Oakville and Milton, small part in Burlington at Milton's southern border; affected the eastern branch of Sixteen Mile Creek. Wikipedia (Campbellville): compact rural community in Nassagaweya Township, on the escarpment.

**Permits (milton.ca)**
- The current deck page is `https://www.milton.ca/en/business-and-development/decks.aspx` (title "Building Decks"); the earlier 404 URL is superseded. Permit trigger as printed: "A freestanding deck greater than 10 m² in area" or "Attached to a building or structure". **No height threshold** is printed on Milton's page (Oakville prints 61 cm; do not copy it across).
- Forms: Application for a Permit to Construct or Demolish (PDF dated Feb 16, 2026) plus Schedule 1 designer form; drawings D-1 site plan, D-2 structural/floor layout, D-3 section and details, A-7 sections; PDF only, generated from design software (no scans).
- Footing depth: the Town's deck sample drawings (Building Division, June 2018, 4 pages) print "MIN 4'-0" BELOW GRADE" on the section (D-3) and, on the footing-options sheet, "ANY DECK FOOTING (EXCLUDING DECK BLOCKS) WITHIN 4'-0" OF HOUSE ... SAME DEPTH AS EXISTING HOUSE FOOTINGS"; sizing table "BASED ON A SOIL BEARING CAPACITY OF 2000 LBS/FT²"; guards at 24" or more above grade; an engineered stamped detail is required for a guard system not built to the typical detail (e.g. a privacy screen serving as a guard).
- Helical piles are explicitly addressed on the footing-options sheet: "STEEL HELICAL PIER/PILE — MANUFACTURERS' INFORMATION MUST BE SUBMITTED WITH PERMIT APPLICATION ALONG WITH CCMC APPROVAL — PROFESSIONAL ENGINEER MUST DETERMINE THE DEPTH, SPACING AND SIZE OF HELICAL PIERS/PILES BASED ON SOIL CONDITION". Same wording as Oakville's drawings; both towns evidently share a drawing set.
- Inspections (decks page): Footing, Framing, Final building. Booking: online portal for permits after Oct 10, 2023, web form for older permits, or 905-878-7252 x2396 (inspections page).
- Fees (Building Permits page table): "New unenclosed deck or porch, or alteration to existing deck — $163.11 (flat rate)"; minimum permit fee $264.20 unless noted; revisions $436.51. No effective date printed on the page.
- Timeline: no residential day-count published. Process: cursory completeness review → email accept/refuse → invoice → full review after payment → issuance by email. ICI: staff contact within two business days.
- Portal: `https://permits.milton.ca/citizenportal/app/login` (linked from the Town's "Building Permit Applications and Portal Login" page).
- Department name as printed: **"Building Division"** (drawing title blocks "TOWN OF MILTON BUILDING DIVISION, 150 MARY ST"; inspections page mailing address "Town of Milton, Building Division"). The task hint said "Building Services"; that name does not appear on the Milton pages retrieved.

**Climate (climate.weather.gc.ca)**
- No Milton station exists in the 1991–2020 or 1981–2010 normals sets (the 1991–2020 station_select list was read in full; the 1981–2010 "milton" search returned only Hamilton stations).
- Nearest station with a temperature record: **Georgetown WWTP (6152695)**, 43.64 N, 79.88 W, 221 m, ~14 km due north of the reference coordinate (derived from the two coordinate pairs); 1981–2010 normals, temperature computed from 1981–2006 (26 years, code A). January mean −6.3 °C, January daily minimum −10.9 °C, **46.0 days/yr with minimum < −10 °C** (code C), 55.8 days/yr with maximum ≤ 0 °C, 135.9 cm snowfall. The frost-free average-length row is not published as a value (metadata shows 12 years, 50 % coverage; only probability tables appear), so `frost_free_days` uses Pearson.
- Toronto Pearson (6158731), 1991–2020, ~27 km ENE: January mean −5.0 °C, 34.2 days < −10 °C, frost-free 174 days (Apr 27–Oct 20), 130.6 days min ≤ 0 °C vs 49.5 days max ≤ 0 °C.
- Hamilton (6153193), 1991–2020, ~38 km SW: January mean −5.3 °C, 35.7 days < −10 °C, 164 frost-free days.
- Burlington TS (6151064), 1981–2010, was also read: January mean −4.4 °C but code D and no day-count elements; not used.
- Pitfall avoided: the "≤ −10 °C" row under *Days with Maximum Temperature* is not the cold-day count; the JSON uses the *Days with Minimum Temperature* "< −10 °C" row.

**Region (halton.ca)**: About Halton Region page lists the Town of Milton as one of the four local municipalities.

**Coordinates**: the task-supplied 43.51681, −79.88294 is kept as the module coordinate; it falls on the Sixteen Mile Creek alluvium in the old town. Wikipedia's infobox coordinate for Milton is 43°30′30″N 79°53′00″W (43.5083, −79.8833), about 1 km south.

## What was NOT verified (and why)

- **OBC clause text.** `code.clause` is `null`. ontario.ca/laws/regulation/120332 was fetched again today: 54 KB JavaScript shell titled "e-Laws | Ontario.ca"; the only "9.12" strings in it are SVG path coordinates. The 1.2 m value is sourced from Milton's own drawings (4'-0"), not the Code.
- **"Halton Till" as a name.** OGS attributes call unit 5d only "Clay to silt-textured till (derived from glaciolacustrine deposits or shale)". No retrieved source names it Halton Till for Milton; flagged as unverified in the JSON.
- **Depth to bedrock / drift thickness.** Not queried; no OGS drift-thickness service located.
- **Trafalgar Moraine footprint within Milton.** Wikipedia describes it; the OGS surficial attributes returned at the Milton points do not name a moraine unit, so the JSON quotes Wikipedia only and does not assign specific neighbourhoods to the moraine.
- **Frost-free period at a Milton-area station.** Georgetown WWTP publishes no average length; Pearson substituted with a note.
- **Fee schedule effective date / by-law number.** The Building Permits page prints fees without a date; no separate fee by-law PDF was retrieved.
- **Fixed residential permit review timeline.** None published.
- **Deck-block height limit and belled-footing minimum depth footnotes.** The PDF text extraction returned only fragments ("NOT MORE THAN 23½" FROM GRADE TO ...", "MINIMUM DEPTH OF BELLED/PAD FOOTING IS ..."); the numbers were not reliably readable, so they are not in the JSON.

## Blocked or dead hosts (one line each)
- milton.ca: `/business-and-development/building-permit-application-and-fees.aspx`, `/build-and-invest/building-permits.aspx` and the site-search module returned 404; the live pages are linked above. No blocks.
- climate.weather.gc.ca: `results_*` station-name searches return the blank search form; the `station_select_*` route works and was used.
- ontario.ca/laws: reachable but JS shell only (no regulation text).

## Generic template claims — do they hold for Milton?

| Template claim | Holds? | Basis |
|---|---|---|
| "Ontario's 4-foot frost line" | **Yes, as a municipal requirement** | Milton Building Division deck sample drawings: "MIN 4'-0" BELOW GRADE"; footings within 4'-0" of the house go to house-footing depth. Cite the drawings, not a Code clause number. |
| "Queenston shale" | **Yes for the urban area; no for the escarpment** | OGS MRD 219 returns Queenston at every urban point (Old Milton, Town Hall, Beaty, Clarke, Dempsey, Scott, Willmott, Ford). West of Tremaine Rd it is Clinton-Cataract Group (sandstone/shale/dolostone) and at Campbellville Amabel dolostone. Say "Queenston shale under the town; escarpment rock west of Tremaine". Unlike Oakville, no Georgian Bay Formation anywhere in Milton. |
| "[City] Building Department" | **Use "Building Division"** | Drawing title blocks and the inspections page say "Town of Milton Building Division", 150 Mary St. Neither "Building Department" nor "Building Services" appears on the Milton pages retrieved. |
| "36-inch gates" | **Not a municipal requirement; do not present it as one** | No Milton page or drawing retrieved mentions a 36-inch gate. The drawings' "36" HIGH GUARD" is a guard height, not a gate width. If the site's gate line is about rig access it must be sourced to the contractor's own equipment specifications. |

Also worth noting for copy: Milton's deck page has **no 61 cm / 24 in height trigger** (Oakville's does); the trigger is area (>10 m² freestanding) or attachment. Guards, however, are required at 24" above grade per the drawings.

## Files written
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/milton.json`
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/milton.notes.md`
