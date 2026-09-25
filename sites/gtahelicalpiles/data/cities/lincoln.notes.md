# Lincoln (Niagara Region) - research notes

Retrieved 2026-09-25. Companion to `lincoln.json`. Reference coordinate 43.16, -79.48 (Beamsville area).

## Verified

- **Census (StatCan 2021 Census Profile, CSD Lincoln, Town, DGUID 2021A00053526057):** population 25,719; occupied private dwellings 9,555; single-detached 6,670 (69.8%); period of construction counts 2,040 / 1,900 / 1,250 / 1,490 / 605 / 640 / 705 / 915 for 1960-or-before through 2016-2021. Grouped percentages 21.4 / 19.9 / 28.7 / 30.0. Note the search page also lists a New Brunswick "Lincoln" (2021A00051303008) and West Lincoln (2021A00053526021); neither was used.
- **Surficial geology (OGS MRD 128-REV, layer 3) and bedrock (OGS MRD 219, layer 4)** by point query; results and coordinates below. Item citation and GeoHub record both retrieved.
- **Climate:** ECCC 1991-2020 normals for the Vineland composite station (Vineland Rittenhouse 6139143 threaded to Vineland Station RCS 6139148; 79-95 m elevation; 5-7 km ENE of the reference coordinate). January daily average -3.3 C; 21.1 days/yr below -10 C (minimum-temperature table, code C); 42.6 days/yr with maximum <= 0 C; 116.5 days/yr with minimum <= 0 C. The 1991-2020 page gives frost-free data only as a probability table: 50% values are last spring frost Apr 25, first fall frost Oct 20, frost-free period 179 days. St. Catharines A 1981-2010 (6137287, 26 km east) publishes an average frost-free period of 179 days (Apr 24 - Oct 21), January -3.8 C, 26.7 days below -10 C, 46.0 days max <= 0 C; used as cross-check. The 1991-2020 St. Catharines A and Vineland Station (6139145) pages returned no temperature tables; the 1981-2010 Vineland Station page has precipitation only (1924-1988 record).
- **Sub-area identities:** Wikipedia lists the town's communities as Beamsville, Campden, Jordan, Jordan Station, Rockway, Tintern, Vineland and Vineland Station, and places the town between Lake Ontario and the Niagara Escarpment. Coordinates for Beamsville, Vineland, Jordan and the Lincoln article itself came from the Wikipedia API; Campden, Jordan Station and Vineland Station have no Wikipedia article, so their coordinates came from OpenStreetMap Nominatim.

## Not verified and why

- **Permits: nothing.** lincoln.ca is unreachable from this environment. curl (with the proxy CA bundle) returned `SSL certificate problem: unable to get local issuer certificate` for https://www.lincoln.ca/, /building-permits, /buildingpermit, /build-invest/building-and-renovating and a fee-schedule PDF path (five URLs, two rounds); WebFetch returned HTTP 503 for /buildingpermit, /building-permits and the home page. All permit fields are null. A search-engine snippet says the page names "Town of Lincoln Building Division, 4800 South Service Road, Beamsville, ON L3J 1L3", phone 905-563-2799, buildingpermitinfo@lincoln.ca, and Cloudpermit (ca.cloudpermit.com) as the application route; treat as a lead, not a source. Caution for whoever retries: the shared scratchpad held a `fees.pdf` that turned out to be the **Town of Grimsby** 2026 Schedule C - Building (minimum permit fee $232; line 10 "Decks, Porches, Accessory Buildings, Carports $1.12/ft2") written by a sibling agent, and a Toronto `bp.html`; neither is Lincoln data and neither was used.
- **Footing depth / OBC:** `obc_min_foundation_depth_m` is null because no Lincoln deck drawing or guide was retrieved. The OBC clause text is not retrievable online (ontario.ca/laws is a JS shell; the 2024 Compendium is sold through Publications Ontario).
- **Niagara Region as upper tier:** https://www.niagararegion.ca/government/local-municipalities.aspx returned a 9.9 KB page with no title and no readable content (likely a bot-challenge page); https://www.niagararegion.ca/government/ loaded but says nothing about which tier issues building permits. Not cited for that claim.
- **Depth to bedrock / drift thickness:** not queried (no dataset in the brief).
- **Halton Till name, Iroquois plain name:** not carried in OGS attributes; used only as descriptive hints, not claims.
- NRCan Geographical Names API (geogratis.gc.ca) returned empty result sets for all Lincoln community names; Nominatim used instead.

## Coordinates used (lat, lon) and OGS results

| Point | lat, lon | Source of coordinate | Surficial (MRD128-REV) | Bedrock (MRD219) |
|---|---|---|---|---|
| Reference | 43.16, -79.48 | task brief | 5d till (clay-silt) | Queenston (Ordovician red shale) |
| Beamsville (Wikipedia) | 43.16583, -79.47639 | Wikipedia API | 5d | Queenston |
| Beamsville lakeshore, N of QEW | 43.1855, -79.5181 | own placement | 3 Paleozoic bedrock | Queenston |
| Vineland (Wikipedia) | 43.15389, -79.39222 | Wikipedia API | 9 coarse glaciolacustrine sand/gravel | Queenston |
| Vineland west side | 43.1494, -79.4037 | own placement | 5d | Queenston |
| Vineland Station | 43.19152, -79.39516 | OSM Nominatim | 5d | Queenston |
| Jordan (Wikipedia) | 43.13333, -79.35 | Wikipedia API | 5d | Queenston |
| Jordan village | 43.1483, -79.3703 | own placement | 5d | Queenston |
| Jordan Station | 43.16365, -79.36041 | OSM Nominatim | 9 | Queenston |
| Jordan Station (second point) | 43.1710, -79.3663 | own placement | 9 | Queenston |
| Campden | 43.13521, -79.43332 | OSM Nominatim | 5d | Lockport (Goat Island, Gasport, Vinemount) |
| South of Campden, plateau | 43.1224, -79.4419 | own placement | 8a fine glaciolacustrine silt/clay | Lockport (Eramosa Mb in ORIG_LITHOLOGY) |
| Plateau S of Vineland (Rockway direction) | 43.1090, -79.3925 | own placement | 8a | Lockport |
| Lincoln article coordinate (escarpment brow) | 43.1528, -79.4183 | Wikipedia API | 3 Paleozoic bedrock | Lockport |

"Own placement" points were chosen by eye from the sub-area hints and are not tied to a named source; they are reported only as query locations.

Distances (haversine, from reference coordinate): Vineland Rittenhouse 5.2 km, Vineland Station RCS 7.0 km, St. Catharines A 25.8 km.

## Generic template claims checked

- **"4-foot frost line":** NOT confirmed for Lincoln. No Lincoln document retrieved. Do not print it on the Lincoln page until a Town deck drawing is read.
- **"Queenston shale":** HOLDS for the built-up area below the escarpment (Beamsville, Vineland, Vineland Station, Jordan, Jordan Station: every OGS bedrock query returns Queenston Formation). Does NOT hold on or above the escarpment (Campden and the plateau: Lockport Formation dolostone). Say "Queenston shale below the escarpment, Lockport dolostone above it".
- **"[City] Building Department":** NOT confirmed. Search snippet suggests the Town uses "Building Division"; unverified. Do not print any department name for Lincoln yet.
- **"36-inch gate":** not checked; nothing retrieved mentions access widths. Do not print.

## Blocked hosts

- www.lincoln.ca / lincoln.ca - curl TLS "unable to get local issuer certificate" (5 URLs, two rounds); WebFetch HTTP 503 (3 URLs).
- www.niagararegion.ca/government/local-municipalities.aspx - returned untitled 9.9 KB page (likely bot challenge); /government/ loaded but not useful.
- geogratis.gc.ca geoname API - HTTP OK but empty item lists for every query.
