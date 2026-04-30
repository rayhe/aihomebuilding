# Research: The Energy Model Realization Gap in Residential Retrofits

## Angle
$4.3 billion in IRA HOMES rebates require energy modeling to qualify for rebate tiers. But residential energy models have a well-documented "realization gap" — actual savings typically run 61% of predictions without calibration. AI-powered calibration tools (Snugg Pro, first DOE-approved platform) can push realization rates to 91%, but most contractors don't use them. The gap isn't academic: it determines rebate eligibility AND whether homeowners see the savings they were promised.

## Journalist
Priya Greenwood — sustainability, connects energy data to real utility bills

## Kill Test
Does this help someone building or buying a home? YES. If you're planning a retrofit to qualify for HOMES rebates, the accuracy of your energy model directly determines:
1. Which rebate tier you qualify for ($2K vs $8K)
2. Whether you actually see the promised savings on your bills
3. Whether the contractor's recommendations are worth the investment

## Primary Sources

### 1. NYSERDA Home Performance Realization Rate Study (PSD Consulting)
- Median realization rate WITHOUT calibration: **61%**
- Median realization rate WITH ANSI/BPI-2400 calibration: **91%**
- Key finding: difference was largely due to over-prediction of BASELINE energy use
- The percent savings predicted by models was very close to actual percent savings
- Source: Performance Systems Development study for NYSERDA
- Cited by ACEEE: https://www.aceee.org/blog/2015/10/lower-savings-predicted-try

### 2. Annual Reviews Systematic Review (2021)
- 39 evaluations of 23 residential retrofit programs
- 140,977 retrofitted households
- Mean reduction in measured electricity/fuel consumption: **7.2%**
- No programs achieved "deep energy savings" (50%+)
- Savings decreased as study rigor increased
- Most promising retrofits: insulation, programmable thermostats
- Least promising: storm windows and doors
- Programs with high savings served low-income, fuel-heated households
- Source: Annual Review of Resource Economics, DOI: 10.1146/annurev-resource-111920-124353

### 3. IRA HOMES Rebate Program (Section 50121)
- Total funding: $4.3 billion (available through Sept 2031)
- Two pathways: modeled energy savings and measured energy savings
- **Modeled pathway tiers:**
  - 20-35% savings: $2,000 (or $4,000 LMI)
  - >35% savings: $4,000 (or $8,000 LMI)
- Must be calibrated to historical usage per BPI-2400
- **Measured pathway:** 15%+ savings, uses open-source M&V software
- Source: building-performance.org/ira/, IRA Section 50121

### 4. Snugg Pro (Franklin Energy) — First DOE-Approved Software
- First platform approved by DOE for IRA HOMES modeled pathway (single-family)
- BPI-2400 compliant calibration
- Partnership with Pearl Certification for combined audit + certification
- Streamlines audit → installation pipeline
- Source: franklinenergy.com press releases

### 5. EPA Energy Star Methodology
- Air sealing + insulation = avg 15% heating/cooling savings (11% total)
- Based on Beacon Residential™ modeling + 20yr field experience
- Source: energystar.gov/saveathome

### 6. SSRN Paper: "Unpacking the Energy Performance Gap" (Sept 2025)
- Household variation in actual vs. theoretical heat demand
- Energy-efficient homes still show significant performance gaps
- Source: SSRN abstract_id=5459078

### 7. ACEEE: "Can AI Get Us to Net-Zero Buildings?" (Nov 2024)
- AI potential for building decarbonization
- Source: aceee.org

## Original Contribution — Dollar Impact Calculation
**The Realization Gap Tax on Homeowners:**

Typical US household energy bill: ~$2,400/year (EIA RECS 2020)
A contractor models a retrofit at 25% savings = $600/year expected
At 61% realization (no calibration): actual savings = $366/year
Annual gap per home: $234/year
10-year gap: $2,340

With BPI-2400 calibration (91% realization): actual savings = $546/year
Gap narrows to $54/year, $540 over 10 years

**The rebate tier problem:**
If your model says 22% savings (qualifying for $2,000 rebate), but actual is only 61% of that = 13.4% actual — you don't even hit the 15% measured pathway threshold. The modeled pathway lets you claim the rebate based on the model, but your bills won't match.

If a contractor models 35%+ savings to get you the $4,000 tier, but realization is 61% = 21.3% actual — you're in the right ballpark for the lower tier but paid for work promising the upper tier.

**Scale calculation:**
DOE estimates 142 million US homes, 20% of US carbon emissions
If even 2% of homes (2.84 million) do HOMES-eligible retrofits:
- Uncalibrated gap: $234/yr × 2.84M = $664M/year in phantom savings
- Over the 10-year IRA window: $6.6 billion in promised savings that never materialize

## Strongest Counterargument
The modeled pathway explicitly requires BPI-2400 calibration, which significantly improves accuracy. DOE built this requirement in specifically because of the realization gap research. So the worst-case 61% scenario shouldn't apply to HOMES projects — the program already mandates the fix. The question is whether contractors actually do it well, and whether the software tools make it easy enough to be done correctly at scale.

## Limitations
- NYSERDA realization rate study is from one state's program; may not generalize
- Annual Reviews systematic review includes programs from 1984-2021 — technology and building stock have changed
- No large-scale data yet on AI-calibrated model accuracy vs. traditional calibration
- HOMES program is still rolling out; no post-retrofit measured data from IRA-funded projects exists yet
- Trump administration policy shifts may affect program availability (BPA notes this)
- Average household energy costs vary significantly by region ($1,200 in mild climates to $4,000+ in extreme ones)
