# Thorold (Niagara Region) - research notes, 2026-09-25

Companion to `thorold.json`. Reference coordinate 43.12, -79.2. About 24 tool calls used.

## Verified (with the source it came from)

- **Census (StatCan 2021 Census Profile, DGUID 2021A00053526037, Thorold City CSD):** population 23,816 (18,801 in 2016); 9,095 occupied private dwellings; single-detached 6,285 (69.1%); period of construction 1960 or before 2,905 / 1961-1980 2,105 / 1981-1990 1,190 / 1991-2000 630 / 2001-2005 350 / 2006-2010 220 / 2011-2015 315 / 2016-2021 1,385. Bucket percentages computed by the agent: 31.9 / 23.1 / 20.0 / 25.0.
- **Surficial geology (OGS MRD 128-REV layer 3):** unit 8a fine-textured glaciolacustrine silt and clay at 10 of 13 query points; unit 21 man-made deposits at 3 canal-side urban points. No unit 3 (bedrock at surface) polygon at any point.
- **Bedrock (OGS MRD 219 layer 4):** Lockport Formation (18b Goat Island/Gasport/Vinemount) at 8 points; Lockport 18c Eramosa Member at Allanburg and southern Thorold South; Clinton-Cataract Group (Rochester, Decew, Thorold, Grimsby etc.) at the Twin Flight Locks; Queenston red shale at the northern Rolling Meadows point (below the brow); Guelph Formation at Port Robinson.
- **Permits (thorold.ca, new site launched 2026):** department appears as "City of Thorold Building Division" and "Development Services - Building Division" (also "Planning & Building Services Department", "Building Services" in the FAQ). Decks listed among projects needing a permit under "any freestanding structure over 10m2 (108sq.ft.)"; detached accessory structures under 10 m2 exempt. Paper application only (2026 provincial form, effective Feb 16, 2026), two sets of residential drawings, filed at 8 Carleton St. S. or by mail; payment by cheque, or cash/debit at City Hall cashier with receipt emailed to building@thorold.ca. Engineer note: "Certification by a Professional Engineer is required for certain prefabricated structures or construction components."
- **Fees (By-law 14-2026, consolidated April 14, 2026, Schedule E):** covered deck/porch $0.46/sq ft, uncovered deck/porch $0.42/sq ft (HST exempt); minimum permit fee $194.40; Plans Examination Deposit taken at application; $500 refundable Performance/Security Deposit for miscellaneous accessory construction over $5,000 value; surcharges of 25/50/100% for work started before permit at footing/framing/completion stage.
- **Climate (ECCC 1981-2010 via GeoMet API):** Welland (6139445, ~15 km S, 175.3 m) Jan mean -4.3 C (code A), Jan mean min -8.25 C, 30.5 days/yr min < -10 C, 46.98 days max <= 0 C, 138.73 days min <= 0 C, frost-free 151 (code D), snowfall 141.59 cm. Niagara Falls NPCSH (6135657, ~12 km E) Jan mean -4.12, 24.95 days < -10, frost-free 188 (code G). Ridgeville (6137161, ~13 km SW) Jan mean -4.39, 25.42 days < -10, frost-free 183 (code E).
- **Niagara Region upper tier:** niagararegion.ca lists Thorold among the 12 local municipalities; permits are handled by the City.

## Not verified / null, and why

- **Deck footing depth (`footing_depth_requirement`, `code.obc_min_foundation_depth_m`):** null. Thorold publishes no deck guide, sample deck drawing, deck checklist or footing inspection checklist. The forms list on the Applications and Forms page contains only provincial and administrative forms. The old-site URL that Google still indexes for "Inspections" (/en/living-here/inspections.aspx) returns the new site's 404 page. Grimsby's 1.2 m checklist is another municipality and is not used.
- **Helical pile / CCMC / BMEC wording:** nothing on thorold.ca mentions helical piles, CCMC or BMEC. Only the generic engineer-certification sentence in the FAQ exists.
- **Inspection stage list:** the FAQ says only "Several inspections are required during construction". The search-engine snippet of the dead inspections page ("A footing inspection is required for the completion of the excavation...") was not retrieved from a live page and is not cited.
- **Deck height threshold:** the City publishes no height rule (nothing like 0.6 m / 24 in); only the 10 m2 area line.
- **Permit review timeline:** none published for building permits; the only day-count on the site is the pool-permit "up to two (2) weeks".
- **Climate 1991-2020 normals:** both `results_1991_2020_e.html` and `results_1981_2010_e.html` station-name searches on climate.weather.gc.ca returned the search form with no station list (two attempts each, catharines/welland/niagara). 1981-2010 values from the GeoMet OGC API used instead.
- **St. Catharines stations:** 6137287 (St. Catharines A), 6137290 (Brock U, only 3.9 km away), 6137306 (Power Glen), 6137285 all show HAS_NORMALS_DATA = N in ECCC metadata, so the nearest station with normals is 12-15 km away and on the plateau side (Welland, Niagara Falls NPCSH).
- **Station distances** were computed by the agent from ECCC metadata coordinates against the reference point and are approximate.
- **Depth to bedrock:** no drift-thickness dataset queried. The hint "Lockport dolostone at shallow depth" is plausible from the escarpment setting but is not confirmed by any OGS unit-3 polygon at the query points.
- **"Haldimand clay":** OGS layer attributes carry only "fine-textured glaciolacustrine deposits"; the regional name was not verified.
- **Sub-area boundaries:** the City publishes no neighbourhood map that was found. Confederation Heights, Rolling Meadows and Thorold South have no Wikipedia coordinates (the "Confederation Heights" article is an Ottawa neighbourhood; "Rolling Meadows, Ontario" is a stub without coordinates; "Thorold South" and "Beaverdams, Ontario" redirect to Thorold). Their query points are approximations from street location and are flagged as such in the JSON.

## Coordinates used for OGS point queries (lat, lon) and returns

| Label | lat | lon | Source of coordinate | Surficial (MRD128) | Bedrock (MRD219) |
|---|---|---|---|---|---|
| Reference | 43.12 | -79.2 | task | 8a silt and clay | Lockport 18b |
| Downtown (Wikipedia city coord) | 43.1167 | -79.2 | Wikipedia Thorold infobox (43 07 N 79 12 W) | 21 man-made | Lockport 18b |
| Downtown Front St | 43.1225 | -79.1985 | approx. | 8a | Lockport 18b |
| Confederation Heights | 43.108 | -79.205 | approx. | 21 man-made | Lockport 18b |
| Rolling Meadows (south point) | 43.128 | -79.212 | approx. | 8a | Lockport 18b |
| Rolling Meadows (north point) | 43.135 | -79.215 | approx. | 21 man-made | Queenston |
| Allanburg | 43.0764 | -79.2083 | Wikipedia (43 4 35 N 79 12 30 W) | 8a | Lockport 18c Eramosa |
| Port Robinson | 43.0389 | -79.2164 | Wikipedia (43 2 20 N 79 12 59 W) | 8a | Guelph |
| Thorold South (north point) | 43.095 | -79.19 | approx. | 8a | Lockport 18b |
| Thorold South (south point) | 43.088 | -79.195 | approx. | 8a | Lockport 18c Eramosa |
| Beaverdams | 43.11 | -79.23 | approx. | 8a | Lockport 18b |
| Twin Flight Locks / Lock 7 | 43.13 | -79.195 | approx. | 8a | Clinton-Cataract Group |
| DeCew / Brock escarpment brow | 43.12 | -79.24 | approx. | 8a | Lockport 18b |

## Generic template claims checked against Thorold

- **"4-foot frost line":** NOT supported by any Thorold document. No City deck drawing or checklist prints 4 ft / 1.2 m. Leave `obc_min_foundation_depth_m` null for this city until a City document is found.
- **"Queenston shale":** WRONG for most of Thorold. The city sits on the Lockport dolostone plateau above the escarpment; Queenston red shale appears only below the brow on the northern edge (one query point at 43.135, -79.215). Clinton-Cataract shales (Rochester, Decew, Thorold formations) occur at the escarpment face by the locks; Guelph dolostone at Port Robinson.
- **"[City] Building Department":** the City's own wording is "Building Division" (City of Thorold Building Division / Development Services - Building Division), with "Planning & Building Services Department" and "Building Services" also used in the FAQ. Use "City of Thorold Building Division".
- **"36-inch gate":** not checked; nothing on the building pages mentions gate or access width. The fence by-law (28-2008) and pool fence booklet exist but were not read for this.

## Blocked or empty hosts (one line each)

- climate.weather.gc.ca normals station search (1991-2020 and 1981-2010): returned the search form only, no station list, two attempts per period.
- web.archive.org: curl "Connection reset by peer" on two URLs; WebFetch "unable to fetch from web.archive.org". Archived copies of the old Thorold inspections and building-permit pages therefore not read.
- thorold.ca /search/?q=...: search results render client-side; the HTML carries no results. Navigated via the Building and Renovating section instead.
- thorold.ca old-site URLs (/en/build-and-invest/*.aspx, /en/living-here/inspections.aspx): 404 on the new site.
- en.wikipedia.org "Rolling_Meadows,_Ontario" raw fetch: first attempt returned a Wikimedia 404 error page (the article exists but has no coordinates); "Rochester_Shale" redirects to Clinton Group; "Thorold_Formation" is a New York stub with no Ontario content.
