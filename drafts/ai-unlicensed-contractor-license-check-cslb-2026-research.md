# Research: Unlicensed Contractor License Verification — Article #907

**Topic:** California's unlicensed-contractor enforcement gap, and the 90-second license check (plus AI vetting tools) that homeowners should run before hiring.

**Journalist:** Frank DeLuca (Project Management & Operations)
**Kill test:** Does this help someone building or buying a home? Yes. Directly: a homeowner hiring any contractor over $1,000 faces unlicensed-operator risk; the article gives the exact verification protocol, the legal deposit cap, and the math on what enforcement can and cannot do.

## Primary sources (10)

1. **CSLB Enforcement Committee minutes, April 11, 2025** (web.cslb.ca.gov) — FY 2024-25: 9,317 complaints received since July 1, 2024; $11,743,932 restitution; 4,245 complaints assigned to special investigators (avg caseload 37); 1,493 referred to legal action, 398 for criminal prosecution; Multiple Offender Unit (created late 2023): 10+ open complaints routed directly, 1,359 handled to date, 772 closed, 587 pending; 22 licensees accused (84 complaints), 23% revoked; 5 licenses revoked, 17 accusations pending, 2 criminal referrals.
   https://web.cslb.ca.gov/Resources/BoardMinutes/2025/D1b2_-_April_11_Enforcement_Committee_Minutes.pdf

2. **CSLB board meeting, September 3, 2026** (via citizenportal.ai meeting summary) — staff analytical study: 70,000+ individuals operating unlicensed in CA; ~79,000 businesses advertising construction services with no matching CSLB license (string standardization + Power BI fuzzy matching, 95-99% confidence thresholds); board authorized executive committee to implement five steps: improved data-matching with city partners, public education/workshops, language access, budget request for enforcement staff, performance benchmarks; IT flagged need for API to exchange business-license data with local jurisdictions.
   https://citizenportal.ai/articles/9761464/california/executive/other-state-agencies/contractors-state-license-board/cslb-authorizes-executive-committee-to-pursue-plan-addressing-estimated-70000-unlicensed-contractors

3. **Enforcement scale math** (argo-marketplace/future_of_california, "underground-economy-unlicensed-build.md", GitHub) — ~400 CSLB staff regulating 231,000 active licensed contractors + unknown unlicensed operators across 164,000 sq mi; ~20,000 complaints/year; 2023: 21,406 complaint investigations closed, 3,833 legal actions, $40M+ restitution; SWIFT: 217 sweeps across 43 counties/174 cities in first 7 months of 2024, 969 complaints opened, 704 admin/criminal actions. Penalties rarely imposed at maximum; DAs treat as low priority.
   https://github.com/argo-marketplace/future_of_california/blob/HEAD/content/california-counts/underground-economy-unlicensed-build.md

4. **NBC Bay Area / Moneywise: complaints hidden from public record** — CSLB closed at least 10,719 complaints 2020-2024 without investigation when customers settled for cash; only investigated complaints appear on the public license lookup; Anchored Tiny Homes: 10 complaints visible publicly vs ~259 received by CSLB (25x). Chief of Public Affairs: if contractor settles with customer for cash, "we'll move on."
   https://moneywise.com/real-estate/no-protection-for-the-consumer-california-homeowners-want-answers-on-states-handling-of-builder-complaints

5. **B&P Code §7028** (CaseMine) — unlicensed contracting = misdemeanor; first conviction: fine up to $5,000 and/or up to 6 months county jail; second/subsequent: fine = 20% of contract price or aggregate payments, or $5,000, whichever greater, plus minimum 90 days jail.
   https://www.casemine.com/act/us/643905d3d0293739de18ccb6/amp

6. **CSLB approved civil penalty schedule (16 CCR §884)** — §7028: $200-$5,000; §7028.7 (unlicensed, substantial injury/egregious): $200-$15,000. (April 23, 2026 proposal raises minimums; approved text in effect.)
   https://www.cslb.ca.gov/About_Us/library/laws/CPR_Approved_Assessment.aspx

7. **SB 465 (leginfo) amending B&P §7071.6** — contractor's bond: $15,000 required; aggregate surety liability capped at $7,500 for non-beneficiary claims; applicant with a §7028 conviction/citation for substantial-injury violation can be required to post double bond until renewal.
   http://www.leginfo.ca.gov/pub/15-16/bill/sen/sb_0451-0500/sb_465_bill_20150421_amended_sen_v98.htm

8. **B&P Code §7159.5(a)(3), (a)(5)** (FindLaw / CaseMine) — home improvement down payment cap: $1,000 or 10% of contract amount, whichever is less; except for the down payment, contractor may neither request nor accept payment exceeding the value of work performed or materials delivered; written payment schedule in dollars and cents required.
   https://codes.findlaw.com/ca/business-and-professions-code/bpc-sect-7159-5/

9. **BBB / home improvement scam scale** (Stacker/PeopleFinders via local press) — 81,925 home improvement scams reported by U.S. consumers in 2024; median loss $1,800 (4th costliest of 27 scam categories); nearly 1 in 10 Americans has experienced a home improvement scam.
   https://www.livingstonparishnews.com/premium/stacker/stories/home-improvement-scams-are-heating-up-this-summer,227887

10. **Utah DOPL/DCP construction fraud** (Utah Policy) — $32M in reported construction fraud losses over 3 years; average new-home-construction loss per consumer: $302,000; DOPL received 2,146 construction complaints in 2024; state created Residential Construction Fraud Task Force + first full-time prosecutor for construction fraud.
    https://utahpolicy.com/news-release/75104-utah-forms-task-force-to-combat-residential-construction-fraud

## AI / technology sources

- **ContractorCREDS** (Proxy1Media LLC) — free public credential-verification platform: 155,000+ contractors, 36 states, 255+ trades; profiles surface state license, GL insurance, surety bond, workers' comp, OSHA cert, BBB; homeowner watchlist with license-expiration/insurance-lapse/complaint alerts; NAICS-code search. https://androidiphone.einnews.com/pr_news/918566107/contractorcreds-unveils-the-most-comprehensive-contractor-credential-verification-platform-in-america
- **ShieldGuard AI** (GitHub, mashsyed/contractor-vetting-agent) — open-source multi-agent contractor vetting: credentials/license verifier, quote auditor against market averages, lawsuit detection, trust scoring, homeowner interview-coaching guide. https://github.com/mashsyed/contractor-vetting-agent
- **Nomad Data Doc Chat** — AI cross-checks adjuster/agent licenses against claim-file evidence to flag unlicensed activity in insurance documents before it becomes enforcement action (adjacent proof of the pattern). https://www.nomad-data.com/doc-chat/identifying-unlicensed-activity-ai-cross-checks-adjuster-and-agent-documents-auto-property-homeowners-general-liability-construction

## Original contribution (novel calculation)

**Enforcement coverage math:** 70,000 estimated unlicensed operators vs. 2023 throughput of 21,406 closed complaint investigations (which cover both licensed AND unlicensed). Even in the impossible case where every investigation targeted an unlicensed operator, that's ~31% annual contact. Real share is far lower (licensed contractors are 231,000 of the regulated population). So: the regulator contacts a single-digit percentage of unlicensed operators per year. Your license check is the only enforcement that happens on your job.

**Bond math:** The $15,000 contractor bond caps aggregate surety liability at $7,500 for consumer claims — against a median home-improvement scam loss of $1,800 it's adequate, but against Utah's $302,000 average new-home-construction loss it's 2.5%. The bond is a tripwire, not a safety net.

## Strongest counterargument

A license is not a competence certificate. Licensed contractors generated 9,317 complaints in FY 2024-25. Anchored Tiny Homes was licensed when it took money and dropped projects. And the public lookup itself is sanitized: 10,719 complaints closed 2020-2024 without investigation never appeared on any public record. A clean lookup means "no investigated complaints," not "no complaints." Also: jobs under $1,000 are legal without a license in CA, and good unlicensed handymen exist. Verification reduces tail risk; it doesn't certify craftsmanship.

## Limitations

- CSLB's 70,000/79,000 figures come from string/fuzzy matching at 95-99% confidence; false positives and undercounts both acknowledged by the board.
- National scam/loss figures (BBB 81,925 reports, $1,800 median) rely on self-reported complaints; unreported fraud is by definition unmeasured.
- No published study measures whether instant-lookup or AI vetting tools reduce homeowner victimization rates; the claim that they help is inference from the enforcement gap, not measured outcome.
- ContractorCREDS claims (155,000 contractors, 36 states) are vendor-reported; not independently verified.
- Enforcement stats skew California; other states license differently or not at all.

## Actionable takeaways (required)

1. **The 90-second protocol:** get the license number → CSLB instant license lookup (cslb.ca.gov "Check the License") → confirm Active status, classification matches your work type (B = general, C-10 = electrical, etc.), bond current, workers' comp current if they have employees.
2. **Google the number itself.** Borrowed/expired numbers are a known dodge; if the number belongs to a different business name, walk away.
3. **The deposit test (CA):** max $1,000 or 10% of contract, whichever is less (B&P §7159.5). Anyone demanding half down is either unlicensed or planning to be someone else's problem.
4. **Never pay ahead of the work:** except the down payment, payment may not exceed value of work performed/materials delivered (§7159.5(a)(5)). Tie every payment to a milestone in dollars and cents in the written contract.
5. **Put them on a watchlist** (ContractorCREDS or equivalent): license expirations, insurance lapses, and new board complaints arrive as alerts. Costs nothing.
6. **If the price is 40% under the other two bids**, the license check isn't optional. That's the arbitrage the unlicensed economy runs on: no license fees, no bond, no workers' comp, no payroll taxes.
