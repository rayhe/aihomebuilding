# Research Notes: AI vs. the Framing Waste Factor

**Article slug:** ai-framing-lumber-waste-factor-takeoff-higharc-2026
**Proposed headline:** Your Framing Bid Pads 15% for Waste. An AI Just Read the Plans in 90 Seconds.
**Journalist:** Frank DeLuca (project management & operations; cost discipline, waste factors, takeoffs)
**Kill test:** Does this help someone building or buying a home? Yes. Every framing bid carries a waste factor line that builders and owners accept blindly. Knowing the industry average (15%), the achievable number (5-8% with precise takeoff), and the tools that close the gap lets a GC, owner-builder, or buyer interrogate the bid. The math works out to roughly $1,000+ per house on a typical lumber package, and it compounds for production builders.

## Primary sources (5)

### 1. ProBuilder / IBACOS: "Reduce Lumber Waste: 3 Effective Strategies for Home Builders" (Andrew Shipp, building performance specialist, IBACOS PERFORM Builder Solutions)
- Builders average a **15% lumber waste factor** on their framing jobs.
- Mechanism: estimators order wrong lumber lengths; e.g., 10 rafters at 7 ft each ordered as 8-footers produces ten 1-foot scraps; ordering five 14-footers and halving them produces zero waste.
- Takeoffs routinely include ~10 extra sheets of OSB beyond what the job requires; the excess clutters the site, gets damaged, goes in the dumpster, or "disappears in the back of a pickup truck."
- Feedback loop fix: site supervisor confirms required OSB/stick counts with framers, aligns with estimator for the next take-off.
- URL: https://www.ProBuilder.com/construction/quality-matters/article/55219941/reduce-lumber-waste-3-effective-strategies-for-home-builders

### 2. USDA Forest Service / Virginia Tech: "Characterization and potential recycling of home building wood waste" (Araman, Hindman, Winn; Southern Research Station)
- Measured wood waste at a new green housing development: a **2,000 sq ft single-family home generates 1,500-3,700 lbs of solid-sawn wood waste and 1,000-1,800 lbs of engineered wood products (EWP)** waste.
- Spruce lumber waste ranged 0.58-1.98 lbs per sq ft of living space; OSB 0.5-0.9 lbs/sq ft; treated wood 0.03-0.29 lbs/sq ft.
- Key driver: **different framing subcontractors produced different waste levels** on the same builder's homes; waste is partly a people-and-process variable, not just a materials variable.
- Repeat builds of the same design + precutting in a central area would cut waste per square foot.
- Much of the solid-sawn and EWP waste could be recycled into other products.
- PDF: https://research.fs.usda.gov/download/treesearch/39428.pdf

### 3. EPA: "Construction and Demolition Debris Generation in the United States, 2014" (Dec 2016)
- Methodology table: **5% of wood products are discarded during new construction or installation** (vs. concrete 3%, drywall/plasters 10%, asphalt shingles 10%, steel 0%).
- Source data: DelPico (2004) and Thomas (1991) — older but the standard EPA methodology reference.
- Implication: the gap between a builder's 15% waste *factor* and the 5% *discarded* rate is where the money hides — the other 10 points are over-ordering, damage, shrinkage, and lumber that leaves the site on non-invoiced trucks.
- PDF: https://www.epa.gov/sites/default/files/2016-12/documents/construction_and_demolition_debris_generation_2014_11302016_508.pdf

### 4. Higharc Series C + US LBM partnership (June 30, 2026; $95M led by Insight Partners, ~$175M total since 2019; reported via AEC Magazine, LBM Journal, HBS Dealer, SiliconANGLE)
- Higharc's **AutoTranslate AI** ingests a flat 2D floor plan and converts it into a 3D spatial data model (proprietary AI vision models + deterministic construction logic), then generates a **precise material takeoff aligned to US LBM's catalog** — counting every stud, joist, beam, drywall sheet, door frame.
- US LBM CDTO Jonathan Greene: the traditional takeoff is "laborious and unreliable"; manual blueprint sifting produces overruns, "wasted materials being ordered but never used, and costly delays."
- Higharc customers report: product development timelines from months/years to weeks/days; time to community open cut 25-50%; margin up 10-15%.
- CEO Marc Minor: funding will scale AI product development; workforce ~215, half from homebuilding/architecture backgrounds.
- Signature Homes VP R&D Kyle Bear: "Higharc is different. It's grounded in how homes are actually built, so the outputs are usable from day one."
- Note: the AEC review cautions Higharc "doesn't yet do the roof truss design or the plumbing" — skepticism anchor: AI takeoff does not cover everything; roof trusses remain outside its frame.
- URLs: https://aecmag.com/features/higharc-pushes-buildings-as-data-thinking-into-new-areas/ ; https://www.lbmjournal.com/industry-news/press-release/15829163/us-lbm-us-lbm-partners-with-ai-company-higharc

### 5. Bobyard AI takeoff launch (June 17, 2026, GlobeNewswire press release)
- AI takeoff and estimating for flooring, drywall, paint, insulation, doors, and windows.
- Customer-reported results: **average 65% reduction in takeoff time**, enabling more bids per estimator.
- San Francisco-based, founded 2023 by Stanford-trained engineer Michael Ding; backed by "the largest Series A in construction software history" (per company statement).
- Framing takeoff exists in adjacent tools (PrebuiltML X — 50M+ product database, cut-logic reports "to minimize jobsite waste"; customers include Weyerhaeuser, 84 Lumber).
- URL: https://www.globenewswire.com/news-release/2026/06/17/3313581/0/en/Bobyard-Launches-AI-Takeoff-and-Estimating-for-Flooring-Drywall-Paint-Insulation-and-Doors-Windows.html

## Cost math (for the article's actionable core)

- A typical 2,000 sq ft home uses ~16,000 board feet of lumber and 6,000 sq ft of structural panels (Floor Daily, 2003 figure, still the standard reference).
- Random Lengths 2024 composite averaged ~$400/MBF; standard home needs ~15 MBF (U.S. Lumber Coalition/West Fraser 2024 data).
- Builder's delivered cost of softwood lumber for an average home: ~$8,413 in 2024 (U.S. Lumber Coalition analysis: $400/MBF + $75/MBF transport + 18% wholesaler margin), or ~$10,000 lumber package at $400/MBF per the Floor Daily framing-package reference.
- The spread between a 15% waste factor and a 5-8% achievable factor on a $10,000 lumber package: **roughly $700-$1,000 per house** in lumber ordered but never installed. For a production builder at 50 homes/year: ~$40,000-$50,000/year of buried margin.
- Caveat: the waste factor covers cutting waste, damage, pilferage, and over-ordering as a single blended number. EPA's 5% "discarded during construction" is only the in-the-dumpster slice. Both numbers are real; they measure different things, and the article must not conflate them.

## Original contribution: The Waste Factor Audit

Three questions to ask about any framing bid, derived from the sources above:
1. **What waste factor did you apply to the framing lumber line?** (Industry average is 15%; a builder using precise takeoffs can justify 8%. If they can't quote the number, it's padded.)
2. **Where do your takeoff quantities come from — manual blueprint counts or a model-based takeoff?** (Manual takeoffs are where the 10 extra OSB sheets live. Model-based takeoffs like Higharc AutoTranslate count what the plans actually specify.)
3. **Who picks up the leftover?** (The USDA data shows different crews produce different waste on identical plans. Waste is a labor-management variable. A builder who measures crew-level waste is a builder worth hiring.)

## Skepticism points (required by STORY_GUIDE.md)

- Higharc's takeoff is grounded in timber-frame residential design; roof trusses and plumbing are still outside its model. AI takeoff is not yet the whole house.
- The 15% waste factor is an industry average, not a law of physics. Well-run crews on repeat floor plans get well under it; first-time designs with unproven crews can exceed it. The USDA range (0.58 to 1.98 lbs/sq ft across six homes) proves the same plans can produce wildly different waste in different hands.
- EPA's 5% figure relies on 2004 and 1991 source studies — dated, and it measures discard, not waste factor. State this plainly.
- Recycling the waste (USDA paper's focus) is the consolation prize; not ordering it in the first place is the win.
- AI takeoff accuracy claims come from vendors and customers (65% time reduction, 10-15% margin increase). Independent verification is thin. Say so.
