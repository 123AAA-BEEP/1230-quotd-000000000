# Port Colborne — research notes (2026-09-25)

Companion to `port-colborne.json`. Everything below was retrieved on 2026-09-25 through the session proxy with curl; nothing is from memory.

## Verified

- **Census.** Statistics Canada 2021 Census Profile, Port Colborne (City) CSD, DGUID 2021A00053526011. Population 20,033; occupied private dwellings 8,710; single-detached 6,145 (70.6%). Period of construction (25% sample, total 8,710): 1960 or before 4,785 (54.9%); 1961-1980 2,225 (25.5%); 1981-1990 610 + 1991-2000 405 = 1,015 (11.7%); 2001-2005 220 + 2006-2010 180 + 2011-2015 70 + 2016-2021 210 = 680 (7.8%). Percentages sum to 99.9 from rounding. This is an old housing stock: more than half of dwellings predate 1960.
- **Geology.** OGS MRD 128-REV (surficial, layer 3) and MRD 219 (bedrock, layer 4) ArcGIS point queries, 13 points (list below). Bedrock is Onondaga Formation limestone at 12 of 13 points; Bois Blanc at the reference coordinate; Bertie dolostone only at the rural north point (Humberstone Marsh). Surficial units returned: 3 (bedrock at/near surface) at Humberstone x2, Cedar Bay, Sherkston Quarry; 17 (eolian sand/silt) at Sugarloaf, Nickel Beach, Pleasant Beach; 8a (glaciolacustrine silt and clay) at Lorraine, Gasline, Humberstone Marsh; 21 (man-made fill) at the reference coordinate, Wikipedia city coordinate and Lakeshore Road West. Citation records for both services were fetched (arcgis.com item 4cb9a34c…, GeoHub dataset 4b1bbee3…).
- **Permits.** City of Port Colborne Building Division. Deck permit tests (600 mm / 10 m2 / attached) from the Building and Construction page and the "Guidelines for Deck Permits" PDF. Sample Deck Plan PDF (1 page) read in full. Citizen's Guide to Building Permits (July 2024, 14 pages): 10 business days for most single-family projects, two working days' notice for inspections. Fee By-law Schedule/Appendix O (2024 fee / 2025 proposed fee columns): uncovered or covered deck $0.60 → $0.64 per sq ft; minimum fee for all building permits $145 → $155 (checked by word position in the rotated PDF page; note 4 corroborates "$145.00 paid at time of application plus $57.00 for each additional inspection"). Portal: citywideportal.com (Citywide Customer Portal).
- **Climate.** ECCC 1981-2010 normals for Port Colborne, climate ID 6136606 (42°53'N 79°15'W, 175.3 m), about 1 km from the reference coordinate: January mean -3.7 C (code A), January daily minimum -6.9 C, days min < -10 C = 23.2 (code C), days min <= 0 C = 120.7, days max <= 0 C = 45.5, frost-free 182 days (Apr 25 – Oct 26), snowfall 137.7 cm. Port Colborne and St. Catharines A are absent from the 1991-2020 composite inventory (checked: station_inventory_e.html?yr=1991); nearest 1991-2020 composites are Welland-Pelham (6139449, ~11 km NNW: Jan -4.1, 29.9 days < -10, 160 frost-free days) and Fort Erie (6132470, ~23 km E: Jan -3.8; annual day counts blank). St. Catharines A 1981-2010 (6137287, ~35 km N) also read for comparison.

## Not verified / null

- **OBC minimum foundation depth: null.** No Port Colborne deck document prints a footing depth. The Sample Deck Plan labels only sonotube, post and footing sizes and defers to OBC Division B Section 9; the deck guide asks for "Foundation system details". No mention of helical piles, CCMC or BMEC anywhere on the City's building pages or PDFs. OBC clause text not retrievable (e-Laws JS shell, compendium sold through Publications Ontario). No clause number recorded.
- **Inspection stages for decks:** not published; the City directs applicants to the permit package. The Building By-law PDF (24 pages, 5.8 MB) is a scanned image with no text layer, so it could not be read for an inspection list; no OCR run.
- **Depth to bedrock / drift thickness:** not queried (no dataset used). Unit 3 polygons and the Onondaga Escarpment chert-outcrop sentence on Wikipedia are the only evidence of shallow rock.
- **"Haldimand clay plain":** the OGS layer returns unit 8a silt and clay on the east side and north, which is consistent with the hint, but the name is not in the layer attributes and was not verified from a physiography source.
- **2026 fee schedule:** not found on the City site; the schedule read carries 2024 and 2025 columns.
- **Niagara Region upper-tier statement:** niagararegion.ca/government pages returned near-empty text through the proxy (no blocking, just JS/thin pages); the JSON cites Wikipedia's 1970 restructuring sentence instead. Permits are demonstrably issued by the City (all documents are portcolborne.ca).
- **Minor inconsistency on the City page:** the accessory-structure section prints "23-5/8” (500mm)" while the deck section and the PDF print 600 mm. Recorded as-is.

## Coordinates used (lat, lon) and result

| Point | lat, lon | Source of coordinate | Surficial | Bedrock |
|---|---|---|---|---|
| Reference | 42.89, -79.25 | task | 21 man-made | Bois Blanc |
| Downtown (Wikipedia geo) | 42.883, -79.250 | Wikipedia Port_Colborne | 21 man-made | Onondaga |
| Lakeshore Road West | 42.8778, -79.2706 | Nominatim | 21 man-made | Onondaga |
| Sugarloaf Street | 42.8806, -79.2626 | Nominatim | 17 eolian | Onondaga |
| Tennessee Avenue | 42.8797, -79.2619 | Nominatim (not separately queried; inside Sugarloaf polygon by proximity, 90 m away) | — | — |
| Nickel Beach / Lake Road | 42.8783, -79.2435 | Nominatim | 17 eolian | Onondaga |
| Humberstone, Killaly St E / Hwy 3 | 42.896, -79.230 | estimated from Wikipedia intersection description (Nominatim could not geocode the intersection) | 3 bedrock | Onondaga |
| Killaly Street West | 42.8916, -79.2740 | Nominatim | 3 bedrock | Onondaga |
| Lorraine, Weaver Road | 42.8765, -79.2044 | Nominatim | 8a silt/clay | Onondaga |
| Gasline, Pinecrest Road | 42.8858, -79.1846 | Nominatim | 8a silt/clay | Onondaga |
| Cedar Bay Road | 42.8915, -79.1746 | Nominatim | 3 bedrock | Onondaga |
| Sherkston Quarry | 42.8708, -79.1335 | Nominatim ("Sherkston" resolves to the quarry) | 3 bedrock | Onondaga |
| Pleasant Beach | 42.8642, -79.1266 | Nominatim | 17 eolian | Onondaga |
| Humberstone Marsh | 42.9201, -79.1647 | Nominatim ("Humberstone" resolves to the marsh) | 8a silt/clay | Bertie |

Wikipedia gives only one coordinate for the city; the sub-area communities are listed by intersection (Humberstone – Killaly Street and Highway 3; Lorraine – Weaver Road and Firelane 1; Gasline – Pinecrest Road and Vimy Road; Cedar Bay – Cedar Bay Road and Vimy Road; Nickel Beach – foot of Lake Road; Sugar Loaf Point – west side of Gravelly Bay). Street coordinates came from OSM Nominatim; they are street centroids, not the exact intersections. The Humberstone (Killaly E / Hwy 3) point is an estimate and should be re-queried with a surveyed coordinate before anything more precise than "unit 3" is claimed.

## Generic template claims checked

- **"4-foot frost line":** NOT supported by any Port Colborne document. Null recorded. Do not print 4 ft / 1.2 m on the Port Colborne page unless sourced elsewhere.
- **"Queenston shale":** WRONG for Port Colborne. Bedrock is Devonian Onondaga limestone (cherty), Bois Blanc limestone/dolostone near the canal and Silurian Bertie dolostone in the rural north. Shallow hard rock, not soft red shale, is the local issue.
- **"[City] Building Department":** the department's own name is "Building Division" (City of Port Colborne); the Citizen's Guide also uses "Building Department" in passing. Use "Building Division".
- **"36-inch gate":** not checked; nothing on the City's deck pages concerns gate widths. Do not claim.

## Blocked / failed hosts

- portcolborne.ca/en/business-and-development/building-permits.aspx — 404 (guessed URL); the real page is building-and-construction.aspx. Not a block.
- niagararegion.ca — reachable (HTTP 200) but pages returned almost no text; not used.
- nominatim.openstreetmap.org — two queries returned non-JSON (rate limiting); retried with different query strings.
- ECCC 1991-2020 pages for climate_id 6136606 and 6137287 — reachable but empty (stations not in the 1991-2020 composite set), so 1981-2010 used.

Tool calls used: about 17 of the 45 budget.
