# Research: The 5–10% Concrete Over-Order Habit vs. AI Takeoff Accuracy

**Article #1045 | Jake Kowalski (construction tech) | Started 2026-10-08**

## Angle
Every ready-mix order carries an institutionalized waste allowance — 4–10% over plan dimensions is the industry's own recommendation — and the NRMCA says 5–10% of delivered ready-mix gets returned to the plant for overages or quality issues. Meanwhile, AI-assisted quantity takeoff now lands within ~0.18–5% of manual verification, and drone volumetric measurement hits 1–3% accuracy. The over-order habit is a measurable, priced inefficiency that AI takeoff + real-time subgrade measurement can shrink. Kill test: passes — a GC pouring a basement foundation can put dollar figures on exactly how much waste allowance is insurance and how much is habit.

## Primary sources (6)

1. **NRMCA via ACP Publications / Trimble article (industry data):** Approximately 5–10% of ready-mix concrete deliveries are returned to the plant due to overages or inadequate quality, per the National Ready Mixed Concrete Association. Volumetric on-demand mixers (e.g., Cemen Tech C60 dual auger metering) hold mix accuracy within ±1%, letting contractors produce only what is needed. URL: https://www.acppubs.com/CON/article/A804C62D-sustainability-and-lower-costs-in-concrete-mixes

2. **Nevada Ready Mix / NRMCA Publication 186 (producer guidance):** Order sufficient quantity with an allowance of 4–10% over plan dimensions for waste, over-excavation, and other causes. Verify yield via ASTM C138 unit weight tests (three samples from three loads); check truck batch weights against batch tickets. URL: https://www.nevadareadymix.com/concrete-tips/discrepancies-in-yield/

3. **AllBetter 2026 concrete pricing (market data):** Ready-mix delivered 2026: $125–$195/cubic yard, averaging near $180. One cubic yard covers ~81 sq ft at 4 inches. Standard advice: order 5–10% extra. Concrete is roughly a third of finished-slab cost ($6.50–$10.50/sq ft installed). Short-load fees $30–$60/yard under the ~10-yard minimum. URL: https://allbetterapp.com/concrete-cost-per-yard/

4. **Colorado Concrete Co Denver (supplier pricing):** $150/cubic yard for 4,000 psi mix delivered (Denver metro average across vendors). Short-load threshold 7 yards; 2-yard load with $100 short-load fee raises effective cost 33%. URL: http://coloradoconcreteco.com/concretepriceperyarddenver.html

5. **University of Kansas Civil Engineering study via Construction Business Owner (independent research, 2026):** AI-assisted quantity takeoff vs. manual: same takeoff took 2h35m manually, ~37 minutes with AI assistance (76% time reduction); accuracy held within a 5% error margin, with an estimator in the loop. Conclusion: AI + human oversight beats either alone. URL: https://www.constructionbusinessowner.com/article/accuracy-at-speed-faster-takeoffs-decide-who-wins-more-work/

6. **Structures Insider 2026 benchmark (independent benchmark):** Civils.ai benchmarked against verified manual takeoff on 50 civil drawings: gross error 0.18% (3.89 m deviation on 2,195 m drainage). Discrepancy-checking: 27% false positive rate (3 of 11 flagged issues), one-minute full plan-set review. URL: https://www.structuresinsider.com/post/benchmarked-ai-quantity-takeoff-accuracy-on-50-civil-drawings-2026-data

**Supporting:**
- BarnardHQ field notes (drone volumetric measurement): 22-minute drone flight returned aggregate volume accurate to 1–3%, vs. eyeball estimates off by 400 yd³ (~$8,000 at delivered prices). https://www.barnardhq.com/blog/drone-volumetric-measurement-accuracy-in-the-field
- MDPI Buildings 2024, 14, 3693: knowledge-driven agent for automated concrete quantity checking; concrete volume errors 1.21–5.84% across bridge structure types vs. manual drawings. https://www.mdpi.com/2076-3417/16/18/9366

## Original contribution (the math nobody did)
Baseline residential foundation scenario (30×50 ft basement, 8-ft walls, 8-in thick, 4-in basement slab, 2×1 ft footings):
- Walls: 160 ft perimeter × 8 ft × 8/12 ft = 853 ft³ = 31.6 yd³
- Footings: 160 × 2 × 1 = 320 ft³ = 11.9 yd³
- Slab: 30 × 50 × 4/12 = 500 ft³ = 18.5 yd³
- **Theoretical total: 62 yd³**
- At $180/yd: $11,160 material. 10% waste allowance = 6.2 yd³ = **$1,116 paid for concrete that may never enter the form.**
- If AI takeoff + drone subgrade scan lets the GC safely cut the allowance from 10% to 4% (matching Nevada Ready Mix's own low end): saves 3.7 yd³ ≈ **$666 per pour**. On a 20-home subdivision: **~$13,300** per project. That's a real number, not vendor marketing.
- Counter-math: one short load mid-pour on a foundation costs a cold joint (structural risk), a 30-minute+ truck wait, and possibly a rejected monolithic pour. The insurance value of the allowance is real. The honest split: shrink the allowance, don't delete it.

## Skepticism / counterarguments
- The allowance exists because subgrade is never perfect — over-excavation, soft spots, and form deflection eat concrete. Nevada Ready Mix explicitly says waste allowance covers "over-excavation and other causes." A tighter takeoff doesn't fix a sloppy subgrade.
- AI takeoff vendors are selling software, not guarantees; the 0.18% benchmark is on drainage quantities from drawings, not as-built subgrade.
- Volumetric mixers solve the return-waste problem but the concrete-per-yard math changes (you own the truck); economics favor larger contractors.
- Running short is worse than over-ordering: the article must not tell a reader to order exactly theoretical volume.

## Limitations to disclose in article
- Concrete pricing is regional and volatile; $180 average is a 2026 national average, Denver $150 confirmed — readers must get local quotes.
- The 62 yd³ scenario is a calculated example, not a measured project; actual over-pour depends on soil, crew, and formwork.
- NRMCA 5–10% returned-to-plant figure includes quality rejections, not just overages.
- No independent study quantifies how much of the 4–10% allowance AI takeoff actually eliminates in residential foundations — the savings calc is an estimate, disclosed as such.

## Headline candidates
- "Your Foundation Order Includes $1,116 of Concrete Nobody Needs"
- "The 10% Concrete Waste Allowance Is a Habit, Not Physics"
- "AI Takeoff Hits 0.18% Accuracy. Your Concrete Order Is Still 10% Over."

## Sources to hyperlink in article
- ACP Publications/Trimble (NRMCA stat): https://www.acppubs.com/CON/article/A804C62D-sustainability-and-lower-costs-in-concrete-mixes
- Nevada Ready Mix: https://www.nevadareadymix.com/concrete-tips/discrepancies-in-yield/
- AllBetter 2026 pricing: https://allbetterapp.com/concrete-cost-per-yard/
- Colorado Concrete Co: http://coloradoconcreteco.com/concretepriceperyarddenver.html
- Construction Business Owner (Univ. of Kansas study): https://www.constructionbusinessowner.com/article/accuracy-at-speed-faster-takeoffs-decide-who-wins-more-work/
- Structures Insider benchmark: https://www.structuresinsider.com/post/benchmarked-ai-quantity-takeoff-accuracy-on-50-civil-drawings-2026-data
- BarnardHQ drone volumetric: https://www.barnardhq.com/blog/drone-volumetric-measurement-accuracy-in-the-field
