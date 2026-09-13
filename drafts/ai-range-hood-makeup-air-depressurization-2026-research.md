# Research: The 900-CFM Hood Your Inspector Approved and the Code Section Nobody Read

**Slug:** ai-range-hood-makeup-air-depressurization-2026
**Journalist:** Catherine Chen (policy, legal, building codes)
**Date:** September 13, 2026
**Kill test:** Helps a homeowner remodeling a kitchen (or buying a home with a pro-style range) avoid a code violation that creates a real carbon-monoxide backdrafting hazard, and tells them the fix costs ~$270 in parts. PASS.

## Angle

Since the 2009 IRC, Section M1503.4 has required makeup air for any kitchen exhaust hood capable of moving more than 400 CFM: air supplied at roughly the exhaust rate, through a damper that opens automatically with the hood. The 2018 IRC sharpened the rule around the actual hazard, natural-draft (atmospherically vented) fuel-burning appliances inside the air barrier. A 900 CFM pro-style hood in a modern tight home can pull the house 70 Pascals negative. The backdrafting limit for an atmospherically vented water heater is minus 2 to minus 5 Pascals. The arithmetic is not close.

The AI hook is real, not bolted on: AI-native plan review (UpCodes launched AI Plan Review in June 2026, running MEP discipline checks against 11M+ code sections across 6,000+ jurisdictions) now parses mechanical plans and flags missing makeup air before the permit is issued. Human plan reviewers routinely miss M1503.4/M1503.6 on residential sets because the hood schedule lives on the appliance sheet and the mechanical notes live three pages away. The machine reads all the pages at once.

## Original contribution: the depressurization calculation nobody published

Power-law infiltration model (Q = C x dP^n, n = 0.65), applied to a 2,400 sq ft home (21,600 cu ft volume):

| House tightness | CFM50 | 400 CFM hood -> dP | 900 CFM hood -> dP |
|---|---|---|---|
| Tight new (2 ACH50) | 720 | ~20 Pa | ~70 Pa |
| Typical existing (5 ACH50) | 1,800 | ~9 Pa | ~32 Pa |
| Leaky old (10 ACH50) | 3,600 | ~4 Pa | ~6 Pa |

BPI/RESNET worst-case CAZ depressurization limits: orphan natural-draft water heater -2 Pa; natural-draft furnace/boiler commonly vented with water heater -3 Pa; individual natural-draft appliance -5 Pa.

Finding: even the code-threshold 400 CFM hood exceeds the -5 Pa limit in a tight (2 ACH50) home by 4x. A 900 CFM pro hood exceeds it in EVERY house on the table, including a drafty 10-ACH50 farmhouse (~6 Pa vs the -2 Pa orphan-water-heater limit). The 400 CFM threshold in the code is not conservative. It is, if anything, generous to the hood.

Methodology notes: assumes whole-house depressurization (interior doors open, worst case per BPI 1200); neglects the hood's own flow reduction under static pressure (real installed CFM sags 10-30% against duct resistance, which only modestly softens the numbers); uses single-zone model. All three simplifications are stated, not hidden.

## Primary Sources

### 1. IRC Section M1503.4 / M1503.6 (ICC, via state adoptions)
- 2021-model language: "Exhaust hood systems capable of exhausting in excess of 400 cubic feet per minute shall be mechanically or naturally provided with makeup air at a rate approximately equal to the exhaust air rate," with an automatically opening damper.
- 2018 refinement ties the requirement to the presence of fuel-burning appliances that are neither direct-vent nor mechanical-draft within the dwelling air barrier.
- Sources: https://codes.iccsafe.org/content/FLRC2020P1/chapter-15-exhaust-systems ; https://codes.iccsafe.org/content/WARC2021P1/chapter-15-exhaust-systems ; NC DOI interpretation https://www.ncosfm.gov/residential/15034-kitchen-exhaust-makeup-air-exceptions/open

### 2. GreenBuildingAdvisor, "Makeup Air for Kitchen Exhaust"
- Requirement added to the 2009 IRC "to the dismay of many homeowners"; rationale (backdrafting hazard) unexplained in the code commentary until the 2018 rewrite tied it to natural-draft appliances.
- Source: https://www.greenbuildingadvisor.com/article/makeup-air-for-kitchen-exhaust

### 3. BPI / RESNET worst-case CAZ depressurization limits (via SoCalREN / HERCC protocol)
- Orphan natural draft water heater: -2 Pa. Natural draft boiler/furnace commonly vented with water heater: -3 Pa. Individual natural draft appliance: -5 Pa.
- Source: https://socalren.org/sites/default/files/raters/Combustion_Safety_Testing_Protocols.pdf

### 4. NREL field study, "Combustion Safety Simplified Test Protocol Field Study"
- Kitchen fan airflow rates "on the same order of magnitude as dryer airflow"; CAZ depressurization (not individual fan operation) was the statistically significant predictor of spillage; backdrafting (persistent vent-flow reversal) observed in some homes.
- Source: https://docs.nrel.gov/docs/fy16osti/65318.pdf

### 5. CDC surveillance: unintentional non-fire CO poisoning
- ~430-500 deaths/year (2005-2018 surveillance: ~430 deaths, 14,365 hospitalizations, 100,000+ ED visits annually); 2022 provisional: 624 accidental deaths, an 85.7% increase over a decade (generator-driven, but the baseline appliance risk persists).
- Sources: https://ndc.services.cdc.gov/case-definitions/carbon-monoxide-poisoning-2019/ ; https://usafacts.org/articles/is-carbon-monoxide-still-a-problem-in-the-us/

### 6. UpCodes AI-native Plan Review (June 2026)
- Discipline-specific analyses including MEP, run against 11M+ locally adopted code sections across 6,000+ jurisdictions; issues linked to drawing page and governing section; AI Copilot for interpretation.
- Source: https://www.morningstar.com/news/pr-newswire/20260603da74841/upcodes-adds-ai-native-plan-review-to-its-aec-qaqc-platform

### 7. Interlocked makeup air damper pricing (retail, Sep 2026)
- Broan MD6TU (6", pressure-sensor interlock, meets M1503.4): ~$269. MD8TU: ~$284-290. MD10TU: ~$400. Installed cost with ductwork and wall cap typically $800-1,500.
- Sources: https://www.wickfordappliance.com/products/Broan/brn/md6tu.html ; https://www.charlotteappliance.com/Broan-MD8TU-8-Universal-Automatic-Make-Up-Air-Damper-w-Pressure-Sensor-Kit

## Skepticism / counterargument (full strength)

The strongest case against the alarm: millions of homes have run 600+ CFM hoods for decades without makeup air and without mass CO casualties, because (a) most older homes are leaky enough that the hood never reaches critical depressurization, (b) sealed-combustion and power-vented appliances are now the majority in new construction, making the hazard moot, and (c) worst-case CAZ test conditions (every exhaust fan on high, all interior doors positioned for maximum depressurization, clothes dryer running) almost never occur simultaneously in real life. NREL's own field study found the standard test produces false positives. The code threshold may be over-conservative for leaky existing homes, and mandating a $1,000+ damper retrofit on every kitchen remodel with a 450 CFM hood is a regressive cost on renovation. Also: the "AI plan review catches it" claim is vendor marketing until independently audited; no third party has measured UpCodes' MEP miss rate on residential sets.

## Actionable takeaways (for the article)

- Remodeling with a hood over 400 CFM? Budget the damper: ~$270 part, $800-1,500 installed. Put it in the mechanical notes or the plan reviewer (human or AI) will redline the permit.
- Buying a home with a pro-style range and an atmospherically vented water heater/furnace in the same air barrier? Ask for a worst-case CAZ depressurization test ($200-400 from a BPI analyst). It takes 45 minutes.
- Cheapest compliant path in new construction: sealed-combustion (direct-vent) appliances remove the hazard class entirely; then many jurisdictions' exception logic relaxes the makeup-air trigger.
- Do not "solve" this by cracking a window. The code requires automatic, interlocked makeup air for a reason: the window solution depends on the cook remembering physics at 7pm on a Tuesday.
