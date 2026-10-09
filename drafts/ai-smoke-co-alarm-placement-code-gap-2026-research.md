# Research: AI + Smoke/CO Alarm Placement Code Gap — Article #1047

**Journalist:** Frank "The Foreman" DeLuca (Project Management & Operations)
**Slug:** ai-smoke-co-alarm-placement-code-gap-2026
**Date:** October 8, 2026

## Kill test
Does this help someone building or buying a home? Yes. Alarm placement is life-safety code (IRC R314/R315) that fails in the field through ordinary trade-sequencing mistakes: painters paint over alarms, remodelers skip interconnection, homeowners disable units after cooking nuisance trips, and nobody tracks the 10-year replacement clock. A buyer or builder who runs the placement audit in this article fixes it for roughly $30 per alarm.

## Primary sources

1. **NFPA, "Smoke Alarms in U.S. Home Fires"** (reported via firehouse.com press release and collingdalefire.org FAQ citing NFPA): almost three out of five home fire deaths occurred in homes with no smoke alarms or no working smoke alarms; the risk of dying in a reported home fire is 54% lower in homes with working smoke alarms. Tips: alarms in every sleeping room, outside each sleeping area, every level; interconnected; 10 ft minimum from stoves; replace at 10 years.
   - https://www.firehouse.com/community-risk/press-release/21069783/nfpa-national-fire-protection-association-new-nfpa-report-reinforces-lifesaving-benefits-of-smoke-alarms

2. **2021 IRC Section R314 (Smoke Alarms) and R315 (Carbon Monoxide Alarms)** (ICC text via WA State Building Code Council insert pages): alarms required in each sleeping room, outside each separate sleeping area, and on each additional story including basements and habitable attics. Interconnection required so actuation of one activates all (wireless listed alarms exempt from physical interconnection). Primary power from building wiring with battery backup. Combination smoke/CO alarms permitted.
   - https://sbcc.wa.gov/sites/default/files/2023-05/2021%20IRC%20Insert%20Pages%201st%20Printing_0.pdf

3. **CPSC, Non-Fire Carbon Monoxide Deaths 2022 Annual Estimates (May 2026)**: average 238 non-fire CO deaths/year associated with consumer products (2020-2022); portable generators alone average 73/year (~31%); gasoline-fueled products 84/year. CPSC: unintentional CO poisoning kills 400+ Americans/year; CDC: 20,000+ ER visits, 4,000+ hospitalizations. CPSC's Burt Act grant program ($3M+ to 22 governments) funds CO alarm installation in low-income/elderly homes.
   - https://www.cpsc.gov/s3fs-public/Non-Fire-Carbon-Monoxide-Deaths-Associated-with-the-Use-of-Consumer-Products-2022-Annual-Estimates.pdf
   - https://www.cpsc.gov/Newsroom/News-Releases/2024/CPSC-Awards-More-than-3-Million-in-Grants-to-22-State-and-Local-Governments-to-Prevent-Carbon-Monoxide-Poisoning

4. **UL Standards & Engagement, UL 217 8th edition**: cooking-nuisance test added (alarm mounted 10 ft from electric range, frozen hamburger patties on broiler; must not alarm before defined obscuration level). Effective June 30, 2024. Escape time in home fires fell from ~17 minutes (1978) to ~3 minutes (2018) as synthetic furnishings took over. Nuisance alarms are a leading reason for disconnected alarms (NFPA). New 8th-edition alarms carry enhanced UL label "helps reduce cooking nuisance alarms."
   - https://ulse.org/news/standards-and-engagement-standards-matter-helping-reduce-cooking-nuisance-alarms-ul-217/

5. **UpCodes AI-native Plan Review (June 2026, PR Newswire)**: discipline-specific AI plan analyses including life safety, against 11M+ code sections across 6,000+ jurisdictions; flags issues by severity linked to drawing page and code section. This is the AI angle: placement compliance can now be checked on the drawings before the electrician ever pulls wire.
   - https://www.morningstar.com/news/pr-newswire/20260603da74841/upcodes-adds-ai-native-plan-review-to-its-aec-qaqc-platform

6. **Maryland/Montgomery County smoke alarm policy** (supplemental): 10-year sealed tamper-resistant alarms required in existing areas on alteration; replacement alarms must not downgrade hardwired to battery-only; one ionization + one photoelectric recommended per home.
   - https://www.montgomerycountymd.gov/DPS/Resources/Files/COMBUILD/ResidentialSmokeAlarmsPolicy.pdf

## Key numbers for the article
- ~3 in 5 home fire deaths: no alarm or no working alarm (NFPA)
- 54% lower death risk with working alarms (NFPA)
- 238 avg non-fire CO deaths/yr (CPSC 2020-2022); 400+ total unintentional CO deaths/yr; 20,000+ ER visits (CDC)
- ~73 generator CO deaths/yr (CPSC)
- 3-minute modern escape time vs 17 minutes in 1978 (UL)
- 10-year replacement rule; alarm manufactured date on back of unit
- ~$25-40 per 10-year sealed alarm; ~$60-90 per smart interconnected combo unit
- R314.3: each sleeping room + outside each sleeping area + each story incl. basement
- R315: CO alarms outside sleeping areas on levels with fuel-burning appliances or attached garage

## The process-failure angle (Frank's territory)
- Sequencing: electrician roughs in alarm boxes; drywaller covers; painter paints the alarm itself (painted alarms are a classic failed inspection item); trim-out happens but nobody tests interconnection.
- Remodel exception abuse: R314.4 exception lets remodelers skip interconnection when finishes aren't opened, so additions get a lone battery alarm that never joins the chorus.
- Homeowner behavior: cooking nuisance trips lead to battery removal ("half of no-working-alarm fires had missing/disconnected batteries" per NFPA reporting); UL 217 8th edition directly targets this failure mode.
- The 10-year clock: nobody logs the manufacture date; test button only proves the horn works, not the sensor.

## AI/tech angle
- UpCodes AI Plan Review (life-safety discipline) flags missing alarm locations on drawings pre-permit.
- Smart interconnected alarms (voice alerts identifying danger type/location, phone notifications when away).
- 8th-edition multi-criteria sensors discriminate cooking aerosols from fire smoke.

## Skepticism / honest gaps
- AI plan review checks drawings, not field installation; the painted-over alarm happens after the drawing is approved.
- Smart alarms cost 2-3x; the population most at risk (low-income, elderly) is least likely to have them — hence the CPSC grant program.
- No field data found on what share of existing homes actually meet R314 placement; NFPA's "no working alarm" stats are the proxy.
- Interconnection exception in existing areas means much of the housing stock stays non-interconnected indefinitely.

## Headline candidates
- "Your Smoke Alarms Are Painted Shut and Nine Years Old. The Fix Costs $30."
- "Three of Five Fire Deaths Happen in Homes With Dead or Missing Alarms. Yours Are Due."
- "The Painter Painted Over Your Smoke Alarm. The Code Knew Where It Went."
