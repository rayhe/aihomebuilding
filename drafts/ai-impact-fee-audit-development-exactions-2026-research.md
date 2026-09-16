# Research: AI Impact Fee Audits vs. Development Exactions (Article #873)

**Journalist:** Catherine "Code" Chen (policy, legal, building codes)
**Slug:** `ai-impact-fee-audit-development-exactions-2026`
**Date:** September 16, 2026

## Kill test
Does this help someone building or buying a home? Yes. Development impact fees add $20K-$150K+ to a new home's cost in California, are "extremely difficult to estimate" per UC Berkeley researchers, and fee bills routinely include line items the builder never verifies. A homeowner or small builder who audits the fee bill against the published schedule before paying can catch misapplied fees, and appeal windows are short. This article gives them the audit checklist.

## Primary sources

1. **Terner Center, UC Berkeley — "Assessing the Cost of Impact Fees on Affordable Housing" (research brief, ~Jan 2026):** 691 new LIHTC construction projects, 2020-2023 application data. Almost all included development impact fees averaging ~$20,000/unit. 134 projects (13,660 units) assessed >$30,000/unit. Affordable developments paid ~$300M/year in fees. Fee waivers/reductions could have financed ~1,250 additional affordable units/year at $200K/unit subsidy.
   https://ternercenter.berkeley.edu/blog/assessing-the-cost-of-impact-fees-on-affordable-housing-an-analysis-of-low-income-housing-tax-credit-projects-in-california/

2. **Terner Center — "It All Adds Up: The Cost of Housing Development Fees in Seven California Cities" (Mar 2018, Mawhorter/Garcia/Raetz):** Case studies of Berkeley, Oakland, Fremont, Los Angeles, Irvine, Sacramento, Roseville. Findings: fees "extremely difficult to estimate"; set without oversight or coordination between departments; vary widely; "projects are often subject to additional exactions not codified in any fee schedule." SV Business Times coverage: city fees add $150,000 to the cost of each new home in Fremont.
   https://ternercenter.berkeley.edu/research-and-policy/it-all-adds-up-development-fees/

3. **Terner Center — "Residential Impact Fees in California" (AB 879-mandated study):** Scope is fees under the Mitigation Fee Act ("impact fees"); excludes school fees and utility fees; includes transit fees, park fees, affordable housing fees. Establishes the legal frame: Government Code Mitigation Fee Act requires nexus and rough proportionality.
   https://ternercenter.berkeley.edu/blog/residential-impact-fees/

4. **GreenLite Series B, $49.5M (Sep 15, 2025, Insight Partners-led):** AI-powered private plan review (PPR); claims 75% permit timeline acceleration; authorized in ~2,000 jurisdictions; expanding into residential development; ~25% of states advanced PPR legislation in 3 years. Private plan review is the delivery vehicle through which AI fee-schedule cross-referencing reaches builders.
   https://www.prnewswire.com/news-releases/greenlite-raises-49-5m-series-b-to-advance-the-privatization-of-construction-permitting-with-ai-powered-solutions-302555315.html

5. **CA Government Code 65852.2(f)(3):** ADUs under 750 sq ft are exempt from impact fees; larger ADUs pay fees proportional to the primary dwelling. (Statutory reference for the audit checklist.)

## Original contribution: The Fee Bill Audit
Nobody has published a worked audit of a residential impact-fee bill showing where the errors hide. This article provides:
- **The opacity tax (modeled, labeled as such):** Terner's researchers needed months, multiple departments, and repeated interviews to assemble fee totals for 7 cities. For a small builder, replicating even a fraction of that is 40-80 hours of staff/consultant time. At a $150/hr blended consultant rate, the *cost of estimating the fees* is $6,000-$12,000 before a single fee is paid.
- **The ADU exemption tripwire:** Any fee bill charging full impact fees on a sub-750-sq-ft ADU contradicts Gov Code 65852.2(f)(3). An AI that reads the plan set (unit sq ft) against the fee schedule line items flags this automatically; a human clerk eyeballing a 14-line fee invoice does not.
- **The schedule-version check:** Fee schedules update annually (often July 1). Bills computed on a superseded schedule are appealable. AI cross-referencing catches the version mismatch; the article shows readers how to check the effective date on their city's published schedule.
- **The uncodified-exaction flag:** Terner found projects "often subject to additional exactions not codified in any fee schedule." Any line item with no schedule citation is the first thing to challenge.

## Numbers to use (all sourced)
- ~$20,000/unit average impact fees on CA LIHTC projects (Terner 2026 brief)
- 134 projects / 13,660 units assessed >$30,000/unit (same)
- ~$300M/year in fees paid by affordable developments (same)
- $150,000/home in Fremont (Terner 7-city study via SV Business Times)
- 75% permit timeline acceleration claim (GreenLite, vendor claim, label as such)
- $49.5M Series B, ~2,000 jurisdictions (GreenLite PR)
- $6,000-$12,000 modeled opacity tax (Kit's model, labeled)

## Strongest counterargument
Impact fees exist for a reason: new homes genuinely burden parks, roads, water, and schools, and the Mitigation Fee Act requires nexus and proportionality. Auditing fee bills is not the same as arguing fees should be zero; underfunded infrastructure is a real cost shifted to existing residents. Also: AI fee audits threaten a revenue stream cities depend on, so expect municipal resistance and slow data access, the same opacity Terner documented will fight the tools trying to pierce it.

## Limitations
- No public dataset of residential fee-bill *errors* exists; the audit checklist is built from the fee-schedule mechanics Terner documented, not from a measured error rate. Do not claim a specific % of bills contain errors.
- GreenLite's 75% acceleration and residential expansion are vendor claims; independent verification is thin.
- The opacity-tax model ($6K-$12K) is Kit's arithmetic on Terner's process description, not a measured builder survey.
- Mitigation Fee Act case law on what counts as a "reasonable" fee is fact-specific; this article is not legal advice.

## Actionable takeaways (required)
1. Before paying any impact-fee bill: demand the line-item breakdown with a schedule citation per line.
2. Check the schedule's effective date; fees billed under a superseded schedule are appealable.
3. Sub-750-sq-ft ADU billed full impact fees = automatic challenge under Gov Code 65852.2.
4. Any line item with no published schedule citation gets challenged first (Terner's uncodified exactions).
5. Ask whether the jurisdiction accepts private plan review (PPR); ~25% of states now have PPR legislation and AI-assisted reviewers itemize fees as part of the package.
