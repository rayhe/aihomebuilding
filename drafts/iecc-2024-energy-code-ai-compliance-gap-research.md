# Research: IECC 2024 Energy Code Compliance AI Gap

## Angle
The 2024 IECC is the most complex residential energy code ever written. Section R408 alone has 51 options across heating, cooling, water heating, renewables, windows, ventilation, lighting, appliances, and thermostats. Builders must pick at least 2 options and hit 10 points (15 for homes >5,000 sq ft). Three separate compliance paths exist (prescriptive, simulated performance, ERI), each with different trade-off rules. DOE is funding PNNL to build AI tools for energy code compliance — but they're still learning to look up R-values. The gap between code complexity and AI readiness is enormous.

## Kill Test
Does this help someone building or buying a home? YES. A builder needs to understand:
- Which compliance path to choose
- How to navigate the 51-option points system
- Whether AI tools can help yet (no)
- What HERS raters cost and availability
- What the 2024 IECC changes from 2021

## Primary Sources

### 1. DOE/PNNL: "Using Artificial Intelligence for Energy Code Compliance Verification"
- PI: Hanlong Wan (hanlong.wan@pnnl.gov), PNNL
- Team: Hanlong Wan, Fan Feng (PNNL)
- Program Lead: Ian Blanding, Building Energy Codes Program
- Preprint: PNNL-SA-203362
- Uses GPT-4o and Llama 3 with RAG (Retrieval-Augmented Generation)
- Chatbot interface for querying building energy codes
- Demo: locating R-value requirements for Washington State from ASHRAE 90.1-2019
- Methods: Input parsing → data conversion → custom RAG process → LLM → prompt testing → caching
- Challenge: accurately extracting data from tables and figures within building energy codes
- Status: Research/demo phase, not production-ready
- Impact: "If successful, the project will save time and resources, helping more buildings meet energy efficiency standards"
- Source: https://www.energy.gov/sites/default/files/2024-11/bto-peer-2024-pnnl-ai-for-energy-code-compliance.pdf

### 2. PNNL BEM-AI (Building Energy Model AI)
- Lead: Weili Xu, PNNL
- Published in: Energy and Buildings (peer-reviewed)
- Uses "agentic AI" — autonomous multi-agent system
- Agents: planner (analyzes request), orchestrator (assigns tasks), specialized agents (walls, roofs, lighting, energy modeling software)
- Tested on commercial buildings in Florida (3-story, 53,000 sq ft medium office)
- Successfully calculated energy savings for window-to-wall ratio reduction
- Open source
- Limitation: Currently only works for buildings in Florida, needs community data for expansion
- "No two commercial buildings are the same" — needs more training data from architects, construction consultants
- NOT residential — commercial building focus
- Source: https://www.pnnl.gov/news-media/new-ai-bot-offers-speedy-revenue-saving-building-energy-modeling

### 3. IECC 2024 Changes (via NAHB)
- Ceiling insulation requirements return to 2018 IECC levels
- Additional design flexibility for wall insulation in Climate Zones 4 and 5
- Prescriptive path requires Section R408 "Additional Efficiency Requirements"
- R408: minimum 10 points from 51 options, at least 2 measures required
- Homes >5,000 sq ft: additional 5 points required (total 15)
- 51 options span: heating, cooling, hot water equipment, renewable energy, windows, ventilation, lighting, appliances, thermostats
- Performance path updated to allow equipment trade-offs (first time since 2009 IECC)
- ERI path always allowed equipment efficiency (since 2015)
- HERS rater needed for performance and ERI compliance paths
- Optional appendices for electrification and zero net energy
- Federal law preempts IECC from mandating HVAC equipment efficiency — R408 was the workaround
- Source: https://www.nahb.org/advocacy/top-priorities/building-codes/code-development/2024-international-energy-conservation-code

### 4. HousingWire: "Energy Codes Are Complicated: Time for a Simpler Approach?"
- Builder using prescriptive path but failing the more stringent requirements in CZ 3-8 can switch to performance path if at 4 ACH50 or less
- "Section R408 has been significantly expanded in the 2024 IECC"
- Key: equipment efficiency now included in Simulated Building Performance path (excluded since 2009)
- Three elements for net-zero: efficient envelope + high-efficiency mechanicals + renewable energy
- Source: https://www.housingwire.com/articles/energy-codes-are-complicated-time-for-a-simpler-approach/

### 5. InQI Platform Launch (May 2026)
- AI-native proptech platform for architects, designers, builders, homeowners
- Codes.IQ: "Plan-checker aware of jurisdiction-specific building codes and project zoning"
- Estimate.IQ: Construction estimator with quantity takeoffs and regional cost intelligence
- Multi-LLM Consensus Architecture: cross-model intelligence, discrepancy surfacing
- No accuracy data published for Codes.IQ
- Source: https://www.globenewswire.com/news-release/2026/05/04/3286846/0/en/InQI-Launches-AI-Native-Property-Intelligence-Platform-with-New-Editor-and-Expanded-IQ-Apps.html

### 6. Builder Magazine: Energy Models Meet the Jobsite
- Performance-based compliance gives flexibility but raises decision-making bar
- Energy rater role: builds compliance pathway, runs model, verifies field performance
- Rater coordinates with builder and trade partners
- Aeroseal (duct sealing) works with raters like Tacoma Energy
- Key insight: model assumptions must match as-built performance
- Source: https://www.builderonline.com/building/building-science/when-energy-models-meet-the-jobsite-making-code-compliance-more-predictable

### 7. ICC Compliance Options Summary
- Three paths: Prescriptive (R402-R403), Total UA Alternative (R402.1.5), Simulated Performance (R405), Energy Rating Index (R406)
- Prescriptive: R-value tables, mandatory air sealing, duct leakage testing
- Total UA: trade-off insulation between components as long as total building UA ≤ code UA
- Simulated Performance: computer energy modeling (REM/rate, Ecotope, EnergyGauge), proposed must have less energy than standard reference design
- ERI: HERS index score based on reference home, with mandatory measures
- Source: https://www.iccsafe.org/building-safety-journal/bsj-technical/residential-compliance-options-of-the-international-energy-conservation-code/

## Data Points to Verify/Find
- Number of states that have adopted 2024 IECC (vs still on 2018 or 2021)
- Average HERS rater cost per inspection
- Plan review rejection rates related to energy code noncompliance
- Number of certified HERS raters in the US
- MSU study on LLM retrofit accuracy (from search results: ResStock 2024.2, 49 states)

## Journalist
Jake Kowalski — construction technology beat. Punchy, hands-on, specs-heavy, light on jargon.

## Headline Direction
"The 2024 Energy Code Has 51 Ways to Comply. The AI That Could Navigate It Hasn't Learned to Read a Table Yet."
