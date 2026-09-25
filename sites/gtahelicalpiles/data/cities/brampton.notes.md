# Brampton research notes (2026-09-25)

Companion to `brampton.json`. Reference coordinate 43.68341, -79.76633 (downtown, near Queen/Main). Region: Peel Region (Wikipedia Brampton article: "a lower-tier municipality within the Peel Region"; the peelregion.ca About page was fetched but its text did not name the member municipalities in the rendered HTML, so the Region's own page is not cited).

## Verified

**Census (Statistics Canada 2021 Census Profile, CSD 2021A00053521010, "Brampton, City (CY)")**
- Population 2021: 656,480. Private dwellings occupied by usual residents: 182,472. Density 2,469.0/km2.
- Structural type (100% data), total 182,475: single-detached 96,020 = 52.6%.
- Period of construction (25% sample), total 182,475: 1960 or before 7,600 (4.2%); 1961-1980 35,165 (19.3%); 1981-1990 25,285; 1991-2000 26,260 (1981-2000 = 51,545 = 28.2%); 2001-2005 28,550; 2006-2010 21,420; 2011-2015 20,910; 2016-2021 17,285 (2001-2021 = 88,165 = 48.3%). Sums to 100.0%.

**Geology (OGS ArcGIS feature services, MRD 128-REV layer 3 and MRD 219 layer 4, point queries)**

| Point | Lat, Lon | Source of coordinate | Surficial | Bedrock |
|---|---|---|---|---|
| Reference (downtown) | 43.68341, -79.76633 | task | 5d till (clay to silt) | Queenston |
| Brampton GO Station | 43.68694, -79.76472 | Wikipedia | 5d | Queenston |
| Bramalea (article coord) | 43.725, -79.7175 | Wikipedia "Bramalea, Ontario" | 5d | Georgian Bay |
| Bramalea City Centre | 43.716589, -79.723921 | Wikipedia | 5d | Georgian Bay |
| Bramalea GO Station | 43.70194, -79.69111 | Wikipedia | 8b fine glaciolacustrine silt/clay | Georgian Bay |
| Heart Lake Conservation Area | 43.742, -79.795 | Wikipedia | 5d | Queenston |
| Springdale | 43.7539, -79.7695 | OpenStreetMap Nominatim neighbourhood node | 5d | Queenston |
| Castlemore | 43.79095, -79.6897 | Wikipedia | 8b | Georgian Bay |
| Mount Pleasant | 43.67667, -79.81861 | Wikipedia | 5d | Queenston |
| Churchville | 43.63, -79.75556 | Wikipedia "Churchville, Brampton" (Nominatim agrees: 43.6311, -79.7573) | 9c coarse glaciolacustrine sand/gravel | Queenston |
| Snelgrove | 43.73389, -79.82444 | Wikipedia | 5d | Queenston |

- All 5d hits are one polygon (OBJECTID 89680). MRD219 attributes: Queenston = unit 16, "red shale and siltstone, minor green shale and siltstone, and variable calcareous siltstone to sandstone and limestone interbeds"; Georgian Bay = unit 14, "interbedded grey-green to dark grey shale and fossiliferous calcareous siltstone to bioclastic limestone"; source map m2337.
- Item citation (arcgis.com item 4cb9a34c...) and GeoHub MRD219 record both retrieved and cited.
- Wikipedia "Heart Lake Conservation Area": 169 ha, Etobicoke Creek watershed, TRCA, "surficial geology of glacial till and river deposits".

**Permits (City of Brampton Building Division)**
- Current deck page (the old /Pages/Decks.aspx URL is a 404): https://www.brampton.ca/EN/residents/Building-Permits/Zoning/Pages/DecksandPorchesandPatios.aspx . Permit required if attached/anchored to the house or 0.6 m or more above ground; not required if under 0.6 m and detached. Zoning setbacks apply; CVC/TRCA approval needed first in regulated areas (Homeowners page).
- Deck package PDF (Documents/Homeowners/Deck Package.pdf, revised Feb 2026, 8 pages; pages 4-8 are image-only drawings, rendered and read visually): concrete piers 8/10/12 in. dia. "MINIMUM 4'-0" BELOW GRADE"; General Note 7 piers bear on undisturbed soil, bearing capacity determined prior to construction; Note 10 halve bearing pressure with water at footing; soil bearing table (soft clay 40 ... till 200, clay shale 300, sound rock 500 kPa). No mention of helical piles, CCMC, BMEC or engineer requirements. Application checklist: Schedule 1 Designer Information, Applicable Law Checklist, site plan + legal survey, plan and section drawings with "location, depth, size and spacing of piers". Stair sheet shows "36" MIN." stair width and 36" handrail where more than 3 risers.
- 2026 Permit Fee Schedule (revised Feb 2026): Deck flat fee $326.21; residential minimum fee $326.21.
- Timeline: Standard Permit Application Service, "review of your application within 10 business days" (Homeowners page; deck package says "Standard 10 Day Permit Application Service").
- Mandatory Inspections for Decks PDF: Footing, Structural Framing, Final. Inspections 8-4 Mon-Fri, bookable 5 days ahead, 3 pm cut-off.
- Portal: https://bramptonbbp.brampton.ca/citizenportal/ ("Brampton Building & Business Portal", HTTP 200).

**Climate (ECCC 1991-2020, Toronto Pearson 6158731, 10.9 km SE of reference by haversine)**
- Jan daily average -5.0 C; Jan daily minimum -8.9 C; days min < -10 C: 34.2 (minimum-temperature table); days min < -2 C: 101.0; days min <= 0 C: 130.6; days max <= 0 C: 49.5; frost-free 174 days (Apr 27 - Oct 20); snowfall 114.5 cm.
- ECCC 1981-2010 station-name search "brampton" returned no station.

**Code**: obc_min_foundation_depth_m = 1.2, sourced from the Brampton drawings' 4'-0" (1.22 m). Clause null; ontario.ca compendium page fetched today and confirms the Compendium is distributed via Publications Ontario.

## Not verified / null
- "Halton Till" and "Peel Plain" names: OGS attributes only say "clay to silt-textured till (derived from glaciolacustrine deposits or shale)". Wikipedia lookups for Peel Plain, Queenston Formation and Halton Till hit HTTP 429 rate limits (two attempts: action API and REST summary). Not asserted in JSON beyond a caveat.
- Depth to bedrock: no drift-thickness dataset queried; no query point returned OGS unit 3 (bedrock at surface).
- Etobicoke Creek / Credit River valley geology: no point was placed in a valley bottom other than Churchville (Credit River, 9c). Wikipedia Etobicoke Creek summary retrieved (TRCA jurisdiction, Caledon to Etobicoke) but adds no geology.
- Heart Lake residential neighbourhood: no Wikipedia article (page missing); only the conservation area point was queried.
- Peel Region's own page: fetched (HTTP 200) but member-municipality text not present in HTML; Wikipedia Brampton article used instead.
- Helical pile, CCMC/BMEC and engineer requirements: none stated in Brampton's deck package; absence recorded, not inferred.

## Template claims checked against this city
- "4-foot frost line": holds as the City's printed minimum pier depth (4'-0" below grade on the deck drawings). Not a frost-depth measurement.
- "Queenston shale": holds for west and central Brampton including downtown; east Brampton (Bramalea, Castlemore) is Georgian Bay Formation. Say both.
- "[City] Building Department": does not hold; the department is the "Building Division" (Permits Section; "Building Services" for inspection email). Use "City of Brampton Building Division".
- "36-inch gate": not found; nothing about gates in the deck package. The only 36" figures are stair width and handrail on the stair section. Do not use.

## Blocked / failed hosts
- en.wikipedia.org: HTTP 429 on the third and fourth API calls (earlier calls succeeded); Peel Plain / Queenston Formation / Halton Till summaries not retrieved.
- html.duckduckgo.com: returned no results for the site search (empty result list); brampton.ca navigation used instead.
