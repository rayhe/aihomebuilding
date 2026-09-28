# Research: TyBOT Rebar-Tying Robot and the Residential Threshold
Slug: `tybot-rebar-tying-robot-residential-threshold-math-2026`
Journalist: Jake Kowalski (construction tech, tools, robotics)
Date: September 28, 2026

## Angle (1-2 sentences)
TyBOT, an autonomous rebar-tying robot, ties 900-1,200 intersections an hour against a human's 150-250, and in 2026 it learned to ride timber edge forms instead of needing a screed rail. But the vendor's own rule of thumb is jobs of 20,000 sq ft or more, which means a typical single-family foundation is roughly 16x too small to justify a visit.

## Self-critique gate
- Is this the best use of this cycle? Yes: robotics + quantified threshold math + a 2026 deployment development (screed-rail-free mode) gives Jake a specs-driven story with an original per-slab calculation nobody has published. Coverage check: queue has robotic slab layout, drywall robots, exoskeletons, robot masons, but no rebar-tying robot piece.
- Kill test: Does this help someone building or buying a home? Yes for production builders and GCs (go/no-go decision with a number attached); custom builders learn to ignore it; homeowners get bid context on where rebar labor actually goes.

## Primary sources (6)
1. **ACR TyBOT spec sheet (official, REV D 2026)** - tie rate MIN 900/hr, OBSERVED 1,200+/hr; 15-lb spool = ~3,000 ties; 16.5 AWG poly / 16 AWG black annealed; 100%/50%/33% patterns; #4 to #8/#9 bar; 3"x3" to 12"x12" grid; startup < 2 min; 32-104 F operating range. URL: https://cdn.prod.website-files.com/694601eb982190a0a03ecc31/6a72041e6dd8a7a7389f2026_50-003-0015-D_TyBOT%20Product%20Brochure.pdf
2. **ENR (Mar 2025)** - "Robot Ties More Than 11K Rebar Intersections on Florida Project": 36,000 ties in a 40-hr week; RaaS per-tie pricing ("if it completes a tie, you pay"); vendor rule of thumb: jobs 20,000 sq ft or greater; schedule reliability cited as #1 value. URL: https://www.enr.com/articles/54387-robot-ties-more-than-11k-rebar-intersections-on-florida-project
3. **Equipment World (Sep 2024)** - TyBOT 3.0: $425,500 (67 ft) / $455,500 (117 ft) purchase; 1,200 ties/hr vs 150-250/hr human; ~2 hr setup; 25% install savings solo, 50% with IronBOT; 65+ US projects. URL: https://WWW.EQUIPMENTWORLD.COM/roadbuilding-equipment/article/15684551/new-generation-of-rebartying-robot-tybot-30-hits-the-market
4. **For Construction Pros (~Jul 2026)** - new deployment method: bogies ride timber edge forms, no screed rail needed (rail previously forced timeline changes); Florida contractor: minimum "two or three spans... 40-foot width or wider"; dual cameras + light ring for night work; snow/obstructions stop it; 12-hr generator runtime. URL: https://www.forconstructionpros.com/construction-technology/article/22866045/advanced-construction-robotics-rebar-tying-construction-robot-evolves
5. **BLS Occupational Outlook Handbook, Ironworkers** - reinforcing iron and rebar workers: $59,280/yr median (May 2024); overall ironworker median $29.78/hr; 85,100 jobs; 4% growth 2024-34; ~7,000 openings/yr. URL: https://www.bls.gov/ooh/Construction-and-Extraction/Structural-iron-and-steel-workers.htm
6. **CPWR/elcosh (NIOSH/Ontario studies)** - NIOSH: tying rebar at ground level with pliers raises hand/wrist and low-back injury risk; Ontario Construction Safety Association: rodworkers have a higher proportion of lost-time musculoskeletal injuries to back and upper limbs than all other construction trades combined; doctor-diagnosed: tendonitis 19%, ruptured disk 18%, shoulder bursitis 15%, carpal tunnel 12%. URL: https://elcosh.org/record/document/2055/d001031.pdf

## Original contribution: the 16-foundation math
Typical US single-family slab-on-grade, 30 x 40 ft = 1,200 sq ft, #4 bars at 12 in. o.c. each way:
- Bars: (30/1)+1 = 31 one way, (40/1)+1 = 41 the other
- Intersections: 31 x 41 = 1,271
- At the common 50% tie pattern: ~636 ties
- Human (150-250 ties/hr per ACR-sourced range): 2.5-4.2 hrs; at BLS $29.78/hr median wage = $75-$126 wage cost, ~$110-$190 burdened
- TyBOT (1,100/hr field rate): ~35 min of active tying
- ACR's own 20,000 sq ft rule of thumb / 1,200 sq ft per slab = ~16.7 slabs. Round: about sixteen foundations to justify a mobilization. Setup alone (~2 hr) exceeds the active tying time on a single home.
- Wire logistics: one 15-lb spool (~3,000 ties) covers ~4.7 slabs at the 50% pattern.
- Wage spread caveat: BLS state medians run $36,940/yr (MS) to $106,340/yr (WA), so the human-cost side of this math moves 2.9x by market.

## Limitations (to state in article)
- ACR's per-tie RaaS price is not public; no true break-even price exists in the open, so the threshold is stated in square feet (vendor's own) not dollars.
- Tie-pattern acceptance: deployments use single-snap ties at 50-100% patterns on bridge decks under engineer supervision; whether a residential inspector or structural engineer signs off on robot-tied mats for a house foundation is not independently verified in any public source found.
- TyBOT 3.0 purchase price and savings claims are vendor figures; independent third-party audit of the 25% install-time savings claim was not found.
- Injury stats describe ironwork/rodwork generally, not TyBOT-supervised crews specifically.
- All 65+ deployments located are horizontal infrastructure (bridges, decks); zero documented residential house foundations.
