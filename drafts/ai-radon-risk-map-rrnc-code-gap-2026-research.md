# Research: AI Radon Risk Maps vs. New-Construction Code Gaps

**Journalist:** Catherine Chen (Policy & Regulation)
**Date:** 2026-10-07
**Kill test:** PASS. A builder can rough in radon-resistant construction for under $1,000 while the foundation is open. A buyer can test any home for $10 and make radon a contract contingency. The AI models make the economics of testing and rough-in cheap; the code and the zone maps make them invisible.

## The story in one line
Machine-learning radon models trained on millions of indoor tests now show the old county radon "zones" mislead buyers, and the tightest, newest homes run the highest concentrations, while the building code's radon appendix stays optional and radon-resistant rough-in costs less than a kitchen faucet.

## Primary sources

### 1. Li et al., PNAS (Jan 2025) — "High-resolution national radon maps based on massive indoor measurements in the United States"
- DOI 10.1073/pnas.2408084121 / PMID 39808659 / PMCID PMC11759897
- 6+ million radon measurements (2001-2021, independent labs) + ~200 geological, meteorological, architectural, and socioeconomic factors fed to a random forest model
- Zip-code-level MAE of 22.6 Bq/m3; US average 53.3 Bq/m3 vs EPA's 48.1 Bq/m3 estimate
- Key finding: **83+ million people live in residences with screening-floor radon above 148 Bq/m3 (the EPA action level), and most of them are in "low-radon" zones**
- Implication for the article: zone-based code requirements miss the majority of exposure. The old EPA Radon Zone maps (1993) are the basis many jurisdictions still use for where to require testing or Appendix F.

### 2. EPA cost-benefit analysis (Dec 2025) — "Analysis of Benefits and Costs of Radon Reduction Strategies"
- https://www.epa.gov/.../analysis-of-benefits-and-costs-of-radon-508.pdf (federal archive copy)
- New-construction strategy (2M homes over 20 years in high-radon areas: build with radon-reduction features, test after construction, install active soil depressurization where over the action level): **avoids an estimated 19,000-48,600 excess lung cancer deaths, NPV $62B-$131B, return of $25.99-$53.80 per dollar spent**
- For existing homes: test 2M homes, mitigate 85% above the action level: avoids 3,100-8,000 deaths, ROI $7.38-$15.27 per dollar
- The new-build strategy is roughly 4x the return of retrofit. This is the article's money line.

### 3. Florida DOH radon/RRNC factsheet (2025) — "Build Without Radon" materials
- https://www.floridahealth.gov/wp-content/uploads/2025/08/RRNC-factsheet.pdf
- **RRNC (radon-resistant new construction) costs less than $1,000 installed during construction; no additional skills or materials required**
- Refers builders to Florida Building Code Appendix B/E (Building) and Appendix F (Residential), the state-level equivalents of IRC Appendix F

### 4. Khan, Goodarzi, Taron, Ronnqvist (WASET) — deep learning radon prediction, Canada and Sweden
- https://publications.waset.org/abstracts/155343/...
- LSTM models on multi-decade housing + radon data; findings: **newer housing stocks contain higher radon levels** (tighter envelopes, deeper insulation, less natural flushing), projected to continue rising in Canada through 2050
- Top contributors: basement porosity, roof insulation depth/R-factor, indoor air dynamics tied to occupant window behavior
- Authors call for building codes to incorporate ventilation factors
- Canada context: Prairies are the world's 2nd most radon-exposed population; Health Canada action level 200 Bq/m3

### 5. Ecosense interactive radon map (launched Feb 19, 2026)
- radonmap.ecosense.io; unifies state health department datasets + CDC Environmental Public Health Tracking Network + anonymized device measurements
- Shows how a consumer-facing layer on public data changes the action pathway: the map converts zone abstractions into per-location indicators and recommendations

### 6. EPA baseline statistics (via Florida DOH, Fine Homebuilding, EPA materials)
- ~1 in 15 US homes above the 4 pCi/L action level; 21,000+ lung cancer deaths/yr attributed to radon; leading cause of lung cancer among non-smokers; 2nd overall
- No known safe level; EPA suggests considering action at 2-4 pCi/L, not just 4
- "Action level is not a safe level" (EPA)

### 7. 35-state disclosure/mandate regime (via PNAS coverage)
- Regulations adopted in 35 states mandate radon measurement and disclosure during property transactions; tens of millions of measurements recorded in recent decades
- Those transaction-mandated measurements are what trained the PNAS model

### 8. Homeowner.ca 9-feature risk scorecard (Sep 2026)
- Practical checklist of home features predicting higher radon: post-2000 build era weighted heaviest (tight envelope), single-storey footprint, large ground-floor area, full basement, exhaust-only ventilation
- Useful as the article's buyer self-assessment hook

## The code gap (the Catherine Chen angle)
- **IRC Appendix F (Radon Control Methods)** specifies passive sub-slab depressurization rough-in: gas-permeable layer, plastic sheeting, sealed penetrations, vent pipe to the roof. It is an *appendix*, adopted only where a jurisdiction chooses to adopt it.
- So the cheapest intervention ($25.99-$53.80 per dollar, per EPA) is opt-in by jurisdiction, while retrofit after sale is 4x less efficient on the dollar and disrupts a finished home.
- Contrast: some jurisdictions require AFCI/GFCI and seismic hold-downs universally; the one with a 4-figure-per-home cost and a six-figure-per-dollar return is a patchwork.

## The AI angle (not tech hype, the mechanism)
- Random forest on 6M measurements + 186-200 features beats the 1993 zone maps; it finds risk in "low" zones because exposure is a building problem, not just a geology problem.
- Limitation to state plainly: community-level prediction (zip-code MAE 22.6 Bq/m3). It does not replace testing an individual home. Zagreb study (Environments 2026) hit test R2 of 0.5654 with near-perfect training fit (R2=0.9999) — overfit risk is real, and both studies flag missing building-physics/ventilation predictors.
- Selection bias: volunteer measurement databases skew toward homes already suspected of high radon (CMU stat lecture notes). EPA/State Residential Radon Surveys (~55,000 homes, random samples) are the cleaner baseline.

## Counterargument
- For builders: <$1,000 per home across a 200-unit subdivision is real money ($200K), and in genuinely low-geology zones the per-home benefit is small. The honest version: rough in the passive pipe everywhere (a few hundred dollars at slab time), activate only where post-construction tests fail. The pipe is the cheap part; the test tells you whether to turn it on.
- For buyers: a $10 charcoal canister test has real false-result modes (wrong floor, wrong season, unclosed house conditions). The PNAS model is a screening tool, not a diagnosis. EPA's position holds: test every home.

## Headline candidates
1. "Your Lot Sits in Radon Zone 3. The 6-Million-Test Map Disagrees."
2. "83 Million Americans Breathe Radon Above the Action Level. Most Live in 'Low-Risk' Zones."
3. "The $800 Pipe That Belongs Under Every Slab (and the Code That Won't Require It)"
