# Platform coverage in the GTA: Local Services Ads, HomeStars, Houzz, Yelp

- retrieved_at: 2026-09-28
- scope: how much of a Toronto results page for a home-service term is already taken by a paid unit (Google Local Services Ads, LSA) or by a directory category page (HomeStars, Houzz, Yelp). Checked for the 32 pass-1 terms. Companion to `gbp-home-service-categories.md`, which covers the Google Business Profile (GBP) taxonomy.
- method:
  - **LSA:** Google's own help pages were pulled for Canada and the US (`co=GENIE.CountryCode=CA` and `=US`) and parsed as text. Category names are copied verbatim.
  - **Houzz:** the pro-directory sitemap index (157 files, lastmod 2026-09-27) was downloaded to get Houzz's own category slugs, category IDs and "project-type" facets, with Canadian and Ontario URL counts. Houzz HTML sits behind a JavaScript challenge, so display names were not fetched.
  - **Yelp:** the full category tree was parsed from Yelp's developer reference, which tags each category with the countries where it is available.
  - **HomeStars:** every HTML page returned HTTP 403 (a Cloudflare "Just a moment..." challenge), to both curl and WebFetch. What is here comes from HomeStars's own static files (build manifest, en-CA UI strings, the 404 page, the support-site sitemap), from search-engine renderings of HomeStars pages captured before this session's web-search budget ran out (200 of 200 calls), and from HomeStars URLs that sibling agents surfaced in `evidence/c1`, `c2` and `c4`.
  - **GBP services field:** read from Google Business Profile Help.
- sources: listed in full at the end. Tags such as [L-CA-REQ] point there.
- limitations:
  1. **HomeStars is the weak column.** Its full category and service list could not be pulled, and all 32 HomeStars cells are OBSERVED (a name seen in a rendering, not fetched) or EST (my belief). §2.4 gives a 20-minute manual check that closes this.
  2. **No results page was observed.** Nothing here shows whether an LSA unit or a directory page actually appears for a Toronto query. Having a category makes a unit or page possible; it does not prove one ranks. The README §9 manual check covers this.
  3. **LSA availability by postcode was not checked.** Google's "Check eligibility" flow needs an account.
  4. **Houzz display names are derived from slugs.** The slugs themselves are verbatim. The sitemaps sample locations, so "no Toronto URL in sitemap" does not mean Houzz has no Toronto page.
  5. **Yelp availability is by country, not by city.** "Available in CA" means Yelp Canada, and therefore Toronto, offers the category.

---

## Key findings

1. **LSA in Canada is a short list of 17 home-service categories. The US has 41.** Canada has no painter, landscaping, foundations, general contractor, handyman, remodeling, pool, insulation or drain category. Google's own Canada pages disagree by one: the requirements page lists 17, including "Garage door", while the getting-started page lists 16 [L-CA-REQ][L-CA-START].
2. **For 22 of the 32 terms, Canada has no LSA category, so no LSA unit can appear.** One term is EXACT: water damage restoration, under "Water damage services". Nine are PARTIAL, riding on Roofing, Window repair, Electrician, HVAC, Plumber, Tree service or Water damage services. Water damage services is the one to watch: Google's own scope line says it covers "water damage issues such as mold, sewage, and paint damage", so mould queries are exposed to an LSA unit.
3. **"Google Screened" no longer exists.** Since October 2025 every LSA badge, including Google Guaranteed, Google Screened and License Verified, has been folded into one "Google Verified" badge [G-BLOG]. In Canada all 17 categories need business and owner checks, insurance, and a business and owner licence "on a province and/or country level", which Google qualifies as "where applicable by local law". Five categories also need field-worker background checks: Electrician, Garage door, HVAC, Locksmith and Plumber. Two, Garage door and Locksmith, also need Google's Advanced Verification [L-CA-REQ]. In Ontario the licence check only has something to verify for electricians (ECRA/ESA), fuel-burning HVAC work (TSSA), plumbers (306A) and pest control (exterminator licence) (§1.2).
4. **HomeStars has changed platform and taxonomy.** It now runs on Angi's shared international marketplace code, the same code as MyHammer, Werkspot, Instapro and Travaux. It has category "content clusters", professions, services, tasks and price guides, and charges pros per lead. HomeStars itself says it has "24 categories and over 500 tasks" (search rendering). Older category pages still resolve. A few observed names matter here: "Elevators, Lifts & Ramps Installation & Service", "Fire & Water Damage Restoration" (2022 copy), "Foundations", and Toronto price guides for basement waterproofing, egress windows and chimney rebuilds (§2).
5. **Houzz reaches the most niche terms by name.** It has 62 professional categories and about 250 "project-type" facets. EXACT pages exist for 7 terms: waterproofing, slate roof, laneway suite (as its ADU category), pergola, outdoor kitchen, sauna and wine cellar.
6. **Yelp Canada is EXACT for 5 terms:** waterproofing, fire restoration, water damage restoration, sauna and home elevator. "Demolition Services" and "Tiling" are not offered in Canada.
7. **No term has zero coverage in the strict sense.** Every term maps to at least a broad trade category on Houzz or Yelp. Fourteen terms have no Canadian LSA category and no EXACT category or facet on Houzz or Yelp: limewash, venetian plaster, underpinning / basement lowering, tuckpointing, basement apartment legalization, asbestos removal, vermiculite, radon, interlock repair, armour stone, pool removal, soundproofing, stair lift and heated driveway. HomeStars is unverified, and it probably covers stair lift through its "Elevators, Lifts & Ramps" category and possibly asbestos and interlock. The thinnest fallbacks of all are radon, soundproofing, heated driveway and pool removal (§5).
8. **The GBP free-text services field limits the thesis.** A Painter can add a custom service such as "Limewash painting", and Google says the service "may be highlighted" when someone searches for it. Categories remain the ranking lever Google names: "The categories you select affect your local ranking on Google." Google also says it "can also detect category information from your website and from mentions about your business throughout the web" (§4).

---

## 1. Google Local Services Ads (LSA): Canada vs US

### 1.1 Canada: the 17 eligible home-service categories, verbatim

Source: the "Business screening and verification requirements - Canada" page [L-CA-REQ], https://support.google.com/localservices/answer/12174778?hl=en&co=GENIE.CountryCode%3DCA. The page has a single group, "Home services". Canada lists no professional, health, auto, beauty or other verticals.

| # | Category (verbatim) | Google's scope line (verbatim) | Checks beyond the base set* |
|---|---|---|---|
| 1 | Appliance repair | "An appliance repair professional is a service provider who works on the maintenance, repair, and installation of appliances, among other services." | — |
| 2 | Carpet & Upholstery cleaning | "A carpet and upholstery cleaning professional is a service provider who specializes in the cleaning and maintenance of carpet, flooring, and furniture upholstery, among other services." | — |
| 3 | Electrician | "An electrician is a service professional who works on the installation, maintenance, and repair of electrical systems, among other services." | Service professional check (urgent category) |
| 4 | Garage door | "A garage door professional is a service provider who works with overhead and garage door systems, among other services." | Service professional check; Advanced Verification (urgent category) |
| 5 | House cleaning | "House cleaning professionals perform standard or deep cleans on offices or homes, among other services." | — |
| 6 | HVAC | "An HVAC professional installs, maintains, and repairs furnaces and central air conditioning systems, among other services." | Service professional check (urgent category) |
| 7 | Junk removal | "Junk removal professionals remove and dispose or donate appliances, waste, furniture, or other items." | — |
| 8 | Lawn care | "Lawn care professionals maintain lawns, including installation and maintenance, such as weed control, mowing, and seeding, among other services." | — |
| 9 | Locksmith | "A locksmith is a service professional who works with locks, keys, and security systems among other services." | Service professional check; Advanced Verification (urgent category) |
| 10 | Moving | "Moving professionals pack, move, store, and unpack belongings among other services." | — |
| 11 | Pest control | "Pest control professionals inspect and remove various types of pests, including bugs and rodents." | — |
| 12 | Plumber | "Plumbers are service professionals who deal with pipes, drains, sewers and the appliances in your home that connect to these systems. Sometimes they may also service gas or other services." | Service professional check (urgent category) |
| 13 | Roofing | "Roofing professionals install, repair, and maintain the shingles, gutters, and venting on your roof, among other services." | — |
| 14 | Tree service | "Tree service professionals plant, remove, and maintain trees, among other services." | Public liability insurance (instead of general + professional) |
| 15 | Water damage services | "Water damage professionals clean and inspect water damage issues such as mold, sewage, and paint damage, among other services." | Public liability insurance; footnote: "Professionals with this certification may need additional licenses to repair water damage issues." (The US page names the certification, IICRC; the Canada page carries only the footnote.) |
| 16 | Window cleaning | "Window cleaning professionals clean windows, mirrors, skylights, and gutters, among other services." | Public liability insurance |
| 17 | Window repair | "Window repair professionals install and repair windows and may also service skylights, doors, and other types of glass, among other services." | Public liability insurance |

\*Base set for every Canadian category, verbatim from [L-CA-REQ]: "Business check", "Owner check", insurance (general and professional liability, or public liability where noted), "Business license on a province and/or country level*" and "Owner license on a province and/or country level*", where "* = Where applicable by local law." A verified, public Google Business Profile is also required.

**The same list on Google's Canada getting-started page (16, verbatim)** [L-CA-START]: Appliance repair services · Carpet cleaning services · Cleaning services · Electricians · HVAC (heating or air conditioning) · Junk removal services · Lawn care services · Locksmiths · Movers · Pest control services · Plumbers · Roofers · Tree services · Water damage services · Window cleaning services · Window repair services. Garage door is missing here but present on the requirements page. An agency guide dated 11 July 2026 lists the same 17 as the requirements page and says the professional and health verticals "have not been rolled out in Canada" [PB]. **Count used here: 17.**

### 1.2 "Google Screened" and licence checks in Ontario

- **Badges.** Google's announcement: "Google Verified will replace other LSA badges and programs, like Google Guaranteed, Google Screened, License Verified by Google and the Money Back Guarantee", effective October 2025 [G-BLOG]. The Canada pages now describe only the "Google Verified badge" and "pre-badge ads", and note that "Pre-badge ads aren't available for garage door services, health care verticals, and locksmiths" [L-CA-START]. So **no Canadian category uses "Google Screened" any more.** That badge was for professional verticals such as lawyers and real estate, which Canada never had.
- **What the checks involve.** Background checks are "required for select users in the US and Canada". Canadian business registration is verified by documents, registration numbers or attestation. Google "validates these licenses against the state or country databases", and businesses "must also confirm that they hold applicable county, city, and province-level licenses" [L-PROC].
- **Which Ontario licences exist for each LSA category.** This is my mapping (EST) of Google's "where applicable by local law" onto Ontario regulators:

| LSA category | Ontario licence a check would find | Source |
|---|---|---|
| Electrician | Licensed Electrical Contractor number (ECRA/ESA): "in Ontario, it's illegal to hire an electrician who doesn't have an ECRA/ESA licence number". Electrician 309A and 309C are compulsory trades. | [ESA]; [STO] |
| HVAC | TSSA registration: "Registered Fuels Contractors are the only businesses that are legally authorized to do fuels related work in Ontario". Refrigeration and Air Conditioning Systems Mechanic (313A) and Residential (Low Rise) Sheet Metal Installer (308R) are compulsory. | [TSSA]; [STO] |
| Plumber | Plumber (306A) is compulsory. Municipal plumbing licences were not checked. | [STO] |
| Pest control | Exterminator and operator licences under Ontario's pesticide rules | [ON-PEST] |
| Lawn care | The same pesticide licence, only if the business applies pesticides (EST) | [ON-PEST] |
| Appliance repair | Appliance Service Technician (445A) is non-compulsory. Gas appliances fall under TSSA fuels registration (EST). | [STO]; [TSSA] |
| Roofing | Roofer (449A) is non-compulsory, so there is no provincial licence to verify (EST) | [STO] |
| Tree service | Arborist (444A) is non-compulsory, so there is no provincial licence to verify (EST) | [STO] |
| Locksmith | Locksmith (259L) is non-compulsory (EST: no provincial licence) | [STO] |
| Garage door; House cleaning; Carpet & Upholstery cleaning; Junk removal; Moving; Water damage services; Window cleaning; Window repair | No provincial trade licence identified (EST) | — |

Skilled Trades Ontario defines the terms: "Compulsory trades require that you be a registered apprentice, Provisional Certificate of Qualification holder or Certificate of Qualification holder to legally work in the trade" [STO]. For Quotd this also means that Brick and Stone Mason (401A), Restoration Mason (244H), Drywall Finisher and Plasterer (453A) and Painter and Decorator (404C) are all non-compulsory. The tuckpointing and plaster trades have no provincial licence to verify.

### 1.3 United States: 41 home-service categories, verbatim, for comparison

Source: the "Home services" section of [L-US-REQ]. The US getting-started page [L-US-START] lists 204 entries across all verticals (home services, restaurants, health, legal, auto, beauty, pets and others).

Appliance repair · Architect (currently available in California and Florida only) · Bathroom remodeling · Carpenters · Carpet & Upholstery cleaning · Countertop services · Drain expert (currently available in California and Florida only) · Electrician · Fencing services · Flooring services · Foundations services · Garage door · General contractor · Handyman · Home inspector · Home insulation (currently available in California and Florida only) · Home security · Home theater · House cleaning · HVAC · Interior designer (currently available in California and Florida only) · Junk removal · Kitchen Remodeling · Landscaping services · Lawn care · Locksmith · Moving · Painter · Pest control · Plumber · Pool cleaner · Pool contractor · Roofing · Sewage systems · Siding services · Snow removal · Solar energy contractor · Tree service · Water damage services · Window cleaning · Window repair

**US-only (24 categories not offered in Canada):** Architect, Bathroom remodeling, Carpenters, Countertop services, Drain expert, Fencing services, Flooring services, Foundations services, General contractor, Handyman, Home inspector, Home insulation, Home security, Home theater, Interior designer, Kitchen Remodeling, Landscaping services, Painter, Pool cleaner, Pool contractor, Sewage systems, Siding services, Snow removal, Solar energy contractor. Canada has no category that the US lacks.

Several US scope lines bear on Quotd terms and show what could reach Canada later. All are verbatim from [L-US-REQ]:
- Foundations services: "installing, raising, repairing, maintaining, and waterproofing basements, crawl spaces, and other foundations". This would cover underpinning and waterproofing.
- Drain expert: "installation of drains for the removal of water from homes, yards, and buildings". This would cover french drains.
- Home insulation: "Insulation removal doesn't include asbestos abatement."
- Painter: "specializes in painting home interiors and exteriors". This would cover limewash and venetian plaster loosely.
- Pool contractor: "pool remodeling, repairs, and additional installation services".

### 1.4 What LSA means for the 32 terms

- **EXACT (1):** water damage restoration, under "Water damage services".
- **PARTIAL (9), where an LSA unit is possible:**
  - mold, under Water damage services, whose scope line names mold.
  - heat pump, under HVAC.
  - knob and tube, under Electrician.
  - slate roof and flat roof, under Roofing.
  - heritage window restoration, under Window repair.
  - egress window, under Window repair. Weak: the foundation cut is outside its scope.
  - french drain, under Plumber ("pipes, drains, sewers"). Weak.
  - arborist report, under Tree service. Weak: a report is a consulting product.
- **NONE in Canada (22):** limewash, venetian plaster, underpinning, tuckpointing, waterproofing, laneway suite, basement apartment legalization, asbestos removal, vermiculite, radon, fire restoration (Water damage services does not name fire), interlock repair, armour stone, pool removal, pergola, outdoor kitchen, sauna, wine cellar, soundproofing, home elevator, stair lift, heated driveway.

---

## 2. HomeStars

### 2.1 Access status

- `https://www.homestars.com/robots.txt` permits general crawling of category pages. Only `/login`, `*.json` and `/_next` are disallowed, plus named bad bots [HS-ROBOTS].
- Every HTML page tried returned **HTTP 403 with a Cloudflare "Just a moment..." challenge**, to both curl and WebFetch. The pages tried were `/categories`, `/services`, `/professions`, `/find-a-service`, `/on/toronto/categories`, `/sitemap.xml` and blog pages. Sibling agents hit the same wall (`evidence/c2` line 15, `c4` line 9, `c5` line 13).
- The session's web-search budget was exhausted (200 of 200 calls) partway through this task, so per-term `site:homestars.com` checks could not be run.
- The HomeStars API host `api.homestars.com` has `Disallow: /` in its robots.txt and was not used. Third-party reader proxies were not used to get past the challenge.

### 2.2 What HomeStars is now (verified from HomeStars's own files)

- **Ownership.** "HomeStars was acquired by HomeAdvisor's parent company IAC, in February 2017" [WIKI-HS]. HomeAdvisor is now part of Angi (EST, general knowledge).
- **Platform.** HomeStars runs on Angi's shared international marketplace code:
  - Its 404 page loads `/one-design-system-themes/instapro.css` [HS-404].
  - Its build manifest routes pages in German, Dutch, Italian and French (`/auftragnehmer/...`, `...-vakmannen`, `...-professionisti`, `...-professionnels`) next to `...-pros` [HS-BUILD].
  - Its en-CA UI strings include "Share a unique referral link to tradespeople who are not on MyHammer." [HS-MSG].
- **Taxonomy layers**, from route patterns in [HS-BUILD]:
  - content cluster ("category"): `/[contentCluster]`
  - service: `/[contentCluster]/[serviceSlug]`
  - task: `/[contentCluster]/jobs/[taskSlug]`
  - directory: `/:contentClusterSlug/:customTradeSlug-pros/:locationSlug`
  - price guides: `/:contentCluster/price-guides/:slug`
  - index pages: `/all-trades`, `/all-price-guides`, `/find-a-service/:slug*`

  UI strings confirm the same layers: "Our services", "Our pros' professions", "Select up to 5 professions", "Choose a category", "Why are some services not listed?" and "As demand changes, more services may become available." [HS-MSG].
- **Size.** HomeStars's blog says it has "24 categories and over 500 tasks" (search-engine rendering of https://www.homestars.com/blog/how-to-select-a-pro-on-homstars; the page itself returns 403).
- **Gated services.** The UI carries "Restricted services", "Skills evaluation required", "Verified trade license", "Upload your asbestos certificate" and "Upload your architect certificate" [HS-MSG]. EST: asbestos work exists as a certificate-gated service, but that inference rests on a shared-code string.
- **Lead model.** Pros pay per lead, with shortlisting and sponsored placements. The support-site article slugs show this: "What-are-the-fees", "How-are-lead-fees-calculated", "What-is-shortlisting-and-how-do-I-get-in-contact-with-pros", "What-are-sponsored-placements", "How-are-districts-changing" [HS-SUP].

### 2.3 Category names observed (partial; not a full list)

Names are verbatim as they appeared in the source shown. The grouping of 2026 names under headings is my inference; the renderings gave names and headings but not the nesting. The /categories pages are HomeStars's older taxonomy. They still resolved in search on 2026-09-28, but their exact current contents are unverified.

| Group heading as rendered (grouping inferred) | Category names seen | Where seen |
|---|---|---|
| Architects, Builders & Engineers | Architects · Builders · Design/Project Management · Elevators, Lifts & Ramps Installation & Service ("…and Service" in one rendering) · Excavation · Foundations · General Contractors · Home Additions · Renewable Energy · Sunrooms, Solariums & Greenhouses · Swimming Pools, Spas and Hot Tubs | 2026 search renderings of https://homestars.com/qc/chelsea/categories and https://homestars.com/ab/calgary/categories/; "Elevators…" also in the 2022 copy [HS-2022] |
| Heating & Furnaces | Heating & Air Conditioning · Duct Cleaning | 2026 rendering (Chelsea) |
| Landscape & Garden (2022: "Landscape, Yard & Garden") | Landscape Contractors & Designers | 2026 rendering (Chelsea, Calgary); [HS-2022] |
| Windows & Doors | Windows & Doors Installation & Service | 2026 rendering (Chelsea); [HS-2022] |
| Carpentry & Woodworking | Basement Renovation · Bathroom & Kitchen - Fixtures & Accessories · Cabinetry & Millwork · Carpenters · Closet & Storage Solutions · Framing | [HS-2022]; heading also in the 2026 Calgary rendering |
| Cleaning Services | Blinds Cleaning & Repairing · Carpet & Rug Cleaning & Repairing · Drapery & Upholstery Cleaning · Duct Cleaning · Fire & Water Damage Restoration · House Cleaning Exteriors · Junk Removal | [HS-2022] |
| (renovation group) | Basement Renovation · Bathroom Renovation · Condominium Renovations · Decks · Demolition | [HS-2022] |
| Other headings rendered in 2026 | Chimney Build & Repair · Decorators & Designers · Electrical & Home Theatre · Flooring · Handyman Services · Plumbing · Roofing · Walls & Ceilings | 2026 rendering (Calgary, /categories) |

**Current-platform slugs seen (verbatim URL segments):**
- content clusters: `handyman-services`, `home-constructions-renovations`, `gardening-outdoors`, `moving`, `windows-doors`, `air-conditioning`
- professions: `handyman`, `general-contractor`, `landscaping-company`, `moving-company`
- example directory pages: https://www.homestars.com/handyman-services/handyman-pros/toronto and https://www.homestars.com/home-constructions-renovations/general-contractor-pros/toronto (seen in search results)
- Toronto price guides relevant here, surfaced by sibling agents:
  - https://www.homestars.com/home-constructions-renovations/price-guides/basement-waterproofing-cost-toronto
  - https://www.homestars.com/windows-doors/price-guides/basement-egress-window-cost
  - https://www.homestars.com/home-constructions-renovations/price-guides/chimney-build-repair-cost-toronto
  - https://www.homestars.com/air-conditioning/price-guides/heat-recovery-ventilation-system-cost

These show that HomeStars also claims outcome terms through **price-guide content**, not only through category pages.

### 2.4 Term check and how to close it

The HomeStars column of §5 records OBSERVED where a name was seen, and EST otherwise. **A 20-minute manual check replaces it.** From a normal browser, open https://www.homestars.com/categories, https://www.homestars.com/services and https://www.homestars.com/professions and save each list. Then type each of the 32 terms into the "Find a service" box, which leads to `/find-a-service/…`, and record one of:
- (a) a service or task page (EXACT)
- (b) redirected to a broader profession (PARTIAL, record which)
- (c) "No matching service found" (a UI string in [HS-MSG]), which is NONE

Alternatively, raise `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` and rerun `site:homestars.com <term> toronto` for the 32 terms.

---

## 3. Houzz and Yelp (lighter pass)

### 3.1 Houzz

**All 62 professional categories (verbatim sitemap slugs** [HZ-IDX]**):** `accessory-dwelling-units`, `air-conditioning-and-heating`, `architects-and-building-designers`, `backyard-courts`, `basement-remodeling`, `bathroom-remodelers`, `building-supplies`, `cabinets-and-cabinetry`, `carpenters`, `chimney-cleaners`, `custom-artists`, `custom-closet-designers`, `custom-countertops`, `decks-patios-and-outdoor-enclosures`, `design-build-firms`, `door-dealers`, `driveway-installation-and-maintenance`, `electricians`, `environmental-services-and-restoration`, `fence-contractors`, `fireplaces`, `flooring-contractors`, `furniture-and-accessories`, `furniture-repair-and-upholstery`, `garden-and-landscape-supplies`, `gardeners-and-lawn-care`, `general-contractors`, `glass-and-shower-door-dealers`, `handyman`, `home-additions`, `home-automation-and-home-media`, `home-builders`, `home-remodeling`, `home-stagers`, `interior-designers-and-decorators`, `ironwork`, `kitchen-and-bath-fixtures`, `kitchen-and-bathroom-designers`, `kitchen-remodelers`, `landscape-architects-and-landscape-designers`, `landscape-contractors`, `lighting`, `outdoor-lighting-and-audio-visual-systems`, `paint-and-wall-coverings`, `painters`, `plumbers`, `professional-organizers`, `roofing-and-gutters`, `siding-and-exteriors`, `solar-energy-systems`, `spa-and-pool-maintenance`, `specialty-contractors`, `staircases-and-railings`, `stone-pavers-and-concrete`, `swimming-pool-builders`, `tile-and-stone-contractors`, `tree-services`, `universal-design`, `window-cleaners`, `window-contractors`, `window-treatments`, `wine-cellars`.

**Relevant categories, with Canadian presence in Houzz's own sitemaps** (lastmod 2026-09-27). Toronto's Houzz region ID is `r_6167865`.

| Sitemap slug | Live URL path | Houzz id | URLs in sitemap (all / Canada / Ontario) | Toronto URL in sitemap |
|---|---|---|---|---|
| `accessory-dwelling-units` | `/professionals/adu-contractors/` | t_34256 | 6,243 / 1,907 / 706 | yes |
| `air-conditioning-and-heating` | `/professionals/hvac-contractors/` | t_11814 | 2,799 / 736 / 265 | no |
| `basement-remodeling` | `/professionals/basement-remodelers/` | t_34261 | 13,460 / 4,472 / 1,030 | yes |
| `chimney-cleaners` | `/professionals/chimney-cleaners/` | t_27200 | 885 / 78 / 59 | no |
| `decks-patios-and-outdoor-enclosures` | `/professionals/decks-and-patios/` | t_11830 | 8,990 / 3,773 / 1,571 | yes |
| `driveway-installation-and-maintenance` | `/professionals/driveways-and-paving/` | t_11832 | 9,111 / 2,973 / 1,431 | no |
| `electricians` | `/professionals/electrical-contractors/` | t_11818 | 4,922 / 2,028 / 776 | yes |
| `environmental-services-and-restoration` | `/professionals/environmental-services-and-restoration/` | t_11813 | 1,043 / 52 / 18 | no |
| `landscape-contractors` | `/professionals/landscape-contractors/` | t_11812 | 12,707 / 7,937 / 3,218 | yes |
| `painters` | `/professionals/painters/` | t_27105 | 13,044 / 5,404 / 1,950 | no |
| `plumbers` | `/professionals/plumbing-contractors/` | t_11817 | 4,249 / 1,694 / 833 | no |
| `roofing-and-gutters` | `/professionals/roofing-and-gutter/` | t_11819 | 7,965 / 3,751 / 1,325 | no |
| `specialty-contractors` | `/professionals/specialty-contractors/` | t_11811 | 1,519 / 129 / 18 | yes |
| `stone-pavers-and-concrete` | `/professionals/stone-pavers-and-concrete/` | t_11824 | 1,094 / 18 / 14 | no |
| `swimming-pool-builders` | `/professionals/pools-and-spas/` | t_11795 | 9 / 0 / 0 | no |
| `tree-services` | `/professionals/tree-service/` | t_11821 | 3,873 / 1,434 / 740 | no |
| `universal-design` | `/professionals/universal-design/` | t_34260 | 5,299 / 675 / 90 | no |
| `window-contractors` | `/professionals/windows/` | t_11797 | 23 / 10 / 10 | no |
| `wine-cellars` | `/professionals/wine-cellars/` | t_11841 | 1,025 / 21 / 3 | no |
| `general-contractors` | `/professionals/general-contractor/` | t_11786 | 59,867 / 28,995 / 9,776 | yes |

**Project-type facets.** These are Houzz's service-level layer, about 250 values in the sitemaps and comparable to GBP "services". The relevant ones, with counts of Canadian and Ontario URLs in the sitemaps [HZ-IDX]:

| Facet | Canada | Ontario |
|---|---|---|
| `accessory-dwelling-units` | 3,988 | 1,922 |
| `universal-design` | 1,631 | 934 |
| `outdoor-kitchen-construction` | 1,664 | 745 |
| `foundation-repair` | 928 | 398 |
| `faux-painting` | 899 | 404 |
| `home-restoration` | 901 | 306 |
| `demolition` | 806 | 265 |
| `retaining-wall-construction` | 712 | 214 |
| `pergola-construction` | 567 | 204 |
| `hardscaping` | 542 | 165 |
| `decorative-painting` | 413 | 221 |
| `insulation-installation` | 335 | 112 |
| `sauna-installation` | 317 | 173 |
| `hvac-repair` | 303 | 114 |
| `waterproofing` | 293 | 109 |
| `dry-wells` | 283 | 120 |
| `basement-waterproofing` | 226 | 72 |
| `rubber-roofing` | 219 | 92 |
| `torch-down-roofing` | 206 | 88 |
| `slate-roofing` | 177 | 82 |
| `tar-and-gravel-roofing` | 141 | 90 |
| `window-repair` | 2 | 2 |
| `brick-repair` | 0 | 0 |
| `paver-installation` | 0 | 0 |

No facet exists for: limewash, plaster, underpinning, tuckpointing, egress, flat roof (by that name), knob and tube, asbestos, vermiculite, mould, radon, heat pump, interlock, armour stone, pool removal, soundproofing, elevator, stair lift, arborist report or heated or snow-melt driveways.

Example Ontario URLs from the sitemaps:
- https://www.houzz.com/professionals/kitchen-and-bath-remodelers/toronto-on-ca-project-type-outdoor-kitchen-construction-probr1-bo~t_11825~r_6167865~sv_29408
- https://www.houzz.com/professionals/adu-contractors/toronto-on-ca-project-type-accessory-dwelling-units-probr1-bo~t_34256~r_6167865~sv_30712
- https://www.houzz.com/professionals/architect/toronto-on-ca-project-type-universal-design-probr1-bo~t_11784~r_6167865~sv_29524
- https://www.houzz.com/professionals/roofing-and-gutter/hawkesville-on-ca-project-type-slate-roofing-probr1-bo~t_11819~r_101181279~sv_29467
- https://www.houzz.com/professionals/kitchen-and-bath-remodelers/kawartha-lakes-on-ca-project-type-sauna-installation-probr1-bo~t_11825~r_101180958~sv_29450
- https://www.houzz.com/professionals/wine-cellars/springford-on-ca-probr0-bo~t_11841~r_101726646

### 3.2 Yelp (Canada availability)

Yelp's developer reference lists "all categories currently recognized for search filtering", each tagged with its alias and the countries where it is available ("All" or a list of country codes) [YELP]. The parsed tree has 1,612 entries, 1,145 of them available in Canada. The Home Services parent has 82 direct children, and 75 are available in Canada. Seven are **not** available in Canada: Childproofing, Demolition Services, Home Network Installation, Irrigation, Solar Panel Cleaning, Tiling, Utilities (the parent node).

Relevant Yelp categories available in Canada (verbatim name, alias):
- **Home Services:** Chimney Sweeps (`chimneysweeps`) · Damage Restoration (`damagerestoration`) · Decks & Railing (`decksrailing`) · Drywall Installation & Repair (`drywall`) · Electricians (`electricians`) · Excavation Services (`excavationservices`) · Foundation Repair (`foundationrepair`) · General Contractors (`contractors`) · Heating & Air Conditioning/HVAC (`hvac`) · Home Energy Auditors (`homeenergyauditors`) · Insulation Installation (`insulationinstallation`) · Landscape Architects or Designers (`landscapearchitects`) · Landscaping (`landscaping`) · Masonry/Concrete (`masonry_concrete`) · Painters (`painters`) · Patio Coverings (`patiocoverings`) · Plumbing (`plumbing`) · Pool & Hot Tub Service (`poolservice`) · Refinishing Services (`refinishing`) · Roof Inspectors (`roofinspectors`, CA and US only) · Roofing (`roofing`) · Sauna Installation & Repair (`saunainstallation`) · Structural Engineers (`structuralengineers`) · Stucco Services (`stucco`) · Tree Services (`treeservices`) · Waterproofing (`waterproofing`) · Windows Installation (`windowsinstallation`)
- **Local Services:** Elevator Services (`elevatorservices`) · Environmental Abatement (`enviroabatement`) · Environmental Testing (`environmentaltesting`) · Stonemasons (`stonemasons`) · Biohazard Cleanup (`biohazardcleanup`) · Hazardous Waste Disposal (`hazardouswastedisposal`)
- **Professional Services:** Architects (`architects`)
- **Automotive:** Mobility Equipment Sales & Services (`mobilityequipment`, CA and US only). It sits under Automotive but is the nearest Yelp category for stair lifts.
- **Real Estate (nested under Home Services):** Home Developers (`homedevelopers`)

Yelp has no category for: plaster, limewash, tuckpointing, underpinning, drains, egress, heritage windows, suites or ADUs, knob and tube, asbestos, mould or radon by name, heat pumps, interlock or paving, armour stone, pool removal, pergolas by name, outdoor kitchens, wine cellars, soundproofing, stair lifts or heated driveways.

---

## 4. Google's free-text "services" field

- **Services can be free text.** From "Manage your services on your Business Profile" (https://support.google.com/business/answer/9455399):
  - "Businesses in certain categories, like service businesses, might have the option to showcase their offerings directly on their Business Profile."
  - "When adding services, you can choose from suggested options tailored to your business type ... You can also create and add custom services options."
  - "If your service isn't listed and you want to create your own service, select Add custom service."
  - "Custom services that violate policy will be automatically rejected."
- **How Google says it uses them.** Same page: "When local customers search Google for an offering you provide, that service may be highlighted on your profile." The ranking help page says "Local results are mainly based on relevance, distance, and popularity", and "Relevance is how well a Business Profile matches what someone is searching for. To help Google better understand your business and match it to relevant searches, provide complete and detailed business info." (https://support.google.com/business/answer/7091). Google also says it "uses business information to help surface relevant local search results" and compiles profiles partly from "crawled web content (e.g., information from a business' official website)" (https://support.google.com/business/answer/2721884).
- **Categories remain the ranking lever Google names.** From https://support.google.com/business/answer/7249669:
  - "The categories you select affect your local ranking on Google."
  - "If the specific category you want isn't available, select a general category that describes your business. You can't create your own category."
  - "Do not select a category for every product or service."

  The guidelines add: "The goal is to describe your business holistically rather than a list of all the services it offers", and "If you can't find a category for your business, choose one that's more general. Google can also detect category information from your website and from mentions about your business throughout the web." (https://support.google.com/business/answer/3038177).
- **What this does to the thesis.** A limewash specialist files as "Painter" and adds the custom service "Limewash painting". Google may then highlight that service and count it as relevance, and it can also read "limewash" from the firm's website. So a missing category narrows the local pack and weakens its match. It does not stop a painter from appearing for "limewash painters toronto". The GBP gap is a relevance handicap for incumbents, not a guaranteed empty pack (EST, consistent with the README §1 caveat).

---

## 5. Coverage table (32 terms)

Legend:
- **EXACT** = a category (or, on Houzz, a project-type facet) names the service or its standard trade synonym.
- **PARTIAL** = a broader category whose providers routinely do the work, so the platform would route the query there; "weak" marks a loose fit.
- **NONE** = only catch-alls remain (general contractor, handyman, remodeling).

Column sources: LSA = [L-CA-REQ], with US notes from [L-US-REQ]; HomeStars = §2 (OBSERVED where seen, otherwise EST); Houzz = [HZ-IDX] slugs; Yelp = [YELP] with Canadian availability.

| Term | LSA category in Canada? | HomeStars category? | Houzz category? | Yelp category? |
|---|---|---|---|---|
| limewash | NONE (US: PARTIAL "Painter") | EST PARTIAL: painting | PARTIAL: `painters`; facets `faux-painting`, `decorative-painting` | PARTIAL: Painters |
| venetian plaster | NONE (US: PARTIAL "Painter") | EST PARTIAL: "Walls & Ceilings" (heading OBSERVED) or painting | PARTIAL: `painters`; facets `faux-painting`, `decorative-painting` | PARTIAL: Painters; Stucco Services; Drywall Installation & Repair |
| underpinning / basement lowering | NONE (US: PARTIAL "Foundations services") | OBSERVED PARTIAL: "Foundations" | PARTIAL: facet `foundation-repair` (no foundation category) | PARTIAL: Foundation Repair |
| tuckpointing | NONE | EST PARTIAL: masonry ("Chimney Build & Repair" heading OBSERVED) | PARTIAL: `stone-pavers-and-concrete` (facets `brick-repair` and `masonry` have ~0 Canadian URLs) | PARTIAL: Masonry/Concrete; Stonemasons |
| waterproofing | NONE (US: "Foundations services" names waterproofing) | OBSERVED: Toronto price guide "basement-waterproofing-cost-toronto"; EST EXACT category | EXACT: facets `waterproofing`, `basement-waterproofing` | EXACT: Waterproofing |
| french drain | PARTIAL, weak: Plumber (US: "Drain expert", CA and FL only) | EST PARTIAL: waterproofing or landscaping | PARTIAL: `landscape-contractors`; facet `dry-wells` | PARTIAL: Waterproofing; Landscaping; Plumbing |
| egress window | PARTIAL, weak: Window repair | OBSERVED: price guide "basement-egress-window-cost" (cluster `windows-doors`); PARTIAL: "Windows & Doors Installation & Service" | PARTIAL: `window-contractors`; `basement-remodeling` | PARTIAL: Windows Installation; Excavation Services |
| slate roof | PARTIAL: Roofing | EST PARTIAL: "Roofing" (heading OBSERVED) | EXACT: facet `slate-roofing` under `roofing-and-gutters` | PARTIAL: Roofing |
| flat roof | PARTIAL: Roofing | EST PARTIAL: "Roofing" | PARTIAL: `roofing-and-gutters`; facets `torch-down-roofing`, `rubber-roofing`, `tar-and-gravel-roofing` | PARTIAL: Roofing |
| heritage window restoration | PARTIAL: Window repair | PARTIAL: "Windows & Doors Installation & Service" (OBSERVED) | PARTIAL: `window-contractors`; facets `window-repair`, `home-restoration` | PARTIAL: Windows Installation; Refinishing Services |
| laneway suite | NONE (US: PARTIAL "General contractor") | EST PARTIAL: "Home Additions" or "General Contractors" (OBSERVED names) | EXACT (as ADU): `accessory-dwelling-units`, which has a Toronto URL | PARTIAL: General Contractors; Architects; Home Developers |
| basement apartment legalization | NONE | PARTIAL: "Basement Renovation" (2022 copy) | PARTIAL: `basement-remodeling`; `accessory-dwelling-units` | PARTIAL: General Contractors; Architects |
| knob and tube | PARTIAL: Electrician | EST PARTIAL: electrical ("Electrical & Home Theatre" heading OBSERVED) | PARTIAL: `electricians` | PARTIAL: Electricians |
| asbestos removal | NONE (US "Home insulation" excludes asbestos abatement) | EST EXACT or PARTIAL: certificate-gated asbestos service implied by the UI string "Upload your asbestos certificate" | PARTIAL: `environmental-services-and-restoration` | PARTIAL: Environmental Abatement |
| vermiculite | NONE | EST PARTIAL: via asbestos service | PARTIAL: `environmental-services-and-restoration` | PARTIAL: Environmental Abatement |
| mold | PARTIAL: Water damage services (scope line names mold) | EST PARTIAL: "Fire & Water Damage Restoration" (2022 copy) | PARTIAL: `environmental-services-and-restoration` | PARTIAL: Environmental Abatement; Damage Restoration; Environmental Testing |
| radon | NONE | EST NONE | PARTIAL, weak: `environmental-services-and-restoration` | PARTIAL, weak: Environmental Testing (testing only) |
| fire restoration | NONE (nearest Water damage services; fire not named) | OBSERVED EXACT (2022 copy): "Fire & Water Damage Restoration" | PARTIAL: `environmental-services-and-restoration` | EXACT: Damage Restoration |
| water damage restoration | EXACT: Water damage services | OBSERVED EXACT (2022 copy): "Fire & Water Damage Restoration" | PARTIAL: `environmental-services-and-restoration` | EXACT: Damage Restoration |
| heat pump | PARTIAL: HVAC | PARTIAL: "Heating & Air Conditioning" (OBSERVED); cluster `air-conditioning` | PARTIAL: `air-conditioning-and-heating`; facet `hvac-repair` | PARTIAL: Heating & Air Conditioning/HVAC |
| interlock repair | NONE (US: PARTIAL "Landscaping services") | EST EXACT or PARTIAL: interlock category (unverified) | PARTIAL: `stone-pavers-and-concrete`; `driveway-installation-and-maintenance`; facet `hardscaping` | PARTIAL: Masonry/Concrete; Landscaping |
| armour stone | NONE (US: PARTIAL "Landscaping services") | EST PARTIAL: "Landscape Contractors & Designers" (OBSERVED) | PARTIAL: `stone-pavers-and-concrete`; facet `retaining-wall-construction` | PARTIAL: Stonemasons; Landscaping |
| pool removal | NONE (US: PARTIAL "Pool contractor") | EST PARTIAL: "Swimming Pools, Spas and Hot Tubs", "Excavation" (OBSERVED), "Demolition" (2022) | PARTIAL: `swimming-pool-builders`; facet `demolition` | PARTIAL, weak: Pool & Hot Tub Service; Excavation Services ("Demolition Services" not in Canada) |
| pergola | NONE (US: PARTIAL "Carpenters") | EST PARTIAL: "Decks" (2022) | EXACT: facet `pergola-construction`; category `decks-patios-and-outdoor-enclosures` | PARTIAL: Patio Coverings; Decks & Railing |
| outdoor kitchen | NONE (US: PARTIAL "Landscaping services") | EST PARTIAL: "Landscape Contractors & Designers" | EXACT: facets `outdoor-kitchen-construction` (Toronto URL exists), `outdoor-kitchen-design` | PARTIAL: Landscaping; Masonry/Concrete |
| sauna | NONE | EST PARTIAL: "Swimming Pools, Spas and Hot Tubs" (OBSERVED) | EXACT: facet `sauna-installation` | EXACT: Sauna Installation & Repair |
| wine cellar | NONE (US: PARTIAL "Carpenters") | EST PARTIAL: "Cabinetry & Millwork" (2022) | EXACT: `wine-cellars` | NONE (nearest General Contractors) |
| soundproofing | NONE (US: "Home insulation", CA and FL only) | EST PARTIAL: "Walls & Ceilings" | PARTIAL, weak: facet `insulation-installation`; `specialty-contractors` | PARTIAL, weak: Insulation Installation; Drywall Installation & Repair |
| home elevator | NONE | OBSERVED EXACT: "Elevators, Lifts & Ramps Installation & Service" | PARTIAL: `universal-design` | EXACT: Elevator Services |
| stair lift | NONE | OBSERVED EXACT: "Elevators, Lifts & Ramps Installation & Service" | PARTIAL: `universal-design` | PARTIAL: Elevator Services; Mobility Equipment Sales & Services |
| arborist report | PARTIAL, weak: Tree service | EST PARTIAL: tree services | PARTIAL: `tree-services` | PARTIAL: Tree Services |
| heated driveway | NONE | EST PARTIAL: paving or interlock | PARTIAL: `driveway-installation-and-maintenance` | PARTIAL, weak: Masonry/Concrete (Yelp has no paving category) |

### 5.1 Roll-ups

| Platform | EXACT | PARTIAL | NONE |
|---|---|---|---|
| LSA Canada | 1 | 9 | 22 |
| Houzz | 7 | 25 | 0 |
| Yelp Canada | 5 | 26 | 1 |
| HomeStars (OBSERVED or EST) | 4 OBSERVED: fire restoration and water damage restoration (2022 copy); home elevator and stair lift. Waterproofing and egress window were also OBSERVED, but as Toronto price guides, not categories | the rest EST; "Foundations", "Heating & Air Conditioning" and "Windows & Doors Installation & Service" OBSERVED as PARTIAL | radon EST |

- **Zero coverage on every platform: none.** Every term reaches at least a broad trade category on Houzz or Yelp. Wine cellar is NONE on LSA and Yelp but EXACT on Houzz.
- **No LSA category in Canada and no EXACT on Houzz or Yelp (14):** limewash, venetian plaster, underpinning / basement lowering, tuckpointing, basement apartment legalization, asbestos removal, vermiculite, radon, interlock repair, armour stone, pool removal, soundproofing, stair lift, heated driveway. These are the terms where neither the paid unit nor a named directory page is likely. HomeStars is the caveat: it probably holds stair lift and may hold interlock and asbestos.
- **Thinnest fallbacks even among those 14** (the only fits are weak): radon, soundproofing, heated driveway, pool removal.
- **Exposed to an LSA unit in Toronto (EST, if the unit fires):**
  - water damage restoration (EXACT)
  - mold (named in the scope line)
  - heat pump, knob and tube, slate roof, flat roof, heritage window restoration
  - weakly: egress window, french drain, arborist report
- **Directory pages named for the exact term:**
  - Houzz facets or categories: waterproofing, slate roof, laneway suite (as ADU), pergola, outdoor kitchen, sauna, wine cellar
  - Yelp: waterproofing, fire and water damage restoration, sauna, home elevator
  - HomeStars (OBSERVED): lifts and elevators; waterproofing and egress price guides

---

## Sources

Google Local Services Ads
- [L-CA-REQ] Business screening and verification requirements - Canada: https://support.google.com/localservices/answer/12174778?hl=en&co=GENIE.CountryCode%3DCA
- [L-CA-START] Getting started with Local Services Ads - Canada: https://support.google.com/localservices/answer/6224841?hl=en&co=GENIE.CountryCode%3DCA
- [L-US-REQ] Business screening and verification requirements - United States: https://support.google.com/localservices/answer/12174778?hl=en&co=GENIE.CountryCode%3DUS
- [L-US-START] Getting started with Local Services Ads - United States: https://support.google.com/localservices/answer/6224841?hl=en&co=GENIE.CountryCode%3DUS
- [L-PROC] Understand the screening and verification process: https://support.google.com/localservices/answer/6226575?hl=en&co=GENIE.CountryCode%3DCA
- [G-BLOG] Google Verified (Aug 20, 2025): https://blog.google/products/ads-commerce/google-verified-august-2025/
- [PB] Playbook Digital, Google Local Services Ads in Canada: Full Guide (2026), dated July 11, 2026: https://playbookdigital.ca/google-local-services-ads-canada/

Ontario regulators
- [ESA] https://esasafe.com/consumer-protection/electrician/
- [TSSA] https://www.tssa.org/fuels-contractor
- [STO] https://www.skilledtradesontario.ca/about-trades/trades-information/ (pages 1–10, e.g. https://www.skilledtradesontario.ca/about-trades/trades-information/page/2/)
- [ON-PEST] https://www.ontario.ca/page/pesticides (links to https://www.ontario.ca/page/pesticide-licences-and-permits)

HomeStars
- [HS-ROBOTS] https://www.homestars.com/robots.txt
- [HS-404] https://www.homestars.com/ads.txt (HomeStars 404 page; loads /one-design-system-themes/instapro.css)
- [HS-BUILD] https://www.homestars.com/_next/static/8415a6f5aa243aafb62b3395165ce39299a7f061/_buildManifest.js
- [HS-MSG] https://www.homestars.com/locales/en-CA/messages.bc27939c998bc982f94cfb68cbfed2af.es5.js
- [HS-SUP] https://support.homestars.com/s/sitemap-topicarticle-1.xml
- [HS-2022] Third-party 2022 copy of HomeStars's Toronto categories page (weak evidence): https://github.com/sadeemsattar/HomeStars-Landing-Page/blob/HEAD/categories.html
- [WIKI-HS] https://en.wikipedia.org/wiki/HomeStars
- Search-engine renderings, 2026-09-28 (pages return 403 on fetch):
  - https://homestars.com/categories
  - https://homestars.com/qc/chelsea/categories
  - https://homestars.com/ab/calgary/categories/
  - https://www.homestars.com/services
  - https://www.homestars.com/professions
  - https://www.homestars.com/blog/how-to-select-a-pro-on-homstars
  - https://www.homestars.com/find-professionals/toronto
  - https://www.homestars.com/handyman-services/handyman-pros/toronto
  - https://www.homestars.com/home-constructions-renovations/general-contractor-pros/toronto
  - https://www.homestars.com/gardening-outdoors/landscaping-company-pros/uxbridge
  - https://www.homestars.com/moving/moving-company-pros
  - https://www.homestars.com/on/toronto/handyman-services
- Price guides surfaced by sibling agents (`evidence/c1`, `c2`, `c4`):
  - https://www.homestars.com/home-constructions-renovations/price-guides/basement-waterproofing-cost-toronto
  - https://www.homestars.com/windows-doors/price-guides/basement-egress-window-cost
  - https://www.homestars.com/home-constructions-renovations/price-guides/chimney-build-repair-cost-toronto
  - https://www.homestars.com/air-conditioning/price-guides/heat-recovery-ventilation-system-cost

Houzz
- [HZ-IDX] https://www.houzz.com/sitemap/v3/pro-directory/pro-directory_index_00.xml and the 157 category sitemaps it lists (e.g. https://www.houzz.com/sitemap/v3/pro-directory/pro-directory-browse_environmental-services-and-restoration-0-facets_00.xml)
- https://www.houzz.com/robots.txt

Yelp
- [YELP] https://docs.developer.yelp.com/docs/resources-categories
- https://business.yelp.com/resources/articles/yelp-category-list/ (redirect target of blog.yelp.com/businesses/yelp_category_list/; not otherwise used). The legacy URL https://www.yelp.com/developers/documentation/v3/all_category_list/categories.json returned 404.

Google Business Profile
- https://support.google.com/business/answer/9455399 (Manage your services on your Business Profile)
- https://support.google.com/business/answer/7249669 (Manage your business category)
- https://support.google.com/business/answer/3038177 (Guidelines for representing your business on Google)
- https://support.google.com/business/answer/7091 (Tips to improve your local ranking on Google)
- https://support.google.com/business/answer/2721884 (Understand how Google sources & uses info in Business Profiles & local search results)
