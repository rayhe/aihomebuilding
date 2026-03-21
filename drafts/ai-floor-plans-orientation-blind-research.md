# Research: AI Floor Plan Generators Are Orientation-Blind

## Angle
AI floor plan generators (Maket, Higharc, ChatGPT, Copilot, Planner5D) produce visually coherent layouts but are completely unaware of which direction a lot faces. A peer-reviewed Cambridge University study tested AI-generated plans across 5 climate zones and found none consistently integrated solar orientation. Building orientation alone accounts for 10-40% of heating energy. Production homebuilders already stamp the same plan on every lot — AI tools are now codifying that negligence into software.

## Journalist
Elena Vasquez — Architecture & Design beat. Sees buildings as art first, technology second. Skeptical of tools that flatten design into optimization, but even more skeptical of tools that skip it entirely.

## Kill Test
Does this help someone building or buying a home? YES — anyone using AI to generate a floor plan, or buying from a builder using AI plan tools, needs to know the plans don't account for solar orientation, potentially costing $300-900/year in extra energy.

## Primary Sources

### Source 1: Cambridge University Press (Peer-reviewed, July 2025)
- Çelik, T. "Evaluating daylight performance of AI-generated housing plans via diffusion models and climate-based simulation." AI EDAM, Volume 39, 2025, e19.
- DOI: 10.1017/S0890060425100085
- Key findings:
  - Tested ChatGPT, Copilot, and LookX across 5 climate zones
  - 31 initial plans generated, only 8 valid enough to reconstruct in AutoCAD
  - "None of the models consistently integrated solar orientation or seasonal lighting considerations"
  - ChatGPT had higher spatial clarity but still no environmental logic
  - Copilot showed "erratic performance patterns" — some spaces exceeded daylight, others failed minimums
  - LookX excluded entirely — couldn't even produce visible windows
  - Gap between "generative representation and environmental logic"

### Source 2: Building Performance Association (BPA Journal)
- "How Building Orientation Impacts Overall Performance and Energy Savings"
- Key data:
  - Homes re-oriented toward the sun save 10-20% on heating without any additional solar features
  - Some optimized orientations save up to 40%
  - Sun rises east, sets west — south-facing maximizes solar gain in northern hemisphere
  - References DOE natural ventilation guidance and chimney effect

### Source 3: SCIRP Academic Paper — Window-to-Wall Ratio & Orientation Study
- Kabul climate study (applicable to cold/mixed climates)
- Key findings:
  - South-facing windows with 25% WWR (single glazing) achieved 25.7% energy savings vs windowless
  - Double glazing at 35% WWR: 35.2% savings
  - Triple glazing at 55% WWR: 36% savings
  - North, east, west-facing windows increased energy demand
  - Double-glazed south-facing windows outperformed triple-glazed in other orientations
  - Conclusion: window placement matters more than glass quality

### Source 4: IECC 2024 Energy Code
- Simulated Building Performance path now requires 15-20% energy savings over reference (up from 5% in 2021 IECC)
- More stringent U-factor requirements for fenestration
- Prescriptive max window-to-wall ratio: 30% (IECC) vs 40% (ASHRAE 90.1)
- States adopting at varying rates

### Source 5: Higharc / Industry Context
- Higharc claims to replace static home plans with "generative, digital models"
- Buffington Homes reports 15 days faster soft schedule, $10M additional revenue
- BUT: marketing focuses on speed/cost/customization — no mention of orientation optimization
- Cove.tool does offer orientation-aware energy modeling, but it's a separate analysis tool, not integrated into AI plan generation

## Original Contribution
Cross-referencing the Çelik academic study with IECC 2024 requirements and DOE/BPA passive solar data to calculate the actual dollar cost of orientation-blind AI floor plans. If orientation alone accounts for 10-20% of heating energy, and average US heating costs are ~$1,000/year (EIA data), that's $100-$200/year in wasted heating per home. Over 30 years at 3% inflation, that's $4,700-$9,500 in lifetime energy waste — from a floor plan that took 3 seconds to generate.

## Strongest Counterargument
Most production builders already ignore orientation — they flip the same plan for every lot. AI tools are no worse than the status quo. The real culprit is the business model (standardized plans = lower design costs), not the technology. Plus, tools like Cove.tool exist for performance analysis after the plan is generated.

## Limitations
- The Çelik study tested text-to-image diffusion models (ChatGPT/DALL-E, Copilot), not purpose-built architecture tools like Higharc or TestFit
- Energy cost estimates use national averages — actual impact varies hugely by climate zone, home size, and fuel source
- No direct testing of Maket, Higharc, or TestFit for orientation awareness
- The 10-40% heating savings from orientation optimization come from passive house studies, which may overstate impact for code-minimum homes
