# Research Notes: AI Energy Audit LLM — 536K Homes Expertise Gap

## Core Study #1: Michigan State Domain-Specific LLM (Shu & Zhao, 2026)
- **Paper:** "Catalyzing Informed Residential Energy Retrofit Decisions via Domain-Specific LLM"
- **Authors:** Lei Shu, Dong Zhao et al., Michigan State University + Tongji University + University of Michigan
- **Source:** arXiv:2602.20181
- **Method:** Fine-tuned LLM (LoRA) on physics-based energy simulations and techno-economic calculations from 536,416 US residential building prototypes
- **Data source:** ResStock 2024.2 dataset (NREL/National Laboratory of the Rockies)
- **Retrofit categories:** 9 — wall insulation, roof/ceiling insulation, window replacement, air sealing, HVAC upgrade, PV installation, appliance upgrade, lighting replacement, water heater upgrade
- **Input:** 21 homeowner-accessible parameters (building age, size, location, stories, HVAC type, heating fuel, thermostat setpoints etc.)
- **Results:**
  - 98.9% top-3 hit rate for maximum CO₂ reduction recommendations
  - 93.3% top-3 hit rate for shortest discounted payback year
  - Order-of-magnitude reduction in CO₂ prediction error vs base model
  - Multi-fold reductions for energy use and retrofit cost predictions
  - Robust with 60% incomplete input (missing some dwelling descriptions)
- **Simulation:** EnergyPlus v24.2.0, hourly timestep, with EPW weather files
- **Economics:** 3% annual discount rate, unit costs from NREM database
- **Key insight:** Homeowners can describe house in plain language → get physics-calibrated retrofit recommendations. No expert knowledge required.

## Core Study #2: General-Purpose LLM Evaluation (Shu et al., MDPI Buildings)
- **Paper:** "Large Language Models for Building Energy Retrofit Decision-Making: Technical and Sociotechnical Evaluations"
- **Source:** MDPI Buildings 15(22), 4081
- **Models tested:** ChatGPT o3, DeepSeek R1, Grok 3, Gemini 2.0, Llama 3.2, Claude 3.7
- **Dataset:** 400 homes across 49 US states (stratified from ResStock 2024.2)
- **Results:** Up to 92.8% top-5 recommendation accuracy
- **BUT:** "Simplified reasoning that lacks deeper contextual awareness of local economic and behavioral factors"
- **Limitation:** General-purpose LLMs lack quantitative rigor for engineering-level decisions — no physics calibration
- **16 retrofit packages tested**, including heat pump variants, infiltration/insulation upgrades, appliance electrification
- **28 key input parameters** (from 389 available in ResStock)

## Energy Audit Market Data
- Professional home energy audit: $212–$698, average $437 (HomeAdvisor/Angi, 2026)
- Level 2 (most common residential): $250–$650, includes blower door + infrared
- Blower door test alone: $150–$350
- Per sq ft: $0.10–$0.40
- Typical 2,000 sq ft home: $200–$800

## Scale of the Problem
- US residential sector: ~20% of total national energy consumption (DOE)
- 23% of US energy-related greenhouse gas emissions (DOE/IEA)
- Buildings overall: 40% of national energy consumption, 74% of electricity use, 35% of carbon emissions
- ~1/3 of energy used by buildings is wasted, costing $150 billion annually (DOE)
- Americans spend average $2,000/year on home energy; $200–$400 wasted (DOE via This Old House)
- Upgrading HVAC can reduce energy use 20–50% (DOE)
- Sealing drafts: 5–30% savings annually
- Deep retrofits: 58–79% energy reduction, 32–56% emissions reduction, but cost $42,600–$56,750 (ACEEE)
- Energy costs: 8–14% of household income

## The Expertise Gap
- Professional audits are costly ($300-500) and static (one-time snapshot)
- Homeowners lack technical literacy for structured building energy assessments
- "Trapped in low-information environments with fragmented sources" (Shu & Zhao)
- Policy incentives prioritize "administratively convenient measures over technically optimal solutions"
- Professional consultations "constrained by commercial incentives" with "bias toward standard contractor offerings"
- Homeowners spend ~90% of time indoors → thermal habituation → don't perceive deficiency

## The Commercialization Gap
- The Michigan State model exists as a research prototype. No consumer product.
- General-purpose LLMs (ChatGPT etc.) can provide directional guidance but lack physics calibration
- DOE's Home Energy Score is free but limited (fewer parameters, less granular)
- No startup has combined fine-tuned LLM + ResStock data into a consumer-facing product
- The conversational agentic framework (arxiv 2606.31744, Athens/UBITECH) integrates LLM with GridLAB-D simulator — 95.6% end-to-end simulation success rate — but also research-only

## Journalist
Priya Greenwood — sustainability, green building, energy data → real utility bills

## Kill Test
Does this help someone building or buying a home? YES. Homeowners considering energy retrofits can:
1. Understand what AI-powered audit alternatives exist (and don't yet)
2. Use general-purpose LLMs for directional guidance while understanding limitations
3. Know what to look for as commercial products emerge
4. Compare AI recommendations against professional audit costs and ROI
