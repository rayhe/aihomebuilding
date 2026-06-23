# Research: AI Retrofit Upgrade Order — Insulate First, Equipment Second

## Journalist: Priya Greenwood (Sustainability & Green Building)

## Angle
Your HVAC contractor says start with the heat pump. An AI trained on 536,416 U.S. residential prototypes says insulate first. The order you do your home energy upgrades matters enormously for both cost and carbon — and most homeowners get it backwards because their contractor has a margin incentive, not a whole-house perspective.

## Kill Test
Does this help someone building or buying a home? **YES** — directly helps any homeowner deciding which energy upgrade to do first, how to stack IRA rebates and tax credits, and how to avoid spending $4,000 more on an oversized heat pump.

## Primary Sources

### Source 1: Shu et al. (Feb 2026) — "Closing the Expertise Gap in Residential Building Energy Retrofits"
- arXiv:2602.20181v1
- Domain-specific LLM fine-tuned on physics-based energy simulations
- 536,416 U.S. residential building prototypes across 9 major retrofit categories
- Using LoRA (Low-Rank Adaptation) fine-tuning
- Identifies optimal retrofit for CO2 reduction in top-3 recommendations: 98.9% of cases
- Shortest discounted payback period in top-3: 93.3% of cases
- Order-of-magnitude reduction in CO2 prediction error vs. base LLM
- Works with incomplete inputs (homeowner doesn't need to know everything)
- Key insight: The model can map basic dwelling characteristics to optimal retrofit selections

### Source 2: DOE "Envelope First" Recommendation (IRA Section 50121)
- DOE explicitly recommends "envelope-first strategy" for HOMES rebates
- "When a home is found to have a weatherization need during the home assessment, DOE strongly recommends states require that need be met at the same time or before any mechanical or appliance upgrades"
- Building envelope = air sealing, doors, windows, insulation
- Logic: Reduce the load FIRST, then right-size the equipment
- HOMES program: $2,000-$4,000 rebates (doubles to $4,000-$8,000 for LMI households) for 20%+ energy savings
- HEAR program: Up to $14,000 for LMI households
- Total IRA allocation: $8.8 billion across states/territories/tribes
- Rollout status: Only a handful of states fully launched (NY, RI, ME, DC); most still awaiting final DOE approval

### Source 3: RMI — Automated Home Energy Estimates
- Less than 3% of U.S. single-family homes have ever had on-site energy assessment
- Algorithm-based estimates (ClearlyEnergy, UtilityScore) within 20-30% of on-site assessments for total energy use
- ~8,000 homes across 27 states analyzed
- Nearly half within 20% difference, more than 1/4 within 10%
- Algorithms better on energy COST estimates because they pull granular utility rate data (HES uses statewide averages)
- Implication: AI can scale energy assessments to all 140M+ US homes, not just the 3% that get human auditors

### Source 4: EPA Energy Star Methodology
- Air sealing + insulation alone: 15% savings on heating/cooling costs (11% total energy)
- Based on Beacon Residential modeling of "typical" existing U.S. homes
- Corroborated by 20+ years of professional contractor field experience
- This is the baseline — doing NOTHING but sealing and insulating

### Source 5: IRS Tax Credits (25C)
- 30% of costs, up to $3,200 total per year
- Insulation/air sealing: up to $1,200
- Heat pumps: up to $2,000 (separate from $1,200 cap)
- Windows: up to $600
- Home energy audit: up to $150
- No lifetime limit — can claim every year through 2025
- QMID requirement added for 2025

### Source 6: Berkeley Engineering / CAL FIRE Study (2025)
- Machine learning model predicts structure survivability with 82% accuracy
- Home hardening + defensible space together can double structure survival
- Just removing vegetation within 5 feet reduces structure losses by 17%
- Relevant: same "envelope first" logic applies to resilience, not just energy

## Novel Contribution
The "which-upgrade-first" math that nobody shows homeowners. Using the 536K-prototype data, the DOE's own envelope-first recommendation, and EPA's baseline savings numbers, we can construct the argument: For a typical 2,000 sq ft 1970s home, insulating first (a) reduces the heat pump size needed by ~1 ton (saving $2,000-4,000 in equipment cost), (b) delivers 11-15% energy savings immediately even before the heat pump, and (c) unlocks the 20% threshold for HOMES rebates. Contractors push heat pumps first because the ticket is $12,000-18,000 (their biggest sale). Insulation is $3,000-5,000 (lower margin). The AI doesn't have a commission structure.

## Strongest Counterargument
Heat-pump-first advocates argue: (1) mechanical systems have the longest payback period and biggest carbon impact, so replacing gas furnaces immediately eliminates fossil fuel combustion; (2) some homes have adequate insulation already and just need electrification; (3) waiting to insulate before installing a heat pump means burning gas longer, and every heating season matters for climate. The DOE's own data shows heat pumps cut emissions 30-50% even in poorly insulated homes — the question is whether the *incremental* benefit of doing envelope first justifies the delay.

## Limitations
- The 536K-prototype LLM hasn't been commercially deployed yet — it's a research tool
- "Envelope first" isn't universally optimal (some homes have good envelopes but ancient furnaces)
- IRA rebate availability varies wildly by state; most HOMES programs haven't launched
- The retrofit cost data used here is national average; real costs vary 2-3x by region
- No direct comparison study of "insulate then heat pump" vs "heat pump then insulate" for the same homes
