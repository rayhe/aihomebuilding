# Research: AI Window Placement and Shading Design — Cooling Load Optimization

**Slug:** ai-window-placement-shading-design-cooling-2026
**Journalist:** Elena Vasquez (Architecture & Design)
**Date:** September 5, 2026

## Angle (1-2 sentences)
Residential architects still size and place windows by curb appeal and client taste. Parametric daylight/energy simulation tools can test thousands of glazing configurations in minutes, but the residential market barely uses them, and the cooling bill is where the design choice shows up.

## Kill test
Does this help someone building or buying a home? Yes: window placement and shading spec is decided once, costs $15-30K to change later, and drives 25-30% of HVAC energy. Actionable: what to ask the architect, orientation rules, exterior vs interior shade economics.

## Primary sources

1. **DOE / Energy.gov** — windows account for 25-30% of residential heating and cooling energy use; upgrading the national window stock to DOE performance goals could save more than 2 quadrillion BTU. (via CED Engineering PDH course citing DOE; realtor.com citing Energy.gov: 25-30% of conditioned air escapes through windows)
2. **PNNL Lab Homes field experiment (PNNL-21524)** — side-by-side identical homes, triple-pane (U-factor ~70% lower, SHGC ~77% of standard) vs standard double-pane. Modeled annual savings 1,370 kWh/yr (13.2%); measured-extrapolated 1,784 kWh/yr (12.2%). Window cost $6,243 ($32/ft²). At 11.8¢/kWh (2012 EIA), $162-211/yr savings.
3. **Wiley / Journal of Engineering (Yang 2015)** — window-wall ratio and orientation study, hot summer/cold winter zones: east and west windows should be avoided or limited in WWR with shading; bedrooms should face north or south for energy efficiency.
4. **MDPI Energies (hot climates WWR study)** — reference residential building, single-pane, 15% WWR baseline: 75% WWR raised HVAC energy ~30%; 25% WWR had the smallest increase (~5% annual); artificial lighting offset 30-40% at high WWR (daylighting tradeoff).
5. **MDPI Energies (southern Hunan, Envi-met + TRNSYS)** — cooling electricity on a summer day: ~100 kWh per 20% WWR increase (20% WWR: 19.6 kWh; 40%: 133.7 kWh; 60%: 273.1 kWh; 100%: 461.9 kWh).
6. **cove.tool** — commercial-grade daylight/energy optimization: sDA (spatial daylight autonomy, 55% WELL minimum), ASE glare metrics, radiation studies to place glazing on north/west for daylight without glare; shading maps. Georgia Tech Campus Center case: primitive massing started at 31.1% sDA, redesigned facades toward target using glare studies.
7. **MDPI Energies (classroom/daylight variant study)** — external blinds cut cooling demand 30% (657.7 → 462 kWh/a); without lighting control total energy only fell 12%; combined daylight control + exterior blinds cut total 33-36%.

## Original contribution: payback comparison nobody published

Inputs:
- PNNL Lab Homes: whole-house triple-pane window package saves ~1,370 kWh/yr (modeled, PNW climate).
- California electricity: PG&E tiered rates ~$0.34-0.45/kWh (2025-2026); use $0.38.
- Annual savings from window upgrade at CA rates: 1,370 × $0.38 = ~$521/yr.
- Full window package replacement cost (2,400 sq ft home, ~360 ft² glass at PNNL's $32/ft² 2012 figure, inflation-adjusted ~$42/ft² 2026): ~$15,000. But premium high-performance packages quoted $20-30K.
- Simple payback at $15K / $521 = ~29 years; at $25K = ~48 years. Longer than the windows' warranty.
- Contrast: exterior shading on west elevation (retractable shades / shade screens on ~60 ft² of west glass at ~$500-800/window, ~$3,000-5,000 total). MDPI data: exterior shading cuts cooling 30%. A Central Valley home with ~5,000 kWh/yr cooling: 30% of the west-glass share (conservatively 1,200-1,500 kWh/yr) = $456-570/yr at CA rates → payback 5-8 years.
- Builder reality: neither number is modeled before framing on typical tract homes. cove.tool-style analysis costs the architect ~an hour; production builders skip it entirely.

Assumptions stated: PNW savings extrapolated to CA cooling climate (conservative since CA has more cooling load and higher rates); shading savings share estimated, not measured on a CA home; costs from PNNL 2012 distributor pricing inflation-adjusted.

## Technology landscape
- cove.tool (web-based, daylight sDA/ASE + energy), Ladybug Tools / Honeybee (Grasshopper plugins, free, academic + boutique firms), Autodesk Insight / Forma (early-stage energy), Higharc (production homebuilder platform, design-to-estimate), TestFit (multifamily).
- Gap: all marketed to commercial or large production builders. Single custom-home architect typically runs none of this; the tools live a market tier above the $800K custom home.

## Skepticism
- Glass sells houses. Views and natural light are top buyer preferences; resale premiums for walls of glass are real and unmodeled.
- Daylighting reduces artificial lighting (30-40% at high WWR per MDPI); naive WWR minimization creates dark homes that burn more lighting energy.
- Windows are 25-30% of HVAC energy, not of the bill; overselling the savings number is the classic vendor move.
- Simulation accuracy depends on occupant behavior (thermostat setpoints, shading use); PNNL itself notes results are setpoint-specific.

## Strongest counterargument
Design is not energy math. A home that minimizes glass to optimize cooling load is a bunker with a great HERS score. Buyers pay for light, views, and the feeling of a wall that dissolves into the backyard, and no sDA target captures that. Architects who flatten every elevation into an optimization output are designing for the simulation, not the client. The tools should inform taste, not replace it.

## Limitations
- Cooling savings extrapolated across climates (PNW heating data, Chinese and Hunan cooling studies) — no single US study measures AI-optimized placement on a tract home.
- Shading payback uses a modeled share of cooling attributable to west glass, not a metered CA home.
- Adoption rates for simulation tools among residential architects: no public market data; characterization is from vendor case libraries.
- Did not address heating-dominated climates where south glass is a net benefit (passive solar).

## Actionable takeaways
- Ask your architect for a daylight/glare study before the window order is placed. One sDA/ASE run on cove.tool or Honeybee costs far less than one change order.
- Orientation rule of thumb (hot climates): concentrate glass south and north; minimize and shade west; use SHGC ≤ 0.25 glazing on west/east exposures.
- Exterior shading beats interior blinds for cooling (blocks heat before the glass) and beats premium glazing on payback in cooling climates.
- If you are building in CA: Title 24 / IECC prescriptive SHGC limits already cap west-facing glass area in some paths; a performance-model run can trade glazing for other efficiency measures.
- Production builders: Higharc-style platforms already tie design to cost; energy modeling is the missing column.

## URLs
- https://www.osti.gov/servlets/purl/1060682/ (PNNL Lab Homes windows experiment)
- https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-24935Rev1.pdf (IECC cost-effectiveness, 2,400 ft² prototype)
- https://onlinelibrary.wiley.com/doi/10.1155/2015/538254 (WWR + orientation)
- https://www.mdpi.com/1996-1073/13/21/5836 (hot climate WWR study)
- https://www.mdpi.com/1660-4601/18/16/8411/xml (WWR cooling demand, Envi-met/TRNSYS)
- https://www.mdpi.com/1996-1073/18/15/4113 (daylight variants, external blinds 30%)
- https://help.covetool.com/en/articles/2687528-georgia-tech-campus-center (cove.tool daylight case)
- https://www.cedengineering.com/interactive-videos/energy-efficient-windows-skylights-and-doors-r1 (DOE 25-30% stat, SHGC/U-factor guidance)
- https://www.realtor.com/advice/home-improvement/energy-efficient-windows/ (Energy.gov 25-30% stat)
