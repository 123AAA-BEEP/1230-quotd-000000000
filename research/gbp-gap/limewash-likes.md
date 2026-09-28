# "More like limewash": services that rank organically without fighting a map pack

date: 2026-09-28 · status: owner-facing shortlist, EST until the Maps test below is run · companion to `README.md`

## Why limewash works, mechanically

A map pack appears when a query has local intent **and** Google's local index holds businesses it considers relevant. Relevance for the pack comes from, in rough order of weight: the category, words in the business name, then the services list and website text. Limewash has none of the strong signals: no category, almost no Toronto business with "limewash" in its name, and only a few painters listing it as a service. So the pack is either absent or filled with generic painters, and the organic result takes the click. Your micro-site at position ~3.5 is the measured proof.

That means the test for "more like limewash" is not only "no GBP category" (README §3). It is:

1. **The term is a material, technique or product name, not a trade name.** Trade words (underpinning, waterproofing, asbestos removal, popcorn ceiling removal, interlock) appear in business names and trigger full packs of real firms. Material words (limewash, venetian plaster, tadelakt, microcement, herringbone, german schmear, high-velocity, Kitec, vermiculite) rarely do.
2. **Few Toronto listings carry the term in their name.** This is the single best predictor of whether a pack fires, and it is checkable in a minute per term (below).
3. **People search the term by name** (rubric criterion 2), ideally with a product-research layer in front of the hire ("limewash paint toronto" outranked "limewash painter toronto" on your site). Material-first niches have that layer; trade niches do not.
4. **Ticket ≥ C$2.5k and specialists exist** to buy the leads.

A second pattern also works: the pack fires but is **wrong**. "Sauna" and "Wine cellar" are venue categories, so those packs show spas and restaurants, and the organic result for "sauna builders" wins the same way limewash does.

## The one-minute Maps test (do this from Toronto)

For each term: open Google Maps, search `<term> toronto`, and count listings on the first screen that (a) have the term in the business name, (b) list it as a service or in the description, (c) are unrelated. Then run the same term on Google Search and note whether a pack appears and whether its three businesses do the work. Record: **NO PACK**, **WRONG PACK** (venues or generic trades) or **REAL PACK** (three firms that do the work). NO PACK and WRONG PACK are limewash-likes. REAL PACK terms are still winnable on organic, but you asked for the first two.

Rule of thumb from the mechanism: fewer than three listings with the term in the name usually means no pack or a wrong one (EST; the test decides).

## Shortlist, ranked by how limewash-like each term is

Confidence is my judgement from the evidence files and the GBP ground truth, not an observation. Tickets are GTA CAD from the evidence files.

### Tier A — expect NO PACK or WRONG PACK; high ticket; product-research layer exists

| term (consumer form) | ticket | why it behaves like limewash | GBP fallback |
|---|---|---|---|
| venetian plaster (marmorino, roman clay as sections) | C$12–40/sq ft | material name; product layer (plaster brands); "Plasterer" packs are drywall repairers | Plasterer |
| tadelakt | C$20–50/sq ft, C$3.5k+ | Moroccan technique name; a handful of GTA applicators | Plasterer |
| microcement | C$25/sq ft, C$3k minimum | product name; sold as kits, so research precedes hire | Plasterer |
| lime plaster (interior) | C$25–45/sq ft | material name; century-home demand | Plasterer |
| brick staining / german schmear | C$3–6/sq ft; semi C$4k–9k | technique names; same buyer as limewash | Painter |
| herringbone / clay paver driveway | C$20–35/sq ft; C$18k–28k | pattern and material name; pavers are researched by brand first | Paving contractor |
| heated driveway / snow-melt system | C$12–28/sq ft; C$7k–17k | system name; products (mats, boilers) researched first; no category | Paving contractor |
| radiant floor heating (hydronic, retrofit) | C$8–30/sq ft; whole-home T2 | system name; product layer; no category | Heating contractor |
| high-velocity air conditioning (SpacePak, Unico) | C$7k–9.5k+ | product and system name; very few named installers | Air conditioning contractor |
| sauna builders (custom, outdoor, cold plunge as sections) | C$6k–30k+ | WRONG PACK: "Sauna" is a venue category, so the pack shows spas | Sauna store |
| wine cellar builders | C$18k–55k+ | WRONG PACK: "Wine cellar" is a venue category | (trap) |
| natural swimming pool / swim pond | from C$81k | material and system name; a handful of Ontario builders | Swimming pool contractor |
| slate roof repair | C$1k–10k; whole roof T1 | material name inside a trade; Heritage Grant names slate | Roofing contractor |
| copper / standing-seam metal roofing, copper eavestroughs | C$14–22/sq ft; C$4k–12k | material names; heritage sheet-metal tier is tiny | Sheet metal contractor |
| stretch ceilings | C$16–38/sq ft | product name; few installers; new find | Ceiling supplier |
| shou sugi ban siding | T2–T1 (EXISTING row, not priced this pass) | technique name; design-led demand | Siding contractor |

### Tier B — probably NO PACK, but a trade word is nearby; confirm with the test

| term | ticket | note | GBP fallback |
|---|---|---|---|
| vermiculite removal | C$10k–15k per attic | material name, but abatement firms are named "asbestos removal"; test "vermiculite" alone | Asbestos testing service |
| Kitec replacement | C$5k–25k+ | product name; plumbers list it, few are named for it; condo-number lookup is unique data | Plumber |
| knob-and-tube rewiring | C$8k–45k | system name, but electrician packs are strong and some firms are named for it; test | Electrician |
| lime-mortar repointing | C$10–30/sq ft | "lime mortar" is a material term (no pack); "tuckpointing" is a trade term (pack). Enter through the material term | Masonry contractor |
| heritage / wood window restoration | C$10k–35k whole house | few named firms; "window repair" packs show glass shops | Glazier |
| porch restoration | median permit C$15k | few named firms; "deck builder" packs may fire; test | Carpenter |
| pool removal / fill-in | C$5k–20k+ | few named firms in P0 evidence; "pool" packs show pool builders (wrong pack) | Swimming pool contractor |
| armour stone walls | C$150–300/lin ft | Ontario material name; landscapers list it; some are named for it; test | Landscaper |
| soundproofing | party wall C$1.4k–2.2k; suite separation higher | a few Toronto firms are named for it; test whether the pack is those or drywallers | Acoustical consultant |
| oil tank removal | C$4.5k–5k+ | few named firms; no category; test | Excavating contractor |
| radon mitigation | C$2.5k–5k | no category, few named firms; low GTA incidence limits demand | (none) |
| geothermal heating | C$40k–95k | system name; HVAC packs may fire on "heating"; test "geothermal" alone | HVAC contractor |
| rooftop deck (flat-roof semi) | C$20k–100k+ | "deck" packs will fire; test whether they are rooftop specialists | Deck builder |
| garden studio / backyard office pod | C$25k–85k | product-led; "shed" packs are retail; test | Shed builder |
| louvered pergola | C$15k–40k | product name, dealer-led; "pergola" packs exist (exact category) but may show generic deck firms | Carport and pergola builder |

### Tier C — trade words: expect a REAL PACK. Not limewash-likes, even where the ticket is huge

Underpinning and basement lowering, exterior and interior waterproofing, backwater valves, sump pumps, egress windows (test; borderline), asbestos removal, mould removal, popcorn ceiling removal, interlock repair, tuckpointing (by that word), laneway and garden suite builders (several named firms), legal basement contractors (many named firms in Brampton), tree removal, standby generators, heat pump installers, ductless, panel upgrades, chimney rebuilds, stair builders, home theatre installers, custom closets, stair lifts and home elevators (dealers), fire and water damage restoration.

These stay in the plan for a different reason: their **outcome questions have no pack at all**, and those guides feed a money page for the nearest limewash-like or trade term. "Basement ceiling too low", "can't sell with an unpermitted basement apartment", "insurance won't cover knob and tube", "Kitec in my condo", "central air for a house without ducts", "stop basement flooding", "do I need a heritage permit", "drafty windows in a heritage district", "noisy condo neighbour", "no parking on my Toronto street" are all informational queries. Google answers them with organic results only. They are the closest thing to limewash in the whole set, because there is nothing for a pack to match.

## What this changes in the recommendation

- README §6 stands, with one reordering: for the first wave after the launch-10, prefer Tier A material terms (heated driveways, radiant floors, high-velocity AC, tadelakt and microcement as sections of the plaster hub, brick staining, sauna and wine cellar builders, copper and standing-seam roofing) over the trade-word T1 rows (underpinning, suites). Enter the T1 trade rows through their outcome guides first, and build the service page only if the Maps test shows NO PACK or WRONG PACK in the target city.
- Add `pack_result` (NO PACK, WRONG PACK, REAL PACK, date, city) to each niche record once the test is run. It is measured data, so it belongs in the record under the claim-classes rule.
- The lower-ticket pass (README §7) should be filtered the same way; material terms there (roman clay, german schmear, wallpaper by brand, epoxy, cork) are the ones to keep.

## The test list, in the order to run it

venetian plaster · tadelakt · microcement · lime plaster · brick staining · german schmear · herringbone driveway · heated driveway · radiant floor heating · high velocity air conditioning · sauna builders · wine cellar builders · natural swimming pool · slate roof repair · standing seam roofing · copper eavestrough · stretch ceiling · shou sugi ban · vermiculite removal · kitec replacement · knob and tube rewiring · lime mortar repointing · wood window restoration · porch restoration · pool removal · armour stone · soundproofing · oil tank removal · radon mitigation · geothermal · rooftop deck · backyard office pod · louvered pergola · egress window · laneway suite builders · legal basement apartment

Thirty-six terms, about forty minutes. Record the three-way result and the count of name matches, and the shortlist becomes measured instead of estimated.
