# Research Notes: LLM Retrofit Advice Payback Gap

## Angle
Homeowners are increasingly asking ChatGPT for home energy retrofit advice. An NSF-funded study tested 6 major LLMs against physics-based simulations on 400 real US homes. The models could tell you which retrofit would cut carbon most — but when asked which would pay for itself fastest, they got it right barely 1 in 10 times at Top-1 accuracy.

## Journalist
Priya Greenwood (Sustainability & Green Building)

## Primary Source
- **Study:** "Large Language Models for Building Energy Retrofit Decision-Making: Technical and Sociotechnical Evaluations"
- **Authors:** L. Shu, A. Yun, D. Zhao
- **Published in:** Buildings (MDPI), 2025
- **Funding:** U.S. National Science Foundation, Grant #2046374
- **DOI:** Referenced via MDPI: https://www.mdpi.com/2075-5309/15/22/4081
- **Dataset:** ResStock 2024.2 from NREL (U.S. National Renewable Energy Laboratory), 550,000 representative residential samples. Study used 400 homes via uniform stratified sampling across 49 US states and 3 housing types.

## Key Data Points

### Models Tested (6 LLMs, no domain fine-tuning)
1. ChatGPT o3 (OpenAI)
2. DeepSeek R1
3. Grok 3 (xAI)
4. Gemini 2.0 (Google)
5. Llama 3.2 (Meta)
6. Claude 3.7 (Anthropic)

### CO2 Reduction Accuracy (technical optimization — strong)
- **Overall Top-1:** 39.9%
- **Overall Top-3:** 70.1%
- **Overall Top-5:** 79.9%
- Best Top-1: Gemini 2.0 at 54.5%
- Best Top-5: ChatGPT o3 at 92.8%
- Worst Top-1: Grok 3 at 25.5%
- Worst Top-5: DeepSeek R1 at 68.5%

### Payback Period Accuracy (economic optimization — terrible)
- **Overall Top-1:** 11.0%
- **Overall Top-3:** 28.0%
- **Overall Top-5:** 34.8%
- Best Top-1: DeepSeek R1 at 14.3%
- Best Top-5: Gemini 2.0 at 52.5%
- Worst Top-1: Gemini 2.0 at 6.5% (ironically best at CO2)
- Worst Top-5: Grok 3 at 19.5%

### Failure Modes
1. **Lowest cost ≠ shortest payback:** Models consistently assumed lowest upfront investment = shortest payback period, ignoring energy savings magnitude
2. **Usage level ignored:** All models rated "usage level" at ~2.5% importance but NEVER incorporated it in reasoning
3. **Oversimplified rules:** Assumed fossil fuel → electric is always better, without evaluating performance tradeoffs
4. **Selection agreement:** Negative Fleiss' Kappa across models (worse than random chance)
5. **Prompt sensitivity:** Just adding "considering both initial investment and energy cost savings" changed reasoning substantially

### 16 Retrofit Packages Tested
Varied across 3 axes: heat pump type/efficiency, infiltration/insulation upgrades, appliance electrification. Costs from NREL's National Residential Efficiency Measures (NREM) Database.

### Benchmark
EnergyPlus physics-based simulations — dynamically solves heat and mass balance equations for each thermal zone.

## Kill Test
**Does this help someone building or buying a home?** YES — if you're a homeowner considering a $10K-$40K energy retrofit and you ask ChatGPT for advice, this study says you'll likely get good environmental guidance but terrible financial guidance. Actionable: use LLM for carbon reduction shortlisting, but don't trust it on payback period. Get a proper energy audit for ROI calculations.

## Supporting Context
- NREL ResStock: 550,000 representative US homes, 389 parameters per building
- Study covered single-family, multi-family, manufactured homes
- Construction vintages from pre-1940 to 2010
- Floor areas: 25-519 m²
- 49 US states (excluding Hawaii)

## Original Contribution (for article)
Calculate the "advice gap cost" — if a homeowner follows LLM payback advice (89% chance of being wrong at Top-1), what's the potential financial penalty vs. following the actual optimal payback retrofit? Can estimate from typical retrofit cost differentials.

## Strongest Counterargument
LLMs aren't meant to be used without human expertise. The study tested "out of the box" performance without fine-tuning, RAG, or domain grounding. In practice, a homeowner might iterate with the model, provide more context, or use it alongside professional advice. The study's prompt design, while standardized, may not represent how people actually use chatbots.

## Limitations
- Study used national average costs, not regional variation (big deal — retrofit costs vary 30-50% by region)
- No occupant preference modeling
- No comparison against traditional engineering standards directly
- Dataset from 2024 ResStock — housing stock representation may lag actual building practices
- Models tested are from early 2025 — newer versions may perform differently
