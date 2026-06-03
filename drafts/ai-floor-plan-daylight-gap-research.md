# Research: AI Floor Plan Generators and the Daylight Gap

## Slug: ai-floor-plan-daylight-gap
## Journalist: Elena Vasquez
## Date: June 2, 2026

## Angle
AI floor plan generators can now produce hundreds of layout options in minutes for $20-35/month. Their makers say they handle 70-75% of schematic design work. But peer-reviewed research shows these tools consistently fail at the things that determine whether a house is pleasant to live in — daylight, spatial quality, climate responsiveness. The gap between what AI optimizes for (room count, square footage, adjacency) and what makes a house feel like a home (morning light in the kitchen, privacy gradients, circulation logic) is measurable and significant.

## Kill Test
Does this help someone building or buying a home? YES — directly addresses whether to use AI floor plan tools, what they're good for, what they miss, and how much money you actually save vs. what you lose in design quality.

## Primary Sources

### 1. Cambridge AI EDAM Study (2025)
- **Title:** "Evaluating daylight performance of AI-generated housing plans via diffusion models and climate-based simulation"
- **Published in:** AI EDAM (Cambridge University Press)
- **Method:** Generated floor plans with ChatGPT, Microsoft Copilot, and LookX AI across 5 climate zones (Jakarta, Alice Springs, Madrid, Winnipeg, Tromsø). Reconstructed in AutoCAD. Ran daylight simulations with Velux Daylight Visualizer.
- **Key findings:**
  - Only 8 of 31 initial AI-generated plans (26%) were architecturally usable enough for simulation
  - LookX AI (marketed as architecture-specific) couldn't render windows at all — excluded entirely
  - "None of the models consistently integrated solar orientation or seasonal lighting considerations"
  - Climate-responsive logic was "inconsistent and largely superficial"
  - Tromsø plan: only 9.6 lux in living room in winter (recommended minimum: 300 lux) — 97% below standard
  - Copilot's Winnipeg plan: 1740.6 lux in summer living room (massive overexposure, no passive shading logic)
  - Even ChatGPT's best plans "required substantial postprocessing for standardization and simulation compatibility"
  - Conclusion: "generative intent alone does not guarantee environmental suitability"
  - "Can machines think like architects, or do they merely draw like them?"

### 2. Maket AI — CEO Patrick Murphy Claim
- **Source:** Maket.ai blog/product page (2026)
- AI does "70 to 75 percent of the work" — CEO Patrick Murphy
- Remaining 25-30%: structural review, code compliance, engineering
- Maket is first residential tool offering "agentic editing" (conversational floor plan changes) as of early 2026
- Agentic editing limitations (from Maket's own documentation):
  - No furniture placement (manual only)
  - Not construction-ready — "schematic floor plan, not a permit set"
  - No style/materials decisions
  - Residential only
  - "One change at a time" recommended — long prompts give unpredictable results
  - "Vague, open-ended prompts like 'reorganize this for better flow' can give unpredictable results because the AI has to guess what 'better' means to you"

### 3. MDPI Metrics Study (Buildings, 2025)
- **Title:** "Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans"
- "None of the existing metrics are effective in evaluating generated residential floor plans"
- Standard image metrics (FID, PSNR, SSIM) "perform poorly in capturing the structural and spatial characteristics unique to residential floor plans"
- Park et al. found "significant differences between the designs of the current generative models and those of the human experts through statistical tests"
- No existing metric can assess whether a generated layout is actually compliant with specific design requirements

### 4. ANZAScA Evaluation Study (2025)
- CNN classifies layout "rationality" (spatial adjacency + circulation patterns) at only 82.28% accuracy
- Uses cGAN to predict daylight maps 90% faster than physics-based simulation (0.5s vs traditional)
- But this is evaluation speed, not design quality — the AI-generated plans themselves still need checking

### 5. CorbuAI/MDPI Study (2025)
- Identified "functional-aesthetic decoupling" — AI tools good at either spatial logic OR visual quality, but not both
- "Architectural hallucinations" — generated forms that lack functional viability
- Western-biased training data: most datasets use Western residential typologies

### 6. Cost Comparison Data (Angi, 2026)
- Architect: $100-$350/hour (Angi 2026 data)
- Typical architect project cost: $2,189-$11,557
- Certified draftsperson: $35-$150/hour
- Floor plan cost by size:
  - 1,000 sqft: $1,000-$5,000 (architect) / $500-$2,500 (draftsperson)
  - 2,000 sqft: $2,000-$10,000 (architect) / $1,000-$5,000 (draftsperson)
- Full-service architect: 5-15% of construction cost ($20K-$60K on a $400K build)
- AI floor plan tools: $20-$35/month (Maket, Getfloorplan, others)

### 7. Nashville Case Study (Coohom, 2025-2026)
- Homeowner used AI draft + hourly architect consult for 1,500 sqft bungalow
- Total design + stamp fee: $5,600 — half what neighbor paid for full-service
- AI clarified needs, avoided change orders
- Architect focused only on code compliance, flood zone engineering, ADA bathrooms

### 8. Coursiv Review (2026) — 17 AI tools for architects
- 8 workflow stages now have AI tools
- Tools grouped: concept design, floor plans, rendering, 3D modeling, site analysis, space planning, project management, BIM/drafting
- Professional tools vs. consumer tools distinction important

## Novel Contribution
Cost-quality tradeoff calculation: If AI handles 70-75% of schematic work at $20-35/month, and an architect's schematic phase is ~15-20% of their total fee, the savings are roughly $1,000-4,000 on a typical residential project. But the Cambridge study shows that 74% of AI-generated plans aren't even usable, and the ones that are still need substantial reworking for environmental performance. The real question isn't whether AI saves money on floor plans — it clearly does. The question is whether the money you save on exploration is worth the daylight, spatial quality, and climate responsiveness you lose by not having an architect involved from the start.

## Strongest Counterargument
The Nashville case study actually validates the hybrid approach — AI for exploration, architect for engineering and code. This isn't AI replacing architects; it's AI replacing the expensive "what do I want?" phase while preserving the professional "can I build it?" phase. For simple residential projects (rectangular lots, single-story, standard programs), AI floor plans might be entirely adequate for the schematic phase.
