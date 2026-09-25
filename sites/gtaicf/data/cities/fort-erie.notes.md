# Fort Erie — research notes (2026-09-25)

Companion to `fort-erie.json`. Everything below was retrieved on 2026-09-25 through the proxy with curl unless marked otherwise.

## What was verified

- **Census (StatCan 2021, CSD 3526003, DGUID 2021A00053526003).** Population 32,901; occupied private dwellings 14,081; single-detached 11,620 of 14,080 (82.5%); period of construction pre-1960 5,475 (38.9%), 1961-80 3,265 (23.2%), 1981-90 1,175, 1991-2000 1,510 (together 19.1%), 2001-05 615, 2006-10 695, 2011-15 515, 2016-21 840 (together 18.9%). Note the very old stock: nearly 39% pre-1960 versus 8% in Oakville.
- **Surficial geology (OGS MRD 128-REV, layer 3).** Unit 8a fine-textured glaciolacustrine silt and clay dominates inland; unit 9 coarse glaciolacustrine sand and gravel along the Lake Erie shore (Crystal Beach, Ridgeway); one small unit 5d till polygon at the town centre. No bedrock-at-surface (unit 3) polygon at any point queried.
- **Bedrock (OGS MRD 219, layer 4).** Onondaga Formation (Edgecliff Member) at the reference point, Crystal Beach and Point Abino; Bois Blanc at the town centre, Ridgeway and the Douglastown point; Bertie at the Niagara River shore point; Salina at Stevensville. All limestone/dolostone, Devonian to Silurian; the bands run parallel to the lakeshore.
- **Permits (Town of Fort Erie).** Deck page, sample deck drawings PDF (TACBOC standard details 2007, 5 pages), building permits process page, permit timelines page (10 business days for decks), 2026 Consolidated Schedule of Fees and Charges PDF ($0.56/sq ft, $205 minimum, $500 Municipal Protection Deposit, $103.10 reinspection), Building By-law No. 80-2014 and Schedule B, applications page (PDF forms emailed to building@forterie.ca; no online portal).
- **Climate (ECCC 1981-2010, Port Colborne 6136606).** Jan mean -3.7 C, Jan min -6.9 C, 23.2 days/yr min < -10 C, 45.5 days/yr max <= 0 C, 120.7 days/yr min <= 0 C, frost-free 182 days (Apr 25 to Oct 26), snowfall 137.7 cm. Station is ~26 km west of the reference point.
- **Upper tier.** Wikipedia's Regional Municipality of Niagara article confirms Niagara Region is upper-tier and lists Fort Erie as a lower-tier town (population 32,901, matching StatCan).
- **Code page.** ontario.ca/page/ontarios-building-code confirms the 2024 Compendium is distributed through Publications Ontario.

## What was not verified and why

- **ECCC Fort Erie station.** The station-name search pages (1991-2020 and 1981-2010) return the search form only; the results list is not rendered in the HTML and no climate_id for a Fort Erie station could be found, so Port Colborne was used. Two attempts.
- **1991-2020 normals.** The Port Colborne and St. Catharines A 1991-2020 pages with the `climate_id` URL pattern returned the composite-station header but no data tables. Values in the JSON are therefore 1981-2010 (Port Colborne records 1981-2006, 26 years).
- **Depth to bedrock.** No drift-thickness dataset was queried. Only qualitative indications retrieved (Wikipedia: shallow soil over clay subsoil; limestone ridge Point Abino to Miller's Creek; Onondaga limestone quarried at the Peace Bridge site).
- **Deck inspection list.** The Town publishes no deck-specific inspection list; it says the list is issued with each permit. By-law 80-2014 s.11 sets notice timing (2 business days) and lists extra notice stages (fireplaces, chimneys, solid-fuel appliances), none deck-specific. The "Building Permit Standard January 2019" PDF is a scanned form with no extractable text (3 pages, 0 chars) and was not OCR'd.
- **Helical piles in Town documents.** The sample deck drawings contain no mention of helical, screw, CCMC, BMEC, engineer or frost (searched full text; page 1 is an empty cover). The deck page requires "construction drawings including foundation details" only. Unlike Oakville, there is no Town statement on helical piles to quote.
- **OBC clause.** Not retrieved (e-Laws JS shell; Compendium behind Publications Ontario). `clause` is null.
- **Douglastown.** No Wikipedia article (redirects to the town); coordinate is an approximation and is flagged as unverified in the JSON.
- **Sub-area names in the hint.** "Fort Erie (Bridgeburg)", Crystal Beach, Ridgeway, Stevensville and Douglastown are all confirmed as Fort Erie communities by the Wikipedia town article; Bridgeburg is the historic name (formerly Victoria) for the area north of the original settlement.
- **Geology hint names.** "Haldimand clay plain" and "Crystal Beach shoreline sands" are consistent with the OGS units returned (8a inland, 9 at Crystal Beach) but the names themselves are not in the OGS attributes and are not asserted as fact in the JSON. "Onondaga limestone at shallow depth" is consistent with the MRD 219 formation returned at the reference point, Crystal Beach and Point Abino and with the Wikipedia shallow-soil statement, but no depth figure exists.

## Coordinates used (lon, lat in query order; WGS84)

| Label | Lon | Lat | Source of coordinate | Surficial | Bedrock |
|---|---|---|---|---|---|
| Reference | -78.93 | 42.9 | task brief | 8a | Onondaga (Edgecliff) |
| Bridgeburg / town centre | -78.925 | 42.91 | estimated from town centre | 5d | Bois Blanc |
| Niagara River shore | -78.917 | 42.917 | Wikipedia town infobox (42.917, -79.017 is the article value; -78.917 used as the shoreline point) | 8a | Bertie |
| Crystal Beach (first pass) | -79.06 | 42.862 | estimate | 8a | Onondaga |
| Crystal Beach (Wikipedia) | -79.05917 | 42.8675 | Wikipedia geo | 9 | Onondaga (Edgecliff) |
| Ridgeway (first pass) | -79.05 | 42.88 | estimate | 9 | Bois Blanc |
| Ridgeway (Wikipedia) | -79.05743 | 42.88361 | Wikipedia geo | 9 | Bois Blanc |
| Stevensville (first pass) | -79.03 | 42.99 | estimate (wrong; north of the village) | 8a | Salina |
| Stevensville (Wikipedia) | -79.05917 | 42.94389 | Wikipedia geo | 8a | Salina |
| Douglastown (approx.) | -78.99 | 42.93 | estimate, unverified | 8a | Bois Blanc |
| Black Creek (approx.) | -79.00 | 42.98 | estimate | no polygon | blank formation |
| Point Abino | -79.09 | 42.85 | estimate | no polygon | Onondaga |

Note: the Wikipedia Fort Erie infobox coordinate (42.917, -79.017) is a town-wide centroid and was not itself queried; the two Crystal Beach results differ (8a at the estimate 900 m inland, 9 at the Wikipedia point), which is itself the shore-band/clay-plain contact.

## Template claims checked against Fort Erie

- **"4-foot frost line"** — holds in substance: the Town's sample deck drawings print "MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL" (1200 mm, not "4 ft"; the drawings are metric). Do not attribute it to an OBC clause number.
- **"Queenston shale"** — does NOT hold. Fort Erie bedrock is Devonian and Silurian limestone/dolostone (Onondaga, Bois Blanc, Bertie, Salina). Queenston Formation is not present at any query point. Copy must not mention shale bedrock here.
- **"[City] Building Department"** — holds: the Town's pages use "Building Department" throughout ("Town of Fort Erie Building Department, 1 Municipal Centre Drive, ext. 5510"), while the applications page uses "Planning and Development Department - Building Division". Use "Town of Fort Erie Building Department".
- **"36-inch gate"** — not verified. Nothing about gate width was found on the Town's deck, pool or permit pages retrieved; do not use for Fort Erie.
- **Deck permit threshold** — differs from the Halton template: Fort Erie requires a permit for any attached deck, and for detached decks only when both >10 sq. m AND >600 mm above grade.

## Blocked or empty hosts

- climate.weather.gc.ca station-name search: form returned without results list (both periods). Direct `climate_id` pages work for 1981-2010 only.
- climate.weather.gc.ca 1991-2020 station pages (6136606, 6137287): header only, no data tables.
- niagararegion.ca/government/about-region.aspx: HTTP 200 but the page text contained no "Fort Erie" or "upper-tier" wording; Wikipedia used instead.
- forterie.ca "building-permit-standard-january-2019.pdf": scanned, no text layer.

## Tool-call count

14 curl/python batches, all under the 45-call budget.
