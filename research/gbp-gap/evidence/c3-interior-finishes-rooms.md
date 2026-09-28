# C3: Interior specialty finishes, millwork and specialty rooms (GTA)

retrieved_at: 2026-09-28 · pass: GBP-gap, high-ticket, GTA-first · prices in CAD unless marked USD; most GTA quotes exclude 13% HST

**Method.** I read the repo inputs first: spec §0–§4, Addendum A11–A12, the P0 report, `nichecandidates.csv`, `taxonomy-premium-v1.csv`, and the P0 evidence files for limewash, venetian plaster, roman clay, popcorn, sauna, wallpaper and the supply spot-check. I then ran 23 Toronto/GTA-qualified WebSearch queries before the session's shared WebSearch cap (200) was hit. The rest of the pass used about 65 direct WebFetch reads of Canadian cost guides, regulators (City of Toronto, CRA, CAO, Save on Energy, Enbridge) and contractor pages. To find Toronto cost pages without search, I mined the sitemaps of two GTA contractor-publishers (renohouse.ca, leoconstra.com). I checked GBP beliefs against a third-party mirror of the GBP category list (https://daltonluka.com/blog/google-my-business-categories). That mirror may lag Google's live list, so the verifier should treat every belief as a belief.

**Limitations.**
1. HomeStars, Houzz, Angi, HomeGuide, CanLII and e-Laws blocked fetches (403 or JS-only). There are no HomeStars or Houzz pro counts, so plasterer "depth" is inferred from category structure and SERP composition.
2. Many prices come from contractor marketing pages. RenoHouse and Leo Constra pages are templated, and RenoHouse shows errors: it uses the BC term "strata" for Ontario condos and lists Ontario's Healthy Homes Renovation Tax Credit, which I believe ended after 2016 (not re-verified this pass). Treat their figures as indicative.
3. No keyword volumes.
4. Rows with no GTA price carry an EST figure or a labelled USD fallback.
5. Seasons are EST unless a source is given.

**Cross-cluster finding (read before the rows).** Two GTA contractors already run programmatic content on Quotd's exact geometry:
- **renohouse.ca** has 2,563 sitemap URLs, including 875 blog posts. It has 8–17-post clusters each for sauna (16), cold plunge (15), wine cellars (14), murphy beds (14), built-ins (17), home gym (15), walk-in closets (8), soundproofing (13) and asbestos (17). It also runs service × municipality pages such as `/mississauga/plaster-wall-repair`, `/toronto/polished-concrete-floor` and `/whitby/wet-room-bathroom-design`.
- **leoconstra.com** has 670 URLs, including condo-renovation and flooring pages for 28 GTA-area municipalities each.

Sitemaps: https://renohouse.ca/sitemap.xml ; https://www.leoconstra.com/sitemap.xml. Both are SERP competitors and possible lead buyers. Their data errors are Quotd's opening.

---

## Niche rows

### limewash-painting
- name: limewash painters
- status: LAUNCH-10 (EXISTING limewash-painting; TAXONOMY-ROW Interior limewash)
- level: SERVICE
- tier: T3 (whole-house brick exteriors reach T2)
- gta_price_cad: interior from C$15/sq ft; C$8–12/sq ft over 1,000 sq ft; accent walls C$850–1,950 + HST — https://www.codainstallations.com/limewash-painter; exterior C$6–12/sq ft, 400 sq ft facade C$2,400–4,800 — https://venetianplastershop.ca/cost-estimate-for-limewash-exterior-walls-in-canada-2026-guide/
- gbp_belief: PARTIAL — nearest: "Painter"
- gta_drivers: Pre-1940 Toronto stock is lime plaster on wood lath (Annex, Cabbagetown, Leaside), a breathable substrate that suits limewash — https://torontodrywallpro.ca/plaster-repair/
- data_hooks: housing era (StatCan period of construction), Heritage Register/HCDs (exteriors), curing-temperature window, provider roster, Quotd quote data
- season: interior year-round; exterior May–Oct (EST)
- web: venetian plaster, lime plaster, plaster repair, limewash brick, german schmear, cracked plaster in an old house
- queries: limewash painter toronto; limewash interior walls cost; limewash accent wall toronto; limewash brick house toronto
- verdict: STRONG — launch-10; only "Painter" fits; owner's GSC data proves Toronto demand

### venetian-plaster
- name: venetian plaster contractors (incl. marmorino, roman clay)
- status: LAUNCH-10 (EXISTING venetian-plaster; folds EXISTING roman-clay-finishes per P0; TAXONOMY-ROW Marmorino finishes, Polished plaster, Venetian plaster ceilings)
- level: SERVICE
- tier: T3 (whole rooms T2)
- gta_price_cad: C$12–28/sq ft, ~80–100 sq ft minimum — https://venetianplastertoronto.com/faq/; C$18–40/sq ft — https://venetianplastershop.ca/cost-comparison-venetian-plaster-vs-paint-in-toronto-2026-2/; roman clay C$18–30/sq ft — https://www.chromatist.com/2025/08/08/roman-clay-wall-finish-characteristics-uses-and-top-brands-we-trust/
- gbp_belief: PARTIAL — nearest: "Plasterer"
- gta_drivers: Toronto supply HEALTHY (5+ applicators, `data/validation/evidence/supply-spotcheck.md`); condo feature walls must fit board work hours (Mon–Fri 9–5) — https://www.leoconstra.com/guides/condo-renovation-rules-toronto
- data_hooks: provider roster, condo-rules module, housing era, Quotd cost data
- season: year-round
- web: marmorino, roman clay walls, microcement, tadelakt, plaster fireplace surround, plaster range hood (https://www.chromatist.com/decorative-wall-finishes/), limewash
- queries: venetian plaster toronto; venetian plaster cost per square foot; marmorino toronto; roman clay walls toronto
- verdict: STRONG — launch-10; "Plasterer" pack likely repair/drywall firms, not applicators (EST)

### tadelakt
- name: tadelakt plasterers
- status: EXISTING(tadelakt); TAXONOMY-ROW (Tadelakt bathrooms; Tadelakt sinks and vanities)
- level: SERVICE
- tier: T3
- gta_price_cad: C$20–50/sq ft, small bathroom sample C$3,500 — https://www.codainstallations.com/tadelakt-plaster; C$25–50/sq ft, C$3,800 small bathroom walls, wet areas higher — https://www.chromatist.com/decorative-wall-finishes/tadelakt-plasterer/
- gbp_belief: PARTIAL — nearest: "Plasterer" (alt "Tile contractor")
- gta_drivers: Only two GTA applicators surfaced (Coda, Chromatist). Condo bathroom work needs board approval and cannot touch shared plumbing stacks — https://www.leoconstra.com/guides/condo-renovation-rules-toronto
- data_hooks: provider roster, condo-rules module, cost data; little city-varying data
- season: year-round
- web: microcement bathroom, wet room, curbless shower, steam shower, venetian plaster, plaster sink
- queries: tadelakt shower toronto; tadelakt plasterer near me; tadelakt bathroom cost
- verdict: GOOD — ultra-scarce supply; probe hub only, data too thin for city pages

### microcement
- name: microcement installers
- status: TAXONOMY-ROW (Microcement bathrooms; Microcement fireplaces); P0 probe-hub candidate
- level: SERVICE
- tier: T3 (whole floors T2)
- gta_price_cad: C$25/sq ft, C$3,000 minimum; 250 sq ft C$6,250; 1,000 sq ft C$22,000 — https://microcementfinish.ca/microcement-bathroom/
- gbp_belief: PARTIAL — nearest: "Plasterer" (alt "Concrete contractor", "Flooring contractor")
- gta_drivers: Goes over existing tile without demolition, which matters where condo rules confine noisy work to weekday 9–5 — https://www.leoconstra.com/guides/condo-renovation-rules-toronto. One specialist lists 40+ GTA service localities — https://microcementfinish.ca/microcement-bathroom/
- data_hooks: condo-rules module, provider roster (also https://www.paintclub.ca/), cost data
- season: year-round
- web: tadelakt, polished concrete, curbless shower, microcement floors, fireplace surround, range hood, stairs
- queries: microcement toronto; microcement bathroom cost; microcement over tile; microcement floors toronto
- verdict: GOOD — no category; several GTA specialists; probe hub first

### lime-plaster
- name: lime plasterers
- status: TAXONOMY-ROW (Lime render application; Hand-troweled clay plaster; Mineral plaster feature walls)
- level: SERVICE
- tier: T3 (whole rooms T2)
- gta_price_cad: C$25–45/sq ft, 3–5 working days — https://www.chromatist.com/decorative-wall-finishes/lime-plaster/
- gbp_belief: PARTIAL — nearest: "Plasterer" (exterior lime render: "Stucco contractor")
- gta_drivers: Most pre-1940 Toronto stock is lime plaster on wood lath; pre-1970 homes have three-coat plaster — https://torontodrywallpro.ca/plaster-repair/. Conservation-grade firm HPCS lists Union Station and Osgoode Hall — https://www.historicplaster.com/about/
- data_hooks: housing era by neighbourhood, Heritage Register, asbestos/lead module
- season: interior year-round; exterior render May–Sep (EST)
- web: plasterers, cracked plaster in an old house, limewash, marmorino, ornamental plaster, lime render
- queries: lime plaster toronto; lime plasterer near me; lime plaster vs drywall old house
- verdict: GOOD — sub-hub under the plaster family; real century-home data

### plasterers-plaster-repair
- name: plasterers (lath-and-plaster repair, skim coats)
- status: EXISTING(plaster-wall-repair)
- level: SERVICE
- tier: T3 (single patches DEFER)
- gta_price_cad: crack C$200–400; 1–4 sq ft C$400–800; water-damaged area C$800–1,500 — https://torontodrywallpro.ca/plaster-repair/; complete replacement "upwards of $2,500" — https://renohouse.ca/blog/plaster-repair-guide-toronto
- gbp_belief: EXACT — nearest: "Plasterer"
- gta_drivers: Plaster-on-lath neighbourhoods include Annex, Cabbagetown, Rosedale, Leaside, Riverdale and High Park — https://torontodrywallpro.ca/plaster-repair/. HomeStars puts plasterers and drywallers under one "plastering" parent (https://www.homestars.com/plastering/drywall-specialist-pros/toronto-toronto); counts were blocked (403). A US-vantage search for Toronto plaster repair returned mostly drywall and painting firms.
- data_hooks: housing era, Heritage Register, asbestos/lead module, roster
- season: year-round
- web: lime plaster, ornamental plaster, skim coating, stretch ceiling, limewash, asbestos testing
- queries: plasterer toronto; lath and plaster repair toronto; plaster wall repair old house
- verdict: GOOD — Track 2: EXACT category, but the pack conflates drywallers

### ornamental-plaster-restoration
- name: ornamental plaster restoration (cornices, medallions)
- status: EXISTING(ornamental-plaster-restoration); TAXONOMY-ROW (Medallion and cornice plaster restoration; Decorative plaster molding restoration)
- level: SERVICE
- tier: T3 (EST)
- gta_price_cad: EST C$2,500–15,000 per room (no GTA figure found). Toronto mould shop Parsiena matches profiles with custom blades and offers restoration — https://www.parsienadesign.com/products/plaster-elements/
- gbp_belief: PARTIAL — nearest: "Plasterer" (alt "Building restoration service", "Molding supplier")
- gta_drivers: Victorian and Edwardian stock in the Annex, Cabbagetown and Rosedale — https://torontodrywallpro.ca/plaster-repair/. Conservation supply is institutional — https://www.historicplaster.com/about/
- data_hooks: Heritage Register/HCDs — https://www.toronto.ca/city-government/planning-development/heritage-preservation/; housing era; mould-shop roster
- season: year-round
- web: plasterers, lime plaster, coffered ceilings, crown moulding, century home restoration, cracked plaster
- queries: plaster cornice repair toronto; ceiling medallion restoration; ornamental plaster toronto
- verdict: BORDERLINE — price unverified; residential supply thin; guide plus probe only

### popcorn-ceiling-removal
- name: popcorn ceiling removal
- status: EXISTING(popcorn-ceiling-removal); P0 probe hub
- level: SERVICE
- tier: T3
- gta_price_cad: removal + refinish C$6–10/sq ft; whole house C$7,000–13,000+; with abatement C$5,000–15,000 — https://gmco.ca/popcorn-ceiling-removal-cost-toronto-gta/; abated 1,200 sq ft bungalow C$7,500–14,000 — https://renohouse.ca/blog/popcorn-ceiling-asbestos-removal-toronto
- gbp_belief: PARTIAL — nearest: "Dry wall contractor" (testing: "Asbestos testing service")
- gta_drivers: Popcorn is common in Toronto homes built or renovated 1965–1985 — https://renohouse.ca/blog/popcorn-ceiling-asbestos-removal-toronto. Disturbing it falls under O. Reg. 278/05 — https://www.canlii.org/en/on/laws/regu/o-reg-278-05/latest/o-reg-278-05.html
- data_hooks: O. Reg. 278/05 Type 1/2/3, housing era, lab/abatement roster
- season: year-round (winter indoor work)
- web: asbestos testing, stretch ceiling, skim coat, pot lights, plasterers, popcorn with possible asbestos
- queries: popcorn ceiling removal toronto cost; stucco ceiling removal; popcorn ceiling asbestos test
- verdict: GOOD — T3 in GTA, not low-ticket; strong regulatory module; platforms present (https://www.homestars.com/plastering/price-guides/popcorn-ceiling-removal)

### coffered-ceilings-wall-panelling
- name: coffered ceilings and wall panelling (finish carpenters)
- status: NEW (the lists hold only crown/cornice rows)
- level: SERVICE
- tier: T3 (wainscoting alone DEFER)
- gta_price_cad: coffered 12×14 room C$3,200–6,000 prefab, C$6,000–10,500 site-built, C$10,000–20,000+ hardwood — https://konstruction.ca/blog/coffered-ceiling-installation-guide; wainscoting C$15–45/lin ft — https://www.leoconstra.com/post/wainscoting-panel-moulding-cost-gta
- gbp_belief: PARTIAL — nearest: "Carpenter" (alt "Millwork shop", "Molding supplier")
- gta_drivers: The OBC sets a 2.3 m minimum for habitable rooms, and coffers need ~2.6 m finished — https://konstruction.ca/blog/coffered-ceiling-installation-guide. That likely rules out many low older rooms (EST).
- data_hooks: OBC ceiling height; weak city data
- season: year-round
- web: crown moulding, built-ins, ceiling beams, library walls, waffle ceiling, hidden bookcase door
- queries: coffered ceiling cost toronto; wainscoting installation toronto; waffle ceiling toronto
- verdict: BORDERLINE — plentiful finish carpenters (https://expertcrownmoulding.ca/); no city-varying data

### custom-built-ins-libraries
- name: custom built-ins, library walls and murphy beds
- status: EXISTING(murphy-beds-built-ins); TAXONOMY-ROW (Library build-outs; Reading nook millwork)
- level: SERVICE
- tier: T3 (library and media walls T2)
- gta_price_cad: closet systems C$3,000–8,000; media walls C$8,000–20,000; built-in wall unit ~C$15,000 — https://habitualhomes.ca/millwork-design/how-much-does-custom-millwork-cost-toronto/; murphy bed C$2,275–3,250 + HST — https://urbancab.com/how-much-do-custom-murphy-beds-cost.html
- gbp_belief: PARTIAL — nearest: "Cabinet maker" (alt "Millwork shop", "Fitted furniture supplier")
- gta_drivers: Small condo units drive space-saving demand (EST). RenoHouse runs 14 Toronto murphy-bed posts and 17 built-in posts — https://renohouse.ca/sitemap.xml
- data_hooks: none that change by city (EST)
- season: year-round; Q4 hosting peak (EST)
- web: murphy beds, library walls, media walls, hidden bookcase doors, closets, window seats
- queries: custom built-ins toronto; built-in bookshelves cost; murphy bed toronto
- verdict: BORDERLINE — T3/T2 ticket, but no survival-rule data; guide-level

### staircase-rebuild
- name: staircase builders (curved, floating, full rebuilds)
- status: EXISTING(curved-floating-staircases)
- level: SERVICE
- tier: T2 (floating/cantilevered T1)
- gta_price_cad: rebuild C$10,000–25,000+; L-shaped C$15,000–20,000; curved/floating >C$25,000 — https://www.leoconstra.com/post/new-staircase-cost-gta; mono-stringer C$18,000–35,000; cantilevered + glass C$28,000–60,000+ — https://torontomodernstairs.ca/toronto-stairs/floating-stairs-toronto/
- gbp_belief: EXACT — nearest: "Stair contractor"
- gta_drivers: A permit is needed when structure, location or dimensions change. OBC limits: rise ≤200 mm, run ≥255 mm, guards 900 mm — https://www.leoconstra.com/post/staircase-renovation-cost-toronto. Toronto permit minimum is C$214.79 — https://www.leoconstra.com/post/new-staircase-cost-gta
- data_hooks: Toronto building permits, OBC Part 9 stair geometry, engineer stamps, stair-shop roster (https://www.royaloakstair.ca/service-areas/custom-stairs-contractor-toronto/)
- season: year-round
- web: dated oak stairs, glass railings, spiral stairs, open-concept main floor, stair recapping
- queries: floating stairs toronto; curved staircase builder; staircase replacement cost toronto
- verdict: GOOD — Track 2 via floating/curved; EXACT category weakens the gap

### specialty-hardwood-floors
- name: herringbone, parquet and wide-plank floor installers
- status: EXISTING(hardwood-inlay-parquet-restoration); TAXONOMY-ROW (Historic hardwood floor refinishing); NEW (wide-plank/reclaimed)
- level: SERVICE
- tier: T2 (single rooms T3)
- gta_price_cad: herringbone C$9–15/sq ft base, 1,000 sq ft C$9,600–16,200 before extras — https://lvflooring.ca/how-much-does-it-cost-to-install-herringbone-wood-floors/; pattern premium C$8–15/sq ft — https://topfloorings.com/blogs/news/herringbone-flooring-toronto-cost-installation-2026-trends; wide-plank C$13–25/sq ft installed — https://lvflooring.ca/2025/10/28/how-much-is-wide-plank-white-oak-flooring/
- gbp_belief: PARTIAL — nearest: "Wood floor installation service" (refinishing: "Floor refinishing service")
- gta_drivers: Muggy summers and dry forced-air winters cup solid wide planks. Condo underlay adds C$2–4/sq ft — https://www.leoconstra.com/post/wide-plank-hardwood-floors-gta
- data_hooks: humidity/climate, condo IIC module, Ontario reclaimed supply (https://www.jhbarn.com/)
- season: spring/fall installs (EST)
- web: parquet restoration, heritage floor refinishing, reclaimed barn board, condo underlay, radiant floor, stair recap
- queries: herringbone floor installer toronto; parquet restoration toronto; wide plank white oak toronto
- verdict: BORDERLINE — craft slice is real; data is mostly climate/condo

### polished-concrete-floors
- name: polished concrete floors
- status: EXISTING(concrete-floor-polishing)
- level: SERVICE
- tier: T3
- gta_price_cad: basement C$8–10/sq ft; mid C$12–15; premium "terrazzo effect" C$16–20 — https://renohouse.ca/services/flooring/polished-concrete-floor
- gbp_belief: PARTIAL — nearest: "Concrete contractor" (alt "Floor sanding and polishing service")
- gta_drivers: Post-2000 slabs polish well; 1950s slabs have aggregate problems; cold basements need in-floor heat — https://renohouse.ca/services/flooring/polished-concrete-floor
- data_hooks: slab/housing era, radon (launch-10 module), cost
- season: year-round
- web: cold basement floor, radiant floor, microcement, epoxy, terrazzo look, basement finishing
- queries: polished concrete basement toronto; polished concrete cost per square foot; concrete floor grinding
- verdict: BORDERLINE — RenoHouse city pages already exist; weak scarcity

### terrazzo
- name: terrazzo floors (new and restoration)
- status: EXISTING(terrazzo-restoration); TAXONOMY-ROW (Terrazzo restoration)
- level: SERVICE
- tier: T2 (EST)
- gta_price_cad: EST C$40–100/sq ft poured (no GTA source found); look-alike polished concrete C$16–20/sq ft — https://renohouse.ca/services/flooring/polished-concrete-floor
- gbp_belief: PARTIAL — nearest: "Marble contractor" (alt "Tile contractor")
- gta_drivers: no residential GTA driver found this pass
- data_hooks: none local found
- season: year-round
- web: polished concrete, marble polishing, microcement, mid-century renovation
- queries: terrazzo floor toronto; terrazzo restoration toronto
- verdict: BORDERLINE — keep as P0 probe hub only; no GTA evidence

### soundproofing
- name: soundproofing contractors
- status: EXISTING(soundproofing); TAXONOMY-ROW (Drum room sound isolation; Zoom room acoustic retrofits; Meditation room soundproofing)
- level: SERVICE
- tier: T3 (theatres T1)
- gta_price_cad: 120 sq ft party wall with clips C$1,440–2,160; basement-suite separation C$8,000–18,000 — https://konstruction.ca/blog/soundproofing-a-wall; 12×12 room C$2,500–8,000 — https://konstruction.ca/soundproofing-toronto; condo decoupled ceiling C$4,500–9,000 — https://renohouse.ca/blog/condo-soundproofing-toronto-upstairs-neighbor
- gbp_belief: PARTIAL — nearest: "Acoustical consultant" (alt "Insulation contractor")
- gta_drivers: The OBC requires STC 50 between dwelling units (secondary suites, multiplexes) — https://konstruction.ca/blog/soundproofing-a-wall. The Condominium Authority Tribunal (CAT) hears noise and vibration disputes — https://www.condoauthorityontario.ca/tribunal/our-jurisdiction/
- data_hooks: OBC STC 50, condo IIC rules, CAT decisions, Toronto noise by-law Ch. 591
- season: year-round
- web: noisy condo neighbour, echoey room, home theatre, home office, drum room, basement apartment, stretch ceiling
- queries: soundproofing contractor toronto; soundproof shared wall semi; condo soundproofing; drum room soundproofing
- verdict: STRONG — no soundproofing category; regulation-rich; durable demand

### stretch-ceilings
- name: stretch ceiling installers
- status: NEW
- level: SERVICE
- tier: T3
- gta_price_cad: C$16–19/sq ft basic, C$22–28 standard, C$32–38 premium; 200 sq ft theatre ceiling C$4,400–8,000 — https://renohouse.ca/services/stretch-ceilings/acoustic-stretch-ceiling
- gbp_belief: PARTIAL — nearest: "Ceiling supplier" (alt "Dry wall contractor")
- gta_drivers: Sold as a way to cover cracked plaster and pre-1980 popcorn without removal, and under condo slabs. Acoustic versions rate NRC 0.55–0.85 — https://renohouse.ca/services/stretch-ceilings/acoustic-stretch-ceiling. Enclosing asbestos still needs O. Reg. 278/05 handling (EST).
- data_hooks: asbestos module (enclose vs remove), condo slab rules, housing era
- season: year-round
- web: popcorn removal, cracked plaster, echoey room, home theatre star ceiling, condo lighting
- queries: stretch ceiling toronto; cover popcorn ceiling without removing; acoustic stretch ceiling cost
- verdict: GOOD — new find; category gap; links three outcomes; demand unverified

### home-theatre-construction
- name: home theatre builders
- status: EXISTING(home-theater-installation); TAXONOMY-ROW (Home theater construction; Screening room conversions)
- level: SERVICE
- tier: T1 (media rooms T2)
- gta_price_cad: entry dedicated room C$25,000–45,000; serious C$45,000–80,000 — https://www.leoconstra.com/post/basement-home-theatre-cost-design; soundproofing alone (10×14) C$34,500–54,550 — https://renohouse.ca/blog/home-theater-soundproofing-toronto-build
- gbp_belief: EXACT — nearest: "Home cinema installation"
- gta_drivers: Pre-1920 semis have 6–6.5 ft basements, versus full height in 1950s–70s bungalows (Scarborough, North York, Etobicoke), which limits risers — https://www.leoconstra.com/post/basement-home-gym-design-gta. Permits C$500–1,500 — https://renohouse.ca/blog/home-theater-soundproofing-toronto-build
- data_hooks: basement height by era, permits, ESA
- season: fall/winter (EST)
- web: soundproofing, acoustic treatment, star ceiling, basement finishing, golf simulator
- queries: home theatre builder toronto; basement home theatre cost; soundproof home theatre
- verdict: BORDERLINE — AV-integrator category owns the pack; enter via soundproofing

### home-gym-build-out
- name: home gym build-outs
- status: TAXONOMY-ROW (Home gym design-build; Boutique home gym fit-outs; Rubber gym flooring systems)
- level: SERVICE
- tier: T2
- gta_price_cad: construction only C$12,000–20,000 basic, C$20,000–40,000 standard — https://renohouse.ca/blog/home-gym-cost-toronto-comparison; compact basement gym from ~C$20,000 — https://www.leoconstra.com/post/basement-home-gym-design-gta
- gbp_belief: NONE — nearest: "General contractor"
- gta_drivers: The 6–6.5 ft basements of pre-1920 semis rule out overhead lifts; 1950s–70s bungalows have full height — https://www.leoconstra.com/post/basement-home-gym-design-gta
- data_hooks: basement height by era, condo impact rules
- season: January peak (EST)
- web: rubber gym flooring, soundproofing, sauna and cold plunge suite, golf simulator, mirror wall
- queries: home gym build out toronto; basement gym flooring; home gym contractor
- verdict: BORDERLINE — equipment-led; a section under basement/wellness guides

### sauna-builders
- name: sauna builders
- status: LAUNCH-10 (EXISTING sauna-builders; TAXONOMY-ROW Finnish sauna rooms, Infrared sauna installation)
- level: SERVICE
- tier: T2
- gta_price_cad: prefab infrared C$6,000–12,000; prefab Finnish C$10,000–20,000; semi-custom C$18,000–32,000; wellness suites C$32,000–60,000+; 100A panel upgrade C$1,800–4,500+ — https://renohouse.ca/blog/basement-sauna-installation-toronto-2026 (single GTA price source)
- gbp_belief: PARTIAL — nearest: "Sauna store" ("Sauna" is a venue category)
- gta_drivers: Needs a Toronto building permit (C$214.79 minimum) plus ESA notification for 240V; heritage review adds 4–8 weeks — https://renohouse.ca/blog/permit-requirements-home-sauna-toronto. An Ontario manufacturer sells through a dealer network — https://leisurecraft.com/
- data_hooks: permits, ESA, panel capacity by housing era, dealer roster
- season: Oct–Feb peak (EST)
- web: cold plunge, steam room, infrared sauna, outdoor barrel sauna, panel upgrade, wellness suite
- queries: sauna builder toronto; basement sauna cost; sauna permit toronto; outdoor sauna ontario
- verdict: STRONG — launch-10; GBP offers only venue-type categories

### cold-plunge
- name: cold plunge installation
- status: EXISTING(cold-plunge-installation); TAXONOMY-ROW (Cold plunge room installs)
- level: SERVICE
- tier: T3 (premium T2)
- gta_price_cad: prefab plug-in installed C$7,410–11,610; premium integrated C$17,215–28,905; custom tiled with chiller C$29,400–57,600 — https://renohouse.ca/blog/cold-plunge-cost-toronto-comparison
- gbp_belief: PARTIAL — nearest: "Hot tub store" (alt "Swimming pool contractor")
- gta_drivers: ESA permit C$220–310, a dedicated 240V/30A circuit and a floor drain. About 25% of installs need a panel upgrade — https://renohouse.ca/blog/cold-plunge-cost-toronto-comparison
- data_hooks: ESA, plumbing permit, panel capacity by era
- season: Jan–Mar peak (EST)
- web: sauna, contrast therapy suite, steam room, home gym, floor drain
- queries: cold plunge installation toronto; cold plunge basement; cold plunge chiller install
- verdict: GOOD — sub-use under the sauna hub (per P0); no city pages of its own

### steam-showers
- name: steam shower installers
- status: EXISTING(steam-showers); TAXONOMY-ROW (Steam room construction; Aromatherapy steam shower installs)
- level: SERVICE
- tier: T2 (EST)
- gta_price_cad: EST C$15,000–35,000. Wet-room base is C$12,000–30,000 — https://renohouse.ca/services/kitchen-bath/wet-room-bathroom-design — plus generator and vapour-tight enclosure. No GTA steam price found.
- gbp_belief: PARTIAL — nearest: "Bathroom remodeler"
- gta_drivers: Condo work needs board approval and cannot alter shared stacks — https://www.leoconstra.com/guides/condo-renovation-rules-toronto. Generators need 240V and ESA (EST).
- data_hooks: condo-rules module, ESA, permits
- season: fall/winter (EST)
- web: wet room, curbless shower, tadelakt, microcement, sauna, heated floors
- queries: steam shower installation toronto; steam shower cost; home steam room
- verdict: GOOD — sub-use in the wellness/wet-room family; price unverified

### curbless-showers-wet-rooms
- name: curbless showers and wet rooms
- status: NEW (adjacent to TAXONOMY-ROW Spa bathroom conversions)
- level: SERVICE
- tier: T2
- gta_price_cad: ensuite wet room C$12,000–30,000, average C$18,500 — https://renohouse.ca/services/kitchen-bath/wet-room-bathroom-design; curbed walk-in C$3,500–15,000+, and curbless adds "four figures" — https://www.leoconstra.com/post/walk-in-shower-cost-gta
- gbp_belief: PARTIAL — nearest: "Bathroom remodeler"
- gta_drivers: The Home Accessibility Tax Credit (HATC) covers up to C$20,000/yr of expenses (age 65+ or DTC-eligible) — https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html. March of Dimes HVMP gives up to C$15,000 lifetime — https://renohouse.ca/blog/accessibility-renovation-grants-toronto-ontario. Condo slabs cannot be cut — https://renohouse.ca/blog/condo-soundproofing-toronto-upstairs-neighbor
- data_hooks: HATC, HVMP, Ontario Renovates, condo-rules module
- season: year-round
- web: aging in place, barrier-free bathroom, grab bars, tadelakt, heated floors, steam shower
- queries: curbless shower toronto; wet room bathroom toronto; barrier-free bathroom renovation
- verdict: GOOD — Track 2 of bathrooms; accessibility credits supply the data

### radiant-floor-heating
- name: radiant floor heating (hydronic and electric retrofits)
- status: EXISTING(radiant-floor-heating)
- level: SERVICE
- tier: T2
- gta_price_cad: electric C$8–15/sq ft; hydronic C$15–30/sq ft; whole-home hydronic (1,500 sq ft) C$22,000–45,000 — https://renohouse.ca/blog/heated-floor-toronto-cost (single GTA source)
- gbp_belief: PARTIAL — nearest: "Heating contractor" (alt "HVAC contractor")
- gta_drivers: Basement slabs feel cold October–May — https://www.leoconstra.com/post/basement-subfloor-options-compared. Ontario's Home Renovation Savings Program (HRSP) has no radiant rebate; insulation gets up to C$7,700 after an assessment — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- data_hooks: heating degree days, housing era, HRSP
- season: installs Apr–Oct; demand Nov–Feb (EST)
- web: cold basement floor, polished concrete, heated bathroom floor, boiler, heat pump, tile
- queries: radiant floor heating toronto; in-floor heating basement cost; hydronic floor retrofit
- verdict: GOOD — climate module fits; category gap

### wine-cellars
- name: wine cellar builders
- status: EXISTING(wine-cellars); TAXONOMY-ROW (Custom wine cellar construction; Glass wine wall installations)
- level: SERVICE
- tier: T1 (closet conversions T2)
- gta_price_cad: closet conversion C$18,000–30,000; custom walk-in C$30,000–55,000; luxury C$60,000–120,000+ — https://renohouse.ca/blog/wine-cellar-installation-toronto-2026; a Mississauga builder lists cooling systems from C$11,560 and racking from C$1,515 — https://www.rosehillwinecellars.com/
- gbp_belief: PARTIAL — nearest: "Wine cellar" (a venue/storage type, not a builder category)
- gta_drivers: Building permit C$300–700; ESA filing C$88; condos require an approved heat-rejection plan — https://renohouse.ca/blog/wine-cellar-installation-toronto-2026
- data_hooks: permits, ESA, condo-rules module, builder roster
- season: Oct–Dec (EST)
- web: glass wine wall, tasting room, basement bar, cellar cooling, humidor, home theatre
- queries: custom wine cellar toronto; wine cellar builders gta; glass wine room cost
- verdict: GOOD — T1 ticket; the GBP category does not fit builders

### hidden-doors-secret-rooms
- name: hidden bookcase doors and secret rooms
- status: TAXONOMY-ROW (Hidden bookshelf doors; Secret room construction; Hidden library doors and passageways); P0 probe-hub candidate
- level: SERVICE
- tier: T3 (EST)
- gta_price_cad: product doors USD 1,000–1,550 (US fallback) — https://www.murphydoor.com/; installed custom EST C$3,000–10,000
- gbp_belief: NONE — nearest: "Carpenter" (alt "Door shop", "Millwork shop")
- gta_drivers: none found (EST)
- data_hooks: none local
- season: year-round
- web: library walls, built-ins, safe rooms, home theatre, speakeasy basement
- queries: hidden bookcase door toronto; secret room builder; hidden door installation
- verdict: BORDERLINE — fascination demand; no data layer; guide/probe only

### luxury-closets
- name: walk-in closet and dressing-room builders
- status: TAXONOMY-ROW (Luxury closet boutique build-outs; Handbag and watch display rooms)
- level: SERVICE
- tier: T2
- gta_price_cad: IKEA PAX C$3,200; franchise-system mid tier C$14,500; custom millwork C$48,000 — https://renohouse.ca/blog/walk-in-closet-cost-toronto-comparison; custom closet ~C$6,000 — https://habitualhomes.ca/millwork-design/how-much-does-custom-millwork-cost-toronto/
- gbp_belief: PARTIAL — nearest: "Cabinet maker" (alt "Fitted furniture supplier", "Professional organizer")
- gta_drivers: none city-varying found (EST)
- data_hooks: none
- season: year-round
- web: built-ins, dressing room, vanity room, closet lighting, murphy beds
- queries: custom walk in closet toronto; closet designer toronto; luxury closet cost
- verdict: BORDERLINE — franchise tier (California Closets) plus millwork shops; no data

### ceiling-beams
- name: ceiling beams (structural and decorative)
- status: EXISTING(timber-framing-exposed-beams)
- level: SERVICE
- tier: T3 (EST)
- gta_price_cad: reclaimed beams C$12–14/lin ft material — https://www.jhbarn.com/; custom hardwood beam/coffer systems C$65–130+/sq ft — https://konstruction.ca/blog/coffered-ceiling-installation-guide; installed EST C$3,000–12,000
- gbp_belief: PARTIAL — nearest: "Carpenter"
- gta_drivers: Open-concept renos swap load-bearing walls for beams (permit + engineer, EST). Ontario barn-salvage supply (Midland) — https://www.jhbarn.com/
- data_hooks: permits for structural beams; reclaimed-supply roster
- season: year-round
- web: coffered ceiling, open concept, reclaimed barn board, timber frame, mantel
- queries: faux wood beams toronto; reclaimed wood beams ontario; exposed beam ceiling
- verdict: BORDERLINE — splits into structural vs decorative; weak data

### condo-unit-renovation
- name: condo renovation (board-approved)
- status: NEW
- level: USE
- tier: T1
- gta_price_cad: full unit C$30,000–45,000 budget, C$45,000–65,000 mid, C$65,000–100,000+ high — https://www.leoconstra.com/cost-guides/condo-renovation-cost-toronto
- gbp_belief: PARTIAL — nearest: "Remodeler" (alt "Interior construction contractor")
- gta_drivers: Board review takes 2–4 weeks (6–8 if the board meets monthly). Deposits C$1,000–5,000; work hours Mon–Fri 9–5; underlay STC/IIC ≥50 — https://www.leoconstra.com/guides/condo-renovation-rules-toronto. City construction noise is banned 7 p.m.–7 a.m. (to 9 a.m. Saturdays) and all day Sundays/holidays — https://www.toronto.ca/legdocs/municode/1184_591.pdf
- data_hooks: condo-rules module, CAT decisions, Ch. 591
- season: year-round
- web: condo flooring underlay, condo soundproofing, microcement, wet rooms, built-ins
- queries: condo renovation rules toronto; condo flooring approval; condo reno cost
- verdict: BORDERLINE — build as a shared data module, not a money page (red-ocean GC SERPs)

### pre-1980-asbestos-lead-check
- name: asbestos/lead check before plaster and texture work
- status: NEW
- level: USE
- tier: T3
- gta_price_cad: PLM test C$35–75/sample — https://renohouse.ca/blog/popcorn-ceiling-asbestos-removal-toronto; TEM surcharge C$40–90/sample; gut-reno joint-compound abatement C$12,000–25,000+ — https://renohouse.ca/blog/asbestos-drywall-joint-compound-toronto
- gbp_belief: EXACT — nearest: "Asbestos testing service" (lead: "Environmental consultant")
- gta_drivers: Asbestos joint compound (0.5–5%) was common from the 1950s to the late 1970s. The source classes HEPA skim-coating as Type 1 — https://renohouse.ca/blog/asbestos-drywall-joint-compound-toronto. Governing rule: O. Reg. 278/05 — https://www.canlii.org/en/on/laws/regu/o-reg-278-05/latest/o-reg-278-05.html. No lead-paint source was retrieved.
- data_hooks: O. Reg. 278/05, housing era, lab roster
- season: year-round
- web: popcorn removal, plasterers, skim coat, limewash, wallpaper removal, stretch ceiling
- queries: asbestos in plaster walls toronto; test joint compound for asbestos; is skim coating old plaster safe
- verdict: GOOD — cross-niche module plus FAQ, not its own page

### cracked-plaster-century-home
- name: cracked or textured plaster walls in an old house
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: repairs C$200–1,500 per area — https://torontodrywallpro.ca/plaster-repair/; lime-plaster refinish C$25–45/sq ft — https://www.chromatist.com/decorative-wall-finishes/lime-plaster/
- gbp_belief: PARTIAL — nearest: "Plasterer"
- gta_drivers: Lime plaster on wood lath runs through the pre-1940 neighbourhoods (Annex, Cabbagetown, Leaside, Riverdale) — https://torontodrywallpro.ca/plaster-repair/
- data_hooks: housing era by neighbourhood, asbestos module, Heritage Register
- season: year-round
- web: plasterers, lime plaster, limewash, venetian plaster, stretch ceiling, drywall over plaster
- queries: cracked plaster walls old house; fix or replace plaster walls; plaster vs drywall century home toronto
- verdict: GOOD — FLAG own /guides/ page: distinct demand plus era data; routes to four services

### echoey-open-plan-room
- name: echoey open-plan room
- status: NEW (adjacent to TAXONOMY-ROW Acoustic plaster ceilings)
- level: OUTCOME
- tier: T3 (EST; panels alone DEFER)
- gta_price_cad: treatment for a small room C$1,500–4,000; theatre C$5,000–15,000 — https://renohouse.ca/blog/acoustic-treatment-vs-soundproofing-difference; acoustic stretch ceiling C$16–38/sq ft — https://renohouse.ca/services/stretch-ceilings/acoustic-stretch-ceiling
- gbp_belief: PARTIAL — nearest: "Acoustical consultant"
- gta_drivers: none city-varying; open-concept renos are universal (EST)
- data_hooks: none local; NRC-vs-STC explainer only
- season: year-round
- web: acoustic panels, stretch ceiling, acoustic plaster, soundproofing, home theatre
- queries: echo in open concept room; reduce echo in living room; acoustic ceiling panels
- verdict: BORDERLINE — section under the soundproofing hub

### noisy-condo-neighbour
- name: noisy condo neighbour (impact and airborne noise)
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: sealing C$300–800; mass-loaded vinyl layer C$2,500–5,000; decoupled drop ceiling C$4,500–9,000 — https://renohouse.ca/blog/condo-soundproofing-toronto-upstairs-neighbor
- gbp_belief: PARTIAL — nearest: "Acoustical consultant"
- gta_drivers: The slab is a common element; hard floors need IIC 55–60 — https://renohouse.ca/blog/condo-soundproofing-toronto-upstairs-neighbor. CAT hears noise and vibration nuisance cases — https://www.condoauthorityontario.ca/tribunal/our-jurisdiction/. Ch. 591 caps stationary-source noise measured indoors at 40 dB(A) overnight and 45 dB(A) by day — https://www.toronto.ca/legdocs/municode/1184_591.pdf
- data_hooks: condo-rules module, CAT decisions, Ch. 591
- season: year-round
- web: soundproofing, condo underlay, drop ceiling, CAT noise complaint, echoey room
- queries: upstairs neighbour noise condo toronto; soundproof condo ceiling; condo noise complaint ontario
- verdict: STRONG — FLAG own guide: Ontario-specific rules; routes to soundproofing

### cold-basement-floor
- name: cold basement floor
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: basic basement finish C$35–55/sq ft; subfloors cost 1 cm to 3+ in of height — https://www.leoconstra.com/post/basement-subfloor-options-compared; electric radiant C$8–15/sq ft — https://renohouse.ca/blog/heated-floor-toronto-cost
- gbp_belief: NONE — nearest: "Flooring contractor"
- gta_drivers: Slabs are cold Oct–May — https://www.leoconstra.com/post/basement-subfloor-options-compared. The 6–6.5 ft basements of pre-1920 semis can't spare height — https://www.leoconstra.com/post/basement-home-gym-design-gta. HRSP insulation rebates reach C$7,700 — https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- data_hooks: climate, basement height by era, HRSP, radon
- season: Oct–Mar demand (EST)
- web: radiant floor, polished concrete, subfloor, basement insulation, underpinning
- queries: cold basement floor fix; warm up basement floor; best basement subfloor ontario
- verdict: GOOD — FLAG guide: strong era and climate data; routes to three services

### dated-oak-stairs
- name: dated oak stairs (golden-oak builder staircases)
- status: NEW
- level: OUTCOME
- tier: T3
- gta_price_cad: refinish C$50–125/step (~C$3,500 minimum with railings); recap from C$4,900; recap + iron pickets C$5,500 — https://www.leoconstra.com/post/updating-oak-staircase-markham; carpet-to-hardwood, 13 steps, ~C$3,005 — https://bbsflooring.ca/stair-renovation-guide
- gbp_belief: PARTIAL — nearest: "Stair contractor" (railings: "Railing contractor")
- gta_drivers: Golden-oak staircases are "standard issue" in Markham homes built from the late 1980s to the early 2000s — https://www.leoconstra.com/post/updating-oak-staircase-markham
- data_hooks: subdivision build era by municipality (StatCan), permit rule for refinish vs rebuild
- season: year-round
- web: stair recapping, iron pickets, stair refinishing, staircase rebuild, hardwood refinishing
- queries: update oak stairs; oak stairs to modern; replace spindles with iron pickets
- verdict: GOOD — guide under the staircase hub; the service behind it is commodity

### popcorn-ceiling-asbestos
- name: popcorn ceiling that may contain asbestos
- status: NEW (outcome of EXISTING popcorn-ceiling-removal)
- level: OUTCOME
- tier: T3
- gta_price_cad: testing C$250–850; removal with abatement C$5,000–15,000 — https://gmco.ca/popcorn-ceiling-removal-cost-toronto-gta/
- gbp_belief: PARTIAL — nearest: "Asbestos testing service"
- gta_drivers: Built or renovated 1965–1985. Type 3 removal needs Ministry of Labour notification and negative-air containment — https://renohouse.ca/blog/popcorn-ceiling-asbestos-removal-toronto
- data_hooks: O. Reg. 278/05, housing era, labs, abatement roster
- season: year-round
- web: asbestos testing, popcorn removal, stretch ceiling, skim coat, pot lights
- queries: is my popcorn ceiling asbestos; popcorn ceiling asbestos test toronto; popcorn removal asbestos cost
- verdict: STRONG — make it the popcorn hub's lead section, not a separate URL

---

## Web map

- **Plaster & mineral finishes hub** (venetian-plaster + limewash, both LAUNCH-10)
  - spokes: lime-plaster, tadelakt, microcement; roman clay and marmorino as sections
  - uses: fireplace surrounds, range hoods, powder rooms; showers (tadelakt/microcement → curbless-showers-wet-rooms)
  - outcome: cracked-plaster-century-home → plasterers-plaster-repair, lime-plaster, limewash, stretch-ceilings
  - shared specialists: Coda, Chromatist, Paint Club, Designer Wall Finishes, Marcrete, microcementfinish.ca
- **Old-house ceilings & walls**
  - popcorn-ceiling-removal ↔ popcorn-ceiling-asbestos (lead section) ↔ pre-1980-asbestos-lead-check (module)
  - stretch-ceilings is the enclose-instead-of-remove alternative
  - ornamental-plaster-restoration ↔ plasterers-plaster-repair
  - shared: abatement contractors, PLM/TEM labs, heritage plasterers
- **Sound hub** (soundproofing)
  - noisy-condo-neighbour (FLAG own guide), echoey-open-plan-room (section)
  - home-theatre-construction, home office and drum room (sections)
  - basement-suite/multiplex STC 50
  - shared: acoustic contractors, drywallers with isolation-clip experience
- **Basement comfort** (cold-basement-floor guide)
  - radiant-floor-heating, polished-concrete-floors, subfloor/insulation (HRSP)
  - home-gym-build-out, home-theatre-construction, wine-cellars, sauna-builders
- **Wellness rooms** (sauna-builders, LAUNCH-10)
  - cold-plunge (sub-use), steam-showers, curbless-showers-wet-rooms
  - shared: licensed electricians (ESA 240V, panel upgrades), plumbers (floor drains)
- **Stairs & millwork**
  - staircase-rebuild ← dated-oak-stairs (guide) → stair refinishing (excluded commodity)
  - custom-built-ins-libraries → hidden-doors-secret-rooms, luxury-closets
  - coffered-ceilings-wall-panelling ↔ ceiling-beams
  - shared: stair shops, millwork shops, finish carpenters
- **Floors**
  - specialty-hardwood-floors, polished-concrete-floors, terrazzo (probe)
  - condo underlay rules shared with the sound hub
- **Cross-niche data modules** (the survival-rule payload for this cluster)
  - **Housing era:** pre-1940 lime plaster on lath; asbestos joint compound 1950s–late 1970s; popcorn 1965–85; Markham golden-oak stairs late 1980s–early 2000s; pre-1920 semis with 6–6.5 ft basements vs full-height 1950s–70s bungalows
  - **Condo rules:** IIC 50–60, 2–8-week board approval, C$1,000–5,000 deposits, weekday 9–5 work, CAT nuisance jurisdiction
  - **Permits:** Toronto C$214.79 minimum; ESA notification; heritage review
  - **Toronto Ch. 591 noise by-law**
  - **Accessibility credits:** HATC C$20,000; HVMP C$15,000
  - **HRSP:** insulation up to C$7,700

## Deferred (low ticket)

- wallpaper-and-mural-installation — DEFER(C$1,250–5,500 per 250 sq ft; accent-wall labour C$200–500) — https://renohouse.ca/services/painting/wallpaper-installation — EXISTING(wallpaper-installation), P0 probe hub; GBP EXACT "Wallpaper installer".
- decorative-painting-wall-glazing (faux, murals, glaze) — DEFER(accent walls C$250–1,500 + HST, per page title) — https://www.homepainterspro.ca/blogs/accent-wall-cost-toronto/ — EXISTING(faux-finishing; murals-decorative-painting), TAXONOMY-ROW (Decorative wall glaze and patina finishes); GBP PARTIAL "Painter"/"Artist".
- interior-archways — DEFER(EST C$800–3,000 non-structural; widening a load-bearing opening becomes beam work) — no GTA source — TAXONOMY-ROW (Interior archway construction); GBP NONE, nearest "Carpenter".
- heated-bathroom-floors — DEFER(C$400–900 heated area plus C$200–500 electrician) — https://renohouse.ca/blog/heated-floor-toronto-cost — EXISTING(heated-bathroom-floors); section under radiant-floor-heating.
- epoxy-polyaspartic-garage-floors — DEFER(C$1,200–3,000 per 300 sq ft garage; cures only above 10°C, Apr–Oct) — https://renohouse.ca/blog/epoxy-flooring-toronto — EXISTING(epoxy-garage-floors); the showroom-garage polyaspartic slice (TAXONOMY-ROW) may reach T3.
- wainscoting / picture-frame moulding alone — DEFER(C$15–45/lin ft; dining room "low thousands") — https://www.leoconstra.com/post/wainscoting-panel-moulding-cost-gta — covered by coffered-ceilings-wall-panelling.
- murphy bed (unit only) — DEFER(C$2,275–3,250 + HST) — https://urbancab.com/how-much-do-custom-murphy-beds-cost.html — covered by custom-built-ins-libraries.
- single plaster crack/patch — DEFER(C$200–1,500) — https://torontodrywallpro.ca/plaster-repair/ — covered by plasterers-plaster-repair.
- acoustic panels for one room — DEFER(C$1,500–4,000) — https://renohouse.ca/blog/acoustic-treatment-vs-soundproofing-difference — covered by echoey-open-plan-room.

## Excluded (commodity / exact GBP / red ocean)

- stair-refinishing-railing-replacement — EXACT "Stair contractor"/"Railing contractor". Red ocean: BBS Flooring, StairSteps, Strataline, The North Stair, plus Leo Constra and RenoHouse city pages. T3 at C$3,000–5,500 (https://bbsflooring.ca/stair-renovation-guide; https://stairsteps.ca/; https://strataline.ca/services/stairs; https://thenorthstairontario.com/stair-renovation-cost-toronto/). Enter only via the dated-oak-stairs guide.
- cabinet-refacing-spraying (EXISTING cabinet-refinishing-spraying) — T3 at C$3,000–7,000 (https://www.leoconstra.com/post/cabinet-painting-cost-gta), but many GTA sprayers plus programmatic city pages (e.g. `/toronto/kitchen-cabinet-painting-toronto` in https://renohouse.ca/sitemap.xml). GBP PARTIAL "Painter"/"Cabinet maker"; no city-varying data.
- generic hardwood refinishing/installation — EXACT "Floor refinishing service", "Wood floor refinishing service", "Wood floor installation service"; commodity at C$4–8/sq ft (https://zelta.ca/blog/hardwood-floor-refinishing-cost/). Enter only via the pattern/heritage slice.
- home theatre AV-only installs — EXACT "Home cinema installation" plus "Home theater store". Only the room-build slice is kept, in home-theatre-construction.
- drywall install/repair — EXACT "Dry wall contractor"; commodity.
- generic basement finishing and condo GC renovation — red ocean (Addendum A12; Leo Constra and RenoHouse service × city pages). Condo is kept as a data module only.
- kitchen remodelling — per brief (EXACT "Kitchen remodeler").

## Sources

Repo: `spec/build-spec.md` §0–§4; `spec/ADDENDUM-2026-08-01.md` A11–A12; `data/validation/p0-report.md`; `data/niches/nichecandidates.csv`; `data/niches/taxonomy-premium-v1.csv`; `data/validation/evidence/{supply-spotcheck,limewash-painting,venetian-plaster,roman-clay,popcorn-ceiling-removal,sauna-builders,wallpaper-installation}.md`.

GBP category list (third-party mirror): https://daltonluka.com/blog/google-my-business-categories

Regulators and programs:
- https://www.canlii.org/en/on/laws/regu/o-reg-278-05/latest/o-reg-278-05.html
- https://www.toronto.ca/legdocs/municode/1184_591.pdf
- https://www.toronto.ca/city-government/planning-development/heritage-preservation/
- https://www.condoauthorityontario.ca/tribunal/our-jurisdiction/
- https://www.condoauthorityontario.ca/tribunal/
- https://www.condoauthorityontario.ca/issues-and-solutions/noise/
- https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html
- https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings
- https://www.enbridgegas.com/residential/rebates-energy-conservation/home-efficiency-rebate-plus

Plaster, finishes, ceilings:
- https://www.codainstallations.com/limewash-painter
- https://www.codainstallations.com/tadelakt-plaster
- https://venetianplastershop.ca/cost-estimate-for-limewash-exterior-walls-in-canada-2026-guide/
- https://venetianplastershop.ca/cost-comparison-venetian-plaster-vs-paint-in-toronto-2026-2/
- https://venetianplastertoronto.com/faq/
- https://www.chromatist.com/decorative-wall-finishes/
- https://www.chromatist.com/decorative-wall-finishes/lime-plaster/
- https://www.chromatist.com/decorative-wall-finishes/tadelakt-plasterer/
- https://www.chromatist.com/decorative-wall-finishes/roman-clay-walls-toronto/
- https://www.chromatist.com/decorative-wall-finishes/limewash-accent-wall/
- https://www.chromatist.com/2025/08/08/roman-clay-wall-finish-characteristics-uses-and-top-brands-we-trust/
- https://microcementfinish.ca/microcement-bathroom/
- https://www.paintclub.ca/
- https://torontolimewash.com/
- https://torontodrywallpro.ca/plaster-repair/
- https://renohouse.ca/blog/plaster-repair-guide-toronto
- https://www.historicplaster.com/about/
- https://www.parsienadesign.com/products/plaster-elements/
- https://www.homestars.com/plastering/plasterer-pros/toronto
- https://www.homestars.com/plastering/drywall-specialist-pros/toronto-toronto
- https://homestars.com/on/east-toronto/plastering
- https://www.homestars.com/plastering/price-guides/popcorn-ceiling-removal
- https://www.patchboyz.ca/gta/plaster-repair-toronto
- https://www.homepainterstoronto.com/our-projects/lath-and-plaster-repair/
- https://courthamptonpainting.com/painting-services/drywallplasterplaster-lath-repair/
- https://thewalldoctor.ca/plaster-repair-service/
- https://gmco.ca/popcorn-ceiling-removal-cost-toronto-gta/
- https://renohouse.ca/blog/popcorn-ceiling-asbestos-removal-toronto
- https://renohouse.ca/blog/asbestos-drywall-joint-compound-toronto
- https://renohouse.ca/services/stretch-ceilings/acoustic-stretch-ceiling
- https://www.leoconstra.com/post/venetian-plaster-textured-wall-finishes

Millwork and stairs:
- https://konstruction.ca/blog/coffered-ceiling-installation-guide
- https://www.leoconstra.com/post/wainscoting-panel-moulding-cost-gta
- https://expertcrownmoulding.ca/
- https://vipclassicmoulding.com/services/waffle-ceiling-installation/
- https://habitualhomes.ca/millwork-design/how-much-does-custom-millwork-cost-toronto/
- https://urbancab.com/how-much-do-custom-murphy-beds-cost.html
- https://www.leoconstra.com/post/new-staircase-cost-gta
- https://www.leoconstra.com/post/staircase-renovation-cost-toronto
- https://www.leoconstra.com/post/updating-oak-staircase-markham
- https://torontomodernstairs.ca/toronto-stairs/floating-stairs-toronto/
- https://www.royaloakstair.ca/service-areas/custom-stairs-contractor-toronto/
- https://www.platinumstairs.com/
- https://darvishinc.ca/staircase/curved-staircase/
- https://bermanstairs.com/stair-makers-toronto.html
- https://bbsflooring.ca/stair-renovation-guide
- https://stairsteps.ca/
- https://strataline.ca/services/stairs
- https://thenorthstairontario.com/stair-renovation-cost-toronto/
- https://www.murphydoor.com/
- https://www.jhbarn.com/
- https://renohouse.ca/blog/walk-in-closet-cost-toronto-comparison
- https://www.leoconstra.com/post/cabinet-painting-cost-gta

Floors:
- https://lvflooring.ca/how-much-does-it-cost-to-install-herringbone-wood-floors/
- https://lvflooring.ca/2025/10/28/how-much-is-wide-plank-white-oak-flooring/
- https://topfloorings.com/blogs/news/herringbone-flooring-toronto-cost-installation-2026-trends
- https://www.leoconstra.com/post/wide-plank-hardwood-floors-gta
- https://www.leoconstra.com/cost-guides/flooring-cost-toronto
- https://www.aafloors.ca/oak-flooring-in-toronto-the-real-cost-breakdown-what-homeowners-actually-pay/
- https://www.timbercraftco.com/anitque-solid-wood-flooring
- https://zelta.ca/blog/hardwood-floor-refinishing-cost/
- https://renohouse.ca/services/flooring/polished-concrete-floor
- https://renohouse.ca/blog/epoxy-flooring-toronto

Sound, rooms, wellness, bathrooms, basements, condos:
- https://konstruction.ca/blog/soundproofing-a-wall
- https://konstruction.ca/soundproofing-toronto
- https://renohouse.ca/blog/soundproofing-cost-toronto-comparison
- https://renohouse.ca/blog/condo-soundproofing-toronto-upstairs-neighbor
- https://renohouse.ca/blog/soundproofing-condo-strata-rules-toronto
- https://renohouse.ca/blog/acoustic-treatment-vs-soundproofing-difference
- https://www.leoconstra.com/post/basement-home-theatre-cost-design
- https://renohouse.ca/blog/home-theater-soundproofing-toronto-build
- https://www.leoconstra.com/post/basement-home-gym-design-gta
- https://renohouse.ca/blog/home-gym-cost-toronto-comparison
- https://renohouse.ca/blog/basement-sauna-installation-toronto-2026
- https://renohouse.ca/blog/permit-requirements-home-sauna-toronto
- https://leisurecraft.com/
- https://renohouse.ca/blog/cold-plunge-cost-toronto-comparison
- https://renohouse.ca/services/kitchen-bath/wet-room-bathroom-design
- https://www.leoconstra.com/post/walk-in-shower-cost-gta
- https://renohouse.ca/blog/accessibility-renovation-grants-toronto-ontario
- https://renohouse.ca/blog/heated-floor-toronto-cost
- https://www.leoconstra.com/post/basement-subfloor-options-compared
- https://renohouse.ca/blog/wine-cellar-installation-toronto-2026
- https://renohouse.ca/blog/wine-cellar-cost-toronto-comparison
- https://www.rosehillwinecellars.com/
- https://www.leoconstra.com/cost-guides/condo-renovation-cost-toronto
- https://www.leoconstra.com/guides/condo-renovation-rules-toronto
- https://renohouse.ca/services/painting/wallpaper-installation
- https://www.homepainterspro.ca/blogs/accent-wall-cost-toronto/

Sitemaps (competitor mapping): https://renohouse.ca/sitemap.xml ; https://www.leoconstra.com/sitemap.xml ; https://konstruction.ca/sitemap.xml
