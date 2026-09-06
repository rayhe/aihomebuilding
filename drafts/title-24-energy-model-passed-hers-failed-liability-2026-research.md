# Research: Your Energy Model Passed Title 24. The Field Test Failed It. You're Holding the Bill.

**Journalist:** Catherine Chen (policy, legal, building codes)
**Angle:** California's 2025 Energy Code takes effect for 2026 permits. Every compliance model now runs through CEC-approved software. The model passing means the *paper* complies. The field verification (ECC/HERS) decides whether the *house* complies. When the paper and the house disagree, the law doesn't come for the software vendor. It comes for whoever signed the Certificate of Compliance. That gap — between approved model and as-built home — is where AI-powered modeling tools are expanding, and where liability is concentrating on builders and homeowners.

**Kill test:** Does this help someone building or buying a home? Yes. A builder learns exactly who pays when a passing model fails field verification (they do), what a failed verification cycle costs ($2,500-$9,000 per dwelling in retest, fixes, and delay), and three contract terms that shift the risk before they sign. A buyer learns why "Title 24 compliant" on the plan set is a statement about paper, not about the house they live in.

## Primary sources

1. **California Energy Commission — 2022 Energy Code Compliance Software page** (energy.ca.gov): Permit applications between Jan 1, 2023 and Dec 31, 2025 must use approved 2022 compliance software. Public domain: CBECC 2022.3.2 SP1 (nonresidential/multifamily), CBECC-Res 2022.3.2 SP1 (single-family). Third-party ACM-approved: EnergyPro 9.4, IES VE, Right-Energy Title 24 2022.3.0 (single-family new construction only). Source URL: https://energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/2022-building-energy-efficiency-1

2. **CEC — EnergyPro 9.4 approval docket (22-BSTD-02, Approval #25-021925)**: Executive Director approved EnergyPro 9.4 on Jan 30, 2025, incorporating CBECC/CBECC-Res compliance managers per the 2022 ACM Approval Manual. Approval is of the *calculation method* (alternative calculation method per Pub. Resources Code 25402.1(a)) — not a guarantee of results. Source URL: https://efiling.energy.ca.gov/GetDocument.aspx?DocumentContentId=98342&tn=261862

3. **CEC — Energy Code Compliance (ECC) Program** (energy.ca.gov): The field verification and diagnostic testing provisions moved from Title 20 HERS Program regulations into the administrative section of Title 24. ECC-Providers train and certify ECC-Raters. If an ECC-Rater determines a test fails compliance thresholds, the contractor is required to fix the feature or system until it passes compliance. Source URL: https://www.energy.ca.gov/programs-and-topics/programs/energy-code-compliance-program

4. **Energy Code Ace — HERS Field Verification resampling procedures (Ref Ace 2013, sec 2.5)**: One failed sample in a group triggers re-sampling of a second randomly selected dwelling; in a closed group, a second failure means all non-tested dwellings in the group lose their verification status. The failed dwelling must be fixed and retested until compliant before a Certificate of Verification (CF3R) is registered. Source URL: https://energycodeace.com/site/custom/public/reference-ace-2013/Documents/25hersfieldverificationanddiagnostictesting.htm

5. **2025 Title 24 Part 6 Draft CASE Report — Nonresidential HVAC Controls** (title24stakeholders.com): Cites PNNL (Rosenberg et al. 2017): field survey of recently constructed buildings across 5 states and 19 enforcement jurisdictions found a **60% compliance rate** for HVAC controls measures; "system capabilities consistently exceeded system configuration — the as-found condition" underperformed the design intent. Source URL: https://title24stakeholders.com/wp-content/uploads/2023/05/2025_T24_CASE-Report_NR-HVAC-Guideline-36.pdf

6. **DOE — cove.tool / reduced-order modeling article** (energy.gov): AI-powered reduced-order modeling made early-stage modeling popular among architects; cove.tool added OpenStudio export bridging reduced-order inputs to detailed EnergyPlus compliance modeling, describing an end-to-end path "from early-stage performance modeling to detailed and compliance modeling." Source URL: https://www.energy.gov/cmei/buildings/articles/covetool-officiates-perfect-marriage-between-reduced-order-modeling-and

7. **BR Energy Solutions — HERS/ECC Job Site Preparation Checklist (2025 Code)** (brenergysolutions.com): Field-practical catalog of what actually fails verification: duct tape (non-compliant cloth tape fails duct leakage tests), boots not sealed to drywall (the #1 duct leakage failure source), dirty filters causing low-airflow failures, fan speeds not set to Manual J/S report values. Source URL: https://brenergysolutions.com/hers-site-prep-checklist-2025.pdf

8. **Ryerson University — Otsubo 2015 (via scispace)**: LEED for Homes certified homes consumed **23-77% more** than design-stage predictions; revisions aligning models with as-built conditions narrowed the gap to 9-40%. Source URL: https://scispace.com/pdf/understanding-the-energy-performance-gap-case-studies-of-1v5yvotzzy.pdf

9. **Sanders et al. via MDPI (Sustainability 12(7):2774)**: Best estimate of the gap between technical potential and actual in-situ performance of energy efficiency measures is **50%**, with 35% from performance gaps and 15% from comfort-taking/rebound. Source URL: https://www.mdpi.com/2071-1050/12/7/2774

## Original contribution (not synthesis)

Cross-reference nobody published: the CEC's own approved-software list defines exactly who is allowed to say a California home "complies" — four programs for single-family (CBECC-Res, EnergyPro 9.4, Right-Energy, IES VE). The Commission approves the *calculation method*, and the CF1R Certificate of Compliance is signed by a human (the documentation author), not the software. Field verification (ECC/HERS) is the legal backstop, and its resampling rules mean one bad duct-leakage test can invalidate an entire group's verification status — multiplying one failure into a retest of a second home, with the contractor required to fix and retest until passing. Combining the BR Energy Solutions checklist's failure modes with the PNNL 60% field-compliance finding and the Ryerson 23-77% performance gap, the article quantifies what a single failed verification cycle costs a production builder: ~$400-600 per retest visit, $1,500-5,000 in typical fixes (duct resealing, airflow correction, refrigerant charge), plus schedule drag of 1-3 weeks per affected dwelling while occupancy sign-off waits on the CF3R. No industry source has published the per-cycle cost of a failed Title 24 verification in these terms.

## Methodology / math

- Retest visit cost: HERS/ECC rater revisit fees publicly advertised by California HERS providers at $350-$600 per dwelling per visit (BR Energy Solutions and similar provider rate sheets). Use midpoint $475.
- Fix costs: from failure modes in the BR checklist — duct leakage resealing ($800-2,500 for a single-family system), airflow/refrigerant charge correction ($400-1,200), envelope retest and re-seal ($600-1,500). Typical single-failure cycle: $1,500-$4,000.
- Schedule drag: building departments require registered CF3Rs before final sign-off; a failed group re-sampling (second dwelling also tested) doubles the retest count. Conservative per-dwelling total: $2,500-$9,000 depending on whether the failure cascades to group re-sampling.
- Production-scale: a 40-lot phase tested in groups of 5 (typical HERS sampling) — one failed sample forces re-sampling; a second failure forces full testing of all non-tested dwellings in the group. Cost math shown at that scale in the article.

## Limitations (honest)

- No California-specific published study measures the actual failure rate of Title 24 field verification for single-family homes; the PNNL 60% compliance figure is nonresidential HVAC controls across 19 jurisdictions, used as the closest available proxy, not a California residential statistic.
- The 23-77% performance gap figure is from Ontario LEED homes modeled in HOT2000, not California Title 24 compliance models; it demonstrates the *direction and magnitude* of the model-to-reality gap, not a CEC-specific defect rate.
- Retest and fix cost ranges are assembled from publicly posted provider rate sheets and contractor estimates, not from a survey of California builders; actual costs vary by market and rater.
- The article does not assert that AI-powered modeling tools (cove.tool, Ekotrope, loadmodeling.tool) are *approved* Title 24 compliance software — they are not on the CEC list; the concern is the growing design practice of running reduced-order/AI models early and translating them into compliance runs, which shifts input-error risk into the compliance file.

## Strongest counterargument

The counterargument at full strength: the system is working as designed. Title 24's two-step structure — approved-model at design, field verification at construction — exists precisely because models are imperfect. The ECC/HERS backstop *caught* the failure; nobody moved into a non-compliant home. The vendor disclaimers are standard for engineering software (structural software like ETABS carries the same allocation), and the builder signed the CF1R, which means the builder already owned the compliance obligation before any AI touched the project. If AI models make early-stage design cheaper and more iterative, the net effect is *more* compliance modeling per project, not less — and the field test remains indifferent to which software produced the paper. Liability concentrated on the builder is a feature, not a bug: the builder controls the as-built condition, which is what the code regulates.

## Key facts to use

- 2025 Energy Code (Part 6) applies to 2026 permit applications; the 2022 code governed permits Jan 1, 2023–Dec 31, 2025.
- CEC approves compliance *calculation methods* under Pub. Resources Code 25402.1(a), via the Alternative Calculation Method Approval Manual.
- ECC Program: FV&DT moved from Title 20 to Title 24 admin section; ECC-Providers certify ECC-Raters.
- Failed field test → contractor must fix until passing; no CF3R until registered results show compliance.
- Group sampling: one failure → re-sample a second dwelling; second failure in closed group → all non-tested dwellings lose verification status.
- AI tools in the design pipeline: cove.tool (reduced-order + OpenStudio/EnergyPlus export), Ekotrope RATER pilot for builders, loadmodeling.tool (ASHRAE 140-2020-based room-by-room loads).
