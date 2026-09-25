# St. Catharines research notes (retrieved 2026-09-25)

Companion to `st-catharines.json`. Everything below was fetched live through the proxy with curl; nothing is from memory. Tool calls used: 15.

## Verified

**Census (Statistics Canada 2021 Census Profile, CSD St. Catharines, DGUID 2021A00053526053).** Population 136,803; occupied private dwellings 58,903; structural-type total 58,900 with 32,725 single-detached (55.6%, matches StatCan's own percentage); period of construction total 58,905: pre-1960 19,160 (32.5%), 1961-1980 22,675 (38.5%), 1981-2000 11,020 (18.7%), 2001-2021 6,040 (10.3%). The housing stock is old: 71% of dwellings predate 1981, against 27% in Oakville.

**Geology (OGS ArcGIS feature services, MRD 128-REV layer 3 and MRD 219 layer 4).** Twelve point queries, all returning a polygon. Results:

| Point | Lat, Lon | Coordinate source | Surficial | Bedrock |
|---|---|---|---|---|
| Reference | 43.16, -79.24 | task | 9b coarse glaciolacustrine, littoral | Queenston |
| Downtown | 43.1588, -79.2444 | OSM Nominatim "Downtown St. Catharines" | 9b | Queenston |
| Port Dalhousie | 43.2019, -79.2681 | Wikipedia article coordinate | 9 coarse glaciolacustrine | Queenston |
| Grantham | 43.2010, -79.2221 | OSM Nominatim neighbourhood node | 9 | Queenston |
| Merritton | 43.1404, -79.2140 | OSM Nominatim quarter node | 5d clay-silt till | Queenston |
| Glenridge (Cliff Rd) | 43.1450, -79.2387 | OSM Nominatim "Glenridge" junction | 5d | Queenston |
| Glenridge Quarry | 43.1228, -79.2369 | OSM Nominatim nature reserve | 8a fine glaciolacustrine silt/clay | Lockport (Silurian dolostone) |
| Martindale | 43.1758, -79.2751 | OSM Nominatim Martindale Road | 5d | Queenston |
| Vansickle | 43.1598, -79.2709 | OSM Nominatim Vansickle Road (residential segment) | 5d | Queenston |
| Brock University | 43.119, -79.249 | Wikipedia article coordinate | 8a | Lockport |
| Twelve Mile Creek | 43.1786, -79.2725 | Wikipedia article coordinate | 19 modern alluvium | Queenston |
| Welland Canal (Lock 3 area) | 43.1556, -79.1938 | Wikipedia article coordinate | 21 man-made deposits | Queenston |

Also retrieved: the arcgis.com item record for MRD 128-REV (citation string) and the GeoHub dataset record for MRD 219 (title). Wikipedia's Grantham Township coordinate (43.1839, -79.2167) was noted but not queried; the OSM Grantham node was used instead because the township coordinate is a former-township centroid.

**Permits (City of St. Catharines, Planning and Building Services).** Retrieved: Building Permits landing page; Applying for a Building Permit page (application routes, portal, guides, fees pointer, timeline statement); Do I need a Building Permit page (600 mm threshold); Building Inspections page (inspection list, 48-hour notice, ext. 1667); A Guide to Residential Decks and Porches (PDF, 2 pp.); A Guide to Residential Building Permits (PDF, 2 pp.); A Guide to Preparing Residential Permit Drawings (PDF, 2 pp.); Rates and Fees page; 2024-2026 Schedule of Rates and Fees By-law 2023-137 (PDF, 97 pp.; deck line on printed p. 60, minimum permit fee on p. 59, footings damage deposit on p. 28); July 22, 2024 amendment (PDF, 6 pp., no deck content); the online portal landing page (build.stcatharines.ca, title "Welcome to City of St. Catharines Online Applications").

**Climate (ECCC).** St. Catharines A, climate ID 6137287, 1981-2010 normals page retrieved (Jan mean -3.8, Jan min -7.4, 26.7 days < -10 C, 46.0 days max <= 0, 127.2 days min <= 0, frost-free 179 days Apr 24 to Oct 21, snowfall 137.1 cm; all code D, 20 years 1981-2000). Station is at 43.20 N, 79.17 W, roughly 7 km north-east of the reference coordinate. Cross-checks retrieved: Vineland Station RCS 1991-2020 (Jan mean -3.3, 21.1 days < -10, 42.6 days max <= 0, 116.5 days min <= 0; about 13 km west) and Hamilton A 1991-2020 (Jan mean -5.3, 35.7 days < -10, 164 frost-free days).

## Not verified, and why

- **1991-2020 normals for St. Catharines A**: the 1991-2020 page for climate ID 6137287 returns the template with no station data; ECCC publishes only the 1981-2010 set for this station. The 1991-2020 figures in the JSON are therefore from Vineland Station and Hamilton, labelled as such.
- **ECCC name search**: the `results_*_e.html?searchType=stnName&txtStationName=...` form returned the blank search page for "catharines", "st. catharines", "vineland" and "port weller" on both periods; appending `&climate_id=<id>&dispBack=1` worked, so IDs were taken from the task hints and from the Vineland composite listing. Port Weller (6136699) has only 2003-2006 precipitation, no temperature normals.
- **Footing depth / 1.2 m**: no St. Catharines document online prints a footing depth. The deck guide says the "Typical Wood Deck Cross Section" sample drawing is available at the PBS counter only. `obc_min_foundation_depth_m` is null.
- **Helical pile wording**: none in any St. Catharines document retrieved; the deck guide's "New Materials/Systems" clause (manufacturer's drawings, specifications or engineering details may be required) is the closest. No CCMC or BMEC mention.
- **Deck fee as a flat number**: the City charges decks per square foot ($1.64/sq ft in 2026, minimum permit fee $185.80), not a flat deck fee like Oakville. A 200 sq ft deck would be $328 before surcharges; that arithmetic is not in the JSON.
- **Permit timeline**: only "Mandated timelines within the Building Code will start after we've reviewed your permit application"; no day-count published.
- **Depth to bedrock**: no drift-thickness dataset queried. No point returned OGS unit 3 (bedrock at surface).
- **Halton Till and Lake Iroquois names**: the OGS attributes say "clay to silt-textured till (derived from glaciolacustrine deposits or shale)" and "littoral deposits"; the formation names in the task hints are not carried in the layer and were not verified. Wikipedia's Lake Iroquois article was rate-limited (see below).
- **Western Hill**: OSM Nominatim returns nothing for the name; no separate OGS query was made. The JSON note brackets it with the Twelve Mile Creek and Vansickle results.
- **Niagara Region upper-tier statement**: niagararegion.ca pages (`/government/default.aspx`, `/about/default.aspx`, `/government/local-area-municipalities.aspx`) return HTTP 200 with no readable text through the proxy (JavaScript shell or bot gate). The two-tier statement in the JSON rests on the City's own pages saying the City issues permits, plus the drawings guide listing "Region of Niagara public works septic approval" as a separate item. No Region page is cited.

## Blocked or degraded hosts

- `en.wikipedia.org` API and REST endpoints: "You are making too many requests to the API" after the first batch; the plain article page for St. Catharines still loaded. Lake Iroquois, Merritton (second try), Western Hill and Twelve Mile Creek (second try) were rate-limited.
- `niagararegion.ca`: HTTP 200, empty body after tag stripping, twice.
- `stcatharines.ca/en/...aspx` legacy URLs: 404; the site now uses `/building-and-renovating/...` and `/applications-licences-and-permits/...` paths.

## Generic template claims, checked against this city

- **"4-foot frost line"**: not supported by any St. Catharines document. Do not print it for this city unless the counter sample drawing is obtained and says so.
- **"Queenston shale"**: holds for the whole lake-plain city; every query point below the escarpment returned Queenston Formation. It does not hold at the escarpment brow (Brock University, Glenridge Quarry), where OGS returns Lockport Formation dolostone.
- **"[City] Building Department"**: does not hold. The department is "Planning and Building Services" (PBS), with a "Building Section" and "Building Services Division" referenced inside it. Use "Planning and Building Services".
- **"36-inch gate"**: nothing retrieved speaks to access width; no City document mentions it. Unverified for this city.
- **Deck permit threshold**: 600 mm / 24 in above grade, with covered decks always requiring a permit and no area threshold, which differs from Oakville's 10 m2 plus 61 cm rule.
