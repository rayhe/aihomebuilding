# Research: AI Weather-Day Budget vs. Contract Allowance
**Slug:** ai-weather-day-budget-noaa-normals-contract-allowance-2026
**Journalist:** Frank DeLuca (Project Management & Operations)
**Article #:** 1032
**Date:** 2026-10-07

## Working headline
"Your Contract Allows 5 Weather Days. The Climate Record Says 36."

## Angle (1-2 sentences)
Residential contracts grant a fixed number of weather days pulled from template language, but NOAA publishes the actual rain-day climatology for free. Combining NOAA 1991-2020 normals with the Census build-duration data produces a zip-code-specific weather-day budget that shows a standard contract allowance under-covers a Seattle custom build by ~6x while over-covering Phoenix.

## Self-critique gate
- Best use of cycle? Yes. DeLuca hasn't done a weather/schedule piece; delay-forensics (1027-adjacent) was about builder slip data, not the weather-day contract mechanism. The NOAA-math original contribution is real and checkable.
- Verdict: PROCEED.

## Kill test
Does this help someone building or buying a home? Yes. A buyer signing a custom-home contract can compute the weather-day budget for their NOAA station before signing and negotiate the allowance or the contingency. A GC can price the risk instead of absorbing it silently.

## Primary sources (6+)
1. **NOAA NCEI, U.S. Climate Normals 2020 (1991-2020), station SeaTac USW00024233.** Mean days with precipitation >= 0.10" by month: Jan 12.7, Feb 9.3, Mar 10.9, Apr 8.7, May 5.8, Jun 4.3, Jul 1.8, Aug 2.3, Sep 4.2, Oct 8.4, Nov 12.9, Dec 12.1 (annual 93.4). Days >= 0.50": Jan 3.9, Feb 2.4, Mar 2.1, Apr 1.5, May 0.9, Jun 0.7, Jul 0.3, Aug 0.6, Sep 0.9, Oct 2.6, Nov 3.9, Dec 3.6 (annual 23.4). https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&startDate=0001-01-01&endDate=9996-12-31&stations=USW00024233&format=pdf
2. **NOAA NCEI, U.S. Climate Normals 2020, station Phoenix Deer Valley USW00003184.** Mean days >= 0.10" by month: Jan 1.7, Feb 2.3, Mar 1.4, Apr 1.0, May 0.4, Jun 0.2, Jul 1.9, Aug 2.1, Sep 1.5, Oct 1.6, Nov 1.2, Dec 2.3 (annual 17.6). Days >= 0.50" Oct-Feb: 0.3, 0.3, 0.4, 0.5, 0.7. https://www.ncei.noaa.gov/access/services/data/v1?dataTypes=MLY-TMAX-NORMAL,MLY-TMIN-NORMAL,MLY-TAVG-NORMAL,MLY-PRCP-NORMAL,MLY-SNOW-NORMAL&dataset=normals-monthly-1991-2020&format=pdf&stations=USW00003184
3. **U.S. Census Bureau Survey of Construction, via NAHB Eye on Housing (Sep 2025):** 2024 single-family average 9.1 months authorization-to-completion (1.4 auth + 7.6 construction); homes built by hired contractors ~12 months; built-for-sale 7.6. https://eyeonhousing.org/2025/09/single-family-homes-are-built-faster-in-2024/
4. **Census SOCDS via NAHB (Sep 2026, 2025 data):** average 8.8 months (1.4 auth + 7.4 construction); hired-contractor ~11.7 months; Pacific division 10.3 months. https://builder.media/2026/09/average-home-build-time-falls-to-8-8-months/
5. **NAHB AD&C financing survey, Q1 2026 (via FEA):** average contract rate on pre-sold single-family construction loans 7.19%; speculative 7.31%. https://getfea.com/end-use/us-builder-credit-conditions-tighten-slightly-in-q1
6. **AIA A201 General Conditions, Sec. 8.3.1 / 15.1.6.2:** contractor entitled to time extension for adverse weather "not reasonably anticipated"; weather claims must document conditions "abnormal for the period of time" that "could not have been reasonably anticipated." (Standard form; summarized via construction-law analysis https://bs.herrmanneasyedit.com/news-insights/what-you-need-to-know-about-construction-weather-delay-claims/pdf)
7. **Law Insider, Weather Days Allowance sample clause:** (540 calendar days / 365) x 7 = ~10 weather days on an 18-month contract; delays allowable but non-compensable; unused allowance becomes float. https://www.lawinsider.com/clause/weather-days-allowance
8. **Town of Clayton, NC, Exhibit G - Weather Delays (public owner spec):** adverse weather defined as precipitation > 0.10" (same threshold NOAA publishes); monthly baseline days Jan-Dec: 6,6,6,6,6,3,3,3,4,4,5,5 (54/year); weather-delay day counts only if work prevented >= 50% of scheduled day; mud/dry-out days allowed after 1.0"+ events. https://townofclaytonnc.civicweb.net/document/61055/Exhibit%20G%20-%20Weather%20Delays.pdf?handle=A6CEEB6659584EAB943BEAA073DFB7F1
9. **CFMA, "Key Items in Your Construction Contract: Damages for Delay":** projects may build weather days into the schedule; additional time granted only when adverse days exceed what was built in. https://cfma.org/articles/key-items-in-your-construction-contract-damages-for-delay
10. **ALICE Technologies generative scheduling (trade press):** Denver healthcare project, 84 days shaved off a 540-day schedule (BD+C Tech Report 5.0, Mortenson). Takenaka/One Bangkok: 300+ schedule options generated, 30+ days trimmed (AEC Magazine). $600M highway: 69 days saved vs. Primavera P6 team. https://www.bdcnetwork.com/building-technology/article/55145406/tech-report-50-ai-arrives and https://aecmag.com/project-management/major-contractors-invest-in-ai-powered-construction-optioneering/
11. **ALICE Technologies blog (Sep 2026, vendor analysis):** productivity-loss cliff between 10% and 20% loss jumps impact from days to +195 calendar days; supports "catch slippage early" thesis. https://blog.alicetechnologies.com/maximum-impact-minimum-disruption-a-guide-to-targeted-optimizationthe-fastest-path-to-schedule-acceleration-and-project-recovery

## Original contribution: the weather-day budget model
Scenario: custom home, hired contractor, Pacific division: 10.3 months auth-to-completion (SOCDS 2025); minus 1.4 auth = ~8.9 months construction. Ground-breaking Oct 1. Assume excavation/foundation/framing/roofing/exterior (weather-exposed) occupy months 1-5 (Oct-Feb); envelope closed end of month 5.

Seattle (SeaTac normals):
- Days >= 0.10", Oct-Feb: 8.4 + 12.9 + 12.1 + 12.7 + 9.3 = 55.4
- Days >= 0.50", Oct-Feb: 2.6 + 3.9 + 3.6 + 3.9 + 2.4 = 16.4 (near-certain full lost days on exposed work)
- Days 0.10-0.50": 55.4 - 16.4 = 39.0; assume 50% lost on exposed tasks (mud, sequencing friction) = 19.5
- Expected lost days = 16.4 + 19.5 = 35.9, ~36 days
Contract allowance: Law Insider sample formula (contract days / 365 x 7) scaled to a 270-day build = 270/365 x 7 = 5.2, ~5 days. Shortfall: ~31 days.
Cost: $750,000 pre-sold construction loan at 7.19% (NAHB AD&C Q1 2026) => daily carry at full draw = 750000 x 0.0719 / 365 = $147.74/day. 31 days = $4,580. GC extended overhead (stated assumption for small residential GC: supervision, trailer, insurance, equipment): $300/day x 31 = $9,300. Combined beyond-allowance exposure ~$13,880, call it ~$14,000. (Interest accrues on drawn balance only, so full-draw figure is the peak-draw case; average-draw is roughly half.)

Phoenix (Deer Valley normals), same Oct-Feb window:
- Days >= 0.10": 1.6 + 1.2 + 2.3 + 1.7 + 2.3 = 9.1
- Days >= 0.50": 0.3 + 0.3 + 0.4 + 0.5 + 0.7 = 2.2; light band 6.9 x 0.5 = 3.45; expected lost ~ 6 days
- The same 5-day scaled allowance covers Phoenix's expected outcome with margin and covers ~14% of Seattle's. The allowance is local weather wearing a national template.

Legal kicker: under AIA A201 15.1.6.2, a weather claim requires showing conditions "could not have been reasonably anticipated." NOAA normals are the anticipation baseline. A rainy November in Seattle is anticipated by definition, so the fight is won or lost in the contract's baseline table, not in the claim.

## AI angle
- ALICE-style generative scheduling is the industrial version of this article's model: simulate many schedule alternatives against weather scenarios. All published results are commercial-scale (Denver 84 days, One Bangkok 30+, highway 69).
- Residential reality: thin market. What small GCs can do now is the manual version: normals-driven weather budget at bid time, NWS 7-day forecast coupled to the critical path each week, and interior tasks (MEP rough-in, drywall) held as weather float to swap in on rain days.
- Progress-tracking (photo/AI progress tools) catches weather-driven slippage before it compounds, which is where ALICE's productivity-cliff analysis says the money is.

## Skepticism / strongest counterargument
1. Weather is a rounding error next to the real delay drivers: owner changes, material lead times, permitting, labor. NAHB attributes the post-2015 slowdown (7.2 to 8.8 months) to regulation, rates, and labor shortage, not rain.
2. A GC with 20 years in Seattle carries the rain in his bones. The model adds precision, not revelation.
3. More allowance = more padding; owners pay for padding either way. The fix that actually shortens exposure is drying-in faster (panelized walls, roof-first sequencing), not budgeting more rain days.
4. Vendor AI scheduling claims are commercial-scale and unverified by us; the residential product barely exists.

## Limitations (for the article)
- The 50% loss rate on 0.10-0.50" days is an illustrative heuristic, not an empirical finding.
- Loan/overhead figures are a worked example with stated assumptions; interest accrues on drawn balance only.
- ALICE results are commercial-scale, vendor-reported; not independently verified.
- One start-date scenario (Oct 1); other start dates shift the window.
- NOAA 1991-2020 normals are backward-looking; current extremes (atmospheric rivers) are not in the baseline.
- Mud/dry-out days (allowed in specs like Clayton NC's) not modeled; station data is not your exact site (microclimates).
- OSHA heat rules / extreme-heat stoppages not modeled (Phoenix's real weather risk is heat, not rain).

## Actionable takeaways (for "What to Do Monday Morning")
1. Before signing a custom-home contract, pull your NOAA station's normals (ncei.noaa.gov, free) and compute the weather-day budget for your exposed-phase window. Put the monthly table in the contract like Clayton NC does.
2. Negotiate the allowance against the budget, or add a line-item weather contingency ($/day x expected shortfall) instead of a day count.
3. GCs: sequence with the NWS 7-day forecast weekly; hold interior tasks as weather float; dry-in is the milestone that ends the exposure.
4. If a weather claim ever matters, remember AIA 15.1.6.2: "not reasonably anticipated" is judged against the normals, so baseline the normals in the contract up front.
