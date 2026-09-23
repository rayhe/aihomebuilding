# Research: AI Parametric Facade Tuning vs the West-Facing Glass Wall — Article #953 (Elena Vasquez)

**Angle:** Parametric simulation tools (Ladybug/Honeybee on Grasshopper, ClimateStudio) can tune a home's facade in an afternoon — window-to-wall ratio by orientation, overhang depth, SHGC — but plan sets keep shipping west-facing glass walls. California's energy code already encodes the answer: prescriptive path caps west-facing glass at 5% of conditioned floor area in cooling climate zones. The article makes the economic case the code implies: what the glass wall costs to install and to cool, what the optimizer would do instead, and what the optimizer can't decide (the sunset view is the whole point of west glass).

**Kill test:** Passes. Anyone building or buying a home signs off on a window package — windows are $40-90/sqft installed. Knowing that west glass carries both a cost premium AND a cooling penalty, and that overhangs work on south glass but barely on west, changes real decisions.

**Topic dedup (2026-09-23):** grepped drafts/ + stories/ for: parametric (0 hits), facade (0), glass-wall (0), overhang (0), solar-heat-gain (0), brise-soleil (0), window-to-wall (0), view-shed (0), universal design (0), kitchen-triangle (0), cottage court (0). Related but distinct existing pieces: ai-daylight-simulation-window-design (daylight surrogate models, not facade energy tuning), ai-window-placement-shading-design-cooling-2026 (shading placement, not parametric WWR optimization), title-24-energy-model-passed-hers-failed (compliance liability, not facade design). No prior article does the west-glass cost math. Angle is clear.

## Primary sources

### 1. 2019 California Building Energy Efficiency Standards, §150.1 (Title 24, Part 6) — prescriptive envelope
- Maximum Total Fenestration Area: **20%** of conditioned floor area (all 16 climate zones).
- Maximum **West-Facing** Fenestration Area: **5%** of CFA in climate zones **2, 4, and 6–15** (the cooling-dominated zones); no west cap in mild coastal zones 1, 3, 5, 16.
- i.e., the prescriptive code allows 4x more glass overall than it allows on the west. The code's authors know west glass is the expensive glass.
- Source: CEC via dgs.ca.gov rulemaking packet (CEC-2-18, Table 150.1-A) and energy.ca.gov Building Envelope compliance manual (2025-07 revision).
- Note: this is the prescriptive path; performance path allows tradeoffs (better SHGC etc.), which is exactly where the parametric optimizer earns its fee.

### 2. MDPI Buildings 2025 — "Simulation of Building Energy Consumption for Different Design Features of Window Elements: Case Study in a Hot Climate Region"
- Single-family homes, hot climate. Baseline cooling primary energy with main facade east/west: **30.30 kWh/(m²·yr)**; north/south: **~14.2–14.4 kWh/(m²·yr)**. Orientation alone more than doubles cooling energy.
- Shading-system design variants on the west/east facade cut cooling to **21.69–28.31 kWh/(m²·yr)** — best config ≈ **28% reduction** vs unshaded.
- URL: https://www.mdpi.com/2076-3417/15/7/3694

### 3. E3S Web of Conferences 396 (2023), IAQVEC2023 — "Assessment of the impacts of window-to-wall ratio and overhangs on building energy performance" (Kabul)
- Annual energy demand rises with WWR on west orientation; increasing overhang depth reduces total energy demand on east/west facades (partial shading of low-angle sun).
- Overhangs on **north** facades: no impact on total energy — skip them.
- South overhangs are the textbook win (high summer sun angle); east/west overhangs help but need deeper projections because the sun is low.
- URL: https://www.e3s-conferences.org/articles/e3sconf/pdf/2023/33/e3sconf_iaqvec2023_04016.pdf

### 4. Journal of Engineering (Wiley/Hindawi) 2015, Yang — "Impact Analysis of Window-Wall Ratio on Heating and Cooling Energy Consumption of Residential Buildings"
- "Windows facing the east and west contribute to the greater effect on the energy consumption of bedrooms. Windows facing east or west should be avoided or the window-wall ratio of them should be limited, and external windows with suitable shading coefficient should be applied."
- Reducing WWR gives significant savings, especially with longer AC operating hours.
- URL: https://onlinelibrary.wiley.com/doi/10.1155/2015/538254

### 5. Angi, "How Much Do Energy-Efficient Windows Cost?" (updated Jul 8, 2026)
- Installed: **$325–$2,000 per window**, average **$400**; premium options **$40–$90 per square foot**.
- URL: https://www.angi.com/articles/energy-efficient-windows-cost.htm?platform=hootsuite&entry_point_id=33797117

### 6. This Old House 2026 national survey (via industry guides)
- Average **$517 per installed window**; typical whole-home project **$7,183**.
- 15 windows × $517 = $7,755 illustrative total.

### 7. Ladybug Tools / Grasshopper parametric platform
- Ladybug + Honeybee: Grasshopper plugins for daylight simulation, solar radiation, shadow analysis, energy consumption — used to optimize window placement, dimensions, overhangs (e.g., KTH Royal Institute daylight-autonomy study; MDPI 2024 Barcelona vs. northern-China residential study used Ladybug + genetic algorithms to optimize layouts for sunlight performance).
- Point for the article: the tooling to run this tradeoff on a single-family home exists, is free/open, and runs on a laptop. The bottleneck is not computation — it is that nobody runs it before the window order is placed.

## Original contribution: the west-glass cost math (worked, with stated assumptions)

Scenario: 2,000 sqft single-story home, Sacramento (CZ-12, cooling climate). Compare a "glass wall" scheme — 200 sqft of west-facing glass (10% of CFA, 4x the prescriptive cap) — against a tuned scheme: 100 sqft west glass (at the 5% cap) + deeper west overhangs + the displaced 100 sqft moved to the south facade where overhangs actually work.

**Install cost delta (100 extra sqft of west glass):**
- Angi premium installed range $40–90/sqft → 100 sqft = **$4,000–$9,000**. Use midpoint **~$6,500** and label it as replacement-cost basis (new construction is cheaper per sqft; this is conservative-in-the-other-direction — say so).
- Title 24 note: prescriptive cap is 100 sqft west glass on this house; the 200-sqft scheme forces the performance path (energy model + tradeoffs), which is itself a soft cost.

**Cooling penalty (100 extra sqft west glass, unshaded):**
- MDPI hot-climate single-family: unshaded west/east cooling 30.30 vs best-shaded 21.69 kWh/(m²·yr) — 8.61 kWh/(m²·yr) floor-area delta, ≈28%.
- Scale to this house (2,000 sqft ≈ 186 m²): 8.61 × 186 ≈ **1,600 kWh/yr** attributable to the unshaded-glass scheme vs the tuned scheme.
- At PG&E-ish $0.30/kWh → **~$480/yr**; at $0.15/kWh → **~$240/yr**. Present as "$240–480/year depending on your utility" — hot-climate study, so flag it as an upper-bound analog for inland CA and smaller in mild zones.

**Combined:** the glass wall costs roughly **$6,500 more to build and $240–480 more per year to cool** than the tuned facade — before the performance-path modeling cost. Over 15 years at $0.30/kWh: ~$13,700 all-in premium for the extra glass.

**What the optimizer does instead (the design move):** cut west WWR to the 5% cap, spend the glass budget on the south facade with a properly sized overhang (south overhangs shade high summer sun while admitting low winter sun — the one orientation where a fixed overhang is genuinely smart), and keep west glass only where the view earns it. Sunset-facing glass is a luxury good; price it like one instead of spreading it across a whole elevation.

## Limitations (for the article's honest-accounting section)
- The cooling-penalty math leans on a hot-climate (non-California) simulation study; absolute kWh won't transfer 1:1 to Sacramento, though the orientation ordering (W/E worst, N/S best) is replicated in the China residential study and the Kabul WWR/overhang study.
- Window install costs are replacement-market data (Angi, This Old House); new-construction window packages cost less per sqft, so the $6,500 is an upper-bound framing — stated in the piece.
- MDPI "primary energy" includes conversion factors; site-energy savings would be smaller. The 28% figure is a config-to-config comparison, not a measured retrofit.
- No third-party audit of any vendor's "AI facade optimizer" marketing claims; the article treats the tools as simulation engines (validated: Ladybug vs EnergyPlus agreement studies exist) not as oracles.

## Strongest counterargument (to state at full strength)
The view is the product. West-facing glass exists because people pay for sunsets, not because architects can't do math. A parametric optimizer with a pure energy objective would delete every west window; a home with no west windows is a worse home, not a better one. The honest version of this article: tune the glass, don't ban it. Also, daylight and view have documented wellbeing value that kWh math doesn't capture — the optimizer is blind to the thing the glass is for.

## Skepticism notes
- Parametric tools are real (EnergyPlus-backed) but the residential market barely uses them: the workflow lives in Rhino/Grasshopper, which most residential architects don't touch. The "AI" in current products is mostly a UI on top of the same simulation.
- Katerra-style warning applies: software that designs buildings still has to survive plan check. Title 24's performance path is the legal on-ramp for tuned facades — the tool doesn't replace the energy consultant.
