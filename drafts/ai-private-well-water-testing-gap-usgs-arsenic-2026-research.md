# Research: AI Arsenic Maps and the 43 Million Untested Wells

Slug: `ai-private-well-water-testing-gap-usgs-arsenic-2026`
Journalist: Priya Greenwood
Date: 2026-10-08

## Angle
Forty-three million Americans drink water from private wells that no federal law requires anyone to test. The USGS has machine-learning models that predict arsenic exceedance probabilities for every private well in the country, and New Jersey has run a 20-year natural experiment proving that testing mandates find contamination (15.7% of tested wells exceeded a primary standard). The gap: in 49 states, you can buy a house, drink from its well for decades, and never once be required to know what's in the water. The AI maps are a free pre-offer screen nobody uses.

## Kill test
Helps someone building or buying a home: YES. A well-water test contingency at purchase ($150-400) vs a $5,000-15,000 treatment system discovered after closing, or years of unknowing exposure to arsenic/nitrate. The article gives the exact test to order, the federal-vs-state rule map, and the free USGS map to check before the offer.

## Primary sources

### 1. USGS, "The chemical quality of self-supplied domestic well water in the United States" (retrospective of national well sampling)
URL: https://www.usgs.gov/publications/chemical-quality-self-supplied-domestic-well-water-united-states
- Arsenic exceeded the 10 ug/L MCL in ~11% of 7,580 wells evaluated; nitrate exceeded 10 mg/L in ~8% of 3,465 wells; uranium-238 ~4%; radon-222 exceeded 300 pCi/L in ~75% of wells.
- Organic contaminants rarely exceeded MCLs (<1%); atrazine detected in 24% of wells evaluated (most frequent organic).

### 2. Lombard et al. 2021, "Machine learning models of arsenic in private wells throughout the conterminous United States" (Environmental Science & Technology, v. 55, no. 8)
URL: https://pubs.usgs.gov/publication/70219045
- Boosted regression trees + random forest classify private wells into arsenic categories; conterminous-US exceedance probability maps published as open data rasters.
- BRT model for the 10 ug/L threshold: 91.2% overall accuracy, 33.9% sensitivity, 98.2% specificity on test data. Key predictors: average annual precipitation and soil geochemistry.
- Built with public-health researchers for exposure assessment; standard applies only to public supply, not private wells.

### 3. Gleason et al. 2024, "Twenty years of private well testing in New Jersey" (Water Policy)
URL: https://www.researchgate.net/publication/378792409_Twenty_years_of_private_well_testing_in_New_Jersey_a_review_of_the_United_States's_most_comprehensive_well_water_testing_regulation
- NJ Private Well Testing Act (2002): testing required at real estate transfer (buyer or seller), landlords every 5 years. ~134,000 wells tested over 20 years (~34% of NJ private wells).
- 15.7% of tested wells exceeded at least one primary drinking water standard (historically gross alpha radioactivity and arsenic; PFAS added 2022, >12% of wells since exceeded for at least one PFAS).
- Treatment is NOT required by the law — it is a consumer-information law. NJ DEP fact sheets put test cost burden on transaction parties.

### 4. EPA, private wells guidance
URL: https://www.epa.gov/sites/default/files/2018-02/documents/epa-ogwdw-private-wells-v4.pdf
- Private wells "are not regulated by EPA or required to follow EPA's standards." EPA estimates >13 million households rely on private wells.
- EPA recommends annual testing for total coliform bacteria, nitrates, total dissolved solids, and pH; more frequent testing with infants, elderly, or pregnant residents in the home.

### 5. Lade 2024 (Macalester College, Iowa well-owner survey) via unsustainablemagazine.com
URL: https://www.unsustainablemagazine.com/private-wells-unregulated-testing/
- Only 9% of surveyed Iowa well-owning households had tested their water in the past year.
- 40% drank from their wells, had not tested in the past year, and neither filtered the water nor used an alternate source. (Iowa sample, not a national rate.)

### 6. NJ Private Well Testing Act statutory text (N.J.S.A. 58:12A-26 et seq.)
URL: https://staging.freeforms.com/wp-content/uploads/2019/08/New-Jersey-Legislature-Private-Well-Testing-Act.pdf
- Every contract of sale for property on a private well must include testing as a condition; closing cannot occur unless buyer and seller have both received and reviewed the results.

## Original contribution
1. **The 49-state gap (novel framing):** NJ's law makes the test a condition of closing in writing. Everywhere else, the test is optional, and the Iowa data shows what optional produces: 9% annual testing. The regulatory architecture treats well water like a home improvement choice, not a health input.
2. **Expected-value math for buyers:** Full NJ-style panel test $150-400 at a certified lab. Treatment systems (arsenic adsorption, nitrate RO, radon aeration): $5,000-15,000 installed. USGS national data: ~1 in 5 private wells exceeds a health benchmark for at least one contaminant. A buyer who skips the test accepts a ~20% chance of inheriting a five-figure problem on day one. Break-even probability is trivially small.
3. **ML maps as a free pre-offer screen:** The Lombard/USGS arsenic probability rasters are public and address-free (1 km-scale). A buyer can check the arsenic exceedance probability for the parcel before paying for a lab test. Honest limit: 33.9% sensitivity means the model misses most exceedances — it is a screening tool, not a clearance certificate. The asymmetry (98.2% specificity: good at saying "low risk") is the correct way to use it.
4. **The sensitivity paradox:** The best public model is 91% "accurate" but catches only a third of exceedances. Reporting both numbers is the honest way to frame AI water prediction — accuracy without sensitivity is a comfort blanket.

## Strongest counterargument
- Testing finds problems you then own: a positive result can kill a deal, delay closing, or become a disclosure obligation. Some buyers rationally prefer not to know, and NJ's law treats information, not remediation, as the goal.
- Treatment is usually solvable: most exceedances have off-the-shelf fixes, and the 20% exceedance figure bundles mild and severe cases. A $400 test that finds 11 ug/L arsenic (MCL 10) is not the same crisis as 200 ug/L.
- NJ's 20-year record is also a cautionary tale: 134,000 tests is only ~34% of the state's wells after two decades of mandate. Mandates close part of the gap, not all of it.
- Models are not measurements: well-to-well variation over tens of meters defeats 1 km models; the map can neither condemn nor clear a specific well.

## Limitations
- USGS exceedance percentages come from compiled sampling programs, not a randomized national well survey; local geology dominates, so national averages mislead locally.
- NJ's 15.7% exceedance rate reflects NJ geology (radium belt, arsenic); it is not a national number.
- The Iowa 9%/40% figures are one state's survey sample, not a national testing rate.
- Treatment cost range is typical-market, not quoted; PFAS treatment is the expensive tail.
- Composite opening anecdote will be disclosed as illustrative.

## Actionable takeaways (required)
- Buying a home with a well: write a NJ-style test contingency into your offer (seller or buyer orders a certified-lab panel: coliform, nitrate, arsenic, lead, PFAS, radon in water, VOCs; $150-400). Do not rely on the seller's "we've drunk it for years."
- Before the offer: check the USGS arsenic probability maps for the address as a free screen. High probability = order the full metals panel, not just bacteria/nitrate.
- Owning a well: test annually for bacteria + nitrate (CDC/EPA guidance); full panel every 3-5 years. Keep a log; treatment systems need maintenance, not just installation.
- If selling: a clean pre-listing test is a $300 asset that removes the buyer's highest-anxiety unknown and preempts renegotiation.
