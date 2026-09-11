# Research Notes — Article #824
**Slug:** `ai-timekeeping-wage-theft-crew-surveillance-2026`
**Headline (working):** "A Record $259 Million in Stolen Wages Got Returned Last Year. The Tool That Could End Wage Theft Is the One Workers Call a Snitch."
**Journalist:** Marcus Washington (Workforce & Labor)
**Date:** September 11, 2026

## Angle
The Wage and Hour Division recovered a record $259M in stolen wages in FY2025, the most since 2019. Geofenced AI timekeeping (Rhumbix, ClockShark) creates tamper-proof, location-stamped time records that make wage theft harder to pull off. The catch: the same tool is a surveillance camera pointed at the crew, and the data sits with the employer, who is often the thief. Workers hate it. A labor reporter's look at both halves of the bargain.

## Kill test
Does this help someone building or buying a home? Yes, three ways: (1) GCs learn the break-even math on timekeeping tools and the DOL liability exposure of paper timesheets; (2) homeowners learn that wage disputes on their project mean liens, stop-work, and delay risk, and how to ask their builder about payroll compliance; (3) workers learn their rights and the surveillance trade-off in concrete terms.

## Novel contribution (original calculation)
Break-even math on geofenced timekeeping, cross-referencing BLS wage data with DOL enforcement data. Nobody in the vendor marketing or the labor research combines these two datasets into a per-worker break-even:
- ClockShark standard: $40/mo base + $8/mo per user. Per-worker cost ≈ $96/yr.
- BLS/AGC: production/nonsupervisory construction workers averaged $39.24/hr (July 2026).
- Break-even: $96 ÷ $39.24 = **2.45 hours of recovered wages per worker per year** pays for the tool.
- One worker losing 15 unrecorded minutes/day at $39.24/hr × 250 workdays = **$2,452/yr stolen**, ~25x the tool cost.
- DOL's FY2025 average recovery: $1,465/worker ≈ 37 hours of stolen time at $39.24/hr.
- Crew scale: 20-person crew = $200/mo ($2,400/yr). Protecting just 2 workers from one average dispute ($2,930) covers the whole year's subscription.

## Primary sources (8)

1. **BLS Employment Situation, August 2026** (released Sept 4, 2026): construction employment +22,000 over the month; 8.359 million workers; average hourly earnings $41.66 (all employees). https://www.bls.gov/news.release/empsit.htm

2. **AGC analysis of BLS data** (July 2026 figures): production and nonsupervisory construction employees, which cover most onsite craft workers, averaged $39.24/hr, up 5.2% YoY, a 21.1% premium over the private-sector average. https://acppubs.com/TXC/article/BBE085A7-employment-gains-and-wages-accelerate

3. **DOL Wage and Hour Division, FY2025 enforcement summary** (Jan 2026 release): recovered $259M+ in back wages for 176,957 workers (avg $1,465/worker), the most recovered since 2019. Construction cases: consent judgment of $7.45M for 1,400+ workers at two commonly-owned Arizona drywall/painting companies that willfully denied overtime; $594K for 419 workers at a Florida contractor; $207K for 157 workers at a Michigan electrical contractor. https://www.dol.gov/newsroom/releases/whd/whd20260108

4. **Economic Policy Institute, "The economic costs of worker misclassification"**: illegal misclassification as an independent contractor costs the typical construction worker $10,177–$16,729 per year (lost supplemental pay, benefits, employer social-insurance contributions). 2021 earnings baseline. https://files.epi.org/uploads/The-economic-costs-of-worker-misclassification-1.pdf

5. **UMass Amherst Labor Center** (Juravich, Ormiston, Belman): payroll audits found more than 1 in 6 Massachusetts construction employers misclassifying workers (2017–2019); indirect estimation puts 9.5–15.8% of the industry workforce in a fraudulent employment relationship; wage theft and cash pay are "a central feature" of the dominant residential-construction business model. https://www.umass.edu/labor/research/working-paper-series/social-and-economic-costs-illegal-misclassification-wage-theft-and-tax-fraud-residential/3-conclusion

6. **Rhumbix** (company data): 3.29M timecards submitted via its field app; 105.1M crew hours captured; $4.4B+ in crew wages captured. Customer highlight: Sprig Electric (600 field workers) cut timekeeping/payroll processing by 360 hours, saving $36K per week. https://www.rhumbix.com/solutions/timekeeping — Note: the company acknowledged the adoption problem early; co-founder told TechCrunch the firm anonymizes individual data and presents it at crew level to address worker privacy concerns (via ConstructionDive, 2016). https://www.constructiondive.com/news/construction-app-startup-rhumbix-with-focus-on-data-driven-insights-r/408947/

7. **ClockShark** (company data): Standard plan $40/mo + $8/mo per user; Pro $60/mo + $10/mo per user. GPS time clock + geofencing (workers can only clock in inside the virtual jobsite perimeter); GPS records only while clocked in; customer Caspar Building Systems reports saving $12,000/yr on payroll. https://www.clockshark.com/blog/best-time-tracking-apps-general-contractors

8. **Bridgit 2026 Construction Workforce Benchmark Report** (via Bricks & Bytes): 36.4% average "rookie ratio" (team members with <1 year tenure), 56% on teams of 51+; 18.7% median attrition; 41% of the construction workforce projected to retire by 2031 (NCCER). Relevant context: high-churn, inexperienced crews are the ones least likely to keep their own accurate time records. https://bricks-bytes.com/blog/rookie-ratio-construction-workforce-benchmark/

## Key narrative facts to use
- Record $259M FY2025 back-wage recovery = enforcement is at a 6-year high; paper timesheets are the vulnerability.
- Misclassification is the dominant fraud in residential construction (EPI: $10–17K/worker/yr; UMass: ~1 in 10 workers in fraudulent employment) — and no geofence app catches misclassification, which bounds the tool's claim.
- Rhumbix's own early history shows the surveillance problem: workers resisted, so the company anonymized individual data. That is the honest tell.
- The data lives with the employer. If the employer is the thief, the tool protects payroll from workers, not workers from payroll.

## Strongest counterargument (to develop in article)
The surveillance objection at full strength: the timekeeping database belongs to the contractor; in most wage-theft cases the contractor IS the violator; the same geofence that proves you were on site also proves you took a 22-minute break; undocumented workers will not opt into a tracking app for obvious reasons; and the biggest theft (misclassification) is invisible to every time clock ever built.

## Limitations to state
- Vendor ROI claims (Sprig Electric $36K/week, Caspar $12K/yr) are self-reported company marketing, no independent audit.
- DOL $259M figure covers all industries, not construction alone; construction-specific share of FY2025 recoveries is not published in the release.
- EPI cost estimates use 2021 earnings; UMass audits cover 2017–2019 Massachusetts, not national 2026.
- Rhumbix anonymization claim dates to a 2016 interview; current product privacy behavior not independently verified for this article.
- ClockShark pricing from company FAQ crawl; plan terms change.
- No independent audit exists of geofence clock-in accuracy (GPS drift, indoor work, parking-lot clock-ins).
