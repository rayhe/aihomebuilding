# Research: Insulation R-Value Temperature Gap
## Journalist: Priya Greenwood (Sustainability & Green Building)
## Date: April 28, 2026

## Core Thesis
Insulation R-values printed on product labels are tested under ASTM C518 at a mean temperature of 75°F (warm side 95°F, cold side 55°F). Real-world attics, walls, and roofs experience conditions far outside this range — summer attics hitting 140-160°F, winter attic air at 0°F or below in cold climates. Several insulation types deliver significantly less thermal resistance under real conditions than their label claims. AI-powered energy monitoring tools using meter data and sensor networks can now detect this gap without tearing open walls.

## Key Sources

### 1. ASTM C518 Testing Standard
- Standard test method for steady-state thermal transmission properties via heat flow meter
- FTC's "R-Value Rule" requires manufacturers to report R-values at 75°F mean temperature
- Warm side plate: 95°F, cold side plate: 55°F
- This is a single-point measurement — does NOT represent a range of real conditions
- Source: ASTM International, FTC 16 CFR Part 460

### 2. Oak Ridge National Laboratory Study (Wilkes & Childs, early 1990s)
- "Thermal Performance of Fiberglass and Cellulose Attic Insulations"
- Tested loose-fill fiberglass, fiberglass batts, and loose-fill cellulose
- **Loose-fill fiberglass lost 35-50% of R-value** at temperature differences of 70-76°F
- Loss began at ~32°F temperature difference
- Cause: convective air loops within the low-density insulation
- Fiberglass batts and cellulose did NOT show the problem
- Fix: covering layer (polyethylene film + blanket or R-19 batt) eliminated convection
- **Caveat**: Owens Corning and Johns Manville published technical bulletins claiming modern products have been reformulated. Independent verification is limited.
- Source: ORNL report, Green Building Advisor (Allison Bailes analysis, 2019)

### 3. Polyisocyanurate (Polyiso) Thermal Drift
- Blowing agents (historically HCFCs, now HFOs/hydrocarbons) gradually diffuse out of closed cells
- Replaced by atmospheric air, which has lower insulating capacity
- Initial R-value: ~R-7/inch; LTTR (Long-Term Thermal Resistance): ~R-6-6.5/inch
- Loss: 10-15% over first 5-10 years
- **Cold-temperature underperformance**: At mean temperatures below 40°F, polyiso R-value drops further — from labeled R-6.5/inch to R-4.5-5/inch
- This is why several building scientists recommend NOT using polyiso as the primary exterior insulation in Climate Zones 6-7
- Martin Holladay (GBA) documented this extensively
- Source: Ecohome thermal drift guide, multiple GBA articles

### 4. XPS (Extruded Polystyrene) Thermal Drift
- XPS also experiences blowing agent loss over time
- Rated at R-5/inch new; degrades toward R-4.2-4.5/inch as blowing agents escape
- The blowing agents (historically HFCs with very high global warming potential ~1,430x CO2) have been transitioning to lower-GWP alternatives
- EPS (expanded polystyrene) does NOT suffer thermal drift — it's blown with air/pentane, already at stable state
- Source: Ecohome, building science literature

### 5. In-Situ R-Value Measurement Research
- MDPI Sensors (2020): "A High-Resolution Open Source Platform for Building Envelope Thermal Performance Assessment Using a Wireless Sensor Network"
- MDPI Energies (2023): "Estimating In-Situ R-Value of Highly Insulated Building Walls Based on the Measurement of Temperature and Heat Flux Inside the Wall"
- MDPI Buildings (2021): "Active Thermal Method Applied to the In Situ Characterization of Insulating Materials in a Wall"
- These are academic research — not yet consumer products
- Method: heat flux sensors + temperature sensors on both sides of wall → calculate actual R-value

### 6. Fraunhofer USA / DOE Remote Energy Assessment
- "Physics-Based Interval Data Models to Automate and Scale Home Energy Performance Evaluations"
- DOE funding: $1,050,000 (2016-2019)
- Partners: Eversource Energy, Holyoke Gas & Electric, National Grid
- Uses smart thermostat data + interval electricity/gas meter data to remotely identify homes with significant energy savings opportunities
- Can identify top 20% of homes with greatest savings potential
- Reduces unnecessary on-site energy audits
- Validates post-retrofit performance
- PI: Dr. Michael Zeifman and Dr. Kurt Roth, Fraunhofer USA

### 7. Nature Communications Heat Pump Field Study (2025)
- Brudermueller et al., "Estimation of energy efficiency of heat pumps in residential buildings using real operation data"
- 1,023 heat pumps across Central Europe, monitored over 2 years
- Found 17% of air-source heat pumps don't meet efficiency standards
- ~10% oversized, ~1% undersized
- Demonstrates the value of real operational data vs. lab/rated specs

## Original Contribution: Climate Zone R-Value Gap Calculation

### The math nobody's published:

**Example: Attic in Climate Zone 5 (Chicago)**
- Code minimum: R-49 loose-fill fiberglass (2021 IECC)
- Lab test: 75°F mean temperature
- January reality: Indoor 70°F, attic air 0°F → temperature difference 70°F
- ORNL data: 35-50% R-value loss at this delta for vintage loose-fill fiberglass
- If modern products still lose even 15-20% (conservative estimate accounting for product improvements): effective R-49 becomes R-39-42
- That's the equivalent of being one code cycle behind (R-38 was the 2009 IECC minimum)

**Example: Exterior Wall with Polyiso CI in Climate Zone 6 (Minneapolis)**
- Typical assembly: 2x6 wall with R-20 cavity + R-10 continuous polyiso exterior (2 layers of 1")
- Lab-rated total: ~R-30
- January reality: Outdoor -10°F, indoor 70°F. Mean temperature through polyiso layer: ~10-30°F
- At 15°F mean: polyiso delivers ~R-4.5/inch instead of R-6.5/inch
- Effective polyiso contribution: R-9 instead of R-13 (for 2")
- Effective total wall R-value: ~R-26 instead of R-30 → 13% thermal resistance reduction exactly when heating demand peaks

**Example: Hot Climate Attic (Climate Zone 2, Houston)**
- R-38 fiberglass attic (code minimum)
- Summer attic temperatures: 140-160°F
- The fiberglass convection problem is cold-side, not hot-side
- But radiant barrier effectiveness changes with dust accumulation
- The bigger hot-climate issue: spray foam on underside of roof deck undergoes thermal cycling stress

## Actionable Takeaways (Required per STORY_GUIDE.md)

1. **If you're in Climate Zones 5-7 and your builder spec'd polyiso continuous insulation**: Ask what the LTTR (Long-Term Thermal Resistance) value is, not the initial R-value. Better yet: specify EPS or mineral wool for exterior CI in cold climates — both are temperature-stable.

2. **If you have loose-fill fiberglass in your attic**: The ORNL convection problem is real for older products. A layer of blown cellulose on top (~R-10 worth) can act as a convection cap while adding R-value. Cost: ~$0.50-0.80/sq ft installed.

3. **For new construction**: Demand the LTTR, not the initial R-value, in insulation specs. Some manufacturers now publish LTTR — it's 10-15% lower than the headline number for foam products.

4. **For energy modeling**: If your builder's energy model used label R-values, the modeled energy savings are optimistic. The Fraunhofer/DOE approach (meter data + physics models) gives you what the house actually does.

5. **For homeowners with smart thermostats and smart meters**: Tools like Home Energy Score and emerging AI platforms can compare your actual energy use to your home's theoretical performance. A significant gap might indicate insulation underperformance.

## Strongest Counterargument
Most insulation, even if derated, still dramatically outperforms an uninsulated assembly. A wall delivering R-26 instead of R-30 is still 86% as effective — the marginal energy cost is real but not catastrophic. The bigger savings come from air sealing, which has zero temperature-dependent degradation. Building scientists like Allison Bailes argue that obsessing over insulation R-value while ignoring air leakage is missing the forest for the trees.

## Limitations
- The ORNL study is from the early 1990s. Modern loose-fill fiberglass has been reformulated, but independent testing under the same extreme conditions is limited.
- The polyiso cold-temperature data comes primarily from laboratory measurements, not large-scale field studies of residential walls.
- In-situ R-value measurement technology is still academic/research-stage. No consumer-grade products exist.
- The Fraunhofer DOE project ended in 2019 — it's unclear if the technology has been commercialized.
- My R-value gap calculations use simplifying assumptions about mean temperatures through insulation layers. Real heat flow through multi-layer assemblies is more complex.

## Kill Test
Does this help someone building or buying a home? YES.
- Builder deciding between polyiso and mineral wool for exterior CI in a cold climate: direct product selection impact
- Homeowner wondering why their "well-insulated" home has high heating bills: possible explanation
- Energy auditor: understanding that label R-values are ceiling, not floor, of performance
- Code official: implications for energy code compliance verification
