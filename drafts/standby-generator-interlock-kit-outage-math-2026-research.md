# Research: The $14,000 Standby Generator vs. the $900 Interlock Kit

**Slug:** standby-generator-interlock-kit-outage-math-2026
**Journalist:** Frank DeLuca (Project Management & Operations)
**Article #:** 979
**Date:** 2026-09-27

## Angle

After every major outage, the standby-generator quotes start flowing: $12,000 to $18,000 for a 22kW Generac with an automatic transfer switch. The pitch is peace of mind. The math the salesman never shows you is the denominator: the average American home loses power about 2 hours a year once you exclude hurricanes, and about 8 to 11 hours a year including them (EIA). A $14,000 machine plus a decade of maintenance, divided by 80 hours of actual darkness, works out to more than $200 per hour of backup electricity. Meanwhile NEC Article 702 already blesses a cheaper legal path: a UL-listed interlock kit ($50-150) plus a portable dual-fuel generator (~$1,249 MSRP) for a total under $2,200 installed, working out to roughly $30 per outage-hour. Frank's voice: methodical, process-obsessed, quietly devastating about money. The original contribution is the **outage-hour TCO audit**: full 10-year cost math on both paths, fuel-consumption figures from the spec sheets, and a decision framework for when the expensive machine is actually the right call.

## Kill test

Does this help someone building or buying a home? Yes. Post-outage panic is the highest-margin sales environment in residential contracting. A homeowner holding a $14,000 quote needs the per-hour math and the code-legal alternative before signing, not after the concrete pad is poured.

## Primary sources

### 1. Generac Guardian 22kW spec sheets (Zoro / Grainger / FactoryPure product data)
- https://www.zoro.com/generac-automatic-standby-generator-guardian-series-22kw-lp19kw-ng-air-cooled-single-phase-7042/i/G5094857/
- https://www.grainger.com/product/GENERAC-Automatic-Standby-Generator-38NF74
- https://factorypure.com/products/generac-7325-22kw-standby-generator-propane-natural-gas-w-200a-automatic-transfer-switch-new
- Guardian 7042: 22kW LP / 19.5kW NG, air-cooled, 5-year limited warranty, 67 dBA, 7-day exercise cycle. Fuel: LP 2.53 gal/hr at half load, 3.71 gal/hr at full load; NG 184 cfh at half load, 306 cfh at full load. Battery not included.

### 2. Installed-cost reporting (findyourinsights.com, croxy.io, 2025-2026)
- http://findyourinsights.com/article/generac-22kw-generator-installation-expenses-explained
- Generac 7042 MSRP $6,119 (no transfer switch); 7043 package with 200A whole-house switch MSRP $6,979; Home Depot street price ~$6,839. Typical total installed: **$11,800-$18,500** (automatic transfer switch, gas run, pad, permits, startup). Simple jobs ~$10,500; complex sites $22,000+.

### 3. EIA reliability data (via Electrical Contractor Magazine, Dec 2025 EIA report)
- https://www.ecmag.com/magazine/articles/article-detail/customers-saw-more-electricity-outages-in-2024-than-in-years-before
- 2024: U.S. customers averaged **11 hours** of interruptions, nearly 2x the prior-decade average; **80%** of those hours came from hurricanes Beryl, Helene, and Milton. Excluding major events, the average has held at **~2 hours/year since 2013**. 2022: 5.6 hours. SAIDI = total hours the average customer sits dark per year; SAIFI = number of interruptions.

### 4. NEC Article 702 transfer-equipment analysis (ChargeRight, 2026) + Mike Holt forums + UL marking guide
- http://evchargeright.com/blog/ev-charger-home-generator-nec-702-backup-power
- https://forums.mikeholt.com/threads/oem-generator-interlock-versus-after-market.2580566/
- NEC 702.5/702.6 requires transfer equipment that prevents inadvertent interconnection of utility and generator. Two compliant forms: automatic transfer switch ($500-$1,500 plus install) and **manual interlock kit ($50-$150 plus a few hundred for breaker and inlet)**. The 2026 NEC first draft explicitly adds interlock kits to 702.5. UL panelboard marking guide: the kit must be the **panel manufacturer's listed kit** ("Suitable for use in accordance with Article 702... when provided with interlock kit Cat No. ____"). NEC 702.4(B)(1): with manual transfer equipment, the user is permitted to select which loads run. Backfeeding through a dryer cord with no transfer equipment is the failure mode the rule exists to prevent (lineman safety).

### 5. Westinghouse WGen9500DF dual-fuel portable (manufacturer spec page)
- https://westinghouse.com/products/wgen9500df-generator-dual-fuel?bvstate=pg:7/ct:r
- MSRP **$1,249**. 9,500 running watts (gas) / 8,500 (propane); 12,500/11,200 peak. Up to 12 hours on 6.6-gal gas tank at 25% load; up to 7 hours on a 20-lb propane tank. Transfer-switch ready (L14-30R + 14-50R), remote/electric start, 3-year warranty.

### 6. California AB 1346 / CARB small off-road engine rule (Capitol Weekly, Asphalt & Rubber)
- https://capitolweekly.net/new-law-curbing-small-gas-motors-affects-portable-generators-too/
- https://www.asphaltandrubber.com/news/california-bans-gas-powered-generator-sales-2028/
- AB 1346 (signed Oct 2021) directed CARB to zero-emission standards for small off-road engines. Lawn equipment sales banned from 2024; **portable gas generators phased out of California sale by 2028**. Use and possession remain legal; buying out of state and bringing it back remains legal. **Stationary standby generators are explicitly exempt** ("AB 1346 does not affect stationary generators").

### 7. Standby maintenance economics (MightyGenerators 10-yr TCO; dealer service pages)
- https://mightygenerators.com/blogs/off-grid-living/generac-vs-briggs-stratton-home-standby-generator
- Annual professional service $200-$500 (oil, filter, plugs, battery test, firmware, loaded test); starter battery every 3-4 years ~$50-$100. 10-year total ownership for a 22kW air-cooled unit: **$11,200-$18,700+** including out-of-warranty repairs (years 6-10: control boards, starters, regulators). Air-cooled lifespan 10-15 years. Warranty requires proof of professional installation and maintenance.

## The gap (original contribution)

Nobody in the sales conversation divides by the hours. The generator industry sells the unit; the utility publishes the denominator in a PDF nobody reads. Put them together and the picture changes.

**The outage-hour audit** (10-year TCO, stated assumptions: 8 outage-hours/year, propane at $3.50/gal, $14,000 installed midpoint):

Standby path:
- Installed: $14,000
- Maintenance: $300/yr service x 10 = $3,000; 2 batteries = $150; one out-of-warranty repair reserve = $800. Subtotal ~$3,950
- Outage fuel: 8 hrs/yr x 2.53 gph x $3.50 = $71/yr -> $710
- Exercise fuel: ~10 hrs/yr x ~1.5 gph x $3.50 = $53/yr -> $530
- 10-year TCO: ~$19,200. Divided by 80 outage-hours = **~$240 per hour of backup power**

Interlock path:
- Kit $100 + 50A breaker $40 + inlet $90 + electrician $500 + permit $150 = $880; Westinghouse WGen9500DF $1,249. Installed total ~$2,130
- Maintenance: oil/filter $30/yr -> $300; fuel: 8 hrs/yr at ~0.55 gph x $3.50 = $15/yr -> $150
- 10-year TCO: ~$2,580. Divided by 80 outage-hours = **~$32 per hour**

The standby machine costs roughly **7x per hour of actual darkness**. A 250-gallon propane tank (200 usable gallons at 80% fill) feeds the Generac ~79 hours at half load; the Westinghouse runs ~7 hours on a $20 grill tank you already own.

**The decision framework** (when the expensive machine wins anyway): medical equipment that cannot wait for you to get home; a well pump (no power = no water); a sump pump in a flood zone during the same storm that kills the grid; a home business with SLA penalties; PSPS country or hurricane coast where multi-day outages are a season, not an event; California, where the $1,249 portable gets harder to buy new after 2028 while the $14,000 stationary unit stays legal. If none of those apply and your utility's SAIDI is single digits, you are buying a $19,000 insurance policy against an $80 inconvenience.

## Counterargument (steelman)

The automatic transfer switch earns its money in the scenario the interlock cannot cover: you are not home. The outage that matters most is the one that hits at 2 p.m. on a workday while the sump pump sits idle, or the January freeze while you are visiting family and the pipes are deciding whether to burst. A portable also demands a able-bodied operator willing to drag 200 pounds through the rain, manage fuel, and remember the startup sequence at midnight; portables get stolen from driveways during extended outages; and they are louder and dirtier per kWh than the standby. The Generac exercises itself weekly and texts you when it fails. That automation is genuinely worth money. The question is whether it is worth $16,000 of money, which is what the audit answers.

## Limitations

- 8 outage-hours/year is a national blended figure; check your utility's published SAIDI (often in the annual reliability report to the PUC) before using this math on your house. PG&E PSPS customers and Gulf Coast hurricane zones live in a different denominator.
- Install costs swing $10,500-$22,000+ with gas-run length, trenching, and panel work; the $14,000 midpoint is representative, not a quote.
- Propane at $3.50/gal is a national residential assumption; New England winter propane and Texas summer propane are different fuels, economically speaking.
- The interlock kit must be the panel manufacturer's UL-listed kit for your exact panel; universal kits exist but the UL marking guide and many AHJs require the OEM part. Pull a permit; some inspectors want the backed-up loads on a subpanel.
- A 9.5kW portable will not start a 5-ton central AC (locked-rotor amps); size the portable to fridge, freezer, sump, well, lights, and small loads, not the whole house.
- California's 2028 portable-generator sales phaseout is current law as of CARB's 2021 vote; verify before planning a 2029 purchase around it.
