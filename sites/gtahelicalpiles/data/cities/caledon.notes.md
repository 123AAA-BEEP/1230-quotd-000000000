# Caledon (Peel Region) — research notes

Retrieved 2026-09-25. Companion to `caledon.json`. Every figure in the JSON traces to a URL listed there; this file records what was checked, what was not, and why.

## Verified

- **Census** (StatCan 2021 Census Profile, CSD Caledon, DGUID 2021A00053521024): population 76,581; occupied private dwellings 23,699; single-detached 19,120 of 23,700 (80.7%); period of construction counts as listed in `derivation_note`. DGUID found via the StatCan search page.
- **Geology**: OGS MRD 128-REV (surficial) and MRD 219 (bedrock) ArcGIS feature services answered point queries at 11 coordinates (list below). Item citation JSON and the GeoHub MRD219 record both retrieved.
- **Permits**: Town of Caledon Building Permits page, Building Inspections page, Aug-2024 Decks & Porches checklist PDF, Oct-2015 Deck checklist PDF, 2026 Fees By-law (By-law 2025-105) PDF, and the LMCBO/TACBOC Standard Details PDF the Town hosts (77 pages, Revision 01 April 2025, OBC 2024).
- **Climate**: ECCC 1981-2010 normals for Orangeville MOE (6155790) and 1991-2020 normals for Toronto Pearson (6158731), both read from the station data pages.
- **Code**: 1.2 m recorded, sourced only as the "MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL" pier note on the wood-deck sheets of the Town-hosted LMCBO/TACBOC standard details.

## Not verified / null, and why

- **Depth to bedrock**: no drift-thickness dataset queried; `depth_note` says so.
- **OBC clause text**: not retrievable online (e-Laws JS shell; Compendium via Publications Ontario). `clause` is null and no clause number appears anywhere.
- **Helical-specific engineer wording**: Caledon's own checklists mention only CCMC/BMEC/Minister's Ruling documents (2015) and "helical anchors" in the footing inspection list. Unlike Oakville, no Caledon document says "professional engineer must determine depth, spacing and size". Not claimed.
- **Deck fee class for review timeline**: the Town lists 10 business days for "Residential Dwelling, Tents, Demountable Stages..." and 15 for "Small Buildings and Additional Residential Units"; it does not say which a deck falls under. Recorded verbatim without assignment.
- **Deck fee vs minimum fee**: the by-law prints $192.00 for a deck and a $193.00 minimum permit fee. Both recorded verbatim; the interaction is not interpreted.
- **Oak Ridges Moraine, Peel plain, Halton Till names**: not carried in OGS layer attributes. Moraine is evidenced only by the Town checklist's "Oak Ridges Moraine" site-plan-control line and by OGS unit 6 (ice-contact stratified) at Palgrave. Named cautiously in the JSON, never as an OGS attribute.
- **Cheltenham Badlands / Forks of the Credit bedrock exposure**: not point-queried; mentioned as unverified general knowledge only in `depth_note`.
- **Wikipedia neighbourhood coordinates**: Caledon East, Caledon Village and Mayfield West coordinates came from `{{coord}}` templates in wikitext (not the API's coordinates prop); Inglewood and Cheltenham have no coordinates on Wikipedia, so Wikidata P625 was used.

## Coordinates used (lat, lon) and OGS results

| Point | Lat | Lon | Source of coordinate | Surficial (MRD128-REV) | Bedrock (MRD219) |
|---|---|---|---|---|---|
| Reference (task) | 43.8667 | -79.8667 | task | 7 glaciofluvial, river/delta topset | Queenston |
| Caledon East | 43.8697 | -79.8667 | Wikipedia coord template 43°52'11"N 79°52'00"W | 7 glaciofluvial | Queenston |
| Bolton (Wikipedia) | 43.8972 | -79.7381 | Wikipedia API | 5d clay-silt till | Georgian Bay |
| Bolton (Humber valley) | 43.8833 | -79.7333 | rounded valley-floor point chosen by me | 19 modern alluvium | Georgian Bay |
| Caledon Village | 43.8604 | -79.9958 | Wikipedia coord template 43°51'37.4"N 79°59'45.0"W | 5b sandy silt till | Amabel (Silurian dolostone) |
| Alton | 43.8603 | -80.0686 | Wikipedia API | 7 glaciofluvial | Whirlpool/Manitoulin/Cabot Head/Fossil Hill (Silurian) |
| Palgrave | 43.9486 | -79.8339 | Wikipedia API | 6 ice-contact stratified | Georgian Bay |
| Belfountain | 43.7942 | -80.0142 | Wikipedia API | 7 glaciofluvial | Whirlpool/Manitoulin/Cabot Head/Fossil Hill |
| Inglewood | 43.7956 | -79.9339 | Wikidata Q115174290 | 5d clay-silt till | Queenston |
| Cheltenham | 43.7516 | -79.9230 | Wikidata Q29574006 | 8a fine glaciolacustrine silt/clay | Queenston |
| Mayfield West | 43.7564 | -79.8292 | Wikipedia coord template 43°45'23"N 79°49'45"W | 5d clay-silt till | Queenston |

Distances (haversine from the reference coordinate): Toronto Pearson (43.6767, -79.6306) 28.4 km; Orangeville MOE (43.92, -80.09) 18.8 km; Hamilton (43.17, -79.93) 77.6 km.

## Climate station choice

Orangeville MOE is the nearest station with a full 1981-2010 temperature record (26 of 30 years, code C) and is on the Escarpment upland at 411.5 m, comparable to Caledon Village/Alton. Toronto Pearson (173 m) is the nearest 1991-2020 station and better represents Bolton and Mayfield West. Primary fields use Orangeville; Pearson figures are in `freeze_thaw_note`. The ECCC station-name and proximity search forms returned no result rows through curl (the search appears to require a POST/session); the direct `climate_id=` URLs worked.

## Generic template claims — do they hold for Caledon?

- **"4-foot frost line"**: Holds only via the Town-hosted LMCBO/TACBOC standard details ("MIN. 1200mm BELOW GRADE"). Caledon has no sample deck drawing of its own that prints 4'-0". Say "1.2 m (4 ft) per the standard details the Town refers deck applicants to", not "the Town requires".
- **"Queenston shale"**: Holds for central and south Caledon (reference point, Caledon East, Inglewood, Cheltenham, Mayfield West). Does NOT hold for Bolton and Palgrave (Georgian Bay Formation), Caledon Village (Amabel dolostone) or Alton/Belfountain (thin Silurian units). Copy must not say all of Caledon sits on Queenston shale.
- **"[City] Building Department"**: The department's own name on its checklist letterhead is "Building Services"; Town web copy also says "Building division" and "building department". Use "Town of Caledon Building Services".
- **"36-inch gate"**: Not verified. No Caledon document retrieved mentions gate or access width. Do not print it for Caledon.

## Blocked or failed hosts

- caledon.ca `/en/business-and-development/building-permits.aspx`: 404 (old URL); the live page is `/en/living-here/building-permits.aspx`.
- climate.weather.gc.ca station-name and proximity search: returned the blank search form for every query (5 variants); direct climate_id URLs worked, so not treated as blocked.
- Wikipedia API call with a raw `|` in `titles` failed once (JSON decode); URL-encoded retry worked.
