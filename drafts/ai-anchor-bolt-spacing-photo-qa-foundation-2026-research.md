# Research: AI Anchor-Bolt Spacing Photo QA Before the Sill Plate Buries It
**Article #957** | Journalist: Jake Kowalski | Date: 2026-09-23

## Angle
A new house's connection to its foundation is about thirty half-inch steel bolts, set while the concrete is wet. They are inspected by eye, photographed by nobody, and then the sill plate covers them for the next fifty years. Industrial computer-vision models already detect bolts at mAP 0.94. Residential builders can run a free version of the same idea with phone photos. Nobody does.

## Kill test
Helps a builder catch a defect that becomes a $4,000-$6,000 epoxy retrofit job (or a denied insurance claim after a quake). Helps a homebuyer of an older home understand what the EBB grant pays for. Passes.

## Primary sources (7+)
1. **2022 California Residential Code R403.1.6 (ICC)** — 1/2-inch minimum anchor bolts, 7-inch embedment, max 6 feet on center, minimum two bolts per plate section with one located not more than 12 inches nor less than seven bolt diameters from each end, bolts in the middle third of the plate width. https://codes.iccsafe.org/content/CARC2022P1/chapter-4-foundations
2. **Skagit County residential code summary (IRC R403.1.6.1)** — same requirements, confirming national consistency of the 6-ft o.c. rule. https://www.skagitcounty.net/PlanningAndPermit/Documents/Forms/Building/Common%20Residential%20Building%20Codes.pdf
3. **MDPI Sensors 2023: Automatic Inspection of Bridge Bolts Using Unmanned Aerial Vision** — YOLO v5x mAP 0.940 for bolt detection, trained 50,000 steps on 8:1:1 split. Detection accuracy on bolts 71-100% depending on pipeline. https://www.mdpi.com/2052354
4. **MDPI Buildings 2025: Enhancing Bolt Object Detection via AIGC-Driven Data Augmentation** — LoRA fine-tuned Stable Diffusion + YOLO for bolt damage recognition, submitted Feb 2025. https://www.mdpi.com/2075-5309/15/5/819
5. **Buildots $130M raise, Sept 14, 2026 (construction-today.com)** — total funding $297M; 100+ large firms (Intel, Mortenson, STO Building Group); moving from progress tracking to project control. https://construction-today.com/news/buildots-raises-130-million-as-construction-ai-demand-grows/
6. **OpenSpace Waypoint 2026 announcement (Morningstar/PRNewswire)** — 110,000+ construction projects, 77 billion sq ft analyzed, 500M+ expert-verified labels; Agent Ecosystem for jobsite inspection workflows. http://www.morningstar.com/news/pr-newswire/20260910sf44131/openspace-unveils-the-next-generation-of-its-visual-intelligence-platform-at-waypoint-2026
7. **California Residential Mitigation Program (CRMP) — EBB retrofit** — up to $3,000 grant; typical retrofit $3,000-$7,000; bolt-only retrofits for homes without cripple walls. https://www.crmp.org/our-seismic-retrofit-programs/the-retrofits/ebb-retrofit
8. **EBB cost detail (mesaproperties.net)** — most retrofits $4,000-$6,000; with $3,000 grant, homeowners pay ~$1,000-$3,000 out of pocket. https://www.mesaproperties.net/blog/how-to-save-money-on-your-california-earthquake-retrofit
9. **Earthquake Safety / seismic retrofit FAQ** — expansion (wedge) bolts vs epoxy-set bolts; epoxy costlier in material and install time. https://earthquakesafety.com/faq/retrofitting_faq.html

## Original contribution: the missed-bolt math (first principles)
Assumptions stated: 1,800 sq ft single-story wood frame, ~180 linear feet of perimeter wall, Seismic Design Category D2 (ASCE 7, Cs ≈ 0.2), seismic weight W ≈ 35,000 lbs (wood frame ~ 15-20 psf of floor area plus roof).
- Design base shear V = Cs × W ≈ 0.2 × 35,000 ≈ 7,000 lbs.
- Shear per foot of perimeter: 7,000 / 180 ≈ 39 lb/ft.
- Code spacing 6 ft o.c. → each bolt carries ~230 lbs lateral. A 1/2-inch cast-in-place J-bolt in 2,500-psi concrete carries roughly 700-1,100 lbs allowable shear. Healthy margin.
- Miss every second bolt (spacing stretches to 12 ft): per-bolt demand ≈ 470 lbs. Still within capacity, but the margin thins.
- Miss two in a row (an 18-foot gap, e.g., bolts knocked during the pour and never reset): ~700 lbs per remaining bolt, right at the allowable limit. Any concrete breakout weakness (bolt too close to the edge of the foundation, concrete not consolidated around the bolt) and the margin is gone.
- The corner-end rule (a bolt within 12 inches of each plate end) exists because the ends of wall segments concentrate shear. A bolt 18 inches from a corner leaves the corner plate essentially free at the worst possible spot.
None of this is verified against a published defect study. The numbers are illustrative engineering, clearly labeled as estimates.

## Skepticism / counterargument (stated at full strength)
- Foundations ARE inspected: most AHJs require a foundation/anchor bolt inspection before framing. Missing-bolt rates in new construction are low; the real bolt problem in California is pre-1980 homes with no bolts at all, which is a retrofit story, not a new-construction story.
- Bolt detection models are trained on bridges and industrial equipment, not muddy residential foundations with form ties, rebar, and workers' boots in frame. Accuracy will drop in the field.
- Missed bolts are cheap to fix at the right moment (epoxy-set anchor, ~$25-40 per bolt installed) and before the sill plate goes on, fix time is minutes. The expensive failure is the one discovered decades later during a retrofit.
- Wet-set bolts get knocked during the pour; a photo at one moment does not prove the bolt stayed plumb after the vibrator passed.

## What was not verified
- No published dataset of residential anchor-bolt defect rates.
- YOLO mAP figures are from bridge bolt inspection, not residential foundations.
- Retrofit costs are California seismic-zone figures; wind-zone figures differ.
- No residential-specific bolt-spacing QA product exists as of September 2026.

## Novelty vs repo
Zero slugs mention anchor/holdown/fire-block (grep verified 2026-09-23). Closest: foundation waterproofing photo QA, shear-wall nail-count photo audit, predrywall scan article. No topic overlap.
