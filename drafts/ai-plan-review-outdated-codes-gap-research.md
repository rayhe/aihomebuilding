# Research: AI Plan Review + Outdated Building Codes Gap

## Thesis
AI plan review tools check compliance against whatever code a jurisdiction has adopted. If that code is from 2009, the AI will approve plans that are decades behind modern safety and energy standards. AI doesn't make the code better — it makes compliance with inadequate codes faster. This could actually entrench outdated codes by removing friction that might motivate updates.

## Journalist
Catherine "Code" Chen — policy/regulation beat

## Kill Test
Does this help someone building or buying a home? **YES.** Homebuyers in states with weak codes need to know their "code-compliant" home may not meet modern safety standards, even if it passed AI-powered plan review. Actionable: check your state's FEMA rating, consider building beyond minimum code, understand what "compliant" actually means.

## Primary Sources

### 1. FEMA Building Code Adoption Tracking (BCAT) — 2024
- 39 states received FEMA's lowest building code rating
- 19 states scored zero on FEMA's 100-point scale
- Lowest-rated states include disaster-prone states: Louisiana, North Carolina, Pennsylvania
- Only 31% of hazard-prone areas adopted recent code version
- Top 10 states: California, Florida, New Jersey, New York (each scored 99)
- Source: https://www.fema.gov/emergency-managers/risk-management/building-science/bcat/fact-sheets
- Reported by Scientific American, Feb 20, 2024

### 2. FEMA National Preparedness Report 2023
- Failure to adopt new codes is "one of the most significant factors that compounds risk and increases costs from natural hazards"
- Source: https://www.fema.gov/sites/default/files/documents/fema_2023-npr.pdf

### 3. FEMA Building Codes Save Study (2020)
- Thousands of localities had "archaic building codes" exposing people to "a dangerous, costly and unnecessarily high level of risk"
- Source: https://www.fema.gov/sites/default/files/2020-11/fema_building-codes-save_study.pdf

### 4. ICC Code Official Workforce Survey (2014)
- 85% of code professionals over 45
- 80%+ expect to retire within 15 years (by ~2029)
- 30% planned retirement within 5 years (by ~2019)
- Median salary $50,000-$74,999 — far below private sector construction management
- 57% work in departments of 9 or fewer employees
- 52% also do plan review, 48% do inspections, 46% manage department
- Source: ICC/National Institute of Building Sciences survey, 3,850 respondents
- https://www.iccsafe.org/building-safety-journal/press-releases/survey-of-code-professionals-predicts-substantial-retirement-exodus/

### 5. NIBS / Associated Builders and Contractors (2025)
- Construction industry needs 439,000 net new workers in 2025
- Workforce shortage has "risen to the level of a national security issue"
- Source: https://nibs.org/why-the-built-environment-workforce-shortage-is-a-threat-to-national-security/

### 6. NAHB Regulatory Cost Study (2021)
- Regulatory costs = 24% of final new home price ($93,870)
- For every $1,000 added to new home cost, ~2,200 families priced out
- Source: NAHB, reported by HousingWire and Construction Dive

### 7. Archistar / California AI Plan Review (2025)
- Governor Newsom deployed Archistar AI tool free to LA City/County for fire rebuild permits
- Computer vision + ML + automated rulesets check plans against local zoning/building codes
- Early results: permits averaging ~30 days local review time, ~85 days total app-to-issuance
- Nearly 3x faster than pre-fire pace
- Partnership with Steadfast LA, Autodesk, Amazon
- Source: https://www.gov.ca.gov/2025/04/30/governor-newsom-announces-launch-of-new-ai-tool-to-supercharge-the-approval-of-building-permits-and-speed-recovery-from-los-angeles-fires/

### 8. City of Surrey, BC (Archistar, March 2026)
- 80% of residential permit applications had significant zoning deficiencies
- Average 1.6 resubmissions per application
- AI PreCheck launched for R3 single-family homes as of March 10, 2026
- "It's like 'spell-check' for zoning" — Jerome Thibaudeau
- Source: https://www.archistar.ai/blog/city-of-surrey/

### 9. UCLA Housing Supply Study
- Cutting approval times by 25% could boost housing production by 33%
- Source: https://www.anderson.ucla.edu/sites/default/files/document/2024-06/2024-10wp-sg-ec.pdf

### 10. BIAW Washington State Permit Delay Cost Study
- Statewide average permit delay: 6.5 months
- Total holding cost from delay: $31,375 per home
- Only 24% of families can afford a newly built home
- Each $1,000 added → 2,200 families priced out
- Source: https://housingstudies.biaw.com/reports/cost-of-permitting-delays-in-select-jurisdictions-in-washington-state

### 11. DOE Building Energy Codes Status
- Building codes update every 3 years (ICC cycle)
- States take 2-6+ years to adopt new editions
- DOE offering $400M in grants for energy code updates
- Households save avg $162/year in homes built to new energy codes
- Source: https://www.energycodes.gov/status

## Novel Calculation / Original Contribution

### The "compliance speed vs. code quality" gap:

If AI tools reduce plan review from weeks to hours, but the underlying code is from 2009:
- 2009 IRC has no electric-ready provisions
- 2009 IECC energy requirements ~30% less stringent than 2021 IECC
- No modern wildfire provisions (added in 2021 IWUIC/IRC)
- No resilience provisions for increased wind speeds from updated climate data
- Weaker seismic provisions in some categories

### Cross-reference calculation:
- ~1.4M total residential building permits issued annually in US (Census Bureau)
- Top permit states include Texas (no statewide mandatory code — local option), North Carolina (scored 0), Pennsylvania (scored 0), Georgia, Tennessee, Arizona
- If ~40% of permits are in states with FEMA's lowest rating: ~560,000 homes/year built to potentially outdated codes
- At NAHB's $93,870 regulatory cost figure, the $162/year energy savings from modern codes × 30yr mortgage = $4,860 lifetime savings per home — for homes that DO adopt new codes
- For homes in weak-code states: missed savings aggregate to ~$2.7B/year in lifetime energy waste across those 560K homes

### The paradox:
AI plan review tools make permitting faster (good) but don't improve the underlying code (bad). Deploying AI plan review in a zero-FEMA-score state accelerates construction to inadequate standards. Speed without quality is just faster failure.

## Skepticism / Counterargument
- Stronger codes increase upfront construction costs, which prices out more homebuyers
- NAHB has historically opposed more stringent code requirements for this reason
- Local code adoption reflects local democratic choice — some states legitimately prefer lower regulatory burden
- AI tools *could* flag areas where local codes diverge from latest model codes (a future feature, not current reality)
- Some states without statewide mandatory codes still have strong local adoption in major metros

## Limitations
- Cannot verify exact permit counts per FEMA rating category without state-by-state crosswalk
- FEMA's BCAT methodology is based on "resistant jurisdictions" which may not perfectly map to building code editions
- The 2014 ICC workforce survey is 12 years old — conditions may have shifted (though anecdotal evidence suggests the crisis has worsened)
- AI tools are evolving rapidly — some may already flag code edition age or model code divergences
- The $93,870 NAHB figure is from 2021 and includes all regulatory costs, not just code compliance
