# Research: AI Home Design Tools vs. Building Code Reality

## Angle
Consumer AI home design/renovation tools ($7–50/month) generate gorgeous floor plans and room redesigns in seconds. None of them check whether the output is buildable per IRC. The tools explicitly disclaim code compliance while marketing themselves as a $30 replacement for $2,000+ professional design consultations. When a homeowner builds from one of these plans and fails inspection, the rework costs $15,000–$50,000.

## Kill Test
Does this help someone building or buying a home? YES — anyone considering using Maket, Planner 5D, Remodeled AI, or similar tools for a renovation project needs to know what these tools don't check.

## Journalist
Elena Vasquez — Architecture & Design. Elegant, skeptical of tools that flatten design into optimization.

## Primary Sources

### 1. IRC 2021 Code Requirements (iccsafe.org)
- R304.1: Habitable rooms min 70 sq ft
- R304.2: Habitable rooms min 7 ft in any horizontal dimension (except kitchens)
- R305.1: Ceiling height min 7 ft for habitable space
- R306: Kitchen must have sink; dwelling must have water closet, lavatory, bathtub/shower
- R311: Hallways min 3 ft wide; stairways min 36 in wide
- R310: Emergency escape/rescue openings (egress windows) required for sleeping rooms and basements — min 5.7 sq ft net clear opening, min 20 in wide, min 24 in high, max 44 in sill height
- Kitchen clearance: 3 ft between counter fronts/appliances

### 2. Consumer AI Design Tool Landscape (2026)
From Maket blog, propertyupdate.com, fahimai.com, aihomedesign.com:

| Tool | Price | What It Does | Code Compliance? |
|------|-------|--------------|-----------------|
| Maket | Free/$20-50/mo | Floor plans from text, 3D viz | "Most require review by a licensed professional before construction" |
| Remodeled AI | $7/mo | Photo-based room redesign | No structural analysis |
| Planner 5D | Free/$10/mo | 2D/3D floor planning | No code checking |
| OPPEIN CAXA Home | Enterprise | Full furnishing design | Connected to product catalog, not codes |
| Houzz | Free/varies | Design ideas + pro directory | Visualization only |
| AI HomeDesign | $29/mo | Virtual staging for realtors | Staging only, not design |
| Spacely AI | $19/mo | Pro 3D renders | Rendering, not compliance |
| REimagine Home | $12/mo | Interior + exterior staging | No structural checks |

Key finding: NONE of these tools check generated layouts against any building code. Not IRC, not IBC, not local amendments.

### 3. NAHB AI Adoption Data (2025 survey, via Homes.com)
- ~50% of single-family builders say they "use AI"
- 1 in 5 use it ONLY for marketing copy
- <5% use it for actual building functions (estimating, scheduling)
- 1% use AI to operate equipment
- HUD offering $10M awards for robotics/AI in factory housing

### 4. Cost Analysis (from propertyupdate.com)
Traditional Interior Design Route:
- Consultation fee: $200–$500
- Design fee per room: $1,500–$3,000
- Revisions: 2–3 rounds
- Timeline: 4–6 weeks
- Total (design only): $2,000+

AI-Assisted Route:
- Subscription: $20–$30/month
- Design fee: $0
- Revisions: Unlimited
- Timeline: 4–6 hours
- Total: ~$30

The gap: $1,970 savings sounds great until you build something that fails inspection.

### 5. Cost of Code Violations / Failed Inspections (to research further)
- Removing/rebuilding a non-compliant wall: $5,000–$15,000
- Moving plumbing that was designed for wrong location: $3,000–$8,000
- Widening a hallway after framing: $8,000–$20,000
- Full plan rejection and redesign: $10,000–$30,000
- Permit delays from failed inspection: 4–12 weeks

### 6. Common IRC Violations in AI-Generated Plans
Based on the IRC minimums and typical AI floor plan output patterns:
- Hallways narrower than 3 ft (AI optimizes for total room area, squeezing corridors)
- Bedrooms below 70 sq ft or below 7 ft in one dimension
- Missing egress windows in sleeping rooms (AI doesn't model window code requirements)
- Kitchen clearance below 3 ft between counters
- Stairway width below 36 in
- Ceiling height assumptions (AI generates 2D plans, ignores structural depth)

### 7. MDPI Paper: Evaluating AI-Generated Floor Plans (2026)
- Evaluated 6 generative models for residential floor plans
- Only HouseDiffusion and FloorplanDiffusion achieved >90% accuracy in room number compliance
- Existing evaluation metrics don't correspond well with actual generation accuracy
- No model was evaluated against building code compliance — only against geometric/aesthetic metrics

## Original Contribution
1. First systematic cross-reference of consumer AI design tool capabilities against specific IRC sections they fail to check
2. Cost comparison: $30 tool vs $2,000 designer vs $15,000–$50,000 rework when it fails inspection
3. The "structural blindness" gap: beautiful renders that suggest removing walls with zero structural analysis

## Strongest Counterargument
These tools explicitly say they're for "exploration" and "early concepts," not construction documents. They're meant to help homeowners arrive at contractor meetings with clearer ideas, not replace architects. The professional review step is supposed to catch code issues.

Counter-counter: The marketing ($7/mo vs $2,000 designer, "unlimited revisions," "see your renovation before spending") strongly implies these tools can replace professional design. And the median homeowner doesn't know what IRC R304 says. They see a beautiful 3D render of their new kitchen and assume it's buildable.

## Limitations
- Cannot directly test all 8 tools' output against IRC (would need actual accounts + generated plans)
- Rework cost estimates are ranges, not verified project-specific data
- Local code amendments may be stricter than IRC minimums
- Some tools may have added code-checking features not reflected in their public documentation
