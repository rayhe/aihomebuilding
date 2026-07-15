# Research: Tight Home Ventilation Design Gap

## Angle
Your builder is required to make your house airtight. The 2024 IECC requires blower door testing at 3 ACH50 or less in most climate zones. But the tighter you build, the more you need engineered mechanical ventilation. Most residential builders install a bath fan and check a box. Nobody is designing the ventilation system. The health consequences are measurable, and AI tools that could help don't exist yet.

## Journalist
Priya Greenwood — sustainability, green building, health/energy intersection

## Key Data Points

### Building Envelope Tightness Standards
- 2024 IECC: 3 ACH50 in Climate Zones 3-8 (most of the US). Tighter than the 2009 IECC's 7 ACH50.
- Passive House: 0.6 ACH50
- Energy Star Version 3.1: 3 ACH50 (CZ 3-8), 5 ACH50 (CZ 1-2)
- As buildings get tighter, natural infiltration (accidental air exchange through cracks) drops dramatically
- A house at 3 ACH50 in a cold climate may have only ~0.1-0.15 natural ACH — far below health thresholds

### ASHRAE 62.2 Requirements
- Formula for required whole-house ventilation: [floor area / 100] + [(number of bedrooms + 1) × 7.5] CFM
- Example: 2,000 sq ft, 3 bedrooms → 20 + 30 = 50 CFM continuous
- Three main strategies: exhaust-only (cheapest, depressurizes house), supply-only, balanced (HRV/ERV)
- Most production builders use exhaust-only via a bath fan with a timer or "set and forget" switch
- This is the legal minimum and doesn't address distribution — the fresh air enters through random leaks

### The Health Problem
- Offerman et al. study (California): measured formaldehyde in 100 new homes. Found 0.5 ACH needed to dilute formaldehyde to acceptable levels — roughly 3x higher than ASHRAE 62.2 rates
- NIST Net-Zero Energy Residential Test Facility: even with low-VOC specifications and 62.2 compliance, building envelope components were a significant overlooked source of VOCs (aldehydes, alkanes)
- PNNL Building America study: pre-occupancy VOC levels in new homes reached 13,800 μg/m³. Post-occupancy dropped to 2,400-3,700 μg/m³ but formaldehyde and acetaldehyde remained high
- New England IAQ study: CO2 and VOC concentrations correlated strongly in tight homes (r=0.54 in the leakiest, up to 9,000 ppb VOC peaks during cooking in tightest home)
- Formaldehyde sources: cabinets (MDF/particleboard), engineered wood flooring, insulation, paints. New homes off-gas for 1-3+ years

### The Installation Failure Problem
- Washington State study of 1,500 housing units with continuous ventilation: 5-10% of systems were off or inoperable
- Common reasons: occupants shut them off due to noise, cold air discomfort, or concern about "wasting energy"
- ERV systems shut off more often than exhaust fans due to cold air blowing from supply grill
- Servicing visits do NOT include measurement of airflow to verify correct operation
- No requirement in most jurisdictions to commission ventilation after installation

### What AI Could Do (But Doesn't)
- Room-by-room airflow optimization based on pollution sources and occupancy patterns
- Predictive IAQ modeling based on building materials, orientation, climate, and occupancy
- Dynamic ventilation control based on real-time CO2/VOC sensors + weather data + utility rates
- Automated commissioning verification (comparing installed airflow to design requirements)
- The market: residential ventilation design is essentially manual. No AI-specific tools exist for residential ventilation system design. Energy modeling software (REM/Rate, EnergyPlus) calculates required rates but doesn't design the distribution system.

### What Exists Now
- Panasonic WhisperGreen Select: constant airflow even as static pressure changes, but no AI
- Broan-NuTone Overture: IAQ sensor + auto-adjust, closest to "smart" ventilation
- Zehnder ComfoAir: European ERV with demand-controlled ventilation via CO2 sensors, $3,000-$5,000 installed
- Smart thermostats (ecobee, Nest) can run ventilation on schedules but don't optimize for IAQ
- Commercial building BMS systems have demand-controlled ventilation, but residential HVAC design software doesn't include ventilation distribution design

### Kill Test
Does this help someone building or buying a home? YES.
- If you're building a new home to the 2024 IECC: your builder is testing for airtightness but probably not designing your ventilation system
- If you're buying a new-construction home: ask what mechanical ventilation system is installed and whether it was commissioned
- If you're renovating and tightening your envelope: you may need mechanical ventilation you didn't have before
- Actionable: demand ventilation commissioning (airflow measurement at each register), consider balanced (HRV/ERV) over exhaust-only, check if your jurisdiction requires ASHRAE 62.2 compliance

### Original Contribution
Nobody has calculated the per-house cost differential between exhaust-only ventilation (a $200 bath fan) and a properly designed balanced ventilation system (HRV/ERV at $3,000-5,000 installed) versus the potential health costs of formaldehyde exposure in a tight home. The energy penalty of running continuous ventilation in a tight home is also underexplored in residential contexts.

### Sources
1. ASHRAE Standard 62.2-2022: Ventilation and Acceptable Indoor Air Quality in Low-Rise Residential Buildings
2. 2024 IECC residential provisions (NAHB adoption kit analysis)
3. Offerman et al., "Window Usage, Ventilation, and Formaldehyde Concentrations in New California Homes" (presented at ASHRAE conference)
4. NIST Net-Zero Energy Residential Test Facility IAQ study (Poppendieck et al.)
5. PNNL Building America test plan: source control measures and IAQ in high-performance homes
6. Washington State Housing Finance Commission study: ventilation system operational rates in 1,500 units (Lubliner)
7. Fine Homebuilding ventilation code analysis (Laliberte)
8. Parks Associates: smart water/IAQ device adoption data
9. New England IAQ assessment study (MDPI Buildings)
10. Canada residential fossil fuel combustion and IAQ study (Nature, Journal of Exposure Science)
