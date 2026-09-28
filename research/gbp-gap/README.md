# GBP-gap niche research — pass 1 (high ticket, GTA first)

date: 2026-09-28 · status: **draft for owner review** · scope: research only, no build decisions changed · method note: all agent work ran on Opus; orchestration and synthesis on Fable

Companion files:
- `gbp-home-service-categories.md` — the Google Business Profile (GBP) category ground truth this pass checks against.
- `platform-coverage-gta.md` — Local Services Ads (Canada), HomeStars, Houzz and Yelp category coverage for the same terms.
- `evidence/c1…c6-*.md` — per-cluster niche rows with prices, sources and GTA drivers.
- `../../data/niches/gbp-gap-candidates-2026-09.csv` — the machine-readable master list.

---

## 0. Summary

<!-- FILL: three-paragraph answer-first summary once agent results are in -->

---

## 1. The thesis, stated precisely

**What a GBP category does.** Every Google Business Profile carries one primary category and up to nine secondary ones, chosen from Google's fixed list of roughly 4,000. The primary category is the strongest single ranking input for the local pack (the map block with three businesses). When someone searches a service term, Google builds the pack from profiles whose categories match the query's intent; profile "services" text, reviews and posts add weaker relevance.

**What happens when the service is not a category.** For "limewash painters toronto" there is no category to match, so Google falls back to the nearest one ("Painter"). Four things follow, and they are the opening this project already bets on:

1. **The pack is absent or wrong.** Either no map block appears, or it shows painters who do not do the work. Either way the pack absorbs fewer clicks and users scroll to organic.
2. **No Local Services Ads block.** LSAs use a separate and much shorter category list (see `platform-coverage-gta.md`). A term outside it has no paid unit pinned above the results.
3. **The directory wall is missing.** HomeStars, Angi, Yelp and Houzz rank with category pages. No category, no page, so the organic results are not the usual wall of directories.
4. **Contractors have not built pages.** Businesses optimise around the category they can pick, so few have a page that names the niche. The first page that names the service exactly, in the consumer's own words, becomes the clearest entity match. The owner's thin exact-match micro-site holding position ~3.5 for "limewash painter toronto" is the measured proof (spec addendum A5).

**What the gap does not do.**

- It does not create demand. Volume is set by consumer vocabulary. Rubric criterion 2 (searchability) still governs, and the standing keyword-tool check still applies.
- It is bounded by the free-text "services" field. A painter can list "limewash painting" under the Painter category and Google uses that text for relevance. The gap narrows the pack; it rarely deletes it.
- It gives nothing where the term is a category and the results are platform-locked (roofing, plumbing, kitchen remodelling). Those stay excluded, and only their craft or regulatory slices enter under addendum A11 Track 2.
- It does not change the survival rule. Indexation is still decided by real local data on the page, not by the thinness of the competition.

**How the lens fits the spec.** This is a sharper instrument for rubric criterion 4 (platform gap) and a good predictor of the SERP beatability scored in P0. Recommendation: record two new fields on every niche record, `gbp_coverage` (EXACT, PARTIAL or NONE) and `gbp_nearest` (the category Google falls back to). NONE and PARTIAL are eligible on either track. EXACT is eligible only as a Track 2 craft slice. This is a data-field addition, not a spec change.

---

## 2. Method

- **Ticket tiers** (typical installed job in the GTA, CAD): T1 ≥ C$30k; T2 C$10k–30k; T3 C$2.5k–10k. Below C$2.5k is deferred to pass 2 and listed in §7.
- **Three levels.** SERVICE (what you hire), USE (what it is applied to or the project type) and OUTCOME (the problem the homeowner actually types). Uses and outcomes are the connective tissue of the web (§5); most live as sections, FAQ or guides rather than as their own URLs.
- **Ground truth first.** One agent pulled the current GBP category list from third-party mirrors and classified every candidate term as EXACT, PARTIAL or NONE against it. Domain agents recorded a belief; the ground-truth pass overrides it. Disagreements are noted in §3.
- **GTA lens.** Six domain agents each covered one cluster, with GTA prices from Canadian sources (HomeStars, RenoAssistance, contractor price pages, City of Toronto, Ontario programs), GTA demand drivers (housing stock, climate, bylaws, subsidies, insurance) and the data hooks a page could use. Every price carries a URL; estimates are marked EST.
- **Platform coverage.** A separate agent pulled the Canada LSA category list and the HomeStars, Houzz and Yelp taxonomies, so each term shows how much of a Toronto results page is already spoken for.
- **Limits.** Web search runs from a US vantage and shows organic links only, so local packs and ad units could not be observed directly. §8 lists a 30-minute manual check from a Toronto location that closes that gap. No keyword-tool exports were available; volume statements remain proxies.

---

## 3. GBP ground truth: what the category list actually says

<!-- FILL: completeness note, surprises (terms assumed uncategorised that have a category, and the reverse), Canada vs US differences, disagreements with domain-agent beliefs -->

---

## 4. Master list, by tier

<!-- FILL: condensed table per tier: slug | name | cluster | level | GBP class → nearest | GTA price | verdict. Full rows live in evidence files and the CSV. -->

---

## 5. The web: how the niches link, and how it grows without becoming doorway pages

Four node types: **S**ervice, **U**se, **O**utcome, **C**ity.

- **Money pages are S × C**, and only where a page clears the publish gates (three populated data modules, a sellable provider in the database, dedup linter, schema, link minimums). Nothing here changes that.
- **Hubs are S** (national) plus **cluster hubs** that group services sharing the same specialists ("century home exterior", "wet basement", "specialty plaster").
- **Guides carry U and O nodes.** A use or outcome becomes a guide, city-agnostic by default. It gets its own city pages only when the law or a program differs by municipality, which is exactly the regulation-born data the spec prizes ("legal basement apartment rules" differ in Toronto, Mississauga and Brampton; the Toronto flooding subsidy has no equivalent in Vaughan).
- **Edges are the product.** Three edge types recur in every cluster:
  1. *Same specialist does both* — limewash and venetian plaster; underpinning, exterior waterproofing and egress windows; tuckpointing and chimney rebuilds.
  2. *This problem needs one of these services* — basement flooding fans out to backwater valve, sump, exterior waterproofing, regrading and a french drain.
  3. *This project triggers that requirement* — a basement apartment forces ceiling height (underpinning), egress (window well), fire separation, and a designated substance survey on a pre-1990 house.

**Why this grows faster than it publishes.** Adding one service node adds its city pages plus edges into every existing outcome and use node it serves; adding one outcome guide adds one URL that links into many existing money pages. Link density rises faster than page count, and internal links from already-indexed pages are what get new pages crawled and indexed fast. The dedup linter and the §3.3 batch gate keep this from turning into a doorway network: a use or outcome stays a section or FAQ until Search Console shows it earning its own impressions.

<!-- FILL: per-cluster hub maps from the evidence files, condensed -->

---

## 6. GTA-first: recommended pass-1 priority

**Two readings of "GTA first", and which one this report uses.** Addendum A7 rejected "Toronto × all services" in favour of 10 niches × 30–50 cities, because rare-niche demand per metro is thin and authority accrues per topic. This report keeps that geometry and reads "GTA first" as the *priority and data lens*: the 13 GTA municipalities already in the city list become the first pages built for every niche, Toronto-specific modules (subsidies, bylaws, heritage districts, housing age) are built first, and Toronto stays the first lead-sales territory. Changing the publish geometry instead would amend §3.3 and A7 and needs the owner's written sign-off.

<!-- FILL: ranked recommendation with rationale, mapped to launch-10, probe hubs and wave 2 -->

---

## 7. Deferred to pass 2 (below C$2.5k)

<!-- FILL -->

---

## 8. Excluded, and why

<!-- FILL -->

---

## 9. Open questions and owner to-dos

1. **Thirty-minute manual check from a Toronto location.** For the top fifteen person-form terms, search Google with location set to Toronto and note: is a local pack shown; do the businesses in it actually do the work (open the profile, read the primary category); is a Local Services Ads block present. This observes what our tools cannot.
2. **Keyword-tool export** for the pass-1 list (the standing check in spec §4.2) to replace proxy volumes.
3. **Decide the reading of "GTA first"** (§6). The default here changes nothing in §3.3.

<!-- FILL: anything the agents flagged as unverifiable -->

---

## 10. Evidence index

<!-- FILL -->
