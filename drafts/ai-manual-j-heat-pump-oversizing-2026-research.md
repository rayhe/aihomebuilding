# Research: AI Manual J Heat Pump Oversizing — Data-Driven Load Sizing (2026)

**Slug:** ai-manual-j-heat-pump-oversizing-2026
**Article #:** 926
**Journalist:** Priya Greenwood (Sustainability & Green Building)
**Status:** research complete, kill test PASSED
**Date:** September 21, 2026

## Kill test
Does this help someone building or buying a home? Yes. Equipment sizing decides thousands of dollars in upfront cost, 15 years of utility bills, and whether the house is comfortable or clammy. A homeowner about to sign a $12K–$25K HVAC contract is the exact reader.

## Angle
The industry's own data now says residential heating equipment is massively oversized — and the most damning evidence comes from the thermostat sitting on the hallway wall. A September 2026 study shows existing heating equipment averages 2.75× the size that a year of thermostat data says the house needs. Even contractor-run Manual J calculations come in 2.26× above what the data supports: the fudge factors compound. NREL's cold-climate work adds the mechanism for heat pumps specifically: sizing to the 99th-percentile design temperature builds a system for the two coldest hours of the year, then it short-cycles through the 20–40°F weather where the house actually lives.

The AI/data story: load calculations are moving from clipboard guesswork to data-driven estimation — thermostat time series + utility bills → design-load estimates that beat a contractor's padded Manual J. Homeowner-facing tools (CoolCalc, Wrightsoft Right-J, free estimators) let a buyer sanity-check a quote before signing.

## Primary sources

1. **arXiv:2609.07619 (Lee, Pergantis, Kircher, Sept 2026)** — "Data-driven estimation of design heating loads for HVAC equipment sizing." 74 detached single-family houses, five US climate zones. Two methods: smart-thermostat time-series data and monthly utility bills, validated against purchased practitioner Manual J calculations. Findings: existing heating equipment 2.75× larger than thermostat-method estimate (2.5th–97.5th percentile: 1.34–6.52); 2.96× larger than bill-method estimate. Practitioner Manual J estimates 2.26× (0.87–5.21) larger than thermostat estimate, 2.35× (1.02–5.28) than bill estimate. Paper discusses implementing data-driven sizing at scale and incorporating into industry standards. https://arxiv.org/abs/2609.07619v1

2. **NREL FY25 OSTI 90544 (docs.nlr.gov)** — "Design Heating and Cooling Load Calculation Versus Building Load Simulation for Cold Climate Heat Pumps: Understanding the 'Gap'." Manual J design-load calculations + Manual S equipment selection drive selection of larger-than-needed heat pumps in cold climates. Majority of heating load occurs at 20–40°F, not at 99th-percentile design temperatures. Sizing to design temp → system operates below ideal heating capacity, hits setpoint fast, cycles at high startup power, lowering effective efficiency. Recommends selecting a smaller heat pump than Manual J design capacity and letting backup heat cover the few coldest hours. https://docs.nlr.gov/docs/fy25osti/90544.pdf

3. **DOE EERE, Strategy Guideline: HVAC Equipment Sizing** — Manual S selection rules: cooling equipment capacity not to exceed total cooling load by more than 15%; furnace within 140% of peak heating load; heat-pump limits in cooling-dominated climates. "Faithful adherence to the conditions used in Manual J is required for accurate equipment selection." https://www1.eere.energy.gov/buildings/publications/pdfs/building_america/strategy_guide_hvac_sizing.pdf

4. **NJ Green Building Manual (Rutgers), citing National Institute of Building Services / Building Energy Codes Resource Center** — HVAC consumes 48% of energy in a typical US home. Engineers oversize for extreme loads occurring 1–2.5% of the time; contractors use rules of thumb rather than accepted practice; customers request oversized units without understanding the math. Do not rely on rules of thumb; calculate loads per ASHRAE/ACCA standards; use safety factors sparingly. https://greenmanual.rutgers.edu/nr-properly-sized-hvac-equipment/

5. **LSU AgCenter, HVAC Efficient Cooling and Heating** — Manual J is the ACCA publication for residential load calculations "based on many details about the home"; required by the IRC and energy code. "Specify in your home building or HVAC replacement contract that you want a copy of your contractor's Manual J work and keep it in your home records." Oversized AC cools but cycles too briefly to dehumidify. https://www.lsuagcenter.com/topics/family_home/home/design_construction/safer%20stronger%20smarter/energy/hvac--efficient-cooling-and-heating

## Secondary / attributed-with-care sources

6. **Air Doctors 2021 survey (3,880 homes), reported by internewscast** — 98% of surveyed systems oversized by at least 200% of heating capacity; 33%+ oversized in cooling. Attribute to the contractor's survey, not as a national census. https://internewscast.com/business/why-choosing-the-right-size-hvac-system-matters-most/

7. **DOE report summary (via internewscast)** — improper HVAC installation in ~65% of systems evaluated; 31% oversized. Attribute as reported figure from a DOE report summary; the primary report is not directly cited here. Same URL as above.

8. **ENERGY STAR quality-installation criteria (via TrustAnalytica blog)** — system capacity between 95% and 115% of calculated cooling load for ACs/heat pumps; verifiers flag installations under 450 sq ft/ton as a tell for rule-of-thumb sizing. Attribute to ENERGY STAR's criteria via the blog's summary. https://blog.trustanalytica.org/red-flags-when-a-contractor-sizes-your-system-in-under-five-minutes/

9. **Equipment price bands (costflowai, secondary)** — 3-ton heat pump $4,250–7,850 equipment; 4-ton $5,450–9,750 equipment. Adjacent-size equipment gap ~$1,200–1,900 before installation markup. https://github.com/costflowai/costflowai01-v1/blob/HEAD/content/posts/hvac-cost-calculation-basics.md

## AI tools landscape (for the "technology" section)

- **CoolCalc, Wrightsoft Right-J** — ACCA-approved Manual J software; the professional standard.
- **Dalton Mills free estimator** — homeowner-facing load calc from basic house details (per TrustAnalytica).
- **ServiceTitan / Housecall Pro** — field platforms increasingly embedding the load-calc report step into the quoting workflow.
- **Data-driven methods (arXiv 2609.07619)** — thermostat time-series + utility bills → design-load estimate; the AI-native challenger to clipboard Manual J. Scales to any home with a year of smart-thermostat history.
- Open-source HVAC AI load-calculation assistants exist (e.g., agent skill repos on GitHub) — evidence the workflow is being automated, not a product endorsement.

## The skepticism section (honest counterweights)

- Data-driven methods need history: a full heating season of thermostat data + bills. Useless for new construction, homes without smart thermostats, or systems replaced last month. No data, no estimate.
- The 2.26× Manual J finding indicts practitioner padding (compounding conservative assumptions), not the Manual J method itself. A clean Manual J remains the standard; the problem is contractors skipping it or salting it.
- Oversizing is partly rational: insurance against callbacks (a contractor never gets a complaint call for a house that stays warm), future additions, extreme weather. The incentive structure rewards oversizing.
- Variable-speed / inverter-driven heat pumps tolerate oversizing far better than single-stage equipment — modulation narrows the penalty. The 2.75× figure describes mostly older/single-stage heating equipment; with modern cold-climate heat pumps the comfort penalty of a size-up is smaller (the energy penalty remains).
- Cold-climate nuance: undersizing a heat pump without adequate backup heat is a real failure mode on design nights. NREL's "size smaller, let backup cover peaks" requires the backup to actually exist and be sized.
- Do NOT quote federal tax credits for 2026 installs: 25C expired 12/31/2025; 25D terminated for post-2025 expenditures under the OBBBA. (Caution noted from an HVAC AI skill repo's tax-credit warning; verified logic — simply omit credits from the article.)

## Actionable takeaways (required)

1. **Demand the Manual J in writing before you sign.** You want: calculated heating/cooling loads in BTU/hr, the design conditions used, and selected equipment's rated capacity at those conditions. A contractor who did the work hands it over without hesitation.
2. **Know the bands.** ENERGY STAR's quality-install criteria: 95–115% of calculated cooling load for ACs/heat pumps. Manual S: cooling ≤115% of total load; furnace ≤140% of heating load. Anything beyond that needs a written justification, not a shrug.
3. **The 450 sq ft/ton tell.** If a quote sizes your home under 450 sq ft per ton and no Manual J exists, that is rule-of-thumb sizing. Get a second quote.
4. **If you're replacing:** a smart thermostat with a year of history plus 12 months of utility bills is now enough for data-driven tools to sanity-check any quote. Run the estimate yourself before the contractor arrives.
5. **New construction:** a tighter envelope shrinks the load; spending on air sealing and insulation beats spending on a bigger heat pump. Manual J is required by code — make the builder show it.
6. **If a contractor insists on sizing up:** insist on variable-speed/inverter-driven equipment, which modulates and blunts the oversizing penalty. Never accept a size-up on a single-stage unit without a load calc.

## Headline (draft)
"Your Heating System Is 2.75 Times Too Big. Your Thermostat Knew First."
