# Research: AI Tenant Screening, Voucher Discrimination, and the Two-Track Enforcement Wave

**Article #909** | Journalist: Catherine "Code" Chen (policy & regulation) | Started: 2026-09-19
**Slug:** `ai-tenant-screening-voucher-discrimination-saferent-2026`
**Working headline:** "The Algorithm Priced Her Rent at 140% of Her Income. She Actually Owed 31%."

## Thesis
Two separate federal enforcement tracks are converging on AI tenant screening in 2024-2026: (1) the Fair Housing Act disparate-impact track, anchored by the $2.275M Louis v. SafeRent settlement, which killed the "neutral vendor" defense; (2) the FCRA accuracy track, anchored by the FTC's July 2026 $2.25M RentGrow settlement over duplicate records. HUD quietly removed its own 2024 screening guidance from its website in 2025, but the underlying liability only grew. Colorado's replacement AI law (SB 26-189) takes effect January 1, 2027 with notice, adverse-decision explanation, and human-review rights. Build-to-rent operators who lease their own communities are the exposed population.

## Kill test
A builder developing a build-to-rent community, or any landlord using an automated screening score, needs to know: default accept/deny scores now carry documented FHA disparate-impact risk, FCRA accuracy duties, and (in Colorado from Jan 2027) mandatory disclosure and human review. This article gives them the audit checklist. It also tells voucher-holding applicants their rights. Passes.

## Primary sources

### 1. Louis et al. v. SafeRent Solutions, LLC, No. 1:22-cv-10800 (D. Mass.) — final settlement approval Nov 20, 2024, $2.275M
- Plaintiffs Mary Louis and Monica Douglas: Black women holding federally funded housing vouchers, denied apartments.
- SafeRent's "Registry ScorePLUS" generated a 200-800 score landlords used for eligibility; suit alleged it systematically produced lower scores for Black and Latino applicants and penalized voucher holders by ignoring guaranteed voucher income.
- Settlement: $2.275M; no admission of fault. 5-year terms: SafeRent will not include in reports "a SafeRent Score or an accept/decline recommendation based on a tenant screening score" for voucher holders; customers must certify the applicant "is not currently a recipient of any publicly-funded federal or state housing voucher."
- Attorney Todd Kaplan: "Management companies and landlords need to know that they're now on notice, that these systems that they are assuming are reliable and good are going to be challenged."
- Sources: Bloomberg Law (https://news.bloomberglaw.com/us-law-week/saferents-2-3-million-deal-in-ai-screening-tool-suit-approved); AP via theanswerorlando (http://theanswerorlando.com/news/national/class-action-lawsuit-on-ai-related-discrimination-reaches-final-settlement/1bc785c24a1b88bd425a8fa367ab2b23); Veriprajna analysis (https://veriprajna.com/blog/saferent-ai-bias-housing-discrimination).

### 2. HUD FHEO guidance, April 29, 2024 — "Guidance on Application of the Fair Housing Act to the Screening of Applicants for Rental Housing" (+ companion AI advertising guidance)
- Best practices for housing providers and screening companies: choose criteria relevant to likelihood of tenancy compliance (consider expanded income sources including Housing Choice Vouchers); use only accurate records; follow the stated screening policy's scope; be transparent (policies in writing, public); give applicants opportunity to dispute negative information.
- Key legal statement: "A housing provider or a tenant screening company can violate the Fair Housing Act by using a protected characteristic — or a proxy for a protected characteristic — as a screening criterion. This is true even if the decision for how to screen applicants is made in whole or in part by an automated system, including a system using machine learning or another form of AI."
- Also: landlords must independently evaluate applicants "even when using screening reports" and cannot "rely solely on default settings."
- Sources: Maryland DHCD memo summarizing guidance (https://dhcd.prod.maryland.gov/media/1039); Gloucester County HCV landlord newsletter Fall 2024 (https://gloucestercountyhousingnj.gov/Portals/120/HCV_Landlord_Newsletter_Fall2024.pdf); Nextgov coverage (https://www.nextgov.com/digital-government/2024/05/hud-warns-ai-fueled-housing-discrimination/396305/).

### 3. GAO-25-107196, "Rental Housing: Use and Federal Oversight of Property Technology" (Feb 2025)
- GAO observed (Feb 2025) that HUD had removed the tenant-screening guidance from its public website. HUD gave two explanations (report text truncated at retrieval, but removal confirmed).
- Context: federal agencies' enforcement and oversight of tenant screening/reporting accuracy and adverse impact.
- Source: https://files.gao.gov/reports/GAO-25-107196/index.html and http://gao.gov/assets/890/880009.pdf

### 4. FTC v. RentGrow, Inc. — announced July 9, 2026, $2.25M proposed settlement (pending court approval)
- Allegations: violated FCRA (failed "reasonable procedures to ensure maximum possible accuracy") and FTC Act.
- Duplicate case records / multiple entries for the same criminal or eviction action made one proceeding look like several; incomplete disclosure of information sources (e.g., historical address info, middle names used to match records); disputes labeled "invalid" without required FCRA dispute steps; conflicting info to consumers vs. property managers about whether reports were updated.
- Required: procedures to prevent duplicate records; accuracy and dispute-handling requirements.
- Source: FTC housing actions page (https://www.ftc.gov/terms/housing); coverage: https://111things.com/law/rentgrow-settlement-2-25m-ftc-what-renters-and-landlords-should-do/; https://www.curadebt.com/ftc-rentgrow-tenant-screening-report-accuracy-2026/

### 5. Colorado AI law: SB 24-205 repealed and replaced by SB 26-189 (signed May 14, 2026)
- Original SB 24-205 (first comprehensive state AI law, May 2024): high-risk AI systems in consequential decisions (incl. housing); deployer duties — reasonable care, risk management programs, impact assessments, consumer notice, AG disclosure. Effective date pushed Feb 1, 2026 -> June 30, 2026 (SB 25B-004).
- April 27, 2026: federal court stay of AG enforcement in xAI v. Weiser. Then repeal/replace.
- SB 26-189 (narrower, "automated decision-making technology" / ADMT materially influencing consequential decisions): (1) notify consumers interacting with AI; (2) plain-language explanation of ADMT's role within 30 days of adverse decision; (3) correct inaccurate personal data on request; (4) meaningful human review and reconsideration. AG rulemaking by Jan 1, 2027; law takes effect Jan 1, 2027; enforced by AG only, no private right of action. Voids contract terms indemnifying a developer/deployer for its own discriminatory acts.
- Sources: McDermott Will & Schulte via JDSupra (https://www.jdsupra.com/legalnews/colorado-ai-law-in-flux-comprehensive-2107294/); TechTimes (https://www.techtimes.com/articles/318956/20260623/colorado-ai-law-hits-june-30-deadline-without-bias-audits-here-what-consumers-keep.htm); eigenlegal counsel-os state AI laws tracker (https://github.com/eigenlegal/counsel-os/blob/HEAD/knowledge/law/ai-and-automation/us-state-ai-laws.md); LawFuel (https://www.lawfuel.com/colorado-ai-act-2026-sb-26-189/)

### 6. Build-to-rent scale (exposed population)
- NAHB analysis of Census data: Q2 2026 ~15,000 single-family built-for-rent starts, down 16% over trailing four quarters; market share ~7% vs 2.7% historical average (1992-2012). NAHB notes Census figures count only homes built and held by the builder; another 3-5% of starts sold to third parties for rental.
- Sources: https://www.realtor.com/news/trends/single-family-built-to-rent-construction-nahb-q2-2026/; https://eyeonhousing.org/2025/05/flat-growth-for-single-family-built-for-rent/

### 7. Housing Choice Voucher program scale
- ~2.3M households served annually; 76% people of color; 78% extremely low income; avg household income $17,111/yr; avg tenant payment $437/mo.
- Source: HUD FY2025 Congressional Justification, Tenant-Based Rental Assistance (https://archives.hud.gov/budget/fy25/2025_CJ_Program_-_TBRA_v3.pdf); HUD USER (https://www.Huduser.Gov/portal/pdredge/pdr-edge-featd-article-072425.html)

### 8. FHA penalty schedule + complaint volume (context)
- FHA civil penalties (2026 HUD adjustment): $23,011 first offense; $57,527 second within 5 years; $115,054 pattern/practice. HUD processed 8,500+ complaints in most recent reporting year (48% disability, 34% race).
- Source: ClearScreening FHA reference (https://smartscreen.clearscreening.com/fair-housing-act/)

### 9. Adjacent: San Francisco algorithmic rent-setting ban (context only)
- 2024 ordinance banning "algorithmic devices" for rent-setting (RealPage/Yardi revenue-management tools); Oct 6, 2025 expansion lets tenants'-rights orgs sue; first private test: tenant sued Greystar (Aug 2026). Shows cities moving on algorithmic housing decisions generally, but this is rent-SETTING, not screening — keep to one line.
- Sources: https://www.sf.gov/news-update-to-algorithmic-devices-law; https://therealdeal.com/san-francisco/2026/08/24/san-francisco-has-yet-to-enforce-landlords-ai-rent-setting/

## Original contribution: the 140%-vs-31% mispricing arithmetic
Inputs (all HUD-published, FY2025 CJ): avg HCV household income $17,111/yr = $1,426/mo; avg Total Tenant Payment $437/mo. Take a representative $2,000/mo build-to-rent unit.
- What Registry ScorePLUS-style underwriting saw: applicant income $1,426/mo against $2,000 rent = 140% rent-to-income. Any 3x-income screen auto-fails this.
- Reality: voucher covers $1,563; tenant owes $437 = 31% of income. The guaranteed federal portion of the rent was invisible to the score.
- The blind spot misprices the applicant's rent burden by roughly 4.5x (140/31). This is the mechanism behind the disparate impact: credit-history-weighted scoring treats structurally excluded financial histories as "risk" while ignoring the single most predictive variable — guaranteed rent money.
- Methodology note: uses national averages, not Louis's individual figures; illustrative of the mechanism, not a claim about her file.

## Limitations
- SafeRent settlement includes no admission of fault; the "shared liability" reading comes from settlement terms and attorney/analyst interpretation, not a litigated holding.
- HUD's 2024 guidance was withdrawn from HUD's website (per GAO); its legal status as guidance is ambiguous, but the FHA disparate-impact theory it described predates it and survives it.
- RentGrow settlement is proposed/pending court approval as of retrieval.
- Colorado SB 26-189 takes effect Jan 1, 2027; AG rulemaking incomplete; no private right of action.
- FHA penalty figures via a secondary legal-marketing source; treat as approximate.
- BTR operators who sell to third-party managers (3-5% of starts per NAHB) shift but do not eliminate exposure — the screening still happens.

## Strongest counterargument
The screening industry's case: automated scores replaced something worse — the human leasing agent's gut, which was unlogged, unappealable, and often more discriminatory. Scores are at least auditable; SafeRent's failure was a bad model, not the concept of modeling. HUD's own guidance concedes screening has legitimate purposes (predicting tenancy compliance). And voucher economics cut the other way too: landlords argue vouchers bring inspection delays, rent-reasonableness caps, and PHA bureaucracy that scores legitimately price in. Banning or chilling automated screening could push small landlords back to informal discrimination that's harder to detect and impossible to appeal. The honest version of the reform position is not "no scores" but "scores that count the voucher" — which is exactly what the settlement's 5-year injunction forces SafeRent to build.

## Actionable takeaways (for the article)
1. If you use an automated score with an accept/decline default: turn off the default. HUD's 2024 guidance explicitly says you cannot rely solely on default settings; SafeRent's settlement makes the vendor share liability but the landlord is still the decision-maker.
2. If you accept vouchers (or operate where source-of-income is protected): scores must count voucher income. Underwrite the tenant's actual obligation ($437 in the HUD average), not the gross rent.
3. Audit for duplicates: the RentGrow case means your FCRA exposure now includes how your vendor's system merges records — ask your screening vendor for their duplicate-record controls in writing.
4. Written screening policy + dispute process: HUD's checklist (written, public criteria; applicant gets the report and the precise standard at issue; chance to dispute). This is cheap compliance.
5. Colorado operators: calendar Jan 1, 2027 — ADMT notice, 30-day adverse-decision explanations, human review on request.
6. For applicants: you have the right to the report, the criteria, and dispute; in Colorado from 2027, correction and human reconsideration.
