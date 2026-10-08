# Research: Attic Insulation R-Value Temperature Derating — The 75°F Label vs. the 140°F Attic

## Core Angle
Every bag of attic insulation in America carries an R-value tested at a mean temperature of 75°F, in a steady-state lab, with a 50°F temperature difference across the sample. That is federal law (FTC 16 CFR 460). But on a summer afternoon, a dark-shingle attic in the Sun Belt hits 130-150°F air and 150-165°F roof deck surface. At those temperatures, the R-value of fiberglass insulation degrades 10-20% (LBNL/DOE-2 modeling, ACEEE 1996). The building codes (2021 IECC: R-49 ceilings in zones 2-3, R-60 in zones 4-8), the HERS ratings, and the energy models behind them all assume the 75°F number, year-round, in every climate.

Original calculation for this article: using ORNL's measured temperature coefficient for low-density mineral-fiber batts (~0.12 R/inch lost per 10°F above the 75°F test mean), an R-49 batt at peak afternoon attic conditions (deck 150°F, ceiling 78°F, mean 114°F) performs at roughly R-42 — a 14% derate at the exact hour the AC is working hardest. Nobody in the sales chain discloses this.

The honest twist: the dollar impact of the derate alone is small (~2-4% of annual cooling load per LBNL), but it lands on peak-demand hours when utilities charge the most, and it is dwarfed by installation defects (gaps, compression, wind-washing) that AI thermal audits (Lamarr.AI, Kestrix) now find routinely. The takeaway hierarchy: fix the gaps first, then attack attic temperature itself (reflective roofing, radiant barrier), and only then add more fiberglass to a hot attic.

## Kill Test
Does this help someone building or buying a home? **YES** — directly. A homeowner or builder learns: (1) the R-value on the bag is a 75°F lab number, (2) their attic runs 60-75°F hotter at peak, (3) the quantified derate (~14% for R-49 fiberglass at peak), (4) that cellulose/mineral wool and radiant barriers lose less to heat than fiberglass, (5) that AI thermal audits find the installation gaps that matter more than the derate, (6) what to actually do in what order.

## Primary Sources

### 1. FTC R-Value Rule — 16 CFR Part 460 (federal requirement)
- Mass insulation R-value tests MUST be done at a mean temperature of 75°F with a 50°F ± 10°F temperature difference (ASTM C177, C518, C1363, or C1114).
- IECC requires insulation R-values be determined per the FTC rule.
- Source: https://www.govinfo.gov/content/pkg/CFR-2025-title16-vol1/pdf/CFR-2025-title16-vol1-sec460-3.pdf

### 2. LBNL / ACEEE 1996 — Levinson, Akbari, Gartland: "Impact of the Temperature Dependency of Fiberglass Insulation R-Value on Cooling Energy Use in Buildings"
- "In summer, the mean temperature of roof insulation can rise significantly above room temperature, lowering the insulation's thermal resistance by 10% to 20%."
- Building energy models (DOE-2) used a constant room-temperature R-value; the authors built a temperature-dependent table into DOE-2 and simulated a monitored school bungalow plus a typical office building in five climates.
- Office building: the R-value decrease led to a 2% to 4% increase in annual cooling energy load.
- Source: http://aceee.org/files/proceedings/1996/data/papers/SS96_Panel10_Paper11.pdf and https://eta.lbl.gov/publications/impact-temperature-dependency

### 3. ORNL 1977 experimental study — "Experimental study of thermal resistance values (R-values) of low-density mineral-fiber building insulation batts" (OSTI)
- Apparent thermal conductivity increases (R decreases) with mean temperature; measured coefficient: R-value per inch increases approximately 0.12 units for every 10°F decrease in mean temperature (invertible for increases).
- Temperature difference across the sample (6-106°F tested) changed apparent conductivity <2% — it is the MEAN temperature that matters, not the delta.
- Source: https://www.osti.gov/servlets/purl/5524684

### 4. ORNL loose-fill study — "Thermal Resistance of Loose-Fill Fiberglass Insulation in Spaces Heated from Below"
- At higher mean temperatures, increased radiative transfer plus higher air conductivity erode R-value; corrections of 5-18% to relate hot-test results back to the 75°F standard.
- Source: http://web.ornl.gov/sci/buildings/conf-archive/1982%20B2%20papers/041.pdf

### 5. FSEC — Parker & Sherwin 1998: "Monitored summer peak attic air temperatures in Florida residences" (21 homes)
- Measured summer attic air temperatures across 21 Florida homes with varied roof types, colors, ventilation; supports ASHRAE duct-conductance calculations.
- Companion work: peak attic air ~130°F in the FSEC duct study; roof surface temps over 150°F; white/reflective roof cut plenum temps 25°F+ and cooling energy 33% in a classroom retrofit.
- Sources: https://www.osti.gov/biblio/687677 and https://www.ii-img.com/cmrs-img/media/FSEC-CR-1336-02.pdf

### 6. ORNL 2013 roof study (Miller, Wilson, Karagiozis) — asphalt shingle surface peaks 165.6°F; dark shakes drive >2x the deck heat flow of light shakes
- Source: https://web.ornl.gov/sci/buildings/conf-archive/2013 B12 papers/162_Kriner.pdf

### 7. BuildingGreen — cellulose vs. fiberglass deep dive (citing Univ. of Illinois + ORNL studies)
- Loose-fill fiberglass loses up to 50% of R-value at very cold temperatures; loose-fill cellulose and fiberglass BATT insulation do not (different mechanism — convection loops in low-density loose fill).
- Cellulose-insulated test building used 26% less energy than fiberglass-insulated identical building (Univ. of Colorado).
- The extra heating cost from loose-fill fiberglass convection in extreme cold: only ~2.4¢/ft² of attic at R-19, 1.4¢/ft² at R-38 — small dollars even in North Dakota.
- Source: https://www.buildinggreen.com/feature/cellulose-insulation-depth-look-pros-and-cons

### 8. EIA RECS 2020 — air conditioning ≈ 12% of U.S. home energy expenditures; 88% of households use AC
- Sources: https://www.eia.gov/todayinenergy/detail.php?id=52558 and https://www.eia.gov/TODAYINENERGY/detail.php?id=56380

### 9. 2021 IECC Table R402.1.3 — ceiling (attic) minimum R-values: zones 0-1: R-30; zones 2-3: R-49; zones 4-8: R-60. Attic insulation may drop one step (R-49→R-38, R-60→R-49) where uncompressed insulation extends over top plates at eaves.
- Source: https://codes.iccsafe.org/content/IECC2021P2/chapter-4-re-residential-energy-efficiency

### 10. AI thermal audit tools
- **Lamarr.AI** (MIT spinoff): drones + thermal/visible cameras + AI, classifies anomalies ("missing insulation" vs. infiltration vs. water intrusion), maps to 3D model, ROI per retrofit. Source: https://news.mit.edu/2025/lamarrai-giving-buildings-mri-to-make-them-more-energy-efficient-resilient-1107
- **Kestrix** (UK): drone thermal imaging + AI heat maps at neighborhood scale; Peabody housing pilot: ~£520/home/year bill savings, >1 tonne CO₂. Source: https://www.energylivenews.com/2026/09/23/net-hero-podcast-is-your-home-leaking-hundreds-of-pounds-a-year-in-heat/

## Original Calculation (ours)
Inputs: FTC test mean 75°F; ORNL coefficient 0.12 R/inch per 10°F; peak attic: deck 150°F (FSEC/ORNL measured), ceiling 78°F → mean insulation temp 114°F; Δ = 39°F → derate = 0.12 × 3.9 = 0.47 R/inch.
- R-49 batt (≈15" at ~R-3.27/in): loses ≈ 7.0 → effective R-42 at peak (14% below label).
- R-38 batt (≈11.9" at ~R-3.19/in): loses ≈ 5.6 → effective R-32.4 at peak (15% below label).
- Sanity check: lands inside LBNL's independently modeled 10-20% seasonal derate band.
Dollar translation: AC ≈ 12% of home energy spend (~$2,200/yr national average → ~$264 cooling); LBNL's 2-4% load increase ≈ $5-$11/year from the derate alone. Small — which is the honest counterweight, and why the article's real advice is gaps first, attic temperature second, more fiberglass last.

## Skepticism / Counterargument (full strength)
The derate is real but the dollars are small: LBNL's own modeling says 2-4% of annual cooling load, and EIA puts cooling at 12% of home energy spend — we're talking single-digit to low-double-digit dollars per year for the derate itself. Installation defects (compressed batts, gaps at top plates, wind-washing at eaves) routinely cost 20-50% of performance and dominate the derate completely. The FTC's 75°F test condition is not a conspiracy — it is a standardization compromise: every material needs a common yardstick, and 75°F is roughly the annual mean for much of the housing stock (ORNL's own year-long roof study found ~75°F annual mean). Polyiso foam has the mirror-image problem in winter (cold-temperature derating via LTTR). Radiant barrier and reflective-roof benefits decay if dust accumulates. None of this means "insulation is a scam" — it means the label is a lab number and hot attics deserve hot-climate strategies.

## Limitations
- ORNL coefficient (0.12 R/inch per 10°F) is from a 1977 study of low-density mineral-fiber batts; modern high-density batts and loose-fill products have their own coefficients; loose-fill fiberglass additionally suffers convection-loop losses at temperature extremes (different mechanism, bigger in cold than heat).
- Peak-day calculation is steady-state applied to a transient peak; the time-averaged seasonal derate is the LBNL 10-20% band, and mean attic temps are lower than peak (FSEC 21-home data).
- Radiant barrier / reflective roof numbers are from specific FSEC test configurations; dust, ventilation, and roof geometry change results.
- Lamarr.AI/Kestrix capabilities are per company/MIT reporting, not independently audited for residential single-family use at scale.
- Dollar math uses national averages (RECS 2020); Sun Belt homes with $400 summer electric bills feel the derate more in absolute dollars.
