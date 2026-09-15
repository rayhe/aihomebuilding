# Research: Smart Panels vs Service Upgrades (article #865)

## Working headline
"Your EV Charger Doesn't Need a $9,000 Service Upgrade. Your Meter Proves It."

## Slug
ai-smart-panel-service-upgrade-load-calc-220-87-2026

## Journalist
Jake Kowalski (construction tech beat)

## Kill test
Does this help someone building or buying a home? YES. Any homeowner adding an EV charger, induction range, or heat pump to a 100A home is routinely told they need a $6,000-$40,000 utility service upgrade. This article gives them the cheaper ladder of options and the code section to quote back.

## Thesis
The standard NEC load calculation treats every appliance as if it runs at full draw simultaneously, so a normal electrifying home "fails" at ~180A on paper. Measured data from thousands of homes says real 15-minute peaks rarely break 80A and last about 12 minutes. The Code already has the escape hatch (NEC 220.87: use actual demand data; plus energy-management systems under 625.42 / UL 3141 that let the inspector count only the managed load). Utilities are now getting in on it.

## Primary sources
1. **PG&E press release (primary, Feb 2026):** PanelBoost program supplies the SPAN Edge device at the meter; service upgrades cost $6,000-$40,000 and take months; customer install cost for SPAN Edge $500-$2,000; launching summer 2026 to thousands of customers. https://www.morningstar.com/news/pr-newswire/20260205sf80929/pge-accelerating-home-electrification-for-customers-via-span-edge
2. **SPAN fleet data via Canary Media:** thousands of customer homes across all major climate zones; total household loads rarely combined above 80A; peak events averaged 12 minutes; many older single-family homes have 100A service, so pausing EV charging / water heating keeps them under. Rewiring America estimate: $250B total if every home needed a $5,000 upgrade. https://www.canarymedia.com/articles/grid-edge/smart-electric-panels-in-homes-could-prevent-overtaxing-the-grid
3. **NEC 220.87 text via Electrical Contractor Magazine (trade primary):** calculation of feeder/service load for existing installations may use actual maximum demand with (1) 1-year utility data or exception 30-day continuous recording on the highest-loaded phase (15-min interval max), (2) 125% of max demand + 100% of new load <= service rating, (3) proper overcurrent protection. Inserted in 1981 NEC, originated as Phoenix local amendment. https://www.ecmag.com/magazine/articles/article-detail/when-a-local-requirement-went-national-using-optional-calculations-for-determining-existing-loads and https://www.ecmag.com/magazine/articles/article-detail/codes-standards-saving-money-preserving-safety
4. **Schneider Electric (Aug 2026, via Electrek):** Schneider Charge 48A home EV charger with built-in dynamic load management; panel/service upgrades cost $2,000-$6,500+. https://electrek.co/2026/08/25/481029/
5. **OhmSnap smart-panel catalog (SPAN Drive):** $1,500-$2,200 add-on module, UL 3141 certified for managed EV circuit, dynamic circuit sharing between two 240V loads, enables 48A EV charging on 100/125A panel, no panel replacement. https://www.ohmsnap.com/smart-panels/span-drive
6. **SPAN panel pricing (installer sources):** SPAN panel hardware ~$3,500; installed $6,500-$10,000 (Denver $6,500-$9,500; CA $8,000-$9,500; MN $6,500-$10,000+); traditional 200A panel swap $2,500-$5,500; smart premium ~$3,000-$5,000. https://www.theelectriciansco.com/blog/span-smart-electrical-panel-denver/ and https://bhelectric.ltd/span-panel-api-eaton-smart-panel-mn/
7. **Canary Media grid-edge tools:** Eaton $75M investment in SPAN (2026); SimpleSwitch circuit-sharing devices promoted by SMUD; SMUD avg panel replacement $4,725, up to $9,000 for underground complications; Rewiring America: $2,000/home avg upgrade = ~$100B national impediment. https://www.canarymedia.com/articles/electrification/new-tools-and-tech-to-prep-your-electric-panel-for-an-all-electric-home and https://www.canarymedia.com/articles/climatetech-finance/span-smart-panel-75m-eaton-partnership
8. **Eco Electric (Puget Sound installer):** honest framing: 100A homes quoted full service upgrade when a load calc shows a smart panel could manage; reverse mistake is paying the SPAN premium with no electrification plans. https://www.ecoserviceswa.com/evaluate/electrical/span-smart-panel-vs-traditional-panel

## Original contribution: the load-calc math gap
Standard-method NEC 220.82 calculation on a typical 2,000 sq ft electrifying home:
- General loads: 3 VA/sq ft x 2,000 = 6,000 + 2x1,500 small appliance + 1,500 laundry = 10,500 VA; first 8,000 at 100% = 8,000; remainder 2,500 at 40% = 1,000; subtotal 9,000 VA
- Induction range (Table 220.55 single range demand): 8,000 VA
- Heat pump: 30A x 240V = 7,200 VA at 100%
- EVSE 48A continuous at 125%: 48 x 240 x 1.25 = 14,400 VA
- Dryer: 5,000 VA
- Total ~43,600 VA / 240V = ~182A. Verdict on paper: your 100A service is hopeless; upgrade to 200A.

Measured reality (SPAN fleet, thousands of homes): combined loads rarely exceed 80A; excursions past that average 12 minutes. A 100A service therefore has roughly 20A+ of headroom 99%+ of the time, and the moments it doesn't are exactly the moments a managed charger can shed.

NEC 220.87 bridge: existing max demand from 12 months of utility interval data (or 30-day recording), x 1.25, + new load at 100%, must not exceed service rating. Example: existing peak 60A x 1.25 = 75A + managed EVSE at its EMS-limited value (not its 48A nameplate, when a UL 3141 power control system caps it) = fits in 100A. This is the legal mechanism inspectors accept, but most residential electricians never run it; they run the standard method, it fails, they quote the upgrade.

## The options ladder (actionable)
1. $300-$500: circuit-sharing devices (SimpleSwitch, NeoCharge, Dryer Buddy) - EV charger + dryer/range share one 240V circuit, hardware prevents simultaneous draw. SMUD promotes them.
2. $1,500-$2,200: SPAN Drive add-on module - dynamic sharing between two 240V circuits, UL 3141, app control, no panel replacement.
3. Built-in DLM EVSE (Schneider Charge): charger throttles itself against whole-home load.
4. $6,500-$10,000 installed: full SPAN smart panel (Eaton partnership 2026 driving costs down); also SPAN Edge meter device via PG&E PanelBoost, $500-$2,000 customer install.
5. The actual service upgrade: $6,000-$40,000 + months of utility coordination. Last resort.

## Skepticism / counterargument
- Smart panels cost ~2x dumb panels; monitoring-only savings pay back in 11+ years (CA installer math: $250/mo bill, 15% cut = $450/yr against $5,000 premium).
- Schneider Electric discontinued its own Pulse smart panel - this category has exits; buy from vendors with balance sheets.
- Wood Mackenzie's Ben Hertz-Shargel: maybe all you need is a smart meter + smart charger; dedicated panel hardware may be overkill.
- AHJ acceptance varies: some inspectors won't accept a 30-day recording or an EMS-managed calc; verify with your local authority before banking on it.
- PG&E PanelBoost is utility-specific; no national equivalent.
- SPAN requires authorized installer commissioning; fewer electricians service it; software-dependent features need the app/network.

## Limitations
- Cost figures are installer-quoted ranges (Denver, MN, Puget Sound, CA), not a national survey; utility upgrade costs vary wildly by overhead vs underground service.
- SPAN's 80A/12-minute finding is company-reported fleet data, not peer-reviewed; independent verification is thin.
- NEC 220.87's 30-day exception explicitly excludes feeders/services with solar PV or peak load shaving - solar homes can't use the shortcut recording method (need the 1-year utility data path instead).
- I did not verify AHJ acceptance rates for EMS-managed calculations.

## Numbers to use in article
- Service upgrade: $6,000-$40,000 (PG&E), months of coordination
- SPAN Edge install: $500-$2,000 (customer), device supplied by PG&E
- SPAN panel: ~$3,500 hardware, $6,500-$10,000 installed
- SPAN Drive: $1,500-$2,200
- Traditional 200A panel: $2,500-$5,500 (MN), $8,000-$16,000 (Puget Sound incl. utility coordination)
- Schneider upgrades: $2,000-$6,500
- Peak events: rarely over 80A, avg 12 min (SPAN fleet)
- Standard-method calc on 2,000 sq ft home: ~182A
- NEC 220.87: 1-yr data or 30-day recording, 125% rule
- Rewiring America: $250B if every home needed $5K upgrade; $100B impediment at $2,000/home
- SMUD: $4,725 avg panel replacement, up to $9,000 underground
- Eaton $75M into SPAN (2026)
