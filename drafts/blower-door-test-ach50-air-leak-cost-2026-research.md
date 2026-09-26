# Research: Blower Door Test ACH50 — What the Number Costs You

Slug: `blower-door-test-ach50-air-leak-cost-2026` | Article #969 | Journalist: Priya Greenwood | Date: 2026-09-25

## Thesis
Every new US home gets a blower door test, and the number it produces (ACH50) is the single most honest figure in residential energy — but almost nobody who pays for the house knows what it means, what it costs them per year, or how gameable it is. Original contribution: worked ACH50 -> natural infiltration -> therms -> dollars math for an archetype home, plus the honest finding that the energy payback on tightening is weak while the comfort/durability/HVAC-sizing case is strong.

## Kill test
Does this help someone building or buying a home? Yes: (1) put a numeric ACH50 target in the purchase contract, (2) hire your own third-party test ($325) instead of trusting the builder's, (3) know what AeroBarrier-class sealing costs and what it actually returns.

## Primary sources (12)
1. IECC adoption + blower-door requirements by state, enforcement gaps (LA amended to 7.0 ACH50; IN allows visual inspection instead of testing): https://www.natethehousewhisperer.com/blog/what-iecc-energy-code-is-your-state-on-does-your-state-actually-require-your-new-home-to-be-blower-door-tested
2. 2021 IECC base code: 5.0 ACH50 (CZ 1-2), 3.0 ACH50 (CZ 3-8); Louisiana amendment to 7.0; allowance 0.30 cfm/sq ft enclosure for small/attached: https://www.ecostarfoam.com/blower-door-test-ach50-new-orleans/
3. Code text R402.4.1.2: test per ASTM E779 or E1827 at 50 Pa (0.2 in. w.g.), written report to code official; testing after all envelope penetrations: https://scotthomeinspection.com/explaining-the-air-leakage-testing-update-in-the-2021-iecc/
4. Test cost: ~$325 single-family average; $200 basic; $350-450 with thermal imaging: https://www.linkedin.com/pulse/blower-door-testing-boost-new-home-energy-efficiency-steve-armstrong-qlnce
5. AeroBarrier cost/results table: 1,800-2,600 sq ft homes, 4.0-6.5 -> 1.5-2.0 ACH50, $2,400-$3,400, 2-3.5 hr active seal: https://www.trustedguides24.com/building/aerobarrier-on-real-projects-a-builder-cus-guide-to-tightening-homes-to-0-6-ach50.html
6. SWA case study: 3.32 -> 1.63 ACH50 (-50.9%) in ~2 hours, <4 gal sealant; hard-to-seal junctures (chimney chase, porch roofs, top/bottom plates): https://www.swinter.com/aerobarrier-a-new-tool-for-gut-rehabs/
7. Lamarr.AI (MIT Building Technology Program spinout): drone + IR + visible + computer vision + LLM reports; "building MRI"; $1.8M DOE award; heat-wave/low-income community origin: https://www.uasvision.com/2025/11/12/ai-drones-give-buildings-an-mri-to-make-them-more-energy-efficient-and-resilient/
8. Kestrix: UK city-scale heat-loss atlas from autonomous drone thermography + AI analytics, per-sq-m quantification: https://www.pulse.bot/construction/blogs/how-drones-and-ai-are-mapping-heat-loss-across-neighbourhoods-in-the-uk-39e5cb74-e2d7-4c55-b6c4-fdc32a55a22f/
9. GSA PTA on envelope remote-sensing drones: vendor claims 50% more defects than manual, 80% cheaper, 80% faster; meets ASHRAE/ACCA 211 P: https://www.gsa.gov/system/files/2024-Building%20Envelope%20Remote%20Sensing%20Drones.pdf
10. AeroBarrier vs blower-door protocol gap: AeroBarrier seals with designed openings taped/prepped; standard blower door is "as-used"; prep differences explain post-test gaps: https://airtightspaces.com/wp-content/uploads/2021/04/Technical-Bulletin-_-AeroBarrier-v.-Blower-Door-Testing.pdf
11. Measurement reliability (REHVA/buildwise review): repeatability std dev 1-2% (non-windy, experienced testers); reproducibility <4%: https://www.buildwise.be/umbraco/surface/scientificarticleitem/DownloadFile/ref00019323-how-reliable-are-blower-door-measurements?culture=fr&fileNumber=1
12. Pressure-exponent extrapolation (Walker et al. 2013): n=0.65 mean, sd 0.057; single-point extrapolation uncertainty to natural pressures ~14%: https://escholarship.org/uc/item/4bw629bg

## Original calculations (worked in article)
Archetype: 2,400 sq ft two-story, volume ~20,400 cu ft, Chicago (CZ5A, ~6,500 HDD65, ~950 CDD65, gas ~$1.20/therm, elec ~$0.17/kWh).

- ACH50 3.0 (2021 IECC max, CZ 3-8): CFM50 = 3.0 x 20,400 / 60 = 1,020 CFM50. Natural infiltration ~ CFM50/20 (LBL rule of thumb) = 51 CFM.
- ACH50 1.5 (good builder): 510 CFM50 -> ~25.5 CFM natural. Delta = 25.5 CFM.
- Heating: 1.08 x 25.5 x 24 x 6,500 / 1e6 = 4.30 MMBTU/yr sensible -> /0.92 furnace = 4.67 MMBTU = 46.7 therms ~ $56/yr.
- Cooling: 1.08 x 25.5 x 24 x 950 / 1e6 = 0.628 MMBTU = 184 kWh ~ $31/yr.
- Total ~$87/yr for 3.0 -> 1.5 tightening in Chicago. 30-yr ~$2,600.
- AeroBarrier mid-cost $2,900 to go 5.0 -> 1.8 ACH50 (delta ~3.2 ACH50 ~ 54 CFM natural): heating 1.08x54x24x6500/1e6 = 9.1 MMBTU -> 9.9 MMBTU input = 99 therms ~ $119/yr; cooling 0.39 MMBTU? recompute: 1.08x54x24x950/1e6 = 1.33 MMBTU = 390 kWh ~ $66/yr. Total ~$185/yr -> 16-yr simple energy payback. Honest finding: energy alone barely pencils.
- Existing-home comparison: 10 ACH50 vs 3 ACH50 (delta 7 = ~119 CFM natural): heating 1.08x119x24x6500/1e6 = 20.05 MMBTU -> 21.8 MMBTU input = 218 therms ~ $262/yr heating penalty. This is the number that matters for buyers of older homes.
- Design-day infiltration load (Chicago 99% design ~ -4F, indoor 70F, dT 74): 1.08 x 51 CFM x 74 = 4,076 BTU/hr at 3.0 ACH50; ~8,500 BTU/hr at 10 ACH50. Feeds Manual J; ties to oversized-equipment story.

## Skepticism / strongest counterargument
- 50 Pa is ~20 mph wind on every side simultaneously: a condition that never occurs. ACH50 is a comparative index, not a leak rate. The divide-by-20 conversion to natural infiltration is a rough correlation (LBL), climate- and exposure-dependent, roughly +/-50%.
- Below ~2 ACH50, ASHRAE 62.2 mechanical ventilation becomes mandatory in practice; a tight house with no ERV/HRV can have worse IAQ than a leaky one. Tightness without ventilation is a downgrade.
- The money may be better spent elsewhere: a heat pump upgrade or attic insulation often beats air-sealing on $/MMBTU.
- Test prep matters: taped registers/dampers vs "as-used" changes results; enforcement is spotty (amendments, visual-inspection opt-outs).

## Limitations
- LBL divide-by-20 is approximate; stated as such with the Walker et al. uncertainty.
- Chicago HDD/CDD and utility rates are assumptions; article shows the formula so readers can substitute.
- AeroBarrier cost from a single industry guide; varies by market.
- Lamarr.AI/Kestrix/GSA figures are vendor or pilot claims, not peer-reviewed; residential single-family availability is limited.
- Cooling math covers sensible load only; latent (humidity) load excluded and noted.

## Actionable takeaways (article must include)
- New-home buyers: write "<=2.0 ACH50, third-party test per ASTM E779, report at close" into the contract.
- $325 buys your own blower door test; $350-450 with thermal imaging.
- Builders: aerosol sealing $2,400-$3,400 typical; pre-drywall + final tests.
- Existing owners: audit before sealing; attic top plates, rim joists, can lights first.
- Below 2 ACH50, budget an ERV/HRV per ASHRAE 62.2.
- AI drone thermography is real but not yet a consumer single-family product; don't pay an "AI premium" on a residential audit today.
