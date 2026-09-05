# Research: AI COI Verification and the Ghost-Policy Gap in Residential Construction

## Journalist: Marcus "Steel" Washington (Workforce & Labor)

## Thesis
Every GC collects certificates of insurance from subs. Almost none verify them against reality. A "ghost policy" — a minimum-premium workers' comp policy that lists zero employees — produces a perfectly valid-looking COI while covering nobody on the job site. When a worker gets hurt, the GC (and sometimes the homeowner) discovers the gap the hard way. AI verification tools (Jones, TrustLayer) now cross-check COIs against policy data in real time, but the fraud economics that make ghost policies attractive haven't changed.

## Kill Test
Does this help someone building or buying a home? YES. Anyone hiring a GC or directly hiring subs needs to know a COI is a claim, not proof. Actionable: how to verify a COI in 5 minutes (call the broker on the cert, check CSLB license + comp status), red flags of ghost policies, what AI verification costs vs. one uncovered injury.

## Key Statistics

### The fraud scale (primary: CA Dept. of Insurance, State Fund)
- CA Dept. of Insurance estimates workers' comp fraud costs California **$1-3 billion/year** (citing NICB).
- FY 2023-24: Fraud Division identified **2,932 suspected fraud cases**, assigned 291 new cases, made **128 arrests**, referred 156 to prosecutors. Potential loss: **$157.2M**.
- Fraud assessment on CA employers FY 2023-24: **$85.7M** to fund enforcement.
- State Fund CA SIU restitution ordered: $8.7M (2020) → $17.8M (2023); "successfully pursued" restitution roughly doubled 2020-2024.
- Case example (Insurance Journal via Gary C. Nelson law office): two owners of a flooring installation company arraigned on **3 felony counts** of workers' comp fraud; misclassified workers as 1099s; **$3.8M in losses** to insurers.

### Ghost policies and misclassification (primary: Safety News Alert / N&O reporting, CDI)
- "Ghost policy": a workers' comp policy written with **zero reported employees** — legal for a true solo owner-operator, fraudulent when a crew of 8 is on site.
- North Carolina DES: ~**40% of companies had misclassified employees** (N&O investigation).
- CA and PA have laws requiring construction site owners to provide workers' comp coverage for **all workers on-site regardless of employee/independent-contractor classification**.
- The economics: a sub carrying real workers' comp on a roofing or framing crew pays one of the highest premium rates in construction; a ghost policy costs a few hundred dollars a year. The honest sub can't win the bid.

### Enforcement (primary: CSLB)
- CSLB SWIFT, Jan-Jul 2024: **26 days of stings**, 14 operations, **60 notices to appear**, 11 citations, **15 stop orders**; 80 cases referred to DAs.
- NASCLA coordinated effort, Oct (2 weeks): **4 undercover stings + 79 sweeps in 26 counties**, **229 legal actions**.
- Bakersfield sting (Aug 2024): 12 cited for unlicensed contracting; **6 of 12 issued stop orders for lacking workers' comp**; bids as high as $5,000.
- Statewide NASCLA sweep (2023): **90 legal actions** for unlicensed contracting + **37 for workers' comp violations**; 50 individuals faced criminal charges for contracting without a license.
- Penalties: unlicensed contracting = misdemeanor, fines up to **$15,000** administrative; repeat offenders face mandatory 90-day jail.

### The AI verification market (primary: company announcements)
- **Jones**: $15M Series B (Jan 7, 2025), led by NewSpring Capital; investors include Khosla Ventures, JLL Spark, Camber Creek. AI-driven COI/endorsement/policy verification for real estate + construction. Covers **25,039 properties/projects, 2.5B sq ft** in the US. Releasing GenAI agents trained on "millions of verified insurance documents."
- **TrustLayer**: $15M Series A (2021), led by Craft Ventures; backed by 20+ of top 100 insurance brokers via BrokerTech Ventures. Uses **RPA + AI** to verify insurance, licenses, compliance docs. **Procore integration** — syncs sub compliance status into Procore in real time; live "digital proof of coverage" pilots with Liberty Mutual, Nationwide.
- The pitch both make: manual COI review is "highly manual and error-prone" (NewSpring's Marc Lederman); AI cross-checks limits, endorsements, and expiration against contract requirements automatically.

## Original Contribution
The "valid COI, zero coverage" gap analysis: a COI only proves a policy *existed on the issue date* — it does not prove the named insured has employees covered, that payroll was reported, or that the policy wasn't cancelled the next week. Combine with the fraud-economics math: on a typical residential framing sub bid, the workers' comp cost delta between an honest policy and a ghost policy can exceed the sub's entire profit margin — which is exactly why the low bidder is so often the uninsured one. Nobody in the trade press has connected ghost-policy economics to the AI verification pitch.

## Limitations
- Ghost-policy prevalence in *residential* specifically is not broken out in CDI statistics; the $1-3B figure covers all industries.
- Jones and TrustLayer customer claims (25,039 properties, "millions of verified documents") are company-reported, not independently audited.
- Pricing for both platforms is quote-based; no public per-sub or per-project pricing to build a precise ROI model.
- The article cannot verify how many residential GCs use AI COI verification vs. manual review — adoption data is not public.

## Strongest Counterargument
The honest version: most COI fraud is caught by a 5-minute phone call to the broker listed on the certificate, which costs nothing. AI verification is a paid product solving a problem that diligence already solves — and it creates a new dependency: the GC who outsources verification to software stops reading certificates entirely, which is exactly the complacency fraudsters count on. The technology doesn't fix the incentive; it just moves the trust from paper to a dashboard.

## Sources (primary)
1. CA Dept. of Insurance — Workers' Compensation Fraud Program (FY 2023-24 stats): https://www.insurance.ca.gov/0300-fraud/0100-fraud-division-overview/10-anti-fraud-prog/Workers-Comp.cfm
2. CA Dept. of Insurance — History of the Fraud Division ($1-3B estimate): https://www.insurance.ca.gov/0500-about-us/02-department/035-eb/fraud-history.cfm
3. State Fund CA — fraud restitution data 2020-2024: https://www.statefundca.com/state-fund-today/were-fighting-fraud/
4. CSLB — SWIFT/NASCLA enforcement (2024 stings, 2023 sweep): https://www.cslb.ca.gov/Resources/PressReleases/2025/SWIFT%20NASCLA.FINAL.pdf and https://cslb.ca.gov/Resources/PressReleases/2024/Bakersfield_Sting01.pdf
5. Jones $15M Series B (Jan 2025): https://www.vcaonline.com/news/2025010707/jones-raises-15m-series-b-to-solve-insurance-verification-with-vertical-ai-agents-for-real-estate-and-construction/
6. TrustLayer $15M Series A + Procore integration: https://www.holmesmurphy.com/news/trustlayer-raises-15m-to-build-the-future-of-insurance-verification/ and https://trustlayer.io/resources/trustlayer-launches-integration-with-procore
7. Flooring company $3.8M fraud case: https://www.gcnelsonlaw.com/blog/2021/05/workers-compensation-fraud-in-the-california-construction-market/
8. Ghost policy / misclassification background: https://www.safetynewsalert.com/how-many-of-your-business-competitors-cheat-on-workers-comp/
