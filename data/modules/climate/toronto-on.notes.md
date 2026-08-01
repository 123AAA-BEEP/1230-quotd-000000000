# Climate / curing-window module — Toronto, ON — research notes

Retrieved: 2026-08-01. Companion to `toronto-on.json`. No number in the JSON is fabricated; every value traces to a page/file listed below, and gaps are explicit nulls.

## Retrieval conditions (read first)

This environment's egress proxy returned HTTP 403 (CONNECT denied) for **climate.weather.gc.ca**, **api.weather.gc.ca**, and *all* direct page fetches (including en.wikipedia.org and example.com — WebFetch and curl both blocked). Working channels were: web-search result digests, and **git read access to public GitHub repositories**. The gold ECCC normals pages could therefore not be opened directly. The monthly table instead comes from the **official WMO record of the same ECCC-submitted normals** (below), read in full from the actual file — this is a stronger basis than search snippets, but the ECCC page remains the canonical verification target before the publish gate (spec §5.4).

## Station

**Toronto City** (downtown, "the weather office" station), not Toronto Pearson.

- CLINO datasheet header: `Station_Name TORONTO CITY`, WMO 71508, WIGOS 0-20000-0-71508, 43°39′54″N 79°23′42″W, elev 113 m.
- Identity binding WMO 71508 ↔ ECCC climate ID **6158355** ↔ TC id XTO (43.6667, −79.4, 112.5 m, Climate-Auto, ECCC-MSC): ECCC-MSC station list mirrored at
  https://github.com/June-Skeeter/CA_wxData_Download/blob/main/station_list/Stations.csv
- ECCC published its "TORONTO CITY" 1991–2020 normals on 2024-03-27 (surfaced in search digests).
- **Why not Pearson:** no 1991–2020 CLINO sheet exists for Pearson, and the money page is about Toronto proper; the downtown lakeshore microclimate is the right one for city homeowners. Cross-source discrepancies seen during research (e.g. January mean −5.4 °C on climatestotravel.com vs −3.5 °C here) are **station differences** (Pearson/inland runs ~1–2 °C colder in winter), not data errors.

## Primary data source (all monthly values)

**WMO Climatological Standard Normals 1991–2020 (CLINO), Toronto City 71508** — the normals ECCC submitted to WMO, hosted by NOAA NCEI, mirrored in the **official WMO GitHub organization** repo (`wmo-im`), commit `59660ef` (2024-10-18, "add all the data from ncei server"):

- File: https://github.com/wmo-im/WMO-climatological-normals-CLINO/blob/main/data/Region-4-WMO-Normals-9120/Canada/CSV/Toronto_City_71508.csv
- Upstream product: https://www.ncei.noaa.gov/products/wmo-climate-normals
- Repo README states the data is sourced from the official NCEI WMO Climate Normals repository.
- Cross-parse check: independent repo `nh28/WMO-Normals` (`src/Output/1991-2020_Normals_Canada_TORONTO CITY.csv`) contains byte-identical values (same NCEI origin — a parse check, not an independent measurement).

### Values transcribed from the CLINO file (1991–2020 normals)

| Month | Daily mean °C | Daily min °C | Daily max °C | Precip mm | Days ≥1 mm | Days min ≤0 °C | Days max ≥30 °C |
|---|---|---|---|---|---|---|---|
| Jan | −3.5 | −6.7 | −0.3 | 64.6 | 10.3 | 25.6 | 0 |
| Feb | −2.7 | −6.0 | 0.6 | 53.8 | 8.5 | 23.5 | 0 |
| Mar | 1.7 | −1.8 | 5.1 | 52.8 | 8.5 | 18.5 | 0 |
| Apr | 7.8 | 3.9 | 11.6 | **null** | 9.5 | 4.7 | 0 |
| May | 14.4 | 10.0 | 18.8 | 76.4 | 8.9 | 0.2 | 0.5 |
| Jun | 19.8 | 15.3 | 24.2 | 81.6 | 8.2 | 0.0 | 3.2 |
| Jul | 22.5 | 18.1 | 27.0 | 76.5 | 8.1 | 0.0 | 6.4 |
| Aug | 21.9 | 17.6 | 26.1 | **null** | 7.1 | 0.0 | 3.4 |
| Sep | 17.9 | 13.8 | 22.0 | 69.4 | 7.7 | 0.0 | 1.1 |
| Oct | 11.2 | 7.7 | 14.6 | 69.0 | 9.0 | 0.5 | 0 |
| Nov | 5.2 | 2.3 | 8.1 | 70.8 | 9.1 | 8.4 | 0 |
| Dec | −0.1 | −2.7 | 2.6 | **null** | 9.7 | 19.8 | 0 |
| **Annual** | 9.7 | 6.0 | 13.4 | (831, ECCC) | 104.6 | 101.2 | 14.6 |

Also in the file (used for derivations): days with max <0 °C ("ice days") Jan 15.1, Feb 12.3, Mar 5.5, Apr 0.3, Nov 1.0, Dec 8.6 — **annual 42.8**.

### Why Apr/Aug/Dec precipitation is null

In the CLINO submission those three cells are blank **and** their number-of-years (NOY) row is blank — too few complete years at the 2003-commissioned Toronto City AWS to meet the WMO completeness threshold for those months. ECCC's own page publishes values for them (with completeness codes) but is egress-blocked, and no faithful transcription of exactly those three cells was reachable via search digests (digests kept substituting other stations/periods, which would violate the no-fabrication rule). **Bound, not guessed:** ECCC annual = 831 mm (below); the nine populated months sum to 614.9 mm; so Apr+Aug+Dec ≈ **216 mm combined (~72 mm/month)** — in line with neighbouring months. Days-with-precip ≥1 mm are populated for all 12 months, which is what the cure-window logic actually uses.

## Cross-checks performed

1. **Annual precipitation:** Wikipedia's Toronto weatherbox (transcribing ECCC 1991–2020 Toronto City) states **831 mm/yr** (search digest, https://en.wikipedia.org/wiki/Template:Toronto_weatherbox). CLINO's nine populated months sum to 614.9 mm, leaving a plausible ~216 mm for the three missing months. Coherent. ✔
2. **July temperatures:** an independent digest (extremeweatherwatch/currentresults family) quoted July high **27.0** / low **18.1** — exactly the CLINO values. ✔
3. **Internal sums:** monthly frost days sum to the file's annual 101.2 exactly; ice days sum to 42.8 exactly. ✔
4. **January discrepancy explained:** climatestotravel.com's Jan −5.4/−9.2/−1.7 is a Pearson-flavoured series; not applicable to Toronto City. Documented so nobody "corrects" the table with it later. ✔

## Frost dates (secondary sources — conflict documented)

No ECCC-published 1991–2020 frost-date normal was reachable. Gardening/almanac sources (all ECCC-normals-derived, ~33–50% probability of 0 °C) split by station siting:

| Source | Last spring frost | First fall frost | Frost-free days |
|---|---|---|---|
| Plantmaps (Toronto climate data page) | Apr 11–20 | Nov 1–10 | — |
| GrowersGuide.ca (urban core, claims ECCC 1991–2020 50th pct) | Apr 20 | Nov 1 | 197 |
| FrostDates.com (station basis unstated; inland-flavoured) | ~May 1 | ~Oct 4 | ~156 |
| Almanac.com (method confirmed: 33% probability, ECCC 1981–2010 normals) | table not retrievable | table not retrievable | — |

**Adopted: ~Apr 20 / ~Nov 1 / 197 days (downtown)**, because the official CLINO frost-day distribution for Toronto City corroborates the downtown pair: April still averages **4.7** frost days vs May **0.2** (last frost ⇒ April); October averages only **0.5** vs November **8.4** (first frost ⇒ usually early November downtown). The inland pair (~May 1 / ~Oct 4 / ~156 d) is kept in the JSON strings as the conservative end for suburban GTA readers. Caution: GrowersGuide contains at least one sloppy claim elsewhere ("longest growing season of any major Canadian city" — false vs. coastal BC), so its dates are used only where corroborated by Plantmaps + the CLINO distribution, which they are.

URLs: https://www.plantmaps.com/en/clim/c/ca/ontario/toronto/climate-data · https://growersguide.ca/blog/toronto-planting-guide · https://growersguide.ca/blog/first-frost-date-toronto · https://frostdates.com/canada/ontario/toronto · https://www.almanac.com/gardening/frostdates/ON/Toronto

## Freeze–thaw

- **Published count: null.** The peer-reviewed source exists — Ho & Gough (2006), *Freeze thaw cycles in Toronto, Canada in a changing climate*, Theor. Appl. Climatology 83:203–210, https://link.springer.com/article/10.1007/s00704-005-0167-7 (per-station observed averages in its Table 1; downtown trend decreasing) — but the table values were not retrievable from this environment, and the "40–65 cycles/year" figure circulating on contractor blogs could not be traced to a quotable primary page. Per the brief, the JSON field is null.
- **Derived proxy (in JSON under `derived`):** days/year crossing 0 °C = frost days − ice days = **101.2 − 42.8 = 58.4**, both terms from the CLINO file. This is the standard freeze-thaw-day definition (min ≤0 °C, max >0 °C). If rendered on-page, label it "derived from ECCC/WMO 1991–2020 normals", never as a published cycle count.

## Derivation: exterior limewash application window

Rule applied: **sustained 5–30 °C with limited rain through a 48–72 h cure** (nights count — carbonation continues overnight, so the month's normal daily *minimum* is the binding constraint; frost during cure is the fatal failure mode for limewash).

Mechanical test on the normals (min ≥5 °C AND max ≤30 °C):

- Pass: **May** (10.0/18.8), **Jun** (15.3/24.2), **Jul** (18.1/27.0), **Aug** (17.6/26.1), **Sep** (13.8/22.0), Oct (7.7/14.6).
- Fail: Apr (min 3.9), Nov (min 2.3), Dec–Mar (min −1.8 to −6.7; Dec–Feb max ≤2.6 also fails the practical floor).

Adjustments for 48–72 h realism:

- **Oct → marginal** despite passing the naive test: the monthly normal min (7.7) averages a mild first half against a cold back half sliding toward the ~Nov 1 median first frost; a 72 h cure started in late October risks sub-5 °C nights. Practical read: full-quality window through roughly mid-October, forecast-dependent after.
- **Apr → marginal** rather than excluded: min 3.9 is just under the floor and April's 4.7 frost days cluster early in the month; late-April 72 h frost-free windows are routinely available with a forecast check (last frost ~Apr 20).
- **Jul/Aug stay full with a heat caveat:** July normally has 6.4 days ≥30 °C (Aug 3.4, Jun 3.2). Mean daily highs stay ≤27.0 °C, so these are scheduling caveats (avoid heat waves and direct-sun flash drying), not disqualifiers.
- **Rain:** all candidate months have 7.1–9.0 days ≥1 mm (23–29% of days) — a dry 48–72 h stretch exists in every window month but always needs forecast confirmation. Naive dry-run odds, P(3 consecutive dry days) ≈ (1 − f)³ with f = rain-day fraction: **Aug ≈ 0.46 (best)**, Sep ≈ 0.41, May ≈ 0.40, Jul ≈ 0.41, Jun ≈ 0.43, Oct ≈ 0.36 (worst of season). August–September are the sweet spot: warm-not-hot, fewest rain days, frost-free.

**Result:** `full_months = [may, jun, jul, aug, sep]`, `marginal_months = [apr, oct]`; Nov–Mar excluded (frost during cure).

## Caveats / to-do before publish gate

1. **Verify against ECCC directly** (climate.weather.gc.ca → Normals 1991–2020 → TORONTO CITY, climate ID 6158355) from an unblocked network: all 36 temperature cells, the 9 precip cells, and fill the 3 null precip cells (Apr/Aug/Dec) with ECCC's coded values.
2. Frost dates are gardening-grade secondary figures, not ECCC normals — keep the "~" and the downtown-vs-inland spread if rendered; do not present as ECCC-published.
3. `freeze_thaw_days_0c_crossings = 58.4` is derived; label as such on-page or keep internal.
4. Toronto City AWS record starts mid-2002; CLINO NOY rows show 24–30 yrs per element (ECCC threads earlier downtown records for its official page — another reason the ECCC page is the final word).
5. Do not mix Pearson figures into this module; if a Pearson variant is ever needed for suburban pages, build it as a separate entry.
