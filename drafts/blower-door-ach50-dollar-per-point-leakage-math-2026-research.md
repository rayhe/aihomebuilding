# Research: Blower-door ACH50 dollar-per-point leakage math
Article #975 | Journalist: Priya Greenwood (Sustainability) | Date: 2026-09-26

## Angle
Nobody prices air leakage per unit. The blower door spits out ACH50, the code draws a line at 3.0, and the homeowner gets a number with no dollar sign attached. Original contribution: a transparent dollars-per-ACH50-point model for an archetype 2,400 sq ft home, built from the LBNL infiltration model + degree-day arithmetic, cross-checked against EPA/DOE published savings figures. Kill test: a buyer can demand the number, a builder can price sealing before drywall, an owner gets the highest-ROI retrofit ranked.

## Novelty check (repo-wide)
Searched stories/ for blower-door, air-seal, duct-leak, erv/hrv, ASHRAE 62.2, cool-roof, battery-sizing, crawlspace: effectively zero coverage (one false positive on "undervaluation"). Manual J / HVAC oversizing / panel-EV are heavily covered and were rejected.

## Primary sources (7)
1. **2021 IECC R402.4.1.2** — mandatory blower door test, air leakage limit 3.0 ACH50 for climate zones 3-8. https://codes.iccsafe.org/content/IECC2021P2/chapter-4-re-residential-energy-efficiency
2. **2024 IECC** — tightens to 2.0-2.5 ACH50 (IL, RI, NV, ND enforcing); state amendments vary (LA 7 ACH50 in CZ2, FL 5 w/ amendments). State-by-state enforcement table: https://www.natethehousewhisperer.com/blog/what-iecc-energy-code-is-your-state-on-does-your-state-actually-require-your-new-home-to-be-blower-door-tested
3. **LBNL infiltration model** — ACHn = ACH50 / N; LBL recommends N=20 as conservative default. Climate-zone N-factor table (CZ3 two-story: 20-23). https://www.mdpi.com/1996-1073/14/4/912 and https://cms.srmi.biz/Handouts/BPI_Documents/Quick_Ref_Sheets/Sheet3.pdf
4. **LBL-35173 (AIVC)** — original LBL blower-door paper; effective leakage area (ELA) concept, NL = ACH50/20 for single-story. https://www.aivc.org/sites/default/files/members_area/medias/pdf/Inive/LBL/LBL-35173.pdf
5. **EPA / ENERGY STAR** — air sealing + insulation saves avg 15% on heating/cooling (~11% total bill); assumes 25% of leakage closed. DOE: sealing air leaks saves 10-20% on heating/cooling. https://www.earth.com/lifestyle/preparing-for-winter-government-data-shows-which-home-projects-will-shrink-the-heating-bills/ and https://www.usatoday.com/story/money/home-services/2026/08/03/energy-efficient-home-upgrades/91154741007/
6. **ASHRAE 62.2** — whole-dwelling ventilation Qfan = 0.01 x Afloor + 7.5 x (Nbr+1) CFM; 2013 edition removed the infiltration credit, so tight homes must ventilate mechanically. https://www.achrnews.com/articles/123264-ashrae-updates-residential-iaq-standard and https://www.greenbuildermedia.com/blog/optimal-whole-house-ventilation?hs_amp=true
7. **ORNL air-barrier study** — measured CFM50 per penetration: unsealed electrical box 21 CFM50 avg vs 0.24 sealed; unsealed 1/2" PVC pipe 54 CFM50 vs 0.09 sealed. https://info.ornl.gov/sites/publications/Files/Pub47757.pdf
8. **Cost data** — blower door test $300-500 (prior-art PA-2026-121: https://github.com/rayhe/prior-art/blob/HEAD/inventions/PA-2026-121-building-envelope-barometric-air-leakage.md); professional air sealing $500-2,500, avg $1,000-1,500, whole-home $2,000-5,000 (https://vocal.Media/education/how-much-does-it-cost-to-air-seal-your-home); Efficiency Maine: $350 net cost, $175/yr savings, 2-yr payback (https://medium.com/@PerryGrossman/home-air-sealing-you-can-do-it-f6f3f349ad7e); WAP audit example: $650 air sealing to ACH50 8, $157/yr savings, SIR 3.59 (https://github.com/wonsukchoi/domain-experts/blob/HEAD/roles/energy-auditor/SKILL.md)

## The model (original calculation)
Archetype: 2,400 sq ft, 8-ft ceilings, volume 19,200 ft3. Climate Zone 3: 3,000 HDD65, 1,500 CDD65 (mild California).

Per 1 ACH50 point:
- CFM50 = 1 x 19,200 / 60 = 320 CFM50
- Natural infiltration = CFM50 / N = 320 / 20 = 16 CFM (LBNL, N=20 for CZ3 two-story)
- Heating: 1.08 x 16 x 24 x 3,000 = 1,244,160 Btu/yr = 365 kWh of heat
  - Heat pump COP 3.0: 122 kWh electricity x $0.34/kWh (CA 2026 residential) = **$41/yr**
  - Gas furnace 80% AFUE: 15.6 therms x $1.90 = **$30/yr**
- Cooling (sensible only): 1.08 x 16 x 24 x 1,500 = 622,080 Btu/yr = 182 kWh thermal; EER 12: 52 kWh x $0.34 = **$18/yr**
- **Total: ~$60/yr per ACH50 point** (mild climate, heat pump)

Scaling notes: cold climate (7,500 HDD, gas heat) roughly doubles heating side to ~$75-100/yr per point. Hot-humid adds latent load on top of sensible (moisture removal ~1,050 Btu/lb), so the $60 is a floor there.

Cross-checks:
- 1960s ranch at 8 ACH50 tightened to code 3 ACH50: 5 points x $60 = $300/yr. Air sealing $1,000-1,500 -> 3-5 yr payback. Consistent with Efficiency Maine ($175/yr on $350) and WAP ($157/yr on $650).
- DOE: air leakage = 25-40% of heating/cooling; on a $1,800/yr HVAC bill at 8-12 ACH50 that is $450-720/yr. Model gives 8 points x $60 = $480/yr. Consistent.

Hole framing: EqLA rule of thumb (Energy Conservatory) EqLA(in2) = CFM50 x 0.0557. At 8 ACH50: CFM50 = 2,560 -> 143 in2 ~= 1.0 sq ft. At 12 ACH50: ~1.5 sq ft (a bathroom window left open year-round). Label as rule-of-thumb; ELA concept per LBL-35173.

## Counterargument (steel-man)
1. Tightening is not free: below ~3 ACH50, ASHRAE 62.2 demands mechanical ventilation. Archetype: Qfan = 0.01x2400 + 7.5x5 = 61.5 CFM continuous. An ERV (75% SRE) runs $2,000-3,500 installed plus fan energy. The ventilation penalty eats part of the savings.
2. Combustion safety: tightening changes worst-case CAZ depressurization; BPI requires spillage testing before envelope work proceeds.
3. Diminishing returns are real: manufactured-housing "house doctoring" cut leakage only 19.5% for $200 and 3.5 hrs (ASTM). The first points are cheap; the last points are expensive.
4. Renters cannot act; this is an owner/builder lever.

## Limitations
- N=20 is approximate (plus/minus ~30% by shielding, height, leak distribution); the dollar figure inherits that band.
- HDD/CDD base 65F; mild-climate archetype; cold/hot-humid scaling stated as ranges, not modeled precisely.
- Latent cooling load excluded from the $60 (dry-climate assumption stated).
- Electricity $0.34/kWh and gas $1.90/therm are 2026 California figures; other markets differ.
- Air-sealing costs are market ranges (vocal.media, Efficiency Maine), not quotes.
- Nothing here overrides the AHJ; blower door protocol per RESNET/ICC 380, ASTM E779/E1827.

## Actionable takeaways
- Buyers: demand the blower door number before close, like a Carfax. New homes in 2021-IECC states must test at 3.0 ACH50 or better.
- Builders: seal before drywall (top plates, can lights, rim joists, attic hatch). ORNL: one unsealed electrical box = 21 CFM50; sealed = 0.24. Retrofit costs 3-5x more than doing it at rough-in.
- Owners: $300-500 test, $1,000-1,500 pro sealing, 3-5 yr payback in mild climates, ~2 yr in cold ones. Below 3 ACH50, add 62.2 ventilation.
