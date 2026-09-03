# Research: PG&E SPAN Edge / PanelBoost — the $500 meter device vs the $40,000 service upgrade

**Slug:** `pge-span-edge-meter-electrification-2026`
**Article #:** 764
**Journalist:** Priya Greenwood (sustainability / electrification)
**Date:** September 3, 2026
**Kill test:** Does this help someone building or buying a home? YES. Anyone adding a heat pump, EV charger, or induction range to a 100-amp home hits the panel bottleneck. This is the decision guide: full upgrade vs smart panel vs meter device, with real dollars and timelines.

## Core news hook

PG&E's **PanelBoost** program (announced Feb 5, 2026) supplies the **SPAN Edge** at-the-meter device to customers; homeowner pays only electrician install ($500–$2,000). Program planned to launch summer 2026 and scale to thousands of customers. This run is happening now (Sep 2026).

## Primary sources

1. **PG&E press release via Morningstar (Feb 5, 2026)** — https://www.morningstar.com/news/pr-newswire/20260205sf80929/pge-accelerating-home-electrification-for-customers-via-span-edge
   - SPAN Edge installs at the electric meter; utility gets flexible load-shaping tool, customer gets lower-cost electrification path
   - Avoided service upgrades: **$6,000–$40,000**, taking months
   - PanelBoost install cost to customer: **$500–$2,000** (electrician; PG&E supplies the device)
   - **E3 analysis**: >$14,000 net benefits per home across utility + customer value streams; up to $1.16M per 500-home feeder in deferred last-mile infrastructure
   - Launch: website summer 2026, scale to thousands of customers

2. **Canary Media — panel upgrade costs** (electrification vertical) — https://www.canarymedia.com/articles/electrification/new-tools-and-tech-to-prep-your-electric-panel-for-an-all-electric-home
   - **Pecan Street: ~48M US single-family homes have 100-amp service** that might need upgrading for full electrification
   - Pecan Street: panel upgrades $1,000–$5,000, several weeks; at $2,000 avg x 48M = **"$100 billion impediment"** to residential electrification
   - NorCal contractor (Cinnamon): 100→200A overhead service **$5,000–$10,000, 3–6 months**; underground **$25,000+, ~1 year**
   - Nate Adams (Midwest): $3,000–$6,000 for 100→200A
   - Rewiring America proposed federal legislation for panel upgrade incentives

3. **Canary Media — smart panels grid edge** — https://www.canarymedia.com/articles/grid-edge/smart-electric-panels-in-homes-could-prevent-overtaxing-the-grid
   - SPAN panel dynamically shifts EV charging / water heating / AC setpoint to stay under an 80-amp ceiling; "without any inconvenience to customers, just by shifting one major appliance" (Arch Rao, SPAN CEO)
   - 200-amp service supported by SPAN panel; the management keeps peaks under the service limit

4. **Electrek (Oct 2022)** — https://electrek.co/2022/10/11/span-new-level-2-ev-charger/
   - SPAN Panel hardware **$4,500**; SPAN Drive EV charger $750 (accessory, requires panel)
   - SPAN Drive delivers up to 48A (11.5 kW), dynamically modulates down when household load nears service capacity; typical fixed installs limited to 24–40A
   - Avoids utility service upgrade "which may take months to schedule and cost thousands of dollars"

5. **Environment+Energy Leader (Aug 28, 2026 — 6 days old)** — https://www.environmentenergyleader.com/stories/pge-accelerating-home-electrification-for-customers-via-span-edge,114815
   - Confirms PanelBoost details; E3 $14k/home figure; summer 2026 launch

## Original contribution: the three-option decision math

Scenario: 100-amp home adding a cold-climate heat pump (~30–50A) + Level 2 EV charger (40–48A). Nameplate math says you need 200A service. What are the actual options?

| Option | Upfront cost (NorCal) | Timeline | What you get |
|---|---|---|---|
| A. Full service upgrade (overhead) | $5,000–$10,000 | 3–6 months | Permanent 200A capacity; utility coordination, permit, trenching risk |
| A2. Full service upgrade (underground svc) | $25,000–$40,000 | ~1 year | Same, but you dug up the street |
| B. SPAN smart panel | ~$4,500 + ~$1,500 install ≈ $6,000 | days–weeks | Circuit-level monitoring + automated load shifting; still 100A service but managed |
| C. SPAN Edge via PG&E PanelBoost | $500–$2,000 (device supplied) | days | At-the-meter load management; cheapest path; PG&E territory only |

Key calculation: Option C is **3x–80x cheaper** than the service upgrade it replaces ($500 vs $6,000 low end; $500 vs $40,000 high end). Even against the cheapest contractor upgrade path ($3,000–$5,000 Midwest), Edge is 1.5–10x cheaper. E3's $14,000/home net benefit figure means the utility economics work even with PG&E giving the device away.

Per-day cost of delay: a homeowner whose furnace dies in January cannot wait 3–6 months for a service upgrade — they buy another gas furnace. The timeline IS the decarbonization story, not just the dollars.

## The skepticism (strongest counterargument, at full strength)

- Load management is rationing with better branding. The device decides your EV charges slower tonight because the heat pump is running. A service upgrade is permanent capacity; Edge is a workaround that manages scarcity instead of eliminating it.
- It does not add a single breaker space or a single amp of capacity. If your panel is physically full, or you plan a second EV + ADU + induction range + heat pump water heater all at once, managed 100A may still not be enough.
- Utility-aligned load shaping means the utility has a window into (and some control over) your home's load profile. The privacy and control tradeoff is real and under-discussed.
- PG&E-only. 48M homes, one utility's pilot. If you are in SCE, SDG&E, or anywhere outside California, this program does not exist for you yet.
- SPAN is a venture-backed hardware startup; a meter device with a 20-year grid asset life backed by a startup's cloud is a bet on the company's survival.

## Limitations (what we did NOT prove)

- We did not independently verify E3's $14,000/home net-benefit analysis; it bundles utility value streams (deferred feeder upgrades) that are not cash in the homeowner's pocket.
- PanelBoost was announced for summer 2026 launch; we could not confirm current enrollment numbers or waitlist status as of publication.
- The $500–$2,000 install range is PG&E's estimate; actual electrician quotes will vary by meter configuration.
- No independent data on how often Edge's load-shedding visibly affects homeowners (cold showers? slow charging?) — SPAN's "no inconvenience" claim is the vendor's.
- Cost figures are California-centric; Midwest/Southeast upgrade costs run lower, which narrows the advantage.

## Actionable takeaways (for the article)

- **If your furnace/AC is dying and you have 100A service:** get the heat pump quote AND ask your electrician for the service-upgrade quote in writing before you decide. The upgrade quote is the real decision variable.
- **If you are in PG&E territory:** check pge.com/electrification for PanelBoost enrollment before paying for any panel work.
- **If you are buying a home to electrify:** 100A overhead service in CA = budget $5k–$10k and 3–6 months, or plan around a smart panel/meter device. Underground service = budget $25k+.
- **If you are building new:** just build 200A. None of this applies; the management devices are a retrofit story.
