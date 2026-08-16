# Research Notes: AI Building Orientation & Solar Optimization — Residential Gap

## Angle
AI-guided evolutionary optimization can dramatically reduce residential heating demand through passive solar design — orientation, window-to-wall ratio, glazing type, thermal mass. Research shows up to 96% reduction. Meanwhile, AI floor plan generators don't even consider which way the building faces. And production homebuilders drop the same plan on every lot regardless of compass orientation. The technology to optimize site positioning exists in research. Nobody uses it for houses.

## Primary Sources

### 1. MDPI 2026: "AI-Guided Evolutionary Optimization of Passive Solar Design for Residential Heating Across Distinct Climate Zones"
- DOI: 10.3390/futuretransp6020013 (or similar — published in MDPI)
- Authors: Used NSGA-II + EnergyPlus 9.4 full simulations
- Key findings:
  - Riyadh (hot/dry): 95.9% heating demand reduction through passive optimization alone
  - Barcelona (temperate): significant reduction
  - Toronto (cold/humid): significant reduction
  - All achieved WITHOUT changing HVAC or building geometry
  - Variables: orientation, window-to-wall ratio, glazing type, thermal mass, shading
  - "Decisions made in early design stages — orientation, window ratio, glazing choice, thermal mass — establish heating demand characteristics that persist over the service life of a dwelling"

### 2. Cambridge AI EDAM: "Evaluating daylight performance of AI-generated housing plans via diffusion models and climate-based simulation"
- Tested ChatGPT, Copilot, LookX for generating floor plans
- 31 initial plans, 8 valid outputs reconstructed in AutoCAD
- Key finding: "none of the models consistently integrated solar orientation or seasonal lighting considerations"
- "a gap between generative representation and environmental logic"
- "The findings underscore the need for next-generation AI systems capable of semantic, spatial, and climatic reasoning"

### 3. NREL Passive Solar Design Strategies
- Classic reference: suntempering (modest increases in south-facing windows) saves 6-24% on heating
- In conventional house, ~25% of windows face south (about 3% of floor area)
- Suntempered: increase to ~7% of floor area facing south → 6-24% heating savings depending on climate/insulation
- No additional thermal mass needed — just the "free mass" in framing, drywall, furnishings
- Key insight: "right orientation for year-round energy savings" is free — costs nothing

### 4. Production Homebuilder Practice
- Tract housing: 3-5 core floor plans, rotated and mirrored throughout subdivision
- Focus is on streetscape variety (different elevations/facades on same plan) NOT orientation optimization
- Plans adapted to lot width, not solar path
- ProBuilder Apr 2026: "One Plan, Multiple Elevations" — entire article about making same plan look different, zero mention of orientation relative to sun
- Larry Garnett (40 years designing homes): "There's nothing as monotonous as a new subdivision with rooftops that look like the same cookie cutter" — concern is visual, not thermal

### 5. Hanyang University 2026 (Color Research & Application, Wiley)
- Vision-language augmented Image Color Aesthetic Assessment model for interior design
- Shows AI design tools optimizing for aesthetics (crowd preference), not performance
- 81% of designers found AI color scores aligned with aesthetic principles

## Kill Test
Does this help someone building or buying a home? YES.
- Homeowner building custom: should demand site-specific orientation analysis before finalizing floor plan
- Homeowner buying tract: should understand that the lot orientation they're assigned affects energy costs for the life of the mortgage
- Builder: could differentiate with orientation-optimized plans
- Cost: orientation optimization at design stage is essentially free

## Journalist
Elena Vasquez — Architecture & Design. She sees buildings as art first but respects when technology serves the human experience. She'd find the aesthetic poverty of ignoring solar orientation offensive — both as design negligence and as a failure of imagination.

## Novel Contribution
Original cost calculation: If orientation alone accounts for even a 10-15% heating/cooling differential (conservative, per NREL data), and the average American household spends $2,000/year on energy with ~50% going to HVAC (~$1,000), the orientation penalty on a badly-oriented house is $100-150/year. Over a 30-year mortgage, that's $3,000-4,500 in wasted energy — more than the cost of running an optimization algorithm once. And the algorithm costs nothing to run at design stage.
