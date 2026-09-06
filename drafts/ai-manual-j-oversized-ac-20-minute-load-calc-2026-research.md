# Research: Your AC Is 40% Too Big. The Load Calculation That Would Have Caught It Takes 20 Minutes Now.

**Slug:** ai-manual-j-oversized-ac-20-minute-load-calc-2026
**Journalist:** Jake Kowalski (Construction Technology)
**Date:** September 6, 2026
**Status:** researched, drafting

## Thesis
Most residential HVAC equipment is oversized because contractors skip or shortcut the ACCA Manual J load calculation. The field data is damning (FSEC: >50% of 368 Florida homes installed cooling capacity >120% of Manual J; only 33% of contractors even use Manual J). The historical excuse, "a proper load calc takes all day," is dying: ACCA-certified software does it in ~30-60 minutes, and a new wave of AI tools (HVAKR, TruCalc, HVAC Hero App) reads PDF floor plans and produces block loads in minutes. The article gives homeowners/builders the math to check their own equipment (sf/ton rule, Manual S 15% ceiling) and the contract language to demand a Manual J.

## Kill test
Helps a homebuyer or builder right now: demand the Manual J report before the equipment gets ordered (it is code-required under the IECC in most jurisdictions anyway); run the sf/ton check on any bid in 30 seconds; know which AI tools exist so "it takes too long" is no longer an acceptable excuse. Passes.

## Primary sources (6)

1. **Florida Solar Energy Center, FSEC-PF-328-97 (James, Cummings, Sonne, Vieira, Klongerbo, 1997)** — field study, 368 recently built Florida homes: installed cooling capacity compared against Manual J (ACCA 1986 procedure) from house audit data. "Over 50% of the homes had installed systems with cooling capacity greater than 120% of the calculated Manual J value. Thirty-one percent of the 78 heat pump homes had installed heating capacity greater than 120%." A prior FSEC contractor survey found 33% of responding residential contractors use Manual J for sizing. Definite increase in peak energy use observed for oversized systems in submetered data. http://publications.energyresearch.ucf.edu/wp-content/uploads/2018/06/FSEC-PF-328-97.pdf

2. **NREL, "Energy Impacts of Oversized Residential Air Conditioners: Simulation Study of Retrofit Sequence Impacts" (NREL/TP-5500-60801)** — simulation study in hot-humid climates. Finds oversizing has very little impact on *overall energy use* via cycling degradation model (Cd ~0.07 for modern single-stage units), modeled with the PLF = 1 - Cd(1-PLR) cycling framework from Henderson (2000). Important honesty input: the pure cycling-loss energy penalty is small; the real costs are upfront price, short cycling wear, and humidity control. https://www.nrel.gov/docs/fy15osti/60801.pdf

3. **NREL, "Strategy Guideline: HVAC Equipment Sizing" (NREL/TP-5500-52991)** — ACCA Manual S sizing limits: heat pump in cooling-dominated climate should not exceed the load by more than 15% in either mode; in heating-dominated climate may exceed heating load by up to 25%. Notes manufacturer capacity increments can force selections over 15% oversized, and recommends multispeed equipment in that case. https://www.nrel.gov/docs/fy12osti/52991.pdf

4. **ACCA HVAC Blog, "From hours to minutes: How MiTek Wrightsoft cut HVACR contractors' most difficult bottleneck" (Aug 1, 2025)** — Wrightsoft Right-J/Right-D produces ACCA-compliant load calcs and duct designs in about an hour vs. "many hours" manually (contractor testimonial for a standard 3,000 sq ft, 4-bedroom house); Wrightsoft was the first software to automate Manual J (engineer Bill Wright, since 1984). https://hvac-blog.acca.org/from-hours-to-minutes-how-mitek-wrightsoft-cut-hvacr-contractors-most-difficult-bottleneck/

5. **AEC Magazine, "HVAKR: integrated AI HVAC design" (2026)** — HVAKR's AI layer acts as a "mechanical design agent": given an architectural drawing + natural-language prompt, it models spaces, assigns zoning, defines envelope properties, runs analytical queries (e.g., flagging spaces with highest cooling load per sq ft and naming the driver). Built around PDFs, no BIM required. Satellite imagery + generic template envelopes produce rough block loads in minutes. https://aecmag.com/mep/hvakr-integrated-ai-hvac-design/

6. **EngineerMD, "AI for HVAC Load Calculations" (Sep 2026)** — roundup of 2026 AI tools: Energent.ai (AI parses PDFs/3D models, room-by-room loads, BIM integration), HVAKR (cloud, AI agents for load calc + duct layout), TruCalc (mobile-first, scan plans for instant reports), HVAC Hero App (iPad, AI field verification and on-site load recalculation), Trane Abound/ARIA, Carrier HVAC AI platforms. Notes PINNs, computer vision extracting room data from drawings, NLP parsing specs. http://www.engineermd.com/2026/09/ai-for-hvac-load-calculations.html

Supporting (secondary / guidance, cite as such):
- ENERGY STAR heating/cooling brochure: "Properly Size and Install Your System. Bigger is not always better. Oversized equipment may cycle on and off more frequently, making the home less comfortable and shortening the life of the equipment." Heating/cooling ~half of home energy; ENERGY STAR HVAC saves 10-30%. http://www.energystar.gov/ia/partners/publications/pubdocs/ENERGY%20STAR%20HeatingCooling%20Brochure_508.pdf
- GreenBuildingAdvisor / Allison Bailes (Energy Vanguard): ACCA Manual S caps oversizing at 30% (variable capacity) / 15% (fixed capacity); Manual J result already runs 10-20% above actual cooling need; sf/ton rule of thumb: high-performance home = 1,000+ sf/ton. https://www.greenbuildingadvisor.com/article/5-tips-for-sizing-an-air-conditioner ; https://www.greenbuildingadvisor.com/article/an-ac-sizing-benchmark-for-high-performance-homes
- MSU Extension P2785: proper Manual J yields sensible + latent loads; many high-SEER units have poorer humidity removal; reducing on/off cycles saves energy and extends life. https://extension.msstate.edu/sites/default/files/publications/P2785_rev2023web.pdf
- ContractingBusiness (July 2026): Manual J required by code in any jurisdiction on 2018 IECC or newer; real load calcs need ZIP-code ASHRAE design temps, measured envelope areas, blower-door infiltration, real internal gains, duct gains for ducts in vented attics. https://www.contractingbusiness.com/residential-hvac/blog/55381831/manual-j-or-missed-profits-the-real-reason-systems-cant-keep-up

## Original contribution (the math nobody did)
Run NREL 60801's own cycling model (PLF = 1 - Cd(1-PLR), Cd = 0.07) on the FSEC-typical oversize case and show the honest result: a 40%-oversized unit vs. a Manual-S-compliant one burns only ~1% more energy from cycling losses alone, which reframes the article honestly. The real penalties are: (a) upfront cost premium per ton, (b) compressor wear from short cycling (ENERGY STAR: shortened equipment life), (c) humidity failure driving thermostat overcooling. Plus the sf/ton diagnostic anyone can run in 30 seconds.

Cycling math (shown in article): right-sized CR=1.15 (Manual S ceiling), oversized CR=1.40 (FSEC typical). At PLR=0.6: PLF_rs = 1-0.07(1-0.6)=0.972; PLF_os = 1-0.07(1-0.6/1.40*1.15)... 

Cleaner formulation: PLR scales inversely with capacity ratio. PLR_os = PLR_rs * (CR_rs/CR_os) = 0.6 * (1.15/1.40) = 0.493. PLF_os = 1 - 0.07*(1-0.493) = 0.9645. E ratio = PLF_rs/PLF_os = 0.972/0.9645 = 1.0078. So ~0.8% cycling energy penalty. NREL's simulation agrees: "very little impact on overall energy use."

But FSEC field data: "a definite increase in peak energy use was observed." Reconcile: the honest story is the penalty shows up at the meter as peak demand and at the thermostat (humidity -> overcooling), not in the cycling model. Overcooling rule of thumb: ~3% more cooling energy per degree F of setpoint depression; oversized units that short-cycle leave RH high, pushing setpoints 2-3 F lower. (Present as modeled, with assumptions stated.)

## Strongest counterargument
NREL's own simulations say oversizing barely moves total energy use, so the "oversizing costs you a fortune in electricity" framing is dishonest; humidity and comfort are the real casualties. Also: Manual J itself has wide error bands (10-20% above true need per Bailes; garbage-in defaults like assumed infiltration), so a calc done from builder-grade defaults can be as wrong as a rule-of-thumb guess. And variable-speed/inverter equipment largely forgives sizing errors by modulating capacity. The honest position: oversizing is a comfort and equipment-life problem first, an energy problem second, and a bad load calc is not better than no load calc.

## Limitations
- FSEC study is Florida, 1997, on 1990s-built homes; not nationally representative and 30 years old. No comparable modern national field study found.
- NREL 60801 is simulation (DOE-2/EnergyPlus), not field data; its "very little impact" finding is hot-humid-climate specific.
- AI tool capabilities (HVAKR, Energent.ai, TruCalc) are vendor claims + trade-press coverage; no independent accuracy benchmarking found. Wrightsoft/Right-J is ACCA-Approved (certified), which is a stronger claim than the AI startups'.
- Upfront cost premium per ton varies by market; use directional framing, not a hard dollar figure, or cite a range with caveats.
- Did not verify whether AI tools produce ACCA-compliant J reports or just block loads; that distinction matters for code compliance and should be flagged in-article.

## Notes for voice (Jake)
Punchy, short paragraphs, hands-on. Bar talk with specs. Get to the point. Jake respects the job site and distrusts hype, so the honest NREL finding (oversizing barely moves energy) is a Jake move: he'd call out the "oversizing costs you thousands" industry scare line as BS and then hit you with the real costs. His skepticism IS the article's spine.
