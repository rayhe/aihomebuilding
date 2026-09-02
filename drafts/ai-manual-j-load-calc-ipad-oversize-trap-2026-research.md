# Research: AI Manual J Load Calcs vs. Rule-of-Thumb Oversizing

**Slug:** ai-manual-j-load-calc-ipad-oversize-trap-2026
**Article #:** 749
**Journalist:** Jake Kowalski (construction tech, tools)
**Ship after:** 2026-09-07
**Kill test:** Does this help someone building or buying a home? YES. A homeowner replacing HVAC or building new can demand a Manual J, run a 30-second sf/ton sanity check on any bid, and avoid paying thousands extra for an oversized system that dehumidifies worse and dies sooner.

## Working headline
"Your Contractor Sized Your AC by Square Footage. An iPad Did the Real Math in 15 Minutes."

## Angle
The most expensive math error in residential construction is also the most common: sizing HVAC by rule of thumb (500 sq ft per ton) instead of an ACCA Manual J load calculation. Now an iPad with LiDAR does in 15 minutes what used to take a designer hours or days, and ServiceTitan just bought the company that built it. The tech excuse for skipping the load calc is dead. The question is whether contractors will use the tool to right-size systems or just to close sales faster.

## Primary sources

1. **ServiceTitan acquisition of Conduit Tech (Sept 18, 2026... actually Sept 18, 2025)**
   - ServiceTitan agreed to acquire Conduit Tech, founded 2022 by Marisa Reddy and Shelby Breger.
   - iPad-based LiDAR: scan home, generate 3D model, ACCA-certified Manual J, visualize install, all in under 15 minutes.
   - Expected to close in ServiceTitan's fiscal Q3 2026.
   - https://www.servicetitan.com/blog/servicetitan-acquires-conduit-tech
   - https://Www.globenewswire.com/news-release/2025/09/18/3152907/0/en/ServiceTitan-to-Empower-HVAC-Contractors-with-Acquisition-of-Conduit-Tech.html

2. **IAQ Medics case study (ServiceTitan, Dec 2025)**
   - DC-metro HVAC contractor, early Conduit adopter.
   - Before: Manual J load calcs took hours or days, paper-based permitting.
   - After: "Within 15 minutes, we could complete a formal Manual J calculation, engage the customer, and close the sale right on-site. We were then able to achieve seamless permitting success in Fairfax County." — Dario Compain, founder/GM.
   - https://www.servicetitan.com/blog/iaq-medics-conduit-tech-servicetitan

3. **NREL: Strategy Guideline on HVAC equipment sizing (nrel.gov/docs/fy12osti/52991.pdf)**
   - Manual S: AC total capacity 95–115% of Manual J load; furnace 100–140%.
   - Heat pump in cooling-dominated climate: not to exceed load by more than 15%.
   - Use manufacturer expanded performance data, not AHRI rating-condition data.

4. **NREL: Energy Impacts of Oversized Residential Air Conditioners (nrel.gov/docs/fy15osti/60801.pdf)**
   - Simulation study of retrofit-sequence impacts; models cycling degradation (Cd ~0.07 for modern single-stage).
   - Prior work (2007) in hot-humid climates found oversizing had "very little impact on overall energy use" — the penalty is comfort/dehumidification and equipment life, not just kWh. Important nuance for honesty.

5. **GreenBuildingAdvisor — Martin Holladay (2017)**
   - "Using a rule of thumb to size heating and cooling equipment almost always results in oversized equipment."
   - IRC 2012 Section M1401.3: equipment sized per ACCA Manual S on loads per Manual J. Required by most codes, widely ignored in practice.
   - https://www.greenbuildingadvisor.com/article/who-can-perform-my-load-calculations

6. **Energy Vanguard — Allison Bailes, "An AC Sizing Benchmark for High-Performance Homes"**
   - HERS rater found Energy Star homes at 529, 544, 781 sq ft per ton: "The first two, actually, are terrible."
   - Benchmark: high-performance home = 1,000 sf/ton or more.
   - Oversized AC: doesn't run long enough to dehumidify, short-cycles, shortens equipment life.
   - https://www.greenbuildingadvisor.com/article/an-ac-sizing-benchmark-for-high-performance-homes

7. **Manual J cost data**
   - My Green Montgomery (county program): typical Manual J $200–$500, "usually less than the cost of a heat pump that's one size larger." Oversized equipment cycles more, extra compressor wear.
   - http://mygreenmontgomery.org/2023/55201/
   - AC Supply Texas price sheet: Manual J $250 (<2,000 sf) to $850 (8,000–10,000 sf); J+D+S bundles $325–$1,450.
   - https://www.acsupplytexas.com/take-pricing/

8. **ACDirect (Aug 2026): "$29,000 HVAC System That Should Have Cost $12,000"**
   - Red flag #1 for overquoting: no load calculation performed. "If the salesperson never measured your home... they're guessing at the system size."
   - ACCA: proper sizing is the single most important factor in system performance.
   - 3,000 sq ft fair installed range $9,000–$14,000 (mid-efficiency 15–17 SEER2).
   - https://www.acdirect.com/blog/29000-hvac-system-should-cost-12000/

9. **ContractingBusiness — "Manual J or Missed Profits?" (July 2026, Chad's AC Direct)**
   - Manual J 8th edition written into virtually every state/IECC residential energy code; not optional under 2018 IECC or newer.
   - Manual S must match equipment at design conditions (e.g., 95°F outdoor), not rating conditions; most software-driven calcs quietly fail on the latent load.
   - Duct gains: vented attics in humid climates hit 130°F; R-6 flex losing 25% capacity is not a rounding error.
   - https://www.contractingbusiness.com/residential-hvac/blog/55381831/manual-j-or-missed-profits-the-real-reason-systems-cant-keep-up

10. **ACHR News — "Fear of Residential Load Calcs" (contractor survey)**
    - Why the rule of thumb persists: load calcs are unpaid pre-sale consulting. "I have had no takers for the $300 [load calc offer]." Customers take the calc and shop it to cheaper bidders.
    - The 15-minute iPad scan directly attacks this objection: the calc stops being a cost center.
    - https://www.achrnews.com/articles/fear-of-residential-load-calcs

11. **ContractorMag / Elite RHVAC background**
    - Oversized AC: homeowner must overcool below comfort to dehumidify, creating mold opportunity around the air handler.
    - https://www.contractormag.com/management/article/20877425/software-helps-calculate-residential-hvac-loads-duct-sizes

## Original calculation (novel contribution)

Take a 2,400 sq ft new build in a cooling-dominated climate:

- **Rule of thumb** (500 sq ft/ton, the industry's favorite guess): 2,400 / 500 = 4.8 → sold as a **5-ton** system.
- **Manual J on a decently built home** (Energy Vanguard high-performance benchmark: 1,000 sf/ton): 2,400 / 1,000 = 2.4 → **2.5-ton** system.
- **Oversize ratio:** 5 / 2.5 = 200% of load. Manual S allows 95–115%. The rule-of-thumb system is nearly double the legal sizing limit.
- **Upfront cost of the error:** a Manual J costs $200–$500 (My Green Montgomery). ACDirect's fair installed range for 3,000 sq ft is $9,000–$14,000; industry rule of thumb on equipment delta is roughly $1,500–$2,500 per ton installed. Two phantom tons ≈ **$3,000–$5,000** of equipment the house never needed, to say nothing of the ductwork sized for airflow the house will never see.
- **Payback on demanding the calc:** $350 (midpoint Manual J) vs. $4,000 (midpoint oversize penalty) = the calc pays for itself **11x over** before the first utility bill arrives.
- **Time collapse:** IAQ Medics went from hours/days per calc to 15 minutes on-site. The "load calcs take too long" excuse had a half-life measured in months after September 2025.

Assumptions stated: 500 sf/ton rule of thumb is the commonly cited contractor shortcut; 1,000 sf/ton benchmark applies to high-performance envelopes and flatters the comparison for typical code-built homes (a code-minimum 2,400 sq ft home might land ~700–800 sf/ton, still making the 5-ton unit ~40–60% oversized). Per-ton installed delta varies by market and efficiency tier.

## Skepticism / counterargument (full strength)
- NREL's own simulation work found oversizing had "very little impact on overall energy use" in hot-humid climates. The honest case against oversizing is comfort (humidity), equipment longevity (short-cycling), and upfront cost, not the power bill. An article claiming big energy savings from right-sizing would be lying.
- A 15-minute iPad scan is only as good as its inputs: garbage envelope assumptions in, garbage load out. The ContractingBusiness piece shows even diligent shops botch the latent load and duct gains. Speed doesn't fix judgment.
- ServiceTitan's acquisition framing is sales-enablement first ("close the sale right on-site"). A tool that makes load calcs instant can also make oversized quotes instant and prettier. The iPad doesn't care whether the number it prints is honest.
- Conduit's deal hadn't closed as of the announcement (expected fiscal Q3 2026); integration claims are forward-looking.

## Limitations
- Per-ton installed cost delta ($1,500–$2,500) is an industry heuristic, not a quoted figure; actuals vary by SEER2 tier, brand, and market.
- The 1,000 sf/ton benchmark is for high-performance homes; applying it to a code-minimum build overstates the oversize gap. Article will show both.
- No independent third-party verification of Conduit Tech's "ACCA-certified in under 15 minutes" claim beyond ServiceTitan's marketing and one customer case study.
- NREL oversizing energy-penalty findings are simulations (EnergyPlus/DOE-2), not field measurements.

## Actionable takeaways (for the article)
- Homeowner replacing HVAC or building new: demand a room-by-room Manual J in writing before signing. Cost $200–$500; refusal is a red flag (ACDirect).
- 30-second sanity check: divide conditioned square footage by the quoted tonnage. Under ~700 sf/ton on a new build deserves an explanation; Bailes' benchmark is 1,000+ for high-performance.
- GCs: the "calcs take too long / customers shop them" objection died with the 15-minute scan. Price the calc into the bid instead of eating it.
- Ask for Manual S equipment selection at design conditions, not just the Manual J total. The latent (humidity) capacity is where humid-climate systems fail.
