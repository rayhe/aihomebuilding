# Research: AI Lead-Paint Risk Models as a Homebuyer Tool (2026)

## Topic
Homebuyers touring pre-1978 houses face a $5K-$30K hidden liability: lead-based paint. Machine-learning risk models built for public-health departments can be flipped around as a buyer's triage tool — two public data points (build year + visible paint condition) predict risk at 75% accuracy before a $339 XRF inspection.

## Journalist
Frank "The Foreman" DeLuca — project management & operations. Renovation budgeting, RRP compliance, contractor economics.

## Kill test
Passes. A buyer deciding whether to waive contingencies on a 1948 colonial gets a concrete expected-value calculation: inspection cost vs. expected remediation exposure by build-year cohort. A renovator gets the RRP rule reminder that AI doesn't cover: EPA requires lead-safe work practices on pre-1978 homes, and disturbing paint without them creates the liability.

## Primary sources (6)

1. **HUD American Healthy Homes Survey II** (via EPA FAQ, updated Jan 21, 2026): 34.6 million US homes (29.4% of all housing units) contain lead-based paint applied before the 1978 residential ban. https://www.epa.gov/lead/i-thought-lead-based-paint-had-been-phased-out-how-many-homes-still-contain-lead-based-paint

2. **EPA Report on the National Survey of Lead-Based Paint in Housing (r95-003)**: 76% of units built 1960-1979 have lead-contaminated paint; 90% of homes built before 1960; 83% of all pre-1980 private housing has LBP somewhere on the building. Over 50% of pre-1940 homes exceed HUD dust/soil guidelines. http://www.epa.gov/sites/default/files/documents/r95-003.pdf

3. **Potash et al. / UChicago DSSG + Chicago Department of Public Health** (KDD paper): random-forest model trained on two decades of blood lead tests, home lead inspections, property assessments, census data to predict a child's risk of lead poisoning BEFORE it happens. CDPH described it as "pioneering in the use of machine learning and predictive analytics in public health." Open source at https://github.com/Chicago/lead-model/raw/refs/heads/master/kdd.pdf

4. **Abbasi, Gazze, Pals (2022)** — "Policy: Predicting Undetected Lead Exposure in Illinois Using Machine Learning": random-forest classifier on 2010-2016 test records + birth records + housing data predicts BLL >5 ug/dL. Estimated 10,613 untested children had BLL>=5 in addition to 18,115 detected cases. https://wrap.warwick.ac.uk/id/eprint/163386/1/WRAP-hidden-hazards-screening-policy-predicting-undetected-lead-exposure-Illinois-using-machine-learning-Gazze-2022.pdf

5. **Dietrich et al. (GeoHealth, via Eos/phys.org, 2022)**: crowdsourced DustSafe data, logistic regression model. Two variables — house age and interior peeling paint — predict high vs. low lead dust at 75% accuracy. Built a mobile household lead screening app. http://eos.org/research-spotlights/a-simple-model-predicts-household-lead-exposure-risk

6. **HUD LHHTS / grant program data (via reginfo.gov)**: lead hazard control costs among grantees range $500-$15,000 per unit, median ~$5,960 (paint stabilization, enclosure, clearance). https://www.reginfo.gov/public/do/DownloadDocument?objectID=143539401

## Cost data (buyer math)
- XRF lead inspection: $240-$439, avg $339 (HomeAdvisor 2025). XRF per-room: $75-$150. Full risk assessment: $450-$900. DIY swab kits: ~$25, screening only.
- Lead abatement/remediation: $5,960 median grant cost; market-rate full abatement typically $10K-$30K for a single-family home (HUD grantee range $500-$15K reflects interim controls + abatement mix).
- Federal law: seller must disclose known lead paint; buyer gets a 10-day inspection window by default.

## Novel contribution (original analysis)
Expected-value triage calculation nobody published for buyers: using EPA's prevalence by build-year cohort, compute the expected lead-remediation exposure of a pre-1978 purchase and compare against the $339 XRF inspection cost. Rough math: pre-1960 home has ~90% chance of containing LBP; interim-control-level remediation median ~$6K; so expected exposure ~0.9 x $6K ~= $5,400 for the common case, versus $339 to know. The inspection's expected value is ~16:1. For post-1960 pre-1978: ~0.76 x $6K ~= $4,560, still ~13:1. Inspection is the cheapest insurance in the deal, and it is the one contingency buyers waive first in hot markets.

Second original angle: the Dietrich two-variable result is a buyer hack. At an open house you can answer both variables yourself (build year from the listing, peeling paint with your eyes). The model says that pair alone hits 75% accuracy. No app needed; no inspector needed to get a first-pass answer.

## Counterargument (full strength)
ML models predict risk, not presence. A high risk score is not a positive XRF reading, and a low score is not clearance. XRF machines cost thousands and require licensed operators precisely because colorimetric swabs and visual guesses have false-negative rates that matter when the exposure route is a toddler. Over-relying on an app's green checkmark could cause a buyer to skip the $339 inspection that would have found the one window trough that matters. Also: encapsulation (paint over) is legal and cheap but not permanent, and disturbing it during a later renovation re-creates the hazard the model said was gone.

## Limitations
- EPA r95-003 prevalence numbers date from the 1989-90 national survey; housing stock has turned over, but AHHS II (2026) confirms 34.6M homes still carry LBP — prevalence by cohort may have shifted and no newer cohort breakdown exists.
- Abatement cost figures are HUD-grantee costs (low-income programs), not market rates; market-rate full abatement runs higher.
- The 16:1 / 13:1 expected-value ratios assume interim-control-level costs; full abatement skews the math even more favorable to inspection.
- No verification that Chicago CDPH's risk scores are available to private buyers; the buyer math uses the public Dietrich model, not the proprietary one.

## Headline candidates
- "Your 1948 Colonial Has a 90% Chance of Lead Paint. The $339 Inspection Is the Cheapest Money in the Deal."
- "Two Things Tell You If a House Has Lead Paint. An AI Paper Proved It. Bring Your Eyes to the Open House."
