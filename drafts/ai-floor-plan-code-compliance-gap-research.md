# Research: AI Floor Plan Generators and Building Code Compliance

## Angle
AI floor plan tools (PlanFinder, TestFit, Finch3D, ArchitectGPT) generate layouts in seconds, but a rigorous 2026 study found they fail building code requirements 37.5–71.4% of the time. Every layout would need an architect to fix it — the exact cost the tools promise to eliminate. The gap isn't in aesthetics (macro-level layout is solid); it's in the invisible legal/ergonomic details that determine whether you can actually build and live in the space.

## Journalist: Elena Vasquez (Architecture & Design)
Her skepticism of tools that "flatten design into optimization" fits perfectly. This is about the difference between a floor plan that *looks* right and one that *is* right.

## Primary Sources

### 1. Szot, Regulski & Pruszewicz-Sipińska (2026) — Poznan University of Technology
**"AI-Assisted Residential Layout Generation: A Comparative Study of PlanFinder and Human-Designed Apartment Plans in Polish Multi-Family Housing"**
- Published: MDPI Buildings, June 24, 2026
- Method: 9 residential units from completed Polish project, compared human architect (16 yrs experience) vs. PlanFinder AI layouts
- Key findings:
  - AI met mandatory building code criteria: **37.5% to 71.43%** (varies by apartment complexity)
  - AI met overall criteria: **55.56% to 74.07%**
  - Human designs: **100% mandatory code compliance, 92.86–100% overall**
  - "Zero compliance" with many key legal/ergonomic criteria
  - **Five failure categories:** representational omissions (missing fixtures), dimensional failures (scale/ergonomics), circulation failures (enfilade/walk-through layouts), structural conflicts (ignoring load-bearing walls), legal non-compliance
  - Specific omissions: no washing machine spaces, no storage closets, missing sinks in bathrooms, corridor ergonomic failures
  - "Technical blindness" — algorithm prioritizes geometry over mandatory equipment
  - Performance inversely proportional to apartment complexity (larger units scored worst)
  - Conclusion: "require manual adaptation by an architect, which partially negates the application's main advantage"

### 2. Abraham (2025, Medium) — GPT-4o Furniture Placement Experiment  
- Fed GPT-4o a dimensioned floor plan + furniture catalog
- Asked it to place furniture with coordinates
- Result: "very poor" — furniture overlapping, wrong positions, spatial reasoning failure
- "Floor plans were just not a large part of the training data"

### 3. Gautam et al. (2026, arXiv) — Automated Floor Plan Compliance Framework
- Australian researchers proposing AI-based compliance checking for residential floor plans
- Background: SEPP65, BADS, SPP7.3 design quality policies require "precise geometric and spatial analysis"
- "Compliance checking remains challenging due to its manual, time-intensive nature"
- Uses LLM + Rule Engine to convert textual building codes into executable rules
- Confirms the problem is real enough to warrant automated checking tools

### 4. LinkedIn Builder Article (Fuellenbach, 2025)
- US custom home builder perspective
- "Hand a permit office an AI render and you will be back at the desk by lunch"
- "AI house-plan tools, including the free ones, produce concepts and layouts, not code-compliant construction documents"
- "Licensed humans still own the construction set. Keep that line clean and the tool helps you. Blur it and it creates rework."

### 5. Independent Institute (2026) — AI for Building Permits
- Austin TX formally adopted AI pre-check (Archistar eCheck) for single-family permits
- Honolulu uses CivCheck AI for document/code compliance
- AutoReview.AI — Florida Building Code (800+ pages), first US system using AI for comprehensive compliance
- Context: AI is being used to CHECK plans, while different AI is being used to GENERATE plans — the two don't talk to each other

## Kill Test
**Does this help someone building or buying a home?** YES. If you're using an AI floor plan generator (Maket, ArchitectGPT, PlanFinder, etc.) to save on architecture fees, this tells you exactly what you'll miss and why you still need professional review. Actionable: know what code requirements the tools skip, budget for an architect's correction pass, never submit AI-generated plans directly for permit.

## Headline Options
- "The AI Drew Your Floor Plan in Twelve Seconds. The Building Inspector Rejected It in Three."
- "An AI Generated Nine Apartment Layouts. Every One Would Fail a Building Permit."
- "Your AI Floor Plan Passed the Eye Test. It Failed Thirty-Seven Percent of the Building Code."
