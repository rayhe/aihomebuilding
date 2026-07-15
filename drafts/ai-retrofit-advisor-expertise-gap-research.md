# Research Notes: AI Energy Retrofit Advisors vs. the Expertise Gap

## Core Story
Michigan State University researchers published two studies testing whether AI can replace human energy auditors for residential retrofit decisions. The results expose a critical gap: general-purpose AI chatbots can identify the right retrofits but routinely botch the payback math — the one thing homeowners actually need to make a spending decision.

## Primary Sources

### 1. MSU/ResStock Study (2026) — Insulation Institute Coverage
- **What:** Seven general-purpose LLMs tested on residential energy retrofit decision-making
- **LLMs tested:** ChatGPT o3, DeepSeek R1, Grok 3, Gemini 2.0, Llama 3.2, Claude 3.7
- **Dataset:** ResStock 2024.2 for 49 U.S. states
- **Key finding:** LLMs produce effective retrofit options but struggle to identify which delivers the best result most quickly and at the lowest cost
- **Two test parameters:** (1) Maximum CO2 reduction, (2) Minimum payback period
- **Weakness:** AI models scored well on identifying correct measures, poorly on ranking them by cost-effectiveness
- Source: Insulation Institute coverage of MSU study; published academic paper in MDPI

### 2. Shu et al. (Feb 2026, arXiv 2602.20181) — Domain-Specific Fine-Tuned LLM
- **Authors:** Lei Shu, Armin Yeganeh, Sinem Mollaoglu, Jiayu Zhou, Dong Zhao (all MSU)
- **What:** Fine-tuned LLM using LoRA on physics-based energy simulations and techno-economic calculations
- **Training data:** 536,416 U.S. residential building prototypes, 9 major retrofit categories
- **Results:**
  - 98.9% accuracy identifying optimal retrofit for CO2 reduction (top 3 recommendations)
  - 93.3% accuracy for shortest discounted payback period (top 3)
  - Order-of-magnitude reduction in CO2 prediction error vs. general-purpose LLMs
  - Multi-fold reduction in energy use and retrofit cost prediction errors
  - Maintains performance under incomplete input conditions
- **Key innovation:** Homeowner describes house in plain language → model maps to optimal retrofit

### 3. Retrofit Decision Barriers
- ACEEE surveyed 1,500 U.S. homeowners:
  - 65% could invest $1,000 in energy upgrades
  - Preference order: heating/cooling upgrades (+7%), water heater upgrades (+22%), appliance upgrades (+5%)
- ScienceDirect study (Wayne/Washtenaw counties, MI): 40 households tracked after energy audit
  - Half had below-median incomes
  - 40% energy insecure
  - 53% have children

### 4. Energy Audit Costs (2026)
- National average: ~$367 (Thumbtack), ~$437 (Angi)
- Level 1 (walkthrough): $100-$250
- Level 2 (detailed survey, most common): $250-$650
- Level 3 (comprehensive): $650-$1,000+
- Per sq ft: $0.10-$0.40
- Auditor hourly rate: $75-$150/hr
- Auditor average pay: $21.50/hr (PayScale 2026)
- **Federal tax credit for energy audits EXPIRED Dec 31, 2025** (One Big Beautiful Bill Act)

### 5. Market Context
- Residential energy-efficient technologies market: $210 billion (2026), projected $342B by 2036 at 5% CAGR
- Energy retrofit market: $202.6B (2025) → $295.5B by 2031 at 6.4% CAGR
- HVAC systems held 43.1% of 2025 retrofit market
- IRA provides up to $14,000 in household energy efficiency rebates and tax credits (though some provisions sunsetting under OBBBA)
- Shallow retrofits: 64.4% of 2025 revenue
- Deep retrofits: advancing at 8.6% CAGR

### 6. The Oversizing Problem (Analogous — from HVAC coverage)
- 50% of US homes have oversized HVAC systems (ENERGY STAR/LBNL) — already covered in article #31
- 60%+ according to DOE in some estimates
- 95% of new AC installations fail on operating efficiency (Fine Homebuilding)
- Properly sized system: 1,431 sf/ton average (ACCA data from 40 projects)
- Contractors using rule of thumb: 500 sf/ton = 2-3x oversized

## Original Contribution
Calculate the dollar cost of the AI accuracy gap:
- If a general LLM recommends insulation ($8,000, 12-year payback) over a heat pump ($6,000, 5-year payback) because it prioritizes CO2 reduction over payback period, the homeowner loses 7 years of ROI timing
- The fine-tuned model catches this because it was trained on techno-economic calculations, not just environmental impact
- For a homeowner with $15,000 to spend: getting the ORDER wrong (not the list) means leaving $2,000-$5,000 in unrealized savings on the table over the first decade

## Journalist
Priya Greenwood — sustainability, evidence-based, connects energy data to real utility bills

## Angle
The AI can see what's wrong with your house. It just can't tell you what to fix first. That's the difference between a recommendation engine and an advisor — and it's the difference between saving money and spending it in the wrong order.
