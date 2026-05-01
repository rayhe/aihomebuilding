# Research: AI Thermal Imaging for Insulation Quality Detection

## Journalist: Jake "Jackhammer" Kowalski
## Beat: Construction Technology, Tools

## Angle
39% of wall insulation installations in new homes fail RESNET Grade I quality — but nobody catches it before drywall goes up. AI-powered thermal imaging is now cheap enough ($300 phone attachment + free/cheap AI analysis) to catch these defects during construction, when fixing them costs $200–500 instead of $2,000–5,000+ after drywall. The question: does the AI actually work well enough to replace a trained thermographer?

## Kill Test
Does this help someone building or buying a home? YES — directly actionable. A builder can buy a FLIR ONE Pro ($300), scan walls before drywall, and catch the defects that affect 4 in 10 homes. A homeowner can request thermal imaging as part of their pre-drywall inspection. Specific cost-benefit math included.

## Primary Sources

### 1. SPEER/EEP Field Study — Insulation Installation Quality
- Source: South-central Partnership for Energy Efficiency as a Resource (SPEER)
- URL: https://eepartnership.org/program-areas/energy-codes-2/energy-codes/houston-field-study/fact-sheet-insulation-r-value-and-installation-quality/
- Key findings:
  - Almost all homes met R-value requirements (code-compliant amounts)
  - **39% of wall insulation installations did NOT meet RESNET Grade I**
  - **27% of ceiling insulation installations did NOT meet RESNET Grade I**
  - The right amount of insulation, installed wrong
  - Five major flaws: compression, gaps, voids, misalignment, air intrusion
  - Texas homes, 2015 IECC context
  - $3,027,369/year savings if all TX new homes brought to compliance

### 2. DOE — Building Envelope Energy Waste
- Source: U.S. Department of Energy
- Key stat: U.S. wastes $100 billion in energy due to ineffective building envelopes
- Building envelopes = shell/barrier between interior and outdoors
- Heating/cooling = largest energy expense in residential

### 3. EPA/Energy Star — Insulation Savings Methodology
- Source: energystar.gov/saveathome/seal_insulate/methodology
- EPA estimates homeowners save average **15% on heating/cooling costs** (11% total energy) from proper air sealing + insulation
- Based on energy modeling of "typical" existing U.S. homes
- Corroborated by 20+ years of professional building science contractor field experience

### 4. Lamarr.AI — AI + Drone Thermal Inspection Startup
- Source: Georgia Tech Research (research.gatech.edu)
- Spin-off from Georgia Tech, MIT, Syracuse University
- CEO: Tarek Rakha (Georgia Tech Associate Professor, School of Architecture)
- Technology: drones + thermal imaging + AI → autonomous building defect diagnosis
- Raised $1.1M pre-seed (October 2024) led by Hazelview Ventures
- Creates 3D models with mapped defects → energy simulation to quantify lost energy
- "Cheaper, faster, more accurate, and safer" than traditional inspection
- Works across healthcare, higher ed, multi-family, residential, office, warehouse

### 5. MDPI Sensors 2026 — Deep Learning Building Facade Defect Detection
- Source: MDPI Sensors journal (doi: 10.3390/s26020694)
- Method: Infrared thermography + deep learning
- Results: 90.6% precision, 91.4% recall, 91.0% F1 score for defect classification
- Focused on high-rise facades but methodology transferable to residential
- Used YOLOv-based architecture for real-time detection

### 6. Angi — Thermal Imaging Inspection Costs (2026 Data)
- Source: angi.com/articles/thermal-imaging-home-inspection-cost.htm
- Average cost: **$400** (range $100–$700)
- Full-home scan: $300–$500
- Partial scan: $150–$300
- Targeted system check: $100–$250
- Larger homes (3,000+ sq ft): $400–$700
- Home size tiers with pricing

### 7. FLIR Thermal Camera Equipment Costs
- FLIR ONE Pro (phone attachment): ~$300–400
- FLIR TG-Series handheld: ~$200–400
- FLIR E-Series professional: $2,000+
- Consumer-grade now sufficient for basic insulation gap detection

## Original Contribution: Cost-Benefit Calculation

### Pre-Drywall Thermal Scan ROI
**Inputs:**
- Average U.S. household heating/cooling: ~$1,200/year (EIA RECS)
- Grade II/III insulation penalty: ~5–15% energy loss vs Grade I (ORNL estimates)
- Energy penalty per year: $60–$180 on a $1,200 bill
- Thermal scan cost (DIY with FLIR ONE): $300 one-time (reusable across homes)
- Thermal scan cost (professional): $400/home
- Fix cost pre-drywall: $200–$500 (pull batts, reinstall correctly)
- Fix cost post-drywall: $2,000–$5,000+ (demo drywall, fix, reinstall, repaint)

**Calculation for a builder scanning 10 homes/year:**
- Equipment: $300 (FLIR ONE Pro, one-time)
- Expected defect rate: 39% = ~4 homes with wall insulation defects
- Avoided future remediation: 4 × $2,000–$5,000 = $8,000–$20,000 in potential claims/callbacks
- Actual fix cost (pre-drywall): 4 × $350 avg = $1,400
- Net savings: $6,600–$18,600 per 10 homes
- Per-home amortized: $660–$1,860 in avoided remediation costs
- Payback: First defective home found (1 in 2.6 homes statistically)

### For homeowners (one-time inspection):
- $400 professional thermal scan
- If defect found and fixed pre-move-in: saves $60–$180/year in energy PLUS avoids $2,000+ future remediation
- Payback: < 3 years on energy alone, immediate on avoided remediation

## AI vs. Human Thermographer
- Traditional: trained ASNT Level II thermographer, $75–$150/hour, 2–4 hours per home
- AI-assisted: FLIR + smartphone AI analysis (multiple apps now available), but:
  - Requires 15°F+ indoor/outdoor temperature differential for reliable imaging
  - AI at 90% precision = 10% false positive rate (could flag structural shadows as defects)
  - No substitute for understanding thermal bridging at studs vs. actual insulation gaps
  - Seasonal constraint: best results in winter or with blower door pressurization

## Counterargument
- The 39% figure is from Texas (climate zones 3–4). Cold-climate builders may have better installation quality due to higher stakes.
- A camera doesn't fix the labor shortage — the same crews who installed it wrong will be the ones fixing it.
- Grade II insulation is "acceptable" under many energy codes; only ENERGY STAR requires Grade I.
- AI false positives could create adversarial inspection dynamics, slowing construction.

## Limitations to Acknowledge
- SPEER study is Texas-specific; nationwide defect rates may differ
- No peer-reviewed study yet on AI thermal analysis specifically for residential new construction insulation
- 90.6% accuracy figure is from high-rise facade research, not residential framing
- Consumer cameras (FLIR ONE) have lower resolution than professional units, reducing AI accuracy
- Cost calculation uses average energy costs; actual savings vary by climate zone, fuel prices, and home size
