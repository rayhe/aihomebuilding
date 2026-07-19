# Research Notes: AI Floor Plan Generators and Solar Orientation Blindness

## Article #574 — Elena Vasquez (Architecture & Design)

### Thesis
AI floor plan generators — Maket (1M+ users), Planner 5D, RoomGPT, Homestyler, Floorplanner, GetFloorPlan AI — produce layouts optimized for spatial flow and aesthetics but none consistently account for solar orientation, climate zone, or fenestration placement relative to the sun. The Cambridge University study (AI EDAM journal) tested ChatGPT, Copilot, and LookX across 5 climate zones and found "none of the models consistently integrated solar orientation or seasonal lighting considerations." Meanwhile, building science shows window orientation can produce a 30% cooling energy differential.

### Key Sources

**1. Cambridge University — AI EDAM Journal (Meselhy & Almalkawi)**
- Tested ChatGPT, Microsoft Copilot, and LookX for residential floor plan generation across 5 climate zones
- 31 initial plans generated, only 8 valid outputs (5 ChatGPT, 3 Copilot); LookX excluded entirely — couldn't even render window openings
- Simulated daylight using Velux Daylight Visualizer on equinox and solstice dates
- Finding: "None of the models consistently integrated solar orientation or seasonal lighting considerations"
- "A gap between generative representation and environmental logic"
- ChatGPT plans showed "higher spatial clarity and more balanced daylight performance" but still lacked climate-responsive logic
- Quote: "Without incorporating these factors, a design optimized for one climate may not be directly applicable elsewhere"

**2. MDPI Energy Study — Window Orientation Impact (Hot Climate)**
- Tested 16 configurations: N/S/E/W orientations at 15%, 40%, 65%, 80% WWR
- At 80% WWR:
  - North-facing: 123,787 KBtu cooling
  - West-facing: 160,858 KBtu cooling
  - Difference: 37,071 KBtu = ~30% more cooling for west vs north
- Even at 40% WWR:
  - North: 118,898 KBtu
  - West: 136,620 KBtu  
  - 15% more cooling for west vs north
- Shows orientation effect amplifies with window area

**3. BLAST/LBNL Study — 25 US Climates**
- Prototype residential building tested at different orientations across 25 US climates
- "In all climates, when the more extensively glazed exposure is oriented to south, total loads are significantly lower than those in the same building oriented east or west"
- "North orientation also produces lower total loads than east or west orientations in the southern two-thirds of the U.S."
- Confirmed: east/west orientation is worst for total energy loads in nearly all US locations

**4. DOE / This Old House — Energy Cost Data**
- Average US annual home energy: $2,000 (DOE)
- Heating & cooling: 43% = ~$860/yr
- Windows affect ~20% of HVAC load
- Window-attributable annual HVAC cost: ~$172
- With 30% orientation penalty on cooling-heavy portion, the gap could be $200-$400/yr in hot climates over life of home

**5. AI Floor Plan Tool Landscape (illustrarch, AI Tools Explorer)**
- Top 8 AI floor plan generators evaluated
- Maket.ai: 1M+ registered users, generates plans from natural language
- Feature columns tracked: Code Compliance, Export Formats, Free Tier
- NONE list "solar orientation," "daylight optimization," or "climate-responsive placement" as a feature
- Only Autodesk Forma includes "site massing + analysis" (partial environmental)
- Finch3D includes CO2 optimization but for multi-family
- Consumer tools (RoomGPT, Homestyler, Planner 5D) are purely aesthetic — furniture placement and style rendering

**6. ArchDaily / Ulises Design Studio — AI Homogenization**
- Prompted Midjourney for "contemporary house" across 15 countries
- Result: "images with very similar language and few variations in terms of materials and context"
- "This homogenization occurs due to the predominant architectural styles in the database"
- Training data bias: AI perceives most residences as "two floors, orthogonal lines, large glass openings"
- When refined with regional prompts, diversity improved — but default = climate-blind

**7. Hu et al. — AI + GAN Daylight Prediction**
- Developed workflow: diffusion model generates floor plans, GAN predicts daylight performance
- GAN reproduced daylight simulation within ~5% error, 200× faster than traditional Radiance
- Shows the technology EXISTS to integrate performance into AI design — it's just not in consumer tools

### Original Contribution
1. Dollar-cost calculation of orientation-blind AI design: Using MDPI 30% cooling differential + DOE energy cost data, estimate annual cost penalty for west-facing vs south-facing glazing orientation across US climate zones
2. Feature audit of top 8 AI floor plan tools — none include orientation or climate as an input parameter
3. The "pretty but dark" problem: AI generates photorealistic renderings that look stunning in synthetic lighting, masking the fact that the actual plan would produce underlit rooms for 6 months of the year

### Headline Options
- "Your AI Floor Plan Put the Living Room Windows Facing West. Your Cooling Bill Noticed."
- "The AI Designed a Beautiful House. The Sun Was in the Wrong Place."
- "One Million People Used an AI to Draw Their Floor Plan. None of Them Were Asked Which Way Their Lot Faces."

### Strongest Counterargument
Architects already know orientation matters — these AI tools are for inspiration, not construction documents. Nobody builds directly from a Maket plan. But: (1) the tools are marketed as "build-ready" (illustrarch calls Maket plans "build-ready residential layouts"), (2) Maket has 1M+ users, many of whom are homeowners without architectural training, and (3) even professional architects report using AI-generated plans as starting points that influence downstream decisions. A bad starting orientation is harder to fix than a bad room size.

### Limitations
- Cambridge study tested only 3 AI tools (ChatGPT, Copilot, LookX), none of which are purpose-built floor plan generators
- The MDPI energy data is from a hot climate; orientation impact is less dramatic in temperate zones
- No comprehensive audit exists of exactly how many homeowners build directly from AI-generated plans
- Dollar cost estimates depend on climate zone, utility rates, and actual WWR — ranges, not point estimates
