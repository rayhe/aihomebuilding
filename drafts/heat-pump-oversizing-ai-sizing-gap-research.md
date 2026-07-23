# Research: Heat Pump Oversizing & AI Sizing Gap

## Core Thesis
HVAC contractors routinely oversize residential heat pumps using rules of thumb. Automated load calculation tools — some now AI-augmented — exist and can right-size systems in 15 minutes. Almost nobody uses them for residential work. Homeowners pay the price in higher upfront costs, higher energy bills, shorter equipment life, and worse comfort.

## Key Data Points

### Oversizing Prevalence
- **Average U.S. combustion heating system oversized by 2.3x** (Rick Karg, energy management consultant; JLC Online Q&A)
- **Heat pump installers often propose 2-3x bigger than needed** — Mike Simons, Abode Energy Management (Canary Media)
- **Nature Communications study (2025), N=637 real heat pumps:** 7-11% show signs of oversizing at conservative thresholds. ~1% undersized. "Inappropriate sizing may pose a more substantial issue in the field than previously reported." Prior study (Weigert, 228 inspections) found only 5% mis-sized — field data suggests the problem is larger.
- DOE/PNNL ResStock modeling shows both Manual S and Maximum Load sizing approaches "neglect the airflow capacity of the existing ductwork"

### Cost Impact
- **Upfront cost penalty:** "What should cost $15,000 is now $40,000" when oversized (Mike Simons, Abode Energy Management, via Canary Media)
- **Ongoing energy penalty:** 5% for gas (conservative), up to 10% for oil-fired equipment (Rick Karg)
- **Short cycling:** Oversized heat pumps can't modulate below minimum output. They dump large amounts of hot/cold air, kick on/off repeatedly. Greater wear and tear, reduced lifespan, wasted electricity, poor humidity control.
- **Real-world UK data (Lloyd's Gas & Renewables, 2025):** 5 homes with properly-sized heat pumps achieved SCOP 3.9-5.3. Annual costs £555-£1,127 for heating + hot water. "A badly performing heat pump is almost always an installer problem, not a heat pump problem."

### Tools That Exist
- **Conduit Tech (ServiceTitan acquisition):** LiDAR-powered 3D scanning + ACCA-certified Manual J. 15-minute automated calcs in the field. AR equipment visualization.
- **IES Virtual Environment:** ASHRAE Heat Balance Method, CIBSE Admittance Method, ANSI/ASHRAE/ACCA Standard 183. 100+ HVAC system types. But aimed at commercial/large projects.
- **cove.tool:** Rapid prototyping algorithms for load modeling. "500 rooms in a building, analyses 500 times, super quickly." But again, commercial focus.
- **FieldCamp AI:** Free online calculator with adjusted square footage method factoring in 7 variables. Better than "20 BTU per sq ft" but still simplified.
- **LG LATS:** Full suite of HVAC tools for model selection, simulation, energy payback estimation.
- **Medium/HVAC contractors 2026:** AI platforms can "automatically pull climate data, estimate missing inputs using predictive models, recommend equipment based on load results, generate instant professional reports."

### What Contractors Actually Do
- Many use "20 BTU per square foot" rule of thumb (FieldCamp)
- "Stop running Manual J in your head" — an Etsy spreadsheet ($) signals the market demand for better tools
- 2023 DOE data: ACCA Manual J compliance is not enforced in most jurisdictions
- Incentive structure: contractor earns more installing larger system, faces no penalty for oversizing, faces callback risk for undersizing
- Climate-data-based methodology exists (pv-magazine, 2024) but not widely adopted

### The Homeowner Gap
- No consumer-facing tool to verify contractor's sizing
- Only signal is the energy bill — attributed to energy prices, not system size
- Homeowners on GreenBuildingAdvisor: "how much is it OK to undersize with respect to Manual J load?" — they're doing the research themselves because contractors can't be trusted
- Variable-speed/inverter heat pumps mitigate oversizing somewhat but don't eliminate it

## Sources
1. Nature Communications (2025): "Estimation of energy efficiency of heat pumps in residential buildings using real operation data" — N=637
2. Canary Media: "When it comes to heat pumps, bigger is not always better" — Mike Simons, Abode Energy Management
3. JLC Online: "Q&A: Oversized Heating Systems" — Rick Karg, energy management consultant
4. DOE/PNNL: Housing Characteristic-Based Design Guidance on Heat Pump Selection, Sizing, and Setup
5. ServiceTitan/Conduit Tech: LiDAR-powered load calculation product
6. pv-magazine (2024): Climate data-based methodology for residential ASHP sizing
7. Lloyd's Gas & Renewables (2025): Real heat pump running costs from 5 UK homes
8. BASC/PNNL: Cold Climate Heat Pump Sizing and Selection guide

## Journalist
**Priya Greenwood** — sustainability, energy, real utility bills. This is her beat: where the technology exists, where the incentives break, and what it costs the homeowner.

## Kill Test
Does this help someone building or buying a home? **YES.** If you're about to spend $15,000-40,000 on a heat pump system, knowing that your contractor might be oversizing it by 2-3x — and that a 15-minute automated calculation could prevent that — is directly actionable. Ask your contractor to show you the Manual J calculation. If they can't, find one who can.
