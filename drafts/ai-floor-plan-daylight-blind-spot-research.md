# Research: AI Floor Plan Daylight Blind Spot
## Journalist: Elena Vasquez (Architecture & Design)

### Core Thesis
Every consumer AI floor plan generator produces layouts blind to solar orientation and daylight. Buyers rank natural light above square footage. Building codes now require minimum glazing. Researchers have proven daylight prediction from a 2D plan takes 0.5 seconds. The technology exists in labs. It doesn't exist in any product a homeowner can use.

### Primary Sources

**1. Redfin Survey (May 2026) — "U.S. Residents Prioritize Sunlight Over Home Size"**
- 44% of US residents would choose a smaller home with more access to natural light over a larger home
- 11% say sunlight is non-negotiable, one of the most important features
- 46% say sunlight is very important; only 3% say not important at all
- 53% of those who value light cite mood/mental well-being as top reason
- 69% say sunlight impacts how satisfied they are with their living situation (31% say "a lot")
- Baby Boomers: 54% would choose smaller home with more sunlight
- Gen Z/Millennials: 35% would choose larger home even without natural light
- Agent quote: "I have buyers who walk into a home that checks every box online and walk right out after making it past the entryway because of low light" — Cassia Bourne, Redfin Denver

**2. Redfin Sunscore (launched May 2026)**
- Property-level sunlight rating 0-100 based on Shadowmap 3D modeling
- Factors: home 3D shape, surrounding buildings/trees/terrain, sun position throughout day, seasonal changes
- Available on Redfin listing pages; conversational search coming later in 2026
- Shows buyer demand is real enough that a major platform invested in building it

**3. Hu et al. (2024) — AI Diffusion Model + GAN for Daylight Performance (Springer)**
- Diffusion model generates residential floor plans; GAN predicts daylight autonomy
- Within ~5% error of ground-truth Radiance simulations
- 200× faster than traditional CBDM iteration
- "AI-generated designs can be quantitatively assessed for daylight even at an early stage"

**4. Guo et al. (ANZAScA 2025) — cGAN + CNN for AI Floor Plan Evaluation**
- cGAN trained on 260 AI-generated plans generates daylight distribution maps in 0.5 seconds
- 90% faster than Honeybee physics simulation
- SSIM = 0.93 (high visual fidelity), FID = 25.56
- CNN classifies layout rationality with 82.28% accuracy
- "empowers architects to instantly assess both environmental and usability criteria during early-stage design"

**5. ICC Building Code Changes (2025 cycle, adopted for 2027 codes)**
- Proposal G143-25: habitable spaces for living/sleeping must have natural light via exterior glazed openings
- Minimum net glazed area: 8% of floor area
- Closes loophole that allowed artificial lighting only — no natural light at all
- "That just makes me shudder to think of my kids living in a space like that" — Tom Culp, Birch Point Consulting

**6. Global Wellness Institute**
- Wellness real estate is $548 billion sector globally
- Wellness homes report 10-25% higher resale values; commercial 4.5-7.5% rental premiums
- America at Home Study (6,000 consumers): wellness is #1 purchase motivator
- Natural light specifically cited as key wellness factor

**7. Wang et al. (2024) — cGAN Daylight Prediction**
- cGAN predicts daylighting performance from room parameters (width, depth, ceiling height, window locations)
- 0.3 seconds vs 15 seconds for conventional CBDM — 50× speedup
- High accuracy demonstrated

**8. Cambridge Core Study — AI-Generated Housing Plans Daylight Assessment**
- ChatGPT-generated plans showed inconsistent daylighting:
  - Jakarta plan: 900+ lux in living area (potential glare/over-illumination)
  - Copilot plans: as low as 306.1 lux (underperformance) in living rooms
  - Some kitchens at 1,347.8 lux due to "exaggerated opening placements"
- "Without incorporating these factors, a design optimized for one climate may not be directly applicable elsewhere"

### The Gap
- Consumer AI floor plan tools (Planner 5D, RoomGPT, HomeDesigns AI, Maket, Spacely AI, DreamPlan, etc.) generate layouts without orientation input and without daylight simulation
- Commercial tools (cove.tool, Sefaira, Ladybug/Honeybee) exist for architects but require 3D models and professional expertise
- The 0.5-second cGAN prediction from a 2D floor plan has not been productized
- No consumer tool asks "which direction does your lot face?" before generating a plan

### Kill Test
Does this help someone building or buying a home?
YES: Before you pay for an AI-generated floor plan, understand that it has never been tested for daylight. Before breaking ground, know that orientation determines whether your living room will be bright or dim, and your energy bills prove it. Specific advice: ask for north arrow on any AI-generated plan, check orientation against lot survey, consider Redfin Sunscore when buying existing homes.

### Actionable Takeaways
1. Before using any AI floor plan tool: determine your lot's orientation (compass app, lot survey, or Google Maps)
2. South-facing living spaces get most consistent daylight in Northern Hemisphere; north-facing can be dim year-round
3. When buying: check Redfin Sunscore (free, available now on Redfin listings)
4. When designing: commercial tools like Ladybug (free Grasshopper plugin) can simulate daylight but require Rhino/3D modeling
5. Red flag: any AI-generated plan that doesn't ask about lot orientation before placing rooms
