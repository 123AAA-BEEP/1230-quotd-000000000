# Search-demand trajectory of candidate "trending" residential finishes — Canada & GTA, 2019–Nov 2026 (limewash as benchmark)

**Method note (read first).** Google Trends gives *relative* interest (0–100), not volumes, and Canada-level data for niche terms is noisy (months with 0 = below Google's reporting threshold, not literally zero). All Trends figures below were pulled programmatically on 2026-11-04 (pytrends, `hl=en-CA`, timeframe 2019-01-01→2026-11-01, monthly granularity) for `geo=CA` and `geo=CA-ON`. Two kinds of pulls were made:

1. **Single-term pulls** (each term on its own 0–100 scale) → used for *curve shape*: annual means, peak month, first month ≥25% of peak, current level (Aug–Oct 2026 mean) vs peak, YoY.
2. **Limewash-anchored batch pulls** (term + "limewash" in the same request, so the scale is shared) → used for *relative size vs limewash*. "rel-LW-2026" = term's 2026 mean ÷ limewash's 2026 mean in the same batch. Each batch can be reproduced at `https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,<term>`.

Google Trends has **no sub-provincial geo for Canada** (no Toronto/GTA DMA); Ontario (`CA-ON`) is the closest proxy, and the region breakdown that Google returns for Canada is provinces only. "Measured" = numbers read from a tool/report. "Estimate" = my inference, flagged as such.

**Today is 2026-11-04.** Houzz "emerging trends" figures are Houzz on-site searches (not Google), Jan–Mar of the stated year vs the same quarter a year earlier, in the stated country.

---

## KQ1. What did limewash's curve look like in Canada 2019–2026 (the benchmark), and how does it calibrate to the owner's GSC data?

### Takeaway
Limewash in Canada went from near-threshold (2019 annual index 5) to a 2021 take-off (index 19, first month ≥25% of peak = May 2021), compounded ~+40–58%/yr through 2022–2024 (30→42→56), +32% in 2025 (74), and has now flattened (2026 YTD 79, +8%; peak Jan 2026 = 100; Aug–Oct 2026 = 77% of peak). The "limewash 2022–23 stage" the owner wants to match is therefore: **~0.4–0.55× of limewash's current level, growing 40–60% YoY, with consumer searches already in named form, and person-form queries still below Trends' threshold.**

### Cited Findings
- **Canada, "limewash", annual mean of monthly index (own scale, peak Jan 2026 = 100):** 2019: 5 · 2020: 11 · 2021: 19 · 2022: 30 · 2023: 42 · 2024: 56 · 2025: 74 · 2026 YTD: 79. YoY: 2022 +58%, 2023 +41%, 2024 +33%, 2025 +32%, 2026 YTD +8%. First month ≥25% of peak: 2021-05. Peak month: 2026-01 (100). Aug–Oct 2026 mean = 77% of peak. — [Google Trends CA, limewash](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash) (pulled 2026-11-04)
- **Canada quarterly, limewash (5-term batch with microcement/venetian plaster/roman clay/tadelakt; limewash=100 scale):** Q1-2019 3 · Q2-2020 11 · Q2-2021 23 · Q1-2022 32 · Q3-2022 34 · Q1-2023 46 · Q3-2023 46 · Q1-2024 55 · Q4-2024 58 · Q1-2025 71 · Q3-2025 83 · Q1-2026 84 · Q2-2026 76 · Q3-2026 82 · Oct-2026 72. — [Google Trends CA, 5-term batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt)
- **Ontario, "limewash" (own scale):** 2019: 5 · 2020: 11 · 2021: 28 · 2022: 37 · 2023: 49 · 2024: 63 · 2025: 75 · 2026: 75 (+7% YTD). First ≥25%: 2021-02. Peak 2026-01. Aug–Oct 2026 = 70% of peak. Ontario took off ~3 months before Canada overall and has flattened a year earlier. — [Google Trends CA-ON, limewash](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA-ON&q=limewash)
- **Canada, "limewash paint" (own scale):** 2019: 0 · 2021: 19 · 2022: 36 · 2023: 52 · 2024: 61 · 2025: 74 · 2026: 76 (+5%). "limewash paint" runs at ~0.40× the bare "limewash" term in the same batch (2026: 31.7 vs 78.8). "lime wash" (two words) = 0.58× and is still growing (+25% 2026). — [Google Trends CA, limewash vs limewash paint vs lime wash](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,limewash%20paint,lime%20wash)
- **Provincial share, limewash (Nov 2024–Nov 2026, index):** Québec 100, Manitoba 97, BC 92, **Ontario 87**, Alberta 84, Saskatchewan 83, Nova Scotia 72. (Index is per-capita share, so Ontario still has the largest absolute pool.) — [Google Trends CA, limewash, region view](https://trends.google.com/trends/explore?date=2024-11-01%202026-11-01&geo=CA&q=limewash)
- **Top related queries, limewash, Canada 2024–2026:** limewash paint (100), limewash wall (23), limewash walls (21), brick limewash (16), limewash wallpaper (11), what is limewash (9), limewash fireplace (9), romabio (7), faux limewash (6), diy limewash (6), bauwerk limewash (6), sherwin williams limewash (5), limewash bathroom (5), limewash brush (5), venetian plaster (2). **Rising:** limewash beige +250%, venetian plaster +250%, limewash brush +150%, faux limewash paint +140%, faux limewash +110%, limewash wallpaper +70%, sherwin williams limewash +60%. — [Google Trends CA, limewash related queries](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=limewash)
- **US (leading indicator, labelled US):** limewash annual index 2019: 14 · 2022: 32 · 2023: 39 · 2024: 47 · 2025: 56 · 2026: 68; peak Apr 2026; still rising (not yet flat like Canada). — [Google Trends US batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=US&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt)
- **UK (leading indicator, labelled UK):** limewash 2019: 14 → 2023: 45 → 2024: 62 → 2025: 76 → 2026: 91; peak Aug 2026; still rising. — [Google Trends GB batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=GB&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt)
- **Houzz US 2026 (Jan–Mar 2026 vs Jan–Mar 2025):** "limewash interior paint" searches +53%; "Venetian plaster" +94%; linen wallpaper +104%; seagrass wallpaper +94%; sandstone +257%; wainscoting +32%; arched range hood +177%; arched pantry door +130%; terracotta flooring +55%. — [Houzz 2026 U.S. Emerging Summer Trends Report](https://blog.houzz.com/2026-u-s-houzz-emerging-summer-trends-report/)
- **Houzz UK 2026 (Jan–Mar 2026 vs 2025):** Limewash +109%; Venetian plaster +82%; Stone wall +148%; Natural stone +96%; Modern organic +91%; Wallpapered ceiling +88%. — [Houzz UK 2026 Emerging Trends Report (PDF)](https://st.hzcdn.com/static/econ/2026UKHouzzEmergingTrendsReport.pdf)
- **Yelp (US, searches 2022 vs 2021):** "limewash paint" searches +79% — the earliest published limewash growth stat I found, i.e. the US was in the equivalent of Canada's 2022 stage. — [NBC New York / Yelp 2023 trend forecast](https://nbcnewyork.com/entertainment/the-hottest-food-beauty-and-home-trends-expected-for-2023/4019451)
- **Exploding Topics (global/US-weighted, estimate tool):** "limewash paint" 74K monthly searches, +2,850% growth, status "exploding", first tracked 4 Jul 2023. (An earlier snapshot of the same page showed 60.5K / +567% — the growth figure depends on the window chosen.) — [Exploding Topics: limewash paint](https://explodingtopics.com/topic/limewash-paint?period=120)
- **Keyword-tool volume (global, Google-Ads-style rounded buckets):** "limewash" 90,500/mo global (monthly Oct 2025–Sep 2026 oscillating 74,000–110,000; high point Nov 2025). No Canada breakdown given. — [RankHero: limewash](https://www.rankhero.com/keywords/limewash)
- **Owner GSC calibration point (supplied in brief, not independently verifiable):** "limewash painter toronto" ≈ 322 impressions/month at avg. position 3.5 in 2026 for torontolimewash.com. In Google Trends, "limewash painter", "limewash toronto", "limewash contractor", "limewash near me" all register **0 in 93–95 of 95 months** for Canada; "limewash painter" shows a single blip (index 6–7 in Aug 2026, CA; 39 in Nov 2026 partial month, ON) and "limewash toronto" a single blip (Oct 2026). — [Google Trends CA, person-form batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash%20toronto,venetian%20plaster%20toronto,microcement%20toronto,plasterer%20toronto,limewash%20painter)

### Inferences
- **Calibration rule for this project:** a query running at ~300 impressions/month in Toronto is *invisible* in Canada-level Trends (0s with occasional blips). So any person-form term for any candidate finish will also be invisible in Trends; person-form demand must be inferred from head-term ratios (KQ4), not read directly.
- **Rough absolute scale (estimate):** if the single query "limewash painter toronto" is ~300–400 searches/mo and Toronto is ~20% of Canadian search, the Canadian "limewash" head term is plausibly in the 5,000–12,000/mo range (consistent with Trends showing it 3.4× "venetian plaster", which RankHero puts at 27,100/mo in the US — Canada is typically 8–16% of US for English home terms, e.g. "plaster" CAN 8,100 vs US 49,500 per [RankHero: plaster](https://www.rankhero.com/keywords/plaster)). Treat as an order-of-magnitude anchor only.
- Limewash in Canada/Ontario is now **plateau-phase** (2026 YTD +5–8%, Ontario flat), while the US (+21%) and UK (+20%) are still climbing — so Canada led the US on limewash by ~12 months, which is unusual and worth remembering when using US data as a "leading indicator" for other finishes: for plaster-type finishes the UK, not the US, is the better leading market.
- Limewash's own rising queries point to where the *next* demand goes: "venetian plaster" (+250%) and "faux limewash"/"limewash wallpaper" (cheaper substitutes), i.e. the plaster-look family is cannibalising upward (venetian/microcement) and downward (faux/wallpaper).

### Gaps
- No tool with free Canada-specific monthly volumes for "limewash" was found (Ahrefs/Semrush/Keywords Everywhere pages are JS/auth-gated; RankHero gives no CAN split for limewash). Keyword Planner (CA, Toronto radius) would close this.
- Trends monthly values are sampled; re-pulling can shift single months by ±5–10 points. Annual means are robust.

---

## KQ2. For each candidate finish: Google Trends curve shape (Canada and Ontario), first year ≥25% of peak, peak month, current level vs peak (late 2026), YoY growth, and size relative to limewash

### Takeaway
Only **microcement** (and its two-word variant "micro cement") reproduces limewash's 2022–23 curve in Canada and Ontario: it is now at 0.51–0.58× limewash's current level (≈ limewash's 2023 level), growing 30–60% YoY, peaked Q1 2026 and dipped in H2 2026 exactly as limewash does seasonally. **Roman clay** is at limewash's 2020–21 (pre-inflection) stage; **slat/fluted panels** are at limewash-2022 *size* but with product intent and fluted already plateauing; **venetian plaster** is a mature plateau showing a 2026 re-acceleration; brick finishes, shou sugi ban, wainscoting and mineral paint are past peak.

### Cited Findings

**Table A — Canada, single-term curves (own 0–100 scale). Columns: annual mean 2019 / 2021 / 2022 / 2023 / 2024 / 2025 / 2026 YTD · first month ≥25% of peak · peak month · Aug–Oct 2026 as % of peak · YoY 2025 · YoY 2026 YTD · months at 0 (of 95).** Source for every row: Google Trends CA, single-term pull 2026-11-04, URL pattern `https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=<term>`.

| Term | 19 | 21 | 22 | 23 | 24 | 25 | 26 | ≥25% | Peak | Now/peak | YoY25 | YoY26 | 0-mo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| limewash | 5 | 19 | 30 | 42 | 56 | 74 | 79 | 2021-05 | 2026-01 | 77% | +32% | +8% | 6 |
| limewash paint | 0 | 19 | 36 | 52 | 61 | 74 | 76 | 2021-05 | 2026-01 | 73% | +21% | +5% | 23 |
| lime paint | 24 | 46 | 53 | 58 | 65 | 62 | 80 | 2019-03 | 2026-03 | 73% | −4% | +34% | 1 |
| **microcement** | 0 | 5 | 16 | 22 | 40 | 56 | 72 | 2023-03 | 2026-03 | 61% | +38% | +45% | 32 |
| micro cement | 0 | 0 | 4 | 11 | 38 | 57 | 67 | 2023-12 | 2025-11 | 72% | +51% | +33% | 52 |
| microcement bathroom | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 2026-01 | 2026-06 | 5% | n/a | n/a | 91 |
| venetian plaster | 38 | 57 | 66 | 61 | 63 | 72 | 74 | 2019-01 | 2026-02 | 58% | +13% | +8% | 0 |
| roman clay | 3 | 13 | 38 | 38 | 36 | 55 | 71 | 2019-01* | 2026-07 | 68% | +52% | +42% | 35 |
| tadelakt | 8 | 9 | 26 | 23 | 18 | 23 | 33 | 2019-08* | 2026-02 | 27% | +29% | +27% | 65 |
| lime plaster | 10 | 11 | 15 | 29 | 27 | 46 | 55 | 2019-08* | 2026-03 | 40% | +69% | +32% | 43 |
| clay plaster | 11 | 23 | 22 | 46 | 42 | 52 | 59 | 2019-04* | 2024-12 | 78% | +22% | +34% | 38 |
| polished plaster | 8 | 0 | 0 | 0 | 0 | 0 | 0 | — | 2019-06 | 0% | n/a | n/a | 94 |
| plaster walls | 73 | 75 | 67 | 67 | 64 | 65 | 68 | 2019-01 | 2020-12 | 65% | +2% | +7% | 0 |
| plaster finish (batch) | — | — | 3.2 | 4.2 | 2.4 | 4.7 | 5.6 | — | 2026-09 | — | — | — | — |
| mineral paint | 40 | 75 | 59 | 44 | 37 | 32 | 31 | 2019-01 | 2021-02 | 31% | −14% | −3% | 0 |
| keim | 54 | 58 | 62 | 56 | 58 | 71 | 64 | 2019-01 | 2026-04 | 65% | +22% | −6% | 1 |
| romabio | 8 | 0 | 6 | 6 | 0 | 26 | 14 | — | 2019-03 | 4% | n/a | −50% | 84 |
| german smear | 14 | 23 | 11 | 0 | 12 | 6 | 0 | 2019-04 | 2024-03 | 1% | −55% | −96% | 70 |
| brick staining | 21 | 48 | 34 | 32 | 27 | 29 | 26 | 2019-03 | 2020-06 | 3% | +9% | −19% | 46 |
| limewash brick | 5 | 13 | 21 | 21 | 17 | 19 | 19 | 2019-05 | 2025-08 | 26% | +14% | −10% | 71 |
| thin brick | 45 | 64 | 69 | 64 | 56 | 64 | 73 | 2019-01 | 2021-01 | 65% | +14% | +17% | 1 |
| brick slips | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — | — | — | — | — | 95 |
| fluted wall panels | 0 | 0 | 10 | 42 | 63 | 68 | 79 | 2022-02 | 2025-02 | 87% | +9% | +12% | 44 |
| slat wall panels | 0 | 3 | 24 | 37 | 54 | 66 | 83 | 2021-03 | 2026-01 | 78% | +21% | +28% | 36 |
| wood slat wall | 2 | 27 | 51 | 61 | 75 | 70 | 73 | 2021-01 | 2024-01 | 63% | −7% | +7% | 13 |
| wood slat ceiling | 6 | 0 | 4 | 4 | 0 | 21 | 21 | — | 2026-03 | 6% | n/a | +24% | 84 |
| acoustic panels | 26 | 34 | 37 | 40 | 47 | 63 | 77 | 2019-01 | 2026-03 | 71% | +36% | +31% | 0 |
| board and batten | 42 | 75 | 72 | 68 | 70 | 71 | 75 | 2019-01 | 2021-03 | 86% | +2% | +3% | 0 |
| wainscoting | 59 | 71 | 60 | 52 | 49 | 49 | 50 | 2019-01 | 2021-02 | 51% | −1% | +4% | 0 |
| colour drenching | 0 | 0 | 0 | 0 | 11 | 49 | 54 | 2024-02 | 2026-01 | 54% | +355% | +8% | 72 |
| color drenching | 0 | 0 | 0 | 0 | 4 | 20 | 50 | 2024-03 | 2026-01 | 38% | +442% | +331% | 79 |
| wallpaper mural | 39 | 47 | 45 | 47 | 46 | 52 | 62 | 2019-01 | 2026-02 | 54% | +13% | +24% | 0 |
| grasscloth wallpaper | 33 | 54 | 51 | 49 | 44 | 42 | 57 | 2019-01 | 2021-04 | 49% | −4% | +45% | 5 |
| terrazzo | 59 | 80 | 79 | 75 | 76 | 78 | 81 | 2019-01 | 2021-09 | 79% | +2% | +6% | 0 |
| polished concrete | 76 | 60 | 66 | 56 | 56 | 67 | 77 | 2019-01 | 2026-03 | 58% | +19% | +23% | 0 |
| shou sugi ban | 58 | 57 | 42 | 40 | 35 | 34 | 28 | 2019-01 | 2020-05 | 20% | −5% | −23% | 3 |
| plaster range hood | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 2025-11 | 2025-11 | 2% | n/a | n/a | 93 |
| plaster fireplace | 0 | 24 | 34 | 40 | 37 | 34 | 20 | 2020-02 | 2025-02 | 6% | −7% | −41% | 58 |
| arched doorway | 0 | 0 | 0 | 0 | 0 | 22 | 10 | 2020-08 | 2026-07 | 3% | n/a | −58% | 88 |
| textured wall | 28 | 39 | 43 | 48 | 52 | 57 | 73 | 2019-01 | 2026-02 | 65% | +10% | +34% | 0 |
| textured walls | 53 | 62 | 56 | 50 | 54 | 62 | 69 | 2019-01 | 2021-03 | 70% | +14% | +18% | 8 |
| stucco | 58 | 66 | 58 | 54 | 54 | 57 | 64 | 2019-01 | 2020-07 | 67% | +6% | +10% | 0 |
| smooth stucco | ~0 | — | — | — | — | — | — | — | — | — | — | — | — |

\* "first ≥25%" in 2019 for a sparse term means a single early blip crossed the threshold, not sustained interest; read the annual means instead. Rows with >40 zero-months are below Google's reliable threshold in Canada and should be treated as "too small to measure".

**Table B — Ontario (`CA-ON`), same metrics, selected terms.** Source: `https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA-ON&q=<term>`.

| Term | 19 | 21 | 22 | 23 | 24 | 25 | 26 | ≥25% | Peak | Now/peak | YoY25 | YoY26 | 0-mo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| limewash | 5 | 28 | 37 | 49 | 63 | 75 | 75 | 2021-02 | 2026-01 | 70% | +19% | +7% | 13 |
| limewash paint | 0 | 9 | 31 | 42 | 52 | 60 | 58 | 2021-05 | 2026-08 | 68% | +14% | +1% | 35 |
| lime paint | 12 | 42 | 51 | 48 | 60 | 57 | 73 | 2019-03 | 2026-04 | 69% | −4% | +32% | 11 |
| **microcement** | 0 | 2 | 9 | 20 | 33 | 52 | 61 | 2021-06 | 2026-02 | 58% | +59% | +33% | 44 |
| micro cement | 0 | 0 | 0 | 12 | 16 | 46 | 60 | 2023-06 | 2025-11 | 70% | +190% | +60% | 70 |
| venetian plaster | 20 | 41 | 55 | 52 | 60 | 50 | 59 | 2019-03 | 2026-03 | 38% | −15% | +19% | 16 |
| roman clay | 0 | 6 | 0 | 10 | 0 | 14 | 38 | 2021-10 | 2025-04 | 5% | n/a | +279% | 83 |
| tadelakt | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 2026-10 | 2026-10 | — | n/a | n/a | 94 |
| lime plaster | 0 | 0 | 0 | 0 | 12 | 7 | 34 | 2024-03 | 2026-03 | 4% | −45% | +368% | 87 |
| fluted wall panels | 0 | 0 | 14 | 19 | 50 | 51 | 67 | 2022-02 | 2024-10 | 78% | +3% | +22% | 53 |
| slat wall panels | 0 | 0 | 14 | 32 | 42 | 57 | 77 | 2022-04 | 2026-01 | 82% | +34% | +40% | 50 |
| wood slat wall | 0 | 18 | 47 | 51 | 64 | 62 | 57 | 2021-02 | 2024-02 | 45% | −3% | −9% | 28 |
| acoustic panels | 30 | 37 | 40 | 43 | 49 | 65 | 81 | 2019-01 | 2026-01 | 71% | +34% | +30% | 0 |
| board and batten | 43 | 73 | 64 | 55 | 54 | 55 | 60 | 2019-01 | 2021-03 | 71% | +1% | +8% | 0 |
| wainscoting | 56 | 72 | 58 | 46 | 42 | 41 | 43 | 2019-01 | 2022-01 | 43% | −3% | +7% | 0 |
| colour drenching | 7 | 0 | 0 | 0 | 0 | 16 | 25 | — | 2026-01 | 6% | n/a | +89% | 86 |
| wallpaper mural | 31 | 44 | 39 | 40 | 40 | 43 | 54 | 2019-01 | 2026-02 | 46% | +7% | +29% | 1 |
| terrazzo | 52 | 68 | 69 | 66 | 63 | 68 | 70 | 2019-01 | 2026-02 | 68% | +9% | +5% | 0 |
| polished concrete | 76 | 63 | 65 | 57 | 52 | 61 | 71 | 2019-01 | 2020-02 | 70% | +17% | +24% | 0 |
| thin brick | 30 | 50 | 69 | 55 | 21 | 37 | 65 | 2019-01 | 2026-09 | 77% | +75% | +106% | 19 |
| brick staining | 11 | 32 | 17 | 22 | 22 | 15 | 25 | 2019-04 | 2021-04 | 2% | −35% | +42% | 59 |
| shou sugi ban | 44 | 50 | 19 | 28 | 24 | 14 | 3 | 2019-02 | 2021-02 | 2% | −42% | −96% | 46 |
| plaster fireplace | 0 | 0 | 0 | 0 | 0 | 22 | 10 | 2025-09 | 2025-09 | 3% | n/a | −41% | 90 |
| textured wall | 21 | 37 | 45 | 48 | 46 | 53 | 69 | 2019-01 | 2026-02 | 62% | +16% | +31% | 5 |
| plaster walls | 75 | 72 | 64 | 59 | 56 | 56 | 53 | 2019-01 | 2020-12 | 44% | 0% | −2% | 0 |
| mineral paint | 41 | 85 | 61 | 44 | 37 | 33 | 31 | 2019-01 | 2021-02 | 31% | −11% | −4% | 0 |

**Table C — Size relative to limewash (limewash-anchored batches, Canada; 2026 YTD mean ÷ limewash 2026 YTD mean in same batch; plus the term's 2023 and 2025 means on the batch scale where limewash-2026 ≈ 79 unless noted).** Source URLs are the batch explore links in the row.

| Term | rel-LW-2026 (CA) | rel-LW-2026 (ON) | CA batch means 2022 / 2023 / 2024 / 2025 / 2026 | Batch URL |
|---|---|---|---|---|
| limewash (anchor) | 1.00 | 1.00 | 30.1 / 42.4 / 56.2 / 74.1 / 78.9 | [b1](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt) |
| microcement | **0.51** | **0.58** | 8.8 / 12.8 / 22.6 / 31.0 / 40.4 | b1 |
| micro cement (2 words) | 0.23 | 0.23 | 1.0 / 2.9 / 9.9 / 15.3 / 18.0 | [b10](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,microtopping,micro%20cement,plaster%20walls,lime%20wash) |
| venetian plaster | 0.30 | 0.30 | 20.4 / 18.8 / 19.5 / 22.2 / 23.5 | b1 |
| roman clay | 0.17 | 0.11 | 7.3 / 7.2 / 6.9 / 10.6 / 13.6 | b1 |
| tadelakt | 0.05 | 0.00 | 3.2 / 2.8 / 2.3 / 2.9 / 4.2 | b1 |
| lime paint | 0.43 | 0.43 | 22.2 / 24.1 / 27.3 / 26.2 / 33.5 | [b9](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,keim,lime%20paint,limewash%20brick,wood%20slat%20ceiling) |
| lime wash (2 words) | 0.58 | 0.53 | 21.6 / 24.9 / 30.6 / 36.6 / 45.9 | b10 |
| lime plaster | 0.14 | 0.09 | 1.2 / 2.6 / 2.3 / 3.9 / 5.0 (limewash=35.7 scale) | [b2](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,lime%20plaster,clay%20plaster,polished%20plaster,mineral%20paint) |
| clay plaster | 0.10 | 0.03 | 1.3 / 2.8 / 2.7 / 3.2 / 3.5 (35.7 scale) | b2 |
| polished plaster | 0.00 | 0.00 | 0 throughout | b2 |
| mineral paint | 0.88 | 0.88 | 59.4 / 43.6 / 36.8 / 31.8 / 31.3 (35.7 scale; peak 100 Feb 2021) | b2 |
| keim | 0.16 | 0.08 | 12.2 / 11.2 / 11.7 / 14.2 / 12.5 | b9 |
| romabio | ~0.02 | ~0 | 0.1 / 0.1 / 0.0 / 0.3 / 0.2 (9.8 scale) | [b8](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,textured%20walls,stucco,smooth%20stucco,romabio) |
| german smear | 0.00 | 0.00 | 2.2 / 0.0 / 2.5 / 1.1 / 0.1 | [b3](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,german%20smear,brick%20staining,thin%20brick,brick%20slips) |
| brick staining | 0.04 | 0.09 | 4.6 / 4.1 / 3.7 / 3.9 / 3.5 | b3 |
| limewash brick | 0.02 | 0.00 | 2.3 / 2.2 / 1.8 / 2.0 / 1.9 | b9 |
| thin brick | 0.26 | 0.30 | 19.3 / 18.0 / 15.8 / 18.0 / 20.5 | b3 |
| brick slips | 0.00 | 0.00 | 0 throughout (UK term) | b3 |
| fluted wall panels | 0.24 | 0.33 | 1.5 / 6.2 / 9.1 / 10.1 / 11.5 (limewash=47.0 scale) | [b4](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,fluted%20wall%20panels,slat%20wall%20panels,wood%20slat%20wall,acoustic%20panels) |
| slat wall panels | 0.36 | 0.40 | 5.0 / 7.6 / 11.3 / 13.6 / 17.1 (47.0 scale) | b4 |
| wood slat wall | 0.48 | 0.47 | 15.8 / 18.9 / 23.1 / 21.6 / 22.5 (47.0 scale) | b4 |
| acoustic panels | **1.65** | 1.73 | 36.7 / 39.5 / 46.6 / 63.2 / 77.5 (47.0 scale) | b4 |
| wood slat ceiling | 0.03 | 0.02 | 0.4 / 0.4 / 0.0 / 2.2 / 2.4 | b9 |
| board and batten | 2.18 | 2.38 | 72.1 / 67.7 / 69.6 / 71.2 / 75.5 (limewash=34.6 scale) | [b5](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,board%20and%20batten,wainscoting,colour%20drenching,wallpaper%20mural) |
| wainscoting | 1.16 | 1.44 | 47.7 / 41.0 / 39.3 / 38.7 / 40.0 (34.6 scale) | b5 |
| colour drenching | 0.11 | 0.09 | 0 / 0 / 0.8 / 3.5 / 3.9 (34.6 scale) | b5 |
| wallpaper mural | 0.41 | 0.45 | 10.0 / 10.7 / 10.4 / 11.8 / 14.3 (34.6 scale) | b5 |
| grasscloth wallpaper | 0.16 | 0.16 | 5.1 / 4.9 / 4.5 / 4.2 / 5.6 (35.0 scale) | [b6](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,grasscloth%20wallpaper,terrazzo,polished%20concrete,microcement%20bathroom) |
| terrazzo | 2.31 | 1.37 | 79.0 / 75.2 / 76.0 / 77.8 / 80.9 (35.0 scale) | b6 |
| polished concrete | 0.43 | 0.46 | 13.0 / 10.9 / 10.9 / 13.2 / 15.0 (35.0 scale) | b6 |
| microcement bathroom | 0.02 | 0.00 | 0 / 0 / 0 / 0 / 0.8 | b6 |
| shou sugi ban | 0.12 | 0.01 | 14.8 / 14.2 / 12.5 / 11.8 / 9.7 | [b7](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,shou%20sugi%20ban,plaster%20range%20hood,plaster%20fireplace,arched%20doorway) |
| plaster range hood | 0.00 | 0.02 | 0 / 0 / 0 / 0.8 / 0.0 | b7 |
| plaster fireplace | 0.03 | 0.02 | 4.0 / 4.8 / 4.2 / 4.0 / 2.4 | b7 |
| arched doorway | 0.01 | 0.00 | 0 / 0 / 0 / 2.4 / 1.1 | b7 |
| textured wall | 0.50 | 0.55 | 23.6 / 26.3 / 28.1 / 30.8 / 39.6 | [b12](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,limewash%20paint,venetian%20plaster%20walls,plaster%20finish,textured%20wall) |
| plaster walls | 0.53 | 0.62 | 41.2 / 41.0 / 39.1 / 40.1 / 41.5 | b10 |
| stucco | **6.6** | 5.3 | 58.4 / 54.5 / 53.8 / 56.9 / 64.4 (limewash=9.8 scale) | b8 |
| smooth stucco | 0.02 | 0.00 | ~0.1 throughout | b8 |
| wallpaper (bare) | ~220 | ~150 | contaminated by phone-wallpaper searches — not usable | [b11](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,color%20drenching,wall%20paneling,accent%20wall,wallpaper) |
| accent wall | ~5 | ~4.3 | 1.3 / 1.2 / 1.2 / 1.1 / 1.0 on wallpaper scale → flat/declining | b11 |

**Supporting published data points by finish (non-Trends):**
- **Microcement:** Houzz UK 2022 (Jan–Mar 2022 vs 2021): "micro-cement" searches +78%, "resin flooring" +97% — i.e. the UK hit its microcement inflection in 2021–22, ~2–3 years before Canada. — [KBB Review on Houzz UK 2022](https://www.kbbreview.com/48651/news/houzz-highlights-top-emerging-design-trends-for-2022/). UK Trends: microcement 2026 index 64 vs limewash 91 (0.70×), still rising (peak Aug 2026); Canada is at 0.51×, so Canada is roughly 2 years behind the UK on this ratio. — [Google Trends GB batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=GB&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt). US Trends: microcement 2024: 12 → 2025: 20 → 2026: 25 (0.37× limewash), peak Apr 2026 — US *behind* Canada. — [Google Trends US batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=US&q=limewash,microcement,venetian%20plaster,roman%20clay,tadelakt). Keyword-tool: "microcement" 74,000/mo global (Sep 2025–Aug 2026; UK 8,100 = 11%; no CAN split; page says volume rose 22% over the 12 months). — [RankHero: microcement](https://www.rankhero.com/keywords/microcement). Top related queries CA 2024–26: "microcement canada" (100 — a supply-seeking query), microcement bathroom (68), floor (46), wall (43), shower (42), what is microcement (40), kitchen (25), countertop (22); rising: surecrete, microcement texture, concretta microcement (breakouts), microcement wall +600%, what is microcement +170%. — [Google Trends CA microcement related](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=microcement). Provincial index Nov 2024–Nov 2026: BC 100, **Ontario 88**, Alberta 72, Manitoba 62, Québec 56.
- **Venetian plaster:** Houzz US 2026 +94% and Houzz UK 2026 +82% (both Jan–Mar YoY) — a sharp 2026 re-acceleration in the two markets that bracket Canada. — [Houzz US 2026](https://blog.houzz.com/2026-u-s-houzz-emerging-summer-trends-report/), [Houzz UK 2026 PDF](https://st.hzcdn.com/static/econ/2026UKHouzzEmergingTrendsReport.pdf). Keyword-tool: 60,500/mo global, US 27,100 (45%), UK 14,800 (24%); May 2025–Apr 2026 range 49,500–74,000; Canada appears only in the competition split (37 of 520 ranking domains = 7%). — [RankHero: venetian plaster](https://www.rankhero.com/keywords/venetian-plaster). Rising related query in CA: "microcement" +400%, "venetian plaster bathroom" +70%; top: venetian plaster walls/paint/wall, how to venetian plaster (90), fireplace (81), **home depot (54)** — a strong DIY/product signal. — [Google Trends CA venetian plaster related](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=venetian%20plaster). UK Trends: venetian plaster peaked Mar 2021 (49) and has declined to 28 — the UK's VP cycle is *past*; Canada's never spiked that way. Provincial index: Manitoba 100, Saskatchewan 99, BC 89, Alberta 86, Ontario 79.
- **Roman clay:** Exploding Topics (US-weighted): 8,100 searches/mo, +24% growth, status "exploding", discovered 13 May 2026. — [Exploding Topics: roman clay](https://explodingtopics.com/topic/roman-clay). Livingetc (9 May 2024): designers polled named Roman clay more than any other finish as "what is replacing limewash". — [Livingetc](https://livingetc.com/advice/what-finish-is-replacing-limewash). CA related queries are brand/product: roman clay paint (100), portola roman clay (47), roman clay wall (46), roman clay fireplace (21), portola paints roman clay (18). — [Google Trends CA roman clay related](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=roman%20clay). US Trends: 2022: 7 → 2024: 10 → 2025: 11 → 2026: 16 (0.24× US limewash). Provincial index in CA is dominated by a PEI outlier (100) with Ontario at 17 — i.e. too thin to read regionally.
- **Tadelakt / lime plaster / clay plaster:** Houzz UK (late 2023 commentary): "traditional wall treatments such as limewash paint and tadelakt becoming more popular" — no figure. — [Offaly Express / PA, Dec 2023](https://www.offalyexpress.ie/national/5-of-the-hottest-interior-trends-for-2024-according-to-experts-7266744). US and UK Trends: tadelakt flat at index 4–7 since 2021 in both. Rising CA related queries under "plaster walls": lime plaster walls +70%, clay plaster walls +40%.
- **Slat / fluted / acoustic panels:** Houzz UK 2025 (Jan–Mar 2025 vs 2024): **acoustic panels +625%**, wooden slat wall +87%, wood panels +27%, panelling +56%, feature wall +117%, colour drenching +142%, murals +85%. — [Houzz UK 2025 Emerging Trends PDF](https://st.hzcdn.com/static/econ/2025UKHouzzEmergingTrendsReport.pdf). Global slat-wall-panel market ≈ USD 680M (2026) → 1,057M (2033), 6.5% CAGR, North America 38% share (market-research estimate). — [Persistence Market Research](https://persistencemarketresearch.com/market-research/slat-wall-panels-market.asp). Canadian editorial: Design Lines (Toronto) "Eight terrific ways to use slatted wood at home", Dec 2025, with Toronto-designer projects. — [Design Lines](https://www.designlinesmagazine.com/how-to-use-slatted-wood/). Retailer blog: "fluted and ribbed panels were the defining aesthetic of 2022–2024. In 2026, they're mainstream." — [The Panel Hub](https://thepanelhub.com/blogs/news/2026-wall-panel-trends-whats-in-whats-out).
- **Colour drenching:** Houzz US Q1 2025: "color drenching" searches up 4× (reported elsewhere as +325%). — [Houzz US 2025 report](https://blog.houzz.com/2025-u-s-houzz-emerging-summer-trends-report/), [PDR Magazine](https://pdrmag.com/?p=16308). Houzz UK Q1 2025: +142%. Exploding Topics: "color drenching paint" 1.6K/mo, +8,300%, status "regular", discovered 11 Mar 2026. — [Exploding Topics](https://explodingtopics.com/topic/color-drenching-paint?period=120). Yelp (US) summer 2026 named "colormaxxing" as the successor trend. — [House Digest on Yelp 2026](https://www.housedigest.com/2175912/yelp-summer-trend-report-2026-colormaxxing/).
- **Arches / plaster hoods:** Houzz US 2026: arched range hood +177%, arched pantry door +130%; Houzz US winter 2024: "arched cabinets" nearly 3×. — [Houzz US 2026](https://blog.houzz.com/2026-u-s-houzz-emerging-summer-trends-report/). Alberta designer: "from fireplace surrounds to kitchen hood fans, plaster is a hot trend in 2025". — [Excel Homes / Designers Edge](https://www.excelhomes.ca/blog/2025-décor-trends-with-designers-edge). In Canada Trends these terms are below threshold (Table A).
- **Textured finishes generally:** Houzz "25 trends defining 2026" (US, 1 Jan 2026) lists "textured plaster, limewash, stone, handmade tiles, grasscloth" as Trend 16 and "fluted and curved details" as Trend 20 — no percentages. — [Houzz magazine](https://www.houzz.com/magazine/25-home-design-trends-defining-how-well-live-in-2026-stsetivw-vs~183837788). Houzz US 2026: Jan–Mar searches for sandstone, limewash paint, linen wallpaper and seagrass wallcoverings "skyrocketed since 2025". — [CultureMap on Houzz 2026](https://sanantonio.culturemap.com/news/home-design/2026-summer-design-trends-houzz/).
- **Brick finishes / shou sugi ban:** No published growth data found for Canada; Trends (Table A/B) shows German smear and brick staining peaked 2020–21 in Canada and Ontario and are now at 1–3% of peak; shou sugi ban peaked May 2020 (CA) and is at 20% of peak (2% in Ontario).
- **Mineral paint caveat:** "mineral paint" in Canada peaked Feb 2021 and has fallen 60%; the term is dominated by *Fusion Mineral Paint* (a Canadian furniture-paint brand), not Keim/Romabio exterior mineral paint, so it is not a usable proxy for mineral-paint-on-brick demand. (Inference from the curve shape matching the 2020–21 furniture-flipping boom; brand mix not directly measured.)

### Inferences
- **Curve-shape classification (Canada, late 2026):**
  - *Rising sharply, limewash-2022/23-like:* microcement (+ micro cement), lime plaster (tiny base), roman clay (Ontario only just starting), slat wall panels (product intent).
  - *Rising, broad/generic:* textured wall, acoustic panels, lime paint, wallpaper mural, polished concrete (modest).
  - *Plateau at high level:* limewash, limewash paint, fluted wall panels, wood slat wall, board and batten, terrazzo, thin brick, stucco, venetian plaster (plateau with 2026 uptick in Houzz US/UK).
  - *Declining / past peak:* wainscoting, mineral paint, shou sugi ban, German smear, brick staining, plaster fireplace, plaster walls (repair-intent).
  - *Too small to measure in Canada:* tadelakt, clay plaster, polished plaster, romabio, keim (brand), brick slips, microcement bathroom/shower, plaster range hood, arched doorway, wood slat ceiling, smooth stucco, colour drenching in Ontario.
- The H2-2026 dip in microcement (Aug–Oct = 61% of its Mar-2026 peak) mirrors limewash's own seasonal H2 dips every year (e.g. 2025: Jul 88 → Oct 66) and the generic Q1 peak in home-finish searches; it is not evidence of a top. Judge in Q1 2027.
- Ontario leads Canada on microcement growth (2025 +59% vs +38%), as it did on limewash in 2021.

### Gaps
- No Toronto/GTA-level Trends series exist; Ontario is the floor of resolution. The owner's GSC is the only GTA-specific measured source.
- "Microtopping"/"micro-topping", "polished plaster", "brick slips", "smooth stucco", "romabio", "keim" (as a paint) are effectively zero in Canada and cannot be curve-fitted.
- Houzz Canada publishes no emerging-trends report; all Houzz percentages are US or UK.
- Pinterest Predicts 2023–2026 reports do not name any of these finishes with a search-growth figure (checked 2023, 2024, 2025, 2026 coverage: [2026](https://www.rprealtyplus.com/news-views/2026s-home-decor-trends-pinterest-says-you-cant-ignore-123182.html), [2025](https://www.zoocasa.com/blog/pinterest-predicts-2025-interior-trends), [2024](https://newsroom.pinterest.com/en-gb/news/pinterest-predicts-2024), [2023](https://www.apartmenttherapy.com/pinterest-predicts-home-trends-2023-37196458)); only retailer commentary mentions "limewash, Venetian plaster and microcement" as 2026 textures.
- Google's Canada "Year in Search 2025" has no home/décor category. — [Google Canada blog](https://blog.google/intl/en-ca/products/explore-get-answers/canadas-2025-year-in-search/)

---

## KQ3. Ranking of candidates by "stage relative to limewash 2022–23"

### Takeaway
Scored on (a) size vs limewash today (target 0.4–0.55×, limewash's own 2022–23 share of its 2026 level), (b) YoY growth (target +40–60%), (c) named-finish consumer search behaviour, (d) hire-a-pro vs product intent, (e) few named GTA specialists: **microcement is the only clean match**; venetian plaster is the best "already-there" hire niche; roman clay and lime/clay plaster are the 2021-stage watch-list; slat/fluted panels are big but DIY/product; everything brick-related and shou sugi ban are past-peak.

### Cited Findings
(All numbers are from the Trends tables in KQ2 and the published data cited there; the ranking itself is my synthesis.)

| Rank | Finish | Size vs limewash now (CA / ON) | Growth 2025 / 2026 YTD (CA single-term) | Limewash-equivalent year | Stage call | Named GTA specialists found |
|---|---|---|---|---|---|---|
| 1 | **Microcement** (incl. "micro cement", bathrooms/showers/floors) | 0.51 / 0.58 (0.74 / 0.81 if two-word variant added) | +38% / +45% (ON +59% / +33%) | **2023** | Rising sharply; peak Q1 2026; seasonal H2 dip | Artelime (Toronto; microcement + limewash + VP) — [Google Business listing](https://business.google.com/v/_/AKsrIN1ELSpH54E-r7t-NVC2289237uYTz7aQY9FKNTfMO5Zda3RKtvSIM9u/566f/_); Colours & Space — [ouicolourpaint.ca](https://ouicolourpaint.ca/what-is-microcement-and-where-can-you-use-it-in-your-home/); microcementfinish.ca; GUVEN Construction (stucco/microcement, est. 2001) — [guven-astro.pages.dev](https://guven-astro.pages.dev/); Topciment runs template "delegation" pages for dozens of Ontario towns with no local business behind them — [Topciment Owen Sound](https://www.topciment.com/en-ca/delegations/microcement-owen-sound) |
| 2 | **Venetian plaster / polished plaster** | 0.30 / 0.30 | +13% / +8% (ON −15% / +19%); Houzz US +94%, UK +82% in Q1 2026 | Mature (flat since 2022) with 2026 re-acceleration abroad | Plateau → possible second wave | Venetian Studios (Toronto, 16 HomeStars reviews, 10/10) — [HomeStars](https://home-bart.homestars.com/companies/228845-venetian-studios); The Finishing Touch (North York); Wall Techniques and Design (GTA; soft/hard stucco + VP) — [Houzz](https://www.houzz.jp/pro/walltechniques/wall-techniques-and-design); Designer Wall Finishes (Ottawa/Toronto) — [Houzz](https://www.houzz.com/professionals/artists-and-artisans/designer-wall-finishes-pfvwus-pf~599647018); Singing Walls; Executive Touch Painters; Artelime |
| 3 | **Slat wall panels** (+ wood slat wall, acoustic slat) | 0.36 / 0.40 (wood slat wall 0.48; acoustic panels 1.65) | +21% / +28% (ON +34% / +40%) | 2022 by size, but product-led | Rising, product/DIY intent | None found as installers; Toronto sellers (e.g. Craftiva Art) — [Craftiva](https://www.craftivaart.com/products/ceiling-hung-natural-wood-slat) |
| 4 | **Roman clay** | 0.17 / 0.11 | +52% / +42% (ON 2026 +279% from near-zero) | **2020–21** (pre-inflection) | Rising from tiny base; brand-led (Portola) | None found in Toronto (search returned Vancouver/LA only) |
| 5 | **Lime plaster / clay plaster** (American Clay, Clayworks, tadelakt) | 0.14 / 0.09 and 0.10 / 0.03; tadelakt 0.05 / 0.00 | lime plaster +69% / +32%; clay plaster +22% / +34%; tadelakt +29% / +27% (all noisy) | 2020–21 | Rising from tiny base | None in Toronto found; Authentic Plaster & Stucco (Vancouver) is the only Canadian tadelakt installer surfaced — [Authentic Plaster FX](https://authenticplasterfx.com/) |
| 6 | **Fluted wall panels** | 0.24 / 0.33 | +9% / +12% (ON +3% / +22%) | 2024 (plateau at high level; peak Feb 2025) | Plateauing; product intent | None as a trade |
| 7 | **Textured wall(s)** (generic) | 0.50 / 0.55 | +10% / +34% | n/a (broad term) | Rising, broad | n/a |
| 8 | **Colour drenching** | 0.11 / 0.09 | +355% / +8% (plateau after 2025 spike) | 2022 by shape, but it's a paint-colour technique, not a trade | Spiked, now flat; US Yelp already calling the successor ("colormaxxing") | Any painter |
| 9 | **Polished concrete / terrazzo** | 0.43 / 0.46 and 2.31 / 1.37 | polished concrete +19% / +23%; terrazzo +2% / +6% | Mature (terrazzo peak Sep 2021) | Flat; polished concrete mild upturn | Established trades |
| 10 | **Wallpaper murals / grasscloth** | 0.41 / 0.45 and 0.16 / 0.16 | murals +13% / +24%; grasscloth −4% / +45% | Mature | Flat-to-mild rise | Established wallpaper installers |
| 11 | **Thin brick / brick slips (interior)** | 0.26 / 0.30; brick slips 0 | +14% / +17% (ON noisy +75% / +106%) | Mature (peak Jan 2021) | Flat | Masonry trades |
| 12 | **Board and batten / wainscoting** | 2.18 / 2.38 and 1.16 / 1.44 | B&B +2% / +3%; wainscoting −1% / +4% | Past peak (2021) | Flat / declining; DIY-heavy | Finish carpenters |
| 13 | **Mineral paint on brick (Keim/Romabio) / exterior limewash** | keim 0.16; romabio ~0.02; limewash brick 0.02; "mineral paint" 0.88 but contaminated by Fusion Mineral Paint | mineral paint −14% / −3%; limewash brick +14% / −10% | Past peak (2021) or unmeasurable | Declining / unmeasurable | Exterior painters |
| 14 | **German smear / brick staining** | 0.00 / 0.00 and 0.04 / 0.09 | −55% / −96% and +9% / −19% | Past peak (2020–21) | Declining to threshold | n/a |
| 15 | **Shou sugi ban cladding** | 0.12 / 0.01 | −5% / −23% (ON −42% / −96%) | Past peak (May 2020) | Declining | n/a |
| 16 | **Plaster range hoods / plaster fireplaces / plaster arches / arched doorways** | 0.00–0.03 | plaster fireplace −7% / −41%; others unmeasurable | Unmeasurable in CA; Houzz US arches +130–177% (US) | Below threshold | Plaster/drywall trades |
| 17 | **Exterior stucco / smooth stucco** | stucco 6.6 / 5.3 (huge, mature, seasonal); smooth stucco ~0 | +6% / +10% | Not a trend — a mature repair category | Flat | Many |

### Inferences
- **Microcement is the limewash-2023 analogue on every axis**: same ratio to limewash-now that limewash-2023 had to limewash-2026 (0.51 vs 0.54), same growth band, named-finish queries with room-specific long-tail (bathroom/shower/floor/wall/kitchen/countertop), a supply-seeking top query ("microcement canada"), a half-dozen GTA firms of which only 1–2 are specialists, and a UK precedent (Houzz UK +78% in Q1 2022 → UK Trends still rising in 2026 at 0.70× limewash) showing ~4+ years of runway after the inflection. Pricing/ticket size is also higher than limewash (bathrooms/floors), which matters for lead value.
- **Venetian plaster is a different play**: already-established demand (0.3× limewash, flat since 2022) with an existing specialist bench in Toronto, so it fits a "capture existing hire intent" niche rather than a "ride the curve" niche; the 2026 Houzz US/UK re-acceleration (+94%/+82%) and the +250% rising "venetian plaster" query under limewash suggest a second wave is beginning, which would make Canada 2027 look like a mild limewash-2022.
- **Roman clay and lime/clay plaster are 2027–28 bets**: at 0.1–0.17× limewash they are where limewash was in 2020–21; they should be pre-built (pages drafted, provider sourcing started) but will not clear a "named provider in city" gate in most GTA cities yet.
- **Panels (slat/fluted/acoustic) are large but product-intent**: curves look like limewash-2022, but the related-query and retailer evidence says buyers purchase panels online and DIY; an "installer" niche would be thin.
- **Brick and charred-wood finishes are the 2020–21 cohort** (COVID-era DIY peaks) and are now declining; they do not fit the brief.

### Gaps
- Specialist counts are from a single web search per finish; a HomeStars/Houzz/Google Maps census per GTA city is needed for the publish-gate provider check.
- No ticket-size or lead-value data for microcement vs limewash in the GTA was found.

---

## KQ4. Which terms show the "person-form" (hire-intent) search pattern, and roughly how large?

### Takeaway
No person-form query for any finish ("X installer/contractor/painter", "X toronto") is measurable in Google Trends for Canada or Ontario — including limewash's, which the owner's GSC shows at ~322 impressions/month. Person-form demand must be estimated by scaling the owner's limewash GSC figure by each finish's head-term ratio: roughly **150–250/mo for the microcement person-form cluster in Toronto, ~100–150 for venetian plaster, ≤50–70 for roman clay** (estimates).

### Cited Findings
- **Trends, Canada, 2019–2026, person-form terms (months with non-zero index out of 95):** "limewash painter" 1/95 (Aug 2026); "limewash toronto" 1/95 (Oct 2026); "limewash contractor" 0/95; "limewash near me" 0/95; "limewash services" 1/95 (Nov 2024); "limewash painting" 1/95 (Oct 2026); "venetian plaster toronto" 1/95 (Sep 2025); "venetian plaster contractor" 0/95; "microcement toronto" 1/95 (Feb 2026); "microcement installer" 0/95; "microcement contractor" 0/95; "roman clay toronto" 0/95; "plaster contractor" 2/95; "plasterer toronto" 2/95 (May 2021; Jun 2022 in ON). — [Google Trends CA, person-form batch 1](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash%20toronto,venetian%20plaster%20toronto,microcement%20toronto,plasterer%20toronto,limewash%20painter), [batch 2](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,limewash%20painter,venetian%20plaster%20contractor,microcement%20installer,venetian%20plaster%20toronto), [batch 3](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,limewash%20contractor,limewash%20painting,limewash%20services,limewash%20near%20me), [batch 4](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,roman%20clay%20toronto,microcement%20installer,microcement%20contractor,plaster%20contractor)
- **Ontario:** "limewash painter" first registers in Nov 2026 (partial month, index 39 on a scale where it is otherwise 0), "microcement toronto" Oct 2026 (5), "limewash toronto" Oct 2026 (7), "limewash painting" Mar 2026 (14), "limewash walls" Jan 2026 (13). All other person-form terms 0/95. — [Google Trends CA-ON person-form batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA-ON&q=limewash%20toronto,venetian%20plaster%20toronto,microcement%20toronto,plasterer%20toronto,limewash%20painter)
- **Application-form (room/surface) long-tail is measurable and is the nearest proxy for hire intent:** "limewash walls" CA 2024: 4.3 → 2025: 3.5 → 2026: 5.4 (limewash=79 scale → ~7% of head term; 20/95 non-zero months); "limewash fireplace" and "limewash exterior" are blips. — [Google Trends CA limewash application batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,limewash%20interior,limewash%20walls,limewash%20fireplace,limewash%20exterior). For microcement the room long-tail is relatively *much* bigger: bathroom 68, floor 46, wall 43, shower 42, kitchen 25, countertop 22 vs head 100 in related-query terms. — [Google Trends CA microcement related](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=microcement)
- **Supply-seeking query:** "microcement canada" is the #1 related query for microcement in Canada (index 100) — a "where do I get this" query that does not exist for limewash (whose #1 is "limewash paint"). Same source as above.
- **Owner GSC (from brief):** "limewash painter toronto" ≈ 322 impressions/mo at position 3.5 (2026).
- **Yelp (US) hire-intent benchmark:** project requests for "entire interior painting" +72% and "tile contractors" searches +351% (Yelp 2026 reports) — shows Yelp tracks person-form, but no figures for any of these finishes. — [Yelp 2026 home trends](https://www.yelp.com/article/2026-home-beauty-and-lifestyle-trends)

### Inferences
- A query at ~320 impressions/mo in Toronto (≈ 300–400 searches/mo, since a position-3.5 page is shown for most searches) is below Trends' Canada threshold; so **every** person-form term for the candidate finishes is in the same "invisible in Trends, visible in GSC" band or smaller.
- **Estimated Toronto person-form cluster sizes (scaling the 322/mo limewash anchor by Table C ratios, and assuming the same share of head-term demand converts to person-form — an assumption, since limewash is a paint-DIY-heavy term and microcement is a pro-only product):** microcement ("microcement toronto / installer / contractor / bathroom toronto") 150–250/mo, probably at the high end because microcement cannot be DIY'd; venetian plaster ("venetian plaster toronto / contractor / company") 100–150/mo; roman clay 30–70/mo; lime/clay plaster/tadelakt <30/mo each; slat/fluted "installer" 50–150/mo but low conversion (product intent). These are estimates, not measurements.
- The first-ever non-zero Trends readings for "limewash painter", "limewash toronto" and "microcement toronto" all land in Aug–Nov 2026 — consistent with person-form demand for both finishes just now crossing from "invisible" to "barely visible", i.e. the GTA market is at the start of the hire-form wave for microcement.

### Gaps
- No keyword-tool (Ahrefs/Semrush/Keyword Planner) person-form volumes for Canada were retrievable; the sites are JS/auth-gated. Keyword Planner with Toronto radius targeting is the direct fix.
- Owner's GSC for torontolimewash.com could be mined for *all* queries (e.g. "limewash walls toronto", "limewash contractor") to get the full person-form share of limewash head-term demand; that share is the key multiplier for the estimates above.

---

## KQ5. Published keyword-volume / growth data for these terms (Canada where available)

### Takeaway
No source publishes Canada-specific monthly volumes for any of these finishes. What exists is: Houzz on-site search growth (US 2023–2026, UK 2022/2025/2026), Yelp (US 2022), Exploding Topics (global/US-weighted estimates), and RankHero global Google-Ads-style volumes with partial country splits (Canada split only for "plaster"). These are compiled below so the writer does not need to re-fetch them.

### Cited Findings
- **RankHero (global monthly, Google-Ads buckets):** limewash 90,500 (Oct 2025–Sep 2026; peak Nov 2025 110,000; no country split) — [source](https://www.rankhero.com/keywords/limewash); venetian plaster 60,500 (US 27,100 = 45%, UK 14,800 = 24%) — [source](https://www.rankhero.com/keywords/venetian-plaster); microcement 74,000 (UK 8,100 = 11%; +22% Sep 2025→Aug 2026) — [source](https://www.rankhero.com/keywords/microcement); plaster 301,000 (US 49,500 16%, UK 33,100 11%, **CAN 8,100 3%**, AUS 9,900) — [source](https://www.rankhero.com/keywords/plaster).
- **Exploding Topics (estimate tool):** limewash paint 74K/mo, +2,850%, "exploding", first tracked 4 Jul 2023 — [source](https://explodingtopics.com/topic/limewash-paint?period=120); roman clay 8.1K/mo, +24%, "exploding", discovered 13 May 2026 — [source](https://explodingtopics.com/topic/roman-clay); color drenching paint 1.6K/mo, +8,300%, "regular", discovered 11 Mar 2026 — [source](https://explodingtopics.com/topic/color-drenching-paint?period=120). Pages for microcement, venetian plaster, slat wall panels returned 404 (not tracked).
- **Houzz US (Jan–Mar YoY on-site searches):** 2023: brick wall kitchen +93%, concrete countertops +28%, tongue-and-groove ceiling +74%, wallpaper ceiling +26% — [2023 PDF](https://st.hzcdn.com/static/econ/2023_Houzz_Emerging_Summer_Trends.pdf); 2024: no wall-finish terms (organic modern, moody, Japandi/wabi-sabi) — [2024 PDF](https://st.hzcdn.com/static/econ/2024_Houzz_Emerging_Summer_Trends.pdf); 2025: color drenching 4×, wood-paneled offices ~1.5×, floral wallpaper ~2× — [2025 report](https://blog.houzz.com/2025-u-s-houzz-emerging-summer-trends-report/); 2026: Venetian plaster +94%, limewash interior paint +53%, linen wallpaper +104%, seagrass wallpaper +94%, sandstone +257%, wainscoting +32%, arched range hood +177%, arched pantry door +130%, terracotta flooring +55% — [2026 report](https://blog.houzz.com/2026-u-s-houzz-emerging-summer-trends-report/).
- **Houzz UK (Jan–Mar YoY):** 2022: micro-cement +78%, resin flooring +97%, bedroom panelling +200%, media walls +187% — [KBB Review](https://www.kbbreview.com/48651/news/houzz-highlights-top-emerging-design-trends-for-2022/); 2025: acoustic panels +625%, wooden slat wall +87%, wood panels +27%, panelling +56%, feature wall +117%, colour drenching +142%, murals +85%, onyx tile +1,069% — [2025 PDF](https://st.hzcdn.com/static/econ/2025UKHouzzEmergingTrendsReport.pdf); 2026: limewash +109%, Venetian plaster +82%, stone wall +148%, natural stone +96%, modern organic +91%, wallpapered ceiling +88%, exposed wooden beams +79% — [2026 PDF](https://st.hzcdn.com/static/econ/2026UKHouzzEmergingTrendsReport.pdf).
- **Yelp (US):** limewash paint searches +79% (2022 vs 2021) — [NBC NY](https://nbcnewyork.com/entertainment/the-hottest-food-beauty-and-home-trends-expected-for-2023/4019451).
- **Amazon US product search (ASINSIGHT):** "limewash brush" ≈131 searches/week (21–27 Jun 2026); "microcement kit" ≈147/week (28 Jun–4 Jul 2026) — small, product-only. — [ASINSIGHT limewash brush](https://www.asinsight.com/report/US/limewash-brush), [ASINSIGHT microcement kit](https://www.asinsight.com/report/US/microcement-kit)
- **Market-size (estimate, global):** slat wall panels USD 680.2M (2026) → 1,057M (2033), 6.5% CAGR, North America 38% — [Persistence MR](https://persistencemarketresearch.com/market-research/slat-wall-panels-market.asp); Grand View puts 2025 at USD 627.1M → 995.6M by 2033 (6.0% CAGR). — [Grand View via GII](https://www.giiresearch.com/report/grvi2017925-slat-wall-panel-market-size-share-trends-analysis.html)

### Inferences
- Canada ≈ 3% of global / ≈16% of US volume for "plaster" (the one CAN split available) gives a working conversion factor of **~0.1–0.16× US volume** for Canadian volumes of English home-finish terms; combined with RankHero US splits this implies venetian plaster CA ≈ 2.7–4.3K/mo (estimate) and, via the Trends ratio (limewash = 3.4× VP in CA), limewash CA ≈ 9–14K/mo — higher than the GSC-based estimate in KQ1 (5–12K); the truth is probably ~8–12K/mo. Microcement CA ≈ 0.5× → 4–6K/mo (estimate).

### Gaps
- No Reddit (r/TorontoRealEstate, r/HomeImprovement, r/InteriorDesign) threads surfaced via search for GTA pricing or contractor recommendations on these finishes; site-restricted searches returned only HomeStars/Houzz listings. Direct Reddit search would be needed.
- No Keywords Everywhere / Glimpse / Semrush blog posts with Canada volumes for these terms were found.

---

## KQ6. Which finishes are mostly DIY/product intent vs hire-a-pro intent?

### Takeaway
By related-query mix and product availability: **limewash is now majority DIY/product** (paint brands, brushes, "diy limewash", "faux limewash", Sherwin-Williams); **venetian plaster is mixed** ("how to", "home depot" vs "fireplace", "bathroom"); **microcement is structurally pro-intent** (no retail product, room/surface queries, "microcement canada" supply-seeking); **roman clay is product/brand intent** (Portola); **panels, board-and-batten, wainscoting, colour drenching are DIY/product**; **polished concrete, terrazzo, stucco, plaster arches/hoods are pro-intent but mature or unmeasurable**.

### Cited Findings
- **Limewash (CA related queries 2024–26):** product/brand/DIY queries dominate — limewash paint (100), romabio (7), romabio limewash (7), faux limewash (6), diy limewash (6), bauwerk limewash (6), sherwin williams limewash (5), limewash brush (5); rising: limewash beige +250%, limewash brush +150%, faux limewash paint +140%, sherwin williams limewash +60%. — [Google Trends CA](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=limewash). Brand terms in Trends CA (limewash-anchored): romabio 2025: 2.2 / 2026: 1.3; portola paints 1.2 / 1.4; bauwerk 2.8 / 0.6; jh wall paints 0.8 / 0 (limewash = 74–79). — [Google Trends CA brands batch](https://trends.google.com/trends/explore?date=2019-01-01%202026-11-01&geo=CA&q=limewash,romabio,portola%20paints,bauwerk,jh%20wall%20paints). Houzz US 2026 also frames limewash as "an affordable DIY option" for the textured look. — [CultureMap on Houzz](https://sanantonio.culturemap.com/news/home-design/2026-summer-design-trends-houzz/)
- **Venetian plaster (CA):** how to venetian plaster (90), venetian plaster home depot (54), modern masters venetian plaster (17) = DIY/product; venetian plaster fireplace (81), bathroom (16, rising +70%), marmorino (24, rising +50%) = pro-leaning. — [Google Trends CA](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=venetian%20plaster)
- **Microcement (CA):** microcement canada (100), bathroom (68), floor (46), wall (43), shower (42), what is microcement (40), kitchen (25), countertop (22), flooring (22); product/brand queries are minor (surecrete 9, concretta 7, "micro cement" 37). Retailer guidance: "usually requires multiple coats and precise trowel work, and hiring a professional installer is recommended". — [Google Trends CA](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=microcement); [Oui Colour Paint (Toronto)](https://ouicolourpaint.ca/what-is-microcement-and-where-can-you-use-it-in-your-home/)
- **Roman clay (CA):** roman clay paint (100), portola roman clay (47), portola paints roman clay (18) = brand/product; designers describe it as "very forgiving, easy to maintain" (DIY-able). — [Google Trends CA](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=roman%20clay); [Livingetc](https://livingetc.com/advice/what-finish-is-replacing-limewash)
- **Plaster walls (CA):** top queries are repair/DIY — how to plaster walls (100), lath and plaster walls (26), asbestos plaster walls (19), how to paint plaster walls (14), anchors for plaster walls (11), how to remove/fix plaster walls; decorative sub-queries are small (venetian plaster walls 18, lime plaster walls 9, textured plaster walls 8, clay plaster walls 4). — [Google Trends CA](https://trends.google.com/trends/explore?date=2024-01-01%202026-11-01&geo=CA&q=plaster%20walls)
- **Panels:** retailer/manufacturer blogs and a Toronto retailer selling ceiling-hung slat kits indicate purchase-and-DIY; trade commentary that fine-pitch solid-hardwood fluted panels "are expensive" is the only pro-install signal. — [The Panel Hub](https://thepanelhub.com/blogs/news/2026-wall-panel-trends-whats-in-whats-out), [Craftiva Art](https://www.craftivaart.com/products/ceiling-hung-natural-wood-slat)
- **German smear:** Bob Vila frames it as DIY ("German smear DIY") with a contractor price of US$1,500–3,500 as the alternative. — [Bob Vila](https://www.bobvila.com/articles/german-smear-diy/)
- **Colour drenching:** a paint-colour strategy executed by any painter; Houzz UK +142%, US 4× in Q1 2025; CertaPro (franchise painter) markets it as a service. — [CertaPro](https://certapro.com/?p=23050)

### Inferences
- Intent matrix (my classification): **Pro-only:** microcement, tadelakt, lime/clay plaster (true plaster), polished concrete, terrazzo, exterior stucco/smooth stucco re-render, plaster range hoods/arches, shou sugi ban cladding. **Mixed, pro-leaning on big surfaces:** venetian plaster, mineral paint on brick (Keim/Romabio exterior), brick staining. **DIY/product-dominant:** limewash (interior), roman clay, fluted/slat/acoustic panels, board-and-batten, wainscoting, colour drenching, wallpaper murals/grasscloth (DIY-able; pro for murals), German smear, limewash brick.
- For Quotd's "named local specialist" model, the best-fit combination of *rising curve + pro-only intent + measurable consumer naming* is microcement by a wide margin; venetian plaster is the best already-mature pro niche; roman clay's product intent means its pro demand will be a thin slice even when the head term grows.

### Gaps
- Related-query data is Canada-wide; Ontario related queries were not pulled separately (Canada-level is already thin).
- No conversion data (search → quote request) by finish exists publicly; the owner's torontolimewash.com GSC/leads are the only calibration available.
