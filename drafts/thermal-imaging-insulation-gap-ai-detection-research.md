# Research: Thermal Imaging + AI for Residential Insulation Gap Detection

## Core Angle
89% of U.S. homes are under-insulated. AI-powered thermal imaging can detect insulation defects invisible to the naked eye — thermal bridges, missing cavities, moisture intrusion — at 89% precision. A consumer thermal camera costs $300. A pro-grade one costs $1,500-3,000. Standard home inspections don't include thermal scanning. The gap between what's knowable and what's checked is costing homeowners billions in wasted energy.

## Primary Sources

### 1. NAIMA/ICF Study: 89% of Homes Under-Insulated (2024)
- Source: Insulation Institute / NAIMA, conducted by ICF Consulting
- Data: NREL 2024 ResStock database, sample of 1 million U.S. homes
- Baseline: 2012 IECC (widely adopted, achievable envelope efficiency levels)
- Finding: **89% of U.S. single-family homes are under-insulated**
- Definition: Any home meeting energy code less stringent than 2012 IECC
- Context: 22 of 50 states have adopted 2012 IECC equivalent or better
- Tax credit: $1,200/year 25C tax credit through 2032 (Inflation Reduction Act)
- URL: insulationinstitute.org

### 2. EPA / Energy Star: Energy Savings from Sealing and Insulating
- Source: EPA, Beacon Residential energy model (DOE-2 hourly simulation)
- National average: **11% total utility bill savings** from air-sealing + insulation
- Heating and cooling only: **15% savings** (national average)
- Northern CZ 8: 16% total house / 18% heating & cooling
- Southern CZ 2: 6% total house / 9% heating & cooling
- Average US energy bill ~$2,000/year → $220/year savings on average
- Insulation has **3x greater impact** on energy/comfort than windows or doors (NAIMA)

### 3. Building Science Corp. (BSC) Thermal Metric Summary Report (2015)
- Sponsor: NAIMA + consortium of 6 insulation manufacturers
- Finding: All insulation performs equally well when properly installed and air-sealed
- Key: **Thermal bridging through framing = ~15% decrease in thermal performance** regardless of insulation type
- "R-value is R-value" when properly installed
- No insulation is sufficient without air sealing
- The "anomalies and defects" are NOT captured by standard R-value metric

### 4. RESNET HERS Insulation Grading System
- Grade I: Top quality, 100% R-value credit, all cavities filled, 6-sided encapsulation
- Grade II: Minor gaps, 98% R-value credit, <2% missing
- Grade III: Significant gaps/compression, 95% R-value credit, 2-5% missing
- >5% missing: Must model uninsulated area separately
- **DOE field survey: Only about 50% of new homes achieve Grade I quality** (cited by NAIMA/Insulation Institute webinar)
- For a $2,600 batt insulation job, Grade III = $130 wasted immediately

### 5. Neural Network Thermal Bridge Detection (MDPI Study)
- Method: GMM clustering + DBSCAN + ANN classification from thermal images
- Feature extraction: morphological characteristics of linear thermal bridges
- Results: **89.29% precision, 87.29% recall, 87.63% F-score**
- Contribution: Automated objectivity replacing subjective human judgment
- Field validated on buildings with actual thermal bridges
- Applications: routine inspections, mobile platforms (drones)

### 6. Building Envelope Thermal Anomaly Detection (Umeå University / arxiv)
- Method: Color-to-thermal AI prediction using GANs
- Label-free anomaly detection — no training labels needed
- Can learn thermal bridges from training on different outdoor temperatures
- Applicable to routine inspections and mobile drone platforms
- Key innovation: Predicts expected thermal pattern from regular photo, flags mismatches

### 7. ASHI (American Society of Home Inspectors) — Thermal Imaging as Standard
- Source: homeinspector.org (published June 2025)
- Equipment cost drop: **$5,000-10,000 a decade ago → $1,500-3,000 now**
- Consumer models even cheaper: $300-500 (FLIR ONE, Seek Thermal)
- Missing insulation creates "distinct thermal signature — cooler in winter, warmer in summer"
- Most inspectors offer thermal as **$150 upsell**, not included standard
- Key quote: "There's a difference between 'add thermal imaging for $150 extra' and 'thermal imaging is included in your broad inspection'"
- Thermal imaging reveals: leaky ducts, unbalanced HVAC, insulation voids, moisture intrusion, electrical hot spots

### 8. ServiceTitan 2026 State of the Trades Report
- Survey: 1,000 residential contractors
- **74% view AI as efficiency engine**
- **Only 25% currently using AI**
- 48% of early adopters report increased productivity
- 45% report time savings
- Gap between interest (74%) and adoption (25%)

## Homeowner Impact Math
- Average US household energy: ~$2,000/year (EIA)
- Heating/cooling: ~43% = $860/year
- 15% savings from proper insulation/sealing = **$129/year** (conservative)
- Over 30-year mortgage: ~$3,870 (not inflation-adjusted)
- In northern climates (CZ 5-8): $200-400/year savings realistic
- Consumer thermal camera: $300 (FLIR ONE Gen 3)
- Pro thermal scan service: $150-400 (where available)
- Payback: 1-2 years even at national average

## Kill Test
**Does this help someone building or buying a home?**
YES. If you're buying: demand a thermal scan before closing. The $150-300 extra catches insulation voids that cost $200+/year forever. If you're building: verify your insulation contractor's work with thermal imaging before drywall closes the walls. If you own: a $300 consumer camera can find the biggest energy leaks in 15 minutes on a cold morning.

## Journalist
**Priya Greenwood** — sustainability, green building, connects energy data to utility bills, evidence-based urgency. Last article: #554 (HVAC oversizing). Perfect fit.

## Headline Options
1. "Eighty-Nine Percent of American Homes Are Under-Insulated. The Tool That Catches It Costs $300 and Takes Twelve Minutes."
2. "Your Inspector Checked Everything in Your House Except the Thing Costing You $2,200 a Year."
3. "A Neural Network Can See Your Missing Insulation From a Photograph. Your Home Inspector Still Uses His Eyes."
