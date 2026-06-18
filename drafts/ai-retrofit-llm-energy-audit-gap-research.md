# Research Notes: AI-Trained Retrofit Recommendations vs. Professional Energy Audits

## Angle
A fine-tuned LLM trained on 536,416 simulated US homes can identify the optimal energy retrofit for a specific house 98.9% of the time. A professional energy audit costs $200-$600, takes 2-4 weeks to schedule, and covers the same ground. What does the AI get right, what does it miss, and what does this mean for a homeowner staring at a $2,000/year energy bill?

## Journalist
Priya Greenwood — sustainability, evidence-based, connects energy data to real utility bills

## Primary Sources

### 1. Shu et al. (2026) — arXiv:2602.20181
"Closing the Expertise Gap in Residential Building Energy Retrofits: A Domain-Specific LLM for Informed Decision-Making"
- Authors: Lei Shu, Armin Yeganeh, Sinem Mollaoglu, Jiayu Zhou, Dong Zhao
- Published: February 19, 2026
- Fine-tuned LLM using LoRA (Low-Rank Adaptation)
- Training data: 536,416 US residential building prototypes from DOE ResStock
- 9 major retrofit categories
- Performance: Identifies optimal retrofit for CO2 reduction in top-3 recommendations 98.9% of the time
- Shortest discounted payback period: correct in top-3 93.3% of the time
- Fine-tuning yields order-of-magnitude reduction in CO2 prediction error
- Works even with incomplete input (homeowner doesn't know all details)
- Uses "homeowner-accessible descriptions of basic dwelling characteristics"

### 2. DOE ResStock (National Laboratory of the Rockies / NREL)
- DOE funding: $500,000 project (2022-2024 term)
- 550,000+ residential building models representing entire US housing stock
- Simulated using EnergyPlus and OpenStudio
- Covers dwelling characteristics: insulation level, foundation type, wall construction
- Household characteristics: setpoint properties, occupant info, household income
- Used by states, municipalities, utilities, manufacturers
- Data available at catalog.data.gov

### 3. Penaka (Umeå University, 2026)
Santhan Reddy Penaka, doctoral dissertation: "Heterogeneity-Aware Building Stock Modelling for Urban Energy Transitions"
- Published: April 2026
- Case study: 81 building clusters in 3 Swedish cities (Linköping, Lund, Umeå)
- Key finding: Most effective renovation measures vary considerably even between neighboring buildings
- Behavioral assumptions skew energy-use calculations by up to 15%
- "Generic renovation plans risk overlooking this variation"
- Developed interactive 3D visualization for homeowners

### 4. IRS Section 25C — Energy Efficient Home Improvement Credit
- Home energy audits: 30% credit, capped at $150
- Must be conducted by DOE-certified qualified home energy auditor
- Written report required with energy/cost savings estimates
- $500 audit × 30% = $150 credit (the cap)

### 5. Professional Energy Audit Cost Data (2026)
- Thumbtack: National average $367
- Angi: Average $440, range $150-$900
- Fixr: $200-$600 typical, $0.10-$0.50/sqft
- Standard audit (Level 2): $250-$650, includes blower door + infrared
- Takes 2-3 hours onsite, 2+ weeks to schedule
- Americans spend avg $2,000/yr on home energy (DOE)
- $200-$400/year wasted on inefficiency (DOE)

### 6. Sweden behavioral research
- Simplified behavioral assumptions cause 15% error
- Behavioral changes alone could reduce peak loads by 6-17%

## Original Contribution
Cost-accessibility analysis: If the LLM were deployed as a free tool (ResStock data is public, model is described in an open paper), the per-query cost would be pennies. Compare:
- 130M US households × $400 avg audit = $52B total cost to audit every home
- IRA 25C credit covers max $150 of that — still $250+ out-of-pocket per household
- LLM approach: essentially free at scale, could pre-screen which homes benefit most from a professional follow-up
- Smart triage: Use AI to identify the 30-40% of homes where the optimal retrofit is obvious (e.g., uninsulated 1960s ranch in Minnesota = insulate), reserve human audits for the 15-20% where occupant behavior and site-specific factors make the answer ambiguous

## Strongest Counterargument
The LLM has never been inside your house. It can't spot:
- The weatherstripping gap your dog destroyed
- Ductwork assembled by the lowest bidder
- The south-facing windows now shaded by a neighbor's tree
- Carbon monoxide from a cracked heat exchanger (safety issue, not energy)
- The renovation your previous owner did without permits
A $400 human audit catches what the model can't simulate. And the model-to-reality gap is well-documented: our previous article showed modeled savings averaged 25% but actual measured savings were 7%.

## Limitations
- LLM trained on ResStock simulations, not measured post-retrofit outcomes
- Performance gap between simulated and actual energy savings (established in prior research)
- 9 retrofit categories may miss emerging technologies
- US-only training data
- Preprint, not peer-reviewed yet
- No deployed consumer tool — purely academic at this stage
