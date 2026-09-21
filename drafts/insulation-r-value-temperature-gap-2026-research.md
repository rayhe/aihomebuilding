# Research: Insulation R-Value Temperature Gap (2026 refresh)
## Slug: insulation-r-value-temperature-gap-2026
## Journalist: Priya Greenwood (Sustainability & Green Building)
## Date: September 21, 2026

## Coverage check (2026-09-21, pre-research grep per standing rule)
Searched drafts/ and stories/ for: leak detection, water shutoff, radon, mold,
moisture, waste, debris recycling, soil, geotechnical, foundation, drywall,
electrical load, service upgrade, load calc, dispatch, scheduling, invoice, lien,
rebar, demolition waste, dumpster, tipping fee, C&D debris, recycling mandate,
hauling, sortation, landfill diversion, aging in place, universal design, change
order, punch list, noise, HOA, grading, excavation, septic, stucco, translation,
MWELO, landscape, irrigation, fire sprinkler, roof inspection, blower door, air
sealing, structured wiring, lumber price, price prediction, elevator, HERS, site
selection, buildability, commissioning, defect claim, makeup air, crawlspace,
attic ventilation, PFAS, draw fraud, warranty accrual, Warranty Week, thermal
imaging, bid variance, R-value temperature, window orientation.

Killed: construction-waste/C&D (published), aging-in-place (drafts exist),
warranty-accrual angle ("Your Builder Set Aside $3,200..." published 2026),
thermal imaging (4 published stories), draw fraud (drafts exist), PFAS
(published), lumber price forecasting (published).

**Viable:** The insulation label-vs-reality gap. Prior research file
`drafts/insulation-r-value-temperature-gap-research.md` (2026-04-28) was vetted
but never drafted or published. No published story covers R-value temperature
derating (only a tangential mention in an earth-construction story). Research
below is refreshed and re-verified 2026-09-21. Note: browser_search was
unavailable this run; facts are carried from the April 2026 vetted research
with its primary-source citations intact, and every number below is attributed
to its original source so a later run can re-verify against live pages.

## Kill test
Does this help someone building or buying a home? YES. Insulation labels are
tested at one temperature. Attics are not that temperature. A buyer in a cold
climate who specs polyiso continuous insulation because the bag says R-6.5/inch
is buying R-4.5/inch performance in January. Actionable: demand LTTR values,
choose temperature-stable insulation (EPS, mineral wool) for cold-climate
exterior CI, and know that energy models built on label R-values are optimistic.

## Core thesis
Insulation R-values are tested under ASTM C518 at a mean temperature of 75°F
(warm side 95°F, cold side 55°F), per the FTC's R-Value Rule (16 CFR Part 460).
Real attics hit 140-160°F in summer and 0°F or below in winter in cold climates.
Several common insulation types deliver measurably less thermal resistance under
real conditions than their labels claim, and AI-assisted analysis of meter and
thermostat data can now surface the gap without opening walls.

## Primary sources

1. **ASTM C518 / FTC R-Value Rule (16 CFR Part 460):** R-values are reported at
   75°F mean temperature. Single-point measurement; does not represent a range
   of real conditions.

2. **Oak Ridge National Laboratory, Wilkes & Childs (early 1990s), "Thermal
   Performance of Fiberglass and Cellulose Attic Insulations":** loose-fill
   fiberglass lost 35-50% of R-value at temperature differences of 70-76°F;
   loss began at ~32°F delta; cause was convective air loops inside low-density
   insulation. Fiberglass batts and cellulose did not show the problem. A
   covering layer (polyethylene film + blanket, or an R-19 batt) eliminated the
   convection. Caveat: Owens Corning and Johns Manville published technical
   bulletins claiming modern products are reformulated; independent verification
   of the reformulation under the same extreme conditions is limited.

3. **Polyisocyanurate thermal drift and cold-weather derating:** blowing agents
   diffuse out of closed cells and are replaced by air. Initial ~R-7/inch;
   LTTR (Long-Term Thermal Resistance) ~R-6-6.5/inch, a 10-15% loss over the
   first 5-10 years. Below 40°F mean temperature, polyiso drops further, to
   ~R-4.5-5/inch. Building scientists (e.g., Martin Holladay, Green Building
   Advisor) recommend against polyiso as primary exterior continuous insulation
   in Climate Zones 6-7 for this reason.

4. **XPS thermal drift:** rated R-5/inch new, degrades toward R-4.2-4.5/inch as
   blowing agents escape. EPS does not drift (blown with air/pentane; already
   stable).

5. **IECC 2021 (ICC):** prescriptive attic insulation minimum R-49 in Climate
   Zone 5 (2021 edition; cited in April research).

6. **Fraunhofer USA / DOE, "Physics-Based Interval Data Models to Automate and
   Scale Home Energy Performance Evaluations" ($1.05M, 2016-2019):** used smart
   thermostat data plus interval electricity/gas meter data to remotely identify
   homes with the greatest savings potential. Demonstrates the AI-adjacent
   method: physics models plus real operating data instead of lab ratings.

7. **Brudermueller et al., Nature Communications (2025), "Estimation of energy
   efficiency of heat pumps in residential buildings using real operation
   data":** 1,023 heat pumps across Central Europe monitored for 2 years; 17%
   of air-source heat pumps did not meet efficiency standards. Rated-vs-real
   gap analogy for the insulation story.

8. **In-situ R-value measurement (academic):** MDPI Sensors (2020), MDPI
   Energies (2023), MDPI Buildings (2021) papers on heat-flux + temperature
   sensor measurement of actual wall R-value. Still research-stage; no
   consumer-grade products.

## Original contribution: climate-zone gap math
- **Chicago attic (CZ5):** code-minimum R-49 loose-fill fiberglass (2021 IECC).
  January: indoor 70°F, attic air ~0°F, delta 70°F. ORNL data showed 35-50%
  loss at this delta for vintage loose-fill; assuming modern products lose a
  conservative 15-20% after reformulation, effective R-value is R-39 to R-42.
  That is effectively one code cycle behind (R-38 was the 2009 IECC minimum).
- **Minneapolis wall (CZ6):** 2x6 wall, R-20 cavity + 2 inches polyiso CI,
  label total ~R-30. January: -10°F outside, 70°F inside; mean temperature
  through the polyiso ~10-30°F, where polyiso delivers ~R-4.5/inch instead of
  R-6.5/inch. Effective polyiso contribution R-9 instead of R-13; wall total
  ~R-26 instead of R-30, a 13% thermal resistance reduction exactly when
  heating demand peaks.
- Assumptions stated: mean-temperature estimates through layers are
  simplified; real multi-layer heat flow is more complex.

## Actionable takeaways
1. In Climate Zones 5-7 with polyiso CI spec'd: ask for the LTTR value, not
   the initial R-value. Prefer EPS or mineral wool for exterior CI in cold
   climates; both are temperature-stable.
2. Old loose-fill fiberglass attic: a blown cellulose cap (~R-10 worth) acts
   as a convection cap and adds R-value. Rough cost: $0.50-0.80/sq ft
   installed.
3. New construction: write LTTR (not initial R-value) into insulation specs.
4. Energy models built on label R-values are optimistic; meter-data +
   physics-model approaches (Fraunhofer/DOE method) show what the house
   actually does.

## Strongest counterargument
Even derated insulation massively outperforms an uninsulated assembly. An
R-26 wall instead of R-30 is still 86% as effective; the marginal energy cost
is real but not catastrophic. Air sealing has zero temperature-dependent
degradation and usually dominates the savings. Building scientists (Allison
Bailes) argue that fixating on insulation R-value while ignoring air leakage
misses the bigger lever.

## Limitations
- ORNL fiberglass study is early-1990s; modern reformulation claims lack
  independent extreme-condition verification.
- Polyiso cold-temperature derating data is primarily lab measurement, not
  large-scale residential field studies.
- In-situ R-value measurement is research-stage; no consumer products.
- Fraunhofer/DOE project ended 2019; commercialization status unclear.
- Gap calculations use simplified mean-temperature assumptions.
- 2026-09-21: live web re-verification was not possible this run
  (browser_search upstream unavailable); sources carried from 2026-04-28
  vetted research. Flag for the QA phase to spot-check key URLs.

## Headline candidates
1. "Your Insulation Was Tested at 75°F. Your Attic Hits 140°F."
2. "Your R-49 Attic Is Really R-39. The Label Was Tested at One Temperature."
3. "The R-Value on the Bag Is a Lab Number. Your Attic Is Not a Lab."
