# Research: AI Contractor Vetting Before You Sign — Catherine Chen

Slug: `ai-contractor-vetting-homeowner-sign-contract-2026`
Article number: 916
Journalist: Catherine "Code" Chen (policy & regulation)

## Angle
The most expensive decision in a home build happens before the first shovel hits dirt: picking the contractor. State licensing databases look reassuring, but in California the public record hides settled complaints. AI-driven vetting services that fuse license data, building-permit histories, and court records can surface what the state won't show — but the math has traps of its own.

Kill test: yes. A single bad GC costs $20K-$100K. This tells a homeowner/building owner exactly how to vet one in 30 minutes, what the free and paid tools cover, and what the state database hides.

## Primary sources (4)

1. **BuildZoom** (buildzoom.com contractor pages, company data): database of 3.5M licensed US contractors, 300M building permits, 135K+ property-owner reviews. BuildZoom score factors: license status, insurance status, verified work history, standing with local consumer interest groups, verified reviews, self-reported contractor feedback.
   - https://www.buildzoom.com/contractor/permit-test

2. **CSLB Enforcement Committee report (April 11, 2025)**: Enforcement Chief Steve Grove reported 9,317 complaints received against licensed and unlicensed contractors since July 1, 2024; $11,743,932 in consumer restitution recovered so far that fiscal year. Multiple Offender Unit (created late 2023) routes contractors with 10+ open complaints for fast-track enforcement — threshold planned to drop to 5+ after three analyst hires. 1,359 complaints handled by MOU to date, 772 closed, 587 pending; accusations against 22 licensees; 23% had licenses revoked.
   - https://citizenportal.ai/articles/6563291/California/CSLB-enforcement-division-reports-9317-complaints-plans-to-expand-multiple-offender-unit

3. **NBC Bay Area / Moneywise on CSLB record-hiding (2025)**: Anchored Tiny Homes had its license revoked after CSLB received complaints of taking client money and dropping projects. Only 10 complaints showed on the public-facing record; NBC found the board had received roughly 25x that (~249 hidden). Why: when a contractor settles a complaint for cash, CSLB does not investigate and the complaint never becomes public record — the state "moves on." NBC estimates the CSLB closed at least 10,719 complaints without investigation between 2020 and 2024, even when customers alleged law-breaking. Licensed contractors carry only a $25,000 bond — no general fund makes consumers whole.
   - https://moneywise.com/real-estate/no-protection-for-the-consumer-california-homeowners-want-answers-on-states-handling-of-builder-complaints

4. **BBB Scam Tracker data (2024)**: US consumers reported 81,925 home improvement scams in 2024. Median monetary loss: $1,800 — the fourth-costliest of 27 scam categories. Nearly 1 in 10 Americans has experienced a home improvement scam.
   - https://lakepowellchronicle.com/premium/stacker/stories/home-improvement-scams-are-heating-up-this-summer,120832

## Original contribution (novel analysis)
The "complaints-per-permit" normalization nobody computes: raw complaint counts punish busy builders. BuildZoom's dataset (300M permits across 3.5M contractors) makes the denominator available — complaints ÷ permitted jobs gives a rate, not a count. A GC with 12 complaints across 400 permitted jobs (3.0%) is a different risk than one with 6 complaints across 12 permits (50%). No vetting tool publishes this rate; this article computes the method with example numbers and shows homeowners how to approximate it from public data (permit count on BuildZoom profile + complaint count from CSLB instant license check).

Also: cross-referencing the CSLB hidden-settlement problem with permit volume as a settlement-proof denominator — permits don't get settled away.

## Costs / actionable
- Free: CSLB instant license check (status, classifications, bond, workers' comp, discipline history — but only investigated complaints).
- Free: BuildZoom profile (permit history volume, license standing, reviews; score methodology proprietary).
- Angi/Thumbtack: screening claims vary; "Angi Certified" / background checks are point-in-time.
- Red flag arithmetic: CSLB recommends 3+ written bids; abnormally low bid = scope error signal (BuildZoom echoes the state license board guidance).
- CA legal: $25,000 contractor bond cap; deposit limits (CA Business & Professions Code §7159: down payment max 10% or $1,000, whichever is less, for home improvement contracts — verify against current statute; CSLB guidance commonly cited).

## Skepticism
- BuildZoom score methodology is proprietary; not auditable.
- Permit volume is patchy in rural/small jurisdictions; contractors who skip permits look clean.
- Busy ≠ good: high permit volume with zero complaints can mean efficient dispute handling or just good lawyers.
- A low score is not a conviction; algorithmic vetting can redline small/independent contractors and reproduce demographic biases in review data.
- Point-in-time checks: a clean license today says nothing about last month's lapse.

## Limitations (to state in article)
- Did not run live BuildZoom/CSLB queries for named contractors in this article; examples are illustrative arithmetic, not findings about specific firms.
- Permit-data coverage varies by jurisdiction; figures assume jurisdictions that digitize permits.
- CSLB figures are California-specific; other states' boards publish less (many publish nothing).
- BBB scam counts are reported incidents; true incidence is higher.

## Strongest counterargument (to include)
Data-driven vetting could do real harm: a single bad year — one contentious remodel, one client who refused to pay — can generate complaints that haunt a contractor for years while the full story sits in a filing cabinet nobody digitized. Scores collapse context into a number, and homeowners will treat the number as truth. The same tools that protect a family from a $64,000 loss can quietly bankrupt an honest small contractor. The state database at least has investigators; the algorithm has no appeals process.
