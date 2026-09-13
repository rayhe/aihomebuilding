# Research Notes: AI Floor Flatness — Your Slab Is Off by an Eighth of an Inch and Your Tile Installer Knows It

**Topic:** Laser-scan + machine-learning floor flatness/levelness measurement (ORNL FLAT, FARO Flatness Check) and what out-of-tolerance residential slabs cost homeowners
**Journalist:** Jake Kowalski (construction tech, tools, robotics)
**Kill test:** PASS. A buyer or builder with a $500K project on the line gets: what F-numbers are, what an out-of-tolerance slab costs to fix ($1.50–$6/sq ft for grinding; self-leveling compound ~$950/625 sq ft at 1/4 in per a homeowner case), and that corrections cost almost nothing if caught while the concrete is still wet. Directly actionable.
**Date:** September 13, 2026

## The problem
Concrete slabs are finished by eye and straightedge. Nobody knows whether the slab is actually flat until the tile goes down and lippage shows, the hardwood creaks, or the flooring installer adds a $4,000 leveling line item to the bid. The traditional QA method — a tech walking the slab with a profiling tool, marking lines, collecting readings, then calculating numbers by hand — takes hours to days. In residential work it often doesn't happen at all: slabs are placed, cured, and covered, and the flatness bill arrives at flooring time.

## The technology
- **ORNL FLAT (Flat and Level Analysis Tool)**, U.S. Department of Energy / Oak Ridge National Laboratory, announced June 3, 2025. A 360-degree laser scan of the foundation feeds a point cloud through ORNL-developed segmentation algorithms and machine learning that detect and analyze flatness and levelness deviations as small as 1/8 inch. Feedback in under one minute, so corrections happen while concrete is still workable. Demonstrated at two housing developments: foundation measurement time cut by more than 90%, no slab preparation required. Lead researcher Nolan Hayes (BTRIC). Future work: suspended slabs, floor decking, pier foundations. Source: https://www.ornl.gov/technology/202305305 and https://www.newswise.com/doescience/using-ai-to-construct-on-the-level
- **FARO Flatness Check**, FARO Technologies, launched 2022. App embedded in the FARO Sphere ecosystem; pulls scan data from Focus Premium / M70 / S70 / S150 / S350 laser scanners and renders an AR heat map of the slab on a standard iPad, color-coded to floor flatness and levelness deviations. GC Skender's construction technologist Ben Stocker: "scan, analyze, and view a floor analysis on the jobsite in augmented reality." Sources: https://www.engineering.com/faro-flatness-check-released-for-concrete-construction/ and https://lidarnews.com/press-releases/faro-releases-first-augmented-reality-app-for/
- **F-numbers (ASTM E1155 / ACI 302 / ACI 117):** FF (flatness) limits slope changes over 1 ft; FL (levelness) limits departure from design grade over 10 ft. Values run 12–45 in practice; an FF30/FL24 floor is twice as flat and twice as level as FF15/FL12. Random-traffic residential floors are measured with statistical sampling per ASTM E1155 (standard costs $86 from ASTM). Source: https://store.astm.org/e1155-14.html and ACI 302.1R-04 §8.15.
- **Commercial spec discipline worth copying:** standard spec language (per PDHonline sample spec) requires floor tolerance measurements within 48 hours of slab installation, before shores/forms are removed, with reports to the contractor within 72 hours — and the contractor remedies any section below minimum local FF/FL. Residential specs almost never include this.

## Cost data (actionable core)
- Concrete grinding: $1.50–$6.00/sq ft (LatestCost 2026). A 1,500 sq ft slab costs $2,250–$9,000 to remediate. https://latestcost.com/concrete-grinding-cost-per-square-foot/
- Angi 2026: concrete resurfacing $3–$5/sq ft; removal $2–$6/sq ft on top of new slab install ($4–$8/sq ft). https://www.angi.com/articles/how-much-do-polished-concrete-floors-cost.htm
- Self-leveling compound: a Bogleheads homeowner case — 625 sq ft needed ~$950 of premix just for 1/4 in coverage; deeper fixes need much more. https://www.bogleheads.org/forum/viewtopic.php?p=5862671
- Wet-concrete correction cost: essentially a labor re-pass while the crew is still on site — a rounding error versus any of the above. This is the economic argument for FLAT-style scan-before-cure.

## Skepticism / honest limits
- ORNL FLAT is a research tool with two housing-development demos — not a shipping product you can buy. Don't overclaim availability.
- FARO Flatness Check requires a FARO laser scanner (5-figure hardware) plus the Sphere ecosystem — realistic for GCs and concrete contractors, not for DIY homeowners.
- F-numbers were designed for commercial/industrial slabs (ACI 117); residential has no enforced FF/FL spec. The article must not pretend there's a code requirement for homes — the gap IS the story.
- Laser scans measure geometry, not cure state, shrinkage curl, or subgrade voids. A flat day-one slab can still curl.

## Angles to avoid
- No "inflection point" framing. No "$X billion market" opener. No press-release paraphrase of FARO's launch (2022 news, dated — lead with ORNL 2025).
- Start with a person, a job site, or a number: the 48-hour spec window, the 1/8-inch detection threshold, or the tile installer's change order.

## Primary sources (3+ required — have 5)
1. ORNL technology page: https://www.ornl.gov/technology/202305305
2. ORNL/DOE news via Newswise (June 3, 2025): https://www.newswise.com/doescience/using-ai-to-construct-on-the-level
3. Engineering.com on FARO Flatness Check: https://www.engineering.com/faro-flatness-check-released-for-concrete-construction/
4. ASTM E1155 standard page: https://store.astm.org/e1155-14.html
5. Angi 2026 concrete cost data: https://www.angi.com/articles/how-much-do-polished-concrete-floors-cost.htm

## Actionable takeaways (draft for article)
- If you're pouring a slab this year: ask your concrete contractor for a flatness reading within 48 hours of placement, before shores come off. If they own a laser scanner (or rent one), they can hand you an AR heat map the same day.
- If you're a homebuyer: the slab nobody measured is the floor you paid $4,000 to fix. A pre-drywall laser scan is the cheapest insurance in the build.
- If you're remodeling: a straightedge and a laser level tell you where the low spots are before you buy $950 of leveling compound for a room that needs three times that.
