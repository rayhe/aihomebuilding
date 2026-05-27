# Research: The Retrofit Savings Gap — AI Models vs. Your Utility Bill

**Journalist:** Priya Greenwood (Sustainability & Green Building)
**Slug:** retrofit-savings-gap-ai-models
**Date:** May 26, 2026

## Angle

Your energy model — whether a manual assessment or an AI-powered prediction — promised 20-30% savings on your retrofit. The academic literature, across 140,977 households and multiple randomized controlled trials, says you'll get 4-7%. AI doesn't close this gap; it makes the wrong number faster, with more decimal places.

**Kill test:** If you're about to spend $15K on a retrofit because a model said you'd save $2K/year, you need to know the actual average is probably $400-700.

## Primary Sources

### 1. Annual Reviews Systematic Review (2022)
- **Source:** "A Systematic Review of Energy Efficiency Home Retrofit Evaluation Studies" — Annual Review of Resource Economics
- **Sample:** 39 evaluations of 23 retrofit programs, 1984-2021, 140,977 retrofitted households
- **Key finding:** Mean reduction in measured electricity/fuel consumption: **7.2%**. None achieved deep savings (50%+).
- **Additional finding:** Reported savings DECREASED as study rigor increased. More careful studies found less savings.
- **Most effective:** Insulation and programmable thermostats. **Least effective:** Storm windows and doors.
- **Critical detail:** "Because many households use both fuel and electricity, total household energy savings from the retrofit programs evaluated in our sample are probably smaller" than 7.2%.

### 2. UCLA Study — 11 Million Households (2022)
- **Source:** "Are Residential Energy Efficiency Upgrades Effective?" — Journal of the Association of Environmental and Resource Economists
- **Sample:** 11 million households in Southern California, 2010-2015
- **Key finding:** Overall electricity reduction from upgrades: **4%**
- **Breakdown:** Pool pumps 13%, refrigeration 6%, lighting <1%, **HVAC retrofits <1%**
- **Rebound effects:** Dishwasher, clothes washer, and building envelope upgrades showed rebound effects
- **Critical quote:** "Energy savings are inconsistent with the engineering estimates"

### 3. Fowlie/Greenstone/Wolfram — Michigan WAP RCT (UChicago EPIC)
- **Source:** "Do Energy Efficiency Investments Deliver? Evidence from the Weatherization Assistance Program" — NBER/University of Chicago
- **Design:** Randomized controlled trial — the gold standard
- **Key finding:** Model projections were **2.5x higher than actual savings**
- **Cost analysis:** Upfront costs were twice the actual savings. Annual returns: **-7.8%**
- **Implication:** Even the most rigorous energy models systematically overpredict savings

### 4. Frontiers in Mechanical Engineering — Performance Gap Review (62 buildings)
- **Source:** "A Review of the Energy Performance Gap and Its Underlying Causes in Non-Domestic Buildings"
- **Key finding:** Regulatory energy gap deviates by **+34%** (SD 55%) based on 62 case study buildings
- **Dominant causes:** Specification uncertainty (20-60% impact), occupant behavior (10-80%), poor operational practices (15-80%)
- **Context:** Buildings can use **twice** the theoretical energy performance (Norford et al., 1994; Pegg et al., 2007)

### 5. TU Delft — 1 Million+ Dutch Homes
- **Source:** Paula van den Brom PhD research
- **Key finding:** Some dwellings showed **3-4x differences** between predicted and actual energy consumption
- **Critical insight:** Building characteristics, occupant behavior, and renovation impacts all significantly affect the gap

### 6. ACEEE Calibration Study
- **Source:** "Lower savings than predicted? Try calibration" — ACEEE
- **Key finding:** Realization rates (actual/predicted savings) were only **61%** before calibration
- **After calibration:** Improved to 91% — suggesting the problem is solvable but almost nobody does it

### 7. PNNL — Deep Energy Retrofits, Pacific Northwest
- **Source:** Pacific Northwest National Laboratory technical report
- **Key finding:** Actual vs estimated savings ranged from **75% more** than predicted to **16% less** than predicted
- **Causes of discrepancy:** Occupant behavior, weather inputs, complex home models

### 8. AutoML/AI Energy Modeling (2026)
- **Source:** MDPI — "Benchmarking Automated Machine Learning for Building Energy Performance Prediction"
- **Key finding:** AutoGluon achieves R²=0.993 and RMSE=2.28 kWh/m²
- **The catch:** These models are validated against OTHER models, not against actual utility bills. Training on modeled data perpetuates the same systematic biases.
- SHAP analysis highlights solar heat gain coefficient and U-values as key factors — but notably NOT occupant behavior, which is the dominant real-world factor.

### 9. RMI — Automated Home Energy Estimates (8,000 homes, 27 states)
- **Source:** "An MPG for Homes: Accuracy and Application of Automated Home Energy Estimates" — Rocky Mountain Institute (2018)
- **Key finding:** Algorithm-based estimates showed **20-30% average absolute difference** from on-site HES assessments
- Less than 3% of US single-family homes have had on-site energy assessments

## Novel Calculation

**The Decimal Place Deception:**
- Manual energy model: "You'll save 25% on heating" → Actual: 7.2% (Annual Reviews systematic avg)
- AI energy model: "You'll save 24.7% on heating (R²=0.993)" → Actual: still probably 7-10%

The AI model adds precision (more decimal places) without adding accuracy (getting closer to the real number). A prediction of 24.7% ± 2% that's systematically biased by 15-18 percentage points is LESS useful than a rough estimate of "probably 5-15%" because the false precision discourages the appropriate skepticism.

**Cost of overestimation (original analysis):**
- Average whole-home energy retrofit cost: ~$15,000 (DOE WAP average ~$5,000 for low-income; market rate higher)
- Model-predicted annual savings at 25% of $2,400 average bill: $600/year → 25-year payback
- Actual savings at 7.2%: $173/year → 87-year payback (well beyond the retrofit's useful life)
- The gap: homeowner expects payback in their lifetime. Reality: they'll move or die first.

## Strongest Counterargument

AI models ARE getting better. Calibrated models (ACEEE study) reached 91% realization rates. Deep learning on actual utility billing data — not modeled data — could genuinely close the gap. The problem isn't AI; it's that most AI models are trained on the same flawed engineering assumptions rather than metered data. The first company to build a model trained on 10 million actual pre/post utility bills will produce genuinely useful predictions.

## Limitations to Acknowledge

- The 7.2% figure includes programs from 1984-2021; modern retrofits with better materials may perform better
- Non-domestic building studies (Frontiers review) may overstate the gap for homes
- Deep retrofits (ACEEE: 58-79% reduction possible) CAN deliver big savings — the averages are dragged down by partial upgrades
- Occupant behavior cuts both ways — some people save more than predicted because they're more careful
- Climate zone matters enormously; these are averages across diverse geographies
