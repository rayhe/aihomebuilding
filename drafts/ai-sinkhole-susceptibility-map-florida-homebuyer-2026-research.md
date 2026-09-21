# Research: AI Sinkhole Susceptibility Maps for Florida Homebuyers (2026)

**Slug:** `ai-sinkhole-susceptibility-map-florida-homebuyer-2026`
**Journalist:** Frank DeLuca (foundations, geotech process, cost analysis)
**Article number:** 923

## Kill test
Does this help someone building or buying a home? YES. A Florida homebuyer can pull free ML-generated sinkhole susceptibility maps and the Florida Geological Survey's subsidence incident inventory before making an offer, then budget $1,500-$3,000 for a geotech investigation on high-susceptibility lots. Repair runs $10,000-$15,000; insurance is optional and separately rated in Florida since 2012.

## Primary sources (8)

1. **C5.0 decision tree sinkhole susceptibility, east central Florida** (Techno-Press, 2024): ML model (C5.0 decision tree) trained on 1,113 sinkholes in east central Florida with 12 hydrogeological factors; 83.52% prediction accuracy (AUC). Concludes decision trees are "a promising tool" for regional sinkhole susceptibility mapping. URL: https://renewal.techno-press.org/papers/7780/preview

2. **UCF dissertation, "Probabilistic Spatio-Magnitude Sinkhole Hazard Analysis for East Central Florida"** (Yong Je Kim, UCF, stars.library.ucf.edu): frequency ratio, logistic regression, and ANN models on 7 hydrogeological factors: hydraulic head difference between surficial and upper Floridan aquifers, groundwater recharge rate, soil permeability, overburden thickness, surficial aquifer system thickness, intermediate aquifer system thickness, proximity to karst features. Regional-scale GIS maps of probability of location AND size. URL: https://stars.library.ucf.edu/etd/6878/

3. **USF Sinkhole Conference 2020, ANN hazard assessment for East Central Florida** (Kim, Nam, Zheng): inventory built from Florida Geological Survey Subsidence Incident Reports; Orlando area shows higher probability of LARGER sinkholes than Ocala because thick overburden layers create larger collapses. URL: https://digitalcommons.usf.edu/sinkhole_2020/ProceedingswithProgram/Engineering_Geotechnical/2/

4. **MDPI Applied Sciences 2025, explainable sinkhole susceptibility mapping with SHAP** (Konya Closed Basin): Random Forest achieved 95.5% accuracy, 98.8% AUC; SHAP revealed proximity to fault lines, mean annual precipitation, and bicarbonate concentration as top predictors. Demonstrates XAI for decision-maker trust. URL: https://www.mdpi.com/2076-3417/15/6/3139

5. **Citizens Property Insurance rate history** (citizensfla.com): sinkhole coverage was REMOVED from the base policy in 2012 "because of abusive practices and excessive claims" — remains optional, rated outside the 10% glidepath. Catastrophic Ground Cover Collapse stays in the standard policy free. URL: https://www.citizensfla.com/documents/20702/30144576/Citizens+Rate+Hearing+August+2024.pdf/01578a3f-dceb-ece7-79cb-66b9399fac54?t=1722533281027

6. **Citizens coverage-types brochure**: "Sinkhole Loss coverage — covers structural damage due to ground subsidence. This is distinct from coverage for Catastrophic Ground Cover Collapse... A sinkhole inspection may be required." URL: https://www.citizensfla.com/documents/20702/29369556/Homeowners%20Policies%20Coverage%20Types.pdf/78c6c1de-97db-41c3-84ed-a053b2e24c0f

7. **Florida Statutes section 627.7151 (2025)** — limited sinkhole coverage insurance: authorized insurers MAY issue (not required); Citizens may NOT issue limited sinkhole coverage; policy limits below $50,000 prohibited unless above full replacement cost. URL: https://law.justia.com/codes/florida/title-xxxvii/chapter-627/part-x/section-627-7151/

8. **Repair costs**: Homeyou (Sept 2026): sinkhole repair in Florida averages $10,000-$15,000. Citizens SMRP bid addendum (ITN 18-0033) line items: compaction/slurry grout mobilization $3,000; underpinning $1,476 per 24-ft pin; underpinning mobilization $2,500. URL: https://www.homeyou.com/fl/sinkhole-repair-tallahassee-costs and https://www.citizensfla.com/documents/20702/15124042/Addendum+3.pdf/74582337-45cb-5299-81e8-879285675745

## Key numbers for the article
- 1,113 sinkholes in the east central Florida training inventory (C5.0 study)
- 83.52% AUC for the decision-tree susceptibility model; 98.8% AUC for Random Forest in the SHAP study (different basin)
- 7 hydrogeological factors (UCF): head difference, recharge rate, soil permeability, overburden thickness, SAS thickness, IAS thickness, proximity to karst features
- Orlando > Ocala for large-sinkhole probability (thick overburden = bigger collapses)
- Repair: $10K-$15K typical (Homeyou); grouting mobilization $3K + underpinning $1,476/pin (Citizens SMRP pricing)
- Insurance: sinkhole coverage optional since 2012 in FL base policies; catastrophic ground cover collapse still included free
- Florida sinkhole claim history: "meteoric rise in claims... especially in the Tampa Bay area" led to the 10% cap removal on sinkhole rate glidepath

## Original contribution (required)
Cross-reference the UCF/ANN susceptibility findings with the buyer's decision math: a susceptibility map lookup (free) + FGS subsidence incident report search (free) + geotech SPT borings ($1,500-$3,000) is the pre-offer triage a buyer can run in 48 hours for less than 0.5% of a median Florida home price. Nobody has published the "which lots actually need borings" decision rule from these models in homebuyer terms.

## Angle
Frank DeLuca process voice: the site investigation as a critical path item. The maps exist, the models are free to read, the incident reports are public, and buyers still skip all of it because nobody told them the insurer already priced the risk. Open with a specific collapse, walk through the 7 factors in plain language, give the 48-hour triage checklist, end with the insurance reality (optional coverage, inspection required, $50K minimum limits).
