# Research: AI Biometric Time Clocks on Jobsites vs. Illinois BIPA
**Article #876 | Journalist:** Marcus Washington | **Date:** 2026-09-16
**Slug:** ai-biometric-time-clocks-bipa-jobsite-2026

## Angle
The face-scan time clock at the site trailer is AI doing exactly what contractors asked for: kill buddy-punching, verify who's on site, feed payroll clean data. In Illinois, the same scan creates statutory liability of $1,000-$5,000 per worker, and the fix costs more than the theft it stops if the consent paperwork is botched. The whole economics hinge on a form signed at orientation.

## Kill test
A GC in Illinois running a 25-person residential crew is deciding between a $200 face-scan kiosk and paper timesheets. This tells them the clock is the right call but the onboarding packet is the whole game: $50K exposure vs. $34K/yr in prevented time theft, and near-zero exposure with a proper written release (electronic signature now counts).

## Primary sources

### 1. Illinois BIPA, 740 ILCS 14/ (primary legal text, cited via firm summaries)
- Section 15(a): private entity must publish a written retention-and-destruction policy.
- Section 15(b): no collection of a biometric identifier without first informing the person in writing and obtaining a written release.
- Section 15(d): no disclosure/redisclosure to a third party without consent (covers sending face data to payroll vendors).
- Statutory damages: $1,000 per negligent violation, $5,000 per intentional/reckless violation; actual damages; attorney's fees.
- Only state with a private right of action for biometric collection (Texas CUBI, Washington HB 1493 are AG-enforcement only).

### 2. SB 2979, signed Aug 2, 2024 by Gov. Pritzker (amends 740 ILCS 14/20)
- Overrules Cothron v. White Castle (2023) per-scan holding.
- Same biometric identifier from the same person, same method = ONE violation (15b), at most one recovery.
- Same data disclosed to the same recipient, same method = ONE violation (15d).
- Electronic signature now counts as a "written release."
- Retroactivity to pending cases is "an open question" with strong arguments favoring it (Reed Smith).
- Source: https://www.reedsmith.com/articles/illinois-bipa-amendment-brings-relief-to-private-entities/
- Source: https://www.TaftLaw.com/news-events/law-bulletins/illinois-bipa-reform-new-legislation-promises-stronger-privacy-protections-and-clearer-guidelines-for-businesses/

### 3. Cothron v. White Castle (Ill. 2023)
- Each scan = a separate BIPA claim. White Castle's exposure was estimated in the billions (widely reported ~$17B).
- The case that made every Illinois time clock a potential extinction event; the reason the legislature acted.

### 4. Walton v. Roosevelt Univ. / 7th Circuit Miller v. Southwest Airlines (2019), Fernandez v. Kerry (2021)
- Unionized workers' BIPA claims preempted by LMRA Section 301: management-rights clauses push claims into CBA grievance procedures.
- Source: https://www.lexology.com/library/detail.aspx?g=3f6461d4-e4d1-43e8-82d2-3f02ce064d38

### 5. Anviz biometric suit (proposed federal class action, Bloomberg Law, Sept 2026)
- Anviz Global Inc. collected/stored face scans through its biometric timekeeping system without BIPA notice or written consent (plaintiff Keesha Steptour).
- Source: https://news.bloomberglaw.com/litigation/anviz-hit-with-biometric-suit-over-face-scan-timekeeping-system

### 6. Thomas v. Cornerstone Services, Ill. App. 3d Dist., Apr 28, 2026
- Government contract does NOT exempt employers from BIPA.
- Fingerprint time clock since ~2008; consent form never disclosed sharing with ADP (payroll vendor) = 15(d) claim.
- Source: https://www.hcamag.com/us/specialization/employment-law/illinois-court-limits-bipa-exemption-for-government-contractors-using-fingerprint-clocks/573571

### 7. TI Communities / Worksite suit (Crowell client alert, 2026)
- "This is a wage theft and privacy case": face-scan timekeeping + off-the-clock work + overtime miscalculations.
- Biometric tech + wage-and-hour violations = two lawsuits in one.
- Source: https://www.crowell.com/en/insights/client-alerts/two-lawsuits-in-one-the-growing-risk-of-pairing-biometric-tech-with-wage-and-hour-violations

### 8. Buddy-punching economics
- 2017 survey (n=1,000): 16% admitted clocking in for a colleague; extrapolated to $373M+/yr across 78M hourly workers (QuickBooks).
- American Payroll Association: 75% of US small businesses affected; time theft drains 2-7% of gross payroll (via TimeTrex).
- CARI Journals 2024 paper: ~$1,560/employee/year average; 4.5 hrs/week stolen; 15 extra min/day at $15/hr = ~$2,300/yr.
- OnTheClock 2026 survey (n=800+): 25% buddy-punched in past 12 months; 71% know it's against policy; 31% think it's no big deal.
- Source: https://quickbooks.intuit.com/time-tracking/resources/prevent-buddy-punching/
- Source: https://www.ontheclock.com/blog/employee-admissions-survey

### 9. Construction-specific adoption
- ExakTime FaceFront: "developed with contractors in mind" — fingerprints impractical with gloves/dirt; phone camera + GPS becomes photo-verification device. (FleetOwner)
- ClockShark (2018): facial recognition in construction time-tracking app "uses artificial intelligence to verify the identity of employees"; unfamiliar faces alert admins to buddy-punching. "Employees can't share their faces."
- ENR: Davis-Bacon Act requires accurate timekeeping on federal jobs; contractors have "limited guidance" on biometric legal implications.
- Source: https://www.fleetowner.com/technology/article/21677009/facial-recognition-added-to-mobile-time-clock-solution
- Source: http://www.releasewire.com/press-releases/pdf/1010324
- Source: https://www.enr.com/articles/41940-is-it-ok-to-fingerprint-your-employees

## Original contribution: the math (shown in article)
**Scenario:** 25-person residential crew, Illinois suburb of Chicago. Face-scan kiosk at the site trailer. 2 scans/worker/day x 250 workdays = 12,500 scans/year.

**Exposure if consent botched:**
- Pre-2024 amendment (Cothron per-scan): 12,500 scans x $1,000 = **$12.5M** negligent; x $5,000 = **$62.5M** intentional/reckless.
- Post-SB 2979 (per-person): 25 workers x 2 violations (15b collection + 15d disclosure to payroll vendor) x $1,000 = **$50,000** negligent; **$250,000** reckless.

**Theft prevented:** APA midpoint 4.5% of gross payroll... use conservative 2%. 25 workers x $34/hr x 2,000 hrs = $1.7M payroll; 2% = **$34,000/yr** saved by the clock.

**The punchline:** with sloppy onboarding, the $50K privacy exposure is ~1.5x the $34K theft the clock stops; with a proper written release (e-signature counts since 2024), exposure drops to ~$0 and the clock wins cleanly. The entire economic question is decided by a form signed on day one. The legislature cut exposure 250x (from $12.5M to $50K), and contractors still haven't read the memo.

## Counterargument (full strength)
The workers usually want the accurate clock. Buddy-punching is theft from the crew as much as from the boss: honest framers cover for late ones, overtime gets misallocated, and Davis-Bacon jobs demand accurate records by law. Many GCs already collect proper consent; for them BIPA is a paperwork exercise, not a tech problem. And BIPA's private right of action mostly enriches the plaintiffs' bar: workers in time-clock settlements typically receive a few hundred dollars while firms collect millions in fees. The law punishes notice failures, not the technology; the union preemption cases show organized labor bargains over this stuff at the table instead of in court.

## Limitations (what we did NOT prove)
- Not a lawyer; this is reporting, not legal advice. BIPA has a 5-year limitations period (Tims v. Black Horse Carriers, 2023: 5 years) — old clocks still create exposure.
- Retroactive application of SB 2979 to pre-Aug-2024 scans is unsettled; strong arguments both ways.
- Buddy-punching rates for residential construction specifically aren't published; used economy-wide APA/OnTheClock figures.
- Did not verify Anviz device pricing or which GCs use which vendors; "a $200 kiosk" is illustrative.
- Other-state exposure (Texas, Washington, California CCPA) summarized, not analyzed in depth.

## Actionable (4-step BIPA audit for GCs)
1. Written policy: publish retention schedule + destruction plan (15a). Destroy data when employment ends.
2. Consent before first scan: written release, purpose + duration disclosed. E-signature counts (since 2024).
3. Vendor check: if face data goes to a payroll vendor (ADP et al.), name the vendor in the consent or it's a separate 15(d) violation (Thomas v. Cornerstone).
4. Union shops: check the CBA — grievance procedure may be the exclusive remedy (Walton), and the union may have already bargained the clock in.

## Headline options
- "The Clock That Stops Buddy-Punching Costs $1,000 Per Worker in Illinois. The Fix Is a Piece of Paper."
- "Your Time Clock Knows Every Worker's Face. In Illinois, Each Face Is a $1,000 Lawsuit."
- "The Face Scan at the Site Trailer Ends Time Theft. In Illinois It Starts a $50,000 Lawsuit."

**Chosen:** The Clock That Stops Buddy-Punching Costs $1,000 Per Worker in Illinois. The Fix Is a Piece of Paper.
