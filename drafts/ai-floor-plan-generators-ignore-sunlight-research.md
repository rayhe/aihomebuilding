# Research: AI Floor Plan Generators Don't Know Where the Sun Is

## Topic
AI-powered floor plan generators (ChatGPT, Copilot, Maket, Planner 5D, etc.) optimize for space efficiency and circulation but systematically ignore solar orientation, window placement relative to sun path, and daylighting performance. New academic research quantifies this blind spot.

## Journalist
Elena Vasquez (Architecture & Design)

## Kill Test
**Does this help someone building or buying a home?** Yes. Homeowners and architects increasingly use AI tools for early-stage floor plan generation. They need to know that these tools have a fundamental blind spot: they don't model where the sun is. A north-facing living room in a cold climate or a west-facing bedroom in a hot one aren't just aesthetic failures — they drive energy costs, compromise health, and reduce home value.

## Primary Sources

### Source 1: Çelik (2025) — Cambridge University Press, AI EDAM
"Evaluating daylight performance of AI-generated housing plans via diffusion models and climate-based simulation"
- Tuğçe Çelik, Ostim Technical University, Ankara
- Published July 30, 2025, AI EDAM, Vol. 39, e19
- DOI: 10.1017/S0890060425100085
- **Key findings:**
  - Tested ChatGPT, Copilot, and LookX across 5 climate zones
  - Generated 31 plans; only 8 had sufficient architectural legibility for simulation (5 ChatGPT, 3 Copilot)
  - LookX excluded entirely — outputs weren't readable as floor plans
  - Simulated daylight using Velux Daylight Visualizer on equinox and solstice dates
  - Measured average illuminance in living room, kitchen, bedroom
  - **"None of the models consistently integrated solar orientation or seasonal lighting considerations"**
  - ChatGPT plans had higher spatial clarity and more balanced daylight
  - Copilot outputs varied significantly in quality
  - Conclusion: gap between "generative representation and environmental logic"
  - Calls for "next-generation AI systems capable of semantic, spatial, and climatic reasoning"

### Source 2: Hu & Zheng (2025) — Springer, CDRF Conference
"Performance Prediction of AI-Generated Architectural Layout Design: Using Daylight Performance of Residential Floorplans as an Example"
- Published in Computational Design and Robotic Fabrication series
- DOI: 10.1007/978-981-95-0974-4_4
- **Key findings:**
  - Most AI-generated plans "focus on form and spatial layout, often neglecting crucial performance evaluations"
  - Proposed GAN-based approach to predict daylighting performance from floor plan images
  - GAN predicts with deviation < 5% from ground truth (MSE 4.2, SSIM 0.98)
  - 267x faster than traditional simulation methods
  - Proves the gap is solvable — but the tools haven't integrated the solution yet

### Source 3: EIA Residential Energy Consumption Survey (RECS 2015)
- Lighting = 10% of total residential electricity consumption
- All 118 million US homes use artificial lighting
- Poor daylighting design = more artificial lighting = higher energy costs
- URL: https://www.eia.gov/todayinenergy/detail.php?id=36412

### Source 4: IES LM-83 / LEED v4 Daylighting
- Spatial Daylight Autonomy (sDA300/50): percentage of floor area receiving ≥300 lux for ≥50% of occupied hours
- LEED v4 EQc7 Option 1: sDA300/50 ≥ 55% for 2 points, ≥ 75% for 3 points
- Annual Sunlight Exposure (ASE): tracks excessive direct sun (glare risk)
- These metrics exist for commercial buildings but aren't applied to AI-generated residential plans

### Source 5: WELL Building Standard — Circadian Lighting
- WELL v2 Light concept requires circadian-effective lighting
- Melanopic equivalent daylight illuminance (M-EDI) ≥ 150 equivalent melanopic lux at eye level
- Natural daylight preferred pathway — artificial circadian lighting is expensive
- Poor floor plan orientation = can't achieve circadian standards without expensive electric lighting

### Source 6: Daylighting and Home Value
- Energy Star: 2-8% price premiums for energy-efficient rated homes
- Natural light consistently cited as top buyer preference in NAR surveys
- Window orientation directly affects appraisal comps in residential valuations

## Original Contribution
Cross-reference between what AI floor plan tools optimize for (spatial efficiency, room adjacency, circulation) versus what actually matters for livable homes (solar orientation, daylighting autonomy, seasonal light variation). Calculate the practical cost gap: a daylighting-ignorant floor plan that requires 2 additional hours of artificial lighting per day costs roughly $150-300/year in electricity and fails to meet WELL circadian standards that have been linked to better sleep and mental health outcomes.

## Angle
AI drew the floor plan. It forgot the sun exists. When 74% of a plan's daylighting performance comes from orientation and window placement — the two things AI tools don't model — the resulting home isn't just suboptimal, it's designed to be dark.

## Strongest Counterargument
AI floor plan tools are meant for early-stage ideation, not construction documents. Orientation, window sizing, and daylighting are traditionally handled later by architects using simulation tools (Velux Visualizer, cove.tool, Sefaira). Expecting a text-to-image model to embed solar geometry is like expecting a sketch napkin to include structural calculations. The tools work fine for what they're designed to do — inspire, not prescribe.

## Limitations
- Çelik study tested only 3 AI tools (ChatGPT, Copilot, LookX); other tools like Maket, TestFit, Archistar may perform differently
- Only 8 of 31 plans were simulatable — small sample for strong statistical claims
- EIA lighting data is from 2015; LED adoption has since reduced per-home lighting consumption
- Home value premium for natural light is poorly quantified in academic literature
- WELL standard was designed for commercial buildings; residential application is limited
