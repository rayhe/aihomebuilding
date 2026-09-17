# Research Notes — ai-builder-bankruptcy-deposit-recovery-2026

**Article #879 — journalist: Catherine Chen (Policy & Regulation)**
**Ship after:** 2027-01-20 (queue tail; #758 published 2026-09-16, one-per-day rule)
**Date:** September 16, 2026

## Thesis
Builders go broke mid-project more often than buyers imagine, and the deposit you handed over sits at the very bottom of the bankruptcy recovery ladder. Two 2025 failures put it in the open: Renovo Home Partners (Chapter 7, Nov 2025, $100–500M in liabilities against under $100K in assets) left remodeling customers with unfinished jobs and lost deposits as unsecured creditors, and Van Der Valk Construction's Chapter 11 in Citrus Springs, Florida (April 2025) stranded retirees who had sunk life savings into half-built homes. The legal protections exist — down-payment caps, the $25,000 contractor license bond, a Bankruptcy Code lien for deposits — but each one is narrower than buyers assume. AI distress-signal analysis (permit velocity, complaint accumulation, review-burst patterns) can flag a wobbling builder before you sign, but nothing replaces the contract mechanics: escrowed deposits, lien waivers at every draw, and retention.

## Kill test
Does this help someone building or buying a home? Yes. A buyer choosing a builder gets a five-signal distress screen they can run in an afternoon (license/bond/complaint lookup, permit velocity, payment behavior, review forensics, deposit terms), plus the three contract provisions that determine whether a bankruptcy costs them a delay or their life savings: where the deposit sits, lien waivers, and retention.

## Primary sources (7)

1. **TheStreet (Nov 2025) — Renovo Home Partners Chapter 7:** filed Nov 3, 2025 in Delaware; parent of regional remodelers (NEWPRO, Remodel USA, Minnesota Rusco); liabilities $100–500M, assets under $100K; all operations ceased, employees terminated; customers with unfinished jobs and lost deposits are unsecured creditors; creditors' meeting Dec 12.
   - https://www.thestreet.com/retail/sudden-chapter-7-bankruptcy-puts-homeowners-deposits-at-risk

2. **Moneywise / ABC Action News — Van Der Valk Construction Chapter 11 (April 2025):** Citrus Springs, Florida builder filed Chapter 11 leaving homes unfinished; buyers, mostly retirees, financially stranded; Dyandria Darel: "It was virtually my entire life savings. I put the money down on this house in 2022. It's now 2025."
   - https://moneywise.com/real-estate/i-have-no-money-now-this-florida-retiree-sunk-nearly-her-entire-life-savings-into-a-half-built-house-that-her-bankrupt-builder-wont-finish

3. **Lexology — homebuilder bankruptcy, deposit and warranty treatment:** Bankruptcy Code §365(j) gives a buyer whose purchase contract is rejected a lien on the debtor's interest in the property for recovery of the purchase price paid — but the lien may be subordinate to pre-existing liens (construction lender), and where the property is already encumbered it "may be worthless"; vendee liens under state law may add protection. Home warranties typically become contingent, unliquidated, pre-petition general unsecured claims — value "may be insignificant" absent private warranty insurance.
   - https://www.lexology.com/library/detail.aspx?g=d3b41257-82fe-4633-8389-5929949473d8

4. **CSLB — contractor license bond ($25,000, not per job):** California requires a $25,000 contractor license bond; the bond amount "is not per job; it is the amount available for all the jobs a contractor takes on during the life of the bond." Once depleted, the contractor must buy a new one. Claims may be filed by homeowners damaged by license-law violations. A license bond is canceled 30 days after CSLB receives a cancellation notice — non-payment of the premium alone can trigger suspension.
   - https://cslb.ca.gov/Resources/GuidesAndPublications/ContractorsLicenseBondsGuide.pdf
   - https://www.cslb.ca.gov/contractors/bond_basics.aspx

5. **California Business & Professions Code §7159.5(a)(3) (via CSLB/sacramentolawgroup):** on a home improvement contract, "the downpayment may not exceed one thousand dollars ($1,000) or 10 percent of the contract amount, whichever is less." Violation is grounds for CSLB discipline (citation or accusation). Contractors who file a performance and payment bond are exempt from certain down-payment provisions.
   - https://sacramentolawgroup.com/contractor-defense-attorney/downpayment/

6. **American Heritage Lending contractor vetting checklist (2026):** red flags that predict bad contractor relationships — cash-only terms, "can start tomorrow" availability, no written contract template, refusal to provide COI from the carrier, verbal-only quotes, unwillingness to share references; required terms — line-item scope, milestone-tied schedule, payment schedule follows milestones not calendar, 5–10% retention until punch-list signoff, lien waivers at every draw, defined termination and cure.
   - https://ahlend.com/wp-content/uploads/2026/06/AHL-Contractor-Vetting-Checklist-3.pdf

7. **NPR/KSMU (2022) — deposit losses:** John Burns Real Estate Consulting survey of ~100 builders on earnest-money deposits; attorney Craig Rothburd: "Everything in these agreements is drafted in favor of the developer"; buyers in St. Cloud, FL worried about losing $25,000 deposits; some builders kept deposits per contract terms.
   - https://www.ksmu.org/2022-11-16/some-homebuyers-lose-deposits-of-10-000-20-000-or-more-due-to-high-mortgage-rates?_amp=true

## Original contribution: the deposit recovery waterfall + five-signal distress screen
Nobody has laid out, for a homebuyer, exactly where their deposit sits if the builder files:

**Recovery waterfall on a $400,000 custom build, $40,000 (10%) deposit, Chapter 7:**
1. Secured construction lender — paid first from the property.
2. Mechanics-lien claimants (unpaid subs/suppliers) — ahead of you in most states.
3. Your §365(j) deposit lien — attaches to the debtor's interest in the property, but subordinate to the pre-existing liens above; on an encumbered half-built house, Lexology's word is "worthless."
4. The $25,000 CSLB license bond — shared across every claimant on every job the contractor had during the bond's life. On a $40,000 deposit you are already $15,000 short before the first competing claim arrives.
5. General unsecured claim — pennies on the dollar; Renovo's math ($100–500M liabilities vs. <$100K assets) implies a recovery rate rounds to zero.

Expected recovery on that $40,000 deposit: low single digits of cents on the dollar unless the deposit was escrowed or bonded separately. That is the number the article earns.

**Five-signal distress screen (an afternoon's work, no subpoena required):**
1. CSLB license detail page: bond history (cancellations = premium non-payment), complaints, disciplinary actions — free, public.
2. Permit velocity: pull the city permit portal for the builder's name; a builder who pulled 30 permits a quarter now pulling 2 has a cash-flow story.
3. Payment behavior: subs paid late file preliminary notices; a preliminary notice on your job means someone upstream isn't getting paid.
4. Review forensics: bursts of 5-star reviews after years of silence, identical syntax across reviews, no local specifics — AI-generated reputation laundering.
5. Deposit terms: any demand above the statutory cap (CA: $1,000 or 10%, whichever is less, on home improvement) or pressure to wire outside escrow.

## Strongest counterargument
The overwhelming majority of residential projects finish without the builder failing; large production builders have balance sheets, surety relationships, and lender oversight that make Chapter 7-style disappearances rare — the failures cluster among small custom builders and PE-backed roll-ups. Deposits held in escrow by a title company are not the builder's money and survive a bankruptcy. Performance and payment bonds, where required, convert the waterfall entirely. And aggressive pre-signing vetting has a cost: in a market where good contractors book 4–8 weeks out, treating every builder like a fraud suspect burns goodwill and can lose you the crew you actually want. The distress screen is a filter, not a verdict — two signals merit questions, not an accusation.

## Limitations
- Renovo and Van Der Valk figures come from press coverage of court filings, not from audited claims data; ultimate creditor recoveries are not yet public.
- The §365(j) analysis rests on a Lexology practice article; lien priority is state- and fact-specific, and this article is not legal advice.
- The $25,000 CSLB bond figure is California-specific; other states range from no bond requirement to six figures — readers must check their own state.
- B&P §7159.5's down-payment cap applies to home improvement contracts; new-construction purchase deposits (tract homes, DRE subdivisions) operate under different rules, typically 1–3% held in escrow — the article must keep the two tracks distinct.
- The five-signal screen is a heuristic synthesis, not a validated predictive model; no backtested accuracy figures exist for it.
- Permit-portal data quality varies wildly by jurisdiction; some cities publish nothing machine-readable.
