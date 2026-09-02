# Research: AI Daylight Simulation vs. Designing Windows by Habit

**Slug:** ai-daylight-simulation-window-design-surrogate-models-2026
**Article #:** 750
**Journalist:** Elena Vasquez (Architecture & Design)
**Ship after:** 2026-09-08
**Kill test:** Does this help someone building or buying a home? YES. Window size and placement, decided in schematic design, lock in decades of lighting energy use, glare, and overheating. A homebuyer or owner-builder can now ask their architect a pointed question — "did you simulate daylight, or eyeball it?" — and know what a good answer costs and what it should change.

## Working headline
"Your Windows Were Sized by Habit. An AI Trained on 2,000 Simulations Disagreed."

## Angle
For a century, residential window placement has been governed by habit, rules of thumb, and whatever the plan set from the last job looked like. Full annual daylight simulation (Radiance-based, sDA/ASE metrics) existed but was too slow and expert-hungry for single-family work — it belonged to museums and office towers with consultants. Machine-learning surrogate models changed the economics: train once on a few thousand simulations, then predict daylight performance in seconds inside the CAD tool. Autodesk baked it into Forma; startups like cove.tool productized it. The honest twist Elena must land: the energy savings alone are thin (lighting is ~10% of home electricity and LEDs already ate most of it), so the real value is comfort, glare control, and killing the west-facing glass wall before it gets built. And the skepticism: a surrogate is only as good as its training set, and most were trained on offices and generic boxes, not your actual house.

## Primary sources

1. **Autodesk Forma — ML real-time daylight analysis + generative "Building Layout Explorer"**
   - Forma's ML performs real-time analyses of sunlight, daylight, wind, microclimate "without users requiring deep technical expertise"; environmental analysis "from day one of the design process."
   - Forma Building Design (announced Autodesk University, Sept 2025 per ENR) adds "neural CAD for buildings," an industry-specific AI foundation model trained on 3D design data; first generative tool "Building Layout Explorer" generates interior layouts evaluated against "different outcomes like unit mix and daylight."
   - Daylight Potential analysis uses the CIE Standard Overcast Sky Model; Sky Component score flags facade areas with inappropriate light levels.
   - https://aecmag.com/bim/forma-building-design/
   - https://www.enr.com/articles/61406-forma-building-design-brings-autodesk-into-the-contest-of-browser-based-design-tools
   - https://blogs.autodesk.com/forma/2023/08/28/develop-early-insights-on-the-daylight-potential-of-your-design-projects/

2. **MDPI Buildings review (2026): "Machine Learning for Daylight Performance Prediction"**
   - Peer-reviewed survey of ML surrogate approaches for daylight prediction.
   - Kat et al.: image-based model on residential layouts predicted daylight provision and view quality with R2 0.74/0.78.
   - Dieguez et al.: large-scale surrogate dataset from residential design scenarios in Stockholm; ANN/XGBoost vs pix2pix cGAN for daylight factor prediction — both highly accurate, different trade-offs on interpretability and workflow integration.
   - Luo et al.: autoencoder model predicting sDA (R2 0.95) and ASE (R2 0.85).
   - Kuala Lumpur ANN study: 2,000 simulation samples trained the surrogate (60/20/20 split), predicting UDI, lighting/cooling/solar-gain energy intensity.
   - https://www.mdpi.com/2076-3417/16/6/2757

3. **Dieguez et al., ScienceDirect (2025): daylight factor prediction, numerical vs pix2pix**
   - Surrogate dataset generated from a real residential design scenario (Stockholm); pix2pix achieved high accuracy with faster encoding than regression models; deployed as live DF compliance prediction inside CAD UI.
   - Key for the article: the "2,000 simulations" training figure and the residential (not office) dataset.
   - https://www.sciencedirect.com/science/article/abs/pii/S0360132325002252

4. **U.S. DOE on cove.tool: reduced-order modeling for early-stage design**
   - cove.tool uses reduced order modeling (ROM): small number of lumped parameters, energy estimates in "real time" for entire parametric sweeps; sidesteps BIM-to-BEM geometry translation failures that plague detailed modeling.
   - DOE framing: this "increased the use of modeling — of any kind — in early stage design, a much needed development."
   - https://www.energy.gov/cmei/buildings/articles/covetool-officiates-perfect-marriage-between-reduced-order-modeling-and

5. **EIA Residential Energy Consumption Survey — lighting baseline**
   - 2015 RECS: U.S. households averaged 1,105 kWh/yr for lighting, ~10% of home electricity use. (Most recent detailed lighting end-use figure; 2024 RECS end-use data due spring 2027.)
   - 2024 RECS (Mar 2026 release): LED dominance now — majority-LED homes rose from 4% (2015) to 47% (2020); 2024 data shows LEDs the most-used bulb type.
   - https://www.eia.gov/todayinenergy/detail.php?id=38452
   - https://www.eia.gov/todayinenergy/detail.php?id=67368

6. **cove.tool pricing and claimed economics (industry press)**
   - Archpaper (2018): "For under $3,500 a year, a team of five can leverage Cove.tool" — the price point that moved performance analysis in-house for small firms.
   - Architect Magazine: founders claim average 2–3% initial cost reduction, or 40% performance improvement for a 3% cost premium. (Vendor claim — treat with skepticism; no independent audit found.)
   - Builder Magazine HIVE 50: same 2–3% / 40% figures.
   - https://www.archpaper.com/2018/04/cove-tool-green-buildings/
   - https://www.architectmagazine.com/practice/the-algorithm-cove-tool-runs-the-numbers-for-designers_o

7. **LEED v4.1 daylight metrics (via MDPI "Prediction of Annual Daylighting Performance Using Inverse Models")**
   - sDA/ASE calculation grids at 0.6 m per LEED 4.1 (USGBC 2023); Radiance-based Ladybug/Honeybee toolchain; 482 cases simulated to train MLR models predicting sDA and annual auxiliary lighting energy.
   - Establishes that the metrics the AI predicts (sDA, ASE, lighting energy) are the same ones green certification actually grades.
   - https://www.mdpi.com/2419318

## Original contribution (the math nobody runs)
The thin-payback calculation, with all inputs cited and labeled:
- EIA: average home spends 1,105 kWh/yr on lighting (~10% of electricity).
- Assume daylight optimization cuts lighting energy 30% (mid-range of published daylighting-savings literature; label as assumption, not measured).
- 1,105 x 0.30 = ~332 kWh/yr saved per home. At the EIA figure alone — no dollar conversion without a sourced rate.
- cove.tool-class subscription: under $3,500/yr per 5-person team (published 2018 price; current pricing unconfirmed — flag it).
- Breakeven framing: the subscription pays for itself in energy terms only across many homes, never on one. THEREFORE the honest pitch is not energy payback but avoided mistakes: one deleted west-facing glass wall, one avoided glare retrofit (motorized shades, film, or re-glazing routinely run into five figures on custom homes — describe as typical project experience, not a cited stat), and the design-fee leverage of showing clients physics instead of taste.
- Counterweight: LEDs already compressed the prize. In 2015 lighting was 10% of home electricity; with LEDs dominant by 2024, the remaining addressable lighting load is smaller, which makes the comfort/glare case carry the argument.

## Strongest counterargument (to state at full strength)
A surrogate model is a compression of its training data, not physics. Most published daylight surrogates were trained on offices, classrooms, or generic Stockholm apartment blocks — not on a 1,800 sq ft ranch in Fresno with a neighbor's two-story looming 12 feet off the property line. Site-specific obstructions, interior finishes, and occupant behavior (blinds usage alone can swing realized daylight performance enormously) are exactly what the fast model smooths over. And there is a subtler risk: when the simulation is instant and pretty, architects stop questioning it. A slow Radiance run forced humility; a real-time heatmap invites overconfidence. The tool democratizes analysis and simultaneously democratizes misplaced certainty.

## Limitations
- No independent audit of Autodesk's or cove.tool's accuracy/savings claims; vendor figures (2–3% cost reduction, 40% performance gain) are uncorroborated.
- cove.tool pricing figure is from 2018 press; current pricing not verified.
- The 30%-savings assumption in the payback math is illustrative, not measured on real homes in this article.
- EIA lighting end-use figure is 2015 vintage; 2024 RECS end-use detail due spring 2027.
- No verified case study of a specific single-family home where surrogate daylighting changed the built outcome; the residential evidence base is datasets and tools, not occupied-home measurements.
- Surrogate accuracy figures (R2 0.74–0.95) come from papers' own test sets, not independent replication.

## Skepticism notes (Katerra rule)
Construction-tech graveyard applies to software too: dozens of "AI for architects" startups have pivoted or died. Autodesk's "neural CAD" foundation model is announced, not shipped, for most users. The article must distinguish shipping tools (Forma daylight potential, cove.tool) from roadmap promises (Building Layout Explorer generative features "later this year or in 2026" per ENR, Sept 2025).

## Actionable takeaways (required)
- If you're building custom or remodeling with an architect: ask whether they run daylight analysis (sDA/ASE or equivalent) during schematic design, and what changed because of it. "We eyeball it" is now a choice, not a necessity.
- If you're a small residential firm: sub-$3,500/yr team tools (cove.tool-class) vs. five-figure consultant engagements per project is the actual economic shift; the breakeven is one avoided glazing mistake, not energy payback.
- If you're buying a production home: you can't re-simulate the plan, but you can visit at 4pm in August. The AI can't fix a west-facing great room either — orientation is still destiny.
- Watch for: surrogate trained on wrong building type; pretty heatmap treated as truth; glare (ASE) ignored while daylight (sDA) is optimized — the two metrics must be read together.
