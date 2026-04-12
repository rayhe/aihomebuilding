# Research: AI Air Leakage Prediction and the Blower Door Test Gap

## Thesis
Production builders treat the blower door test as a pass/fail checkbox at the end of construction. When homes fail — and many do — the drywall is already up and remediation costs 3-10x what pre-drywall sealing would have cost. AI tools exist that can predict leakage before framing is done and locate leaks at the pre-drywall stage, but almost nobody uses them in residential production.

## Kill Test
**Does this help someone building or buying a home?** YES.
- Builders: avoid expensive post-drywall remediation by using AI prediction and mid-construction testing
- Homebuyers: demand pre-drywall air sealing verification; understand what ACH50 means for their energy bills
- GCs: quantify the cost difference between finding leaks early vs. late

## Key Data Points

### Code Requirements (IECC)
- **2021 IECC Residential:** ≤3 ACH50 for Climate Zones 1-2, ≤5 ACH50 for CZ 3-8 (Section R402.4.1.2)
- **DOE Zero Energy Ready Home:** ≤3 ACH50 (CZ 1-2), ≤2.5 ACH50 (CZ 3-4), ≤2 ACH50 (CZ 5-7), ≤1.5 ACH50 (CZ 8)
- Significant expansion of commercial air leakage requirements in 2021 IECC (new mandatory testing)
- Testing must follow RESNET-approved protocol, conducted by approved verifier
- Source: ICC Building Safety Journal, PNNL Building America Solution Center

### Traditional Testing
- Blower door test cost: $200-500 per home
- Typically performed AFTER drywall installation — at the end of construction
- If home fails, builder must tear into drywall to find and fix leaks
- Post-drywall remediation: significant labor + material cost (drywall repair, re-taping, painting)
- 40% of buildings constructed WITHOUT an envelope consultant exceed air leakage requirements (PNNL/Wiss 2014)
- Buildings WITH envelope consultants: ALL had leakage below 0.25 cfm/ft2

### AeroBarrier Technology
- Aerosolized latex sealant + blower door pressurization system
- Can seal gaps up to 1/2 inch wide
- Typical results: 4.5 ACH50 → 1.5 ACH50 in ~2 hours
- Cost: $1,500-3,500 per home (GBA reports; user-reported $3,500 for complex foundation)
- Installed after drywall hung, before trim
- Eliminates $500+ in traditional air-sealing materials and hours of manual labor
- Now being tested for crawlspace/existing home applications (2026 research)
- Source: Green Building Advisor, Fine Homebuilding, Patrick McCombe 2019

### ORNL Schlieren Camera (AI-Adjacent)
- Background-oriented schlieren (BOS) photography — visualizes transparent air flow
- Real-time air leak detection with a camera + computation
- One of 7 technologies highlighted at ORNL Technology Innovation Showcase (near commercialization)
- Lead researcher: Philip Boudreaux
- Uses small shifts in image background to visualize air at different temperatures
- Published: Building and Environment journal (ScienceDirect)
- Potential: replace smoke pencils and infrared cameras with real-time flow visualization
- Source: ORNL news release 2023

### ML/AI for Airtightness Prediction
- BIM-Based Machine Learning for building energy prediction (MDPI, Applied Sciences 2026)
- Random Forest models predicting EUI and operational energy from building features
- Estimation of ACH natural using blower door test data and simulation (MDPI Energies 2021)
- Construction material classification using Vision Transformer (arXiv 2021)
- Domain-guided ML for swell risk prediction (applied to building design)
- Key gap: ML models exist in academia but are NOT integrated into production builder workflows

### Cost Analysis
- Blower door test: $200-500
- Manual air sealing (caulk, foam, tape): $300-1,000 per home during construction
- AeroBarrier: $1,500-3,500 (includes equipment, technician, sealant)
- Post-construction remediation if failed: $2,000-5,000+ (drywall repair, re-sealing, re-testing)
- Energy cost of a leaky home: roughly 25-40% of heating/cooling load is infiltration-related (DOE estimate)
- For a home with $2,400/year in HVAC costs, infiltration accounts for ~$600-960/year

## Sources (3+ primary)
1. ICC Building Safety Journal — "Significant changes to air leakage in the 2021 IECC" (March 2022)
2. ORNL — "Air leak detection system visualizes building drafts with the click of a camera" (2023)
3. Green Building Advisor — "New Developments in Air-Sealing" (Feb 2026, AeroBarrier research)
4. PNNL Building America Solution Center — ACH50 requirements by climate zone
5. MDPI — Multiple ML papers on building energy/airtightness prediction (2021-2026)

## Angle for Jake Kowalski
Jake is construction tech — he'll love the hardware. The schlieren camera, AeroBarrier's feedback loop (real-time ACH50 on a laptop screen), and the idea that you can predict whether a home will pass before you finish framing. He'll be punchy about the absurdity of testing at the end when you could test (or predict) at every stage.

## Novel Contribution
The article connects three threads nobody else has woven together:
1. ML models can predict ACH50 from building plans before construction
2. Mid-construction tech (AeroBarrier, ORNL camera) can catch problems before drywall
3. The cost math on early vs. late detection is devastating and nobody runs it

## Strongest Counterargument
"We've been building houses that pass blower door for decades without AI." True for custom builders with good crews. False for production builders scaling to 50+ homes/year with rotating subcontractor crews. The data on 40% failure rates speaks for itself.
