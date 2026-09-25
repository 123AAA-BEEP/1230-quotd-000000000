# Hamilton research notes (retrieved 2026-09-25)

Companion to `hamilton.json`. Same rule as the JSON: nothing here is a figure unless it was read from a retrievable source on the date above.

## Verified

- **Census** (StatCan 2021 Census Profile, Hamilton, City, CSD 3525005, DGUID 2021A00053525005): population 569,353; occupied private dwellings 222,807; single-detached 125,130 of 222,810 (56.2%); period of construction (25% sample, total 222,805): 1960 or before 73,110 (32.8%), 1961-1980 62,560 (28.1%), 1981-1990 24,990, 1991-2000 21,365 (together 20.8%), 2001-2005 10,395, 2006-2010 9,470, 2011-2015 10,035, 2016-2021 10,880 (together 18.3%). Percentages are ours, computed from the counts. Note the DGUID search also returns 2021A00033525 (Hamilton census division) and 2021A00053514019 (Hamilton Township, Northumberland); the city CSD is 3525005.
- **Geology**: 16 OGS point queries (surficial MRD 128-REV layer 3 and bedrock MRD 219 layer 4), all returned a polygon. Results are in `hamilton.json` per sub-area. Summary: sand and gravel (unit 9/9b) under the lower city, Westdale and Ancaster; laminated silt and clay (8a) on the Mountain and across Glanbrook and the airport; clay-silt till (5d) at Stoney Creek, Red Hill Valley and Waterdown; sandy till (5b) and ice-contact sand and gravel (6) in rural Flamborough; older alluvium (12) on the Dundas valley floor. Bedrock: Queenston red shale at every below-escarpment point (downtown, GO Centre, Dundurn, McMaster, Dundas, Stoney Creek, Red Hill); Lockport dolostone at Ancaster and both Mountain points; Amabel dolostone at Waterdown and Carlisle; Guelph dolostone at Binbrook, Glanbrook, Mount Hope and rural Flamborough. No point returned unit 3 (bedrock at surface).
- **Permits**: City of Hamilton "Porches and Decks" page (live URL is under `/build-invest-grow/construction-renovation/residential-building-renovation/`; the older `/building-renovating/building-permits/` path 404s). Thresholds as printed: any attached deck; detached uncovered >10 sq.m. and >200 mm above grade; detached covered >10 sq.m. any height; detached <=10 sq.m. associated with a door and >600 mm above grade; new or replacement guards. Department name as printed on the page and checklist letterhead: "Building Division" (Planning and Economic Development). Checklist PDF lists "Helical Pier Engineer approved specifications" and "Ministers Ruling or BMEC Approvals for innovative materials or systems". Sample wood deck drawing (rendered and inspected as an image): piers to "MIN. 48"" below grade in both elevation views; example 10" sono tube belled to 14"; engineered specs required for non-lumber materials; CCMC specs for composite decking; no attachment through brick veneer.
- **Fees**: Building Permit Fees page (Schedule A of By-law 15-058) and the by-law office consolidation PDF dated January 31, 2025 (latest amendment 25-008) both print "Deck, balcony, open porch, stairs $5.36" per m2 and a $291 minimum permit fee. The 20 m2 example ($107, so $291 applies) is our arithmetic.
- **Inspections**: Building Inspections page lists general residential stages (pre-construction meeting, footing, backfill, structural, and many stages not relevant to a deck); inspection requests completed within 2 business days per OBC; booking by phone ext. 7777 or, for permits issued after July 6, 2026, online.
- **Portal**: my.hamilton.ca, then Building Permits category, Customer Portal, Permitting & Inspections.
- **Climate**: ECCC 1991-2020 normals, Hamilton A composite (6153194 then 6153193), 43 10'25" N 79 56'06" W, 237.7 m, at the Mount Hope airport, about 11 km SSW of the reference coordinate (our distance calculation). January daily average -5.3 C; days with minimum < -10 C 35.7 (from the Days with Minimum Temperature table); frost-free period 164 days (May 01 to Oct 12); days with maximum <= 0 C 54.8; days with minimum <= 0 C 138.6.
- **Code**: 1.2 m recorded because the City's own deck drawing prints MIN. 48". No OBC clause was retrieved and none is cited.

## Not verified, and why

- OBC clause text: not attempted this session (previous sessions found e-Laws renders as a JS shell); `clause` is null.
- Depth to bedrock / drift thickness: no OGS drift-thickness layer queried. The JSON says so.
- 2026-specific fee schedule: no document labelled 2026 exists on hamilton.ca; the live fees page has no effective-date line. The most recent fee-increase notices found are dated Nov 2022 (about 4.5%) and Nov 2023 (about 2%). Treat the $5.36/m2 and $291 figures as "as posted 2026-09-25".
- Permit review timeline: the City publishes no day count for review; only the 2-business-day inspection response.
- Deck-specific inspection list: the City page is generic; the JSON lists only the stages that apply and says so.
- Waterdown, Hamilton (city) and Beverly Swamp Wikipedia extracts: the Wikipedia API rate-limited the session ("too many requests") on the retry; only coordinates were obtained for Waterdown and none for Beverly Swamp, Winona, Westdale or Downtown Hamilton (articles carry no coordinates). Beverly Swamp is therefore not described in the JSON.
- Snowfall normals: not extracted from the ECCC page (not needed for the schema).
- Soil bearing capacity: Hamilton's drawing prints none (Oakville's prints 2,000 lbs/ft2); nothing recorded.

## Coordinates used (lat, lon) and source of each

| Point | Lat | Lon | Source |
|---|---|---|---|
| Reference (downtown) | 43.25011 | -79.84963 | task brief |
| Hamilton GO Centre | 43.25305556 | -79.86916667 | Wikipedia coordinates API |
| Dundurn Castle | 43.269481 | -79.884649 | Wikipedia |
| McMaster University (Westdale) | 43.26333333 | -79.91888889 | Wikipedia |
| Lime Ridge Mall (Mountain) | 43.218 | -79.862 | Wikipedia |
| Mohawk College (Mountain) | 43.23822222 | -79.88568889 | Wikipedia |
| Ancaster | 43.22555556 | -79.97666667 | Wikipedia |
| Dundas | 43.26611111 | -79.95472222 | Wikipedia |
| Stoney Creek | 43.2164 | -79.755 | Wikipedia |
| Red Hill Valley | 43.2234 | -79.7981 | Wikipedia (Red Hill Creek redirect) |
| Waterdown | 43.33333333 | -79.88333333 | Wikipedia |
| Flamborough (article coordinate; Rockton redirects here) | 43.346 | -80.055 | Wikipedia |
| Carlisle | 43.401 | -79.9755 | Wikipedia |
| Glanbrook | 43.178 | -79.932 | Wikipedia |
| Binbrook | 43.1217 | -79.8045 | Wikipedia |
| Hamilton airport / Mount Hope | 43.17361111 | -79.935 | Wikipedia (Mount Hope article gives 43.156, -79.915, not queried) |

Each point was run against both OGS services with the exact query pattern in the JSON sources (replace LON,LAT).

## Generic template claims checked against Hamilton

- **"4-foot frost line"**: the City's sample deck drawing prints MIN. 48" pier depth, so a 4 ft minimum pier depth is a real Hamilton requirement. The drawing does not call it a frost line; word it as the City's minimum pier depth.
- **"Queenston shale"**: true for the lower city, Westdale, Dundas, Stoney Creek and Red Hill Valley. False on the Mountain, in Ancaster, Waterdown, Flamborough and Glanbrook, where OGS returns Silurian dolostone (Lockport, Amabel, Guelph). Any Hamilton page must split this by escarpment.
- **"[City] Building Department"**: does not hold. Hamilton's name is "Building Division" (Planning and Economic Development Department), 71 Main Street West, 3rd floor.
- **"36-inch gate"**: not verified. The deck drawing prints a 36" minimum railing height, which is not a gate. No pool-enclosure or gate width figure was retrieved for Hamilton.

## Blocked or failed hosts

- hamilton.ca site search (`/search?keys=`): 403; worked around via `sitemap.xml?page=1..3`.
- hamilton.ca legacy paths under `/build-invest-grow/building-renovating/`: 404 (site restructured); live paths recorded in the JSON.
- en.wikipedia.org API: intermittent empty responses, then "too many requests" rate limiting on the final batch; coordinates for the points above were obtained before that.
