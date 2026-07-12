# AI Building Permit Plan Review Automation — Research Notes

## Topic
AI-powered building permit plan review tools are spreading across US cities, automating the most error-prone and time-consuming stage of residential construction: the permit approval process. Multiple cities have deployed AI to check plans for code compliance before human reviewers see them. But the first company to try it (AutoReview.AI) is already dead.

## Key Data Points

### The Problem: Permit Delays
- **Denver:** Only 37% of applications approved on first try (Denver7)
- **Washington State (SB 5290 report, Oct 2025):** Construction permits took 81% longer than allowed by law. Average delay: 143 days (~5 months). Average unexpected project expenses from delays: $157,300. King County: 1,557-day delay (~52 months), $243,000 carrying costs.
- **Redwood City, CA:** New building permits: 4-8 weeks. Residential additions: 3-4 weeks.
- **Broomfield, CO:** New house permits: 7-8 weeks.
- **BIAW (WA state):** Nearly half of all permits processed >90 days late. City of Kirkland gave itself 730 days to approve a construction permit.
- **Denver audit:** Residential plan review averaged 12-15 weeks in fall 2022 (reduced to 2-4 weeks by 2024). Online permit applications went from 2,758 (2018) to 6,410 (2021). One applicant said delays cost $24,000+; they completed work without a permit.

### The AI Tools

**CivCheck (by Clariti):**
- Denver: 5-year, $4.6M contract. Launched March 2026. Flags missing documents, incomplete fields, application errors before plans reach reviewers. Goal: push first-try approval from 37% to 80%.
- Honolulu: Launched December 2025 for residential permits, commercial to follow mid-2026.
- Human reviewers still evaluate final submitted plans.

**Archistar (eCheck):**
- LA County + LA City: Launched July 15, 2025 for wildfire rebuild. Unveiled by Governor Newsom. Partnership with Steadfast LA, LA Rises, Amazon, Autodesk. Free for homeowners.
- Uses generative AI, computer vision, ML to pre-check building plans against local codes.
- City officials said they can compare AI vs non-AI submissions and see clear time savings + fewer rounds of back-and-forth.
- Austin, TX: Launched for zoning review of residential developments.
- Partnership with International Code Council (ICC).

**Blitz AI:**
- Naples, FL: First in Florida. Partnership with CityView. Trained on Florida Building Code + local ordinances. Analyzes plans in minutes, flags noncompliance, generates detailed review reports with red lines on drawings.
- Tampa-based company (Blitz Permits Inc.).

**Verdant:**
- Y Combinator startup, just launched (~July 2026). Founders Aidan Ng and Jason Yi.
- Interviewed 200+ local government staff. "Permitting is where the pain is most acute, and software has done the least to help."
- Helps applicants file complete, compliant applications upfront, then helps staff review them. AI reads documents, plans, diagrams, flags issues, drafts reports.

**Govstream.ai:**
- Bellevue, WA: Pilot partnership announced.

### The Cautionary Tale: AutoReview.AI
- Altamonte Springs, FL: Became one of first municipalities in Florida to pilot automated site plan + landscape plan review (2023).
- City Manager Frank Martz: "What we found was a highly accelerated review that became possible because of the software. What used to take us a week took us three to four minutes."
- "The pilot program ran out, and the company is no longer in operation." (HousingWire)
- Also used by Pasco County, Gainesville (University of Florida spinoff).

### The Policy Context
- Seattle: Mayor Harrell signed executive order (June 2025) directing all development applications through AI pilot. Full rollout expected 2026.
- Denver: Cut 59 budgeted positions in Community Planning and Development for 2026 (from 310 to 251).
- Denver: 180-day shot clock for permit decisions; $10,000 refund if missed.
- Edmonton, Canada: AI "auto-review" → same-day residential permits for certain homes (vs. typical 20-day wait).
- Federal: CEQ Permitting Technology Action Plan to leverage AI for environmental review.

### Key Tension
- AI is pre-screening, not replacing human judgment. All systems position as "flagging errors before submission" or "accelerating first review."
- But Denver simultaneously cut 59 positions. The technology enables headcount reduction whether or not that's the stated purpose.
- The graveyard: AutoReview.AI, the first to market in Florida, is already dead. Pasco County still uses it? No — the company is gone.

## Journalist
Catherine "Code" Chen — policy & regulation beat. This is about how cities are using AI to change the bureaucratic process of building permits.

## Kill Test
Does this help someone building or buying a home? YES — if you're pulling a permit in any of these cities, this directly affects how fast your project starts. Understanding what the AI checks vs. what humans review helps you submit better applications.

## Sources
1. PYMNTS (May 2026) — Denver CivCheck, city adoption roundup
2. HousingWire — AutoReview.AI history, multi-city overview
3. LA County press release — Archistar eCheck launch
4. Steadfast LA — Archistar in LA City/County
5. Archistar blog — Digital Government Summit discussion
6. HousingWire — Blitz AI + CityView in Naples
7. Y Combinator/LinkedIn — Verdant launch
8. BIAW/Washington state SB 5290 report — permit delay data
9. Bloomberg What Works Cities — Edmonton data
10. Denver BusinessDen/audit — Denver permit delay history
