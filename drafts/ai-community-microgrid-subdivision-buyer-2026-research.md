# Research Notes — ai-community-microgrid-subdivision-buyer-2026

**Article #878 — journalist: Priya Greenwood (Sustainability & Green Building)**
**Ship after:** 2027-01-19 (queue tail; #758 published 2026-09-16, one-per-day rule)
**Date:** September 16, 2026

## Thesis
The next new-construction subdivision you tour may come with its own power grid. KB Home, Highland Homes, and developers in Michigan are shipping neighborhoods where the solar, the batteries, and the dispatch software are bundled into the community itself. The pitch is resilience and lower bills. The fine print is who owns the battery, who the software answers to, and what happens when you sell.

## Kill test
Does this help someone building or buying a home? Yes. A buyer touring a microgrid community can ask five questions before signing: who owns the battery hardware (you, the HOA, the utility, or a third party), who controls dispatch and what happens during an outage, whether the solar/storage is in the mortgage or a separate lease/lien, what the VPP enrollment does to your bill, and how the equipment transfers at resale.

## Primary sources (6)

1. **Schneider Electric press release (se.com) — KB Home Durango & Oak Shade, Menifee CA:** $6.65M DOE grant; 219 all-electric homes built to DOE Zero Energy Ready Home criteria (ENERGY STAR, WaterSense, Indoor airPLUS), ~40% average energy-use reduction; each home gets a SunPower Equinox solar system sized for net-zero energy, a 13kWh SunVault battery, heat pump water heaters/HVAC, Schneider Square D Energy Center and Connected Wiring Devices; pre-wired for EV chargers, some homes demonstrate bidirectional charging; microgrid design/engineering by Schneider Electric, grid transition coordinated with Southern California Edison.
   - https://www.se.com/us/en/about-us/newsroom/news/press-releases/schneider-electric-sunpower-and-energy-leaders-join-forces-to-power-kb-home%E2%80%99s-new-all-electric-solar-and-battery-powered-microgrid-communities-636268d4cef47c9daa0e3c4f/

2. **Electrek (Nov 2023) — Lakeland Electric Myrtlebrook, Florida:** 77-home pilot by utility Lakeland Electric + microgrid developer BlockEnergy + Highland Homes; $4.2M project; each home 8kW rooftop solar, one 43kWh battery shared per pair of homes, plus a central neighborhood battery; designed to be 77% self-sufficient; Lakeland Electric funds, owns, and operates the system and captures excess-grid-feeding value, projecting $1.1M in savings; completion expected late 2025/early 2026; utility quote: neighborhood-scale generation makes customers "less likely to see a blackout due to storms."
   - https://electrek.co/2023/11/13/florida-solar-microgrid-community/

3. **Solar Power World (Aug 2025) — Veridian at County Farm, Ann Arbor MI:** THRIVE Collaborative + sonnen; 170 mixed-income all-electric, fossil-fuel-free homes on 14 acres; geothermal + electric heat pumps, induction cooking, EV-ready; 1.3+ MW rooftop solar; every home carries a sonnen VPP-linked battery; homes run as one clustered energy system with under-two-second dispatch response, designed to shave peak demand and support the wider Michigan grid.
   - https://www.solarpowerworldonline.com/2025/08/net-zero-michigan-neighborhood-features-solar-storage/

4. **Microgrid Knowledge — Redwood Energy all-electric apartment community (California):** 4.3MWh battery (roughly 3–4 days of backup), 8kW solar per apartment per day, 33kWh battery capacity per apartment (about 2.5 Powerwalls); system sized using 25 years of historical weather data with the worst year as baseline; expected to cover 94% of annual demand (about 3 weeks/year of supplemental grid use); 51 of 142 EV chargers bidirectional, fed by a 30-Chevy-Bolt community car-share fleet via Miocar and CARB grants; must connect to PG&E grid under California law.
   - https://www.microgridknowledge.com/microgrids/residential/article/55311678/new-all-electric-apartment-community-plans-to-harness-microgrid-for-off-grid-living

5. **sonnen sonnenConnect TOU algorithm (pv-tech; Solar Power World, Oct 2023):** Patented algorithm predicts next-day weather and planned grid events; if PV is forecast to fall short, it pre-charges the battery on super off-peak grid power; injects solar into the grid only at the most valuable NEM 3.0 avoided-cost windows; sonnen claims resulting savings comparable to the old NEM 2 rates. This is the software layer that turns 219 separate batteries into one dispatchable asset.
   - https://www.pv-tech.org/sonnen-releases-smart-solar-and-storage-algorithm-targeting-californias-nem-3-0/
   - https://www.solarpowerworldonline.com/2023/10/sonnen-offers-optimized-tou-technology-in-california-vpp-program/

6. **Technology.org (Aug 2026) — DERMS explainer:** Behind every community microgrid sits a Distributed Energy Resource Management System: pulls telemetry from meters/IoT gateways, forecasts consumption and generation hours ahead, groups assets into fleets by location and grid constraints, sends charge/discharge/hold signals per device, and reports one aggregate number to the utility's SCADA instead of thousands of noisy feeds. Open protocols: OpenADR, IEEE 2030.5, MQTT; mismatched vendor protocols killed early-2010s VPP pilots.
   - https://www.technology.org/2026/08/21/how-virtual-power-plants-are-turning-home-solar-batteries-into-grid-backups/

7. **U.S. Energy Information Administration (via KB Home coverage):** Duration of major-outage blackouts tripled between 2013 and 2020 — the resilience pitch is not marketing fluff, it is the macro trend these communities sell against.

## Original contribution: three ownership models, one buyer's checklist
Nobody in the coverage has lined the three communities up side by side for the buyer:
- **Utility-owned (Myrtlebrook):** the utility funds, owns, and operates the battery. You are the host, not the owner. Resilience for you; $1.1M projected savings accrue to the utility. Question for the buyer: does your bill actually change, or did you just donate your roof to the grid?
- **Builder-bundled (KB Home):** the solar and 13kWh battery are baked into the new-home purchase (and mortgage). Question: at resale, is the battery a fixture the appraiser credits, or aging hardware the buyer discounts? A 13kWh battery is ~1 day of typical home use; the resilience story only works because the neighborhood shares.
- **VPP-clustered (Veridian/sonnen):** every home's battery is software-dispatched as one fleet with sub-2-second response. The algorithm, not the homeowner, decides charge state. Question: during a storm week, does the fleet optimize for YOUR house or the grid's peak? sonnen's TOU pre-charging logic suggests homeowner economics are protected under NEM 3.0, but that is vendor-described behavior, not audited.
- The "77% self-sufficient" and "94% of annual demand" figures are modeled against historical weather, not measured through an actual outage season — a distinction buyers should hear before they price in resilience.

## Strongest counterargument
A community microgrid concentrates single-vendor risk: if sonnen's software, Schneider's Energy Center, or BlockEnergy's operations go sideways, 219 homes share the failure instead of one. Shared-battery communities create genuine governance questions — HOA docs were not written for dispatch algorithms, and nobody has litigated who is liable when the fleet's optimization leaves your house dark during a storm. Vendor resilience claims are modeled (25 years of weather data, worst-year baselines) rather than observed; Redwood's own model admits ~3 weeks a year of grid dependence. And in California, the complex must stay grid-connected by law, so "energy independence" is a dispatch strategy, not a legal reality.

## Limitations
- KB Home figures ($6.65M grant, 219 homes, 40% reduction) come from a vendor press release; no independent post-occupancy bill data was found.
- Myrtlebrook was announced Nov 2023 with completion expected late 2025/early 2026; this research did not independently verify current completion status.
- Battery capacities are stated as design targets (43kWh per house pair, 33kWh per apartment); real installed numbers and homeowner bill outcomes are not published.
- sonnen's TOU algorithm behavior and NEM-2-comparable savings claims are vendor-described; no third-party audit of the algorithm was found.
- The DERMS explainer is a trade-press technical overview, not a product-specific manual for any of the three communities.
