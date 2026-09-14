# Research: AI, the Experience Mod, and the Hidden Tax on Every Bid

## Angle
Your workers' comp experience modification rate (EMR/X-mod) is a multiplier on every payroll dollar you run. In California, base carpentry rates just jumped and another 10.4% hike is proposed. A 1.28 mod vs a 0.89 mod is a ~$38K/year swing on a $1.2M payroll framing crew, and many owners/GCs won't let you bid at all above 1.0. The actuarial mechanics reward cutting claim *frequency* far more than cutting severity, which is exactly what vision-AI safety tech claims to do. Nobody has spelled out the dollar math for residential contractors.

## Journalist
Marcus "Steel" Washington — investigative, human-centered, labor statistics. Union-family background, respects the craft, worries about the workers. Comfortable with the uncomfortable conclusion (claim suppression perverse incentives, worker surveillance).

## Kill Test
Does this help someone building or buying a home? **YES.** For GCs/subs: the mod is a direct premium multiplier and a bid gate. For homeowners: a contractor's EMR is a checkable safety signal before you sign.

## Key Data Points

### How the mod works (NCCI)
- EMR compares a contractor's actual workers' comp losses to expected losses for their class/size. 1.0 = average. Above 1.0 = debit (pay more); below = credit.
- **Split point:** each claim is divided into primary losses (below the split point, counted dollar-for-dollar at full weight) and excess losses (above, credibility-discounted). Old nationwide split: $18,500. New methodology: state-specific split points ≈ 40% of the average lost-time claim cost in each state (e.g., ~$9,500 Oregon, ~$38,000 Louisiana per Gallagher summary of NCCI filing).
- Consequence: **frequency moves the mod more than severity.** Five $12K medical-only claims land entirely in the primary layer; one $150K claim contributes only ~one split-point of primary plus discounted excess.
- Mod uses ~3 years of loss history with roughly a year of lag. Small employers below premium thresholds aren't experience-rated at all.
- Source: NCCI, "ABCs of Experience Rating" (UW_ABC_Exp_Rating.pdf); Gallagher summary of NCCI methodology changes; Colorado DOI filing review (state-specific split points).
- California caveat: CA does not use NCCI; the WCIRB runs its own experience rating plan. The frequency-first principle is the same, details differ.

### California rates are climbing
- WCIRB class **5403 Carpentry (low wage)**: approved advisory pure premium eff. 9-1-2025 = **$11.33** per $100 payroll; proposed eff. 9-1-2026 = **$12.52** (+10.50%). Class **5432 Carpentry (high wage)**: $5.42 → $5.511 (+1.68%).
- Source: WCIRB Base Rate Comparison (Approved 2025 v Proposed 2026) PDF.
- WCIRB filed Sept 1, 2026 pure premium rates **+10.4% on average** vs Sept 1, 2025; drivers: increased cumulative trauma claim frequency, higher medical costs and allocated loss adjustment expenses. Source: Insurance Journal, May 1, 2026.
- Sept 1, 2025: CA approved **+8.7%**, "first meaningful upward adjustment in nearly a decade." Source: Apex Risk, Aug 2026.
- Advisory pure premium rates exclude insurer expenses/profit; charged rates run higher, but the mod multiplies manual premium either way, so mod deltas scale.

### The bid gate
- EC Magazine (trade): "a trend that all site contractors, including lower sub-tier contractors, must have an EMR of 1.0 or less to work on a project... If a company's EMR exceeds 1.0, that company will not be allowed to bid the work."
- City of Durham (public owner) bid docs: EMR > 1.0 triggers mandatory written explanation of corrective actions.
- Solvenergy prequal: EMR ≤ 1.0 for partial prequal; safety review required above 1.25.
- ehs.inc (Sept 11, 2026): EMR is a lagging indicator; "by the time your EMR reflects a bad incident, that incident is already two or three years old."

### AI safety tech (workers' comp angle)
- **CompScience**: $27.6M Series B (Feb 2025, Sands Capital). Visual AI on existing cameras; claims 23% injury-rate reduction with partners incl. Swiss Re and Nationwide (SiliconANGLE); case study claims 24% claims reduction in first year; 50+ behavioral/environmental hazard models; "reported over 2 million safety hazards"; expanding into construction and utilities.
- Caveat: vendor-reported figures, no independent third-party audit found; construction expansion is new/unproven in the cited materials.

### BLS context
- BLS Employer Costs for Employee Compensation, June 2026: workers' comp averages $0.43/hr across private industry — but construction class rates (e.g., $12.52/$100 payroll ≈ $5+/hr on a $40/hr carpenter) run an order of magnitude higher. The national average hides the trade skew.

## Original contribution (the dollar math)
Worked example — CA residential framing contractor, $1.2M annual payroll, all class 5403 low-wage, advisory pure premium $12.52/$100:
- Manual premium = 12,000 × $12.52 = **$150,240** (pure-premium basis; charged premium higher after insurer load, mod applies the same).
- EMR 1.00 → $150,240. EMR 1.25 → $187,800. **Delta: $37,560/yr** on pure basis; at a typical ~1.6× loaded charged rate the swing is ~$60K/yr.
- Per-bid: $500K framing package, ~35% labor ($175K payroll) → manual premium ~$21,910; a 1.25-mod bidder carries ~$5,478 more insurance cost than a 1.0 bidder on that one job. On 3%-margin bids, that is the margin.
- Frequency illustration: five $12K claims = $60K primary (fully weighted). One $150K claim ≈ $18.5K primary (old split) + discounted excess. Same total loss dollars, wildly different mod impact. This is why interventions that cut small-claim frequency (housekeeping, vision AI near-miss detection, nurse triage keeping medical-only claims medical-only) move the mod faster than severity-only plays.

## Strongest counterargument (stated at full strength)
Experience rating rewards *fewer reported claims*, not fewer injuries. The financial incentive to suppress legitimate claims is real and documented in labor research; a mod-obsessed contractor can get to 0.89 by discouraging reporting rather than preventing injuries. Layering AI cameras over that incentive risks chilling reporting further: workers who know every lift is scored may hide the small strains that, caught early, stay medical-only. The mod measures claims history, and claims history is partly a measure of reporting culture. Any article that treats a low EMR as proof of a safe contractor is laundering the metric.

## Limitations
- Dollar math uses advisory pure premium rates (excl. insurer expense/profit); real charged premiums vary by carrier, schedule credits, and dividends.
- Split-point mechanics cited from NCCI materials; California's WCIRB plan differs in detail (formula verified at principle level only).
- CompScience reduction figures are vendor-reported; no independent audit found. Construction-specific results not yet published.
- No access to actual contractor mod worksheets; the worked example is illustrative, not a specific firm's books.
- Assumes single-class payroll; real contractors blend classes (5403/5432/etc.), which changes the manual premium.

## Sources (primary)
1. NCCI, "ABCs of Experience Rating" — https://www.ncci.com/articles/documents/uw_abc_exp_rating.pdf
2. WCIRB Base Rate Comparison, Approved 2025 v Proposed 2026 — https://27f300700c3ee7ed95f7-cb03fd7102871f645461a193e3a1a9f2.ssl.cf1.rackcdn.com/Base%20Rate%20Comparison%20PDFs/WCIRB%20Base%20Rate%20Comparison%20Appr%202025%20v%20Prop%202026.pdf
3. Insurance Journal, "Workers' Comp Bureau of California Submits Pure Premium Filing of 10.4%" (May 1, 2026) — https://www.insurancejournal.com/news/west/2026/05/01/868001.htm
4. Apex Risk, "California Workers' Compensation Advisory Rate Increase" (Aug 2026) — https://www.apex-risk.com/california-workers-compensation-advisory-rate-increase/
5. CompScience $27.6M Series B announcement (Feb 27, 2025) — https://www.Compscience.com/blog/compscience-raises-27-6m-to-advance-ai-powered-workplace-safety/
6. SiliconANGLE on CompScience visual AI raise (July 2023; 23% injury reduction claim) — https://siliconangle.com/2023/07/27/compscience-uses-visual-ai-eliminate-workplace-safety-hazards-raises-10m/
7. EC Magazine, "Enhance Your Company's Bid with Safety and Insurance Credentials" (EMR 1.0 bid bar) — https://www.ecmag.com/magazine/articles/article-detail/safety-enhance-your-companys-bid-safety-and-insurance-credentials
8. City of Durham contractor safety record bid doc (EMR > 1.0 explanation requirement) — https://www.durhamnc.gov/DocumentCenter/View/11700/Addendum-1---Appx-J---Contractor-Safety-Record-Information
9. BLS, Employer Costs for Employee Compensation, June 2026 — https://www.bls.gov/charts/employer-costs-for-employee-compensation/benefits-per-hour.htm
