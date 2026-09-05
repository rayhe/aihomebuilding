# Research: AI Manual J Load Calcs vs Rule-of-Thumb Oversizing
**Journalist:** Priya Greenwood (sustainability)
**Date:** 2026-09-05
**Status:** RESEARCH complete, ready for DRAFT

## Working headline
"Your HVAC Is Probably Oversized. An AI Load Calc Can Prove It."

## Core thesis
Most residential HVAC systems are oversized because contractors size by rule of thumb (e.g., 1 ton per 500 sq ft) instead of running ACCA Manual J. NREL data says 70-90% of US homes have energy-wasting HVAC faults. AI-assisted load calculation tools are collapsing the cost/time excuse for skipping Manual J, and the heat pump wave makes sizing mistakes more expensive than they were with gas furnaces.

## Kill test
Helps someone building or buying a home: YES. Right-sizing affects upfront equipment cost, comfort (humidity, short cycling), utility bills, and whether a heat pump works at all. Actionable: homeowner can demand a Manual J printout before signing; builder can adopt AI load calc tools for fast room-by-room calcs.

## Primary sources (6)

1. **NREL "Optimizing Residential HVAC Systems" (2024)** — fy24osti/88387. Key data: 51% of residential site energy goes to heating/cooling (EIA); "roughly 70% to 90% of homes throughout the country exhibit various energy-wasting HVAC issues" including improper sizing; DOE 2018 literature review finds 90-100% fault rates when duct leakage is factored in. Most homeowners assume the system is fine if it turns on.
2. **NREL "Energy Impacts of Oversized Residential Air Conditioners" (FY15)** — fy15osti/60801. Key data: oversizing penalties of 10-21% annual energy use when off-cycle parasitic losses are present (capacity ratios 1.8 and 2.2 vs right-sized). Without parasitic losses, penalties are small (1-4%) — nuance for the skepticism section.
3. **NREL "Cooling and Heating Season Impacts of Right-Sizing Fixed- and Variable-Capacity Heat Pumps" (FY15)** — docs.nrel.gov 64274. Key data: variable-capacity heat pumps tolerate moderate oversizing far better; fixed-capacity units suffer cycling losses. Attic ducts + oversized SEER 21 unit increased cooling energy 21% vs indoor ducts.
4. **NREL "Strategy Guideline: HVAC Equipment Sizing" (FY12)** — fy12osti/52991. Manual S limits: heat pump in cooling-dominated climate should not exceed load by more than 15%; heating-dominated up to 25% over heating load. Small-load efficient homes often cannot avoid exceeding 15% due to discrete equipment sizes.
5. **PNNL Quality Install Tool (DOE workflow templates, GitHub pnnl/quality-install-tool)** — Manual J section: correct sizing "much more important for a heat pump than for a furnace and AC system"; recommends ACCA-approved Manual J software, homeowner-present walkthrough.
6. **ACCA Manual J + IRC requirement (via GreenBuildingAdvisor, Martin Holladay, 2017)** — rule-of-thumb sizing "almost always results in oversized equipment"; IRC 2012 M1401.3 requires equipment sized per Manual S on Manual J loads. Software: Cool Calc, Elite RHVAC, Wrightsoft RightSuite.

## Secondary/context sources

- **KwikModel 3D** (kwikmodel.com) — AI-assisted 3D load modeling referenced in HVAC School Manual J video; claims faster takeoff from plans/photos. Independent verification of accuracy claims is thin (note for limitations).
- **Quilt** (TechCrunch, Dec 2025) — Redwood City heat pump startup, $33M Series A (Apr 2024) + $20M Series B, ~1,000 installs in 16 states; software-first approach with OTA updates improving unit performance 20%+. Illustrates the software-eats-HVAC trend.
- **California Title 24 2025 update (enforced 2026-01-01)** — heat-pump-default for new residential construction in CA (per krasa-ai HVAC skill knowledge base referencing CA 2026 code); similar rules in WA/NY/MA/CO. Raises stakes: new homes must be designed around heat pumps, which are less forgiving of bad sizing.
- **IRA incentives landscape shift** — 25C credit expired 12/31/2025; 25D terminated by OBBBA for expenditures after 12/31/2025. Heat pump economics now lean on state rebates (e.g., HEEHRA) and utility programs, not federal credits. Don't cite expired credits as live incentives.

## Numbers to use (with methodology transparency)
- 51% of residential site energy = heating + cooling (EIA, via NREL fy24).
- 70-90% of homes have energy-wasting HVAC faults (NREL fy24, citing DOE 2018 review + field studies).
- 10-21% annual energy penalty for 1.8-2.2x oversizing WITH off-cycle parasitic losses; only 1-4% without them (NREL fy15, 60801). Must present both — the nuance is the rigor.
- Manual S oversize limits: ≤15% over cooling load (cooling-dominated), ≤25% over heating load (heating-dominated) (NREL fy12).
- ~$2,000 federal 25C credit: EXPIRED 12/31/2025. Do not present as current.

## Original contribution (novel analysis required)
Calculate the "sizing tax" of rule-of-thumb vs Manual J on a hypothetical 2,000 sq ft new build in Climate Zone 3: rule-of-thumb (1 ton/500 sq ft) specs a 4-ton unit; a Manual J on a tight-envelope home typically lands 2-2.5 tons. Cost delta: 4-ton vs 2.5-ton heat pump equipment price gap (use ~$3,000-5,000 equipment delta from industry ranges, caveated), plus 10-21% energy penalty on the cooling portion of a ~$2,400/yr HVAC bill. Show the math in-article with assumptions stated.

## Strongest counterargument (must engage at full strength)
Oversizing is not always negligence. In very tight new homes, the smallest available equipment still exceeds Manual S 15% limits (NREL fy12 acknowledges this). Contractors oversize deliberately as insurance against callback complaints on the hottest day of the year, and a comfort complaint costs a contractor far more than the homeowner's extra energy dollars. Variable-capacity/inverter equipment largely erases the oversizing penalty by modulating down. So the "AI fixes sizing" story overstates the problem for modern inverter systems — the real victims are fixed-capacity single-stage replacements in existing homes.

## Limitations to state explicitly
- KwikModel/other AI load calc accuracy claims are vendor claims; no third-party audit exists. We could not verify the "minutes vs hours" speedup independently.
- The 10-21% penalty assumes parasitic losses proportional to capacity; real homes vary widely (duct leakage dominates in many cases).
- Equipment cost deltas are market estimates, not quotes; regional contractor pricing varies ±40%.
- Field data on AI load calc adoption rates in residential contracting does not exist; claims about uptake are anecdotal.

## Actionable takeaways (required)
1. **Homebuyer/renovator:** Before signing an HVAC contract, ask for the Manual J printout. If the contractor quotes tonnage off square footage alone, get a second bid. Cost of a standalone Manual J: typically $200-500 from an energy auditor.
2. **Builder:** Cool Calc ($50-100/month plans; verify current pricing) or KwikModel produce room-by-room Manual J from plans in far less time than Wrightsoft data entry. Break-even is roughly one avoided callback or one downsized equipment spec per quarter.
3. **Heat pump shoppers (CA/WA/NY/MA/CO):** new code defaults make heat pumps the baseline; sizing matters more because undersized units fall back to expensive resistance heat. Demand Manual J + Manual S documentation at permit.
