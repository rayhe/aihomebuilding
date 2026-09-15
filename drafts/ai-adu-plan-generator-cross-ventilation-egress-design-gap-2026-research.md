# Research: AI-Generated ADU Plans — The Cross-Ventilation and Egress Gap

**Slug:** ai-adu-plan-generator-cross-ventilation-egress-design-gap-2026
**Journalist:** Elena Vasquez (Architecture & Design)
**Article #:** 867
**Date:** 2026-09-15

## Angle

AI floor-plan generators (Maket.ai et al.) can draw a buildable-looking ADU in under a minute. They optimize for what they can measure: area efficiency, room count, cost. They cannot measure what makes a 450-square-foot home livable: which way the wind blows through it, whether the bedroom window clears the dresser in a fire, how far daylight reaches into a deep plan. Elena's skepticism of tools that flatten design into optimization is the voice; the original contribution is the **Three-Window Audit** — a 10-minute check any homeowner can run on an AI-generated plan before paying a permit fee.

## Kill test

Does this help someone building a home? Yes. California homeowners are the single largest cohort of ADU builders in American history, and the free AI plan generator is now the first "architect" most of them will ever meet.

## Primary sources

### 1. Brookings Institution — "California's decade-long effort to legalize ADUs offers lessons for other US states and regions" (Aug 21, 2024)
- https://www.brookings.edu/articles/californias-decade-long-effort-to-legalize-adus-offers-lessons-for-other-us-states-and-regions/
- CA ADU permits: ~9,000 statewide in 2018; **Los Angeles County alone permitted 45,000+ ADUs in 2023**.
- ADUs went from <1% of new California construction before 2017 to roughly **20% of new units** (per AB 1154 bill analysis citing HCD APR Dashboard).

### 2. CA AB 1154 Policy Committee Analysis (2025-26 session, billtexts.s3.amazonaws.com)
- https://billtexts.s3.amazonaws.com/ca/ca-analysishttps-leginfo-legislature-ca-gov-faces-billAnalysisClient-xhtml-bill-id-202520260AB1154-ca-analysis-382912.pdf
- 23,000+ ADUs legally completed in California in 2023; market feasibility estimated at ~1.8 million units.
- AB 1332 (Carrillo, 2023): local governments must create pre-approved ADU plans or maintain lists of pre-approved designs.

### 3. Tech Funding News — Maket, "ChatGPT for architecture," raises $3.4M CAD
- https://techfundingnews.com/montreal-maket-chatgpt-architecture-raises-3-7m-cad/
- Founded 2020 by Patrick Murphy, Stéphane Turbide, Simon Vallée; platform launched 2023; **1M+ registered users**; >$4M CAD raised total.
- Core product: instant floor-plan generation, editing, 3D visualization, style exploration, regulatory/zoning assistant.
- Named competitors: ARCHITECTUREs, ArkDesign AI, Archistar, TestFit, Cove.tool.

### 4. aihungry.com — Maket Review 2025
- https://aihungry.com/tools/maket
- Confirms: AI plan generator ("thousands of early-stage concepts in minutes"), virtual assistant for materials/costs, regulatory assistant for zoning/code questions. Notes the learning curve and that feature breadth can exceed small-project needs.

### 5. Ventilation science — Wiley ADCE review citing Jiang et al., Iskandar et al., Yin et al.
- https://onlinelibrary.wiley.com/doi/10.1155/adce/2094687
- Iskandar et al.: of six simulated natural-ventilation schemes, **cross ventilation identified as the optimal strategy**, with significant energy savings especially in shoulder seasons.
- Jiang et al.: wind-tunnel work on single-sided vs. cross ventilation across building aspect ratios — morphology governs effectiveness.
- Yin et al.: studies overestimate window ventilation because they ignore indoor obstacles; **furniture placement materially changes IAQ and energy outcomes**.

### 6. Drexel / Energy and Buildings — natural ventilation in residential buildings (Martinez-Molina)
- https://DREXEL.EDU/news/archive/2024/December/natural-ventilation-in-historic-buildings-can-reduce-energy-use
- Cross ventilation the most efficient of the tested natural-ventilation strategies for energy savings; night-flush ventilation removes stored heat and cuts next-day mechanical cooling.

### 7. IRC R310 (emergency escape and rescue openings) — code baseline
- Egress window: minimum net clear opening 5.7 sq ft (5.0 sq ft at grade-floor), minimum clear height 24 in, minimum clear width 20 in, maximum sill height 44 in above finished floor. Every sleeping room needs one. An AI plan that draws a pretty bedroom with a 30-inch sill or a fixed picture window is a plan that dies at plan check.

## The gap (original contribution)

AI generators score plans on efficiency metrics. Nobody scores them on:

1. **Cross-ventilation path** — air must enter one wall and exit a different one. The typical generated ADU is a single-loaded rectangle: kitchen, bath, and bedroom all venting off one side. In a September heat wave in the San Fernando Valley, that is an oven with a lease.
2. **Egress vs. furniture reality** — the generator places a queen bed against the only code-compliant window wall. On paper the window meets R310; in the built room the dresser blocks it. Yin et al.'s finding (furniture degrades ventilation and IAQ) has a fire-safety twin nobody talks about.
3. **Daylight depth** — the design rule of thumb: useful daylight reaches roughly 2.5x the window head height into a room. A 14-foot-deep generated plan with 7-foot head heights goes dark in the middle by 3 p.m. The render, lit like a showroom, never shows this.
4. **Storage** — working architects budget ~10% of a small home's floor area for storage. Generated plans routinely draw closets as afterthoughts or omit them; the square footage "efficiency" the tool brags about is partly storage it deleted.

**The Three-Window Audit** (the actionable core): a 10-minute, no-software check for any AI-generated plan:
1. Trace the breeze: draw a line from every operable window to the nearest window on a different wall. No line, no cross-ventilation.
2. Furnish the egress: sketch the bed and dresser in the bedroom, then check the window still opens clear with the sill at or below 44 inches.
3. Measure the daylight: from each window wall, mark 2.5x the head height. Anything past the line needs a skylight, a second window wall, or a narrower plan.

## Strongest counterargument

The tools are getting smarter, not dumber: Maket's regulatory assistant already answers zoning and code questions, and nothing stops a future generator from embedding a ventilation simulation. Human architects also draw bad ADUs — plenty of permitted plans fail the audit above. The argument is not that AI plans are uniquely bad; it is that their speed and polish (a 3D render in 40 seconds) launder away the skepticism a hand sketch would invite.

## Limitations

- Maket's 1M registered users is a top-of-funnel number, not built homes; no public data on how many generated plans reach permit.
- Ventilation studies cited are simulation/CFD and wind-tunnel based, not randomized trials in occupied California ADUs.
- Daylight 2.5x rule is a rule of thumb, not code; actual performance depends on glazing, orientation, and shading.
- Egress dimensions cited are IRC baseline; California amendments and local interpretations vary — verify with the AHJ.

## Actionable takeaways (for the article)

- Use the AI generator for what it is good at: massing exploration and 20 bad ideas before breakfast. Free.
- Before paying a permit fee, run the Three-Window Audit; fix failures by narrowing the plan, adding a second window wall, or moving the bedroom.
- California's pre-approved ADU plan libraries (AB 1332) are the free, code-vetted alternative — start there, use AI for siting and style exploration.
- If you hire an architect for an ADU ($5k-$15k typical in California), ask them to show the cross-ventilation path in the first meeting. If they cannot, you hired a renderer, not a designer.
