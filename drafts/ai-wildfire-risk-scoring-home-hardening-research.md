# Research: AI Wildfire Risk Scoring & Home Hardening Economics

## Angle
AI models now score individual homes for wildfire survivability. California just approved the first catastrophe model for insurance ratemaking. Building to Chapter 7A code minimum is no longer enough — the algorithm sees what the building inspector doesn't: your neighbor's wood fence, the spacing between structures, the vegetation density within 5 feet. The gap between "code-compliant" and "algorithm-approved" is where your insurance premium lives.

## Journalist
Catherine "Code" Chen — policy, regulation, insurance, building codes

## Primary Sources

### 1. Berkeley/NIST ML Study (Nature Communications 2025)
- **Authors:** Michael Gollner (UC Berkeley ME), Maryam Zamanialaei (postdoc)
- **DOI:** 10.1038/s41467-025-63386-2
- **Method:** XGBoost classifier trained on CAL FIRE DINS data + remote sensing from 5 major CA WUI fires (2017 Tubbs, 2017 Thomas, 2018 Camp, 2019 Kincade, 2020 Glass)
- **Key findings:**
  - Structure survivability predicted with **82% accuracy**
  - **Structure spacing** is the #1 factor influencing fire risk (not materials, not vegetation alone)
  - Hardening + defensible space together → hypothetical **52% reduction in losses**
  - Zone 0 alone (5-foot vegetation clearance) → **17% reduction in structure losses**
  - Fire exposure, ignition resistance (hardening), and defensible space work in **combination** — no single factor is sufficient

### 2. Verisk Wildfire Catastrophe Model — First CDI-Approved Model (July 2025)
- Verisk (Nasdaq: VRSK) completed California Department of Insurance PRID review
- **First catastrophe model ever approved for wildfire insurance ratemaking in California**
- Part of Commissioner Ricardo Lara's Sustainable Insurance Strategy
- Forward-looking (not just historical loss data) — uses climate projections, fire science, engineering
- Already approved by Nevada Division of Insurance (Feb 2025)
- Significance: Insurers can now use AI-driven, forward-looking risk models instead of backward-looking actuarial tables

### 3. California Insurance Crisis — Hard Numbers
- CA home insurance premiums up **16% in 2026** — highest spike in the nation (NY Post/OC Register)
- Palisades + Eaton fires: **$61.8 billion in damages** (Climate Central)
- FAIR Plan (insurer of last resort) premiums projected to rise **29% by 2027**
- CA only ranks 21st in avg premium ($2,843) due to Prop 103 rate approval requirements
- Wildfire portion of premiums drives differentiation — high-risk properties see larger increases

### 4. California "Safer from Wildfires" Program (CDI)
- 10 mandatory discount categories for all CA insurers:
  1. Class-A fire-rated roof
  2. 5-foot ember-resistant zone + noncombustible fencing
  3. Ember/fire-resistant vents (1/16" to 1/8" metal mesh)
  4. Noncombustible 6" at bottom of exterior walls
  5. Enclosed eaves (soffits)
  6. Multi-pane windows
  7. Cleared vegetation/debris under decks
  8. Sheds/outbuildings 30+ feet from home
  9. Defensible space compliance (PRC 4291)
  10. Community-level (Firewise USA or Fire Risk Reduction Community)
- Insurance discount range: **2% to 18%** depending on carrier and location
  - State Farm: 2-5%
  - Mercury: up to 18%

### 5. Hardening Cost Data (Headwaters Economics 2024)
- **Basic hardening** (ember-resistant vents, clean gutters, noncombustible mulch): **$10,000-$15,000** for 2-story, 2,000 sq ft home
- **Full retrofit** (enclosed eaves, replaced windows/roof/deck boards): **$23,000-$40,000**
- CA SB 894 (Sen. Ben Allen, Jan 2026): State-backed low-interest loan program for wildfire retrofits, modeled on GoGreen energy-finance platform
- FEMA $100M pilot: San Diego County, up to $40,000/home across 500 backcountry homes
- Polling: 83% of CA voters support financial incentives for fire-resistant upgrades; 81% support certifications for insurance discounts

### 6. Chapter 7A / California Residential Code R337
- Applies to ALL new construction in WUI areas (SRA + LRA fire hazard severity zones)
- Materials: exterior wall siding, windows, vents, decking, roofing, doors
- SFM maintains WUI Listed Products Handbook (2025 edition)
- 2008 addition to CBC — Camp Fire research confirmed homes built to 7A significantly more likely to survive
- Key gap: Chapter 7A addresses **materials** but NOT **spacing** — the ML model says spacing is #1 factor

### 7. Clemson Deep Learning Ember Study
- Al-Bashiti et al. (2024): DL model predicts ember accumulation hotspots on gable roofs
- Variables: wind speed, wind direction, roof slope, windward/leeward position
- Explainable AI (XAI) used to show which parameters drive accumulation
- Significance: Could inform roof design beyond "Class A" rating — not just fire-resistant material but fire-resistant geometry

## Original Analysis (Novel Contribution)
**ROI calculation: Does hardening pay for itself in insurance savings?**
- Basic hardening: $12,500 avg → at 5% discount on $2,843 avg premium = $142/yr savings → **88-year payback**
- Full hardening: $31,500 avg → at 18% discount on $2,843 = $512/yr → **61-year payback**
- But: high-risk area premium might be $6,000-$13,788 (FAIR Plan/high-risk zone)
  - Full hardening at 18% on $13,788 = $2,482/yr → **12.7-year payback**
  - With SB 894 low-interest loan or FEMA grant: payback drops to 5-8 years
- **The math only works in the highest-risk zones** — which is exactly where the AI model matters most
- The real ROI isn't insurance: it's the 52% reduction in losing your house entirely

## The Structural Gap (Strongest Counterargument)
The Berkeley ML model says **structure spacing** is the #1 factor — but:
- Chapter 7A doesn't regulate spacing (that's zoning/land use)
- Defensible space laws only address vegetation, not neighbor proximity
- In dense subdivisions, your hardening doesn't matter if the house 10 feet away ignites
- The AI sees community-level risk; the code addresses individual-building risk
- This is a policy failure no amount of hardening can fix in existing neighborhoods

## Limitations
- Berkeley model trained on 5 CA fires — generalizability to other climates/fuels unknown
- Verisk model is proprietary — homeowners can't see their score or the inputs
- Insurance discount amounts not publicly audited for actuarial fairness
- No controlled experiments — all observational/historical data
- New construction to 7A is not the same as retrofit — cost and effectiveness differ

## Kill Test
Builder: Your Chapter 7A-compliant house is code-legal. But the AI model the insurer is using sees your wood-fenced neighbor 8 feet away and scores you as high-risk regardless. What do you build beyond code?
Buyer: You're paying $8,000/year in wildfire insurance. The algorithm says $31,500 in hardening buys you an 18% discount. Is that $1,440/year worth it? (Yes, plus the 52% better chance your house survives.)
