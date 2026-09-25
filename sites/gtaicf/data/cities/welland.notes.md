# Welland research notes (retrieved 2026-09-25)

## Verified

- **Census (StatCan 2021 Census Profile, DGUID 2021A00053526032, Welland City CSD):** population 55,750; occupied private dwellings 23,656; structural-type total 23,660, single-detached 15,265 (64.5%); period of construction total 23,655: pre-1960 8,615 (36.4%), 1961-80 6,895 (29.1%), 1981-90 2,385 + 1991-2000 2,105 = 4,490 (19.0%), 2001-05 935 + 2006-10 715 + 2011-15 885 + 2016-21 1,115 = 3,650 (15.4%). Welland is an old housing stock: two-thirds of dwellings pre-date 1981.
- **Geology (OGS MRD128-REV surficial, MRD219 bedrock, point queries):** unit 8a fine-textured glaciolacustrine silt and clay under essentially the whole city; unit 21 man-made deposits along the canal corridor; bedrock Salina Formation (argillaceous dolostone, shale, gypsum) in the centre/south/east, Guelph Formation dolostone at the north edge. No unit 3 (bedrock at surface) and no till unit returned at any Welland point.
- **Permits (welland.ca):** authority wording "the building division of the planning and development services department"; Building Division, Civic Square, 60 East Main St., 905-735-1700 x2251/x2257, devserv@welland.ca. Fee page: "Garage, deck, shed, and sunroom Flat $199"; minimum fee $199. Timeline: "must meet the maximum timeframe allowed in the Ontario Building Code"; residential checklist header "10 day permit/decision". Portal: CityView (cviewportal.welland.ca/cityviewportal) for applications and inspection status.
- **Deck drawings hosted by the City:** GTA standard D01b prints "POURED CONCRETE PIER MIN. 1200mm BELOW GRADE ON UNDISTURBED SOIL, FOR SIZES SEE SHEET D01d"; S01a prints "minimum 1200mm below finished grade". D01d pier table by soil bearing (soft clay 40 kPa, firm clay 75, stiff clay 150, till 200, clay shale 500, sound rock 500). A01 Q&A: permits "not normally required" for "Decks which are 600mm or less from grade"; required for "Raised porches or decks". A01 is labelled general information only, and its PDF text layer is OCR-garbled (W rendered as H); the quotes were normalised to the printed words.
- **Climate (ECCC 1981-2010, Port Colborne 6136606, ~12 km south):** Jan mean -3.7 C (code A), Jan min -6.9 C, days min < -10 C 23.2/yr (code C), days max <= 0 C 45.5, days min <= 0 C 120.7, frost-free 182 days (Apr 25 - Oct 26), snowfall 137.7 cm. Check station St. Catharines A 6137287 (~24 km north): Jan mean -3.8, 26.7 days < -10 C, 46.0 days max <= 0, 179 frost-free days.
- **Dataset citations:** arcgis item 4cb9a34c... returns "Ontario Geological Survey 2010. Surficial geology of Southern Ontario; Miscellaneous Release--Data 128-REV"; GeoHub dataset 4b1bbee3... returns "Paleozoic Geology of Southern Ontario (MRD219)".

## Not verified / null

- **1991-2020 normals:** the 1991-2020 pages for 6136606 and 6137287 returned no data tables, and the station-name search (welland, niagara, vineland, port colborne, st. catharines, with and without the extra optLimit/year parameters) returned only the empty search form on every attempt. 1981-2010 used instead; note Port Colborne's record ends 2006.
- **Inspections:** no deck inspection list is published on welland.ca (searched the building pages, the residential checklist PDF and the applicant notice PDF). `inspections` is an empty array; the portal says inspection status is tracked there.
- **Deck permit threshold in Welland's own words:** the City publishes no Welland-specific deck page; only the GTA-standard A01 Q&A sheet (600 mm from grade) is hosted. Area threshold (10 m2) appears on A01 only for detached structures, not decks.
- **Helical piles / CCMC / BMEC / engineer:** no mention on any Welland deck sheet or page retrieved. The standard-drawings page only says non-standard construction needs the applicant's own drawings.
- **OBC clause:** not retrieved; `clause` is null. 1.2 m recorded because City-hosted D01b and S01a print 1200 mm.
- **Niagara Region upper-tier citation:** niagararegion.ca/government/local-municipalities.aspx and /government/about-us/default.aspx returned no matching text (one attempt each, budget); the upper/lower-tier statement rests on the task brief and welland.ca issuing the permits. Not cited in the JSON.
- **Geology hints not confirmed:** "Haldimand clay plain" and "Wentworth till" are not names carried in OGS attributes (Wikipedia has no Haldimand_Clay_Plain article); "Bertie/Onondaga at depth" was not returned by MRD219 (Salina and Guelph were). Unit 8a silt and clay is consistent with a clay plain but the name is not sourced.
- **Depth to bedrock:** not retrieved.

## Coordinates used (lon, lat) and OGS results

| Point | Lon, Lat | Surficial | Bedrock |
|---|---|---|---|
| Reference coordinate | -79.25, 42.99 | 8a silt and clay | Salina |
| Wikipedia Welland article | -79.233, 42.983 | 8a | Salina |
| Downtown guess | -79.2481, 42.9919 | 8a | Salina |
| Dain City (Wikipedia) | -79.24333, 42.94583 | 8a | Salina |
| Dain City guess | -79.2427, 42.9581 | 8a | Salina |
| Cooks Mills (Wikipedia) | -79.17889, 42.99639 | 8a | Salina |
| East Welland north of By-Pass | -79.2100, 43.0290 | 8a | Guelph |
| Fonthill border inside Welland | -79.270, 43.020 | 8a | Guelph |
| Fonthill village (Wikipedia, in Pelham) | -79.28750, 43.04389 | 9 sand and gravel | Lockport |
| Fonthill guess (Pelham) | -79.2864, 43.0387 | 9 | Lockport |
| Canal corridor north | -79.2430, 43.0100 | 21 man-made | Salina |
| Canal corridor south | -79.2600, 42.9700 | 21 man-made | Salina |
| By-Pass channel east | -79.215, 42.990 | 21 man-made | Salina |
| Southeast residential | -79.2340, 42.9870 | 8a | Salina |

## Generic template claims checked

- **"4-foot frost line":** holds as the City-hosted standard drawing figure (1200 mm on D01b and S01a). Not verified as OBC text.
- **"Queenston shale":** does NOT hold. Welland bedrock is Silurian Salina (dolostone/shale/gypsum) and Guelph dolostone; Queenston is not returned anywhere in the city.
- **"[City] Building Department":** does not hold as worded. Welland uses "Building Division" of "Planning and Development Services" (one notice PDF says "Building and Inspections Division").
- **"36-inch gate":** not found on any Welland page or PDF; no pool/gate width figure retrieved. Do not use.

## Blocked or empty hosts

- climate.weather.gc.ca 1991-2020 search and station pages: served but empty for every Niagara station tried.
- welland.ca/Building/Decks.asp and /property-information/building-or-renovating/building-permits/: 404 (old site paths).
- niagararegion.ca: pages served but no municipality text parsed; not retried.
- en.wikipedia.org Dain_City, Haldimand_Clay_Plain, Welland_By-Pass: no article at those titles (Dain_City,_Ontario and Cooks_Mills,_Niagara_Region,_Ontario exist and were used).
