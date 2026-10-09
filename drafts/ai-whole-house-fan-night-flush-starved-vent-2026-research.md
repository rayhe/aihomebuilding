# Research: AI Whole-House Fan Night-Flush Cooling — Article #1048

**Journalist:** Priya Greenwood (sustainability/energy beat)
**Slug:** `ai-whole-house-fan-night-flush-starved-vent-2026`
**Date:** 2026-10-08

## Topic
Whole-house fans for night-flush cooling: the cheapest serious cooling upgrade in residential construction, and the two traps nobody prices in — starved attic ventilation that chokes the fan, and backdrafting that can pull CO down a water-heater flue. Plus the AI gap: the industry sells smart thermostats and humidistats, not actual intelligence — no mainstream controller uses forecast + indoor/outdoor differential + thermal mass to pick run windows.

## Kill test
Does this help someone building or buying a home? Yes. A $1,500–$2,800 installed fan can cut cooling costs 50–90% in the right climate with a 2–4 year payback, but only if (a) the attic has enough exhaust venting, (b) the climate has a real diurnal swing, and (c) combustion appliances won't backdraft. All three are checkable before purchase.

## Primary sources (5)
1. **U.S. DOE / NREL Technology Fact Sheet, "Whole House Fan"** (docs.nrel.gov/docs/fy99osti/26291.pdf; also eere.energy.gov/buildings/publications/pdfs/building_america/26291.pdf) — public domain. Fan motor 1/4–1/2 hp, 120–600W, 1–5¢/hr to run; 2-ton SEER-10 AC in Atlanta ≈ $250+/cooling season (~20¢/hr at 8.5¢/kWh); winter warning: fan is "essentially a large, uninsulated hole in the ceiling" — build an insulated, airsealed cover.
2. **California Energy Commission / Title 24** — 2013 standards made whole-house fans a prescriptive requirement for new homes (EC&M/ECMAG reporting); 2022+ standards: whole-house fan airflow and rated wattage must be HERS-verified in the field; smart vents / night-breeze (ducted) allowed as alternative in climate zones 8–14. CEC-cited figures: 50–90% cooling energy reduction vs central AC.
3. **PG&E / LBNL field results** (via CEC reporting): 63% less electricity in peak cooling months; LBNL monitored test: 84°F → 68°F interior in under 15 minutes.
4. **NYSERDA residential ventilation guide** (nyserda.ny.gov, "76-1138-A10") — before installing a ventilation system, verify adequate makeup air for fuel-burning equipment; negative pressure can pull combustion gases including CO down the chimney — "can quickly cause severe injury or even death."
5. **QuietCool manufacturer data** (quietcoolsystems.com; owner guides via images.thdstatic.com) — sizing rule 2 CFM/sq ft (installers report happiest customers at 3 CFM); attic venting requirement 1 sq ft net free area per 750 CFM; Smart Control: ECM motor with temperature/humidity presets, app control, fire shutoff at 182°F; Classic whole-house fan starting at $1,449 installed; 15-year motor warranty. Third-party cost survey (wholehousefan.com, 2025): $1,500–$2,800 installed for 1,500–2,500 sq ft homes; budget $200–500 extra if attic venting is insufficient.

## Key numbers for the article
- Sizing: 2,400 sq ft × 2 CFM = 4,800 CFM minimum.
- Attic exhaust needed: 4,800 / 750 = 6.4 sq ft NFA of upper venting.
- Ridge vent yields ≈ 18 sq in per linear foot (0.125 sq ft/ft) → 6.4 sq ft needs ≈ 51 ft of ridge vent. A typical 2,400 sq ft ranch has ~55–65 ft of ridge: just enough. Two small gable vents (≈1–2 sq ft NFA each): starved.
- Operating cost (original): 400W ECM fan × 5 hrs = 2 kWh/night; at $0.35/kWh = $0.70/night. 3-ton AC ≈ 3.5 kW × 5 hrs = 17.5 kWh = $6.13/night. Savings ≈ $5.43/night; 90 nights ≈ $489/yr; $1,800 installed → ≈3.7-year payback.
- Attic bonus: summer attics run 40–50°F hotter than outside air (QuietCool); purging that heat cuts next-day AC load.
- Winter penalty (DOE): uninsulated ceiling opening; fix = insulated cover (Tamarack sells R-38 motorized doors).

## AI layer
- What exists: thermostat/humidistat/app presets (QuietCool Smart Control), ECM variable-speed (AirScape), Title 24's ducted "smart vent" alternatives.
- The gap (original): nothing mainstream fuses weather forecast + indoor/outdoor temperature differential + humidity + thermal-mass lag to choose run windows automatically. A $30 sensor pair and a forecast API could outperform the $200 hub. The industry sells hardware presets, not algorithms.
- Honest framing: current "smart" is scheduling, not machine learning. Don't oversell.

## Strongest counterargument (full strength)
Roughly a third of U.S. homes lack the diurnal swing this needs — Gulf Coast and South Florida nights stay above 75°F with high humidity, where a whole-house fan just imports moisture. It doesn't dehumidify, doesn't filter (pollen, wildfire smoke — running one during a smoke event is actively dangerous), old units are loud (80+ dB), open windows at night are a security tradeoff, and lightweight construction with no thermal mass holds the cool for hours, not all day. The winter hole-in-the-ceiling penalty is real if you skip the insulated cover. And the backdrafting hazard is not theoretical: NYSERDA's guide treats it as a pre-installation check because exhaust depressurization plus an atmospherically vented water heater is a known CO pathway.

## Limitations
- Savings figures are climate-specific (CA/AZ/NM/CO/NV sweet spot); the 50–90% CEC range spans studies, not one trial.
- Operating-cost math assumes $0.35/kWh and 90 usable nights; humid-climate and coastal readers will see far fewer.
- No independent long-term study of "smart" whole-house-fan controllers vs plain thermostats was found — the AI-gap claim is inference from product specs, not trial data.
- Attic NFA rule (1 sq ft/750 CFM) is manufacturer guidance, not code; code minimums (IRC R806 1:150/1:300) address passive ventilation, not fan exhaust.

## Actionable takeaways (for article)
1. Size at 2–3 CFM per sq ft; then measure your upper attic venting — you need 1 sq ft NFA per 750 CFM or the fan suffocates.
2. Climate test: if your summer nights don't drop at least ~10°F below your indoor target, skip it.
3. Combustion check first: atmospherically vented water heater or furnace + big exhaust fan = backdrafting risk; get the draft test (match/incense at the draft hood with all exhaust running) or go sealed-combustion.
4. Buy the insulated damper/cover (R-38 motorized doors exist); the DOE's "hole in the ceiling" warning is about your heating bill.
5. Don't pay extra for "AI" — no controller on the market does forecast-aware optimization; buy ECM variable speed and set the thermostat yourself.
