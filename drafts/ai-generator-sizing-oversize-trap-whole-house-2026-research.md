# Research: The Generator Oversizing Trap — AI Sizing Calculators vs. the NEC Load Calc

**Slug:** `ai-generator-sizing-oversize-trap-whole-house-2026`
**Journalist:** Frank DeLuca (project management & operations — procurement, cost control)
**Date:** September 2, 2026

## Angle
Dealers default-quote 22–26 kW whole-house standby generators. Online sizing calculators (including Generac's own) nudge homeowners toward the big unit. But an NEC Article 220 load calculation plus $200 load-management modules shows most 2,500 sq ft homes need 14–16 kW. The oversize costs $3–5K extra upfront and burns ~40% more fuel every outage hour. This is a procurement story: the industry's incentive is to sell iron, not right-size it.

## Kill test
Does this help someone building or buying a home? Yes — anyone quoted a standby generator can run the 6-step load calc, ask for SMM load management instead of a bigger unit, and check the gas meter before install day. Saves thousands.

## Primary sources (6)
1. **Generac Whole Home Sizing Worksheet** (generac.com PDF) — built on NEC Part III of Article 220; states NEC 702.4(B)(2) requires optional standby source sized per Article 220. Documents SMM priority/lockout load management (up to 8 modules + 4 SACM).
   https://generac.com/globalassets/residential/dealers--installers/generac-installer-programs/become-a-pwrcell-installer/pwrcell-installer-resources/wholehomesizingworksheet_1-1.pdf
2. **Mike Holt NEC forum (licensed electricians)** — NEC 702.4(B)(2) does NOT require sizing to match service; must be ≥ Article 220 connected load. Air-cooled units rated on LP; on natural gas derated 10–15% (Generac 22 kW on NG = 19.5 kW). Standby-rated air-cooled units must not exceed 60% load continuously (1 hr/12 hrs, 2 hrs/24 hrs, 250 hrs/yr exceptions).
   https://forums.mikeholt.com/threads/sizing-stand-alone-home-generator.121097/page-3
3. **PES Supply fuel math (manufacturer-published figures, updated Aug 2026)** — 22 kW air-cooled: NG ~180/306 ft³/hr (half/full), LP ~2.1/3.6 gal/hr. 3-day outage at 40% load: ~$210 NG (@$1.20/therm) or ~180 gal LP. Gas meter trap: 22 kW at full load draws ~300 ft³/hr; many residential meters can't feed generator + furnace simultaneously.
   https://www.portlandiaelectric.supply/blogs/generators/backup-power-solutions
4. **UDPOWER Generac cost 2026 (EIA Jan 2026 NG price $13.94/MCF)** — Generac 14 kW: 195 ft³/hr @50% ≈ $2.72/hr; 22 kW: 228 ft³/hr @50% ≈ $3.18/hr; 26 kW: 188 ft³/hr @50% ≈ $2.62/hr (newer engine). Quote red flag: "22kW installed" without transfer-switch type, gas work, permits itemized.
   https://udpwr.com/blogs/portable-power-station-knowledge/generac-generator-cost-what-homeowners-actually-pay-in-2026
5. **Angi (updated Jul 9, 2026)** — 22 kW burns 2–3 gal propane/hr; propane tank purchase+install $600–$1,200; 500-gal tank guidance.
   https://www.angi.com/articles/how-much-propane-does-whole-house-generator-use.htm?entry_point_id=33797113
6. **ExpertCE (licensed CE provider)** — 6-step residential load calc method: running watts + largest-motor incremental surge + 10–25% margin; NEC 702.4 load-management option is why modern installs downsize.
   https://expertce.com/learn-articles/standby-generator-load-calculation-residential/
7. **ThomasNet on Generac Power Design Pro** — Generac's own pro software sequences loads (lights first, AC after reset) instead of assuming block loading; competitive software assuming everything-on-at-once "drives customers to an oversized solution."
   https://www.thomasnet.com/insights/major-generator-manufacturer-offers-cost-saving-generator-sizing-software/

## Original contribution: worked sizing math (2,500 sq ft home, 1× 3-ton AC, well pump)
Using ExpertCE method + Ace Power Parts worked example cross-check:
- Running loads (fridge, lights, outlets, furnace blower, freezer, IT): ~5,000 W
- 3-ton AC: running ~3,500 W... (nameplate; Ace uses 2,000 W running / 6,000 W starting for 3-ton)
- Largest motor incremental surge: 3-ton AC start 6,000 − run 2,000 = 4,000 W incremental
- Total: 5,000 + 4,000 = 9,000 W; +25% margin = 11,250 W → **14 kW unit covers it**
- With SMM load management shedding water heater/dryer: 14 kW comfortable; without management, 16–18 kW
- Dealer default 22–24 kW = **57–71% oversized** vs. calculated need
- Fuel penalty: 22 kW @50% load ≈ 228 ft³/hr vs 14 kW @50% ≈ 195 ft³/hr → ~17% more fuel per hour at same load fraction; but oversized unit runs at lower load fraction where specific fuel consumption is worse. 3-day outage: ~$210 (22 kW) vs ~$140 (14 kW) on NG per PES table — **$70/outage fuel penalty**, plus ~$3–4K higher installed cost (unit + bigger ATS + gas work)
- NG derate gotcha: "22 kW" on natural gas delivers 19.5 kW (Mike Holt) — the nameplate number on the quote is the LP number
- Standby 60% rule: a 14 kW air-cooled unit shouldn't carry more than 8.4 kW continuously — matters for multi-day outages; size with headroom, not against the redline

## Counterargument (strongest)
Oversizing has defenders: motor starting (well pump + AC coinciding), future loads (EV charger, hot tub, heat-pump conversion), multi-day outage derating in heat, and the fact that most homeowners will never do a real load calc — a too-big generator that always starts beats a perfectly-sized one paired with a load-management module nobody programmed correctly. Dealer quote of 22 kW is also liability armor: no callbacks. Engage honestly: if you won't manage loads, buy the bigger unit — but know you're paying for your own unwillingness to prioritize circuits.

## Limitations
- Fuel prices: EIA Jan 2026 $13.94/MCF national avg; local rates vary 2–3× (California vs. Texas)
- Worked calc uses representative appliance wattages; actual nameplates vary; well-pump starting surge varies by pump type
- Installed-cost deltas ($3–4K) are estimates from dealer quote aggregators, not a controlled sample
- Did not verify Generac's online consumer sizing tool's current recommendation logic (JS-heavy); characterization based on third-party documentation of its inputs
- Heat-derate and altitude-derate curves not modeled (notable above ~3,000 ft)

## Actionable takeaways (for article)
1. Demand an Article 220 load calc on the quote — not square footage
2. Price the job two ways: bigger generator vs. smaller generator + SMM load management (~$150–250/module)
3. Check the nameplate fuel: if you're on natural gas, subtract 10–15% from the quoted kW
4. Call the gas utility about meter capacity BEFORE install day ($400 meter upsize vs $2,000 repipe)
5. Size propane tanks for the outage you fear: 500 gal minimum for a 22 kW
6. If you won't prioritize circuits, buy the bigger unit and own the decision
