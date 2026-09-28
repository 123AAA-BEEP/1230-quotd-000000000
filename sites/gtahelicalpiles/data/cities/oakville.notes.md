# Oakville local-data module — research notes

Retrieved 2026-09-25. Companion to `oakville.json`. Every figure in the JSON traces to a URL listed in its `sources` array; anything that could not be retrieved is `null` with the reason below.

## What was verified (with source host)

**Census (www12.statcan.gc.ca, 2021 Census Profile, Oakville Town CSD 3524001)**
- Population 2021: 213,759. Private dwellings occupied by usual residents: 73,558.
- Single-detached: 43,130 of 73,555 occupied dwellings = 58.6 % (derived).
- Period of construction (25 % sample, total 73,560): pre-1960 5,950 (8.1 %); 1961–1980 13,935 (18.9 %); 1981–2000 25,510 (34.7 %); 2001–2021 28,165 (38.3 %). Percentages are derived by division; the raw counts are in the JSON `derivation_note`.

**Geology (OGS via ArcGIS/GeoHub feature services; en.wikipedia.org)**
- The OGS "Surficial geology of Southern Ontario" (MRD 128-REV) and "Paleozoic Geology of Southern Ontario" (MRD 219) layers are published as public ArcGIS feature services (`services2.arcgis.com/zVN3OC2fz0Sgv7ip/...`), which accept point queries. I queried both at the module coordinate (43.45011, -79.68292) and at hand-placed points inside each neighbourhood. Query coordinates used, so anyone can re-run them:
  - town centre 43.45011,-79.68292 · Old Oakville 43.445,-79.6667 and 43.442,-79.665 · Bronte 43.396,-79.708 · Bronte Creek/QEW 43.405,-79.725 · Glen Abbey 43.435,-79.725 · River Oaks 43.478,-79.70 · Joshua Creek 43.49,-79.65 · north Oakville/Dundas 43.49,-79.72 · Iroquois Ridge N 43.485,-79.68 · Kerr Village 43.44,-79.685 · Eastlake 43.465,-79.64 · College Park 43.46,-79.70 · Palermo 43.45,-79.76 · Uptown Core 43.49,-79.70 · Clearview 43.48,-79.62 · Sixteen Mile Creek mouth 43.442,-79.669 · Town Hall 43.47,-79.7014.
  - These neighbourhood points are my approximations of each area's location, not surveyed centroids. The OGS attributes returned at each point are quoted verbatim.
- Surficial results: clay-to-silt till (unit 5d) at every inland point; coarse glaciolacustrine sand and gravel (unit 9) at the three lakeshore points (Old Oakville, Bronte, Joshua Creek); Paleozoic bedrock at/near surface (unit 3) at the town-centre coordinate (Sixteen Mile Creek valley), Bronte Creek at the QEW, Clearview and Iroquois Ridge North; modern alluvium (unit 19) at the Sixteen Mile Creek mouth. The Eastlake point returned no surficial polygon.
- Bedrock results: **Queenston Formation** (red shale) at Bronte, Kerr Village, College Park, Town Hall, Glen Abbey, Palermo, Uptown Core and north Oakville; **Georgian Bay Formation** (grey shale and limestone) at Old Oakville lakeshore, Eastlake, Clearview, Joshua Creek and the town-centre coordinate. The contact runs roughly north–south through central Oakville near Sixteen Mile Creek.
- Wikipedia (Queenston Formation): a typical outcrop is exposed at Bronte Creek just south of the QEW. Wikipedia (Trafalgar Moraine): silty, clay-rich sand over shale bedrock, straddling Oakville and Milton.

**Permits (oakville.ca)**
- Deck permit trigger: >10 m² AND >61 cm above adjacent grade, or any deck attached to a house (Decks page). The application-process page lists "Deck greater than 0.61 metres (two feet) in height and is attached to a building" as requiring a permit and "Deck less than 0.61 mm [sic] (two feet) in height and not attached to a building" as not requiring one.
- Footing depth: the Town's own deck sample drawings (PDF, `getmedia/536ee2de-...`) say "MIN. 4'-0" BELOW GRADE ON UNDISTURBED SOIL"; footings within 4'-0" of the house must reach the existing foundation level; sizing table assumes 2,000 lbs/ft² soil bearing; precast deck blocks only for decks ≤23½" grade-to-joist, ≤592 ft², detached and roofless; guards required at ≥24" above grade.
- Helical piles are explicitly addressed in the same drawings: manufacturer's information plus CCMC approval must accompany the application, and a professional engineer must determine depth, spacing and size based on soil condition.
- Inspections (Building Inspection Scheduling Process page): excavation/footing forms, pre-backfill, framing, HVAC final, plumbing final, final interior/exterior safety, final exterior. Online requests before 6 p.m. are booked for the next business day; inspections 9 a.m.–4 p.m. Mon–Fri.
- Fees: the 2026 Building Services Rates and Fees PDF (`getmedia/f7c6c09f-...`) lists Deck (each) $220.00, unchanged 2024–2026, effective Mar-23. Minimum permit fee $200; $100 non-refundable pre-screening fee credited to the permit (application-process page). An older undated 2025 fee PDF on the building rates page shows the same $220 deck fee.
- Timelines: the Town cites LMCBO development-application timelines and says review times vary; no fixed day-count is published.
- Portal: Building Services applications go through the Town's "Online Services" account (Salesforce sign-in at oakvillecrm.my.site.com); the JSON `portal_url` is the Town's public entry page.

**Climate (climate.weather.gc.ca)**
- Oakville Southeast WPCP (615N745), 1981–2010 normals: January mean −4.7 °C, January daily minimum −8.9 °C, 44.0 days/yr with daily max ≤0 °C, 81.0 cm snowfall. Caveat: these normals are computed from 1981–2001 data only (19 years, 3 missing, code D) and the station publishes no frost-free or minimum-temperature-threshold elements.
- Toronto Pearson (6158731), 1991–2020: January mean −5.0 °C; 34.2 days/yr with minimum < −10 °C; frost-free period 174 days (Apr 27–Oct 20). Used for `frost_free_days` and `days_below_minus_10c` because Oakville does not publish them; Pearson is ~25 km NE of the module coordinate (distance derived from the two coordinate pairs).
- Hamilton (6153193), 1991–2020, ~37 km SW: January mean −5.3 °C, 35.7 days/yr < −10 °C, 164 frost-free days. Recorded in the note as a second bracket.
- Pitfall avoided: the ECCC page also lists "≤ −10 °C" under *Days with Maximum Temperature* (4.0 days/yr at Pearson). That is not the cold-day count; the JSON uses the *Days with Minimum Temperature* "< −10 °C" row.

**Region (halton.ca)**: About Halton Region page confirms Oakville is one of the four local municipalities (with Burlington, Halton Hills, Milton).

**Coordinates**: the task-supplied 43.45011, −79.68292 is kept as the module coordinate. Wikipedia's infobox coordinate for Oakville is 43.45639, −79.71389; the two differ by roughly 2.5 km.

## What was NOT verified (and why)

- **OBC clause text (Division B 9.12.2.2).** `code.clause` is `null`. ontario.ca/laws renders O. Reg. 332/12 (2012 Code) and O. Reg. 163/24 (2024 Code) as a JavaScript shell; the bundle's `laws/api/v2` endpoints found (`/en/act-reg/...`, `/currency-date`, autocomplete) return listings or 500s, not document text. The 2024 Building Code Compendium is distributed via Publications Ontario (search for a free digital copy behind their catalogue), not as open web text. The 1.2 m value is therefore sourced from the Oakville and Milton municipal drawings (4'-0"), not from the Code itself.
- **"Halton Till" as a name.** The OGS layer attributes describe the inland unit only as "Clay to silt-textured till (derived from glaciolacustrine deposits or shale)". No retrieved source names it Halton Till for Oakville, so the JSON flags the name as unverified.
- **Depth to bedrock / drift thickness.** Not queried; no OGS drift-thickness service was located. Only the surficial "bedrock at/near surface" polygons and the Bronte Creek outcrop are sourced.
- **Frost-free period and cold-day counts at an Oakville station.** Not published for Oakville Southeast WPCP; Pearson substituted with a note.
- **Fixed permit review timeline in days.** The Town publishes none; only the LMCBO reference.
- **Conservation Halton / Halton Region geology reports.** conservationhalton.ca and halton.ca were reachable but returned no geology text at the URLs tried (Halton search and document-library pages 404'd; Conservation Halton watershed page returned a connection reset on the second attempt). protectingwater.ca (source-protection assessment report) was blocked (connection reset). geologyontario.mines.gov.on.ca is a JavaScript app and returned the same HTML shell for every path, including publication PDFs; the ArcGIS services above were the workaround.
- **Other blocked or dead hosts**: mississauga.ca (reported blocked by the task); guelph.ca returned 403; geoscan.nrcan.gc.ca did not connect; toronto.ca and brampton.ca deck pages 404'd at the URLs tried; hamilton.ca deck PDFs were retrieved but the drawing PDF had no extractable footing-depth text.

## PDF template claims — do they hold for Oakville?

| Template claim | Holds? | Basis |
|---|---|---|
| "Ontario's 4-foot frost line" | **Yes, as a municipal requirement** | Oakville's deck sample drawings: "MIN. 4'-0" BELOW GRADE ON UNDISTURBED SOIL"; Milton's drawings say the same. Cite the drawings, not the OBC clause number, until 9.12.2.2 text is retrieved. |
| "Queenston shale" | **Only for west and central Oakville** | OGS MRD 219 returns Queenston at Bronte, Kerr Village, Glen Abbey, College Park, Town Hall, Palermo, Uptown Core and north Oakville, but **Georgian Bay Formation** (grey shale/limestone) at Old Oakville lakeshore, Eastlake, Clearview and Joshua Creek. A page that says "Queenston shale under Oakville" is wrong for the east half; say "Queenston (west/central) and Georgian Bay (east) shale". |
| "[City] Building Department" | **Use "Building Services"** | The Town's fee schedule is headed "Department: Building Services", the drawing title blocks say "BUILDING SERVICES", and the e-permits page says "Building Services permit applications". The permits page does also say "Building Department staff", so the phrase is not wrong, but "Town of Oakville Building Services" is the department's own name. |
| "36-inch gates" | **Not a municipal requirement; do not present it as one** | No Oakville page or by-law text retrieved mentions a 36-inch gate. Oakville's Fences & Gates page refers to the Pool Enclosure By-law and Fences and Privacy Screens By-law (heights, self-closing/locking gates) without a width figure. If the site's "36-inch gate" line is about equipment access for a pile rig, it must be sourced to the contractor's own machine specifications, not to the Town. |

## Files written
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/oakville.json`
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/oakville.notes.md`
