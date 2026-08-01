# Research Notes: AI Energy Audit Replacement — Lab Gap

## Angle
The federal tax credit for home energy audits ($150 under §25C) was repealed by the One Big Beautiful Bill Act, effective Dec 31, 2025. A home energy audit still costs $437 on average. Meanwhile, researchers at Michigan State University have built a domain-specific LLM fine-tuned on 536,416 U.S. residential building prototypes that identifies the optimal energy retrofit for CO2 reduction in its top-3 recommendations 98.9% of the time — and the most cost-effective retrofit 93.3% of the time. But no homeowner can access it. Generic LLMs (ChatGPT, Gemini, Grok, Claude, DeepSeek, Llama) struggle to identify which retrofit delivers the best result most quickly and at the lowest cost.

## Kill Test
Does this help someone building or buying a home? YES — tells homeowners whether to trust AI for retrofit decisions, what the actual accuracy gap is between fine-tuned and generic AI, and what's at stake now that the tax credit is gone.

## Journalist
**Priya Greenwood** — sustainability, energy, utility bills. This is her beat.

## Primary Sources

### 1. MSU Fine-Tuned LLM Study (Feb 2026)
- **Paper:** "Closing the Expertise Gap in Residential Building Energy Retrofits: A Domain-Specific LLM for Informed Decision-Making" (arXiv:2602.20181)
- **Authors:** Lei Shu, Armin Yeganeh, Sinem Mollaoglu, Jiayu Zhou, Dong Zhao (Michigan State University)
- **Method:** Fine-tuned LLM using LoRA on physics-based energy simulations and techno-economic calculations from 536,416 U.S. residential building prototypes (ResStock 2024.2, NREL)
- **Nine retrofit categories** evaluated
- **Results:**
  - Optimal retrofit for CO2 reduction in top-3: **98.9%**
  - Shortest discounted payback period in top-3: **93.3%**
  - Order-of-magnitude reduction in CO2 prediction error vs. generic LLMs
  - Multi-fold reductions for energy use and retrofit cost predictions
  - Maintains performance under **incomplete input** (homeowner doesn't know every detail)
- **Key insight:** Uses "homeowner-accessible descriptions of basic dwelling characteristics" — not professional-grade data

### 2. MSU Generic LLM Evaluation Study (2026)
- **Paper:** "Large Language Models for Building Energy Retrofit Decision-Making: Technical and Sociotechnical Evaluations" (MDPI Buildings)
- **LLMs tested:** ChatGPT o3, DeepSeek R1, Grok 3, Gemini 2.0, Llama 3.2, Claude 3.7
- **No fine-tuning** — evaluated out-of-the-box capabilities
- **Data source:** ResStock 2024.2, 49 U.S. states
- **Finding:** LLMs provide effective retrofit options but struggle to identify which delivers the **best result most quickly and at the lowest cost**
- **Evaluated on:** accuracy, consistency, sensitivity, reasoning
- Source: Insulation Institute summary

### 3. Data2BEM (Cambridge, 2026)
- **Paper:** "Automated building energy modeling for energy retrofits using a large language model-based multi-agent framework" (PMC/iScience)
- **What:** Multi-agent LLM framework that parses architectural drawings, specs, and sensor data to auto-generate and calibrate building energy simulations
- **Result:** Reduced modeling time by >90% (48 min vs. 8-32 hours)
- **Accuracy:** Met ASHRAE Guideline 14 calibration benchmarks
- **Found:** Heat pump electrification (ASHP) cuts annual energy costs by 44% and carbon tax ~5-fold
- **Limitation:** Applied to commercial building — residential adaptation needed

### 4. Federal Tax Credit Repeal (OBBBA, July 4, 2025)
- **One Big Beautiful Bill Act** signed July 4, 2025
- **§25C (Energy Efficient Home Improvement Credit):** Repealed after Dec 31, 2025
  - Previously covered up to $150 for home energy audits
  - Also covered up to $2,000/year for qualified heat pumps, $1,200 for insulation/windows
- **§25D (Residential Clean Energy Credit):** Repealed after Dec 31, 2025
  - Previously covered 30% of solar, battery storage, geothermal
- **§45L (New Energy Efficient Home Credit):** Repealed after June 30, 2026
- **Total savings:** $267B over 10 years (Tax Foundation)
- Source: Tax Foundation, Mondaq, Thomson Reuters

### 5. H.R. 4758 — High-Efficiency Electric Home Rebate Program Repeal
- Passed House Feb 2026
- Would repeal $4.5B HOMES/HEEHR rebate program for low/moderate-income households
- Rebates covered heat pumps, insulation, air sealing, efficient appliances
- About a dozen states had opened programs; others still awaiting DOE approval
- Source: ACEEE

### 6. Home Energy Audit Costs (2026)
- **National average:** $437 (HomeAdvisor, Angi 2026)
- **Typical range:** $212 - $698
- **Level 1 (walkthrough):** $150 - $200
- **Level 2 (detailed, most common):** $250 - $650
- **Level 3 (comprehensive):** $650 - $1,000+
- **Per sq ft:** $0.10 - $0.40
- **Potential savings:** 5-30% on annual energy bills
- **Free audits:** WAP (Weatherization Assistance Program) for income-qualifying households, avg value $6,500-$8,000
- Source: Angi, HomeAdvisor, Thumbtack, Fixr

### 7. DOE Genesis Initiative
- "Reimagining Construction and Operation of Buildings"
- AI for automated design, physics-based modeling, rapid permitting, optimized maintenance
- Partnering with ML/agentic platform developers, building owners, national labs
- Goal: reduce construction timelines and costs, increase housing availability
- Source: energy.gov

## Counterargument (required)
The strongest case against this thesis: A fine-tuned LLM doesn't replace an energy audit. An auditor uses a blower door ($350), duct blaster ($100), infrared camera ($200) — physical tests that measure YOUR actual house. An LLM trained on prototypes gives you the statistical best guess for a house LIKE yours. A homeowner in a 1960s ranch with undisclosed foundation cracks, rat-chewed insulation, or a ductwork disconnect in the attic needs eyes on site, not a neural network's top-3 recommendation. The MSU model's 98.9% accuracy is against physics simulations of idealized prototypes — not against actual homes with their idiosyncratic failures. The gap between ResStock archetypes and real-world housing stock is the gap between a good guess and a diagnosis.

## Limitations (required)
- MSU fine-tuned model is not publicly available — lab research only
- 98.9% accuracy is against physics-simulation baselines, not field-validated results
- ResStock prototypes may not capture all real-world building conditions
- Data2BEM was tested on a commercial building, not residential
- No cost comparison between AI recommendations and professional auditor recommendations in practice
- State/utility incentive landscape varies dramatically — some states still offer audit rebates even without federal credit

## Original Contribution
Cross-referencing the MSU accuracy data against the OBBBA tax credit repeal timeline and current audit costs to calculate the effective "expertise tax" homeowners now pay. The federal credit covered $150 of a $437 audit — 34% — and that subsidy is gone. A free AI tool that hits 98.9% accuracy exists in concept but not in practice. Quantifying this gap is novel.
