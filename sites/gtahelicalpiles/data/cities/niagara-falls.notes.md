# Niagara Falls (Niagara Region) - research notes, 2026-09-25

Companion to `niagara-falls.json`. Reference coordinate 43.09, -79.08. About 21 tool calls used.

## Verified (with the source it came from)

- **Census (StatCan 2021 Census Profile, DGUID 2021A00053526043, Niagara Falls City CSD):** population 94,415 (88,071 in 2016, +7.2%); 37,793 occupied private dwellings; single-detached 24,990 of 37,795 (66.1%); period of construction (total 37,790) 1960 or before 11,695 / 1961-1980 11,290 / 1981-1990 4,080 / 1991-2000 3,320 / 2001-2005 1,455 / 2006-2010 1,495 / 2011-2015 1,865 / 2016-2021 2,600. Bucket percentages computed by the agent: 30.9 / 29.9 / 19.6 / 19.6. The DGUID came from the StatCan search-results page.
- **Surficial geology (OGS MRD 128-REV layer 3):** unit 8a fine-textured glaciolacustrine silt and clay at 8 of 14 query points (Chippawa x2, Willoughby x2, Wikipedia city coordinate, Garner x2, Stamford Township north-edge point); unit 9 coarse glaciolacustrine sand and gravel at 4 points (reference coordinate, Lundy's Lane, Stamford plateau x2); unit 21 man-made deposits at Lundy's Lane west; unit 3 Paleozoic bedrock only at the Falls brink. Unit labels taken from the layer definition's legend.
- **Bedrock (OGS MRD 219 layer 4):** Guelph Formation dolostone at 9 points (reference, Chippawa x2, Wikipedia city coordinate, Lundy's Lane x2, Garner south, Falls brink); Lockport Formation 18b (Goat Island/Gasport/Vinemount) at both Stamford plateau points; Lockport 18c Eramosa at Garner north; Salina Formation at both Willoughby points; Queenston shale only at the Stamford Township article coordinate on the city's north edge below the escarpment.
- **Lockport / Guelph relationship:** Wikipedia's Lockport Group article says the Guelph Formation is the top formation of the Lockport Group, the unit that makes up the Niagara Escarpment; the Clinton Group article (which "Rochester Shale" redirects to) describes the soft Clinton shales eroding out from under the Lockport dolomites to form the Falls.
- **Permits (niagarafalls.ca, Govstack site):** department wording is "Building Department" on the decks page, "City of Niagara Falls Planning and Building, 4343 Morrison Street" in the contact block, and "Building Services" on the Do I Need a Building Permit page; email pbd@niagarafalls.ca, 905-356-7521 ext. 4330. Deck permit needed if greater than 10 m2 (108 ft2), greater than 60 cm (23 5/8 in) above the adjacent walking surface, covered/roofed, or connected to a house or other structure; Do-I-need page: "Detached covered or uncovered deck more than 600 mm above adjacent grade". Required deck inspections: "Footing/excavation (helical pile) - prior to pouring of concrete", Framing, Final. Applications through the CityView Portal (cvweb.niagarafalls.ca/portal); site plan at 1:200; cross-section with pier/footing/foundation details. Completeness review within 2 business days; plan review 10 to 30 days; inspections need 48 hours' notice, 3:00 pm cut-off. Utility locates through Ontario One Call at least five business days before digging.
- **Fees (Schedule of Fees page, effective January 1, 2026):** Uncovered Deck/Porch $243.00 flat; Covered Deck/Porch $7.55 per m2; Minimum Building Permit Charge $243.00; Zoning Review for Building Permit $244.00 flat; Not-ready inspection $135.00; Construction without a Permit 2x permit fee; cash/debit in person (no credit cards), cheque, or online through CityView.
- **Climate (ECCC 1981-2010 via GeoMet API):** Niagara Falls NPCSH (6135657, 43.133 N 79.05 W, 175.3 m, about 5.4 km NNE of the reference point): Jan mean -4.12 C (code C, 20 yrs), Jan max -0.41, Jan min -7.8, 24.95 days/yr min < -10 C (code E), 45.86 days max <= 0 C (E), 130.05 days min <= 0 C (E), 0.62 days < -20 C, snowfall 153.48 cm, frost-free 188 days (code G, 4 yrs; last frost day 119, first frost day 308). Welland (6139445, about 18 km SW): Jan mean -4.3 (A), 30.5 days < -10, 46.98 days max <= 0, frost-free 151 (D, 18 yrs), snowfall 141.59 cm. Fort Erie (6132470, about 25 km S) Jan max -0.22 / min -8.0, snowfall 175.01 cm, frost dates 124/285 (D) - not used in the JSON.
- **Niagara Region upper tier:** niagararegion.ca lists Niagara Falls among the 12 local municipalities; permits are issued by the City.

## Not verified / null, and why

- **Deck footing depth (`footing_depth_requirement`, `code.obc_min_foundation_depth_m`):** null. The City publishes no deck guide, sample deck drawing or footing checklist. The decks page, the application-process forms list (provincial application form, Applicable Law Checklist, supplemental data forms, energy forms) and the Forms, Licences and Permits page carry no deck drawing or depth figure. The old-site URL /services/building/permits/decks.aspx returns the new site's 404 page.
- **Helical pile / CCMC / BMEC wording:** the only helical mention on niagarafalls.ca is the inspection line "Footing/excavation (helical pile)". Nothing about CCMC, BMEC or engineer sign-off for piles was found.
- **Permit timeline column for decks:** the page states 10 to 30 days overall; its four-column table (10/15/20/30 days) is rendered in the HTML as a flat list, with "Decks" third after houses and attached garages, so the specific column could not be confirmed and is not claimed.
- **Frost-free period:** the NPCSH value (188 days) rests on 4 years (code G). It is recorded because it is the nearest station, with the Welland 18-year value (151) alongside; treat 188 as weak.
- **1991-2020 normals:** the climate.weather.gc.ca station-name search returned the search form with no station rows for "niagara", "st. catharines" and "port weller" (one attempt each after the same result was recorded twice for Thorold). No 1991-2020 normals station exists inside Niagara Falls in the GeoMet station list; St. Catharines A / Port Weller were not queried further.
- **Station distances** computed by the agent from GeoMet station coordinates against the reference point; approximate.
- **Depth to bedrock / Rochester shale depth:** no drift-thickness dataset queried; no query point returned Clinton Group / Rochester shale, so the hint "Rochester shale below" is supported only by the Wikipedia stratigraphy, not by a local point.
- **Sub-area boundaries:** the City's Planning Neighbourhoods map was not retrieved; Wikipedia's community/neighbourhood list was used for names. Stamford, Drummond, Garner and Lundy's Lane have no usable Wikipedia coordinates (Stamford, Ontario redirects to Stamford Township, whose coordinate lies at the north edge of the city; Drummondville, Ontario and Garner Road returned Wikimedia error pages; Lundy's Lane redirects to Ontario Highway 20). Their query points are approximations from street location and are flagged as such.

## Coordinates used for OGS point queries (lat, lon) and returns

| Label | lat | lon | Source of coordinate | Surficial (MRD128) | Bedrock (MRD219) |
|---|---|---|---|---|---|
| Reference | 43.09 | -79.08 | task | 9 sand and gravel | Guelph |
| Wikipedia city coordinate | 43.06 | -79.1067 | Wikipedia infobox (43 03 36 N 79 06 24 W) | 8a silt and clay | Guelph |
| Chippawa | 43.0558 | -79.0469 | Wikipedia (43 3 21 N 79 2 49 W) | 8a | Guelph |
| Chippawa (approx. second point) | 43.0575 | -79.0627 | approx. | 8a | Guelph |
| Willoughby | 43.0108 | -79.0772 | Wikipedia (43 0 39 N 79 4 38 W) | 8a | Salina |
| Willoughby (approx. second point) | 43.020 | -79.075 | approx. | 8a | Salina |
| Stamford Township article coordinate (north edge) | 43.16475 | -79.064778 | Wikipedia Stamford Township | 8a | Queenston |
| Stamford plateau (approx.) | 43.115 | -79.098 | approx. | 9 | Lockport 18b |
| Stamford north (approx.) | 43.104 | -79.069 | approx. | 9 | Lockport 18b |
| Lundy's Lane (near battlefield 43.0891, -79.0955) | 43.089 | -79.088 | approx., 0.6 km E of Wikipedia coord | 9 | Guelph |
| Lundy's Lane west / Drummond (approx.) | 43.084 | -79.117 | approx. | 21 man-made | Guelph |
| Garner north (approx.) | 43.090 | -79.140 | approx. | 8a | Lockport 18c Eramosa |
| Garner / Westlane south (approx.) | 43.070 | -79.155 | approx. | 8a | Guelph |
| Falls brink / Table Rock (approx.) | 43.079 | -79.078 | approx. | 3 bedrock | Guelph |

## Generic template claims checked against Niagara Falls

- **"4-foot frost line":** NOT supported by any Niagara Falls document. No City deck drawing, guide or checklist prints 4 ft / 1.2 m. `obc_min_foundation_depth_m` stays null.
- **"Queenston shale":** WRONG for the city proper. OGS maps Silurian dolostone (Guelph Formation over most of the city, Lockport 18b/18c on the Stamford plateau and at Garner) and Salina Formation at Willoughby. Queenston red shale appears only at the north edge below the escarpment (Stamford Township coordinate 43.16475, -79.064778).
- **"Lockport dolostone at surface" (task hint):** partly right. OGS MRD219 names the bedrock Guelph Formation (top of the Lockport Group per Wikipedia) at the reference point and most residential points, and Lockport Formation proper on the Stamford plateau; but surficial mapping shows bedrock at surface (unit 3) only at the Falls brink, with silt-and-clay or sand-and-gravel cover everywhere else.
- **"[City] Building Department":** the City's decks page itself says "Building Department"; the contact block says "Planning and Building" and the Do-I-need page says "Building Services". "City of Niagara Falls Building Department" is defensible from the decks page.
- **"36-inch gate":** not checked; nothing on the building pages mentions gate or access width. The Fences page exists but was not read for this.

## Blocked or empty hosts (one line each)

- climate.weather.gc.ca normals station search (1991-2020): returned the search form only, no station list, for three station names. 1981-2010 values taken from the GeoMet OGC API instead.
- niagarafalls.ca /search/?q=deck+permit: results render client-side; the HTML carries no results. Navigated via Building and Renovating instead.
- niagarafalls.ca old-site URL /services/building/permits/decks.aspx: 404 ("we've launched our new website").
- en.wikipedia.org raw fetch of "Drummondville,_Ontario" and "Garner_Road": Wikimedia error page (articles do not exist); "Stamford,_Ontario" redirects to Stamford Township; "Lundy's_Lane" redirects to Ontario Highway 20; "Lockport_Formation" redirects to Lockport Group; "Rochester_Shale" redirects to Clinton Group.
- cvweb.niagarafalls.ca/portal: not fetched (login portal; only the link target from the City's page is cited).
