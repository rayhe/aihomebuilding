# Research: Window Specification Orientation Optimization

## Kill Test
Does this help someone building or buying a home? YES — directly impacts energy bills for 30+ years, costs nearly nothing to fix at spec stage, costs thousands to fix later.

## Core Thesis
Builders spec one window product across all four elevations for supply chain simplicity. AI energy modeling shows that orientation-specific SHGC (Solar Heat Gain Coefficient) optimization can save $100-200/year in energy costs. The fix costs $50-150 at plan stage. Over a 30-year mortgage, uniform specs waste $3,000-6,000.

## Key Data Points

### Window Performance Ratings
- **U-factor**: Heat loss rate. Lower = better insulation. Range 0.15-1.20 for residential. Energy Star requires ≤0.30 in Northern zones, ≤0.40 in South-Central.
- **SHGC**: Solar Heat Gain Coefficient. Fraction of solar radiation admitted. Range 0.20-0.70. Energy Star requires ≤0.25 in Southern zones, ≤0.40 in Northern.
- **VT**: Visible Transmittance. How much visible light passes through.

### Solar Gain by Orientation (Climate Zone 4, mixed climate)
From Green Building Advisor / DOE data:
- South-facing vertical surface in January: ~1,000-1,200 BTU/sq ft/day (highest winter gain)
- North-facing: ~180 BTU/sq ft/day (6× less than south)
- West-facing in July: ~1,400-1,800 BTU/sq ft/day (highest summer overheating risk)
- East-facing in July: similar to west but morning = less occupant discomfort

### Typical New Home Window Distribution
- 2,000 sq ft home: ~300 sq ft total window area (15% window-to-floor ratio, typical)
- Rough distribution: South ~90 sq ft, East ~75 sq ft, West ~75 sq ft, North ~60 sq ft

### Original Contribution: Energy Cost Calculation
**Uniform spec (typical builder):** U=0.30, SHGC=0.25 (low-E, Energy Star compliant everywhere)

**South wall penalty (winter heating season):**
- January solar on south vertical: ~1,100 BTU/sq ft/day
- SHGC 0.25 admits: 275 BTU/day/sq ft
- SHGC 0.40 would admit: 440 BTU/day/sq ft
- Difference: 165 BTU/day/sq ft rejected free heat
- 90 sq ft south windows × 165 BTU = 14,850 BTU/day wasted
- 150-day heating season: 2,227,500 BTU = 653 kWh equivalent
- At heat pump COP 2.5 or gas furnace 90% efficiency: ~$80-120/year

**West wall penalty (summer cooling season):**
- If builder uses high-SHGC (0.40) uniformly instead: west windows admit excess solar
- July solar on west vertical: ~1,500 BTU/sq ft/day
- SHGC 0.40 admits: 600 BTU/day/sq ft
- SHGC 0.22 (optimal for west): 330 BTU/day/sq ft
- Difference: 270 BTU/day/sq ft excess cooling load
- 75 sq ft × 270 BTU = 20,250 BTU/day extra cooling
- 120-day cooling season: 2,430,000 BTU
- AC at COP 3.5: ~200 kWh electricity = ~$30/year

**Combined annual penalty:** $110-150/year from uniform window spec
**30-year cost:** $3,300-4,500

**Fix cost at spec stage:** $0-150 (different low-E coating SKU, same frame)
**Fix cost after construction:** $8,000-25,000 (window replacement)

### Why Builders Don't Do This
1. One SKU simplifies purchasing, warehousing, installation training
2. Production builders buy thousands of identical windows at volume discounts
3. Energy code compliance is pass/fail — no credit for exceeding on one wall
4. Framers and trim crews don't want to track which window goes where
5. Home energy ratings (HERS) do model orientation, but most builders target "code minimum"

### AI/Software Solutions
- **BEopt** (DOE/NREL): Free tool that optimizes building envelope parameters including orientation-specific window specs
- **EnergyPlus**: DOE's gold-standard building energy simulation, orientation-aware
- **WINDOW** (LBNL): Lawrence Berkeley National Lab's tool for fenestration analysis
- **Calumen** (Saint-Gobain): Glass calculator for glazing performance
- **ML research**: Gazi University 2023 study — ML-based evaluation of window parameters on building energy and thermal comfort (8 citations)
- **BuildVision AI**: AI construction blueprint generator

### Energy Star Version 7.0
- Takes effect 2025
- Tighter U-factor requirements
- Still does NOT differentiate by orientation
- Zones: Northern (≤0.27 U-factor, ≤0.40 SHGC), North-Central (≤0.28, ≤0.40), South-Central (≤0.30, ≤0.25), Southern (≤0.32, ≤0.23)

### IECC 2021
- Table R402.1.2: Maximum U-factor and SHGC by climate zone
- No orientation differentiation
- Climate Zone 4: U≤0.30, SHGC≤0.25
- Climate Zone 5: U≤0.30, SHGC≤0.40 (allows higher SHGC in heating-dominated climates)

### Sources
1. Green Building Advisor — "A Quantitative Look at Solar Heat Gain" (Robert Opaluch, 2018)
2. RESNET HERS Standards — window modeling includes orientation
3. DOE BEopt tool documentation
4. NFRC window ratings system
5. Warranty Week — April 2025 homebuilder warranty report ($2,980 avg accrual/home)
6. Insulation Institute / DOE field survey — ~50% Grade I installation quality
7. Efficient Windows Collaborative (efficientwindows.org)
8. 2021 IECC Table R402.1.2
9. ENERGY STAR Version 7.0 requirements (Andersen Windows summary)
10. Gazi University ML study (Akköse et al., 2023)
