# Research Notes: Window Optimization — Energy vs. Psychology

## Slug: windows-optimized-energy-code-not-brain
## Journalist: Elena Vasquez (Architecture & Design)
## Category: Architecture & Design

## Angle
AI tools now optimize residential window design for energy efficiency with extraordinary precision. But the 7 most commonly installed window typologies worldwide produce the highest anxiety and negative emotional responses in observers. Building codes enforce U-factors and SHGC. Nobody enforces neurophysiology. The science of energy-efficient windows and the science of psychologically healthy windows aren't inherently contradictory — it's that nobody builds the tool that optimizes for both.

## Key Sources

### 1. Salingaros (2025), "Façade Psychology Is Hardwired: AI Selects Windows Supporting Health"
- Journal: *Buildings* 15(10): 1645, MDPI
- Author: Nikos A. Salingaros, Dept. of Mathematics, UT San Antonio + Hong Kong University of Science and Technology (Guangzhou)
- Method: Used ChatGPT 4.5 to evaluate 10 pairs of window designs against Christopher Alexander's 15 fundamental properties of living geometry AND 10 emotional descriptors (beauty, calmness, coherence, comfort, empathy, intimacy, reassurance, relaxation, visual pleasure, well-being)
- Key findings:
  - AI consistently selected traditional window compositions over modernist/fragmented ones — 10/10 pairs, both geometric and emotional criteria
  - 7 most commonly installed contemporary window typologies worldwide scored HIGHEST on anxiety: unitized flush curtain-wall panels, horizontal ribbon windows, frameless triangular apertures, tilted diagonal picture windows, tilt-and-shuffle rotated quadrilateral windows, barcode ribbon with random mullion spacing, diagonal scatter punched windows
  - Derived 10 evidence-based rules for "empathetic" windows via ChatGPT o3:
    1. Vertical human-scaled rectangles (H:W ratio 1.4–2.0)
    2. Nested panes/muntins with 3–5-step scaling hierarchy
    3. Thick frame (⅕–⅓ glazing width) + deep reveal (>75mm)
    4. Bilateral symmetry + aligned lintels/sills
    5. Rhythmic alternation (ABAB) along façade
    6. 50–150mm recess with shadow band
    7. 25–40% solid-void ratio on main façade
    8. Micro-scale texture (beveled muntins, shadow lines)
    9. Color/material contrast (dark frame/light wall)
    10. Sill height aligned with seated eye-level (~1.5m)
  - "The outcome 'looks traditional' because millennia of empirical building practice converged — often unintentionally — on geometries that human biology finds legible, calming and socially intelligible."
  - Pipeline was "theory → biometric data → design rule" — NOT extracted from photos of traditional windows
  - First 4 rules (aspect ratio, hierarchical panes, frame thickness/depth, bilateral symmetry) carry most weight

### 2. Adel Nasab & Rabiei (2026), "An AI-driven multi-objective framework for optimizing window dimensions"
- Journal: *Scientific Reports* 16: 6365
- Method: PCA-ANN surrogate model + NSGA-III multi-objective optimization of window width/height
- Targets: minimize cooling energy, minimize heating energy, maximize ASHRAE 55 adaptive thermal comfort
- R² > 0.99 across all outputs
- Key finding: "Increasing window area generally reduces annual heating energy demand and improves adaptive comfort coverage, while simultaneously increasing annual cooling energy demand." Intermediate window sizes = balanced compromise.
- Surrogate model completes optimization in minutes vs. days for full EnergyPlus simulation

### 3. DOE / This Old House Data
- Windows responsible for 25–30% of residential heating/cooling energy use (DOE)
- Average US household spends ~$2,000/year on energy, ~43% on heating/cooling ($860)
- So windows drive roughly $215–$258/year of the typical household energy bill
- Heat gain and loss through windows = largest single point of energy loss in most homes
- 47% of replacement windows installed in homes >20 years old (This Old House 2025 survey)
- Energy-efficient rated homes sell for 2.7% more (Freddie Mac)
- Replacement windows: $100–$1,000+ per unit depending on size/type

### 4. Window-to-Wall Ratio Data
- Yazd study (Scientific Reports 2025): optimal WWR ~20% for hot-arid climate, vertically elongated
- Riyadh optimization: AI reduced heating by 96.1% vs. baseline through window+envelope optimization
- Toronto: 43.1% heating reduction achievable

## Original Contribution
Cross-referencing reveals the energy-optimal and psychologically-optimal ranges OVERLAP:
- Energy optimization (Adel Nasab): intermediate window sizes, ~20-40% WWR
- Psychological optimization (Salingaros): 25-40% solid-void ratio
- Both favor vertical proportions
- Neither inherently conflicts with the other
- The gap: no tool optimizes for both simultaneously. Energy tools ignore neurophysiology. Neuroarchitecture research ignores energy modeling.

## Actionable Takeaways
For someone building or renovating:
1. Specify vertical-proportion windows (H:W ≥ 1.4:1) — this doesn't cost more
2. Demand frames with ≥75mm deep reveals — shallow reveals are standard because they're cheaper
3. Insist on bilateral symmetry and aligned lintels/sills across façade
4. Keep window-to-wall ratio in 25-40% range — where energy and psychology agree
5. If using AI design tools (Forma, Finch 3D, etc.), ask whether they optimize for anything beyond BTUs
6. Avoid: flush frameless glazing, horizontal ribbons, random scatter placement — they may score well on energy but score worst on human stress response
