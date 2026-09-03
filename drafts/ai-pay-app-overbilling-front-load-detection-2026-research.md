# Research: AI pay-app overbilling / front-load detection — Frank DeLuca

**Slug:** ai-pay-app-overbilling-front-load-detection-2026
**Journalist:** Frank DeLuca (Project Management & Operations)
**Article #:** 757
**Date:** September 3, 2026

## Angle
The monthly pay application is the most consequential document on a residential job and the least verified. Subs bill percent-complete from their own schedule of values; the GC's PM "pencil draws" it against memory of a site walk. 64% of projects see overbilling (Payapps, 2024). AI changes the verification side: 360-photo progress capture (Buildots Dot) gives an independent percent-complete per trade, and document AI (GCPay-style validation, open-source Buildbase-payapp with Claude anomaly detection) checks the G702/G703 math and flags front-loading patterns. The article's original contribution: the "8% rule" calculation showing when a billed-ahead percentage equals the sub's entire profit margin, plus pencil-draw review labor economics.

## Kill test
Does this help someone building or buying a home? Yes. GCs and owner-builders approve progress draws monthly; a single front-loaded trade can strand tens of thousands in cash on a job where the sub has already banked its profit and has no incentive to return for punch list. Directly actionable: how to structure SOVs, what to verify, what the AI verification layer costs.

## Primary sources

1. **Payapps "Building the Future" report (via GlobeNewswire, July 2, 2024)** — 64% of construction projects experience overbilling; survey of 1,000+ quantity surveyors and contract administrators; 47% face it occasionally, 17% frequently.
   https://www.globenewswire.com/de/news-release/2024/07/02/2907865/0/en/Overbilling-Over-Half-of-Construction-Projects-Affected-New-Report-Reveals.html

2. **CFMA, "The Hidden Risks of Subcontractor Overbilling"** — defines overbilling mechanics: sub at 40% complete on $100K scope invoices 50%, boosting cash $10K; front-loaded SOVs with inflated early-stage line items; billing unapproved change orders.
   https://cfma.org/articles/the-hidden-risks-of-subcontactor-overbilling?utm_campaign=11558483-Content%20Hub%20Sponsored%20Content&utm_content=362174742&utm_medium=social&utm_source=facebook&hss_channel=fbp-112209692150851

3. **Construction Dive: "7 common payment issues in construction"** — billing-ahead math: sub margins 5-10%; billing 20% ahead of completion banks the full profit, destroying incentive to finish/punch list.
   https://www.constructiondive.com/spons/7-common-payment-issues-in-construction-and-how-to-combat-them/635170/

4. **Construction Dive: MA contractors $420K overbilling settlement** — S&R Construction + sub A&S Electrical settled $420K for knowingly front-loading pay apps to MBTA on Assembly Square Station; violated MA False Claims Act; S&R barred from public work 5 years.
   https://www.constructiondive.com/news/ma-contractors-pay-420k-to-settle-overbilling-prevailing-wage-charges/436968/

5. **Siteline, "Where Subcontractor Billing Goes Wrong" (2025 report data)** — only 5% of subs paid on time; average 96-day wait; $14B tracked receivables; Siteline customers average 55 days (41-day improvement).
   https://www.siteline.com/blog/where-subcontractor-billing-goes-wrong-and-how-to-fix-it

6. **Levelset payment survey** — 37% of GCs always get advance deposits vs 13% of subs; subs front-load pay apps to fund payroll for their own subs/suppliers; GCs 2x more likely to be paid on time than subs.
   https://www.levelset.com/news/general-contractors-2x-more-likely-than-subs-to-get-paid-on-time/

7. **CFMA / Rabbet 2024 Construction Payment Report (via CFMA)** — industry loses ~$280B/yr to slow payment processes.
   https://cfma.org/articles/why-subcontractor-billing-breaks-and-how-to-fix-it

8. **Buildots "Dot" AI assistant (Engineering.com, ~Oct 2024)** — GenAI answers natural-language progress queries ("exact progress percentage" per trade/activity/area) from 360 site-capture data vs BIM/schedule; superintendents cross-reference trade claims against captured conditions.
   https://www.engineering.com/buildots-launches-dot-for-construction-process-management/

9. **Buildbase-payapp (GitHub, buildevo)** — open-source AI AIA G702/G703 workflow: Next.js + Claude API; runs AIA calculations, anomaly detection on billing amounts, GC roll-up. Evidence the document-AI layer is commoditizing.
   https://github.com/buildevo/buildbase-payapp

10. **GCPay AIA billing guide** — digital platforms flag missing/inconsistent G702-G703 data; GC review checklist: detailed G703, G702/G703 alignment, lien waivers, automated validation.
    https://ww3.gcpay.com/blog/quick-guide-to-aia-billing/

## Original contribution: the 8% rule + pencil-draw economics
- **The 8% rule (new calculation):** Take a $300K trade package at an 8% margin = $24,000 profit. $24,000 / $300,000 = 8%. A sub billing just 8 percentage points ahead of verified completion has already collected its entire profit in cash. Every point beyond that is the GC financing the sub's next job. At 5% margins (low end of Construction Dive's 5-10% band), the number is 5 points. Show math with inputs and assumptions in-article.
- **Pencil-draw labor cost (new estimate, labeled as modeled):** 12 sub pay apps/month x 40 min review each (field verification + math check + lien waiver chase) = 8 hrs/month; over a 10-month custom home = 80 hrs; at $95/hr loaded PM cost = $7,600/project in review labor. Assumption set stated explicitly.
- **Exposure table:** for trade packages $150K/$300K/$600K, cash advanced when billed 10 and 20 points ahead.

## Counterargument (strongest, to state at full strength)
Front-loading is often not fraud but survival: subs wait 96 days to get paid (Siteline), only 13% get deposits (Levelset), and they fund payroll weekly. Criminalizing the pencil-draw gap with cameras and AI treats a cash-flow disease as a honesty problem; the MBTA case was genuine fraud, but most residential front-loading is a sub keeping crews paid while the GC's own slow certification starves them. Tighter verification without faster payment just moves the pain downhill.

## Limitations to acknowledge
- Payapps 64% figure is a vendor survey (respondents are QS/contract admins, self-reported; "overbilling" includes accidental).
- No public dataset quantifies residential-only overbilling rates; commercial/public figures used as proxies, stated as such.
- Buildots per-trade progress percentages are vendor claims; independent accuracy audits for residential-scale projects are thin.
- The 8% rule assumes margin is evenly distributed across the SOV; real SOVs are themselves often front-loaded, which makes the true number worse, not better.
- Pencil-draw labor estimate is modeled, not measured; review practices vary widely.

## What to do Monday (actionable)
- Break SOVs into milestone-verifiable line items (no single "rough-in complete 0-100%" lines).
- Require the pencil walk before the pencil draw: no pay app approved without same-week field verification.
- Cap stored materials billing to insured, on-site or bonded off-site storage.
- Run the 8% rule on every app: (billed % - verified %) x contract value vs. estimated trade margin.
- For GCs doing $2M+/yr: 360-capture progress verification runs a few thousand/month; break-even is one caught front-load per year.
