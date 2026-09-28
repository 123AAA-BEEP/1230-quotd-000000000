# Grimsby (Niagara Region) - research notes

Retrieved 2026-09-25. Companion to `grimsby.json`. Every figure in the JSON traces to a URL listed there; this file records what was and was not verified.

## Verified

- **Census (StatCan 2021, CSD 3526065, DGUID 2021A00053526065):** population 28,883; occupied private dwellings 11,395; single-detached 7,340 (64.4%). Period of construction (25% sample): 1960 or before 2,320; 1961-1980 2,485; 1981-1990 1,295; 1991-2000 1,295; 2001-2005 1,005; 2006-2010 910; 2011-2015 945; 2016-2021 1,135. Percentages computed by the agent and rounded to one decimal; they sum to 100.0.
- **Geology (OGS MRD128-REV surficial layer 3, MRD219 bedrock layer 4, point queries):** results per coordinate are listed below. Lake plain = Queenston Formation everywhere; escarpment and above = Lockport Formation (subunit 18b: Vinemount, Goat Island, Gasport). Both citation records (ArcGIS item 4cb9a34c... and GeoHub dataset 4b1bbee3...) returned JSON.
- **Permits (Town of Grimsby):** deck permit triggers, helical pier note ("supporting engineering and CCMC approval will be required"), Cloudpermit portal, 10-business-day initial review for complete residential applications, 7-week average for residential alterations, Schedule C 2026 deck line ($1.12/ft2) and $232 minimum fee, 2026 revision fees ($264 / $132), inspection headings, 1.2 m minimum footing elevation on the Footing Inspection Checklist.
- **Upper/lower tier:** Niagara Region's municipalities page lists Grimsby among its 12 local municipalities; Wikipedia infobox calls the Town of Grimsby a lower-tier municipality. Permits are issued by the Town.
- **Climate (ECCC 1981-2010 via GeoMet API):** Vineland Rittenhouse (6139143) Jan mean -3.67 C, 23.44 days/yr min < -10 C, frost-free 174 days, 46.3 days/yr max <= 0 C, 121.03 days/yr min <= 0 C, snowfall 112.18 cm. Hamilton A (6153194) Jan mean -5.5 C, 37.69 days < -10 C, frost-free 167, 56.14 days max <= 0 C.

## Not verified / null, and why

- **1991-2020 normals:** every `climate.weather.gc.ca/climate_normals/results_1991_2020_e.html?...` and `results_1981_2010_e.html?...` search (grimsby, st. catharines, catharines, vineland, hamilton, welland, port weller) was answered with a redirect to `index_e.html` or a shell page with no data table, with and without a cookie jar (two attempts). The bulk CSV endpoint (`bulk_data_e.html?...stnID=4683`) returned 404. So the 1991-2020 period was not retrievable today; 1981-2010 values from the GeoMet OGC API were used instead and the period is stated in the JSON.
- **St. Catharines A (6137287):** the GeoMet climate-normals collection returns zero features for this climate ID (the station-metadata record shows HAS_NORMALS_DATA = N), so it could not be used. Vineland Rittenhouse is closer to Grimsby anyway (about 11 km ESE vs about 24 km E).
- **Grimsby Mountain station (6133055):** exists in ECCC metadata (recording 2005-08-01 to 2026-09-23, 170.6 m) but has no published normals. Wikipedia's Grimsby climate box cites a third-party site (grimsbyweather.com) for "1991-2020 normals"; not used because it is not an ECCC page.
- **Distances to stations** were computed by the agent from coordinates (Vineland Rittenhouse 43.1667, -79.4167; Hamilton A 43.1717, -79.9342) against the reference point; they are approximate (about 11 km and about 31 km).
- **Depth to bedrock:** no drift-thickness dataset was queried; only "bedrock at or near surface" (unit 3) polygons are reported.
- **Deck footing depth on a deck drawing:** the Town's Decks and Covered Porches handout prints no numeric depth. The "sample-permit-drawings-condensed.pdf" (17 pages) is image-only (pymupdf extracted 16 characters); it was not OCR'd, so whether it prints 4'-0" / 1200 mm is unknown. The 1.2 m figure in `code` comes from the Town's Footing Inspection Checklist instead, and the JSON says so.
- **OBC clause text:** not retrievable online (same situation as Oakville); `clause` is null.
- **Fee schedule "Zoning Verification (Pools, Signs, Decks, Accessory Buildings)"** line exists in Schedule C but its amount was not read; not recorded.
- **Building By-law 26-25** (linked from the apply page) was not opened; budget.
- **Sub-area boundaries:** the Town publishes no neighbourhood map that was found; sub-area names follow the task hint and Wikipedia's description of the three QEW interchanges (Casablanca Blvd west, Christie/Ontario/Maple central, Bartlett Ave east). "Grimsby Mountain" as a named area is supported only by the ECCC station name and Wikipedia's climate-box heading.

## Coordinates used for OGS point queries (lat, lon) and returns

| Label | lat, lon | Source of coordinate | Surficial (MRD128-REV) | Bedrock (MRD219) |
|---|---|---|---|---|
| Reference / town centre | 43.2, -79.55 | Task; matches Wikipedia infobox 43.200, -79.550 | 9 coarse glaciolacustrine sand and gravel | Queenston |
| Downtown, Main St | 43.1935, -79.5595 | Agent estimate from Wikipedia interchange description | 12 older alluvial deposits | Queenston |
| Grimsby Beach | 43.2085, -79.5215 | Agent estimate (lakeshore NE of centre) | no polygon returned (shoreline) | Queenston |
| Casablanca / QEW | 43.1955, -79.6215 | Agent estimate (west interchange) | 3 Paleozoic bedrock | Queenston |
| Winona border, Fifty Rd | 43.212, -79.652 | Wikipedia Winona 43.20806, -79.65111, shifted to the town line | 3 Paleozoic bedrock | Queenston |
| Grimsby Mountain, Ridge Rd | 43.17, -79.56 | Agent estimate (above escarpment) | 8a fine glaciolacustrine silt and clay | Lockport 18b |
| Forty Mile Creek mouth | 43.205, -79.55 | Agent estimate | 3 Paleozoic bedrock | Queenston |
| Escarpment face, Mountain St | 43.183, -79.565 | Agent estimate | 5d clay-to-silt till | Lockport 18b |
| East Grimsby, Bartlett Ave | 43.1985, -79.5165 | Agent estimate (east interchange) | 9 coarse glaciolacustrine sand and gravel | Queenston |

Only the reference point and the Winona coordinate come from a published source; the other seven were chosen by the agent from Wikipedia's text and should be re-checked against the Town's GIS before any map is published.

## Generic template claims checked against Grimsby

- **"4-foot frost line":** holds in metric form. The Town's Footing Inspection Checklist prints "a minimum of 1.2 m below finished grade level"; no Town deck drawing printing 4'-0" was read.
- **"Queenston shale":** holds for the whole lake plain (all seven below-escarpment points). Does not hold on Grimsby Mountain, where MRD219 returns Lockport Formation dolostone.
- **"[City] Building Department":** partly. The Town's web name is "Building Division" (pages, inspections text, contact); the deck handout is headed "BUILDING DEPARTMENT" and the residential page says "check with your local building department". The JSON records "Building Division" as the authority with the handout wording noted.
- **"36-inch gate":** not verified. No retrieved Grimsby document mentions a gate width; the pool-enclosure handout was not opened. Do not use for Grimsby.
- **Hint "Iroquois plain clays and shoreline sands":** partly. OGS maps the reference and east-end points as coarse glaciolacustrine sand and gravel (unit 9) and downtown as older alluvium (unit 12); no fine-textured clay polygon was returned below the escarpment. Fine silt and clay (8a) appears only above the escarpment.

## Blocked or empty hosts (one line each)

- climate.weather.gc.ca normals search/results pages: redirect to index or shell page without data, both periods, two attempts; bulk CSV 404.
- api.weather.gc.ca climate-normals for 6137287 (St. Catharines A): 0 features.
- en.wikipedia.org/wiki/Grimsby_Beach and /wiki/Forty_Mile_Creek_(Ontario): 404 (no articles).
- grimsby.ca "search deck permit": site has no server-side search results page; navigated via Building Division links instead (all pages returned 200).
