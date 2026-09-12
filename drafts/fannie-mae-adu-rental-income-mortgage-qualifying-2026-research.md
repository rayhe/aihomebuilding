# RESEARCH: Fannie Mae ADU Rental Income for Mortgage Qualifying (SEL-2025-08)

**Slug:** `fannie-mae-adu-rental-income-mortgage-qualifying-2026`
**Article number:** 831
**Journalist:** Catherine Chen (Policy & Regulation)
**Date:** September 12, 2026
**Kill test:** Does this help someone building or buying a home? Yes, twice over. A homebuyer can now count a backyard cottage's rent toward mortgage qualification, which changes how much house they can buy. A homeowner can run the build-cost vs. rental-income math and the Fannie Mae underwriting math before calling a contractor, and use AI zoning tools for a first-pass feasibility read on their own lot.

## The Core Facts

### The policy change (primary source: Fannie Mae Selling Guide)
- **Fannie Mae Selling Guide Update SEL-2025-08, published October 8, 2025** (reported by ADU Geeks, BiggerPockets, mortgage broker Brazoban; Fannie Mae UAD 3.6 policy doc, March 2026, singlefamily.fanniemae.com): borrowers may now use rental income from an accessory dwelling unit to qualify for a mortgage on a one-unit principal residence.
- The mechanics:
  - **75% of market rent counts** toward qualifying income (the standard vacancy/expense haircut). Market rent comes from a current lease, Form 1007 (Single-Unit Residential Appraisal rent schedule), or Form 1025.
  - **Capped at 30% of total qualifying income.** ADU income used in underwriting cannot exceed 30% of the borrower's total qualifying income. Protects against over-leveraging on projected rent.
  - **Only one ADU's income counts**, even if the property has multiple ADUs.
  - **Prior to this change**, most lenders could not count ADU rental income toward qualification unless the borrower had prior landlord experience or was refinancing. This blocked first-time buyers who planned to rent the cottage.
- Fannie Mae's stated rationale: recognizing rental income from small units as a "sustainable income source," supporting affordability and small-scale infill.
- **Expanded ADU eligibility tied to UAD 3.6** (Clear Capital, Aug 2026): by adopting the redesigned Uniform Appraisal Dataset 3.6 ahead of the **mandatory November 2, 2026 deadline**, lenders unlock: up to **three ADUs** on one-unit properties (significant increase from prior limits); two-unit and three-unit properties eligible to include ADUs (total units not to exceed four); standard single-unit **manufactured homes** can now include an ADU.

### What an ADU costs to build (primary sources)
- **Terner Center for Housing Innovation / Center for Community Innovation, first-ever statewide California ADU owner survey (2021)**: median statewide construction cost **$150,000 ($250/sq ft)**; 37% cost less than $100,000; 71% cost less than $200,000; median rental price of new ADUs **$2,000/month** (range: $1,925 Central Coast to $2,200 Bay Area). Only **8%** of new ADUs are short-term rentals.
- **Honest caveat (verified Sept 2026, riserealtyca.com):** the best available rigorous cost data is still the 2021 Terner survey. No newer academic or government cost study has been published since. Contractor-published 2026 pricing exists but is vendor data.
- **Construction by Maya, Los Angeles, published Sept 8, 2026 (company-published pricing)**: detached ADU in LA typically **$300-500/sq ft all-in** (design, permits, construction); garage conversion $180-320/sq ft. Project totals: 400-500 sq ft garage conversion $90,000-160,000; junior ADU up to 500 sq ft $80,000-150,000; 500 sq ft detached studio/1BR $180,000-260,000; 750 sq ft detached 1BR $250,000-375,000; 1,000-1,200 sq ft detached 2BR $350,000-550,000+. Soft costs (design, engineering, soils, permits, Title 24) 10-20% of budget. Sewer/water line extensions $5,000-20,000 (the surprise category). Electrical panel upgrades $4,000-12,000.
- **Bay Area Telegraph expert roundup (Jan 2026)**: Angi national average $150-300/sq ft, some projects over $600/sq ft; Terner notes Bay Area examples exceeding $800/sq ft (a 500 sq ft ADU reaching $400,000).
- CA cities maintain pre-approved ADU standard-plan libraries (state + LA), which shorten plan check and reduce design fees. 60-day state approval/denial deadline; missed deadline = deemed approved.

### The AI angle: zoning feasibility tools
- **FutureLot** (via I'm The Gaffer podcast ep. 104): AI reads zoning bylaws and codes at scale with a human review layer; homeowner/builder types in an address and gets a fast feasibility report; flags hazard layers (wetlands, fire zones, slopes). Built for builders first; homeowners can run a few reports free.
- **Urban Institute, 2026**: tested a retrieval-augmented generation system on **Minneapolis's 467-page zoning code**, with two personas — a professional multifamily developer and a single-family homeowner asking about an ADU. Findings, honestly reported: even with customization and system prompts, **AI tools often provided answers that were not helpful**. Recommendations: prepare zoning documents so AI can navigate them, use system prompts as guardrails without overcorrecting, and evaluate outputs with local zoning expertise, not surface plausibility. An AI zoning answer can sound confident and well-structured and still be incomplete, outdated, or wrong: it can miss site-specific exceptions, overlays, or amendments. **Zoning interpretation is a reasoning problem, not a search problem.** (Reported via LinkedIn analysis by Khaled, Apr 2026.)
- **cove (architecture firm) / Vitras.ai**: AI zoning research embedded directly in feasibility studies and test fits; architects see setbacks, density limits, conflicting ordinances in real time.
- **Cover (2017, Fast Company)**: algorithmic backyard-home planner; enter address, answer questions, get zoning requirements and buildable placement; prefab design-to-build pipeline. Early proof that address-in, feasibility-out was the product.

### AEI context (primary: AEI Housing Center)
- AEI San Diego case study: 3,039 lots with ADU permits (July 2021-March 2024); with current ADU zoning those lots yield ~4,172 additional units (1.4/lot); under light-touch density zoning the same lots would yield 7,206. The ADU is the modest version of what the lots could carry.

## Original Contribution

**1. Worked Fannie Mae underwriting math (the cap bites).** Take a buyer earning $6,000/month base qualifying income. ADU market rent: $2,200 (Terner Bay Area median). Lender counts 75% = $1,650. Cap check: $1,650 / ($6,000 + $1,650) = 21.6%, under the 30% cap. Total qualifying income: $7,650. At 36% DTI, max housing payment rises from $2,160 to $2,754, a $594/month budget increase. At 6.75% on a 30-year note (~$6.49 per $1,000 of principal+interest), that $594 supports roughly $91,500 more in mortgage principal, everything else equal.

Now the cap-binding case, where the rule's cruelty shows: buyer earning $3,500/month, same $2,200 ADU rent. Uncapped, qualifying ADU income = $1,650, which is 32% of the $5,150 total, over the 30% cap. The binding constraint: qualifying ADU income = 0.30 × ($3,500 + qualifying ADU income), solving to $1,500. The buyer loses $150/month of the rent's underwriting value to the cap. The borrowers who most need the income boost get the smallest boost. That is the arithmetic of the 30% rule, and it deserves to be stated plainly.

**2. Build-cost vs. rental-income payback using real data.** 750 sq ft detached 1BR at LA 2026 pricing of $350/sq ft = $262,500 all-in. At Terner median rent of $2,000/month ($24,000/year), gross yield is 9.1%. Net of ~35% operating costs (taxes, insurance, maintenance, vacancy): ~$15,600/year, simple payback ~16.8 years. Financed via HELOC at 7% on the full cost: interest-only = $18,375/year against $24,000 rent, positive carry ~$5,600/year before principal repayment. The numbers work in high-rent markets and at the garage-conversion price point ($90-160K); they strain at the $400K Bay Area extreme.

**3. The appraisal friction as the real bottleneck** (synthesis, not synthesis-alone): the Fannie Mae rule unlocks *income*, not *value*. Appraisers need comparable sales of ADU properties; in markets where ADUs are new, comps are thin, and the purchase price may not appraise even when the income qualifies the buyer. BiggerPockets flags this: new configurations, tough comps, HELOC and sale problems. UAD 3.6's mandatory Nov 2, 2026 deadline is the industry's attempt to fix the data plumbing. The AI zoning feasibility tools do not solve this; nothing in a zoning report changes a thin comp set.

## Strongest Counterargument

The strongest case against building the cottage: the rule changed the *qualification* math, not the *appraisal* math. A $262,500 ADU on a $900,000 lot does not appraise at $1,162,500 just because you spent $262,500; appraisers value what comparable buyers paid, and ADU comps remain thin in most markets. So the buyer the rule was written for, the first-timer stretching into a house-with-cottage, can qualify on income and still die on appraisal. Lender implementation is also uneven: the policy published October 2025, and 2026 reporting describes implementation as "underway," which is industry language for "some lenders still haven't updated their overlays." The AI feasibility layer is the weakest link of all: the Urban Institute's honest 2026 finding is that RAG-grounded zoning answers are often unhelpful, and a confident, well-structured, wrong answer about setbacks is worse than no answer. And the 8% short-term-rental figure plus the one-ADU-income limit mean this is a long-term-tenant income story, not an Airbnb arbitrage story. The math in this article's payback table assumes the rent arrives every month for 17 years. Landlords know how that goes.

## Limitations

- Best rigorous ADU cost data is the 2021 Terner/CCI survey; construction costs have moved since. 2026 pricing figures are contractor-published (Construction by Maya) or journalist roundups, not academic studies. Treat the payback table as directional.
- The underwriting math uses assumed 36% DTI and 6.75% rate; actual lender overlays, DTI caps, and rates vary. The $91,500 figure is principal-and-interest only; taxes and insurance on the larger purchase consume part of the $594/month budget increase.
- Fannie Mae policy details summarized from trade-press reporting (ADU Geeks, BiggerPockets, Brazoban) and the Fannie Mae UAD 3.6 policy document; the full Selling Guide text governs.
- UAD 3.6 mandatory deadline of November 2, 2026 per Clear Capital (Aug 2026); confirm against Fannie Mae announcements before relying on it.
- Terner median rent ($2,000) is 2021; current market rents in the reader's metro will differ.
- The Urban Institute RAG findings are summarized from a secondary analysis; the underlying 2026 study should be consulted for methodology.
- AI zoning tools evaluated at the product-description level; no independent testing of FutureLot or Vitras.ai outputs was performed for this article.
- Nothing here is mortgage or legal advice; underwriting outcomes are lender-specific.

## Kill Test Result

PASS. A buyer learns the 75%-of-rent / 30%-of-income math and the appraisal gap before house-hunting with a cottage in mind. A homeowner learns the real build costs, the payback arithmetic, and that AI zoning reports are a first pass, not a determination.

## Sources

1. Fannie Mae. Selling Guide Update SEL-2025-08 (Oct 8, 2025); UAD 3.6 Policy, March 2026, p.38 (singlefamily.fanniemae.com/media/42571/display).
2. ADU Geeks. "Fannie Mae now allows ADU rental income to help buyers qualify for mortgages." (adugeeks.com)
3. BiggerPockets. "Fannie Mae Just Made It Easier to Invest in ADUs." (biggerpockets.com)
4. Brazoban. "Turn a Backyard ADU Into Mortgage-Helping Income." (brazoban.com)
5. Clear Capital. "How UAD 3.6 appraisals enable expanded ADU eligibility." (clearcapital.com, ~Aug 2026)
6. Terner Center for Housing Innovation / Center for Community Innovation. "First Ever Statewide ADU Owner Survey Shows Growth, Room for Improvement." (ternercenter.berkeley.edu; 2021 survey: $150K median cost, $250/sf, $2,000 median rent)
7. Rise Realty CA. "California ADU Permitting & Costs by City (2026)." (riserealtyca.com, Sept 2026; confirms no newer rigorous cost study)
8. Construction by Maya. "Urges Los Angeles Homeowners to Understand California ADU Rules Before Starting Fall 2026 Backyard Builds." (Sept 8, 2026; LA pricing $300-500/sf detached, $180-320/sf garage conversion)
9. Bay Area Telegraph. "How Much Does it Really Cost to Build an ADU in California? Experts Weigh In." (Jan 9, 2026)
10. LinkedIn/Khaled analysis. "AI, Zoning Codes, and the Next Frontier of Development Review." (Apr 2026; Urban Institute 2026 RAG test on Minneapolis 467-page zoning code, ADU persona findings)
11. I'm The Gaffer, ep. 104. "Zoning Made Simple: How FutureLot Uses AI to Unlock ADU Builds." (YouTube; Avi Kaufman, FutureLot)
12. cove. "How AI Is Changing Zoning Research for Developers." (cove.inc; Vitras.ai embedded in feasibility studies)
13. Fast Company. "This New Tool Tells You If You Can Build A House In Your L.A. Backyard." (Cover, 2017)
14. AEI Housing Center. San Diego ADU Case Study (May 2024): 3,039 lots with ADU permits.
