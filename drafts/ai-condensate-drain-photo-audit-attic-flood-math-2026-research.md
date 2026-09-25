# Research: Condensate Drain Photo-Audit + Attic Flood Math

**Slug:** ai-condensate-drain-photo-audit-attic-flood-math-2026
**Article #:** 964 | **Journalist:** Catherine Chen (Policy & Regulation — IRC M1411.3 angle)
**Date:** 2026-09-24 | **Kill test:** PASS — buyer of a home with an attic air handler and any builder at pre-drywall rough-in can act on this today.

## Angle
Every summer day, an attic air handler wrings roughly 20 gallons of water out of the air and sends it down a 3/4" PVC line. When that line clogs (slime, algae, the most common residential HVAC failure mode nobody photographs), the code-minimum safety pan holds about six gallons. A homeowner who leaves for a Friday night getaway returns Monday to a collapsed ceiling. The code already wrote the answer in IRC M1411.3.1 — most installs get one of the three compliance methods half-right, and AI plan-review tools never see attics.

## Primary sources (5)

1. **IRC 2021 §M1411.3 / M1411.3.1 (code text, quoted verbatim via inspector references):**
   - M1411.3 Condensate disposal: conveyed from drain pan outlet to approved place of disposal; min 1% slope (1/8" per 12"); never discharge into a street/alley/nuisance area.
   - M1411.3.1 Auxiliary and secondary drain systems: required for every cooling coil "where damage to any building components will occur as a result of overflow." Three permitted methods:
     - (1) Auxiliary drain pan + separate drain to a **conspicuous point of disposal** to alert occupants. Pan ≥1.5" deep, ≥3" larger than unit each dimension, corrosion-resistant (24-gauge galvanized min / 0.0625" nonmetallic).
     - (2) Separate overflow drain line connected to the equipment pan **at a higher level than the primary**.
     - (3) Auxiliary pan (no drain line) + **UL 508 water-level detection device** that shuts off equipment before overflow.
   - Sources: http://www.inspectionnews.net/home_inspection/heating-ventilation-air-conditioning-hvac-home-inspection-and-commercial-inspection/46631-ac-secondary-pan.html ; http://www.inspectionnews.net/home_inspection/archive/index.php/t-55517.html ; https://forum.nachi.org/t/secondary-condensate-ports/7450

2. **Condensate production rate:** 0.8–1.2 gallons/hour/ton under moderate humidity; 3-ton unit at 8 hrs/day = 19.2–28.8 gal/day; typical residential range 5–20 gal/day.
   - Sources: https://www.claimyourcomfort.com/beginners-guide-to-ac-condensate-reuse-for-home-gardens/ ; https://www.greenbuildingadvisor.com/question/condensate-capture-system ; http://answers.com/general-science/How_much_water_does_central_air_produce_from_condensation

3. **Water damage claim economics (III 2019–2023, via Insurance Business Mag / PNW Residences):** water damage + freezing = 22.6% of all homeowners claims (2nd after wind/hail); average claim **$15,400**; ~1 in 60 insured homes/year; water damage carries the **highest denial rate of any claim type (~10%)** — hinges on sudden-vs-gradual distinction, which is exactly what a slow condensate seep becomes.
   - Sources: https://www.insurancebusinessmag.com/us/news/property/water-damage-has-the-highest-denial-rate-of-any-homeowners-claim--it-matters-for-every-client-588244.aspx ; https://www.pnwresidences.com/blog/water-damage-statistics-2026/

4. **Float switch pricing + UL 508 listing (verified distributor pages):** RectorSeal SS1 inline Safe-T-Switch $37.84; RectorSeal AG-1200+ pan switch $25.53; All-Access AA3 clip-on (UL 508 listed) $13.52; DiversiTech Asurity elbow switch $21.08. All trigger shutdown of the equipment on rising water.
   - Sources: https://woe.gatewaysupply.net/buy/product/drain-condensate-overflow-switch/238588 ; https://woe.gatewaysupply.net/buy/product/magnetic-float-switch/576785 ; https://hvacwholesaledirect.com/hvac-service-maintenance-supplies/condensate-switches/ ; https://www.ussupply.com/pipe-mounted-flood-prevention-elbow-switch-bulk-2017915.html

5. **Trap depth + drying-out failure mode:** trap seal must exceed ~2× max plenum pressure in inches of water column; P-traps evaporate dry over the heating season (no condensate formed) — a dry trap admits unconditioned air / blows condensate back, and a trap at half the required depth gurgles and fails.
   - Sources: https://inspectapedia.com/aircond/AC-Condensate-Check-Trap-hpac.pdf (Des Champs technical paper) ; https://www.eng-tips.com/threads/sizing-condensate-drain-lines.83699/ ; https://www.thebuildingcodeforum.com/forum/threads/hvac-condensate-line.29262/

## ORIGINAL CONTRIBUTION — the weekend-flood calculation

Inputs (all sourced above, assumptions explicit):
- 3-ton attic air handler, humid climate, 8 hrs/day runtime
- Condensate rate: 0.8 gal/hr/ton (LOW end of 0.8–1.2 range) → **19.2 gal/day**
- Code-minimum auxiliary pan (M1411.3.1 method 1/3): assume 24"×24" unit → pan 30"×30" (3" margin each side), 1.5" deep → 900 in² × 1.5" = 1,350 in³ = **5.85 gallons**

Math:
- Pan fills in 5.85 gal ÷ 0.8 gal/hr = **7.3 runtime-hours** — less than one summer day of cooling.
- Friday-evening primary-drain clog, no float switch, no secondary drain (method-3 pan installed but switch missing/stuck — the most common defect in inspector forums): pan overflows Saturday morning. By Monday: ~3 days × 19.2 gal ≈ **45–60 gallons** poured through drywall, insulation, and framing.
- At $15,400 average water claim (and mold remediation alone averaging ~$2,364), the economics: **$13.52–$37.84** for a UL 508 float switch that shuts the system off before the pan overflows. That is a ~400:1 cost asymmetry.

## Photo-QA checklist (what a phone camera catches before drywall)
1. Trap present, seal ≥2" deep, vent beyond trap, cleanout cap accessible (not glued shut).
2. Secondary pan under every horizontal attic coil (M1411.3.1).
3. Pan ≥1.5" deep, ≥3" larger than unit; corrosion-resistant material.
4. Float/wet switch present in pan or on secondary port, wired to control circuit.
5. Drain slope continuous ≥1/8"/ft, 3/4" min pipe, no bellies/sags where standing water grows slime.
6. Secondary discharge terminates at a CONSPICUOUS point (above a window/door) — the drip is the alarm.
7. Trap primed, not evaporated dry over winter.

## Skepticism (strongest counterargument)
- Float switches fail: stuck floats, corroded contacts, miswired NC/NO contacts. A switch is a single point of failure; belt-and-suspenders is pan + separate drain + switch.
- Pans rust through: galvanized pans corrode, especially with condensate sitting for weeks; code requires corrosion-resistant but decades-old installs predate it.
- AI photo audit cannot see inside the drain line: the #1 clog cause (slime/algae biofilm) is invisible. The photo catches INSTALLATION defects; maintenance (annual flush, vinegar tablets) is a different layer no camera replaces.
- Secondary port plugged at the coil is widespread: inspectors report installers leaving the secondary port capped and relying on the pan alone — the water then seeps from sealed joints and blows into the airstream (mold) before ever reaching the pan.

## Limitations
- Pan volume math assumes a 24"×24" unit footprint and code-minimum margins; real units vary.
- Condensate rate depends on latent load (humidity), runtime, and setpoint; 19.2 gal/day uses the LOW end of the per-ton range at 8 hrs — dry climates produce far less.
- $15,400 is the average across ALL water damage claims (burst pipes, appliances), not condensate-specific; condensate floods skew smaller but carry higher denial risk as "gradual."
- Did not independently verify a contractor service-call price for drain clearing; article states a range only with attribution.

## Novel vs repo
- 526 existing slugs: ZERO mention condensate, secondary pan, drain pan, float switch, trap (trap- hits are all "trap" as in "oversize trap" / "rebate timing trap" — unrelated).
- Closest: ai-sump-pump-failure-prediction-smart-monitor-2026 (sump, different), ai-refrigerant-charge-a2l-leak-detection-residential-2026 (refrigerant, different).
