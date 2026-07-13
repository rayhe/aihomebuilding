# Research: AI Design Renders vs. Buildable Reality

## Angle
The gap between what AI design tools generate and what can actually be built. Homeowners show up to architects/contractors with stunning AI renders that violate structural logic, building codes, and physics. The expectation gap costs real money.

## Journalist
Elena Vasquez — Architecture & Design. Sees buildings as art first, technology second. Skeptical of tools that flatten design into optimization.

## Key Sources

### Practitioner Evidence

1. **Reagan Langeveld, Symphony Construction (NZ)**
   - Calls it "renovation optimism bias"
   - "These tools skip the messy parts. They do not know what is structurally possible and don't factor in how the plumbing and ventilation will actually run through a house."
   - "AI can generate a perfect room, but it cannot tell you what's inside the walls or what your local council thinks."
   - "It has no understanding of load paths, moisture management or plumbing locations"
   - "Homeowners come to us with beautiful digital images that look achievable at first glance, but once you strip back the layers, you find structural conflicts, missing drainage, or design elements that are impossible to deliver safely."
   - Source: buildandrenovate.co.nz

2. **Ariana Anderson, ARIID Group (designer/builder)**
   - Uses AI daily for back-end work, color variations, calculations
   - "The AI rooms that look the best are often the ones that could never be built"
   - "Use AI for the feeling, not the floor plan"
   - "What I don't do is generate a picture out of thin air and try to build from it. That's the part people assume AI can do — and it's the one thing it can't."
   - Source: YouTube (Ariana Designs & Interiors)

3. **William Cohen, AIA, Cohen Design/Build Architects (Massapequa, NY)**
   - "AI handles the easiest 15% of the process. The other 85% is where projects succeed or fail."
   - The 85%: zoning, structural coordination, MEP coordination, permits, budget management, managing client expectations/emotions
   - "AI doesn't navigate people. AI doesn't fight through the system. AI doesn't take responsibility."
   - Source: LinkedIn

4. **SolidRender (professional rendering firm)**
   - "The walls in an AI floor plan are pixels, not assemblies with R-values, fire ratings, and acoustic performance specifications."
   - "A general contractor cannot build from an AI generated floor plan because there is no structural grid, no dimension chains, no detail references, and no material schedules."
   - Source: solidrender.com

### Academic/Technical Data

5. **RFP-A Study (MDPI Buildings, 2025)**
   - Evaluated 6 AI floor plan generation models
   - Only HouseDiffusion and FloorplanDiffusion achieved >90% accuracy
   - Other 4 models scored below or around 60%
   - "None of the existing metrics are effective in evaluating generated residential floor plans"
   - Source: Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans

6. **HouseMind (arxiv, 2025)**
   - State-of-the-art: ~71% Micro IoU for AI floor plan generation
   - Editing precision remains low for most models
   - Best model (HouseMind) still only achieves 0.71 IoU
   - Source: arxiv.org

7. **Aditya Girish experiment (Medium, Mar 2026)**
   - Attempted AI floor plan → 3D render pipeline
   - Peak accuracy: 85% on well-structured plans
   - "Wildly inconsistent run-to-run" — same floor plan would produce good then broken renders
   - "Inconsistent, expensive, and 85% accurate is not a product"
   - 15% error was always directional: rooms flipped, corridors mirrored
   - Source: Medium

### Market Context

8. **Acorn Finance 2026:** 71% of homeowners use or plan to use AI for design
9. **Clever Real Estate:** 78% of homeowners exceed renovation budgets (n=1,000)
10. **AI design tools:** $10-39/mo (RoomGPT, Interior AI, Planner 5D) vs. professional architect $200-300/hr
11. **AI interior design market:** $3.3B (2025), 20.9% CAGR to $15B by 2033 (Grand View Research)

### Counterargument / What's Actually Working

12. **Higharc ($53M Series B, Durham NC)**
    - AI that constrains output to buildable homes
    - Produces BIM models + construction docs + cost estimates from sketches
    - Understands room types, generates structural elements
    - BUT: built for production homebuilders, not consumers
    - CEO Marc Minor: "designers waste weeks or months in decades-old CAD software just to get to a usable 3D model"
    - Key distinction: Higharc treats buildings like language (structured, constrained) vs. consumer tools treating them like images (unconstrained, pretty)

## Novel Contribution
Cross-referencing academic accuracy data with practitioner cost experience: if AI floor plans achieve 60-71% spatial accuracy (IoU), what does the remaining 29-40% error cost when someone tries to build from one? A 30% spatial error in a $200K renovation could mean $15-40K in redesign, rework, and code violations — more than the architect's fee would have been.

## Kill Test
Does this help someone building or buying a home? YES — warns homeowners about the specific ways AI renders mislead, gives a framework for evaluating whether an AI design is buildable, and points to tools (like Higharc) that actually try to bridge the gap.
