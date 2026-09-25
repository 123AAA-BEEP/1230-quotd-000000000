# Burlington research notes (retrieved 2026-09-25)

Companion to `burlington.json`. Every figure in the JSON traces to a URL listed there; this file records what was verified, what was not, every coordinate queried, and how the generic template claims fare for Burlington.

## Verified

- **Census (StatCan 2021 Census Profile, Burlington CY, DGUID 2021A00053524002):** population 186,948; occupied private dwellings 73,180; single-detached 36,795 (50.3%); period of construction counts 10,220 / 24,485 / 10,035 / 10,595 / 6,475 / 5,105 / 3,420 / 2,855 (pre-1960 through 2016-2021). Note Burlington's stock is older than Oakville's: 47.5% built before 1981 versus 27.0% in Oakville.
- **Surficial geology (OGS MRD 128-REV, layer 3):** two bands. Lakeshore band = unit 9 coarse glaciolacustrine sand and gravel (Aldershot x2, Downtown, Roseland, Shoreacres). Plain above it = unit 5d clay-to-silt till (reference coordinate, Tyandaga, Millcroft, Alton Village, Orchard). Above the escarpment at Kilbride = unit 4a bedrock-drift complex, primarily till cover.
- **Bedrock (OGS MRD 219, layer 4):** Queenston Formation red shale at every point below the escarpment (9 of 10 sub-area points plus the reference coordinate). Kilbride returns Amabel Formation dolostone (Silurian), the escarpment cap.
- **Permits:** City of Burlington Building Department, 905-335-7731. Permit triggers (attached, >10 m2, >600 mm, covered) from the Decks, Porches and Patios page. Decks/Porches checklist (Aug 22, 2023) lists BMEC approvals or Minister's Rulings for helical piles. Fee: deck = minimum permit fee $377 flat (Schedule A to By-law 30-2026; identical in the older Schedule A to By-law 18-2025 still linked from the deck page). Review within 10 business days per the deck page; turnaround-times sheet (Jan 1, 2025) says 10 days for houses and detached structures up to 55 m2. Applications are emailed to buildingpermits@burlington.ca; no online portal.
- **Climate:** Burlington TS (6151064, 1981-2010 normals, 19 years of temperature data, code D) January mean -4.4 C, January daily minimum -8.1 C, 99.9 cm snowfall. Station is 6.3 km south of the reference coordinate (haversine). Hamilton A (6153193, 1991-2020) supplies frost-free period (164 days, May 1 to Oct 12), days below -10 C (35.7, from the MINIMUM-temperature table), days with max <= 0 C (54.8), days with min <= 0 C (138.6); Hamilton A is 24.9 km SW.

## Not verified, and why

- **OBC minimum foundation depth:** null. Burlington publishes no deck sample drawing or deck guide; its checklist only says footings must be shown and noted. Oakville and Milton drawings print 4'-0", but the task rule allows 1.2 m only from this municipality's own document. OBC clause text still unretrievable (e-Laws JS shell; compendium via Publications Ontario). No clause number cited.
- **Deck-specific inspection list:** the City says an inspections checklist is attached to approved drawings and lists general inspection rules (48-hour notice, final inspection to close). No published footing/framing/final sequence for decks was found on burlington.ca.
- **Halton Till name and Lake Iroquois shoreline:** the OGS layers return unit codes and textures, not the names "Halton Till" or "Lake Iroquois". Both are stated in the JSON as regional-literature attributions, not verified facts.
- **Depth to bedrock:** no drift-thickness dataset queried. No unit 3 (bedrock at surface) polygon was returned at any Burlington point; the only shallow-bedrock indication is unit 4a at Kilbride.
- **Burlington TS frost-free period:** the station's frost-free element has only 3 years (1982-1987, 50% of possible observations), so it was not used.
- **Burlington TS cold-day counts:** the 1981-2010 page for this station publishes no "Days with Maximum/Minimum Temperature" tables; Hamilton A values are used and flagged as likely overstating lakeshore cold.
- **Sub-area boundaries:** Wikipedia has no articles for Roseland, Shoreacres, Orchard, Millcroft, Alton Village, Tyandaga, Downtown Burlington (redirect stubs only); Kilbride and Headon Forest redirect to the city article. Coordinates therefore come from OpenStreetMap Nominatim centroids, which are community-mapped and approximate.
- **Kilbride / Mount Nemo / Lowville** are rural hamlets; only Kilbride was queried.

## Coordinates used (lat, lon) and OGS results

| Point | Lat | Lon | Source of coordinate | Surficial | Bedrock |
|---|---|---|---|---|---|
| Reference (task) | 43.38621 | -79.83713 | task brief | 5d till | Queenston |
| Aldershot (Wikipedia article) | 43.30889 | -79.84111 | en.wikipedia.org/wiki/Aldershot,_Ontario wgCoordinates | 9 sand/gravel | Queenston |
| Aldershot (OSM suburb) | 43.3109443 | -79.8419378 | Nominatim | 9 sand/gravel | Queenston |
| Downtown Burlington | 43.3254470 | -79.7971890 | Nominatim (type commercial) | 9 sand/gravel | Queenston |
| Roseland | 43.3344971 | -79.7800239 | Nominatim (neighbourhood) | 9 sand/gravel | Queenston |
| Shoreacres | 43.3604932 | -79.7517452 | Nominatim (neighbourhood) | 9 sand/gravel | Queenston |
| Orchard ("The Orchard") | 43.4044600 | -79.7943165 | Nominatim (neighbourhood) | 5d till | Queenston |
| Millcroft | 43.3915013 | -79.8075698 | Nominatim (neighbourhood) | 5d till | Queenston |
| Alton Village ("Alton West Village") | 43.3935390 | -79.8294112 | Nominatim (residential) | 5d till | Queenston |
| Tyandaga | 43.3467439 | -79.8454493 | Nominatim (neighbourhood) | 5d till | Queenston |
| Kilbride | 43.4245024 | -79.9386937 | Nominatim (village) | 4a bedrock-drift complex | Amabel dolostone |

Other coordinates recorded but not queried: Wikipedia city article coordinate 43.37000, -79.81417; Burlington TS station 43.33 N, 79.83 W; Hamilton A 43.1736 N, 79.935 W.

## Template claims checked against Burlington

- **"4-foot frost line":** NOT verifiable from a Burlington document. Nothing on burlington.ca prints a footing depth. Do not print it on the Burlington page as a city fact; if used, it must be attributed to the neighbouring Oakville/Milton drawings or left generic.
- **"Queenston shale":** HOLDS for all of urban Burlington below the escarpment (10 of 11 points). Does NOT hold at Kilbride, where OGS returns Amabel dolostone; the page should say "dolostone cap above the escarpment" for Kilbride/Mount Nemo/Lowville.
- **"[City] Building Department":** HOLDS. The City's own deck page and checklist say "Building Department", 905-335-7731, buildingpermits@burlington.ca.
- **"36-inch gate":** NOT verified. No Burlington municipal source mentions gate or access width; this is an installer-equipment claim that must come from the owner's claims register, not from city data.

## Blocked or unusable hosts

- climate.weather.gc.ca station-name search (`results_1991_2020_e.html?searchType=stnName&txtStationName=burlington`, also `hamilton`, both periods) returned the search form with no station list; direct `climate_id=` URLs worked instead.
- No other host was blocked. Nominatim was rate-limited politely (1 s between calls) and answered every query.
