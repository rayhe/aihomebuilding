# Research: AI Hail-Damage Assessment vs. the Claim Decision (article #871)

**Journalist:** Jake "Jackhammer" Kowalski (construction tech, tools, specs, skepticism)
**Angle:** A hailstorm hit your roof. Two AI systems scanned it before you climbed a ladder: the insurer's and the contractor's. They found the same dents and read them opposite ways. The science says the argument is real, and most homeowners file before they understand it.

## Kill test
Homeowner in a hail state (TX, CO, KS, OK, NE, MN, IL) wakes up to golf-ball hail. Roofers knock within 48 hours. Insurer sends an autonomous drone. This article tells them: what counts as damage, when to file, when filing costs more than it pays. Passes.

## Headline candidates
- "The Hail Lasted Nine Minutes. The Fight Over Your Roof Will Last Nine Months."
- "Your Shingles Are Dented, Not Damaged. The Contractor Wants $17,631 Anyway."
- "An AI Counted 400 Hail Marks on Your Roof. Zero of Them May Count."

## Primary sources (8)

### 1. Verisk 2026 U.S. Roof Report (data analytics firm to the insurance industry)
- Average residential roof replacement cost: **$17,631** in 2025, up 33% over the 2021-2024 average.
- Average repair cost: **$4,699**, up 25%.
- Non-catastrophic wind and hail roof claims rose from **17% to 25% of all residential claims** between 2022 and 2024 — everyday weather, not named storms, driving severity.
- In Verisk-designated hail states, **57% of residential roofs are 9 years old or newer** vs. 38% elsewhere — faster replacement cycles.
- Roofs in moderate/poor condition show ~60% higher loss costs than good/excellent.
- Source: https://www.verisk.com/49be6d/siteassets/media/campaigns/gated/underwriting/the-state-of-americas-roofs.pdf

### 2. Cotality hail risk report 2026 (via USA Today, 2026-03-24)
- **43.5 million U.S. properties** at moderate or greater hail risk; damage exposure up to **$17.84 trillion** reconstruction cost.
- 2025: **142 days** with damaging hail (20-year avg: 122); 600,000+ homes hit with 2-inch+ hail.
- Texas leads: nearly 8M properties at risk, $3.09T exposure. June 2023 Texas storm cluster: 680,000+ homes hit by 1-inch+ hail, **$7-10B insured losses, 95% hail**.
- Older roofs more brittle and likely to fail on impact.
- Source: https://www.usatoday.com/story/money/personalfinance/real-estate/2026/03/24/hail-risks-surge-homeowners-weather-damage/89289931007/

### 3. IBHS hail research — Impact Resistance Test Protocol + hail cannon study
- IBHS built a hail cannon replicating real hailstone mass/density/structure; tests 20 two-inch hard + 20 two-inch soft hailstones per product, scored (not pass/fail) via imaging software reconstructing 3D damage.
- Key finding (2025): **frequent sub-severe hailstones do cumulative damage** — cumulative granule loss from small-hail series exceeded a single 2-inch impact. NWS "severe" threshold (1") understates shingle risk.
- 2025 Hail Impact-Resistant Shingle Ratings (with Principia): covers ~95% of impact-resistant shingle market, grades Excellent/Good/Marginal/Poor. "If a product rates Marginal or Poor, we do not recommend using it in areas that experience hail."
- Source: https://fmj.ifma.org/facing-hail-damage ; https://www.carriermanagement.com/news/2025/10/06/280133.htm ; https://www.morningstar.com/news/pr-newswire/20251119fl28450/ibhs-releases-its-most-expansive-impact-resistant-shingle-ratings-to-date

### 4. Haag Engineering — functional vs. cosmetic damage definitions
- **Functional damage** = diminution of watershedding capability or reduction of expected service life. Bruise (mat fracture) = hail damage.
- Granule loss exposing bitumen without mat rupture = Haag counts as damage due to potential service-life loss; but minor granule loss that does not expose bitumen **"has not been found to cause any measurable loss of service life."**
- NRCA assessment procedure: fractures in new shingles from ~1.25"-2.25" ice spheres depending on product; chipped edges and surface scuffs are not functional damage.
- Asphalt 3-tab: ~1" threshold; laminated architectural: ~1.25"; wood shingles ~1.25"; concrete tile ~1.75".
- Source: https://haagglobal.com/articles/october-2019-blog-post/ ; NRCA guidelines PDF

### 5. EagleView Assess — autonomous drone + AI damage detection
- AI/ML + real-time 3D processing identifies hail, wind, aging damage; used by insurers AND contractors/inspectors; beta: adjusters reached decisions after reviewing avg 6 facets/home, 1.5x more claims/day, ~20% lower loss adjustment expense.
- Sept 2025 update: higher accuracy damage detection, fewer false positives; "Underwriting" report option for non-claims workflows.
- The same company sells storm-season tooling to roofers for "lead canvassing."
- Sources: https://www.globenewswire.com/news-release/2022/10/20/2538274/0/en/Announcing-EagleView-Assess-Autonomous-Drone-Sourced-Property-Intelligence.html ; https://rss.globenewswire.com/news-release/2025/09/10/3147793/0/en/Eagleview-Assess-Expands-Drone-Roof-Inspection-Solution-to-Include-Large-and-Complex-Roofs-AI-Driven-Models-Underpin-Offering.html

### 6. Severe convective storm loss totals — Swiss Re / Moody's (via Insurance Business, 2026-05-31)
- U.S. severe convective storm insured losses **$42B in first 9 months of 2025**; per-event costs 31% above prior decade average ("new normal" per Moody's).
- Swiss Re: global SCS insured losses **$50B** full-year estimate, third costliest on record; U.S. = 83% of global nat-cat insured losses.
- Roofing line items ~30% of all property claim estimate line items.
- Source: https://www.insurancebusinessmag.com/us/news/property/roof-claims-severity-hits-record-highs-even-as-storm-activity-falls-verisk-data-shows-577150.aspx

### 7. OSHA heat NEP context (discarded angle)
- Not used for this article. Heat stress wearables already covered in drafts.

### 8. Texas/Colorado hail litigation backdrop
- Claimants' attorneys and independent adjusters routinely dispute carrier "cosmetic only" findings; granule-stripping from sub-severe hail is the contested middle ground (Carrier Management, Oct 2025).

## The core tension (the story)
1. **The tools count anomalies; humans decide meaning.** EagleView's AI spots every hail mark, dent, scuff. Whether those marks are functional is a judgment call — and the two parties with AI in hand (insurer, roofer) get paid for opposite answers.
2. **The science is genuinely unsettled in the middle.** IBHS says sub-severe hail accumulates damage over time. Haag says minor granule loss without mat fracture doesn't measurably shorten service life. Both can be right about different shingles and different storms. That uncertainty is where claims live or die.
3. **The money is huge and lopsided.** Average replacement $17,631. Roofing = ~30% of all property claim dollars. Hail states replace roofs 1.5x faster (57% under 9 years).
4. **Homeowner asymmetry.** The insurer knows the IBHS rating of your shingle SKU, the storm's hail-size swath from radar data, and your roof's pre-storm condition score. You know you heard ice on the skylight. AI widens the gap unless the homeowner borrows the same tools.

## Original contribution: The Functional-Damage Test (homeowner decision framework)
Before filing a hail claim, run this:
1. **Get your own scan first.** A drone roof inspection ($150-300) or a roofer's EagleView-style report gives you the anomaly count. Know the number before the adjuster tells you theirs.
2. **Demand the bruise test, not the dent count.** Ask the adjuster to show mat fractures/bruises in test squares, not raw mark counts. Per Haag/NRCA: granule scuffs without fractures are not functional damage. Per IBHS: sub-severe accumulation is the exception worth arguing.
3. **Check your shingle's IBHS rating.** If your shingle rates Marginal/Poor, your replacement case is stronger; if Excellent, adjuster has science on their side.
4. **Price the claim.** Deductible (often 1-2% of dwelling coverage for wind/hail = $3,000-8,000 on a $400K home) vs. likely payout; ACV depreciation on older roofs can leave the check smaller than expected.
5. **Know the non-renewal risk.** Hail states are seeing carriers tighten roof schedules; a denied or small claim still sits on your CLUE report.

## Skepticism (required)
- AI damage detection is marketed as "unbiased." The same vendor's tools serve insurers cutting checks AND roofers chasing jobs. The algorithm finds marks; the business model decides what marks mean.
- Impact-resistant shingles (Class 4) get insurance discounts in some states, but IBHS ratings show wide variance — "impact resistant" is a label, not a guarantee.
- Homeowner drone scans are only as good as the operator; and no AI can date a bruise precisely — pre-existing vs. storm damage remains the oldest fight in roofing.

## Numbers for the article
- $17,631 avg replacement (2025) / $4,699 avg repair
- $42B U.S. SCS insured losses, first 9 months 2025
- 43.5M properties at hail risk; $17.84T reconstruction exposure
- 142 damaging-hail days in 2025 (avg 122)
- 57% vs 38%: hail-state roofs ≤9 years old
- 1.25": functional damage threshold for laminated architectural shingles (NRCA)
- $7-10B: June 2023 Texas hail cluster, 95% hail-driven
- 20%: per-claim LAE savings from drone+AI inspections (EagleView beta)

## Voice notes (Jake Kowalski)
- Punchy, job-site register. "If it can't survive a job site, it doesn't belong on one."
- Specs over adjectives. Short paragraphs. Bar-talk explanations.
- He'd love the hail cannon. He'd distrust the marketing decks.
- Skeptical of both sides: the storm chaser with a ladder AND the carrier with a drone fleet.
- Actionable homeowner: what to ask, what to demand, what it costs.

## Bans to respect
- ≤3 em dashes (grep count is truth), The-starters <15%, no "Here's the thing"/"The kicker"/"paradigm shift"/"game-changer"/"deep dive"/"unpack".
- No "The [industry] is a $X billion market" opener. Start mid-action: hail hitting the skylight.
- Vary paragraph length. No uniform claim→data→example→catch structure.
