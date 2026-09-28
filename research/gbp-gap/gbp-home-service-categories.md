# GBP categories — home & property services (ground truth)

- retrieved_at: 2026-09-28
- scope: Google Business Profile (GBP) categories in English, US and Canada lists. This file holds the home and property services subset, plus spot checks for Quotd candidate terms.
- method: the full list was downloaded from two independent mirrors and joined by GCID (Google's internal category ID). Names were cross-checked against a third list. The subset and the spot checks were then classified by hand against the joined list. A script checked every category name in this file against both lists, so spelling and capitalisation are verbatim.
- claimed total: 4,044 categories available in the US (PlePer and lobstr agree), 4,044 in the Canada list (PlePer), and 4,053 as the global union across 70 locales (lobstr).
- completeness confidence: **HIGH (EST ~99%)** for the US and Canada lists as of 2026-09-28. The reasons are below.

## Sources and completeness

| Source | What it is | Updated (as stated) | Count claimed | Used for |
|---|---|---|---|---|
| PlePer GBP category tool, https://pleper.com/index.php?do=tools&sdo=gmb_categories, queried with `&go=1&lang=en&show_table=1` and `country=190` (US), `32` (Canada), `1` (Worldwide), `189` (UK) | Live scrape. Each row has GCID, name, first-detected and last-detected dates | "Not more than three days old". Every row was last detected on 2026-09-28 | 4,044 (US); 4,044 (Canada) | Primary list, en-CA vs en-US comparison, first-seen dates |
| lobstr.io repo, https://github.com/lobstrio/google-business-categories (`data/google-business-categories.full.json`). Write-up: https://www.lobstr.io/blog/google-business-categories | Compiled from 70 locale pulls. Each row has GCID, US availability, locale count and name variants | README says September 2026; blog updated 8 Sept 2026 | 4,053 global; 4,044 available in the US | Independent cross-check by GCID, renames, locale coverage |
| Dalton Luka, https://daltonluka.com/blog/google-my-business-categories | Alphabetical list of names | May 9, 2026 | 4,046 | Name cross-check |
| Welby Consulting, https://welbyconsulting.com/the-complete-google-business-profile-category-list/ | Curated subset of about 330 names | May 6, 2026 | "4,000+" | Not complete. Shows which stale names still circulate |
| Flento, https://www.flento.io/blog/google-business-profile-categories | Guide with about 100 example names | 9/11/2026 | "more than 4,100 (approximate)" | Count claim only; not a list |
| 2022 GMB list (gist), https://gist.github.com/manchumahara/dc88a6b9b157ada5f02cb8408653b80f | Names only | Created 2022-09-21 | 3,968 | Finding retired and renamed names |
| Local Dominator, https://localdominator.co/google-business-profile-categories/ | — | — | — | Not used: a bot check blocked the fetch |

**Agreement.** PlePer's US list and lobstr's US-available set are identical by GCID (4,044 each), with identical display names. Dalton Luka's May 2026 list also matches by name: 4,000 names match exactly, and the rest differ only in apostrophe style or a regional display name ("Childminder"). PlePer adds one extra row, "Scraping service provider". No other source has it, and it sits after "Zoo", out of alphabetical order. It is treated as a PlePer watermark and ignored.

**Why confidence is high.** Two independently built lists agree exactly, and PlePer saw every one of its rows on the retrieval date. Three risks remain:
- Google adds and retires categories every month. lobstr counts 238 retired between 2022 and 2026.
- Display names change even when the GCID does not (see §4).
- Google publishes no official list, and the official API needs an approved account.

**en-CA vs en-US.** For home services the two lists are the same. All 349 categories below appear in both. Only "Moving service" is displayed differently in the Canada list ("Moving company"). Home-service names carry no Canadian spellings ("eavestrough", "storey", "centre" never appear). Details are in §5.

**How to read a line.** `- <verbatim name> — [SUPPLIER ·] gcid <id> [· first seen YYYY-MM] [· note]`. "First seen" is PlePer's first-detected date, shown only for 2020 or later. PlePer began tracking in 2019, so about 3,770 categories carry a 2019 date, which only means they already existed then. "EST" marks my judgement of how businesses use a category; I did not check live listings.

## Key findings

1. **"Foundation" is not a foundation-repair category.** It is the charitable-foundation category (gcid `foundation`, filed with nonprofits). No category names foundation repair, underpinning, basement lowering or anything "basement". The nearest real categories are "Waterproofing service", "Excavating contractor", "Concrete contractor" and "Structural engineer". The brief's example "underpinning → Foundation" should be dropped.
2. **French drains (LAUNCH-10) are PARTIAL, not NONE.** "Drainage service" exists, but it is shared by drain-cleaning firms and yard-drainage firms.
3. **The hazard cluster is almost uncategorised.** Only "Asbestos testing service" exists. No category covers mold or mould, radon, lead, asbestos abatement, smoke or odour, hoarding, biohazard or oil tanks. Radon mitigation (LAUNCH-10) is NONE.
4. **Categories that exist and may surprise.** EXACT categories exist for: "Carport and pergola builder", "Gazebo builder", "Sunroom contractor", "Skylight contractor", "Stair contractor", "Railing contractor", "Pond contractor", "Fountain contractor", "Landscape lighting designer", "Home cinema installation", "Stained glass studio", "Countertop contractor", "Log home builder", "Dock builder", "Bee relocation service", "Wallpaper installer", "Gutter service", "Junk removal service", and "House clearance service" (the UK term for estate cleanout).
5. **Energy audits are EXACT.** "Energy advisory service" (PlePer first seen 2024-11) matches Canada's EnerGuide "energy advisor".
6. **Name-match traps.** "Sauna" is a public sauna. The only trade category is the retail "Sauna store", so sauna builders (LAUNCH-10) are PARTIAL. The same trap applies to "Wine cellar" (food and drink), "Greenhouse" (a growing operation), "Aquarium" (a public aquarium), "Swimming pool" (a pool facility) and, EST, "Heritage preservation" (an organisation type).
7. **Stale or wrong names still circulate on 2026 SEO lists.** welbyconsulting (May 2026) prints "Fencing contractor", which was never a category (the category is "Fence contractor"), and "Handyman" (now "Handyman/Handywoman/Handyperson"). Since 2022, "Waterproofing company", "Security system installer", "Solar energy contractor", "Arborist and tree surgeon", "Generator shop" and "Scaffolder" have been renamed. The conservatory categories are gone.
8. **No category exists for:** heat pump, geothermal, boiler service, radiant heating, generator installation (only a shop), garage-door installation (only "Garage door supplier"), door installation, window repair or restoration, material-specific roofing (slate, metal, cedar, flat), eavestrough, soffit, interlock, epoxy floors, ADUs and suites, timber frame, lightning protection, car lifts, snow-melt, ice dams, house lifting.
9. **Two categories are regional.** "Home inspector" and "Building materials supplier" exist in only 13 of 70 locales. Both are in the US and Canada lists.
10. **Spot-check tally** (165 terms): EXACT 81, PARTIAL 80, NONE 4. The NONE terms are radon mitigation, lightning protection, car lift, and house lifting / moving.

## 1. Home & property services subset (349 categories)

The subset has 210 service categories in 12 groups, 128 SUPPLIER categories and 11 adjacent ones. Each category appears once, in the group it fits best. Borderline categories left out of the subset are listed in §6.

### Construction & general contracting (20)

- Building firm — gcid `building_firm` · catch-all
- Construction company — gcid `construction_company` · catch-all
- Contractor — gcid `contractor` · catch-all
- Custom home builder — gcid `custom_home_builder`
- Demolition contractor — gcid `demolition_contractor`
- General contractor — gcid `general_contractor` · catch-all for anything uncategorised
- Handyman/Handywoman/Handyperson — gcid `handyman` · renamed; bare "Handyman" is stale
- Height works — gcid `height_works` · work at height / rope access
- Home builder — gcid `home_builder`
- Log home builder — gcid `log_home_builder`
- Manufactured home transporter — gcid `manufactured_home_transporter` · moves manufactured homes only; nearest to house moving
- Metal construction company — gcid `metal_construction_company`
- Modular home builder — gcid `modular_home_builder`
- Property maintenance — gcid `property_maintenance` · upkeep catch-all
- Repair service — gcid `repair_service` · generic catch-all
- Scaffolding service — gcid `scaffolder`
- Steel construction company — gcid `steel_construction_company`
- Steel erector — gcid `steel_erector`
- Steel framework contractor — gcid `steel_framework_contractor`
- Utility contractor — gcid `utility_contractor`

### Remodelling & rooms (7)

- Bathroom remodeler — gcid `bathroom_remodeler`
- Home staging service — gcid `home_staging_service` · first seen 2024-02
- Interior construction contractor — gcid `interior_construction_contractor`
- Interior fitting contractor — gcid `interior_fitting_contractor` · fit-out (UK/EU usage)
- Kitchen remodeler — gcid `kitchen_remodeler`
- Office refurbishment service — gcid `office_refurbishment_service` · commercial
- Remodeler — gcid `remodeler`

### Roofing & exterior envelope (incl. windows, glass, chimneys) (15)

- Chimney services — gcid `chimney_services` · repair, rebuild, relining
- Chimney sweep — gcid `chimney_sweep`
- Double glazing installer — gcid `double_glazing_supplier`
- Glass repair service — gcid `glass_repair_service`
- Glazier — gcid `glazier`
- Gutter cleaning service — gcid `gutter_cleaning_service`
- Gutter service — gcid `gutter_service` · first seen 2024-02
- Roofing contractor — gcid `roofing_contractor`
- Screen repair service — gcid `screen_repair_service` · window/door screens (EST)
- Sheet metal contractor — gcid `sheet_metal_contractor`
- Siding contractor — gcid `siding_contractor`
- Skylight contractor — gcid `skylight_contractor`
- Stained glass studio — gcid `stained_glass_studio` · filed with arts by lobstr
- Stucco contractor — gcid `stucco_contractor`
- Window installation service — gcid `window_installation_service`

### Masonry, stone, concrete & paving (11)

- Asphalt contractor — gcid `asphalt_contractor`
- Blast cleaning service — gcid `blast_cleaning_service` · masonry cleaning, paint removal
- Bricklayer — gcid `bricklayer`
- Building restoration service — gcid `building_restoration_service` · facade / masonry / heritage restoration
- Concrete contractor — gcid `concrete_contractor`
- Marble contractor — gcid `marble_contractor`
- Masonry contractor — gcid `masonry_contractor`
- Paving contractor — gcid `paving_contractor`
- Sandblasting service — gcid `sandblasting_service` · masonry cleaning, paint removal
- Stone carving — gcid `stone_carving`
- Stone cutter — gcid `stone_cutter`

### Foundation, waterproofing, drainage, sewer, septic & wells (10)

- Drainage service — gcid `drainage_service` · used for drain cleaning AND land/yard drainage
- Drilling contractor — gcid `drilling_contractor`
- Earth works company — gcid `earth_works_company`
- Excavating contractor — gcid `excavating_contractor`
- Impermeabilization service — gcid `impermeabilization_service` · second waterproofing category (Spanish-origin name)
- Pile driving service — gcid `pile_driver`
- Septic system service — gcid `septic_system_service`
- Sewage disposal service — gcid `sewage_disposal_service` · septic pumping, sewage hauling
- Waterproofing service — gcid `waterproofing_company` · renamed from "Waterproofing company"
- Well drilling contractor — gcid `well_drilling_contractor`

### Landscaping, trees, lawn, irrigation, snow (11)

- Arborist service — gcid `arborist_and_tree_surgeon` · renamed from "Arborist and tree surgeon"
- Gardener — gcid `gardener`
- Interior plant service — gcid `interior_plant_service` · indoor plantscaping; nearest to living walls
- Landscape architect — gcid `landscape_architect`
- Landscape designer — gcid `landscape_designer`
- Landscape lighting designer — gcid `landscape_lighting_designer`
- Landscaper — gcid `landscaper`
- Lawn care service — gcid `lawn_care_service`
- Lawn sprinkler system contractor — gcid `lawn_sprinkler_system_contractor`
- Snow removal service — gcid `snow_removal_service`
- Tree service — gcid `tree_service`

### Outdoor structures, fences, gates, decks, pools, spas, saunas (incl. metalwork) (23)

- Aluminum welder — gcid `aluminum_welder`
- Basketball court contractor — gcid `basketball_court_contractor`
- Blacksmith — gcid `blacksmith`
- Carport and pergola builder — gcid `carport_and_pergola_builder`
- Coppersmith — gcid `coppersmith`
- Deck builder — gcid `deck_builder`
- Dock builder — gcid `dock_builder` · waterfront / cottage
- Fence contractor — gcid `fence_contractor`
- Fountain contractor — gcid `fountain_contractor`
- Garage builder — gcid `garage_builder`
- Gazebo builder — gcid `gazebo_builder`
- Hot tub repair service — gcid `hot_tub_repair_service`
- Iron works — gcid `iron_works` · industrial and ornamental ironwork
- Metal fabricator — gcid `metal_fabricator`
- Metal workshop — gcid `metal_workshop`
- Pond contractor — gcid `pond_contractor`
- Pool cleaning service — gcid `pool_cleaning_service`
- Shed builder — gcid `shed_builder`
- Sunroom contractor — gcid `sunroom_contractor`
- Swimming pool contractor — gcid `swimming_pool_contractor`
- Swimming pool repair service — gcid `swimming_pool_repair_service`
- Tennis court construction company — gcid `tennis_court_construction_company`
- Welder — gcid `welder`

### Interior finishes: painting, plaster, wallpaper, flooring, tile, countertops, cabinets, millwork, stairs (22)

- Cabinet maker — gcid `cabinet_maker`
- Carpenter — gcid `carpenter`
- Carpet installer — gcid `carpet_installer`
- Countertop contractor — gcid `countertop_contractor` · first seen 2020-06
- Dry wall contractor — gcid `dry_wall_contractor`
- Floor refinishing service — gcid `floor_refinishing_service`
- Floor sanding and polishing service — gcid `floor_sanding_and_polishing_service`
- Flooring contractor — gcid `flooring_contractor`
- Furniture maker — gcid `furniture_maker` · built-ins (EST)
- Joiner — gcid `joiner`
- Millwork shop — gcid `millwork_shop` · filed as retail; custom millwork makers
- Paint stripping service — gcid `paint_stripping_company` · renamed from "Paint stripping company"
- Painter — gcid `painter`
- Painting — gcid `painting` · ambiguous: lobstr files it with arts; some painting firms use it (EST)
- Plasterer — gcid `plaster_contractor`
- Railing contractor — gcid `railing_contractor`
- Stair contractor — gcid `stair_contractor`
- Tile contractor — gcid `tile_contractor`
- Wallpaper installer — gcid `wallpaper_installer` · first seen 2022-08
- Wood floor installation service — gcid `wood_floor_installation_service`
- Wood floor refinishing service — gcid `wood_floor_refinishing_service`
- Woodworker — gcid `woodworker`

### HVAC, plumbing, electrical, energy, solar, generators, EV (23)

- Air conditioning contractor — gcid `air_conditioning_contractor`
- Air conditioning repair service — gcid `air_conditioning_repair_service`
- Air duct cleaning service — gcid `air_duct_cleaning_service`
- Dryer vent cleaning service — gcid `dryer_vent_cleaning_service` · first seen 2023-07
- Electric vehicle charging station contractor — gcid `electric_vehicle_charging_station_contractor` · first seen 2020-10
- Electrical installation service — gcid `electrical_installation_service`
- Electrician — gcid `electrician`
- Energy advisory service — gcid `energy_advisory_service` · first seen 2024-11 · fits EnerGuide energy advisors
- Energy equipment and solutions — gcid `energy_equipment_and_solutions` · vague
- Furnace repair service — gcid `furnace_repair_service`
- Gas engineer — gcid `gas_engineer` · UK-style name
- Gas installation service — gcid `gas_installation_service`
- Gasfitter — gcid `gasfitter`
- Heating contractor — gcid `heating_contractor`
- HVAC contractor — gcid `hvac_contractor`
- Insulation contractor — gcid `insulation_contractor`
- Lighting contractor — gcid `lighting_contractor`
- Mechanical contractor — gcid `mechanical_contractor`
- Plumber — gcid `plumber`
- Solar energy company — gcid `solar_energy_company`
- Solar energy system service — gcid `solar_energy_contractor` · renamed from "Solar energy contractor"
- Solar panel maintenance service — gcid `solar_panel_maintenance_service` · first seen 2023-12
- Water purification company — gcid `water_purification_company` · water-treatment dealers

### Environmental, hazard, restoration & cleaning (25)

- Animal control service — gcid `animal_control_service`
- Asbestos testing service — gcid `asbestos_testing_service` · the only asbestos category; no abatement/removal
- Bee relocation service — gcid `bee_relocation_service` · first seen 2023-07
- Bird control service — gcid `bird_control_service`
- Carpet cleaning service — gcid `carpet_cleaning_service`
- Cleaners — gcid `cleaners` · generic
- Debris removal service — gcid `debris_removal_service`
- Dumpster rental service — gcid `dumpster_rental_service` · first seen 2021-12
- Environmental consultant — gcid `environmental_consultant`
- Estate liquidator — gcid `estate_liquidator` · estate sales
- Fire damage restoration service — gcid `fire_damage_restoration_service`
- Graffiti removal service — gcid `graffiti_removal_service`
- House cleaning service — gcid `house_cleaning_service`
- House clearance service — gcid `house_clearance_service` · UK term for estate cleanout
- Janitorial service — gcid `janitorial_service`
- Junk removal service — gcid `junk_removal_service` · first seen 2024-03
- Pest control service — gcid `pest_control_service`
- Pressure washing service — gcid `pressure_washing_service`
- Professional organizer — gcid `professional_organizer` · nearest to hoarding
- Tile cleaning service — gcid `tile_cleaning_service` · first seen 2023-08
- Upholstery cleaning service — gcid `upholstery_cleaning_service`
- Water damage restoration service — gcid `water_damage_restoration_service`
- Water tank cleaning service — gcid `water_tank_cleaning_service` · cisterns / tanks
- Water testing service — gcid `water_testing_service` · well water
- Window cleaning service — gcid `window_cleaning_service`

### Home systems: security, automation, AV, theatre, elevators, accessibility, locks (11)

- Antenna service — gcid `aerial_installation_service`
- Audio visual consultant — gcid `audio_visual_consultant`
- Computer networking service — gcid `computer_networking_center`
- Elevator service — gcid `elevator_service` · commercial-dominated (EST)
- Emergency locksmith service — gcid `emergency_locksmith_service`
- Fire protection service — gcid `fire_protection_service`
- Home automation company — gcid `home_automation_company`
- Home cinema installation — gcid `home_cinema_installation` · filed with arts by lobstr
- Locksmith — gcid `locksmith`
- Security system installation service — gcid `security_system_installer` · renamed from "Security system installer"
- Telecommunications contractor — gcid `telecommunications_contractor`

### Inspection, engineering, design & consulting (32)

- Acoustical consultant — gcid `acoustical_consultant`
- Architect — gcid `architect`
- Architectural designer — gcid `architectural_designer`
- Architecture firm — gcid `architecture_firm`
- Blueprint service — gcid `blueprint_service`
- Building consultant — gcid `building_consultant`
- Building designer — gcid `building_designer` · first seen 2021-04
- Building inspector — gcid `building_inspector`
- Civil engineer — gcid `civil_engineer`
- Civil engineering company — gcid `civil_engineering_company`
- Commercial real estate inspector — gcid `commercial_real_estate_inspector` · commercial
- Drafting service — gcid `drafting_service`
- Electrical engineer — gcid `electrical_engineer`
- Engineer — gcid `engineer`
- Engineering consultant — gcid `engineering_consultant`
- Environmental engineer — gcid `environmental_engineer`
- Fire protection consultant — gcid `fire_protection_consultant`
- Geotechnical engineer — gcid `geotechnical_engineer`
- Heritage preservation — gcid `heritage_preservation` · filed with arts; reads as the organisation type (EST)
- Home inspector — gcid `home_inspector` · in only 13 of 70 locales; present in US and CA
- Interior architect office — gcid `interior_architect_office`
- Interior Decorator — gcid `interior_decorator` · first seen 2020-03
- Interior designer — gcid `interior_designer`
- Land surveying office — gcid `land_surveying_office`
- Land surveyor — gcid `land_surveyor`
- Lighting consultant — gcid `lighting_consultant`
- Mechanical engineer — gcid `mechanical_engineer`
- Quantity surveyor — gcid `quantity_surveyor`
- Real estate surveyor — gcid `real_estate_surveyor`
- Soil testing service — gcid `soil_testing_service`
- Structural engineer — gcid `structural_engineer`
- Surveyor — gcid `surveyor`

### Suppliers & stores homeowners search when hiring (all SUPPLIER) (128)

- Aggregate supplier — SUPPLIER · gcid `aggregate_supplier`
- Air conditioning store — SUPPLIER · gcid `air_conditioning_store`
- Air conditioning system supplier — SUPPLIER · gcid `air_conditioning_system_supplier`
- Aluminum window — SUPPLIER · gcid `aluminum_window`
- Aquarium shop — SUPPLIER · gcid `aquarium_shop` · "Aquarium" alone = public aquarium
- Architectural salvage store — SUPPLIER · gcid `architectural_salvage_store` · heritage parts
- Audio visual equipment supplier — SUPPLIER · gcid `audio_visual_equipment_supplier`
- Awning supplier — SUPPLIER · gcid `awning_supplier` · the only awning category
- Bathroom supply store — SUPPLIER · gcid `bathroom_supply_store`
- Blinds shop — SUPPLIER · gcid `blinds_shop`
- Boiler supplier — SUPPLIER · gcid `boiler_supplier`
- Brick manufacturer — SUPPLIER · gcid `brick_manufacturer`
- Building materials market — SUPPLIER · gcid `building_materials_market`
- Building materials store — SUPPLIER · gcid `building_materials_store`
- Building materials supplier — SUPPLIER · gcid `building_materials_supplier` · in only 13 of 70 locales; present in US and CA
- Burglar alarm store — SUPPLIER · gcid `burglar_alarm_store`
- Cabinet store — SUPPLIER · gcid `cabinet_store`
- Carpet store — SUPPLIER · gcid `carpet_store`
- Ceiling supplier — SUPPLIER · gcid `ceiling_supplier`
- Concrete product supplier — SUPPLIER · gcid `concrete_product_supplier`
- Countertop store — SUPPLIER · gcid `countertop_store`
- Crushed stone supplier — SUPPLIER · gcid `crushed_stone_supplier`
- Curtain store — SUPPLIER · gcid `curtain_store`
- Curtain supplier and maker — SUPPLIER · gcid `curtain_supplier_and_maker`
- Disability equipment supplier — SUPPLIER · gcid `disability_equipment_supplier`
- Do-it-yourself shop — SUPPLIER · gcid `do_it_yourself_store`
- Door manufacturer — SUPPLIER · gcid `door_manufacturer`
- Door shop — SUPPLIER · gcid `door_shop`
- Door supplier — SUPPLIER · gcid `door_supplier`
- Door warehouse — SUPPLIER · gcid `door_warehouse`
- Dry wall supply store — SUPPLIER · gcid `dry_wall_supply_store`
- Electric generator shop — SUPPLIER · gcid `generator_shop` · renamed from "Generator shop"; no installer category
- Electrical supply store — SUPPLIER · gcid `electrical_supply_store`
- Elevator manufacturer — SUPPLIER · gcid `elevator_manufacturer` · residential lift makers
- Fence supply store — SUPPLIER · gcid `fence_supply_store`
- Finishing materials supplier — SUPPLIER · gcid `finishing_materials_supplier`
- Fire alarm supplier — SUPPLIER · gcid `fire_alarm_supplier`
- Fire protection equipment supplier — SUPPLIER · gcid `fire_protection_equipment_supplier`
- Fire protection system supplier — SUPPLIER · gcid `fire_protection_system_supplier`
- Fireplace manufacturer — SUPPLIER · gcid `fireplace_manufacturer`
- Fireplace store — SUPPLIER · gcid `fireplace_store` · fireplace dealer-installers use it (EST)
- Firewood supplier — SUPPLIER · gcid `firewood_supplier`
- Fitted furniture supplier — SUPPLIER · gcid `fitted_furniture_supplier` · built-ins, closets
- Flooring store — SUPPLIER · gcid `flooring_store`
- Furnace parts supplier — SUPPLIER · gcid `furnace_parts_supplier`
- Furnace store — SUPPLIER · gcid `furnace_store`
- Garage door supplier — SUPPLIER · gcid `garage_door_supplier` · the only garage-door category
- Garden building supplier — SUPPLIER · gcid `garden_building_retail`
- Garden center — SUPPLIER · gcid `garden_center`
- Gas logs supplier — SUPPLIER · gcid `gas_logs_supplier`
- Glass & mirror shop — SUPPLIER · gcid `glass_and_mirror_shop`
- Glass block supplier — SUPPLIER · gcid `glass_block_supplier`
- Glass merchant — SUPPLIER · gcid `glass_merchant`
- Glass shop — SUPPLIER · gcid `glass_shop`
- Granite supplier — SUPPLIER · gcid `granite_supplier`
- Grill store — SUPPLIER · gcid `grill_store`
- Gypsum product supplier — SUPPLIER · gcid `gypsum_product_supplier`
- Hardware store — SUPPLIER · gcid `hardware_store`
- Heating equipment supplier — SUPPLIER · gcid `heating_equipment_supplier`
- Heating oil supplier — SUPPLIER · gcid `heating_oil_supplier` · oil-tank households
- Home audio store — SUPPLIER · gcid `stereo_store`
- Home improvement store — SUPPLIER · gcid `home_improvement_store`
- Home theater store — SUPPLIER · gcid `home_theater_store`
- Hot tub store — SUPPLIER · gcid `hot_tub_store`
- Hot water system supplier — SUPPLIER · gcid `hot_water_system_supplier`
- Insulation materials store — SUPPLIER · gcid `insulation_materials_store`
- Irrigation equipment supplier — SUPPLIER · gcid `irrigation_equipment_supplier`
- Kitchen furniture store — SUPPLIER · gcid `kitchen_furniture_store` · cabinet retailers (EU usage)
- Landscaping supply store — SUPPLIER · gcid `landscaping_supply_store`
- Lawn equipment rental service — SUPPLIER · gcid `lawn_equipment_rental_service`
- Lawn irrigation equipment supplier — SUPPLIER · gcid `lawn_irrigation_equipment_supplier`
- Lighting store — SUPPLIER · gcid `lighting_store`
- Linoleum store — SUPPLIER · gcid `linoleum_store`
- Lock Store — SUPPLIER · gcid `lock_store` · first seen 2021-02
- Locks supplier — SUPPLIER · gcid `locks_supplier`
- Lumber store — SUPPLIER · gcid `lumber_store`
- Marble supplier — SUPPLIER · gcid `marble_supplier`
- Masonry supply store — SUPPLIER · gcid `masonry_supply_store`
- Medical equipment supplier — SUPPLIER · gcid `medical_equipment_supplier`
- Mirror shop — SUPPLIER · gcid `mirror_shop`
- Mobile home dealer — SUPPLIER · gcid `mobile_home_dealer`
- Mobility equipment supplier — SUPPLIER · gcid `mobility_equipment_supplier`
- Modular home dealer — SUPPLIER · gcid `modular_home_dealer`
- Molding supplier — SUPPLIER · gcid `molding_supplier` · trim mouldings; may include industrial moulds (EST)
- Mulch supplier — SUPPLIER · gcid `mulch_supplier`
- Natural stone supplier — SUPPLIER · gcid `natural_stone_supplier`
- Paint store — SUPPLIER · gcid `paint_store`
- Patio enclosure supplier — SUPPLIER · gcid `patio_enclosure_supplier` · sunroom / screen-room dealers
- Paving materials supplier — SUPPLIER · gcid `paving_materials_supplier`
- Plant nursery — SUPPLIER · gcid `plant_nursery`
- Plast window store — SUPPLIER · gcid `plast_window_store`
- Playground equipment supplier — SUPPLIER · gcid `playground_equipment_supplier`
- Plumbing supply store — SUPPLIER · gcid `plumbing_supply_store`
- Pond supply store — SUPPLIER · gcid `pond_supply_store`
- Portable building manufacturer — SUPPLIER · gcid `portable_building_manufacturer`
- Propane supplier — SUPPLIER · gcid `propane_supplier`
- PVC windows supplier — SUPPLIER · gcid `pvc_windows_supplier`
- Rainwater tank supplier — SUPPLIER · gcid `rainwater_tank_supplier`
- Ready mix concrete supplier — SUPPLIER · gcid `ready_mix_concrete_supplier`
- Retaining wall supplier — SUPPLIER · gcid `retaining_wall_supplier` · materials; wall builders use Landscaper / Masonry (EST)
- Roofing supply store — SUPPLIER · gcid `roofing_supply_store`
- Safe & vault shop — SUPPLIER · gcid `safe_and_vault_shop`
- Sand & gravel supplier — SUPPLIER · gcid `sand_and_gravel_supplier`
- Sauna store — SUPPLIER · gcid `sauna_store` · the only sauna-trade category ("Sauna" = public sauna)
- Screen store — SUPPLIER · gcid `screen_store` · window/door screens (EST)
- Security system supplier — SUPPLIER · gcid `security_system_supplier`
- Shelving store — SUPPLIER · gcid `shelving_store`
- Shower door shop — SUPPLIER · gcid `shower_door_shop`
- Sod supplier — SUPPLIER · gcid `sod_supplier`
- Solar energy equipment supplier — SUPPLIER · gcid `solar_energy_equipment_supplier`
- Solar hot water system supplier — SUPPLIER · gcid `solar_hot_water_system_supplier`
- Stone supplier — SUPPLIER · gcid `stone_supplier`
- Swimming pool supply store — SUPPLIER · gcid `swimming_pool_supply_store`
- Tile store — SUPPLIER · gcid `tile_store`
- Topsoil supplier — SUPPLIER · gcid `topsoil_supplier`
- Turf supplier — SUPPLIER · gcid `turf_supplier`
- Vacuum cleaning system supplier — SUPPLIER · gcid `vacuum_cleaning_system_supplier` · central vacuum
- Wallpaper store — SUPPLIER · gcid `wallpaper_store`
- Water filter supplier — SUPPLIER · gcid `water_filter_supplier`
- Water pump supplier — SUPPLIER · gcid `water_pump_supplier`
- Water softening equipment supplier — SUPPLIER · gcid `water_softening_equipment_supplier`
- Water treatment supplier — SUPPLIER · gcid `water_treatment_supplier`
- Wheelchair store — SUPPLIER · gcid `wheelchair_store`
- Window supplier — SUPPLIER · gcid `window_supplier`
- Window treatment store — SUPPLIER · gcid `window_treatment_store`
- Wood and laminate flooring supplier — SUPPLIER · gcid `wood_and_laminate_flooring_supplier`
- Wood stove shop — SUPPLIER · gcid `wood_stove_shop`
- Wood supplier — SUPPLIER · gcid `wood_supplier`

### Adjacent household & property services (outside Quotd scope; listed so rows can be checked) (11)

- Appliance repair service — gcid `appliance_repair_service`
- Estate appraiser — gcid `estate_appraiser`
- Home insurance agency — gcid `home_insurance_agency`
- Moving and storage service — gcid `moving_and_storage_service`
- Moving service — gcid `moving_company` · shows as "Moving company" in the Canada list
- Piano moving service — gcid `piano_moving_service`
- Property administration service — gcid `property_administrator`
- Property management company — gcid `property_management_company`
- Real estate appraiser — gcid `real_estate_appraiser`
- Refrigerator repair service — gcid `refrigerator_repair_service`
- Washer & dryer repair service — gcid `washer_and_dryer_repair_service`

## 2. Spot checks

Legend:
- **EXACT**: a category names the service, or the trade's own category names it (basement waterproofing → "Waterproofing service").
- **PARTIAL**: only a broader or adjacent category covers the service, or only a supplier or store category names it.
- **NONE**: nothing fits except catch-alls ("General contractor", "Contractor"), or nothing sensible at all.
- **LAUNCH-10**: one of the signed-off launch niches (`data/validation/p0-report.md`).
- **TRAP**: a category whose name matches the service but whose meaning does not.

Tally: EXACT 81 · PARTIAL 80 · NONE 4.

| term | class | nearest category name(s) | note |
|---|---|---|---|
| fire damage restoration | EXACT | "Fire damage restoration service" |  |
| water damage restoration | EXACT | "Water damage restoration service" |  |
| smoke odour removal | PARTIAL | "Fire damage restoration service"; "House cleaning service" | No smoke, odour or deodorisation category. |
| mold remediation | PARTIAL | "Water damage restoration service"; "Environmental consultant" | No mold or mould category exists at all. |
| asbestos abatement | PARTIAL | "Asbestos testing service"; "Demolition contractor"; "Environmental consultant" | The only asbestos category is testing. There is no abatement or removal category; abatement firms pick testing (EST). |
| asbestos testing | EXACT | "Asbestos testing service" |  |
| vermiculite removal | PARTIAL | "Asbestos testing service"; "Insulation contractor" | No vermiculite category. |
| radon mitigation | NONE | "Environmental consultant"; "Home inspector"; "Contractor" | LAUNCH-10. No radon category; the nearest ones do not install systems. |
| radon testing | PARTIAL | "Home inspector"; "Environmental consultant" | Home inspectors often sell radon tests. |
| lead paint removal | PARTIAL | "Paint stripping service"; "Painter"; "Environmental consultant" | No lead category. |
| oil tank removal | PARTIAL | "Excavating contractor"; "Environmental consultant"; "Heating oil supplier" | Weak. No tank category; the only tank categories are "Rainwater tank supplier" and "Water tank cleaning service". |
| UFFI removal | PARTIAL | "Insulation contractor"; "Environmental consultant" |  |
| designated substance survey | PARTIAL | "Environmental consultant"; "Asbestos testing service" | Ontario term (O. Reg. 278/05); no survey category. |
| waterproofing | EXACT | "Waterproofing service"; "Impermeabilization service" | Two categories. "Waterproofing service" is gcid waterproofing_company, renamed. |
| basement waterproofing | EXACT | "Waterproofing service" | The name is generic, but it is the basement trade's own category, so the pack is full of firms that do the work. |
| foundation repair | PARTIAL | "Waterproofing service"; "Concrete contractor"; "Structural engineer" | TRAP: "Foundation" exists but is the charitable-foundation category (gcid foundation, nonprofit bucket), not foundation repair. |
| underpinning / basement lowering | PARTIAL | "Excavating contractor"; "Waterproofing service"; "Concrete contractor"; "General contractor" | Weak. No underpinning, foundation-repair or basement category. |
| excavation | EXACT | "Excavating contractor"; "Earth works company" |  |
| drainage | EXACT | "Drainage service" | In practice the category is shared by drain-cleaning (plumbing) firms and land/yard-drainage firms. |
| french drain | PARTIAL | "Drainage service"; "Landscaper"; "Waterproofing service" | LAUNCH-10. Not NONE: "Drainage service" names drainage. But its pack mixes drain-cleaners with yard-drainage firms (EST). |
| yard drainage | PARTIAL | "Drainage service"; "Landscaper" |  |
| sump pump | PARTIAL | "Plumber"; "Waterproofing service"; "Water pump supplier" |  |
| backwater valve | PARTIAL | "Plumber"; "Waterproofing service"; "Drainage service" |  |
| sewer line repair | PARTIAL | "Plumber"; "Drainage service"; "Excavating contractor" | No sewer category. "Sewage disposal service" covers septic pumping and hauling. |
| trenchless sewer | PARTIAL | "Plumber"; "Drainage service" |  |
| septic | EXACT | "Septic system service"; "Sewage disposal service" |  |
| well drilling | EXACT | "Well drilling contractor"; "Drilling contractor" |  |
| masonry | EXACT | "Masonry contractor"; "Bricklayer" |  |
| tuckpointing / repointing | PARTIAL | "Masonry contractor"; "Bricklayer"; "Building restoration service" |  |
| brick restoration | PARTIAL | "Building restoration service"; "Masonry contractor" |  |
| parging | PARTIAL | "Masonry contractor"; "Stucco contractor"; "Waterproofing service" |  |
| stucco | EXACT | "Stucco contractor" |  |
| EIFS | PARTIAL | "Stucco contractor"; "Siding contractor" |  |
| plastering | EXACT | "Plasterer" |  |
| venetian plaster | PARTIAL | "Plasterer"; "Painter" | LAUNCH-10. |
| limewash | PARTIAL | "Painter"; "Masonry contractor" | LAUNCH-10. |
| painter | EXACT | "Painter"; "Painting" | "Painting" is a separate, ambiguous category; lobstr files it with arts. |
| wallpaper installer | EXACT | "Wallpaper installer" | PlePer first saw it in 2022-08. |
| decorative / faux painter | PARTIAL | "Painter"; "Painting"; "Artist" |  |
| flooring | EXACT | "Flooring contractor" |  |
| hardwood floor refinishing | EXACT | "Wood floor refinishing service"; "Floor refinishing service"; "Floor sanding and polishing service" | Three categories. |
| epoxy floor | PARTIAL | "Flooring contractor"; "Concrete contractor" | No floor-coating category. |
| concrete polishing | PARTIAL | "Floor sanding and polishing service"; "Concrete contractor"; "Flooring contractor" |  |
| terrazzo | PARTIAL | "Tile contractor"; "Marble contractor"; "Flooring contractor" |  |
| tile | EXACT | "Tile contractor" |  |
| countertop | EXACT | "Countertop contractor"; "Countertop store" |  |
| cabinet maker | EXACT | "Cabinet maker" |  |
| finish carpentry / millwork | EXACT | "Carpenter"; "Millwork shop"; "Joiner" |  |
| stair builder | EXACT | "Stair contractor" |  |
| wrought iron / ornamental iron | PARTIAL | "Iron works"; "Welder"; "Blacksmith"; "Railing contractor" | "Iron works" covers both industrial and ornamental ironwork. |
| welding | EXACT | "Welder"; "Aluminum welder" |  |
| fence | EXACT | "Fence contractor" | Not "Fencing contractor", which welbyconsulting's 2026 list prints but which is not a category and was not one in 2022 either. |
| automatic gate | PARTIAL | "Fence contractor"; "Garage door supplier"; "Security system installation service" | No gate category. |
| deck | EXACT | "Deck builder" |  |
| pergola | EXACT | "Carport and pergola builder" |  |
| gazebo | EXACT | "Gazebo builder" |  |
| sunroom | EXACT | "Sunroom contractor" |  |
| conservatory | PARTIAL | "Sunroom contractor"; "Patio enclosure supplier" | "Conservatory construction contractor" and "Conservatory supply & installation" appear on 2022-era lists but are no longer categories. |
| greenhouse | PARTIAL | "Garden building supplier"; "Sunroom contractor" | TRAP: "Greenhouse" exists but is the plant-growing (agriculture) category, not a builder. |
| screen enclosure | PARTIAL | "Patio enclosure supplier"; "Sunroom contractor"; "Screen repair service" |  |
| awning | PARTIAL | "Awning supplier" | The only awning category is supplier-type; fabricator-installers use it as primary (EST). |
| landscape lighting | EXACT | "Landscape lighting designer"; "Lighting contractor" |  |
| christmas / holiday lighting | PARTIAL | "Lighting contractor"; "Landscape lighting designer" | LAUNCH-10. No holiday-lighting category; "Christmas store" is retail. |
| irrigation / sprinkler | EXACT | "Lawn sprinkler system contractor" |  |
| landscaper | EXACT | "Landscaper" |  |
| landscape designer | EXACT | "Landscape designer" |  |
| landscape architect | EXACT | "Landscape architect" |  |
| arborist / tree service | EXACT | "Arborist service"; "Tree service" | "Arborist service" is gcid arborist_and_tree_surgeon, renamed. |
| retaining wall | PARTIAL | "Retaining wall supplier"; "Landscaper"; "Masonry contractor" | Only a materials-supplier category names it. |
| paving / interlock / pavers | EXACT | "Paving contractor"; "Paving materials supplier" | No interlock- or paver-specific category, so herringbone and clay pavers (LAUNCH-10) are a PARTIAL slice. |
| concrete contractor | EXACT | "Concrete contractor" |  |
| asphalt | EXACT | "Asphalt contractor"; "Paving contractor" |  |
| demolition | EXACT | "Demolition contractor" |  |
| swimming pool contractor | EXACT | "Swimming pool contractor" |  |
| pool removal | PARTIAL | "Swimming pool contractor"; "Demolition contractor"; "Excavating contractor" |  |
| pond / water feature | EXACT | "Pond contractor"; "Fountain contractor" |  |
| hot tub | EXACT | "Hot tub store"; "Hot tub repair service" |  |
| sauna | PARTIAL | "Sauna store"; "Carpenter" | LAUNCH-10 (sauna builders). TRAP: "Sauna" is the public-sauna venue. Only the retail "Sauna store" names the trade. |
| steam room | PARTIAL | "Bathroom remodeler"; "Sauna store"; "Plumber" | No steam category. |
| home theater | EXACT | "Home cinema installation"; "Home theater store" |  |
| home automation | EXACT | "Home automation company" |  |
| audio visual | EXACT | "Audio visual consultant"; "Audio visual equipment supplier"; "Home audio store" |  |
| security system | EXACT | "Security system installation service"; "Security system supplier" |  |
| safe / vault | PARTIAL | "Safe & vault shop"; "Locksmith" | Store-type only; for a retail purchase the store category fits. |
| residential elevator | PARTIAL | "Elevator service"; "Mobility equipment supplier" | "Elevator service" is broad and mostly commercial (EST). |
| stair lift | PARTIAL | "Mobility equipment supplier"; "Medical equipment supplier"; "Elevator service" |  |
| wheelchair ramp / accessibility | PARTIAL | "Mobility equipment supplier"; "Disability equipment supplier"; "Carpenter" | No accessibility-renovation category. |
| handyman | EXACT | "Handyman/Handywoman/Handyperson" | The display name changed. Bare "Handyman" is stale. |
| general contractor | EXACT | "General contractor" |  |
| home builder | EXACT | "Home builder" |  |
| custom home builder | EXACT | "Custom home builder" |  |
| remodeler | EXACT | "Remodeler" |  |
| kitchen remodeler | EXACT | "Kitchen remodeler" |  |
| bathroom remodeler | EXACT | "Bathroom remodeler" |  |
| basement remodeler / finishing | PARTIAL | "Remodeler"; "General contractor" | No basement category of any kind. |
| garage builder | EXACT | "Garage builder" |  |
| ADU / laneway suite / secondary suite | PARTIAL | "Custom home builder"; "Home builder"; "Remodeler"; "General contractor" | No ADU or suite category. Basement suites fall to Remodeler or General contractor. |
| modular home | EXACT | "Modular home builder"; "Modular home dealer" |  |
| log home | EXACT | "Log home builder" |  |
| timber frame | PARTIAL | "Log home builder"; "Carpenter"; "Custom home builder" |  |
| insulation | EXACT | "Insulation contractor" |  |
| spray foam | PARTIAL | "Insulation contractor" |  |
| energy audit / weatherization | EXACT | "Energy advisory service"; "Insulation contractor" | PlePer first saw "Energy advisory service" in 2024-11. It matches Canada's EnerGuide "energy advisor". The weatherization work itself is PARTIAL (Insulation contractor). |
| HVAC | EXACT | "HVAC contractor"; "Heating contractor"; "Air conditioning contractor" |  |
| heat pump | PARTIAL | "HVAC contractor"; "Heating contractor"; "Air conditioning contractor" | No heat-pump category. |
| geothermal | PARTIAL | "HVAC contractor"; "Heating contractor"; "Drilling contractor" |  |
| boiler | PARTIAL | "Heating contractor"; "Plumber"; "Boiler supplier" | Only "Boiler supplier" and "Boiler manufacturer" name boilers. |
| radiant heating | PARTIAL | "Heating contractor"; "Plumber" |  |
| fireplace | PARTIAL | "Fireplace store"; "Wood stove shop"; "Chimney services"; "Gas installation service" | Store-type only ("Fireplace store", "Fireplace manufacturer"); dealer-installers use it (EST). |
| chimney sweep | EXACT | "Chimney sweep" |  |
| chimney services / relining | EXACT | "Chimney services" | Relining is a slice of it. |
| solar | EXACT | "Solar energy company"; "Solar energy system service"; "Solar panel maintenance service" |  |
| generator | PARTIAL | "Electric generator shop"; "Electrician" | Store-type only (gcid generator_shop). |
| EV charger installation | EXACT | "Electric vehicle charging station contractor" |  |
| electrician | EXACT | "Electrician"; "Electrical installation service" |  |
| knob and tube rewiring | PARTIAL | "Electrician" |  |
| water treatment / softener / filtration | EXACT | "Water purification company"; "Water treatment supplier"; "Water softening equipment supplier"; "Water filter supplier" |  |
| central vacuum | PARTIAL | "Vacuum cleaning system supplier" | Supplier-type only. |
| window installation | EXACT | "Window installation service" |  |
| window restoration / repair | PARTIAL | "Glass repair service"; "Window installation service"; "Carpenter"; "Building restoration service" | LAUNCH-10 (historic window restoration). No window-repair or window-restoration category. |
| door installation | PARTIAL | "Door supplier"; "Door shop"; "Window installation service"; "Carpenter" | No door-installer category. |
| glazier / glass | EXACT | "Glazier"; "Glass repair service"; "Glass & mirror shop" |  |
| stained glass | EXACT | "Stained glass studio" |  |
| skylight | EXACT | "Skylight contractor" |  |
| roofing | EXACT | "Roofing contractor" |  |
| slate roofing | PARTIAL | "Roofing contractor" | LAUNCH-10 (slate roof repair). No roofing category is specific to a material. |
| metal roofing | PARTIAL | "Roofing contractor"; "Sheet metal contractor" |  |
| cedar roofing | PARTIAL | "Roofing contractor" |  |
| flat roofing | PARTIAL | "Roofing contractor"; "Waterproofing service" |  |
| gutters / eavestrough | EXACT | "Gutter service"; "Gutter cleaning service" | PlePer first saw "Gutter service" in 2024-02. Canadian English shows no "eavestrough" wording. |
| siding | EXACT | "Siding contractor" |  |
| soffit and fascia | PARTIAL | "Siding contractor"; "Gutter service"; "Roofing contractor" |  |
| snow removal | EXACT | "Snow removal service" |  |
| pressure washing | EXACT | "Pressure washing service" |  |
| junk removal | EXACT | "Junk removal service" | PlePer first saw it in 2024-03. |
| hoarding cleanup | PARTIAL | "House clearance service"; "Junk removal service"; "House cleaning service"; "Professional organizer" | No hoarding, biohazard or trauma-cleaning category. |
| estate cleanout | EXACT | "House clearance service"; "Estate liquidator"; "Junk removal service" | "House clearance service" is the UK name for the same job. |
| home inspector | EXACT | "Home inspector" | Only 13 of 70 locales carry it; the US and Canada both do. |
| structural engineer | EXACT | "Structural engineer" |  |
| environmental consultant | EXACT | "Environmental consultant" |  |
| wildlife removal / animal control | EXACT | "Animal control service"; "Bird control service" | "Wildlife rescue service" means rescue, not removal. |
| pest control | EXACT | "Pest control service" |  |
| bee removal | EXACT | "Bee relocation service" | PlePer first saw it in 2023-07. |
| lightning protection | NONE | "Electrician"; "Roofing contractor" | No lightning category. |
| soundproofing / acoustic | PARTIAL | "Acoustical consultant"; "Insulation contractor"; "Dry wall contractor" |  |
| wine cellar | PARTIAL | "Cabinet maker"; "Carpenter"; "HVAC contractor" | TRAP: "Wine cellar" exists but is a food-and-drink venue or shop category, not a builder. |
| closet design | PARTIAL | "Fitted furniture supplier"; "Cabinet maker"; "Shelving store"; "Interior designer" | No closet category. |
| garage flooring | PARTIAL | "Flooring contractor"; "Concrete contractor" |  |
| car lift | NONE | "Garage builder"; "Contractor" | No installer category for home car lifts. |
| aquarium | PARTIAL | "Aquarium shop" | Store-type. TRAP: "Aquarium" alone is the public aquarium. |
| living wall | PARTIAL | "Interior plant service"; "Landscaper"; "Landscape designer" |  |
| heated driveway / snow melt | PARTIAL | "Paving contractor"; "Concrete contractor"; "Heating contractor" | No snow-melt category. |
| ice dam removal | PARTIAL | "Roofing contractor"; "Snow removal service"; "Gutter service" |  |
| house lifting / moving | NONE | "Manufactured home transporter"; "Structural engineer"; "Contractor" | "Manufactured home transporter" covers manufactured homes only, and "Moving service" moves household goods. |
| foundation crack repair | PARTIAL | "Waterproofing service"; "Concrete contractor" | Not "Foundation", which is the nonprofit category. |
| egress window | PARTIAL | "Window installation service"; "Excavating contractor"; "Waterproofing service" | LAUNCH-10 (basement egress windows). |
| window well | PARTIAL | "Waterproofing service"; "Window installation service"; "Drainage service" |  |
| load-bearing wall removal | PARTIAL | "Remodeler"; "Structural engineer"; "General contractor" |  |
| attic conversion | PARTIAL | "Remodeler"; "General contractor"; "Insulation contractor" | No loft or attic-conversion category. |
| second-storey addition | PARTIAL | "Remodeler"; "General contractor"; "Custom home builder" | No addition or extension category. |
| porch builder | PARTIAL | "Deck builder"; "Carpenter"; "Sunroom contractor" |  |
| stair railing | EXACT | "Railing contractor"; "Stair contractor" |  |
| glass railing | PARTIAL | "Railing contractor"; "Glazier" |  |
| heritage restoration | PARTIAL | "Building restoration service"; "Heritage preservation"; "Masonry contractor" | "Heritage preservation" matches by name, but lobstr files it with arts and culture and it reads as the heritage-organisation type (EST). |
| historic preservation | PARTIAL | "Heritage preservation"; "Building restoration service" | Name match via "Heritage preservation". It could be read as EXACT, but contractor use of it is unverified. |

## 3. Recently added categories (2022–2026)

PlePer's first-detected dates for home-service categories:

- Wallpaper installer — first seen 2022-08-13 (gcid `wallpaper_installer`)
- Bee relocation service — first seen 2023-07-19 (gcid `bee_relocation_service`)
- Dryer vent cleaning service — first seen 2023-07-19 (gcid `dryer_vent_cleaning_service`)
- Tile cleaning service — first seen 2023-08-25 (gcid `tile_cleaning_service`)
- Solar panel maintenance service — first seen 2023-12-13 (gcid `solar_panel_maintenance_service`)
- Gutter service — first seen 2024-02-07 (gcid `gutter_service`)
- Home staging service — first seen 2024-02-07 (gcid `home_staging_service`)
- Junk removal service — first seen 2024-03-06 (gcid `junk_removal_service`)
- Energy advisory service — first seen 2024-11-26 (gcid `energy_advisory_service`)

Added just before 2022 (PlePer first seen):
- Interior Decorator (2020-03)
- Countertop contractor (2020-06)
- Electric vehicle charging station contractor (2020-10)
- Lock Store (2021-02)
- Building designer (2021-04)
- Dumpster rental service (2021-12)

Other additions since 2022 are marginal to home services and sit outside the subset:
- Garden machinery supplier (2023-03)
- Wire and cable supplier (2024-08)
- Drinking water supplier (2024-12)
- Public water well (2025-09): a place, not a service
- Home care service (2026-06): health care at home, not home repair

Dalton Luka's newest adds (April–May 2026) are not home services: Pet microchip scanning station, Sewing school, Event fabrication service. PlePer's full count since 2022 is 155 new categories, mostly restaurants, schools, medical specialists and car dealers.

Three caveats:
- Renames keep the GCID, so they never show up as new. "Waterproofing service" was already present in 2019 as gcid `waterproofing_company`.
- "First seen" is PlePer's crawl date, not Google's launch date.
- Canada shows no home-service additions or removals that the US lacks.

## 4. Stale names and traps

**Renamed.** The GCID is unchanged, but the old name is still printed on some lists. The old name is inferred from the GCID and the 2022 list.

| old name (still on some lists) | current name | gcid |
|---|---|---|
| Handyman | Handyman/Handywoman/Handyperson | `handyman` |
| Waterproofing company | Waterproofing service | `waterproofing_company` |
| Security system installer | Security system installation service | `security_system_installer` |
| Arborist and tree surgeon | Arborist service | `arborist_and_tree_surgeon` |
| Generator shop | Electric generator shop | `generator_shop` |
| Paint stripping company | Paint stripping service | `paint_stripping_company` |
| Solar energy contractor | Solar energy system service | `solar_energy_contractor` |
| Moving company | Moving service (US); still "Moving company" in the Canada list | `moving_company` |
| Scaffolder | Scaffolding service | `scaffolder` |
| Fencing contractor (welbyconsulting, May 2026; not on the 2022 list, so a list error rather than a rename) | Fence contractor | `fence_contractor` |

**Gone from the list.** These names are on the 2022 list, but no current category has them: Conservatory construction contractor · Conservatory supply & installation · Prefabricated house companies · Stove builder · Pumping equipment and service · Iron steel contractor · Commercial cleaning service · Curtain and upholstery cleaning service · Industrial door supplier · Interior door · Building design company · Lighting wholesaler · Electrical wholesaler. Some may have been merged into another GCID; that could not be verified. Welbyconsulting's May 2026 list also prints "Maid service", which is not a category now and was not one in 2022.

**Name-match traps.** These categories exist, but their meaning is not the home service the name suggests:
- **Foundation** is a charitable foundation, not foundation repair.
- **Sauna** is a public sauna venue. The trade uses "Sauna store".
- **Swimming pool** is a pool facility. It is two GCIDs: `swimming_basin` in the US and Canada lists, and `swimming_pool` in Canada and other non-US lists. Contractors use "Swimming pool contractor".
- **Public swimming pool** is a facility.
- **Greenhouse** is a plant-growing operation.
- **Wine cellar** is a food-and-drink venue or shop; **Wine storage facility** is storage.
- **Aquarium** is a public aquarium. The trade uses "Aquarium shop".
- **Heritage building** is a place. **Heritage preservation** is probably an organisation type (EST).
- **Public water well** and **Garden** are places.
- **Spa** is a day spa, not a hot tub.
- **Christmas store** is retail, not a lighting installer.
- **Home care service** and **Home help** are care services, not repair.
- **Drainage service** has two uses: drain cleaning and land drainage.
- **Painting** is ambiguous: lobstr files it with arts, and some painting firms use it (EST).

## 5. Canada vs US

- **Counts.** PlePer's "English + Canada" list has 4,044 categories, the same as "English + United States". Both also carry the one watermark row ("Scraping service provider"), which is excluded.
- **GCIDs.** The two sets differ by five swaps, and none is a home service:
  - Canada lacks: Event fabrication service, Pagoda, Pickleball instructor, Spine surgeon, Zoo.
  - Canada adds: Gemstone dealer, Medical geneticist, Sewing school, Smoothie shop, Swimming pool (gcid `swimming_pool`, a facility).
  - lobstr independently marks those five additions as "not available in US", which corroborates the Canada list.
- **Display names.** Only three differ across the whole list:
  - "Moving company" in Canada vs "Moving service" in the US
  - "Childminder" vs "Babysitter"
  - "Lounge" vs "Lounge bar"
- **Spelling.** The Canada list uses US spellings throughout (e.g. "Adult day care center"). No category in the Canada list contains "centre", "colour", "mould", "storey", "eavestrough", "parging" or "interlock", so those Canadian consumer terms never match a category name word for word.
- **Coverage.** All 349 subset categories exist in both lists, including the 13-locale "Home inspector" and "Building materials supplier".
- **Not checked.** French (fr-CA) display names were not pulled; Quebec is out of scope at launch.

## 6. In the list but left out of the subset (borderline)

These are real categories, left out because homeowners do not use them to hire, or because they are commercial or industrial:
- **Rentals and wholesale:** Building equipment hire service, Construction machine rental service, Equipment rental agency, Scaffolding rental service, Tool rental service, Plant and machinery hire, Construction material wholesaler, Construction equipment supplier.
- **Industrial supply:** Pipe supplier, Pump supplier, Plywood supplier, Truss manufacturer, Kitchen supply store, Woodworking supply store, Natural stone wholesaler, Wood frame supplier, Aluminum frames supplier.
- **Manufacturing and wholesale:** Boiler manufacturer, Ventilating equipment manufacturer, Tile manufacturer, Carpet wholesaler, Lighting products wholesaler, Electrical equipment supplier, Light bulb supplier.
- **Energy retail:** Energy supplier, Green energy supplier, Fuel supplier.
- **Marginal services:** Crane service, Fiberglass repair service, Glass cutting service.
- **Waste:** Garbage collection service, Waste management service, Recycling center.
- **Adjacent but not hire-a-trade:** Wildlife rescue service, Home help, Home care service, Furniture repair shop, Upholstery shop, Lawn mower repair service, Occupational therapist, Feng shui consultant.
- **Commercial:** Shopfitter, Line marking service, Diving contractor, Golf course builder.
- **Other:** Real estate developer, Homeowners' association, Christmas store, Garden furniture shop, Outdoor furniture store, Statuary, Tree farm, Forestry service, Garden machinery supplier, Wire and cable supplier, Drinking water supplier.

## Sources

- PlePer, GBP Categories full list (live, en/US, en/Canada, en/Worldwide, en/UK): https://pleper.com/index.php?do=tools&sdo=gmb_categories
- lobstr.io, repository and data: https://github.com/lobstrio/google-business-categories (raw: https://raw.githubusercontent.com/lobstrio/google-business-categories/main/data/google-business-categories.full.json)
- lobstr.io, method write-up: https://www.lobstr.io/blog/google-business-categories
- Dalton Luka, category list (May 9, 2026): https://daltonluka.com/blog/google-my-business-categories
- Welby Consulting, curated list (May 6, 2026): https://welbyconsulting.com/the-complete-google-business-profile-category-list/
- Flento guide (updated 9/11/2026): https://www.flento.io/blog/google-business-profile-categories
- 2022 GMB category list (gist): https://gist.github.com/manchumahara/dc88a6b9b157ada5f02cb8408653b80f
- Local Dominator (blocked by bot check, not used): https://localdominator.co/google-business-profile-categories/
- Launch-10 reference: `data/validation/p0-report.md` (repo)
