# gtaicf.ca — owner review list

What the owner has to supply, confirm or strike before the ICF site leaves preview. Items marked **blocks launch** keep every page `noindex` until resolved. Everything else is copy the writers could not source to a document and wrote as our practice; confirm it or tell us to reword.

## Blocks launch (same items as gtahelicalpiles.ca; one company, one answer)

1. **Identity** in `data/business.json`: legal name, phone, email, hours, service address type, Google Business Profile URL, founded year. The status field stays `PLACEHOLDER` until these are real, and the build renders `noindex` and the preview strip on every page while it does.
2. **Consent text** (`consent_text`, `consent_version`): approve the draft wording or supply yours; the version string is stored with every lead.
3. **Lead delivery**: `LEAD_WEBHOOK_URL` or `RESEND_API_KEY` + `LEAD_INBOX` + `LEAD_FROM` in the Vercel project. Without one of them the form accepts leads and has nowhere to send them.
4. **Domain**: buy gtaicf.ca and point it at the Vercel project (README has the steps).

## Credentials and documents (the site says nothing about these until you supply them)

5. **ICF systems and their documentation** (`icf_systems`, `icf_ccmc_reports`): the systems the crew actually installs from local yards, and for each the CAN/ULC-S717.1 listing or CCMC number. The site is brand-agnostic and never names one as ours; it says the system is named on the quote and its documentation goes in the permit package. Only Amvic (13043-L), Plasti-Fab Advantage (13101-L) and Polycrete (13354-R) hold CCMC entries; Nudura, Logix, Fox Blocks, BuildBlock and Quad-Lock rely on S717.1 listings. Never say "CCMC approved" as a blanket phrase.
6. **Engineer** (`engineer`): who seals ICF designs outside the Part 9 limits. The process steps say "the engineer sizes the core, reinforcing and lintels"; if a qualified designer draws most of your Part 9 jobs, say so and we soften it.
7. **Warranty, insurance, WSIB, licence** (`warranty_text`, `insurance`, `wsib`, `licence`): each unlocks one gated word (guaranteed, insured, licensed). Empty means the word never renders.
8. **Walls built** (`walls_built_note`): a countable claim ("X foundations poured since Y") only with a source you can stand behind.

## Prices (`data/prices.json`, status BENCHMARK)

9. All three rows are illustrative bands from public Ontario pages (ICFpro, BuildersOntario, ICFhome titles). Replace low/high with your own per-square-foot figures or confirm the bands: foundation and basement walls $38 to $55; full-height above-grade walls $42 to $55; additions and garage walls $42 to $58 (least supported; no Ontario source prices additions separately).
10. `included_note` says "owner to confirm what the per-sq-ft price includes"; write the inclusion list (forms, rebar, bracing, concrete, pump?) so the excluded list on the pages stays true.
11. Confirm whether above-grade pricing exceeds basement pricing on your jobs; the sources disagree.

## Practice statements written as "we" that need a yes or a reword

These appear across the service pages, guides and city pages. Each was written because it is how the trade normally works; none is backed by a document of yours.

- We prepare the permit package with the client (drawings, system documentation, SB-12 energy summary); we book every inspection stage and are on site for each (footing forms before the pour; pre-backfill).
- We pour year-round; in cold weather the concrete arrives warm, the wall is covered and the cure is allowed for, which adds time and can add cost. Winter guide adds: concrete temperature read at discharge and out-of-band loads refused; blankets, heated enclosures or a heated top as the protection methods; no frozen lumps in backfill; refusing to pour where the excavation bottom cannot be kept from freezing (OBC 9.12.1.3).
- Membrane and weeping tile are in every ICF quote; a basement left unfinished still gets drywall or an equivalent thermal barrier over the interior foam, priced in (R-value guide).
- Interior insulation retrofits of existing poured walls are not offered ("a job for a basement renovator, and we say so", R-value guide).
- The pump truck, rock excavation, shoring, dewatering, a drainage layer and travel to Niagara are separate lines on the written quote (city pricing notes).
- Toronto: shoring beside neighbouring foundations on narrow lots is a quoted line; mixed tills are treated to the 1.2 m clay footing depth unless a geotechnical report says otherwise.
- Mississauga: the membrane and drainage layer go onto the foam face and we say so at the initial inspection, because the City's inspection wording assumes formwork is stripped; "much of our Mississauga work is additions and rebuilt basements" (inferred from census shares; soften if untrue).
- Burlington: footings held at 1.2 m or deeper across both ground bands unless a lot report says otherwise; drainable backfill brought in on the till band; native spoil reused on the sand band.
- Brampton: reinforcing is checked and recorded before the pour (the City lists no pre-pour wall inspection); Castlemore estate lots give the pump truck room.
- St. Catharines: a test pit before the quote settles the water question; both concrete-stage inspections requested and attended.
- Guelph: "travel is a line on the quote"; Guelph is described as the north-west corner of our area.
- "Travel rarely moves a quote" in Oakville, Mississauga and Burlington depends on where the crew is based (business.json address is a placeholder).

## Interpretations the writers made that a plans examiner might not share

- A flat ICF wall drawn within Subsection 9.15.4 is an acceptable solution, so a municipality's alternative-solutions fee (Guelph $640; St. Catharines $500) should not arise. Consistent with the Code and the manufacturers' position, but confirm with each City or soften.
- Hamilton's separate $453 "Residential Part 9 foundation permit" line: the page does not say when one is required, because the City's page does not.
- Guelph's conditional foundation-stage permit ($0.23/ft²) is at the Chief Building Official's discretion; whether the City issues one for a house foundation in practice is not published.
- OBC 9.11.1.1 (ASTC 47 / STC 50) applies to assemblies separating a dwelling unit from other spaces, not exterior walls; the R-value guide says so.
- Sentence 9.12.2.2.(2) (insulated foundations take the "no heated space" depth) is read as the designer's call for an ICF wall on an uninsulated footing; on clay the answer is 1.2 m either way.

## Sources the owner should spot-check

- Every Code clause is quoted from the ministry's digital 2024 Building Code Compendium, which states it is not an official copy. Spot-check the clauses in `data/claims-register.md` against e-Laws (O. Reg. 163/24) before launch.
- Municipal fee pages without an effective date: Hamilton and Milton. Confirm the figures are current when the first permit goes in.
- Mississauga's fee PDF calls the $50 pre-screening fee non-refundable while the City's cost page says it is credited; the page follows the cost page.
- Milton's Part 9 residential checklist is dated February 2019; ask the Building Division whether a newer one exists.

## Known gaps stated on the pages rather than guessed

- No municipality in the service area publishes an ICF-specific checklist; the pages say so.
- Toronto and Hamilton publish no house footing depth; 1.2 m is attributed to OBC Table 9.12.2.2 and to geotechnical reports filed with Oakville, Hamilton (Ancaster) and Burlington.
- Guelph's inspection-stage pages and Burlington's stage list were not retrievable; those pages tell the reader what to confirm with the municipality.
- Depth to bedrock is not mapped at any query point; pages say where the survey shows rock at or near the surface and nothing about depth elsewhere.
- No energy-savings percentage is printed anywhere; no primary NRC, CMHC or RDH measurement was retrieved. Supply one and the R-value guide can carry it.
- Effective (whole-wall) R-values for any specific block were not retrieved; the pages print manufacturers' nominal values only and say the effective figure comes from the manufacturer's thermal report for the system on the quote.

## Photos (when you have them)

The site runs without imagery by design. When you have your own job photos (forms stacked and braced, the pour, membrane going on, a finished wall before backfill), send 6 to 10 at 2,000 px or wider with the city and month; the design system has a place for a real photo on the homepage, each service page and each guide. No stock or AI imagery.
