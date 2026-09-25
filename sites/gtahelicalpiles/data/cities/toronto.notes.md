# Toronto research notes (retrieved 2026-09-25)

Companion to `toronto.json`. Written for the owner's request to add Toronto as a service area. Note that `sites/gtahelicalpiles/CLAUDE.md` rule 5 still reads "Toronto is not a service area"; that line needs to be updated by the owner when Toronto goes live, along with `data/business.json` service-area fields and the README. This file records only what was verified.

## Verified

- **Census** (StatCan 2021 Census Profile, CSD 3520005, DGUID 2021A00053520005): population 2,794,356; occupied private dwellings 1,160,892; single-detached 270,490 / 1,160,890 = 23.3%; period of construction (25% sample) 1960 or before 340,185 (29.3%), 1961-1980 333,990 (28.8%), 1981-1990 109,780, 1991-2000 92,985 (combined 17.5%), 2001-2005 58,975, 2006-2010 63,995, 2011-2015 75,980, 2016-2021 85,005 (combined 24.5%). Toronto's housing stock is far older than Halton's: 58% pre-1981 versus 27% in Oakville. Toronto is also its own census division (2021A00033520), which is the basis for calling it single-tier in the JSON.
- **Geology, surficial (OGS MRD 128-REV layer 3)** and **bedrock (OGS MRD 219 layer 4)** by point query; results in the coordinate table below. Bedrock is Georgian Bay Formation at all 12 points. No point returned unit 3 (bedrock at/near surface) and no point returned Queenston Formation.
- **Permits**: authority name as the City writes it is "Toronto Building" (and "Toronto Building Inspections"). Permit required for a deck more than 60 cm (24 in) above ground; not required for an uncovered platform at or below 60 cm that is not a required exit and complies with zoning. No area threshold is published. Fee for "Residential Decks, Porches, Carports" is $214.79 effective Jan 1, 2026, which is also the 2026 minimum fee; hourly examination/inspection fee $92.79. Decks are an Express Services project (3-business-day review goal); House Stream is 10 business days. Inspections within two business days of request, Mon-Fri 8:30-4:30; footings inspection at completion of formwork before pouring concrete; owner must book a final inspection to close the permit. Applications go through the Express web portal as PDFs; engineer-sealed drawings need the Assumption of Responsibility for Engineering Content Form.
- **Climate**: Toronto City 1991-2020 (composite 6158350/6158355, 43 40' N 79 24' W, 112.5 m, 4.4 km SSW of the reference point): Jan mean -3.5 C (A), 22.0 days/yr with min < -10 C (A), frost-free period 208 days (D code, 1991-2011, 19 years), 43.9 days/yr with max <= 0 C (C), 101.1 days/yr with min <= 0 C (A). Toronto Pearson 1991-2020 (19 km W): Jan -5.0, 34.2 days < -10, 174 frost-free days, 49.5 days max <= 0, 130.6 days min <= 0, 114.5 cm snowfall.

## Not verified / null, and why

- **Footing depth / OBC minimum**: null. Toronto Building publishes no deck sample drawing and prints no numeric footing depth; the Decks and Porches guide only asks the applicant to show footing depth and "frost protection details". A web search for a toronto.ca deck PDF with a depth returned only contractor blogs, which are not acceptable sources. The 1.2 m figure in `oakville.json` comes from Halton municipal drawings and must not be reused for Toronto.
- **Helical piles / CCMC / BMEC**: nothing on any Toronto Building page retrieved mentions them. Do not claim a Toronto-specific helical requirement.
- **Depth to bedrock**: not retrieved (no drift-thickness dataset queried). The Toronto ravine system Wikipedia article says the valleys were cut through nearly 100 m of overburden, which is the only depth-scale statement retrieved.
- **Named tills (Halton Till, Scarborough Formation, Sunnybrook Drift) and the Lake Iroquois shoreline line**: the OGS layer returns unit codes only (5b, 5d, 5e, 9b, 9c); the formation names were not verified from a retrievable source and are flagged as unverified in the JSON. The sand units at East York, The Junction, York and south Etobicoke are consistent with Lake Iroquois beach/nearshore deposits but the shoreline position is described only loosely.
- **Snowfall at Toronto City**: annual total blank in the 1991-2020 table (incomplete years); Pearson's 114.5 cm used for comparison only.
- **Sub-area boundaries for Scarborough, York and Old Toronto**: Wikipedia API returned 429 (rate limited) on two attempts for those articles; district descriptions in the JSON therefore lean on the North York, East York and Etobicoke extracts that did load, plus the REST summaries for Scarborough Bluffs and Toronto.

## Coordinates used (lat, lon) and OGS results

| Point | lat | lon | Source of coordinate | MRD128 surficial | MRD219 bedrock |
|---|---|---|---|---|---|
| Reference (midtown) | 43.70643 | -79.39864 | task | 5b sandy silt till | Georgian Bay |
| Old Toronto | 43.64916667 | -79.37805556 | Wikipedia "Old Toronto" | 5e older tills | Georgian Bay |
| Etobicoke (south) | 43.61611111 | -79.5125 | Wikipedia "Etobicoke" | 9c glaciolacustrine sand/gravel | Georgian Bay (map m2337) |
| North York | 43.76194444 | -79.41027778 | Wikipedia "North York" | 5b sandy silt till | Georgian Bay |
| East York | 43.6913 | -79.3278 | Wikipedia "East York" | 9b littoral sand/gravel | Georgian Bay |
| Leaside | 43.708 | -79.368 | Wikipedia "Leaside" | 5e older tills | Georgian Bay |
| The Junction | 43.66555556 | -79.46444444 | Wikipedia "The Junction" | 9c glaciolacustrine sand/gravel | Georgian Bay |
| Rexdale | 43.72194444 | -79.57194444 | Wikipedia "Rexdale" | 5d clay-silt till | Georgian Bay (map m2337) |
| Scarborough Bluffs | 43.71888889 | -79.225 | Wikipedia "Scarborough Bluffs" | 5e older tills | Georgian Bay |
| Humber River mouth | 43.63222222 | -79.47194444 | Wikipedia "Humber River (Ontario)" | no polygon returned | Georgian Bay |
| Scarborough Centre | 43.7731 | -79.2578 | map estimate (McCowan/Ellesmere), not Wikipedia | 5b sandy silt till | Georgian Bay |
| York (Weston Rd/Eglinton W) | 43.6896 | -79.478 | map estimate, not Wikipedia | 9c glaciolacustrine sand/gravel | Georgian Bay |

Wikipedia coordinate for "Toronto" itself: 43.6525, -79.38166667 (not queried separately; 400 m from the Old Toronto point).

## Generic template claims checked against Toronto

- **"4-foot frost line"**: NOT supported by any Toronto document. Toronto Building prints no depth. Do not print 4 ft / 1.2 m on the Toronto page unless attributed to a non-Toronto source and framed as such, or leave it out.
- **"Queenston shale"**: FALSE for Toronto. All 12 bedrock queries return Georgian Bay Formation (grey-green shale with limestone/siltstone interbeds). Queenston red shale is a Halton/Hamilton/Niagara story.
- **"[City] Building Department"**: FALSE. The City's own name is "Toronto Building". Use that.
- **"36-inch gate"** (equipment-access claim): NOT verified for Toronto; nothing retrieved addresses it. It is an owner operational claim and belongs in `data/claims-register.md` if kept.
- **"Deck over 24 inches needs a permit"**: HOLDS for Toronto (60 cm / 24 in), with no area threshold.

## Blocked or degraded hosts

- en.wikipedia.org API: HTTP 429 "too many requests" after the first batch; Scarborough (Toronto), York (Toronto), Old Toronto, Glacial Lake Iroquois article text not retrieved. REST summary endpoint worked for Scarborough Bluffs and Toronto.
- toronto.ca site search (`/?s=`): returns a 248-byte JS shell; unusable. Individual pages fetched fine.
- ontario.ca e-Laws (O. Reg. 332/12): not attempted this session; known JS shell (see oakville.notes.md).

## Fetch log (tool calls, approx.)

Wikipedia coordinates API (1), StatCan search (1) and profile (1), ECCC Toronto City (1) and Pearson (1), OGS 24 point queries in one loop (1), toronto.ca: deck guide (1), guides index and fee page (1), permit-required page (1), after-you-apply (1), inspections (1), about-inspections (1), small-building inspection schedule (1), review streams (1), express portal (1), underpinning guide and site search (1); arcgis/geohub item records (1); Wikipedia extracts (3 attempts, partly 429); web search for a Toronto deck PDF (1, none found); ontario.ca OBC page (1).
