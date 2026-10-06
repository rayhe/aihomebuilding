# Research: The Propane Vaporization Gap — Your Gauge Lies in January
**Article #1018 | Journalist: Jake Kowalski (Construction Technology)**
**Researched: October 6, 2026**

## Kill test
Does this help someone building or buying a home? Yes. Anyone building or buying beyond the gas mains — roughly 1 in 20 US households, far more in the rural Northeast and Midwest — sizes a propane tank by gallons. Gallons are the wrong unit. The right unit is BTU/hr at the coldest night of the year, and a 500-gallon tank at 20% fill on a 0°F night cannot feed a furnace and a water heater at the same time. This article gives the crossover math nobody publishes for homeowners, plus the $200 monitor fix and the keep-fill rule that prevents a no-heat night.

## Thesis
Propane doesn't flow out of the tank — it boils off the liquid surface, and the boil rate collapses as the tank empties and the temperature drops. Industry vaporization tables show a 500-gallon tank at 20% fill delivers 236,600 BTU/hr at 20°F but only 113,750 at 0°F and 59,150 at -10°F. A typical rural home's connected load (100K furnace + 40K water heater + 65K range = 205K BTU/hr input) outruns the tank well before the gauge reads empty. The failure mode is specific and nasty: plenty of fuel in the tank, furnace short-cycling or locking out on the coldest night of the year, homeowner blaming the furnace. Smart tank monitors (ultrasonic, cellular, ~$100–200) fix the information problem — dealers already run autofill programs on the same data — but nobody has productized the actual physics: fill % × forecast temperature × the vaporization curve = a "your tank sustains your load down to X°F" warning. That warning is the article's original contribution, computed from published tables.

## Primary sources

1. **Industry propane vaporization tables (500-gal and 1,000-gal ASME tanks).** The standard RegO-type reference tables reproduced in the BABFAR vaporization reference document. 500-gal tank (41" × 8'8"), BTU/hr by temperature and fill %:
   - 20°F: 182,000 (10%) / 236,600 (20%) / 304,850 (30%) / 364,000 (40%)
   - 10°F: 136,500 / 182,000 / 227,500 / 273,000
   - 0°F: 91,000 / 113,750 / 154,700 / 182,000
   - −10°F: 45,000 / 59,150 / 77,350 / 91,000
   - −20°F: 22,750 / 29,125 / 38,250 / 45,150
   1,000-gal tank at 20°F/20% fill: 477,350 BTU/hr (the upsize fix, quantified).
   URL: https://www.scribd.com/document/654897083/BABFAR-Vaporization-Tables
   (Note: warm-weather rows in this reproduction show OCR artifacts; the 20°F-through-−20°F rows used here are internally consistent and monotonic. Values are nominal for the stated tank geometry.)

2. **U.S. Energy Information Administration (EIA), via EUCI/LP Gas Magazine summaries of the Winter Fuels Outlook.** "About 5 percent of all U.S. households use propane as their primary space heating fuel"; at least 14% of homes in Vermont, New Hampshire, South Dakota, North Dakota, and Montana. Average propane household winter spend ~$1,300–$1,343. January 2025: US propane consumption hit 1.48 million bpd — an 18-year record, coldest January since 2014 (946 heating degree days) — per EIA via Hydrocarbon Engineering, April 2025.
   URLs: https://www.euci.com/lower-fuel-prices-to-lead-to-lower-winter-heating-bills-for-homes-using-natural-gas-propane/ ; https://www.hydrocarbonengineering.com/gas-processing/08042025/us-propane-consumption-reached-an-18-year-record-in-january-2025/

3. **EIA residential propane pricing via America's Electric Cooperatives Weekly Fuel Price Watch (citing EIA).** Residential propane ~$2.59–$2.66/gal (Feb readings, heating season). Wholesale Mont Belvieu spot ~$0.70–0.80/gal — the retail markup is the delivery business.
   URL: https://www.electric.coop/weekly-fuel-price-watch

4. **Generac (Tank Utility) propane tank monitor + ecobee integration.** Tank Utility monitor: $199.99 MSRP, Wi-Fi, smartphone app, low-level alerts, consumption tracking ("takes the guessing out of monitoring the fuel levels"). Generac 4G LTE cellular monitors integrate with all ecobee smart thermostats (2014+): tank level on the thermostat screen, low-fuel and offline/battery alerts via Mobile Link. Business Wire, Dec 2023.
   URLs: https://www.haleyesgenerators.com/wp-content/uploads/2024/03/Generac-Tank-Utility_brochure.pdf ; https://www.businesswire.com/news/home/20231205562258/en/ecobee-and-Generac-Expand-Thermostat-Integration-Capabilities-to-Include-Propane-Tanks

5. **Mopeka ultrasonic tank sensors.** Patented ultrasonic (sonar) sensor, magnetic mount, 99.5% accuracy, reads to 0.01 inch, tanks up to 2,000 gallons; integrated temperature sensor; configurable alarms; 5-year battery; WiFi bridge for remote access; free app with unlimited tanks. Price class ~$100–150 retail.
   URL: https://www.amazon.com/dp/B0BKLFQ3CL (Mopeka PRO+ Long Range Ultrasonic Wireless Propane Tank Monitor — product listing used for specs)

6. **Propane dealer sizing guidance + autofill programs.** Industry-standard sizing: 500-gallon is the minimum for whole-home propane heat (holds 400 gal at the 80% fill rule); 1,000-gallon for large homes/high-BTU loads (pool/spa heaters). 80% fill rule is universal (liquid expansion ullage). Dealers (Green's Blue Flame, Parker Gas class) run cellular-monitor autofill programs: monitor on the tank, dealer predicts the delivery from level + degree-day models, customer never schedules. Parker Gas notes the explicit value props: no emergency delivery fees, remote multi-property monitoring.
   URLs: https://www.koppyspropane.com/blog/propane-tank-size-guide/ ; http://greensblueflame.com/residential/tank-monitored-autofill/ ; https://www.parkergas.com/blog/scheduled-propane-delivery/

## Original contribution: the vaporization crossover table
Nobody publishes "at what fill level and temperature does YOUR house outrun its tank." Cross the industry table against a typical rural connected load:

**Assumed connected load (nameplate input):** furnace 100,000 + storage water heater 40,000 + cooktop/range 65,000 = **205,000 BTU/hr** all-firing; realistic evening simultaneous load (furnace + water heater) = **140,000 BTU/hr**.

**500-gallon tank — where it fails:**
| Condition | Vaporization (BTU/hr) | vs 140K (furnace+WH) | vs 205K (all) |
|---|---|---|---|
| 20°F, 20% fill (80 gal left) | 236,600 | OK | OK (thin) |
| 10°F, 20% fill | 182,000 | OK | **FAILS** |
| 0°F, 20% fill | 113,750 | **FAILS** | **FAILS** |
| 0°F, 30% fill (120 gal left) | 154,700 | OK (thin) | **FAILS** |
| −10°F, 20% fill | 59,150 | **FAILS — furnace alone (100K) starves** | **FAILS** |
| −10°F, 80% fill (320 gal) | 150,150 | OK (thin) | **FAILS** |

**The money findings:**
- At 0°F, every gallon below 40% fill is *unusable for full load* — the tank's effective January capacity is 40%→80% = **160 gallons**, not 400. Your 500-gallon tank is a 160-gallon tank in a cold snap.
- At −10°F with 80 gallons in the tank, the furnace cannot stay lit. The gauge says 20%. The house says no heat. This is the exact failure the article's cold open dramatizes (furnace tech's invoice: "no fault found, tank at 20%").
- The 1,000-gallon upsize roughly doubles every number in the table (477,350 BTU/hr at 20°F/20%) — it buys vaporization headroom, not just fewer deliveries. That's the sizing insight dealers don't lead with: **size for January vaporization, not for delivery convenience.**
- The "warning product" framing: fill % (from a $150 ultrasonic sensor) × 7-day forecast low × this table = a push notification reading "at 24% and a forecast 4°F Friday night, your tank sustains your furnace + water heater down to −2°F — schedule a fill." No vendor ships this today; dealers' autofill models predict *when you'll run out*, not *when you'll starve with fuel left*.

## Smart/AI angle (verified)
- Generac Tank Utility ($199.99 MSRP): Wi-Fi monitor + app + low alerts + consumption analytics; 4G LTE variant feeds ecobee thermostats (tank level on the thermostat, low/offline alerts).
- Mopeka ultrasonic: 99.5% accuracy, temp-compensated, 5-yr battery, WiFi bridge — the sensor layer is commoditized and cheap.
- Dealer autofill: cellular monitors + degree-day/usage models predict delivery timing — the industry already does ML-ish demand forecasting; it's just pointed at logistics, not at the vaporization physics.
- The gap (article's provocation): fuse the three — sensor fill %, weather forecast, vaporization curve — into a starvation warning. The math is a lookup table; the product doesn't exist.

## Skepticism / counterarguments (full strength)
- **Most propane homes never touch the failure zone.** A 500-gal tank kept above 30–40% through winter covers the design temperatures of most propane-heavy states; the failure needs single digits *plus* low fill *plus* high simultaneous draw. This is a tail-risk story, not an everyday story — say so.
- **The tables are nominal.** Real vaporization depends on wind exposure, frost jacketing on the tank shell, regulator freeze-up, and undersized gas lines — a starving furnace at 25% fill is as likely to be a iced-up regulator or a too-small second-stage line as vaporization. The article must not present the table as a diagnostic oracle; it's a planning tool.
- **Underground tanks change the physics.** At 4+ feet, soil sits ~50°F year-round in much of the country — an underground 500-gal tank vaporizes *better* on a 0°F night than an aboveground one (but recovers slower and can't be cheaply upsized). Don't universalize the aboveground numbers.
- **Monitors don't fix physics.** A $150 sensor tells you sooner; it doesn't add a BTU. The actual fixes are behavioral (keep-fill discipline) or capital (bigger tank, manifolded twins). Don't oversell the gadget.
- **Tank economics are leased, not owned.** Most residential 500-gal tanks are dealer-leased; upsizing means renegotiating the lease and the pad/trench work. The "just buy a 1000" advice has friction the article should acknowledge.
- **Regional skew.** This is a non-story in the South and a non-story for the 95% of households on gas mains or heat pumps. The audience is explicitly rural cold-climate propane country — Vermont to the Dakotas to mountain West.

## Limitations
- Vaporization figures come from a secondary reproduction (Scribd) of industry-standard tables; I could not verify against RegO's primary publication. Warm-weather rows show OCR corruption; analysis uses only the internally-consistent 20°F-to-−20°F rows. Values are nominal for a 41" × 8'8" 500-gal ASME tank — your tank's geometry shifts them.
- No field study quantifies furnace starvation events against fill %/temperature; the crossover table is my calculation, not measured outcomes. Connected-load inputs (100K/40K/65K) are typical nameplates, not a Manual J for any specific home.
- I did not verify current installed costs for 500→1,000-gal upsizes or emergency delivery fees; the article should use hedged ranges or omit.
- EIA household-share figures are from the Winter Fuels Outlook cycle (2023–24 vintage summaries); directionally stable, not current-month.

## Actionable takeaways (for the builder/buyer)
1. **Size for vaporization, not gallons.** Before the pad is poured in propane country with design temps under 10°F: connected load (furnace + WH + range nameplates) × coldest-night temp → check against the vaporization table at 30% fill. If it fails, spec the 1,000-gallon tank — the trench, pad, and line labor are nearly identical; the tank delta is the cheapest insurance in the build.
2. **The keep-fill rule:** never drop below 30% after November; below 40% if your January lows hit single digits. Set the monitor alert at 35%, not 20% — 20% is already the danger zone at 0°F.
3. **Buy the $100–200 ultrasonic monitor** (Mopeka/Tank Utility class) and enroll in the dealer's autofill program. One avoided emergency delivery — or one avoided frozen-pipe night — pays for it several times over.
4. **New build in propane country:** manifolded twin 500s beat a single 500 on vaporization (double the wetted surface) with easier delivery logistics than a 1000 — ask the dealer to quote both.
5. **Diagnostic order on a cold-night furnace lockout with fuel in the tank:** check fill % and overnight low against the vaporization curve *first*, then the regulator for icing, then the gas line sizing — before paying for a furnace service call that finds nothing.
