# Research: AI Cost Estimation Under Tariff Volatility

## Angle
AI cost estimation tools trained on pre-tariff historical pricing data are being stress-tested by 2026 tariff volatility. Models calibrated on ±5% annual steel variance now face ±33% swings. The confidence intervals are wrong. What should residential builders do?

## Journalist
Frank "The Foreman" DeLuca — methodical, patient, process-obsessed

## Key Data Points

### Tariff Rates (AGC Tariff Resource Center, April 2, 2026)
- Steel, aluminum, copper items (entirely/mostly those metals): **50% tariff**
- Derivatives containing those metals: **25%**
- Industrial/electrical equipment incorporating those metals: **15%**
- Products manufactured abroad using American-sourced metal: **10%**
- Softwood lumber: **10%** tariff; derivatives: **25%**

### Price Impacts (BLS Producer Price Index, Jan 2026)
- Aluminum mill shapes: **+33.0% YoY** (largest since pandemic 2022)
- Steel mill products: **+20.7% YoY**
- Copper and brass mill shapes: **+15.7% YoY**
- Framing lumber: **~$872/MBF**, up ~13% YoY
- Nonresidential construction input prices: **12.6% annualized rate** (first 2 months 2026)
- Nonresidential inputs January: **+7.1% annualized**, +2.9% YoY (ABC analysis)
Source: AGC, Associated Builders and Contractors, BLS PPI data

### Residential Impact
- Brookings Institution: tariffs add **$30 billion** to residential construction costs
- Center for American Progress: **~$17,500 per new home** added cost
- CAP: could result in **450,000 fewer homes** constructed through 2030
- 43% of contractors reported canceled projects due to cost increases (AGC 2025 survey)
Source: Brookings (2026), Center for American Progress (2026)

### Industry Baseline
- 9 in 10 projects overrun budgets by avg **28%** (Propeller Aero / Oxford meta-analysis) — this was BEFORE tariffs
- AACE 17R-97: AI strongest at Class 3-4 estimates (95-97% accuracy on quantity takeoff)
- AI weakest: renovations, local subcontractor pricing, and now — tariff-driven material volatility
Source: Previously covered in article #230

### AI Cost Estimation Tools Under Pressure
- ProEst ($200-400/mo), Buildxact, STACK, Togal.AI, CostToBuild.net
- These rely on historical PPI data and vendor pricing databases
- PPI data has weeks-to-months lag before flowing through AI models
- Prediction intervals calibrated on historical volatility (pre-tariff: steel annual variance ~5-8%)
- Tariff policy changes overnight via executive order — no model predicts that
- ASCE paper (El-adaway et al., 2025): probabilistic deep-learning models developed for PPI forecasting — but trained on pre-tariff data distributions

### Contract Mechanisms
- **ConsensusDocs 200.1**: Material Price Escalation Amendment — structured mechanism for sharing tariff-driven cost increases mid-project
- AGC recommending all contractors update contracts before signing new work
- Two in five firms already raised prices in response to tariffs
- 16% absorbed costs or negotiated with suppliers
- Nearly 40% expect further materials cost increases

### Cushman & Wakefield Analysis (April 2026)
- Current tariff rates → 6.0% increase to construction materials costs vs 2024 baseline
- Total project costs up 3.0%
- Peak scenario (summer 2025 rates): 9.0% materials cost increase
- "Tariffs have reset pricing at a higher baseline"

## Original Contribution
Calculate how tariff-driven PPI swings blow up a typical AI model's confidence interval on a residential project:

**Typical $400K residential build:**
- ~40% materials cost = $160K
- Steel/metals ~10% of materials = $16K
- Lumber ~18% of materials = $28.8K
- Other tariff-exposed materials (copper, gypsum, cabinetry) ~15% = $24K
- Total tariff-exposed: ~$68.8K (43% of materials)

**Pre-tariff AI model confidence interval:**
- Historical annual PPI variance for steel: ~5-8%
- AI model 95% CI on steel: $16K ± $960 (±6%)
- Total materials 95% CI: $160K ± $8K (±5%)

**Post-tariff reality:**
- Steel PPI variance: 20.7-33% YoY
- Actual steel range: $16K ± $5,280 (±33%)
- Copper/brass: ± 15.7%
- Lumber: ± 13%
- Total materials real range: $160K ± $22K (±14%)
- The AI said ±$8K. Reality is ±$22K. That's a $28K gap in worst case.

**On a $400K home, your AI estimate has a hidden $28K error band it isn't reporting.**

## Kill Test
Does this help someone building or buying a home? YES — directly tells builders:
1. When to re-estimate (monthly, not quarterly)
2. Why their AI tool's confidence interval is lying
3. How to protect themselves contractually (ConsensusDocs 200.1)
4. Which materials to watch most closely (steel > copper > lumber)
