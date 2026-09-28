# Research: South Overhang Depth vs. Sun Angle — Nobody Sized Yours

**Slug:** `ai-overhang-depth-sun-angle-shading-math-2026`
**Journalist:** Elena Vasquez (Architecture & Design)
**Thesis:** The 12-inch south overhang most American homes carry was never engineered. It is a carpentry convention — roughly the width of a fascia board plus a margin — that either under-shades, over-shades, or accidentally works depending on latitude. A 10-minute sun-angle calculation shows it never fully shades a 54-inch window at solar noon, at any date, in any major US metro.
**Kill test:** Helps someone building or buying a home? Yes — overhang depth is frozen at framing. A buyer of a spec home with deep south glass can ask for 24-inch eaves before trusses are ordered, or size an awning add-on afterward. A builder in Seattle can stop specifying a detail that does half the job it claims.

## The math (original calculation, this article)

Geometry: horizontal overhang of depth D, its underside level with the window head, window of height H. At solar noon, shadow depth on the window = D × tan(solar altitude). Full shade ⇔ D ≥ H / tan(α_noon). Full winter sun ⇔ D ≤ H / tan(α_winter).

H = 54 in (typical 3-0 × 4-6 double-hung picture window).

| City (lat) | Noon sun, Jun 21 | Noon sun, Dec 21 | D for full summer shade | D for full winter sun | 12-in: summer-noon shade | 24-in: summer-noon shade | 24-in: winter-noon penalty |
|---|---|---|---|---|---|---|---|
| Seattle 47.6° | 65.8° | 19.0° | 24.2 in | 157.2 in | 50% | 99% | 15% of window shadowed |
| Chicago 41.7° | 71.7° | 24.9° | 17.8 in | 116.5 in | 67% | 100% | 21% |
| Bay Area 37.5° | 75.9° | 29.1° | 13.5 in | 97.2 in | 89% | 100% | 25% |
| Phoenix 33.4° | 80.0° | 33.2° | 9.5 in | 82.6 in | 100% | 100% | 29% |
| Miami 25.8° | 87.6° | 40.8° | 2.2 in | 62.6 in | 100% | 100% | 38% |

Findings:
- **A 12-inch overhang never fully shades a 54-inch south window at solar noon — not on any day of the year, in any of these cities.** In the Bay Area it would require solar declination ≥ 24.97°, and the earth maxes out at 23.44°. The gap is small there (89% at solstice) but real.
- Seattle is the embarrassment case: the standard 12-inch eave covers just half the glass at noon on the longest day. Chicago: two-thirds. The convention was born at southern latitudes and airlifted north unchanged.
- Miami flips the problem: the summer sun is nearly overhead, so 2.2 inches would do. The 24-inch overhang that Seattle needs would steal 38% of Miami's December noon sun — a real penalty in a cooling-dominated climate where the shade is needed year-round but the low-angle winter sun is the free light.
- 24-inch overhang, Bay Area: full noon shade runs Apr 27–Aug 15 (solar declination ≥ 13.5°). That date window is the actual "shading season," and it is knowable per latitude with the same one-line formula.
- No fixed overhang does both jobs: the full-shade summer depth and full-sun winter depth are irreconcilable (e.g., 13.5 in vs 97.2 in at 37.5°). Every fixed eave is a compromise; the honest question is which season you are designing against.

## Primary sources (5)

1. **Virginia Tech Solar Overhang Dimensions manual** (vept.energy.vt.edu) — station-by-station shading geometry; the "108° − latitude / 71° − latitude" pair that balances heating-season gain against cooling-season exclusion; typical window fully shaded at noon May 12–Aug 2, unshaded Nov 17–Jan 25. Primary, institutional.
   https://vept.energy.vt.edu/content/dam/vept_energy_vt_edu/Solar%20Overhang%20Dimensions.pdf
2. **AAMA TIR-A16-19** (via Building Enclosure, buildingenclosureonline.com) — the industry equation for sizing shading devices: h = [D × tan(solar altitude)] / [cos(solar azimuth − window azimuth)]. Notes that "no single configuration is suitable for all locations in the U.S."
   https://www.buildingenclosureonline.com/articles/88439-integrating-shading-devices-with-the-building-envelope
3. **DOE Zero Energy Ready Home National Program Requirements, Rev. 07** (energy.gov) — passive-solar glazing exempt from SHGC/U-factor rules only when facing within 45° of true south AND directly coupled to ≥ 3 ft² of thermal mass (heat capacity > 20 btu/ft³·°F) per ft² of fenestration. Federal source.
   https://www.energy.gov/sites/default/files/2019/04/f62/DOE%20ZERH%20Specs%20Rev07.pdf
4. **MDPI Buildings 16(10), 2026 — "Dynamic Optimization Model for Passive Solar Shading"** — peer-reviewed; at φ=18.5°, optimized fixed horizontal shading depth 1.85 m over a 2.4 m window yields shading factor 0.987 at summer-solstice noon vs 0.124 at winter-solstice noon; transmitted intensity 32.46 W/m² summer vs 458.73 W/m² winter. The optimized ratio D/H ≈ 0.77, not 0.22 (12/54).
   https://www.mdpi.com/2075-5309/16/10/1887
5. **Olgyay, *Design With Climate* (Princeton, 1963; via civilengineerkey.com)** — worked trigonometry for the optimum overhang that admits January sun and blocks summer sun; the classic H(1.155) derivation. Scholarly primary.
   https://civilengineerkey.com/solar-control-and-shading/

## Skepticism / counterarguments

- The formula assumes the overhang starts at the window head. Real roofs do not: headers, frieze boards, and sloped rakes put the eave 12–30 inches above the glass, which shrinks the effective shadow. Real geometry is always worse than this article's numbers.
- Solar noon is one moment. Morning and afternoon sun arrives at an azimuth, slipping past the ends of the overhang — the AAMA equation's cos(azimuth) term is the part builders forget. Trees as side fins (Olgyay) address this, not deeper eaves.
- East and west windows get nothing from overhangs; south-only math is a partial answer and should be labeled as such.
- Glass does half the job now: modern low-SHGC glazing on east/west and high-SHGC south glass with a real overhang (the EREC/DOE guidance) can outperform a deeper eave alone. But note the market failure: low-U windows usually ship with low SHGC — the exact wrong glass for a passive-solar south wall, and the high-solar-gain variant is genuinely hard to buy (GreenBuildingAdvisor, "the ARRA 30-30 provision" history).
- Climate change stretches the cooling season at both ends; a geometry tuned to 1981–2010 sun dates under-shades August and September. The VT manual itself notes southern stations needed modified, longer shading geometry.
- Structural reality: 24–30 inch eaves need lookouts, ladder framing, and wind-uplift detailing (AAMA 514 test standard); in hurricane zones the deeper eave is a wind liability. "Just make it deeper" has a cost and a code dimension.

## Actionable takeaways

- Building new with south glass ≥ 20% of the south wall: run D = H / tan(α) for your latitude's summer solstice before trusses are ordered. At 45°+ latitude, 12 inches is demonstrably inadequate; 18–24 inches is the honest range, with the winter-sun penalty in the table above as the trade-off you're signing.
- Buying a spec home: ask the builder what sun angle the eave was designed for. A blank look is your answer. The cost delta of deeper eaves at framing is trivial next to the cooling load difference over 30 years.
- Retrofit: a fixed aluminum awning sized by the same formula (or exterior roller shade, per AAMA TIR-A16-19) gets you the same physics without touching the roof.

## Limitations

- Assumes a true-south facade; results shift for orientations off south (AAMA's cos term; the DOE 45° exemption band).
- Uses clear-sky noon altitude only; cloudy climates get less benefit from geometry than the numbers suggest.
- Ignores glass SHGC in the table (deliberately — the table is about geometry; glass multiplies the effect).
- Sun dates computed from declination formula; actual overheated period depends on local climate, not just sun.
