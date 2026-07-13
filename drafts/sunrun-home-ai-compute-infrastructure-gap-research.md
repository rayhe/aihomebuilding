# Research: Sunrun Home AI Compute Infrastructure Gap

## Core News Peg
- **Sunrun (Nasdaq: RUN) launched distributed AI compute pilot on July 8, 2026** (Globe Newswire press release)
- Installing "compute nodes" — miniature data centers — inside homes equipped with Sunrun solar and battery storage
- 1.1 million existing customers = addressable deployment base
- Selling AI inference capacity to unnamed "enterprise compute buyers"
- Homeowners compensated for hosting
- Paul Dickson (Sunrun President/CRO): "Over nearly two decades, we have perfected our ability to operationalize, finance, and scale distributed assets."
- Pilot to complete "over the coming months" — evaluate milestones, compute performance, homeowner experience
- **Actively in discussions with enterprise compute offtakers, homebuilders, and utility partners**

## Related: Tesla/Renew Home 16 GW VPP Deal (June 24, 2026)
- Sunrun + Tesla + Renew Home aggregating 16+ GW of residential energy capacity
- Hundreds of thousands of home batteries + 8M+ smart thermostats (Renew Home)
- "Largest distributed power plant in the country"
- Targeting hyperscalers and utilities
- Virginia: 300 MW available immediately, 500 MW by 2030
- Mary Powell (Sunrun CEO): "The grid of the 1800s cannot power the innovation of 2026"
- RUN stock up 26% on that announcement

## Competing Model: SPAN/XFRA + PulteGroup
- SPAN (electrical panel company) launched XFRA "distributed data center" offering (July 2026)
- Each compute node: 16 Nvidia RTX Pro 6000 Blackwell GPUs + 4 AMD Epyc CPUs
- Outdoor unit on property
- SPAN panel manages energy allocation using "underutilized capacity"
- PulteGroup partnership for new construction rollout
- Brian Jamison (PulteGroup VP): "Building homes with SPAN Panels, XFRA, and battery backup...allows us to use a home's underutilized power infrastructure"
- Target: gigawatt-scale by 2027
- Part of Utilize lobbying group (Google, Tesla, Carrier)

## Infrastructure Gap Data Points

### Electrical Capacity
- Standard US home: 200A panel at 240V = 48 kW theoretical
- NEC Article 220 demand calculations leave typical margin of 5-15 kW after existing loads
- EV charger (Level 2): 7.6-11.5 kW — already consumes most margin
- XFRA node (16x RTX Pro 6000 + 4x Epyc): estimated 8-10 kW draw
  - RTX Pro 6000 Blackwell TDP: ~350W each → 16 × 350W = 5,600W for GPUs alone
  - AMD Epyc: ~280W each → 4 × 280W = ~1,120W
  - Plus cooling, networking, storage
- Sunrun compute node specs: NOT DISCLOSED. "Numerous" nodes per home mentioned.
- Sunrun battery storage: 9.6-20 kWh per unit, 5-10 kW continuous output

### HVAC/Thermal Load
- Average US home AC: 3-5 tons (36,000-60,000 BTU/hr)
- 1 kW = 3,412 BTU/hr
- 8 kW compute node = 27,300 BTU/hr of constant heat
- 10 kW compute node = 34,120 BTU/hr
- A 3-ton AC (36,000 BTU/hr) has its ENTIRE cooling capacity consumed by a 10 kW compute node
- Manual J (ACCA) sizes HVAC based on building envelope + occupancy + internal gains
  - Standard internal gains assumption: ~3,000-5,000 BTU/hr (appliances, people, lights)
  - Adding 27,000-34,000 BTU/hr from a compute node = 6-11x the standard internal gains assumption
- SPAN/XFRA: outdoor unit — heat rejected outside, but still needs its own cooling

### Building Code
- NEC 2023 Article 645: "Information Technology Equipment" 
  - Requires dedicated HVAC, fire suppression, emergency disconnect
  - Applies to "information technology equipment rooms" — defined purpose
  - Residential garage/closet doesn't meet any Article 645 requirements
- NEC Article 210: dwelling unit branch circuits — no provision for data center equipment
- No NEC article addresses "residential compute nodes" as a use case
- IRC (International Residential Code) has no classification for this use

### Insurance
- Standard HO-3: "business pursuits" exclusion — processing AI inference for enterprise buyers is commercial activity
- CG 40 47/48: AI-specific exclusion endorsements (from 2024-2025)
- ISO HO 04 84 (home business endorsement) typically limits coverage to $2,500 business property
- Key question: Does hosting an enterprise AI compute node constitute "business use" of the property?

### Zoning
- Most residential zoning (R-1, R-2) doesn't permit commercial/industrial use
- A compute node processing AI workloads for enterprise buyers = arguable commercial activity
- No precedent for "distributed residential compute" in zoning case law

## Wall Street Reaction (Barron's, July 9)
- Stock fell 1.56% on compute pilot announcement (vs. +26% on VPP deal)
- Shares down 38% YTD
- "Wall Street isn't buying the AI turnaround narrative"
- Short interest: 24.84% of float
- Capital-intensive "power-as-a-service" model has high debt burden
- Barron's: "shiny new tech can't substitute for a sustainable bottom line"

## Energy Market Context
- Russia banned diesel exports (early July 2026) as Ukraine attacks battered refining infrastructure
- European diesel refining margins hit record $60/barrel (July 9)
- US Nymex 3-2-1 crack spread hit record $64.58/barrel (July 8 — same day as Sunrun pilot launch)
- NAHB data (May 2026): diesel up 105.9% YoY, energy inputs to residential construction up 62.8% YoY
- Construction input prices up 12.6% annualized in early 2026
- Reuters (July 10): "fuel supply crunch despite calmer oil prices" — Iran war Strait of Hormuz disruption far from over

## Key Tension for Builders
- Sunrun is talking to homebuilders about "deployment frameworks"
- PulteGroup already partnered with SPAN/XFRA
- But NO builder standard exists for "compute-ready" homes
- What would compute-ready construction require?
  - Dedicated 40A+ circuit on its own breaker
  - 400A panel or dual 200A panels
  - Dedicated cooling (mini-split or HVAC zone for compute area)
  - Fire separation (compute room as separate fire compartment?)
  - Acoustic isolation (fans, cooling)
  - Enterprise-grade networking (fiber conduit, dedicated switch)
  - Insurance rider or commercial policy overlay
  - Zoning variance or conditional use permit

## Journalist
- **Priya Greenwood** (Sustainability & Green Building) — connects energy data to utility bills, evidence-based urgency without preachiness

## Headline Candidates
- "Sunrun Is Turning 1.1 Million Homes Into AI Data Centers. Nobody Ran a Load Calculation First."
- "Sunrun Wants to Put an AI Server in Your Garage. Your HVAC Was Sized for a Family, Not a Data Center."
