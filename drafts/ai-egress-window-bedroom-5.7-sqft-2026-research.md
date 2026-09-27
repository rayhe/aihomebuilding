# Research: AI + Bedroom Egress Windows — the 5.7 sq ft rule nobody measures
Slug: `ai-egress-window-bedroom-5.7-sqft-2026` | Journalist: Catherine "Code" Chen | Date: 2026-09-27

## Thesis
Every sleeping room needs an emergency escape/rescue opening: 5.7 sq ft net clear (5.0 at grade), 24" min height, 20" min width, sill ≤44". AI plan-review tools (PlanAId, UpCodes) now check egress on drawings. But the real failure mode is field reality: the most common bedroom window in America — the 3-0 × 4-0 double-hung — fails the 5.7 rule above grade on AREA and fails the 24" minimum on HEIGHT, and inspectors almost never measure net clear opening with a tape. Original contribution: worked clear-opening math on common window sizes with stated frame-intrusion assumptions, showing the 3050 double-hung fails and the 3060 passes by ~0.04 sq ft (a rounding error), plus the 8-ft-ceiling header-fit problem.

## Kill test
Helps someone building or buying a home: YES. A builder can catch this at the window-schedule stage for $0; a homeowner buying a flipped house with a "bedroom" that has a non-egress window inherits a life-safety defect and an appraisal problem (can't legally count it as a bedroom). Actionable: measure clear opening before drywall; casements are the rational egress choice.

## Primary sources (6)
1. IRC 2021 Section R310 (via ICC Digital Codes, Idaho 2020 Residential Code mirror): R310.2.1 min 5.7 sq ft net clear (5.0 grade/basement exception); R310.1.2 min 24" clear height; R310.1.3 min 20" clear width; R310.2.2 sill ≤44"; R310.2.3 window well ≥9 sq ft, 36" projection/width; operational from inside without keys/tools/special knowledge (top sash of double-hung does NOT count). URL: https://codes.iccsafe.org/content/IDRC2020P1/chapter-3-building-planning
2. UL FSRI "Close Before You Doze" campaign: 17 minutes → 3 minutes or less escape time after smoke alarm (synthetic furnishings, open floor plans, lightweight construction). URL: https://www.firehouse.com/community-risk/press-release/21025876/underwriters-laboratories-inc-fire-safety-campaign-encourages-closing-doors-to-slow-fire
3. USFA "Civilian Fire Fatalities in Residential Buildings (2013-2015)": bedrooms = 51% of fatality locations; 11pm-7am = 51% of civilian fire fatalities; 31% of victims were sleeping, 37% trying to escape. URL: https://www.govinfo.gov/content/pkg/GOVPUB-HS5_200-PURL-gpo121725/pdf/GOVPUB-HS5_200-PURL-gpo121725.pdf
4. NFPA home fire data (via Security Sales summary of NFPA report): half of home fire deaths reported 11pm-7am; 25% of home fire deaths from bedroom-origin fires. URL: https://www.securitysales.com/news/report-7-people-die-each-day-in-home-fires/24755/
5. Thornapple Construction egress cost guide (West Michigan, 2026): retrofit $3,000-$6,000 all-in; new construction $1,500-$3,000; builder-grade vinyl casement $400-$700; ladder threshold adds $800-$1,500. URL: https://www.thornappleconstruction.com/blog/emergency-exit-windows-for-basements-a-complete-guide
6. OFA Group PlanAId launch (Sept 8, 2026, GlobeNewswire): AI blueprint analysis — exit-door count/width, travel-distance, dead-end corridor, egress-capacity checks; $9.99/mo; beta since Oct 2025. URL: https://www.globenewswire.com/news-release/2026/09/08/3357589/0/en/ofa-group-launches-planAId-bringing-ai-assisted-building-code-intelligence-earlier-into-the-design-process.html?print=1

## Original contribution: the clear-opening math (worked example, stated assumptions)
Assumptions: builder-grade vinyl double-hung; ~3.25" total frame/jamb intrusion per side (6.5" total width loss); ~2" of sash/meeting-rail intrusion on the operable sash height. Net clear = actual airspace with window open, bottom sash only (IRC: top pane doesn't count — requires "special knowledge"). Manufacturers publish unit-specific egress charts; this is illustrative.

- 3-0 × 4-0 double-hung (36"×48"): clear width ≈ 29.5", clear height ≈ 22" (half of 48 minus 2" rail). Area = 29.5×22/144 ≈ 4.5 sq ft. FAILS 5.7 on area AND fails the 24" minimum height. The single most common bedroom window size in American tract housing cannot serve as an egress window above grade.
- 3-0 × 5-0 double-hung (36"×60"): clear width ≈ 29.5", clear height ≈ 28". Area = 29.5×28/144 ≈ 5.74 sq ft. PASSES — by 0.04 sq ft, a rounding error. One manufacturer's frame profile change flips the verdict.
- 3-0 × 4-0 casement (36"×48"): nearly full opening, clear ≈ 29.5"×41.5" ≈ 8.5 sq ft. PASSES with room to spare.
- 8-ft-ceiling fit problem: a 5-0-tall window with sill at the 44" max puts the head at 104" (8'-8") — above a standard 8-ft ceiling. In 8-ft rooms the minimum compliant double-hung often can't fit under the header, which is why casements dominate compliant bedrooms.

## Cost ladder
- Catch at window-schedule/framing stage: $0 (swap the window type on the order; casement ≈ double-hung price at builder grade, $400-$700).
- Above-grade bedroom window swap post-construction: ~$500-$1,000/window (national cost guides).
- Basement retrofit (cut foundation): $3,000-$6,000 (Michigan 2026); national $2,700-$5,900.
- Unpermitted basement "bedroom": can't be appraised/marketed as a bedroom; insurance and liability exposure.

## The AI angle
- PlanAId ($9.99/mo, launched Sept 8 2026) and UpCodes AI Plan Review (June 2026) validate egress on DRAWINGS: door counts, travel distances, corridor dead-ends.
- What AI plan review cannot see: the window actually installed (substitutions), painted-shut sashes, furniture/AC units blocking the opening, replacement windows in remodels that never went through permit review, and the difference between marketed unit size and net clear opening.
- Honest framing: AI moved the check earlier (design) but the defect lives in the field. The tape measure is still the audit tool; AI's job is to flag the schedule before the order is placed.

## Strongest counterargument
Egress windows are the last line of defense, not the first. NFPA data: most fire deaths happen in homes with no working smoke alarms; closed bedroom doors buy more survival time than any window (UL FSRI). The 5.7 sq ft number is sized for a firefighter in full gear entering, not just an occupant exiting — a smaller window still lets most people out. And there's a security tension: ground-floor egress windows are also intruder access points, which is why bars/grilles exist (code requires quick-release). Spending $5,000 on a basement egress cut while the house has dead smoke alarms is misallocated safety money.

## Limitations
- Clear-opening math uses assumed frame intrusions; actual varies by manufacturer and product line — always check the manufacturer's egress chart for the specific unit.
- Cost ranges are regional (Michigan contractor + national guides); labor markets vary widely.
- No national dataset exists on egress-window violation frequency; "inspectors rarely measure" is supported by inspector-forum anecdotes (InterNACHI threads), not a study.
- Fire-escape-time figures (17→3 min) are UL FSRI campaign figures from full-scale burns, widely cited but vendor-framed.

## Headline options
- "Your Bedroom Window Is 0.6 Square Feet Short of Code. The Fix Costs Nothing If You Catch It Before Drywall."
- "America's Favorite Bedroom Window Fails the Fire Code Above the First Floor."
- "Your 3-0 × 4-0 Bedroom Window Doesn't Meet Egress Code. Nobody Measured It."

Chosen: "Your 3-0 × 4-0 Bedroom Window Doesn't Meet Egress Code. Nobody Measured It."
