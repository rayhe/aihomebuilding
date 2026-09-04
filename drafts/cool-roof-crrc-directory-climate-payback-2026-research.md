# Research: Cool Roofs — CRRC Directory, Title 24, and the AI That Picks Your Shingle

**Slug:** `cool-roof-crrc-directory-climate-payback-2026`
**Article #:** 776 | **Journalist:** Priya Greenwood (sustainability/energy beat)
**Date:** September 4, 2026
**Kill test:** PASS. A reroof is a $15-30K decision a homeowner makes once every 20-30 years. Roof color/material choice locks in a decade of cooling bills. This tells the reader exactly what to ask the roofer for (CRRC label, aged solar reflectance) and what the code already requires.

## Angle

California's energy code has effectively outlawed the black shingle on reroofs, and almost nobody buying shingles knows it. Title 24 requires aged solar reflectance >= 0.20 on steep-slope reroofs over 50% — conventional dark asphalt shingles rate 0.05-0.15 and fail. Meanwhile a free federal-blessed database (CRRC Rated Products Directory) lists thousands of rated products with lab-tested initial AND 3-year aged reflectance, and ML surrogate models are starting to do climate-specific roof optimization that used to take hours of EnergyPlus simulation per run.

## Primary sources (6)

1. **Cool Roof Rating Council — Roof Rating Program** (coolroofs.org/programs/roof-rating-program): independent nonprofit; testing by Accredited Independent Testing Laboratories per ASTM C1549/E1918/E903 (reflectance), ASTM C1371 (emittance); samples weathered 3 years at test farms in Arizona (hot/dry), Ohio (cold/temperate), Florida (hot/humid); Rated Products Directory lists initial + aged values. CRRC sets no minimums itself — codes reference it.
2. **California Energy Commission — 2022 Energy Efficient Cool Roofs, Single-Family handout** (energy.ca.gov PDF): CEC designates CRRC as the rating body; only aged SR/TE values from the CRRC directory may be used for code compliance.
3. **Cool California (CA Air Resources Board) — Roof Product Comparison** (coolcalifornia.arb.ca.gov/roof-product-comparison): conventional vs cool product reflectance table. Asphalt shingle black/dark brown 0.05-0.15; "white" (actually light gray) 0.20-0.30; cool-pigment shingles 0.20-0.30; metal dark-painted 0.05-0.10 vs cool-pigment metal 0.40-0.70; clay tile cool pigments 0.40-0.60; single-ply black 0.05 vs white TPO/PVC 0.70-0.85.
4. **Title 24 reroof thresholds** (via San Joaquin County / San Dimas compliance forms, CEC): steep-slope (>=2:12), >50% replacement: aged SR >= 0.20, TE >= 0.75, SRI >= 16. Low-slope (<2:12): aged SR >= 0.63, TE >= 0.75, SRI >= 75. Exceptions: R-38+ attic, radiant barrier, no ducts in attic, R-2 continuous insulation, PV-covered area, 25 lb/ft2 mass roofs, additions <=300 sq ft.
5. **LBNL Heat Island Group field + simulation studies** (Konopacki & Akbari; via ACEEE 1998 proceedings, OSTI LBNL-58265): raising roof SR from 0.1-0.2 to 0.6 cut cooling energy >20% in CA/FL field demos; 9 FL homes: avg 7.4 kWh/day (19%) savings, peak demand -0.4 kW (22%); 11-city simulations: net savings $0.05-0.34/m2/yr (1999, at 8c/kWh); Austin retail: black membrane 75.5C (168F) vs white 52.2C (126F) rooftop surface temp; national net potential ~$750M/yr. EPA compendium: peak cooling demand reductions 11-27% residential, 14-38% in case studies.
6. **Argonne/CROCUS WRF modeling, Chicago** (anl.gov): city-scale deployment of cool roofs cut near-surface temp 1.5C and AC energy consumption 16.6% — best of cool/green/solar roofs, most cost-effective.
7. **Heating-penalty rebuttal — Hosseini & Akbari, Energy and Buildings (Concordia)** (coolrooftoolkit.org PDF; phys.org; Concordia news): DOE-2.1E simulations of office/retail in Anchorage, Milwaukee, Montreal, Toronto: cool roofs saved money in ALL four cold climates; winter penalty at most ~30% of summer savings (Akbari: "the heating benefits of a dark roof in winter are negligible — days shorter, skies cloudier, sun angle low, sometimes snow-covered"); snow cover shrinks penalty further (Anchorage retail penalty fell from 2.3 to 1.2 GJ/100m2 with snow modeled).
8. **ML surrogate for roof absorptance — MDPI Buildings 2026** (mdpi.com/2075-5309/16/6/1245): bagged-tree ML surrogates trained on 1.45M hourly EnergyPlus observations reproduce indoor temperature fields across orientation x roof-solar-absorptance design space with high fidelity; SHAP confirms roof absorptance as a meaningful predictor. Enables rapid parametric roof optimization vs hours per EnergyPlus run.

## Original contribution (the math nobody ran)

**Payback sketch for a 2,000 sq ft roof in a hot climate:**
- Inputs: LBNL 11-city net savings up to $0.34/m2 of roof/yr (1999 dollars at $0.08/kWh). 2,000 sq ft = 185.8 m2. 185.8 x 0.34 = ~$63/yr in 1999 dollars.
- Assumption: scale by electricity price then (~$0.08) vs now (~$0.17/kWh EIA residential avg) => ~2.1x => ~$130/yr.
- Assumption: cool-pigment shingles at reroof carry little/no incremental cost (EPA compendium: cool tile alternatives "at little or no incremental cost"; incremental cost only when albedo is raised outside scheduled maintenance).
- Result: payback measured in single-digit years, possibly under 2 years in hot climates with ducts in the attic (FL field data showed the biggest savings where ducts sit in hot attics: up to 43% daily cooling reduction in one home).
- Cross-check: 9-home FL study avg 7.4 kWh/day x ~180 cooling days = ~1,330 kWh/yr ~ $226/yr at $0.17/kWh. Same order of magnitude. Stated as a range, not a promise.

**The code-bans-black-shingle finding:** cross-referencing Title 24's aged-SR >= 0.20 threshold against Cool California's product table (dark shingles 0.05-0.15) shows conventional dark shingles cannot comply on CA reroofs >50% — the code quietly eliminated them, with exceptions. Nobody in the roofing aisle knows this.

## Counterargument (full strength)

- The heating penalty is real, just smaller than feared; in heating-dominant climates with excellent insulation and no summer cooling, the net benefit shrinks toward zero (LBNL's own 11-city runs showed Philadelphia near break-even at -$0.02/m2).
- Soiling is real: that's exactly why codes specify AGED ratings, and why the CRRC weathers samples 3 years. A roof's day-one reflectance is a brochure number; the aged number is the roof.
- Savings concentrate in poorly insulated homes with ducts in the attic (ACEEE: "inversely correlated with ceiling insulation"); a well-insulated new build with ducts in conditioned space gains far less.
- Cool does not mean white: cool pigments deliver 0.40-0.70 SR in dark colors, so aesthetics need not suffer — but the premium dark "cool" shingle costs more than basic 3-tab.
- Reflective roofs can cause glare/neighbor complaints; some HOAs restrict white roofs.

## What this analysis did NOT prove

- The payback sketch scales a 1999 LBNL simulation figure by today's electricity prices; no current published study gives residential $/m2 net savings at 2026 rates. Treat as an order-of-magnitude estimate.
- No independent audit verifies that roofers actually pull CRRC labels on CA reroofs; enforcement data was not available.
- The ML surrogate paper models naturally ventilated dwellings and comfort degree-hours, not US code-compliant AC homes; the "AI picks your roof" framing is research-stage, not a product you can buy.
- CO2 figure (1,000 sq ft cool roof ~0.5 ton CO2/yr avoided) is LBNL's via secondary reporting (Mother Earth News), not the primary paper.

## Actionable takeaways (for the article)

1. Reroofing in CA: ask the roofer for the CRRC label and the AGED solar reflectance (>= 0.20 steep-slope). If they can't produce it, the product may not comply.
2. Anywhere hot: at reroof time (the only time it's cheap), pick a cool-pigment shingle or light metal; the incremental cost is near zero when the roof is coming off anyway.
3. Want dark? Cool pigments exist (0.40-0.70 SR in dark colors) — specify them by name, not just color.
4. Biggest winners: older homes, thin attic insulation, ducts baking in the attic.
5. Check the CRRC Rated Products Directory yourself (coolroofs.org) — free, filterable by product type/color/minimum values.
