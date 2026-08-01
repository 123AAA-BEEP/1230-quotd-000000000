# Primary-source verification — `data/modules/housing/toronto-on.json`

**Verification date:** 2026-08-01
**Verified by:** direct retrieval (`curl`) from toronto.ca and www12.statcan.gc.ca. Network egress open.
**Scope:** the two figures currently rendering on the live page — HCD count ("27 in Toronto") and pre-1961 dwelling share ("About 1 in 3 homes").
**Supersedes:** the `retrieval_caveat` in `toronto-on.json` and §1–2 of `toronto-on.notes.md`, both of which were search-snippet-only.

Retrieval note: `WebFetch` returns **HTTP 403** on toronto.ca, and www12.statcan.gc.ca serves a **404 stub to a default curl UA**. Both hosts retrieve correctly with `curl -L` plus a browser User-Agent and cookie jar. Not a content problem — a client-gating problem. Record this for the pipelines.

---

## FACT 1 — Toronto Heritage Conservation District count

**Claim as rendered:** "27 in Toronto"

**Primary sources retrieved:**

1. City of Toronto, *Heritage Conservation Districts & Studies* — the official HCD list
   <https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-conservation-districts-planning-studies/>
   **Date modified: July 22, 2026** (retrieved 2026-08-01, HTTP 200)
2. City of Toronto, *Designation of the Kensington Market Heritage Conservation District under Part V of the Ontario Heritage Act* — staff report, **Date: December 13, 2024**
   <https://www.toronto.ca/legdocs/mmis/2025/pb/bgrd/backgroundfile-251703.pdf>

### What the sources actually say

The official HCD page states, in a collapsed "Frequently Asked Questions (FAQs)" accordion:

> "The City of Toronto has been designating HCDs since 1985 and **has created 27 of them**."

The December 13, 2024 Kensington staff report states:

> "**To date, there are 27 districts across Toronto that are designated under Part V of the Ontario Heritage Act.** Kensington Market is one of three HCD plans that will be recently under consideration by Council for adoption."

**Critically, the City publishes no current total anywhere.** The same official page carries a table titled *Heritage Conservation Districts* with **24 rows**, and that table contradicts the "27" in its own FAQ. Several rows bundle multiple separately designated districts (each sub-district has its own HCD Plan PDF and its own designating by-law and year):

| Row | Year designated | Districts |
|---|---|---|
| Blythwood Road | 2005 | 1 |
| **Cabbagetown (North, Northwest, Metcalfe, South)** | 2002–2008 | **4** |
| Cabbagetown Southwest | 2024 | 1 |
| Draper Street | 1999 | 1 |
| East Annex | 1994 | 1 |
| Fort York | 1985 | 1 |
| Garden District | 2017 (OLT approval 2021) | 1 |
| **Harbord Village (Phase 1, Phase 2)** | 2005 / 2011 | **2** |
| Historic Yonge Street | 2016 (OLT approval 2024) | 1 |
| **Kensington Market** | **2025 (OLT approval 2026)** | 1 |
| King-Spadina | 2017 (OLT approval 2024) | 1 |
| Kingswood Road South | 2010 | 1 |
| Lyall Avenue | 2006 | 1 |
| West Annex Phase 1: Madison Avenue | 2015 (LPAT approval 2019) | 1 |
| Parkdale Main Street | 2022 (in force 2024) | 1 |
| Queen Street West | 2007 | 1 |
| Riverdale | 2008 | 1 |
| **Rosedale (South, North)** | 2002 / 2004 | **2** |
| St. Lawrence Neighbourhood | 2020 | 1 |
| **Teiaiagon-Baby Point** | **2025** | 1 |
| Union Station | 2006 | 1 |
| Weston Phase 1 | 2006 | 1 |
| Wychwood Park | 1985 | 1 |
| Yorkville-Hazelton | 2002 | 1 |
| **Total** | | **24 rows / 29 districts** |

### Why 29, and why "27" is stale

The City's counting convention is not stated, but it is **recoverable and provable** from the City's own report. Counting the current official table as 24 rows expanded to 29 individual districts, then removing the only two designated *after* the report's December 13, 2024 date:

- Kensington Market — By-law 94-2025, adopted by Council 2025-02-05; appealed, **OLT approval 2026**
- Teiaiagon-Baby Point — HCD Plan adopted by Council 2024-12-18, **five days after the report**

…yields **exactly 27**. This reconciliation is unique: the alternative convention (counting Harbord Village's two phases as one district) yields 26 at that date and contradicts the report. So the City counts Cabbagetown as 4, Rosedale as 2, and Harbord Village as 2 — and on that same basis today's total is **29**.

The "27" in the page's FAQ is therefore **unchanged boilerplate that predates two designations**, despite the page's July 22, 2026 modified date. The FAQ number and the page's own table cannot both be right.

### Verdict: **CORRECTED-to-29** — "27" is STALE

"27" was accurate as of **2024-12-13** and is still (incorrectly) repeated in the City's FAQ. It is **not** the current count. Two districts have been designated since: Teiaiagon-Baby Point and Kensington Market.

Confidence: high on "27 is stale"; high on 29 as the count under the City's own demonstrated convention. **Caveat: 29 is a derived count — the City does not publish it.** Anyone re-checking toronto.ca will see "27" in the FAQ, so the derivation must stay documented in the JSON.

---

## FACT 2 — Toronto pre-1961 dwelling share

**Claim as rendered:** "About 1 in 3 homes" (from 29.3%, previously described as 14.6% pre-1945 + 14.7% 1946–1960, via Point2Homes)

**Primary source retrieved:**

Statistics Canada, **Census Profile, 2021 Census of Population** — *Toronto, City (C) [Census subdivision], Ontario*, DGUID **2021A00053520005**
<https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=E&GENDERlist=1,2,3&STATISTIClist=1,4&HEADERlist=0&DGUIDlist=2021A00053520005&SearchText=toronto>
Release date 2022-02-09; **Date modified: 2026-06-05** (retrieved 2026-08-01, HTTP 200)

### What the source actually says

**Total – Occupied private dwellings by period of construction – 25% sample data: 1,160,890 (100.0%)**

| Period of construction | Count | % |
|---|---|---|
| **1960 or before** | **340,185** | **29.3** |
| 1961 to 1980 | 333,990 | 28.8 |
| 1981 to 1990 | 109,780 | 9.5 |
| 1991 to 2000 | 92,985 | 8.0 |
| 2001 to 2005 | 58,975 | 5.1 |
| 2006 to 2010 | 63,995 | 5.5 |
| 2011 to 2015 | 75,980 | 6.5 |
| 2016 to 2021 | 85,005 | 7.3 |

Statistics Canada, footnote 56:
> "Period of construction refers to the period in time during which the building or dwelling was originally constructed. This refers to the period in which the building was completed, **not the time of any later remodeling, additions or conversions.**"

Footnote 57 (on "2016 to 2021"): "Includes data up to May 11, 2021."

### Three corrections this forces

1. **29.3% is a directly published StatCan category, not a derived sum.** StatCan's 2021 category is a single bucket, **"1960 or before" = 29.3% (340,185 dwellings)**. The figure is right; the stated derivation is wrong.
2. **The 14.6% / 14.7% split does not exist in the 2021 Census.** StatCan publishes no "before 1945" or "1946–1960" categories for 2021. That split is Point2Homes' own re-binning and is **unverifiable against the primary source** — it must be removed from the JSON, not merely re-sourced.
3. **Two different totals, both real.** The period-of-construction universe is **1,160,890** (25% sample, rounded). The separately published "Private dwellings occupied by usual residents" (100% data) is **1,160,892** — the figure currently in the JSON. They are different measures; label whichever is used.

Also confirmed directly, replacing the previously computed/unverified values: 1961–1980 = **28.8%**, 1981–1990 = **9.5%**, 1991–2000 = **8.0%**, and the 2001+ residual = 5.1+5.5+6.5+7.3 = **24.4%** (previously a computed residual flagged "verify before quoting" — now confirmed against published categories). Geography is confirmed as the **City of Toronto CSD**, not the CMA.

### Verdict: **CONFIRMED — 29.3%.** Wording "about 1 in 3": **CORRECTED**

The number is confirmed exactly against StatCan. The *characterisation* is loose: 29.3% is **1 in 3.4**, not 1 in 3. "About 1 in 3" implies 33.3% and overstates by 4.0 percentage points (~14% relative). Since we now hold the exact published figure, the rounding is unnecessary.

Recommended copy: **"nearly 3 in 10 homes"**, "just under 30%", or plainly "29.3%".

---

## Where these render

Both figures come from `src/pages/[niche]/[city].astro`:

- **line 47** — `tiles.push({ label: 'Heritage districts', value: \`${housing.heritage.hcd_count} in ${city.name}\` })` → renders "27 in Toronto"
- **line 160** — prose: `{city.name} has {housing.heritage.hcd_count} Heritage Conservation…`
- **line 52** — `value: pct >= 28 && pct <= 38 ? 'About 1 in 3 homes' : \`${pct}% of homes\``

Note on line 52: **"About 1 in 3 homes" is a hardcoded template band, not Toronto copy.** Any city with a pre-1961 share between 28% and 38% renders the identical string. That band is too wide for the claim — at its floor, 28% is 1 in 3.6, and at its ceiling, 38% is 1 in 2.6. Neither end is "about 1 in 3". So this is a **systemic wording bug affecting every city in the band**, not a Toronto data error, and fixing it means narrowing/replacing the template rule rather than editing `toronto-on.json`. Note also that it interacts with the §5.4 cross-page dedup linter: an identical hardcoded sentence across many city pages is exactly the same-niche prose overlap that gate is meant to catch.

## What should change on the page

| # | Change | Priority |
|---|---|---|
| 1 | **"27 in Toronto" → do not publish as-is.** Use **29**, or the safer, fully self-verifying framing: "the City lists 24 heritage conservation districts, several of which bundle multiple separately designated districts — 29 in all." | **Blocking** — the rendered figure is stale |
| 2 | **"About 1 in 3 homes" → "nearly 3 in 10 homes"** (or "just under 30%"). Figure 29.3% stands. Fix at `[city].astro:52` — the 28–38% band is too wide to justify the phrase for *any* city; prefer rendering the actual percentage. | High — wording, template-wide |
| 3 | In `toronto-on.json`: re-source period-of-construction to the StatCan CSD profile; **delete `before_1945_pct` and `built_1946_1960_pct`** (not census categories); change `pre_1961_note` from "computed: 14.6 + 14.7" to "published category '1960 or before'"; set the PoC total to 1,160,890 and label 1,160,892 as the 100%-data occupied-dwellings count. | High — data integrity |
| 4 | Drop `retrieval_method: "web_search_snippets_only"` and the `retrieval_caveat` for these two facts; both are now primary-retrieved. Point2Homes should no longer appear as a source for housing age. | High |
| 5 | Record `hcd_count_note` with the full derivation (24 rows → 29; City FAQ still says 27; Kensington + Teiaiagon-Baby Point post-date the 27). A reviewer checking toronto.ca will see "27" and needs the reconciliation. | Medium |
| 6 | Pipelines: toronto.ca 403s and statcan.gc.ca 404s against default clients. Send a browser UA + cookie jar. Not a content failure. | Medium |

**Unchanged and still correct:** the operative heritage sentence — properties in an HCD are designated under Part V of the Ontario Heritage Act and certain alterations require a heritage permit, with each district's HCD Plan defining which. That, not the count, is the fact that changes the advice (spec §0). The count is decorative; if the 27-vs-29 discrepancy is a publish-gate risk, the cheapest fix is to drop the bare number and keep the permit rule.

**Still open (not in this task's scope, from `toronto-on.notes.md`):** Job Bank Toronto median wage for NOC 73112; Romabio CAD retail price. Both still `null`; egress is now open, so both are newly retrievable.
