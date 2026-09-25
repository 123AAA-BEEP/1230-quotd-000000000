# Mississauga research notes (retrieved 2026-09-25)

Companion to `mississauga.json`. Everything below was retrieved live with curl through the session proxy; nothing is from memory.

## Verified

- **Census** (StatCan 2021 Census Profile, DGUID 2021A00053521005, Mississauga, City (CY)): population 717,961 (2016: 721,599, a 0.5% decline); occupied private dwellings 244,575; single-detached 90,660 (37.1%); period of construction 1960 or before 17,730 / 1961-1980 75,015 / 1981-1990 47,955 / 1991-2000 46,745 / 2001-2005 23,530 / 2006-2010 15,745 / 2011-2015 9,550 / 2016-2021 8,300. Percentages in the JSON are computed from these counts.
- **Surficial geology** (OGS MRD 128-REV, ArcGIS layer 3 point queries): lakeshore points return unit 9c (coarse glaciolacustrine sand and gravel, "foreshore and basinal deposits"); inland points return unit 5d (clay to silt-textured till derived from glaciolacustrine deposits or shale); the Cooksville GO Station point returns unit 3 (Paleozoic bedrock at/near surface).
- **Bedrock** (OGS MRD 219, layer 4): Georgian Bay Formation at 9 of 11 points; Queenston Formation only at Erin Mills and Meadowvale.
- **Lake Iroquois shoreline**: Wikipedia (Mississauga article) says the former shoreline roughly follows the Dundas Street alignment, prominent at the former brickyard on Shoreline Dr near Mavis Rd. The OGS results are consistent with this (9c south of Dundas, 5d north).
- **Permit trigger**: City page "When a building permit is required" lists "Deck greater than 0.61 metres (2 feet) high" as needing a permit and "Deck less than 600 mm (2 feet) in height" as not needing one. No deck-specific area threshold is printed.
- **Deck sample drawing**: the City's "Deck Sample Drawing" PDF is the LMCBO Standard Details set D01a-D01d (2012). It is an image-only PDF (no text layer, tesseract not installed), so the pages were rendered with pymupdf and read visually. Text confirmed on the drawing: "POURED CONCRETE PIER MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL"; soil bearing table 40-500 kPa; general notes 7, 10 and 11 (bear on undisturbed soil, capacity determined prior to construction, 50% reduction with water at the footing base, contact local building department for local bearing capacities). No mention of helical/screw piles, CCMC, BMEC or an engineer.
- **Fees**: "Abbreviated Building Division Fees", Building By-law 0236-2024, effective Feb 1 2026 to Jan 31 2027: "Decks, porches, basement stairwell, etc. to houses $244.00 each"; residential minimum $244; $50 non-refundable pre-screening fee credited to the permit; $160/hour for revisions.
- **Timelines**: pre-screen 7-10 business days; residential first review 10 business days; average residential alteration permit 7 weeks; resubmission cycles add two or more weeks.
- **Inspections**: Building By-law Schedule D prescribed notices (Footing, Backfill, Framing, ... Final); City page says to book an initial site inspection before any work, which sets the deck's inspection list. Inspections Mon-Fri 8:30-4:30.
- **Portal**: ePlans (https://www.mississauga.ca/eplans/); all applications online; individual greyscale landscape PDFs named to the title block.
- **Region**: Wikipedia "Regional Municipality of Peel" states Peel consists of Mississauga, Brampton and Caledon. peelregion.ca pages (home, /about/regional-government, /about/peel-region-council, /about/people-peel) returned HTTP 200 but contained no occurrence of the string "Mississauga" in the served HTML (client-rendered), so the Region's own site could not be quoted.
- **Climate**: ECCC 1991-2020 normals, Toronto Pearson Intl A (6158731): Jan daily average -5.0 C, Jan daily minimum -8.9 C, 34.2 days/yr with minimum < -10 C, 49.5 days/yr with maximum <= 0 C, 130.6 days/yr with minimum <= 0 C, frost-free period 174 days (Apr 27 - Oct 20), snowfall 114.5 cm. Station is 43 40'36" N 79 37'50" W, about 11 km NNE of the reference coordinate; the Wikipedia Malton coordinate (43.7, -79.6333) lies 2.6 km north of it.

## Not verified / null

- **OBC clause**: not retrieved; `clause` is null. `obc_min_foundation_depth_m` = 1.2 rests only on the City-hosted LMCBO drawing (1200 mm), which is a province-wide standard detail republished by Mississauga, not a Mississauga-specific number.
- **Helical pile requirements**: nothing on mississauga.ca mentions helical piles, CCMC or BMEC. The deck checklist requires "Soil bearing capacity" and foundation "size, thickness and material" on the floor plan and a "Schedule 1 Designer Information" form; whether an engineer's stamp is demanded for a helical foundation is not stated anywhere retrieved.
- **Halton Till / Peel Plain**: OGS attributes give texture only ("clay to silt-textured till"); the names Halton Till and Peel Plain were not confirmed by any retrieved source (Wikipedia has no "Halton Till" or "Peel Plain" article; the API returned no page).
- **Depth to bedrock**: not retrieved; no drift-thickness dataset queried.
- **Department name**: the City web pages never print a department name; "Building Division" appears only in the fee schedule title. Recorded as "City of Mississauga Building Division" with that caveat.
- **Mississauga-area ECCC station**: the 1981-2010 station-name search for "mississauga" returned no stations; no "Port Credit" station found. Pearson used (it is inside the city).
- **Gate width / pool enclosure**: nothing retrieved.

## Coordinates used (lat, lon) and OGS results

| Point | Source of coordinate | lat, lon | MRD128 unit | MRD219 formation |
|---|---|---|---|---|
| Reference | task | 43.5789, -79.6583 | 5d till | Georgian Bay |
| Wikipedia city coordinate | Wikipedia "Mississauga" | 43.6, -79.65 | 5d till | Georgian Bay |
| Port Credit | Wikipedia "Port Credit" | 43.55194, -79.58444 | 9c sand/gravel | Georgian Bay |
| Lakeview | Wikipedia "Lakeview, Mississauga" | 43.57083, -79.56806 | 9c | Georgian Bay |
| Clarkson | Wikipedia "Clarkson, Mississauga" | 43.51917, -79.63389 | 9c | Georgian Bay |
| Lorne Park | Wikipedia "Lorne Park" | 43.53528, -79.61861 | 9c | Georgian Bay |
| Erin Mills | Wikipedia "Erin Mills" | 43.54778, -79.70722 | 5d | Queenston |
| Streetsville | Wikipedia "Streetsville, Mississauga" | 43.58667, -79.72139 | 5d | Georgian Bay |
| Meadowvale | Wikipedia "Meadowvale, Mississauga" | 43.58472, -79.75556 | 5d | Queenston |
| Cooksville (GO Station, 3210 Hurontario St) | Wikipedia "Cooksville GO Station" (the Cooksville article has no coordinate) | 43.58306, -79.62361 | 3 bedrock | Georgian Bay |
| Malton | Wikipedia "Malton, Mississauga" | 43.7, -79.63333 | 5d | Georgian Bay |

Nominatim returned nothing for "Dundas Street East & Hurontario Street", so the GO station coordinate stands in for Cooksville.

## Template claims checked against Mississauga

- **"4-foot frost line"**: holds as 1200 mm (1.2 m) on the City-hosted deck drawing; the drawing is metric and never prints "4 ft".
- **"Queenston shale"**: does NOT hold citywide. OGS returns Georgian Bay Formation at the reference coordinate, the lakeshore, Cooksville, Streetsville, Malton and the city centre; Queenston only at Erin Mills and Meadowvale in the west. Write "Georgian Bay and Queenston shale" or locate it.
- **"[City] Building Department"**: the City's own documents say "Building Division" (fee schedule title) and "Chief Building Official"; the LMCBO drawing's generic note says "local building department". Use "City of Mississauga Building Division".
- **"36-inch gate"**: not supported by any retrieved Mississauga document; do not use.

## Blocked or unusable hosts

- en.wikipedia.org API: rate-limited (HTTP 429 text) after roughly 8 calls; the plain article HTML route still worked.
- nominatim.openstreetmap.org: reachable but returned an empty result for the Cooksville intersection.
- peelregion.ca: reachable (200) but the served HTML carries no municipality names (client-rendered); not quotable.
- mississauga.ca: fully reachable with a browser user agent this session (earlier reports of it being unreachable did not recur).
- ontario.ca/laws: not attempted this session; recorded as unretrievable per the Oakville file.

## Tool call count

About 24 tool calls, under the 45 budget.
