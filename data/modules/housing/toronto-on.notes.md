# Source notes — toronto-on housing_age + limewash cost modules

Covers: `data/modules/housing/toronto-on.json` and `data/modules/cost/limewash-toronto-on.json`
Gathered: 2026-08-01

## Retrieval limitation (read first)

This environment's egress proxy returned **CONNECT 403 (org policy denial) for every general-web host** — statcan.gc.ca, toronto.ca, jobbank.gc.ca, homedepot.com/.ca, amazon.ca, primetimepaint.ca, romabio.com, wikipedia.org all blocked for direct fetch (WebFetch and curl both). Only server-side **WebSearch** worked. Consequences:

- Every number in both JSON files was **surfaced verbatim in web search result content** on 2026-08-01 and attributed to its source URL. Nothing was written from memory; anything not surfaced is `null`.
- This is one notch below the project's "URL you actually retrieved" bar. **Before either module renders on a published page, re-fetch each gold-source URL from an unblocked environment and confirm the numbers.** The verification targets are listed per-item below.
- Blocked hosts to report to owner/admin: `*.gc.ca` (StatCan, Job Bank), `toronto.ca`, plus all retail/contractor sites used here.

## 1. Housing age (period of construction)

| Item | Value | Source |
|---|---|---|
| Before 1945 | 14.6% | Point2Homes Toronto, ON demographics (StatCan 2021 Census aggregate) |
| 1946-1960 | 14.7% | same |
| 1961-1970 | 14.7% | same |
| 1971-1980 | 14.1% | same |
| 1981-1990 | 9.5% | same |
| 1991-2000 | 8.0% | same |
| Pre-1961 (computed) | 29.3% | sum 14.6+14.7 |
| 1961-1980 (computed) | 28.8% | sum 14.7+14.1 |
| 1981-2000 (computed) | 17.5% | sum 9.5+8.0 |
| 2001+ (computed residual) | 24.4% | 100 − 75.6; **not published by source — verify** |
| Occupied private dwellings (2021) | 1,160,892 (+4.3% vs 2016) | StatCan 2021 Census Profile snippet, Toronto City (CSD) |

- Retrieved source: <https://www.point2homes.com/CA/Demographics/ON/Toronto-Demographics.html>
- Gold source (BLOCKED, verify later): StatCan 2021 Census Profile, Toronto City (C) CSD, DGUID 2021A00053520005 — <https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=E&SearchText=toronto&GENDERlist=1&STATISTIClist=1%2C4&DGUIDlist=2021A00053520005&HEADERlist=20%2C3>
- Secondary verification (BLOCKED): City of Toronto 2021 Census Backgrounder: Housing, Figure H.1 p.16 — <https://www.toronto.ca/wp-content/uploads/2022/09/8e3a-CityPlanning-2021-Census-Backgrounder-Housing-Indigenous-Peoples.pdf>

Caveats:
- Geography: Point2Homes labels the page "Toronto, ON" (city). Almost certainly City of Toronto CSD, but the page does not state CSD vs CMA explicitly in the surfaced content — **confirm against the CSD profile**. CMA numbers would skew newer (905 suburbs), so 29.3% pre-1961 is consistent with CSD, not CMA.
- "Before 1945" vs census category boundary (1921-1945 / 1920 or before): treated as ~pre-1946.
- Census "period of construction" measures when the dwelling was built, not later renovations; universe is occupied private dwellings (2021 Census dictionary: <https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/definition-eng.cfm?ID=dwelling-logements008>).
- Point2Homes decade bins (1960s, 1970s) are re-binned census categories (1961-1970, 1971-1980) — fine for our buckets.

## 2. Heritage Conservation Districts

- **Count: 27** designated under Part V of the Ontario Heritage Act — per City of Toronto Report for Action on the Kensington Market HCD designation (early 2025): <https://www.toronto.ca/legdocs/mmis/2025/pb/bgrd/backgroundfile-251703.pdf>
- Kensington Market was itself designated **2025-02-05** by By-law 94-2025 (<https://www.toronto.ca/legdocs/bylaws/2025/law0094.pdf>; plan page <https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/kensington-market-heritage-conservation-district-plan/>). The "27" statement reads as pre-Kensington ("to date"), so the current total **may be 28 — verify on the main HCD page before publishing a count**: <https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-conservation-districts-planning-studies/> (BLOCKED for direct fetch today). An older 2020-era source said 21; the 27 figure is the most recent and best-attributed.
- Named HCDs (from City Planning HCD PDF <https://www.toronto.ca/wp-content/uploads/2019/04/9512-CityPlanning-Toronto-Heritage-Conservation-Districts.pdf> and Kensington materials): Cabbagetown (Metcalfe, North, Northwest, South), Wychwood Park, Harbord Village (I & II), South Rosedale, North Rosedale, Queen Street West, Draper Street, East Annex, Fort York, Union Station, Weston, Yorkville-Hazelton, Riverdale, Blythwood Road, Kingswood Road South, Lyall Avenue, Kensington Market (2025).
- Alteration rule (basis for the module's one-liner): HCD properties are designated under **Part V of the Ontario Heritage Act**; certain alterations/renovations require a **heritage permit**, with each district's HCD Plan defining which; alteration proposals are reviewed by Heritage Planning via the building permit application. Sources: Heritage Permit Guide <https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/>; HCD FAQ (May 2018) <https://www.toronto.ca/wp-content/uploads/2018/05/90a0-HCD-FAQ_2018.pdf>. Note for copy: do **not** claim "limewashing always needs a permit" — the retrieved language is "certain types of alterations… the HCD Plan will explain when a heritage permit is required."

## 3. Painter wages (NOC 73112)

- Toronto region (Job Bank "Painter and Decorator near Toronto (ON)", NOC 73112): **low $20.00 / median NOT SURFACED / high $39.45 per hour**, wages updated **2025-11-19**. URL: <https://www.jobbank.gc.ca/marketreport/wages-occupation/6520/22437> (BLOCKED for direct fetch; range + update date surfaced in search content across 3 independent queries).
- Context: Ontario $20.00-$34.80 (<https://www.jobbank.gc.ca/marketreport/wages-occupation/6521/ON>); Canada $20.00-$40.99 (<https://www.jobbank.gc.ca/marketreport/wages-occupation/6520/ca>).
- **Median is null** — four query formulations failed to surface it; do not estimate. Rejected: $29.00/hr median that surfaced for "Apprentice Industrial Painter and Decorator" (different occupation page, 6517/22437); PayScale C$28.68 average (different metric/source, not Job Bank).
- Ontario labour-market profile for NOC 73112 (secondary, BLOCKED): <https://services.labour.gov.on.ca/labourmarket-ui/jobProfile?nocCode=73112> (~6,520 employed in Toronto region; outlook Moderate 2025-2027 — surfaced in search content).

## 4. Material cost (Romabio Classico Limewash)

- **CAD price: null.** No Canadian retailer price surfaced in any search snippet, and every retailer page was egress-blocked. Confirmed CAD availability: Primetime Paint & Paper, Toronto (pickup Downtown Toronto & Etobicoke Lakeshore, ships Canada-wide) <https://primetimepaint.ca/products/romabio-classic-limewash>; Amazon.ca listing (sold via Primetime) <https://www.amazon.ca/Romabio-Classico-Limewash-Interior-slaked-Lime/dp/B07L8N4JD9>; also shop.birchandbenjamin.com and romabio.ca. **Fetch one of these for a CAD price before publish.**
- US reference prices (homedepot.com, USD, surfaced 2026-08-01, EST):
  - Bianco White 0.67 gal (2.5L): **$62.81** — <https://www.homedepot.com/p/ROMABIO-0-67-Gal-Bianco-White-Limewash-Interior-Exterior-Paint-1012E1/302796971>
  - Avorio White 0.67 gal (2.5L): **$54.56** — <https://www.homedepot.com/p/ROMABIO-0-67-Gal-Avorio-White-Limewash-Interior-Exterior-Paint-1012E2/302796945>
  - (Earlier snippet also showed 4-gal/15L pails ~$264-$291 USD; less firmly pinned, left out of the JSON.)
- Coverage (manufacturer <https://romabio.com/classicolimewash/> + TDS <https://romabio.com/wp-content/uploads/2020/11/Classico-Limewash-TDS-1120.pdf>): **325-450 sq ft per average gallon after 50% dilution**; by container: 1L 90-120 sq ft, 2.5L 215-300 sq ft, 15L 1300-1800 sq ft. Toronto retailer listing states 2.5L 175-300 sq ft / 15L 1050-1800 sq ft — minor discrepancy, manufacturer figures used.
- Alternative brand with CAD price: **not found** (gap). Meoded Classico Limewash exists at US dealers; no price surfaced.

## 5. Job cost anchors (all EST)

1. **Angi (US, USD):** professional limewash $1.50-$5.00/sq ft; $1,500-$6,700 whole house — <https://www.angi.com/articles/limewash-brick.htm>
2. **HomeGuide (US, USD):** limewash a brick house $1.50-$5.00/sq ft or $1,500-$6,700 typical home; whitewash 2,500 sq ft house $2,225-$4,000 — <https://homeguide.com/costs/cost-to-paint-a-brick-house>
3. **Venetian Plaster Shop (Toronto, CAD, 2026 guide):** residential exterior limewash $6-$12/sq ft; exterior limewash on brick $4-$8/sq ft; commercial $8-$16/sq ft; one surfaced phrasing was "$4-$8/sq ft plus 13% HST… typical two-storey detached; repointing/stripping/scaffold push costs higher" — <https://venetianplastershop.ca/cost-estimate-for-limewash-exterior-walls-in-canada-2026-guide/>. Two searches surfaced overlapping-but-different ranges from this page; verify exact wording before quoting one range.
4. **Chromatist (Toronto, CAD):** decorative interior limewash from $12/sq ft (accent walls) — <https://www.chromatist.com/decorative-wall-finishes/limewash-accent-wall/>

Currency note: US anchors are USD national averages; Toronto CAD anchors run meaningfully higher ($4-$12/sq ft). On-page copy should anchor on CAD figures per project convention (Canada: local currency), using US figures only as marked context.

## Open gaps (blocking or pre-publish TODO)

1. **Job Bank Toronto median wage** — null; fetch <https://www.jobbank.gc.ca/marketreport/wages-occupation/6520/22437> when unblocked.
2. **Romabio CAD retail price** — null; fetch Primetime/Amazon.ca/Birch & Benjamin when unblocked.
3. **StatCan CSD confirmation** of Point2Homes percentages + the computed 2001+ residual (24.4%).
4. **HCD count 27 vs 28** (post-Kensington) — confirm on toronto.ca.
5. Alternative limewash brand CAD price — nice-to-have.
