# Research: AI Cool Roof Aged Reflectance / Soiling Penalty (2026)

**Slug:** ai-cool-roof-aged-reflectance-soiling-2026
**Journalist:** Priya Greenwood (sustainability/energy-data beat)
**Article #:** 1025
**Date:** October 6, 2026

## Thesis

The "cool roof" label on asphalt shingles is measured on lab-fresh samples. Three years of dust, pollen, and microbiological growth erase a large share of the promised reflectivity, and the rating system knows it: ENERGY STAR's steep-slope bar is initial solar reflectance 0.25 but only 0.15 after three years. A homeowner who paid a premium for cool shingles based on the brochure number is buying the fresh number and living with the dusty one. Title 24 already prices this in (it regulates the AGED value, 0.20 for steep-slope re-roofs in CA zones 4, 8-15). Satellite AI can now read your actual roof albedo from orbit, so the gap between label and reality is becoming checkable.

## Kill test

Does this help someone building or buying a home? Yes: a homeowner choosing shingles for a re-roof in a hot climate gets (1) a concrete rule: shop the CRRC directory by AGED reflectance, not initial; (2) a dollar figure for what soiling costs them per year; (3) a maintenance lever (detergent wash restores ~90% of unweathered reflectance per LBNL); (4) a climate-zone caveat (humid Florida-type soiling is 2-3x worse than arid Arizona-type). A builder gets the Title 24 compliance shortcut: aged values are the code values.

## Primary sources (6)

1. **Sleiman et al., "Soiling of building envelope surfaces and its effect on solar reflectance, Part I: Analysis of roofing product databases," Solar Energy (2011).** Analyzed CRRC Rated Products Directory + ENERGY STAR manufacturer data after 3 years natural exposure. Key findings: products with high initial SR lose reflectance; site-resolved CRRC data shows absolute SR losses for medium-high initial SR products were 2-3x greater in Florida (hot/humid) than Arizona (hot/dry), Ohio intermediate. By product type, losses largest for field-applied coating, modified bitumen, single-ply membrane; smallest for factory-applied coating and metal. Shingles sit in the middle. https://www.sciencedirect.com/science/article/abs/pii/S0927024811004600

2. **LBNL Heat Island Group: Akbari & Konopacki cool-roof field studies.** Real-home measurements in CA and FL: reflective roof cut AC energy use 10-50%, saving $10-100/yr per 100 m2 of roof depending on starting insulation. Cool-colored (nonwhite) roofs: raising SR from 0.1 to 0.4 saves ~250 kWh/yr (mild climates) to 1000+ kWh/yr (very hot) per 100 m2 of roof. Potential US net savings from white commercial roofs + cool-colored residential roofs: $750M+/yr. https://newscenter.lbl.gov/2004/08/27/cool-colors-cool-roofs/ ; OSTI LBNL-58265 https://www.osti.gov/bridge/servlets/purl/860746-D3V0Ei/860746.pdf

3. **LBNL Fresno side-by-side home study ("Measured temperature reductions and energy savings from a cool tile roof on a central California home").** Two identical new homes, dark asphalt shingle vs reflective concrete tile, monitored May 2012-Apr 2013. Cool tile roof ran 13.8 C cooler on a summer day, cut cooling electricity 26% and peak demand 37%.

4. **EPA Heat Island Compendium, Ch. 4 (Cool Roofs).** Modeled annual savings per 1,000 ft2 of residential roof from cool-roof conversion across 16 CA climate zones (R-11/R-19): average 297 kWh, $372/yr energy savings, $466 NPV per 1,000 ft2; range 115-413 kWh. Winter heating penalty small (avg -4.9 therms). https://www.epa.gov/sites/production/files/2014-08/documents/coolroofscompendium_ch4.pdf

5. **ENERGY STAR Program Requirements for Roof Products v2.1 + CRRC/ENERGY STAR alternative (Jan 2025).** Steep-slope: initial SR >= 0.25, maintenance of SR >= 0.15 three years after installation. Low-slope: 0.65 initial / 0.50 aged. CRRC directory holds 3,000+ rated products; ratings are independently verified. http://www.energystar.gov/ia/partners/product_specs/program_reqs/roofs_prog_req.pdf ; https://www.rooferscoffeeshop.uk/uploads/media/2025/08/crrc-energy-star-roof-program.pdf

6. **California Title 24 Part 6 (2022/2025 cycles, identical for single-family).** Prescriptive steep-slope: aged SR >= 0.20, TE >= 0.75, SRI >= 16 in zones 10-15 (new) and zones 4, 8-15 (re-roof >50%). Exceptions: R-38 ceiling, radiant barrier, R-2+ above deck, <=50% replacement. https://usmadesupply.com/resources/building-codes-standards/title-24/cool-roofs ; https://roofvista.com/resources/guides/california-title-24-cool-roof-guide

**Supporting / context:**
- WRI (2026): satellite + Google ML albedo mapping of 78 cities; median roof albedo 0.21; cool roof modeled at 0.55. https://www.wri.org/insights/cool-roofs-cooling-potential (the AI-from-orbit hook)
- H.R. 9894 Cool Roof Rebate Act (2024): proposed $0.25-$0.75/ft2 rebates keyed to 3-year AGED reflectance, $25M/yr FY2025-2029. https://www.congress.gov/bill/118th-congress/house-bill/9894/text/ih
- LBNL/Akbari aging-and-weathering paper: detergent washing restores most samples to within 90% of unweathered reflectance; some needed algaecide. https://www.osti.gov/servlets/purl/860745
- DOE fact sheet: cool-color roof on a home yields up to $0.05/ft2/yr. https://proxy.filestage.io/_url/http://www1.eere.energy.gov/buildings/pdfs/cool_roof_fact_sheet.pdf

## Original contribution (the novel calculation)

**The soiling tax.** Take a cool asphalt shingle marketed at initial SR 0.30 against a conventional dark shingle at SR 0.08: the brochure promises a 0.22 reflectance advantage. Sleiman's CRRC data shows medium-high initial SR products lose meaningful reflectance by year 3, worst in humid climates. Assume the shingle ages to SR 0.20 (still above ENERGY STAR's 0.15 floor and Title 24's 0.20 line): the advantage shrinks to 0.12, i.e., **45% of the cooling benefit is gone by year 3** in a humid climate.

Dollarize with LBNL's cool-colored-roof curve (SR 0.1 -> 0.4 saves 250-1000 kWh/yr per 100 m2 roof): that is ~83-333 kWh per 0.1 SR per ~1,076 ft2. Losing 0.10 SR on a 2,000 ft2 roof = ~155-620 kWh/yr lost = **roughly $30-$125/yr at $0.20/kWh** that the brochure math assumed you would keep. In arid climates (AZ-type soiling, ~1/3 the FL loss), the tax is roughly a third of that.

Cross-check with EPA compendium: avg $372/yr per 1,000 ft2 for a full dark-to-cool conversion (SR delta ~0.5). A 45% haircut on that conversion = ~$167/yr per 1,000 ft2, ~$335/yr on a 2,000 ft2 roof. Same order of magnitude as the LBNL-derived range. Methodology, assumptions, and the linearity caveat go in the article.

## Actionable takeaways (required)

1. Shop the CRRC directory (coolroofs.org) by **aged** solar reflectance, not initial. Sort steep-slope shingles; anything near the 0.15 ENERGY STAR floor will be a dark roof by year 4 in a humid climate.
2. In hot-humid zones, prefer factory-applied coatings or metal (Sleiman: smallest aged losses); cool asphalt shingles are the worst cool-roof value where it rains and grows things.
3. Budget a wash: LBNL found detergent washing restores ~90% of unweathered reflectance. Caveat: pressure-washing asphalt shingles can void the warranty; soft-wash only, and check manufacturer guidance.
4. Title 24 shortcut for CA re-roofs: if you have R-38 in the attic or a radiant barrier, you are exempt from the cool-roof prescriptive requirement entirely. Know the exceptions before you pay the cool-shingle premium.
5. Check the satellite read: WRI-style albedo maps are becoming consumer-visible; if your "cool" roof reads 0.25 from orbit at year 5, the label lied by omission.

## Strongest counterargument

Cool shingles are still strictly better than dark shingles: even aged to 0.15-0.20, they beat a 0.05-0.10 dark roof, and the premium over standard architectural shingles is often small (cool-rated lines sit inside the normal $5.50-$9.50/ft2 installed architectural range). The heating penalty is real but small (EPA: avg -4.9 therms/yr per 1,000 ft2). And in arid climates the soiling tax is modest. The article's claim is not "cool roofs are a scam" but "the label number is the fresh number; buy on the aged number."

## Limitations

- The 45% figure assumes linear scaling of savings with SR delta and a specific 0.30 -> 0.20 aging path; actual shingle aging varies by product, color, and microclimate. CRRC directory has product-level aged values; the article generalizes.
- EPA compendium table baseline is a dark-to-white conversion; interpolating down to shingle deltas is approximate.
- Cost-premium data for cool vs standard shingles is thin: cool lines are priced as premium architectural shingles, but no published dataset isolates the "cool" premium from the "premium line" premium.
- Sleiman Part I is 2011; CRRC's exposure farms and product formulations have evolved. The directional finding (humid soiling >> arid) is replicated in later LBNL work.
- Washing guidance: LBNL's restoration data is for single-ply membranes, not asphalt shingles; the shingle-washing recommendation is extrapolated and flagged as such.

## Headline candidates

1. "Your Cool Roof Shingles Were Rated in a Lab. Three Years of Dust Ate 45% of the Payback."
2. "The ENERGY STAR Label Promises 0.25. Your Roof Delivers 0.15. The Dust Gets the Difference."
3. "Your Roofer Sold You the Fresh Number. You Live With the Dusty One."

## Notes for draft

- Priya voice: energy data tied to utility bills, comparisons, urgency without preachiness.
- Open with a person/job site, not market size. Cold open candidate: a Fresno homeowner, or the satellite read.
- Hard gates: 0-3 em dashes, <15% "The" starters, no banned phrases, rhythm variance >= 200.
- Length: 800-1200 words (deep dive with original math).
