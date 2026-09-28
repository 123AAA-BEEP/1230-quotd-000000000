# Niagara-on-the-Lake research notes (retrieved 2026-09-25)

Companion to `niagara-on-the-lake.json`. Everything below was fetched live through the proxy with curl; nothing is from memory. Tool calls used: 13 (several batched multiple URLs).

## Verified

**Census (Statistics Canada 2021 Census Profile, CSD Niagara-on-the-Lake, DGUID 2021A00053526047, found via the profile search page).** Population 19,088 (2016: 17,511, +9.0%); occupied private dwellings 7,857; land area 131.35 km2. Structural type total 7,860 with 6,225 single-detached (79.2%, matches StatCan's printed percentage). Period of construction total 7,855: pre-1960 1,585 (20.2%), 1961-1980 1,410 (18.0%), 1981-1990 745 + 1991-2000 800 = 1,545 (19.7%), 2001-2005 835 + 2006-2010 640 + 2011-2015 1,040 + 2016-2021 800 = 3,315 (42.2%). Two-fifths of the stock is post-2000 and four-fifths is single-detached, the highest single-detached share of any city file so far.

**Geology (OGS ArcGIS feature services, MRD 128-REV layer 3 and MRD 219 layer 4).** Thirteen point queries. Results:

| Point | Lat, Lon | Coordinate source | Surficial | Bedrock |
|---|---|---|---|---|
| Reference | 43.25, -79.07 | task | 8a fine glaciolacustrine silt/clay | Queenston |
| Old Town (Wikipedia article coordinate) | 43.256, -79.071 | Wikipedia geo tag 43.25528, -79.07167, rounded | 8a | no feature returned |
| Old Town, Queen Street | 43.2554243, -79.0716896 | OSM Nominatim ("Old Town Goodies", Queen Street) | 8a | no feature returned |
| Virgil (guess) | 43.217, -79.128 | task-chosen before Nominatim | 5d clay-silt till | Queenston |
| Virgil (village node) | 43.2214498, -79.1229367 | OSM Nominatim village place | 5d | Queenston |
| Central upland | 43.20, -79.09 | task-chosen | 5d | Queenston |
| St. Davids (guess) | 43.163, -79.101 | task-chosen | 8a | Queenston |
| St. Davids (village node) | 43.1583943, -79.1022787 | OSM Nominatim village place | 8a | Queenston |
| Queenston (guess) | 43.163, -79.053 | task-chosen | 8a | Queenston |
| Queenston (village node) | 43.1642061, -79.0546024 | OSM Nominatim; Wikipedia geo tag 43.16417, -79.05444 agrees | 8a | Queenston |
| Glendale, Niagara College campus | 43.1525632, -79.1649996 | OSM Nominatim college amenity | 8a | Queenston |
| Escarpment brow SE of Glendale | 43.132, -79.155 | task-chosen | 8a | Lockport (Silurian dolostone) |
| Lakeshore band N of Old Town | 43.24, -79.08 | task-chosen | 9 coarse glaciolacustrine sand/gravel | Queenston |

Also retrieved: the arcgis.com item record for MRD 128-REV (citation string) and the GeoHub dataset record for MRD 219 (title). The two Old Town points returned no MRD 219 polygon; they sit at the river mouth and appear to fall outside the bedrock coverage edge. The reference coordinate 500 m south does return Queenston.

**Permits (Town of Niagara-on-the-Lake, Building Services).** Retrieved: the Building Services page at `notl.com/building-services` (permit thresholds, FAQ, Cloudpermit, drawing rules, plans-examination sequence, contacts); the 2026 Building User Fees & Service Charges PDF (5 pp.; deck lines, minimum fee, re-inspection and additional-inspection fees, doubled fee for work started without a permit); the Building Services Brochure 2026 PDF (2 pp.; contact agencies, Town Hall address, fee table dated January 1, 2024); the Heritage Planning page (Part IV and Part V rules, Queen-Picton HCD approved 1986). Deck threshold: "decks greater than 24 inches above grade" in the body text and "uncovered decks that are 2 feet or greater above finished grade" in the FAQ; both recorded. Fees: uncovered deck under 300 sq ft $230, over 300 sq ft $263, covered deck/porch $0.61/sq ft, minimum $230. The brochure's $150/$172 figures are the 2024 schedule and are superseded.

**Climate (ECCC).** St. Catharines A, climate ID 6137287, 1981-2010 page retrieved (Jan mean -3.8, Jan min -7.4, 26.7 days < -10 C from the minimum-temperature table, 46.0 days max <= 0, 127.2 days min <= 0, frost-free 179 days Apr 24 to Oct 21, snowfall 137.1 cm; code D, 20 years 1981-2000). Station at 43.20 N, 79.17 W, about 10 km south-west of the reference coordinate (5.6 km of latitude, 8.1 km of longitude). Cross-checks: Vineland Station RCS 1991-2020 (43.18 N, 79.40 W, about 28 km west; Jan mean -3.3, 21.1 days < -10, 42.6 max <= 0, 116.5 min <= 0) and Port Colborne 1981-2010 (42.88 N, 79.25 W, about 44 km SSW; Jan mean -3.7, 23.2 days < -10, 182 frost-free days).

## Not verified, and why

- **Footing depth / 1.2 m**: no Niagara-on-the-Lake document online prints a footing depth. The Town posts no deck guide or sample drawings; only a Sample Site Plan PDF. `obc_min_foundation_depth_m` is null.
- **Helical pile, CCMC or BMEC wording**: none in any Town document retrieved. The closest is the FAQ's "engineered drawings" item in the list of what an application may need.
- **Inspection list**: not published. The page says inspection stages are outlined when the permit is issued. The JSON `inspections[]` therefore carries that statement plus the two inspection-related fee lines rather than a stage list.
- **Permit timeline**: no day-count; only the review sequence (zoning, plans examiner, Building Inspector, Chief Building Official).
- **1991-2020 normals for St. Catharines A**: the 1991-2020 page for 6137287 returns the template with no data. The ECCC name-search form returned the blank search page for "st. catharines", "vineland", "port weller" and "niagara" on both periods; appending `&climate_id=<id>&dispBack=1` worked. Port Weller (6136699) has a 1981-2010 page with 2004-2006 extremes only, no temperature normals. Vineland's 1991-2020 page prints frost probability dates but no "Average Length of Frost-Free Period" line.
- **Depth to bedrock**: no drift-thickness dataset queried. No point returned OGS unit 3 (bedrock at surface).
- **Lake Iroquois plain, Niagara River delta sands, buried St. Davids gorge**: the OGS attributes say "fine-textured glaciolacustrine deposits" and "coarse-textured glaciolacustrine deposits"; the names in the task hints are not carried in the layer. Wikipedia "Lake_Iroquois" is a disambiguation page (Glacial Lake Iroquois not fetched). No St. Davids gorge source was fetched.
- **Sub-area boundaries**: Wikipedia has no separate articles for Virgil or St. Davids (both redirect to the Town article; "St._Davids,_Ontario" redirected to East Hawkesbury and was discarded). Coordinates are OSM Nominatim village nodes. Glendale has no Wikipedia article; the Niagara College campus node was used because the Town article places Glendale at the college.
- **Niagara Region upper-tier statement**: niagararegion.ca was not fetched (blocked for a sibling city earlier today). The two-tier framing rests on the Town's brochure listing "Niagara Region Infrastructure Planning and Development Engineering" as a separate contact agency and on Wikipedia's Queenston infobox (Regional municipality: Niagara; Town: Niagara-on-the-Lake).
- **Cloudpermit portal**: the login page itself was not fetched; the URL is the one the Town links.

## Blocked or degraded hosts

- `notl.com/en/business-and-development/*.aspx`: 404 (legacy path guesses); the live site uses `/building-services`, `/heritage-planning`.
- `en.wikipedia.org`: no rate limiting this session; article pages loaded. "Glendale,_St._Catharines", "St._Davids,_Niagara-on-the-Lake" and "Virgil,_Niagara-on-the-Lake" do not exist (404).
- `climate.weather.gc.ca` name search: returns the empty search form for every station name tried; climate_id direct links work.

## Generic template claims, checked against this city

- **"4-foot frost line"**: not supported by any Niagara-on-the-Lake document. Do not print it for this city.
- **"Queenston shale"**: holds for the whole lake plain and is especially apt here: the formation is named for Queenston (Wikipedia: named for Queenston, Ontario, by J. F. Caley, 1940) and every point below the escarpment returned Queenston Formation. It does not hold on the escarpment brow south-east of Glendale, where OGS returns Lockport Formation dolostone.
- **"[City] Building Department"**: partly holds. The department page is titled "Building Services" and that is the name to use; the same page also says "the Town's Building Department" and "Building Department" in the contact block, and the email is building.division@notl.com.
- **"36-inch gate"**: nothing retrieved speaks to access width. Unverified for this city.
- **Deck permit threshold**: 24 inches / 2 ft above grade, no area threshold stated for decks (108 sq ft applies to "any other structure"). Differs from Oakville's 10 m2 plus 61 cm rule.
- **Heritage**: unique to this city among the files so far. Exterior work on Old Town properties in the Queen-Picton Heritage Conservation District (Part V, 1986) or on Part IV designated properties needs Council consent and a heritage permit as well as the building permit.
