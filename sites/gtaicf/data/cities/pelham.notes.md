# Pelham local-data module — research notes

Retrieved 2026-09-25. Companion to `pelham.json`. Every figure in the JSON traces to a URL in its `sources` array; anything not retrieved is `null` with the reason below.

## What was verified (with source host)

**Census (www12.statcan.gc.ca, 2021 Census Profile, Pelham Town CSD 3526028, DGUID 2021A00053526028)**
- Population 2021: 18,192. Private dwellings occupied by usual residents: 6,959.
- Single-detached: 5,760 of 6,960 occupied dwellings (structural type, 100% data) = 82.8 % (the profile prints 82.8 itself).
- Period of construction (25 % sample, total 6,960): pre-1960 1,670 (24.0 %); 1961–1980 1,625 (23.3 %); 1981–2000 1,050 + 985 = 2,035 (29.2 %); 2001–2021 395 + 350 + 250 + 630 = 1,625 (23.3 %). The four buckets sum to 6,955 (rounding in the source counts).

**Geology (OGS via ArcGIS feature services; en.wikipedia.org)**
- Queried MRD 128-REV (surficial, layer 3) and MRD 219 (bedrock, layer 4) at these points:
  - reference 43.04, −79.28 → unit 9 / Lockport
  - Fonthill (hand) 43.033, −79.283 → 9 / Lockport
  - Fonthill (Wikipedia) 43.04389, −79.2875 → 9 / Lockport
  - Fonthill north (hand) 43.06, −79.29 → 9 / Lockport
  - Ridgeville (Wikipedia) 43.0375, −79.31111 → 9 / Guelph
  - Ridgeville south (hand) 43.02, −79.305 → 8a / Guelph
  - Fenwick (hand) 43.02, −79.36 → 9 / Guelph
  - Fenwick (Wikipedia) 43.02472, −79.36111 → 9 / Guelph
  - North Pelham (hand) 43.08, −79.32 → 8a / Lockport
  - Short Hills edge (hand) 43.085, −79.275 → 8a / Lockport
  - east of Fonthill (hand) 43.04, −79.25 → 8a / Guelph
  - south Pelham (hand) 42.99, −79.30 → 8a / Salina
  - Hand-placed points are my approximations, not surveyed centroids. Attribute strings are quoted verbatim in the JSON.
- Unit 9 = "Coarse-textured glaciolacustrine deposits; sand, gravel, minor silt and clay" — one polygon (OBJECTID 97752) covering Fonthill, Ridgeville village and Fenwick, i.e. the Fonthill Kame. Unit 8a = "Fine-textured glaciolacustrine deposits; silt and clay, minor sand and gravel; massive to well laminated" on the surrounding lower ground. No unit 3 (bedrock at surface) was returned at any point.
- Bedrock: Lockport Formation (Goat Island, Gasport, Vinemount members; dolostone, limestone, argillaceous dolostone/shale) under Fonthill and the north; Guelph Formation (sucrosic dolostone) under Fenwick, Ridgeville and east of Fonthill; Salina Formation (argillaceous dolostone, shale, gypsum) in the south. The task hint "Lockport dolostone at depth" holds for Fonthill; it is Guelph under Fenwick/Ridgeville.
- Wikipedia (Fonthill Kame, coordinate 43.0523, −79.3095): a kame of sand and gravel, about 75 m above the surrounding land, 259 m above sea level, the highest natural feature in Niagara, 6 km × 3 km; an aggregate quarry operates on top. Wikipedia (Fonthill): Effingham Creek rises in the glacial silts and sands of the Short Hills area north-west of Fonthill. Wikipedia (Short Hills Provincial Park, 43.112012, −79.265606): steep small hills on the southern edge of the Niagara Escarpment. Wikipedia (Pelham) infobox coordinate 43.033, −79.333; the task coordinate 43.04, −79.28 (Fonthill) is kept as the module coordinate.

**Permits (pelham.ca; PDFs served from media-001-ca.cdn.govstack.com)**
- Department name as the Town prints it: "Building Department" (2026 Building Permit Guide, three occurrences); the website menu says "Construction & Building Services"; contact is the Building Intake/Zoning Technician, building-info@pelham.ca, 905-980-6683 / 905-892-2607 ext. 344. Town Hall: 20 Pelham Town Square, Fonthill.
- Deck trigger: "WOOD DECKS: greater than 24 inches (600 mm) above ground level" (Guide). No area threshold printed for decks. Additions to an existing building need a permit even under 108 ft² (10 m²).
- Fees (Guide, effective Jan 1 – Dec 31, 2026): Accessory Buildings/Structures incl. Deck/Porch/Patio $299.00 plus $0.99/ft² over 300 ft²; minimum permit fee $299.00; non-refundable $299.00 Permit Application Fee collected after zoning review; re-inspection $90.00; CPI adjustment each Jan 1. A building fee and by-law study started in 2026 (public meeting notice dated June 17, 2026), so fees may change.
- Inspections (Guide, citing OBC Div. C 1.3.5.1(2) as the Town's own reference): footings before pouring; footings/foundations before backfill; framing and HVAC rough-in; insulation/air-vapour barriers; plumbing/drain tests; occupancy components; final. Two regular business days' notice.
- Timeline: no day-count published; the Guide describes prescreen → zoning review → application fee → Plans Examiner → deficiency report or recommendation → remaining fees → issuance.
- Portal: City Reporter (`app.cityreporter.ca/cityreporter/portalLogin?portalid=2896230ebb7529b`), linked from the Building Permits page. Septic properties need a Niagara Region septic permit first.
- Niagara Region "Local Municipalities" page lists Pelham among the 12 local municipalities (upper/lower tier confirmed).

**Climate (climate.weather.gc.ca)**
- Best station: the ECCC 1991–2020 composite named **WELLAND-PELHAM**, threaded from Welland 6139445 (42°59'33"N 79°15'40"W, 175.3 m, 1991–2006) and Welland-Pelham 6139449 (42°58'00"N 79°20'00"W, 178 m). Both sites are 5–9 km S/SW of the Fonthill reference coordinate (distance derived from the coordinate pairs). Values: January mean −4.1 °C (code A); January daily minimum −8.0 °C; 29.9 days/yr with minimum < −10 °C (code A); 3.4 days < −20 °C; 134.1 days/yr minimum ≤ 0 °C; 46.1 days/yr maximum ≤ 0 °C (code C); frost-free 160 days, May 6 – Oct 14 (code D, 15 years 1991–2008); snowfall 141.0 cm.
- Second bracket: St. Catharines A 6137287 (43°12'N 79°10'W, 97.8 m, ~22 km NE), 1981–2010 normals computed from 1981–2000 (code D): January mean −3.8 °C, 26.7 days < −10 °C, 46.0 days max ≤ 0 °C, frost-free 179 days (Apr 24 – Oct 21), snowfall 137.1 cm. The 1991–2020 page for 6137287 returned no data table.
- Vineland 6139148 1991–2020 was also read (Jan −3.3 °C, 21.1 days < −10 °C) but not used: it is lakeshore, below the escarpment, and publishes no frost-free period.
- Pitfall avoided: the "< −10 °C" value was taken from the *Days with Minimum Temperature* table (29.9), not the *Days with Maximum Temperature* "≤ −10 °C" row (3.2). Verified positionally in the page text.

## What was NOT verified (and why)

- **Footing depth / `obc_min_foundation_depth_m`**: `null`. Pelham publishes no deck sample drawings or deck guide (site search for "deck" returned nothing; the Building Permits page links only application forms and the Guide), and the Guide contains no "4 ft", "1200 mm" or "frost" text. Oakville's and Milton's 4'-0" drawings are not Pelham documents.
- **Helical piles / CCMC / BMEC / engineer requirements**: nothing in any Pelham document retrieved. Do not claim a Pelham-specific helical-pile rule.
- **OBC clause text**: not retrievable (ontario.ca/laws is a JS shell; the 2024 Compendium is via Publications Ontario, confirmed on ontario.ca/page/ontarios-building-code).
- **Depth to bedrock / drift thickness**: not queried; only Wikipedia's ~75 m kame height gives a sense of overburden under Fonthill.
- **"Haldimand clay"**: no retrieved source uses the name; the JSON describes the southern unit only by its OGS attributes (unit 8a, fine-textured glaciolacustrine silt and clay).
- **Fee by-law text**: the fee study page links a June 17, 2026 public-meeting notice PDF; the by-law itself was not opened. Fees are quoted from the Guide only.
- **Blocked or dead URLs**: pelham.ca `/en/build-and-invest/*` paths (404, old CMS structure); `/business-building-development/construction-building-services/` (404). No host was blocked by the proxy in this run.

## Template claims — do they hold for Pelham?

| Template claim | Holds? | Basis |
|---|---|---|
| "Ontario's 4-foot frost line" | **Not sourced for Pelham** | No Pelham document prints a footing depth. Leave the figure out of the Pelham page or attribute it to a neighbouring municipality's drawing explicitly. |
| "Queenston shale" | **No** | OGS MRD 219 returns Silurian dolostone everywhere in Pelham: Lockport (Fonthill, north), Guelph (Fenwick, Ridgeville, east) and Salina (south). Queenston shale is a Lake Ontario-shore unit below the escarpment, not under Pelham. |
| "[City] Building Department" | **Yes** | The Town's own 2026 Building Permit Guide says "Building Department"; website section is "Construction & Building Services". Use "Town of Pelham Building Department". |
| "36-inch gate" | **Not a municipal requirement** | No Pelham page or PDF retrieved mentions a gate width. If used, it must be sourced to the contractor's own machine specifications. |

## Files written
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/pelham.json`
- `/home/user/1230-quotd-000000000/sites/gtahelicalpiles/data/cities/pelham.notes.md`
