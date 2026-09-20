# Research: Always-On Loads & AI Disaggregation (NILM)
**Article #921 | Slug:** ai-always-on-load-nilm-standby-watts-2026 | **Journalist:** Priya Greenwood | **Date:** 2026-09-20

## Kill test
Does this help someone building or buying a home? YES. A buyer can read the 2 a.m. baseload off any smart meter or $99 panel monitor during inspection and price the home's phantom appetite before closing. A homeowner gets a payback ladder ($25 smart strip to $200 circuit-level monitor) against a repriced $240/year always-on tax. One evening of kill-switching recovers more energy than a year of LED-bulb guilt.

## The problem
- DOE: standby power is 5-10% of residential electricity, costing Americans roughly $4 billion/year (older, standby-only figure). DOE also cites ~$100/year per average household from unplugging alone.
- NRDC "Home Idle Load" (2015, with Stanford; 70,000-home PG&E smart-meter dataset + 10-home in-depth audits): always-on loads = **23% of residential electricity** in Northern California. Average always-on draw: **164 watts** (152W coastal zone, 175W inland), the equivalent of brewing 234 cups of coffee every day for a year.
- At the 2015 national average rate of 12.5 cents/kWh, always-on-but-inactive devices cost the average American household **$165/year**, roughly **$1.00 per always-on watt per year** (NRDC rule of thumb).
- Composition of always-on: consumer electronics (TVs, computers, printers, game consoles) = **51%**; miscellaneous electric loads (recirculation pumps, aquariums, fishponds, GFCI outlets) = **34%**; traditional big uses (heating, cooling, lighting, refrigeration) = only **15%**.
- Average home audited had **65 electrical devices**; about two-thirds drew more than 1 watt each in always-on mode.
- Worst-case always-on device costs from NRDC's onsite audits: water recirculation pump up to $93/yr; desktop computer up to $49; TV up to $38; cable set-top box up to $30; audio receiver up to $22; printer up to $11; furnace up to $8; coffee maker up to $6; dryer up to $4; GFCI outlets $1 each.
- NRDC found **40-60% idle-load reduction potential** through 40 simple no-cost or low-cost measures.
- Newer reported estimate: inactive plugged-in devices costing the US **$19 billion/year** (Waste & Recycling Magazine, 2026, citing the same research line).
- Idle load varies wildly by model (printers 2-26W across homes); little relationship to home age, limited correlation to occupants or home size.

## The AI tech (NILM lineage)
- Non-intrusive load monitoring began with Hart (1992): individual appliances identified from whole-house power by detecting step changes in real and reactive power.
- Modern field: sequence-to-point CNNs (Zhang et al., BuildSys 2019), transformer-based models (Yue et al., Applied Energy 2022). Commercial products claim 85-95% disaggregation accuracy for major appliances.
- Khan et al. (2025, South African Journal of Industrial Engineering): low-cost Raspberry Pi + clip-on CT sensors + multilayer perceptron neural network, near-real-time appliance classification every 2 seconds, 100% accuracy on 4-appliance controlled test.
- **Sense** (Cambridge, MA; founded by speech-recognition veterans whose tech shipped in Samsung S-Voice and Apple Siri): samples household power **a million times per second**, uses ML to fingerprint device signatures, distinguishes ~30 appliance types simultaneously, claims accurate disaggregation of **80% of home energy use**. CEO Mike Phillips (TechBrew, 2022): active users save **9-15% on utility bills**, though only about half of users reach those savings; company materials cite ~9% average. Moving toward embedding the AI directly in next-generation smart meters (Australia partnership announced).
- **Emporia Vue 3**: whole-home CT monitor, **$99 mains-only / $149 with 8 circuit sensors / $199.99 with 16 sensors** (shop.emporiaenergy.com, verified Sept 2026), claims +/-2% utility-grade accuracy, 1-second real-time data, no subscription; company claims users save **10%+ on energy bills** (vendor claim). Circuit-level sensors catch always-on culprits per circuit (HVAC, water heater, EV charger) without ML fingerprinting.
- MIT Technology Review (2016): Sense "at the cutting edge of what I have seen people attempting in this area" (Michael Baker, SBW energy efficiency consultancy).

## Original contribution: the repriced dollar-a-watt rule + payback ladder
NRDC's $1.00-per-always-on-watt-per-year rule was priced at 12.5 cents/kWh in 2015. Repriced at the EIA's ~17 cents/kWh average residential rate (2024-2025):
- 1 watt x 8,760 hours = 8.76 kWh/year x $0.17 = **$1.49 per always-on watt per year**.
- 164W always-on x 8,760h = 1,436.6 kWh/year -> **$244/year**, not the $165 NRDC reported at 2015 rates. The phantom tax grew ~48% while nobody was looking, driven by rates, not behavior.
- Apply NRDC's 40-60% reduction potential: **$98-146/year recoverable** in the average always-on home.
- Payback ladder: a $25 smart power strip that kills a 35W entertainment center (8,760h x 35W x $0.17 = $52/yr) pays back in under 6 months. The $99 Emporia Vue mains-only monitor, if it unlocks the low-end 40% reduction ($98/yr), pays back in ~12 months. The $199.99 16-sensor Vue at the same 40% pays back in ~24 months. Sense's ML fingerprinting (9-15% bill savings per its CEO) is the premium route for homes where the culprits are unknown; circuit sensors are the budget route when you already suspect the water heater or the pool pump.
- National frame: $19B/year (recent estimate) vs DOE's $4B/year (older, standby-only scope) - the gap is methodology, not contradiction: always-on idle includes devices doing low-grade work (recirculation pumps, networking gear), not just pure standby.

## Strongest counterargument
Not all always-on load is waste, and the 23% figure flatters the story. NRDC's dataset is Northern California mild-climate territory, where heating and cooling loads are small, so the always-on share looks outsized; in Minnesota in January the same 164 watts is a rounding error next to the furnace. Some always-on draw is legitimate and non-negotiable: refrigerators, smoke/CO detectors, medical devices, security systems, and the networking gear that keeps them online. Disaggregation accuracy claims are vendor-reported; independent validation of Sense's "80% of home energy" and the 9-15% savings figure is thin, and the CEO himself admits only half of users hit those savings. NILM also struggles with the fastest-growing loads: variable-speed inverter HVAC, EV chargers, and heat-pump water heaters produce smeared signatures that look like noise, and two identical devices (two TVs, two fridges) are nearly indistinguishable. A $99 CT monitor tells you the water heater circuit is hot at 3 a.m.; it cannot tell you whether that's a failing thermostat or a teenager's shower. The algorithm names the watt, not the motive.

## Limitations
- The 164W / 23% figures come from a 2015 NRDC-Stanford study of 70,000 PG&E homes in two Northern California climate zones; national extrapolation and the $19B figure are reported estimates, not federal statistics. Climate-zone bias acknowledged above.
- Rate repricing uses the EIA ~17 cents/kWh national average residential rate (2024-2025); actual payback varies enormously by utility (Hawaii ~40 cents, Louisiana ~12 cents).
- Savings claims (Sense 9-15%, Emporia 10%+) are vendor-reported; no independent randomized trial of consumer NILM savings was found. Sense's CEO notes only ~half of users achieve the claimed savings band.
- The 85-95% disaggregation accuracy figure comes from a prior-art research note summarizing the field, not a single peer-reviewed benchmark; real-world accuracy degrades with simultaneous appliance operation (Khan et al. note this explicitly).
- Emporia pricing verified from shop.emporiaenergy.com and a Feb 2026 review roundup; Sense pricing not independently verified and deliberately omitted.
- Smart-strip payback example uses a 35W entertainment-center idle draw (illustrative, within the NRDC-measured range for TV centers), not a measured home.

## Actionable takeaways (for the article)
1. Buying a home: during inspection, check the 2 a.m. smart-meter read or clamp a $99 monitor on the panel for a night. A 300W+ sleeping baseload is a negotiation data point - it means the house is full of 24/7 electronics the seller never audited.
2. Homeowner triage, cheapest first: walk the house at midnight with a $25 Kill-A-Watt-style plug or smart strip. Entertainment centers (TV + console + soundbar + streamer) are the classic 30-90W idle cluster; NRDC measured TV centers up to $38/yr and desktops up to $49/yr.
3. The $99 Emporia Vue (mains-only) answers "how big is my always-on load" in one night; the $199.99 16-sensor version answers "which circuit" without any machine learning. Sense's ML fingerprinting is for the curious who want per-device naming.
4. The 40-60% rule: NRDC found nearly half of idle load dies to no-cost measures (timers on networking gear, killing the second fridge, unplugging the garage-door opener's vampire transformer). Do the free half before buying any hardware.
5. What not to kill: fridge, smoke/CO detectors, medical devices, sump pumps, security and networking gear you actually rely on. A smart strip on the wrong outlet trades $40/year for a flooded basement.
