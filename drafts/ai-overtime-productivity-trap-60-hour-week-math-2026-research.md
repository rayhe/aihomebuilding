# Research: The 60-Hour Week Productivity Trap (article #1026)

**Journalist:** Frank DeLuca (Project Management & Operations)
**Working slug:** ai-overtime-productivity-trap-60-hour-week-math-2026
**Working headline:** "Your Crew's 60-Hour Push Week Delivered 39.6 Hours of Work. You Paid for 80."

## Kill test
Does this help someone building or buying a home? Yes. The "we'll work Saturdays to catch up" conversation happens on nearly every residential project that slips. GCs, owners, and lenders all need the real math on what a crash schedule actually buys. A homeowner judging a contractor's delay claim needs to know that more hours stop meaning more output around week eight.

## Primary sources

1. **Business Roundtable CICE Report C-2, "Scheduled Overtime Effect on Construction Projects" (Nov 1980)** — http://mail.curt.org/pdf/156.pdf
   - 60+ hrs/week sustained longer than ~2 months: cumulative productivity decline pushes completion date BEYOND what the same crew achieves on a 40-hour week.
   - At 50 hrs/week: unit labor cost up ~60% after ~7 weeks.
   - At 60 hrs/week (double-time premium): unit labor cost up 100-105% after ~8 weeks; still +80% at time-and-a-half.
   - "On extended overtime, the reduced productivity of workers for a week's work is equal to or greater than the number of overtime hours worked."
   - Hours above 8/day and 48/week: 3 hours of work to produce 2 additional hours of output (light work); 2 hours to produce 1 hour of additional output (heavy work).
   - Pattern: sharp initial drop, recovery by end of week 1, steady weeks 2-3, decline weeks 4-5, further drop after 5-6 weeks, low point at 9-12 weeks.
   - Figure 5 (60-hr week) week-by-week:
     - Weeks 0-2: productivity 0.90, output 54.0 eff-hrs/man-week, gain vs 40-hr week +14.0, cost premium 26.0
     - Weeks 2-4: 0.86, 51.6 eff-hrs, gain +11.6, premium 28.4
     - Weeks 4-6: 0.80, 48.0 eff-hrs, gain +8.0, premium 32.0
     - Weeks 6-8: 0.71, 42.6 eff-hrs, gain +2.6, premium 37.4
     - Weeks 8-10: 0.66, 39.6 eff-hrs, gain -0.04 (NEGATIVE), premium 40.4
   - Figure 4 (50-hr week): after 6-8 weeks, labor cost inflated 50% with productive returns no greater than a 40-hour week; beyond 8 weeks, actual return is LESS than a 40-hour week.
   - Figure 8: one Sunday shutdown on a 70-hr/week turnaround lifted weekly performance from 0.86 to 0.99 — a rest day outperformed another work day.
   - Remedies the report itself endorses: additional shifts, alternating crews, periodic full shutdowns.

2. **MCAA Bulletin PD-2 / ASCE analysis (Sun, Ibbs 2016, J. Legal Affairs and Dispute Resolution in Engineering and Construction)** — https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29LA.1943-4170.0000196
   - Overtime is a court-accepted productivity loss factor (minor 10%, average 15%, severe up to 20%+ ranges used in claims); "fatigue" is a separate factor. Contractors literally price overtime damage in delay claims against owners — while running the same schedules voluntarily on other jobs.

3. **CPWR Data Bulletin (Sept 2023)** — via https://www.corfix.com/blog/scheduling-decisions-jobsite-safety/
   - Construction workers working overtime (>40 hrs/week) rose 47.3% between 2011 and 2019, vs 13.6% across all industries. The habit is growing in construction while shrinking elsewhere.

4. **Dembe et al. (2005), Occupational and Environmental Medicine** — https://www.news-medical.net/news/2005/08/22/12607.aspx
   - Workers doing overtime 61% more likely to sustain a work-related injury or illness (n=110,236 job records).
   - 60+ hrs/week: 23% increased risk vs fewer hours.
   - 12+ hour days: 37% increased risk.

5. **NIOSH/OSHA worker fatigue hazard summary** — https://www.hsdl.org/c/view?docid=827951
   - 12 hrs/day associated with 37% increased injury risk; evening shifts +18%, night shifts +30% vs day.

6. **ALICE Technologies (generative scheduling) / McKinsey alliance (2026)** — https://blog.alicetechnologies.com/maximum-impact-minimum-disruption-a-guide-to-targeted-optimizationthe-fastest-path-to-schedule-acceleration-and-project-recovery and https://aecmag.com/project-management/mckinsey-and-alice-technologies-form-alliance/
   - ALICE models overtime, weekend, and shift calendars in scenario analysis; one utility case modeled 10/20/30% productivity loss and found the schedule "doesn't degrade in a straight line, it accelerates" — cliff between 10% and 20% loss where impact jumped from days to +195 calendar days.
   - Skepticism note: ALICE is enterprise (transmission lines, data centers), claims 17% duration / 14% labor cost reduction are vendor figures; no residential-GC deployment evidence found. No mainstream residential scheduling tool (Buildertrend, CoConstruct, Procore residential) publishes a fatigue-adjusted labor model. The industry's scheduling software overwhelmingly assumes hours are linear.

## Original contribution: the overtime ledger (author's calculation from CICE Figure 5 data)

Scenario: 5-person residential framing crew, $50/hr fully loaded straight-time cost.

- **4 weeks of 40:** 800 payroll hrs, 800 eff-hrs, $40,000. Cost per eff-hr: $50.00.
- **4 weeks of 60 (time-and-a-half OT):** payroll = 5 men x 4 wk x (40 + 20x1.5) = 1,400 pay-hrs = $70,000. Output = 5 x (2 wk x 54.0 + 2 wk x 51.6) = 1,056 eff-hrs. Cost per eff-hr: $66.29 (1.33x normal).
- **Marginal math:** the crash buys 256 extra eff-hrs for $30,000 = $117.19 per recovered eff-hr, 2.34x the normal rate.
- **Vs. the honest alternative:** 5 weeks of 40 delivers 1,000 eff-hrs for $50,000. The 4-week crash delivers 1,056 eff-hrs for $70,000. The 56 extra hours cost $20,000 = $357/eff-hr, **7.1x the normal rate**.
- **The week-9 cliff:** at weeks 8-10, a 60-hr week produces 39.6 eff-hrs — fewer than a 40-hour week — while being paid as 70-80 pay-hours. You are paying double to go slower.
- **Injury adder:** 23% higher injury risk at 60+ hrs (Dembe). One OSHA recordable on a residential job runs five figures in direct + indirect cost (EMR hit lasts 3 years).

## Strongest counterargument (full strength)
- The CICE data is industrial (pipe fab, power plants), 45 years old, and heavy-work skewed; residential framing crews are smaller, self-pacing, and the work mix differs. Nobody has rerun this study on residential.
- Short bursts genuinely work: the report's own curve shows week 1 recovers after the initial drop; a 2-3 week push to beat a weather window is not the trap — the trap is the push that becomes the plan.
- Sometimes overtime is the least-bad option: liquidated damages, a crane rental clock, a concrete pour that can't wait. The report says so explicitly.
- Workers often WANT the hours — overtime pay funds lives, and in a 47.3%-growth overtime market, taking hours away can cost you the crew.
- The second-shift alternative the report endorses has its own costs (supervision dilution, which the MCAA tables price at 10-25%).

## Limitations
- No residential-specific productivity-decay dataset exists; applying industrial curves to a 5-man framing crew is an extrapolation, flagged as such.
- CICE pay-premium math assumes double-time; most residential OT is 1.5x (article shows both; the 80% cost increase figure is the 1.5x number).
- Dembe injury figures are all-industry, not construction-only.
- $50/hr loaded rate is a stated assumption (varies by market; the RATIOS are the point, not the dollars).
- ALICE claims are vendor-published; no independent audit found.

## Angle
The schedule says "add hours." A 46-year-old industrial study says the hours stop counting around week eight — and your scheduling software never got the memo, because it models labor as a linear input. Frank runs the ledger: what the crash actually buys, when it turns negative, and the three moves the CICE authors recommended in 1980 that still beat every software demo in 2026.
