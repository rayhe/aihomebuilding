# Research Notes: AI Daylight Simulation & Window Placement in Residential Design

## Angle
Your architect placed your windows by feel. AI daylight simulation tools can now optimize window placement for natural light, energy savings, and resale value — and the data says getting it wrong is expensive.

## Kill Test
✅ Helps someone building a home: actionable tool recommendations, cost-benefit data, specific metrics to demand from architects
✅ Helps someone buying a home: Redfin Sunscore exists, daylight significantly predicts home value
✅ Not a puff piece: evidence shows most residential architects DON'T use daylight simulation tools, and AI-generated floor plans fail daylight tests without post-processing

## Key Data Points

### Daylight → Home Value (Primary Sources)
1. **Wellington, NZ study (IDEAS/RePEc):** Each extra daily hour of sunlight exposure increases house prices by **2.4%** using hedonic regression on 5,000 property sales.
2. **Turin, Italy study (ScienceDirect):** Annual sunlight exposure and useful daylight illuminance are statistically significant predictors of housing price via multiple regression.
3. **Shanghai study (Int'l Journal of Strategic Property Management, 2019-2021):** Residents pay **7.2% more** for south-facing apartments with direct sunlight access (40,000 housing units analyzed via hedonic pricing).
4. **General US real estate data:** Homes with abundant natural light sell for **3-5% more** (industry consensus).

### Buyer Demand
5. **Redfin survey (2026):** **70%** of respondents say sunlight impacts home satisfaction.
6. **Boston Agent Magazine / Redfin (2026):** **44% of homebuyers** prioritize natural light OVER square footage.
7. **Redfin Sunscore (launched 2026):** 0-100 sunlight scoring using Shadowmap 3D geometry + shadow analysis from trees, buildings, terrain. Exclusive to Redfin platform.

### The Gap: Architects Don't Simulate
8. **International AEC survey (ScienceDirect, n=186):** 79% of AEC professionals use optimization tools — but primarily on commercial/institutional projects. Residential custom homes rarely get daylight simulation.
9. **Climate-Based Daylight Modeling (CBDM):** Developed early 2000s as replacement for outdated daylight factor method. Uses real-world climate data. Standard in commercial architecture, rare in residential.
10. **Fine Homebuilding / Architect Magazine:** Window selection guides for builders focus on U-factor, SHGC, condensation resistance, material cost. Almost zero mention of computational daylight analysis.
11. **Cambridge Core study (2025):** AI-generated housing plans (ChatGPT, Copilot) tested for daylight performance — ChatGPT showed better spatial organization but Copilot achieved higher daylight compliance in tropical climates. **Neither achieved reliable daylight without "post-generative environmental refinement."** Even AI can't wing it.

### Tools Available
12. **Autodesk Forma:** $185/month, AI-powered cloud platform. Real-time sun hours, daylight potential for facades + windows, total carbon. Integrates with Revit. Primarily urban/multi-family but expanding.
13. **VELUX Daylight Visualizer:** **Free.** Simulates daylight in rooms with skylights and windows. Used on 14th-century Austrian home renovation (Architonic case study).
14. **Rhino + Grasshopper + parametric plugins:** Industry standard for parametric optimization. Steep learning curve. Not accessible to residential architects without computational design training.
15. **DesignBuilder (Radiance-based):** Daylight credits, LEED/BREEAM/Green Star compliance. Professional-grade.
16. **VELUX BIM Library:** Verified objects for Revit, ArchiCAD, SketchUp. Reduce window spec errors.

### Performance Data
17. **Window orientation:** Affects daylighting availability by up to **15%** (PubMed parametric analysis).
18. **Window-to-wall ratio (WWR):** 40-70% WWR yields **75% likelihood** of good-to-wide views (MDPI biophilic study).
19. **Multi-objective optimization (Nature, hot-arid region):** Optimized south-facing window geometry achieved **3.9-5.2% energy savings** and **19.7-23.2% cooling reduction** through WWR, height, and sill height optimization.
20. **Australian residential study (MDPI):** Automated BIM-based optimization framework showed significant variation in optimal window placement by facade orientation and climate zone.
21. **DIALux UK residential study (MDPI):** Optimized LED + daylight systems reduced energy consumption by **15.3%** (from 10.25 to 8.68 kWh).

### Health & Wellness Standards
22. **WELL Building Standard:** Sets thresholds for Spatial Daylight Autonomy (sDA) and Annual Sunlight Exposure (ASE). Requires 200+ Equivalent Melanopic Lux (EML) in work areas, 150+ in living spaces.
23. **Harvard 2015 study (referenced in prior article):** Cognitive decline measurable at 1,000 ppm CO₂ — relevant because poor daylighting correlates with closed windows and worse IAQ.
24. **Circadian lighting research:** Window size, glazing type, and room reflectance directly influence circadian-effective lighting.

### Counterarguments
- Window placement serves multiple constraints simultaneously: structural (headers, load paths), aesthetic (facade composition, views), privacy, code (egress, ventilation), cost. Daylight is one factor among many.
- Small residential projects ($500K-$2M) can't justify the software/training costs that commercial projects absorb.
- Experienced architects DO have good intuition about light — but can't quantify it or optimize across competing objectives the way simulation can.
- Climate matters enormously: optimal in Arizona ≠ optimal in Seattle. Generic "more windows = more light" advice can increase cooling loads.

### Original Contribution
- Calculate the value gap: if 2.4% per hour of sunlight (Wellington study) and the average custom home could gain 1-2 hours of additional daily sunlight through optimized placement, that's potentially $12,000-$24,000 on a $500K home.
- Cross-reference: VELUX Daylight Visualizer is FREE but virtually no custom home architect uses it on residential projects. The tool cost barrier is a myth.
- Map the adoption curve: commercial architecture → multifamily → production builders → custom residential (we're between stages 2-3).

## Journalist
**Elena Vasquez** — Architecture & Design beat. This is about spatial quality, light as a design material, the tension between computational analysis and architectural intuition.
