# Guelph research notes (retrieved 2026-09-25)

Companion to `guelph.json`. Every figure in the JSON traces to a URL listed there; this file records what was verified, what was not, the coordinates used, and how the generic template claims fare for Guelph.

## Scope caveat

The relayed owner request for this workflow run was "add Toronto as an additional service area, as well as all cities towards Niagara". Guelph is not on the Toronto-Niagara corridor; it is researched here because the site's `CLAUDE.md` (owner decision 2026-09-25) already lists Guelph in the service area. Flagged for the owner in the structured output.

## Verified

- **Geology (OGS ArcGIS point queries).** Surficial MRD 128-REV layer 3 and bedrock MRD 219 layer 4 were queried at the reference coordinate and ten further points (below). Results: unit 7b glaciofluvial (6 points), unit 5b sandy-silt till (3 points incl. reference), unit 6 ice-contact stratified (1), unit 19 modern alluvium (1). Bedrock is Guelph Formation dolostone at 10 of 11 points; Amabel Formation dolostone at Pineridge. Item citations for both services retrieved (arcgis.com item JSON and GeoHub dataset record).
- **Census.** StatCan 2021 Census Profile, Guelph City (CSD), DGUID 2021A00053523008. First curl returned a 28 KB shell without data; a retry with a cookie jar and Accept headers returned the full 4.4 MB profile. Counts: population 143,740; occupied private dwellings 56,480; single-detached 27,445; period of construction 11,120 / 13,565 / 7,140 / 7,620 / 5,010 / 4,240 / 3,700 / 4,085.
- **Permits.** guelph.ca answered HTTP 200 with the browser user agent (the earlier 403 did not recur). Deck page, residential permits page, FAQ pages, fees page, the Building By-law PDF (24 pages, fee schedules effective 2026-07-01 and 2027-01-01), and two deck sample drawing PDFs were read. The deck drawing prints "Minimum 4'-0\" below grade" on undisturbed, competent bearing soil. Deck flat fee $160 (from 2026-07-01), $165 (from 2027-01-01). Review target 10 business days. Portal is GPAS (gpas.guelph.ca).
- **Climate.** ECCC has no station named "Guelph" in 1991-2020 or 1981-2010 normals (the 1981-2010 station search says so explicitly; the 1991-2020 full station list contains no Guelph entry). A 25 km proximity search for 1981-2010 returns Waterloo Wellington A, Preston and Fergus Shand Dam. Used the Kitchener/Waterloo 1991-2020 composite (Waterloo Wellington A 6149387 to 2002, then Region of Waterloo Int'l Airport 6149388), about 15 km SW of the reference coordinate (haversine 14.8 km to 43.45, -80.383). Elora RCS (17.4 km NW) retrieved as a cross-check.
- **Code.** 1.2 m recorded because the City of Guelph's own deck drawings print 4'-0"; the OBC clause text was not retrieved and no clause number is cited.

## Not verified / null, and why

- **Depth to bedrock.** No drift-thickness dataset was queried; no OGS surficial polygon of unit 3 (bedrock at surface) was hit at any Guelph point. The task hint "Guelph Formation dolostone bedrock (often shallow)" therefore stays unquantified.
- **Till names (Wentworth, Port Stanley), "Guelph drumlin field", "Paris moraine".** The OGS layer attributes carry only texture classes, not formation or landform names. Wikipedia has no Paris Moraine article; the Guelph article says only that the city "is built on several drumlins and buried waterways". These names are mentioned in the JSON as unverified regional labels only.
- **Helical pile / CCMC / BMEC language.** None found on the Guelph deck page, the FAQ pages, or either sample drawing. The deck page requires "Type, depth and size of footings/foundation/piers" on the section drawing; that is the hook for a helical submission. Unlike Oakville, Guelph publishes no engineer-must-design-helicals note.
- **Inspection list.** Guelph publishes no deck-specific inspection sequence; pages say mandatory inspections are listed on the issued permit and booked via GPAS with 48 hours' notice. `inspections[]` carries that statement rather than a list.
- **Neighbourhood coordinates.** Wikipedia has no articles for the individual Guelph neighbourhoods (Category:Neighbourhoods_in_Guelph does not exist). Points were placed by the researcher at well-known street intersections and are marked "researcher placement" in the JSON. They should be re-checked against the City's neighbourhood map before any lot-level claim.
- **Snowfall totals** for Kitchener/Waterloo were not captured (page parse returned extremes, not the annual total); omitted rather than guessed.

## Coordinates used (lat, lon) and OGS result

| Point | Lat | Lon | Surficial | Bedrock |
|---|---|---|---|---|
| Reference (task) | 43.54594 | -80.25599 | 5b till | Guelph Fm |
| Downtown (Wyndham/Macdonell) | 43.5448 | -80.2482 | 7b glaciofluvial | Guelph Fm |
| Old University (Gordon/College) | 43.5330 | -80.2380 | 7b | Guelph Fm |
| Exhibition Park | 43.5560 | -80.2600 | 7b | Guelph Fm |
| Kortright Hills | 43.5180 | -80.2700 | 5b till | Guelph Fm |
| Westminster Woods | 43.5130 | -80.2000 | 7b | Guelph Fm |
| Clairfields | 43.5140 | -80.2150 | 5b till | Guelph Fm |
| Grange Hill East | 43.5640 | -80.2100 | 19 alluvium | Guelph Fm |
| Pineridge | 43.5400 | -80.1900 | 7b | Amabel Fm |
| Speed River at Riverside Park | 43.5720 | -80.2650 | 6 ice-contact | Guelph Fm |
| Eramosa River at Victoria Rd | 43.5500 | -80.2300 | 7b | Guelph Fm |

Wikipedia's city coordinate is 43.53583, -80.22889 (not queried; the task reference coordinate was used instead).

## Generic template claims checked against Guelph

- **"4-foot frost line"**: holds as a municipal drawing requirement. The City's deck sample drawings print "Minimum 4'-0\" below grade" (A2, 03/01/2023) and "Minimum 4' - 0\"" (PBC-1, March 2026). It is not sourced to the OBC text.
- **"Queenston shale"**: does NOT hold. Every OGS bedrock query in Guelph returns Silurian dolostone (Guelph Formation; Amabel Formation at Pineridge). Any Guelph page must not mention Queenston or Georgian Bay shale.
- **"[City] Building Department"**: does NOT hold as written. The City's own name is "Building Services" (with "Permit Services" and "Inspections Services" teams) under "Building Permits and Inspections". Use "City of Guelph Building Services".
- **"36-inch gate"**: not verified; nothing about gate widths or access was found on the Guelph permit pages or drawings retrieved. Do not print it for Guelph without a source.
- Permit threshold differs from Oakville: Guelph triggers on 24 in (0.6 m) walking-surface height alone, with no area test and no attached/detached distinction on the page.

## Blocked or empty hosts

- statcan Census Profile: first fetch returned an empty shell; succeeded on retry with cookie jar and Accept headers (not blocked).
- climate.weather.gc.ca `results_*` search URLs from the task returned the search form, not results; the working route is `station_select_1991_2020_e.html?searchType=stnName&txtStationName=...` then the `climate_id` result link.
- ontario.ca/laws (OBC regulation text): not attempted this session; documented as a JavaScript shell in `oakville.json`. The compendium access page was fetched and confirmed.
- en.wikipedia.org: reachable; Paris_Moraine and Category:Neighbourhoods_in_Guelph do not exist.

Tool calls used: 12 (well under the 45 budget).
