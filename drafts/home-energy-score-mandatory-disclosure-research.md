# Research: Mandatory Home Energy Score Disclosure at Point of Sale

## Core Angle
A growing number of US cities now require sellers to obtain and disclose a Home Energy Score before listing a home for sale. AI and ML tools are making energy assessments faster and cheaper. The scores are starting to measurably affect sale prices, mortgage performance, and retrofit rates. This is a policy story with concrete financial implications for anyone buying, selling, or building a home.

**Journalist:** Catherine "Code" Chen (Policy & Regulation)
**Kill test:** If you're buying in Portland, you should check the HES. If you're selling, you should know your score before listing. If you're building, design for a high score because it will affect resale. **PASS.**

## Primary Sources

### 1. Berkeley Lab Study (Aug 2022) — DOE, emp.lbl.gov
- Sample: 26,291 home sales with HES assessments
- Finding: 1-point HES increase → 0.5% sale price increase (mandatory disclosure markets only)
- Finding: $100 decrease in estimated annual energy bills → 0.4% price increase
- Finding: 1-point HES increase → 5.5% reduction in odds of 30-day mortgage delinquency
- Critically: relationship only statistically significant in MANDATORY disclosure markets. Voluntary programs showed no significant price effect.

### 2. ACEEE White Paper (July 2025)
- Portland homes scored in 2023 were 10× more likely to receive energy efficiency upgrades
- Voluntary programs have low participation rates — inefficient homes rarely get scored voluntarily
- Case studies: Portland OR, Minneapolis MN, Berkeley CA
- Also adopted: Austin TX, Ann Arbor MI, Hillsboro OR, Milwaukie OR, Bend OR (exploring), Eugene OR (exploring)
- Key recommendation: disclose at listing, not at closing (Berkeley amended its law for this reason)

### 3. ENERGY STAR / Freddie Mac
- 2-8% resale premium for rated energy-efficient homes across most markets
- Freddie Mac national study (2013-2017): 2.7% average premium for rated energy-efficient single-family homes
- 3-5% premium for more efficient vs. less efficient among rated homes
- Higher-rated homes have lower mortgage default rates

### 4. DOE Home Energy Score Program (since 2012)
- 1-10 scale, like MPG for homes
- Standardized methodology developed by PNNL, NREL, LBNL
- Assessors trained and certified through DOE partner organizations
- Cost: $150-$300 per assessment
- Oregon ODOE serves as statewide proxy partner for all Oregon cities

### 5. pv magazine / 257 Platform Research (June 2026)
- Homes with solar panels listed → 2% sale premium (~$10,000 on median $557K home)
- Heat pump mentioned in listing → 0.6-1% premium ($2,300-$3,900 on median $399K)
- Only 8.3% of 2025 home listings mentioned energy-efficient assets
- Share of listings mentioning energy efficiency nearly tripled between 2015-2025
- Analyzed 143 million listings nationwide 1995-2025

### 6. Resources for the Future (RFF)
- Energy Star certification: ~2% premium in Research Triangle NC and Portland OR
- Local "green" certifications: 3% premium in Portland, 7-8% in Austin
- Local certs capitalize more than just energy savings (broader environmental attributes)

### 7. Portland Ordinance (Chapter 17.108)
- Must obtain HES from state-licensed assessor before listing
- Must include score in all real estate listings
- Must provide report to all prospective buyers
- Must submit to City Administrator for quality assurance
- 5% of homes re-scored quarterly for QA (Earth Advantage as implementation partner)
- All homes covered regardless of year built, including new construction

### 8. Ann Arbor HERD Ordinance (ORD23-26)
- "Home Energy Rating Disclosure" — requires HES assessment before listing
- Applies to detached single-family and side-by-side townhomes
- Interactive map locator for buyers to search scores by address
- Exemptions: vertically-stacked units, manufactured homes

## AI/Tech Tools for Energy Assessment

### Lamarr.AI (MIT spinout)
- Drone-based thermal imaging + AI analysis
- City of Detroit partnership: inspected 3 municipal buildings, found 460+ problems
- Identified insulation gaps, water leaks; upgrades could reduce HVAC energy 22%
- Thermal anomalies → 45% of construction defects tied to envelope failures

### University of Dayton Research (2021, Energies journal)
- Smart WiFi thermostat data → ML model predicts R-values, furnace efficiency, AC SEER
- R² validation: 0.94 for attic R-value, 0.94 for wall R-value, 0.95 for furnace efficiency, 0.91 for AC SEER
- "Virtual energy audit" using only thermostat data + weather + building geometry
- Potential to automate assessments at near-zero cost

### SOAR Energy SolarScan
- AI + ML + satellite imagery
- Enter address → report in under 5 seconds
- Estimates roof solar potential, monthly bills, efficiency suggestions
- Targeted at both homeowners and solar contractors

### Drone Thermal + Deep Learning (IEEE Access 2025)
- YOLOv4 model identifies heat envelopes from drone thermal images
- Combined indoor/outdoor monitoring for holistic energy assessment
- Scalable, data-driven approach to building energy management

## Original Analysis

### Implicit Energy Penalty Calculation
- Median US home sale price: ~$400,000 (NAR Q1 2026)
- Berkeley Lab: 1 HES point = 0.5% price increase
- On a $400K home: 1 point = $2,000
- A home scoring 3/10 vs 8/10 = $10,000 implicit penalty
- Assessment cost: $150-$300
- ROI of even modest improvements: potentially 10:1 or higher

### Coverage Gap
- ~10 cities/jurisdictions with mandatory programs (almost all in Oregon + a handful elsewhere)
- 89 million owner-occupied homes in the US (Census)
- Less than 1% of US homes are in mandatory disclosure markets
- But the trend is accelerating — Eugene OR exploring, more Oregon cities joining via ODOE proxy

## Strongest Counterargument
1. Assessment precision: Human assessors have inconsistent practices (hence 5% QA re-scoring). A score difference of 1-2 points may be within noise.
2. Regressive burden: Low-income sellers can't afford upgrades; scores may discount their homes without giving them resources to improve.
3. Gaming potential: Cosmetic improvements vs. actual performance. Score reflects asset condition, not operational behavior.
4. Small sample sizes: Price premium data comes from limited markets. Would premiums persist nationwide?
5. "One Big Beautiful Bill" uncertainty: Federal energy efficiency tax credits (25C, 25D) are being modified. The economics of upgrades could shift.

## Limitations
- Berkeley Lab price data from mandatory markets only (Portland, Minneapolis primarily)
- No controlled experiment — hedonic regression controls for observable characteristics but selection effects remain
- AI assessment tools mostly research-stage or commercial, not yet widely deployed for DOE HES
- Long-term price effects unknown — programs are mostly <5 years old
