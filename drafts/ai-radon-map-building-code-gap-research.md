# Research: AI Radon Mapping vs. EPA County-Level Building Code Gap

## Core Angle
The EPA radon zone map — the map most building codes reference — was drawn in 1993 at county level using limited data. It has never been updated. Meanwhile, ML models trained on hundreds of thousands of actual radon test results can now predict indoor radon risk at the ZIP-code or individual building level with R² = 0.96. But building codes in 38 states still don't require radon-resistant new construction (RRNC) at all, and the 12 that do still reference the 1993 county-level map to decide which homes need protection.

The result: homes are being built today in "moderate" or "low" zones that harbor extreme radon outliers the 1993 map misses. Installing passive RRNC during construction costs $350-$500. Retrofitting after discovery costs $800-$2,500+. The homeowner pays the difference. The AI that could tell them in advance already exists. The building code that would act on it doesn't.

## Kill Test
Does this help someone building or buying a home? **YES** — directly. A homeowner or builder reading this learns: (1) the map their code relies on is 33 years old and county-level, (2) ML models exist that predict radon at building level, (3) passive RRNC costs $350-$500 during construction vs. $800-$2,500 retrofit, (4) only 13 jurisdictions require it.

## Primary Sources

### 1. EPA Radon Zone Map (1993)
- Developed in 1993, county-level classification
- Three zones: Zone 1 (>4 pCi/L), Zone 2 (2-4 pCi/L), Zone 3 (<2 pCi/L)
- Based on limited indoor radon measurement data, geology, aerial radioactivity, soil parameters, foundation types
- EPA explicitly states: "This map should not be used to determine if individual homes need to be tested"
- EPA has NO PLANS to revise the map
- Validation: 22 of 173 counties with >100 tests had less conservative zones than warranted
- Virginia DOH lists "KNOWN INACCURACIES" — entire counties miscategorized (Loudoun County should be high, not moderate)
- Source: EPA.gov, Virginia DOH radiological health page

### 2. ML Radon Prediction Models
- **PINN model (Zeybek, 2026)**: Physics-Informed Neural Network, R² = 0.96, MAE = 52 Bq/m³, 957 structures in Western Turkey. GIRA (Geologically-Informed Radon Assessment) model incorporates geology, faults, building materials, porosity. Identified 15.3% of structures as high-risk (>300 Bq/m³). Published: Applied Radiation and Isotopes, June 2026.
- **Pennsylvania Random Forest (2026)**: 718,111 radon tests analyzed using Random Forest and Quantile Regression Forest. ZIP-code level prediction. Key finding: "regions with moderate average exposure levels could still harbor extreme outliers." Published: Scientific Reports (Springer Nature), 2026.
- **South Korea ELM (Frontiers)**: 1,452 dwellings, 10 geogenic factors, AUROC 0.824. Found ~40% of study area in very high/high-risk zones.

### 3. RRNC Costs
- During new construction (passive): $350-$500 (National Radon Program Services, sosradon.org) — "a 128% to 400% saving" vs. retrofit
- Retrofit (active suction): $800-$2,500 typical, up to $3,500-$5,000 complex (HomeAdvisor, Angi, Family Handyman)
- Annual operating cost (active system): $100-$500 (fan electricity + energy penalty)
- Wisconsin DHS confirms: passive RRNC is 50-70% the cost of retrofit

### 4. State RRNC Requirements (Environmental Law Institute, updated June 2026)
Mandatory RRNC in building codes: NJ, WA, MI, MN, MD, OR, IL, MA, CT, NE, ME, DC (12 + DC = 13 jurisdictions)
- Iowa passed RRNC law in 2026 (will be #14)
- States with optional radon standards (localities can choose): FL, VA, UT
- **38 states have NO mandatory RRNC requirement**

### 5. Health Impact
- EPA: Radon is #1 cause of lung cancer in non-smokers, #2 cause overall
- ~21,000 lung cancer deaths/year attributed to radon (EPA)
- WHO: No known safe threshold — any exposure carries risk
- EPA action level: 4 pCi/L
- Average US indoor radon: ~1.3 pCi/L
- Average Minnesota indoor radon: 4.2 pCi/L
- Iowa: >70% of homes test above EPA action level
- Nebraska: 60% of 90,000 tested homes showed levels suggesting mitigation

### 6. Housing Starts / Market Data
- ~1.5M US housing starts annually
- IRC (International Residential Code) Appendix F addresses radon — but as an APPENDIX, it's OPTIONAL unless a state adopts it
- NAHB has no national position requiring RRNC
- Very few builders voluntarily install RRNC in non-mandate states

## Original Contribution
**The $400 Gap Calculation:**
- 13 jurisdictions mandate RRNC. That leaves ~1.1M+ housing starts/year in states without mandates.
- In EPA Zone 1 counties (~31% of US counties, covering the highest radon potential areas), approximately 30-40% of homes test above 4 pCi/L.
- Conservative estimate: 330,000 homes/year built in Zone 1 areas without RRNC mandates.
- ~30% will eventually test high = ~99,000 homes needing mitigation.
- Cost to add passive RRNC to all 330,000: 330,000 × $425 = $140M.
- Cost to retrofit the 99,000 that test high: 99,000 × $1,500 = $148M.
- But only ~30% of homeowners ever test! So the real math: 330,000 × 30% test = 99,000 tested. 30% test high = 29,700 get retrofit. Cost: $44.6M.
- The other 69,300 families with elevated radon NEVER FIND OUT.
- Universal RRNC would protect all 330,000 for $140M — $425/home. The "savings" from not requiring it: $96M in avoided construction costs. The hidden cost: 69,300 families/year living in elevated radon homes without knowing.

**The Resolution Gap:**
- EPA map: county-level, 3,143 US counties
- ML models: ZIP-code level (41,683 ZCTAs) or building-level
- Resolution improvement: 13× at ZIP level, essentially infinite at building level
- The Pennsylvania study (718K tests) found "moderate average exposure levels could still harbor extreme outliers" — this means the county average is useless for individual homes within that county.

## Strongest Counterargument
The EPA map was never intended for individual home prediction, and radon variability is so extreme (homes across the street from each other can differ 10×) that even ZIP-code ML models can't tell a specific buyer whether their specific home is safe. Only individual testing works. The counterargument to mandating universal RRNC is cost: $400/home × 1.5M starts = $600M/year nationally, and most homes won't have elevated radon. It's insurance, not precision.

**The response:** RRNC is insurance that costs $400 and prevents a $1,500-$5,000 problem. Car insurance costs more. And unlike car insurance, RRNC also works when the homeowner never discovers the problem — which is most of the time, since testing rates are ~30%.

## Journalist
Catherine "Code" Chen — Policy & Regulation beat. This is fundamentally a building code story: the 1993 map, the IRC Appendix F adoption gap, the 38 states without mandates, and the ML technology that could inform better code.

## Headline Concepts
- "The Map Your Builder Used to Skip Radon Protection Was Drawn in 1993. An AI Trained on 718,000 Homes Found the Danger It Missed."
- "Your Building Code's Radon Map Is 33 Years Old. The AI That Replaced It Costs Less Than a Slab Crack."
