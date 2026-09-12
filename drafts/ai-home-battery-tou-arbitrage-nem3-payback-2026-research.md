# Research: AI home battery dispatch vs. the TOU arbitrage (Priya Greenwood)

## Angle (1-2 sentences)
California's NEM 3.0 pays solar owners ~8 cents/kWh for noon exports while PG&E charges ~50+ cents/kWh for 4-9pm peak imports. A home battery arbitrages that spread; vendors sell "AI-optimized dispatch" as the magic, but the article's payback model shows the rate spread does ~90% of the work and the algorithm is the garnish.

## Self-critique gate
- **Propose:** Battery + AI dispatch payback math under NEM 3.0, with the skeptical finding that a dumb TOU timer captures most of the value.
- **Challenge:** Is this the best use? Alternatives considered: A2L refrigerant transition (AI angle thin, more of a training story), heat-pump water heater sizing (thin sources), Passive House (covered adjacent). Battery dispatch has 6+ strong primary sources, real utility-bill math (Priya's signature), and a genuine debunking hook. No queue slug covers batteries/NEM-3.0/VPP as the main angle (checked: battery, nem, tou, vpp, dispatch absent from all 94 queue slugs).
- **Verdict:** Proceed.

## Kill test
Does this help someone building or buying a home? Yes: anyone on a California IOU (or any TOU rate nationally) deciding whether to spec a $12-17k battery in 2026, now that the 30% federal credit is dead. Gives a payback model, a buy/skip rule, and deflates the "AI optimization" upsell.

## Primary sources (6)
1. **CPUC NEM 3.0 / Net Billing Tariff (D.22-12-056)** — export compensation cut ~75%, from ~$0.30/kWh to ~$0.08/kWh average, based on the Avoided Cost Calculator; CPUC assumed $3.30/W installed and ~9-year payback for solar+storage. https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/nem-revisit/frequently-asked-questions and https://pv-magazine-usa.com/2022/11/10/california-proposed-decision-to-cut-payments-rooftop-solar-net-metering/
2. **PG&E / 3CE residential rate sheet, effective Feb 15, 2026** — E-TOU-C peak window 4-9pm every day (summer Jun-Sep); E-TOU-B summer peak 4-9pm weekdays. CCA generation portion shown; bundled PG&E totals run far higher. https://3cenergy.org/wp-content/uploads/2026/02/PGE-Residential-Website-Rate-Sheet-v29-2026.02.15.pdf
3. **Cali Energy "Is Solar Still Worth It in California in 2026?" (updated Sep 9, 2026)** — CA avg residential rate 34.74 cents/kWh (EIA, Jun 2026) vs 18.34 cents US average; 30% federal Residential Clean Energy Credit EXPIRED for homeowner-owned systems placed in service after Dec 31, 2025 (confirmed by IRS); NEM 3.0 makes self-consumption and batteries central to the math. https://cali-energy.com/blog/is-solar-worth-it-california-2026
4. **EnergySage Tesla Powerwall 3 review (2026)** — 13.5 kWh usable, 11.5 kW continuous, LFP, 10-year warranty at 70% retention; average $998/kWh, typical installed cost $13,473 before incentives. https://www.energysage.com/energy-storage/best-home-batteries/tesla-powerwall-battery-complete-review/
5. **Tesla/PG&E VPP + ELRP (2026 status via Ecogen America, updated Sep 2026)** — ELRP reopened to new enrollments March 2026; pays $2/kWh dispatched across 7+ events May 1-Oct 31; PG&E Powerwalls historically earned $200-$600/summer; SCE/SDG&E $100-$450/yr. https://ecogenamerica.com/solar-incentives/california/ and https://www.greencarcongress.com/2022/07/20220708-vpp.html
6. **NREL residential battery dispatch research** — "Residential Battery Modeling for Control-Oriented Techno-Economic Studies" (NREL preprint): optimized 15-minute dispatch over 24-hr forecast horizon balancing TOU cost vs battery aging. https://www.nrel.gov/docs/fy20osti/76065.pdf ; PNNL 10-home simulation: smart-controller batteries doing TOU load shifting saved 13-26% on daily cost vs no battery (note: vs NO battery, not vs dumb timer — do not overclaim). https://techxplore.com/pdf532001580.pdf
7. **NREL residential PV+storage cost benchmark (via pv magazine, 2017)** — detailed installed-cost breakdown: ~$17,200 to add a small battery on retrofit; 5.6 kW PV + 5 kW/20 kWh at $45,200-$47,200; soft costs ~50% of small-battery installs. Dated but the most granular public cost decomposition; use for the soft-cost point only. https://pv-magazine-usa.com/2017/03/30/nrel-batteries-double-the-cost-of-residential-solar-installations/

## Key numbers for the model
- NEM 3.0 export value: ~$0.08/kWh average (CPUC avoided-cost; varies by hour, higher late afternoon/summer).
- CA avg residential rate: $0.3474/kWh (EIA Jun 2026). PG&E E-TOU-C bundled summer peak (4-9pm) runs roughly $0.50-$0.60/kWh in 2026 (label as approximate; the 3CE sheet shows only the CCA generation slice).
- Powerwall 3: $13,473 installed (EnergySage avg), 13.5 kWh usable, ~90% round-trip efficiency implied by 97% inverter claims — use 90% system round-trip as labeled assumption.
- 30% federal credit: GONE for homeowner systems after 12/31/2025. (Leased systems can still monetize the commercial ITC — disclose as the lease loophole, briefly.)
- VPP: $2/kWh/event, ~$200-$600/summer realistic for one Powerwall on PG&E ELRP.
- SGIP: still exists in limited form; do not promise a number — say "check current SGIP step" (honest limitation).

## Original contribution: the payback model (article's own calculation, assumptions labeled)
Scenario: PG&E E-TOU-C home, existing solar, adds one Powerwall 3 at $13,473.
- Battery cycles ~10 kWh/day through the 4-9pm window (13.5 kWh usable minus backup reserve and efficiency losses — labeled assumption).
- Each stored kWh avoids a peak import (~$0.55 assumed) instead of being exported at ~$0.08. Net value per cycled kWh ≈ $0.47.
- Annual arbitrage value: 10 kWh x 365 x $0.47 ≈ $1,716/yr. Simple payback: $13,473 / $1,716 ≈ 7.9 years.
- Add VPP at midpoint $400/summer: payback ≈ 6.4 years. Add nothing else (no federal credit in 2026).
- The "AI" slice: a fixed 4-9pm discharge timer captures the TOU spread by construction. Smart dispatch (Tesla Time-Based Control, Enphase AI Optimization) adds value only at the margins — storm pre-charge, VPP event timing, avoiding an empty battery on cloudy days. No vendor publishes the marginal uplift; the honest statement is that it is unquantified and almost certainly small relative to the $1,700/yr spread. THAT is the debunk: the $13,500 battery earns its keep; the "AI-optimized" badge does not need to.
- Counter-model: same home WITHOUT solar (battery charges from grid off-peak at ~$0.35, discharges at peak ~$0.55): 10 kWh x 365 x $0.20 spread x 90% efficiency ≈ $657/yr → 20-year payback. Battery-without-solar is a backup purchase, not an investment. Say so plainly.

## Skepticism / strongest counterargument
- The 25D/30% credit death (end of 2025) added ~4 years to payback overnight; every 2024-vintage "5-year payback" claim is now stale. Say this explicitly.
- Degradation: 70% warranty floor at year 10; real-world ~1-2%/yr loss means the $1,716/yr decays — model ignores this (limitation), which flatters payback by ~1 year.
- A $13,473 battery that pays back in 8 years is a worse return than the solar panels it pairs with; if capital is constrained, more panels beat a battery on NEM 3.0 only if you can self-consume — otherwise the battery wins. Nuance, not slogan.
- VPP income is real but lumpy and program-dependent (ELRP is a pilot-era program; enrollment windows open/close).
- Utilities are the counterparty: rate structures can change (see NEM 2.0 → 3.0). The arbitrage exists at the pleasure of the CPUC.

## Limitations (for the article's honest accounting)
- PG&E bundled peak rate used ($0.55) is approximate; exact E-TOU-C totals move with advice-letter filings. The model's conclusion is robust to ±$0.10 (payback 6.5-10 yrs) — show that sensitivity.
- No vendor publishes smart-vs-dumb dispatch uplift; the "garnish" claim is inference from rate-structure logic, not a measured A/B.
- Assumes 10 kWh/day cycling, 365 days — cloudy stretches and backup-reserve settings reduce this.
- Ignores SGIP (could shorten payback if the homeowner qualifies for the equity/resiliency budget).
- California-specific; TOU spreads in most other states are narrower and the math usually fails there.

## Buy/skip rule (actionable takeaway)
- PG&E/SCE/SDG&E + rooftop solar + E-TOU-C/D rate: battery pencils at ~6-8 yr payback with VPP; buy if you will own the home 10+ years.
- No solar: skip the battery as an investment (20-yr payback); buy only for backup, and price it against a $500 portable power station + a transfer switch first.
- Outside California TOU territory: run your own spread math; if peak minus off-peak is under $0.20/kWh, the battery does not pay.
