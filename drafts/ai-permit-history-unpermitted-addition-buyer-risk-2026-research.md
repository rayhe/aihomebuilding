# Research: AI Permit-History Checks vs. Unpermitted Additions (Buyer Risk) — #900

**Slug:** ai-permit-history-unpermitted-addition-buyer-risk-2026
**Journalist:** Catherine Chen (Policy & Regulation)
**Date:** September 18, 2026

## Kill test
Does this help someone building or buying a home? **Yes, directly.** A buyer who discovers an unpermitted addition *after* closing inherits fines, forced removal, insurance claim denials, and loan problems. A permit-history check during the inspection period is the cheapest insurance in the transaction. This article gives buyers a concrete, executable workflow.

## The problem (why it matters)
- When you buy a home you buy its permit history. The city holds the *current owner* liable for violations, not the person who built them (Salisbury Township municipal guidance; NJ second-story case: previous owner added an unpermitted second story, municipality forced the new owner to legalize or remove; legalization cost **exceeded $50,000**).
- Redfin buyer guidance: unpermitted work can trigger fines, forced removal, denied insurance claims (fire starting in unpermitted electrical = claim denial), reduced appraised value, or loan denial. Sellers usually must disclose, but sellers often don't know about work done by prior owners.
- Coldwell Banker/CBR standard addendum (CoreLogic-hosted PDF): buyers are advised to have a contractor/architect review the **permit file** during the inspection period because agents are not qualified to opine on it. Lenders can call loans when non-compliant construction violates lending terms.
- Municipal escalation math (LA, verified from LADBS non-compliance fee warning, cityclerk.lacity.org): non-compliance fee **$660**; unpaid 30 days → late charge of 2x the fee + 50% collection fee = **$2,310** total; interest accrues at 1%/month. Separately, LAMC violations are misdemeanors: **up to $1,000 fine and/or 6 months imprisonment per violation**. LA's "as-built" permit path (CCS Inc. / LA Construction Compliance): assess scope, hire architect/engineer for as-built drawings, submit + pay fees, pass framing/electrical/plumbing inspections, correct and re-inspect.
- DIY exposure proxy: insurance-industry survey (PR Newswire, via murrayjournal) found **35% of homeowners did a home addition** (rooms, garage) as a DIY project; 43% did basement renovations; 55% of recent renovators never updated their insurance. DIY ≠ unpermitted, but it's the population where permits most often get skipped.

## The technology (what exists)
1. **BuildFax (now Verisk)** — the national permit-data layer. Verified claims (multiple sources):
   - CRES Insurance press page (citing BuildFax CEO Holly Tachovsky): first automated national database of historical building permit data; covers **7,500+ U.S. cities/counties/townships**, **90M+ residential and commercial properties**, **10B+ data points** (permit-level details on remodels, additions, new roofs).
   - FNC/Cision release: 400+ mortgage lenders use BuildFax data in loan approval; GSE guidelines acknowledge and recommend permitting data as a trusted source for third-party verification of property improvements and condition. CRES gives members a **$2,500 E&O retention reduction** when a Building Permit History Report is provided to a buyer/seller on a claim.
2. **ZestyAI** — AI on aerial/satellite imagery for property risk. Insurance Business report on ZestyAI study: **1M properties sampled; 45% had more than one structure** (31% two, 11% three, 4% four or more); insurers routinely miss secondary structures, creating underinsurance and claims gaps. Same computer-vision pipeline that flags an insurer's blind spot can flag a buyer's: structures the permit file never mentions.
3. **What the buyer gets today:** BuildFax reports are available to consumers (buildfax.com); the three-document reconciliation method (below) is the executable workflow. Note: BuildFax consumer pricing was not verifiable at research time — article must not invent a price; frame as "a report" vs. five-figure legalization bills.

## Original contribution (this article's novel analysis)
**The three-document reconciliation method.** No source found documents this as a buyer workflow; it's assembled here from the separate data layers:
1. Listing square footage and bed/bath count (MLS).
2. Assessor's recorded square footage (county tax assessor, public).
3. BuildFax permit history (permits pulled since the assessor's last recorded update).
Reconciliation rule: if listing sqft > assessor sqft, the delta must appear as a permitted addition in the permit history. If it doesn't, the buyer has a documented discrepancy to take into the inspection-period negotiation (seller legalizes, credits, or price adjusts) *before* the liability transfers.
**Cost arithmetic (shown with inputs):** NJ case $50,000+ legalization vs. a permit-history report (tens of dollars) — a ratio on the order of 1,000:1. LA fee escalation: $660 → $2,310 in 30 days of non-payment (3.5x), before any construction cost. Both are modeled scenarios with stated assumptions, not guarantees.

## Strongest counterargument (to state at full strength)
Permit databases are incomplete and laggy. BuildFax coverage, while national, depends on jurisdictions digitizing and sharing records; rural counties and older paper-only records have gaps. A clean permit report is not proof of compliance — it proves nothing was *recorded*. Assessors also misrecord square footage for innocent reasons (finished basements counted differently by county, enclosed porches). The reconciliation method produces *discrepancies*, not verdicts; every flag needs a human (contractor, architect, or the building department) to resolve. Over-relying on the report can also kill good deals over clerical errors.

## Limitations (dedicated section required)
- Could not verify BuildFax consumer pricing; no price stated.
- The 35% DIY-addition stat is a proxy, not a measurement of unpermitted work; no reliable national statistic on unpermitted-work prevalence was found — the article must not invent one.
- NJ $50,000 case is a single anecdote from a legal-education source, not a median.
- ZestyAI's 45% multi-structure finding is about insurer blind spots, not permit violations; repurposed here as evidence the detection technology exists, not as a violation rate.
- LA fee figures are city-specific; other jurisdictions differ widely.

## Sources (primary, hyperlink in article)
1. BuildFax/CRES — https://www.cresinsurance.com/press/cres-insurance-offers-building-permit-history-reports/ (90M properties, 10B data points, Tachovsky quote)
2. FNC × BuildFax lender release — https://news.cision.com/fnc/r/fnc--partners-with-buildfax--to-deliver-building-permit-data-to-top-mortgage-lenders,c9231825 (400+ lenders, GSE guidelines)
3. Redfin buyer guide — https://www.redfin.com/blog/buying-a-house-with-unpermitted-additions/ (buyer risks: fines, removal, insurance, loans)
4. Salisbury Township municipal PDF — https://www.salisburytownshippa.org/wp-content/uploads/2025/10/THE-RISKS-OF-BUYING-A-HOME-WITH-UNPERMITTED-RENOVATION-WORK.pdf (10-risk framework, owner liability, FHA/VA ineligibility)
5. Knowledge Mentors legal-education piece — https://knowledgementors.com/m-auto/afs/default/rsoc/bd89123b-ed4e-4568-8f6a-4e1499a6e659/unpermitted-work-as-a-home-inspection-red-flag-why-the-previous-owners-diy-addition-becomes-your-liability-after-you-close?channel=Ch_45137 (NJ $50K second-story case, title insurance exclusions)
6. ZestyAI via Insurance Business — https://www.insurancebusinessmag.com/us/news/breaking-news/many-us-homes-underinsured-due-to-extra-structureszestyai-report-517981.aspx (1M properties, 45% multi-structure)
7. LA as-built permitting guide — https://www.laconstructioncompliance.com/how-to-permit-an-unlawful-addition/ (retroactive permit steps)
8. LADBS non-compliance fee schedule — https://cityclerk.lacity.org/onlinedocs/2025/25-0160-S47_rpt_dbs_2-21-25.pdf ($660 → $2,310; misdemeanor $1,000/6 months)
9. DIY/insurance survey — https://pr.murrayjournal.com/article/Survey-shows-uptick-in-home-renovation-projects-but-insurance-coverage-still-lags/67362661def489cc6d24fed9 (35% DIY additions, 55% no insurance update)
