# Research: AI Circadian Lighting Design — The mEDI Gap in Residential Plans

**Slug:** ai-circadian-lighting-medi-gap-residential-design-2026
**Journalist:** Elena Vasquez (Architecture & Design)
**Date:** October 7, 2026
**Article #:** 1029 (queue position after #1028)

## Thesis

Your lighting designer specs foot-candles and Kelvin. Your body runs on a third metric nobody puts on the plan: melanopic equivalent daylight illuminance (mEDI), the light that actually sets your circadian clock. The science now has hard targets — 250 mEDI minimum at the eye during daytime, 10 maximum in the evening, 1 for sleep — and a typical new-build residential lighting plan fails both ends at once: too dim in the biological sense by day, too bright by night. AI simulation (spectral ray-tracing, algorithmic light recipes) can compute this before rough-in. Almost nobody does.

## Kill test

Does this help someone building or buying a home? Yes. A homeowner spending $25K–$60K on a lighting package gets: (1) a worksheet to convert any room's lux + CCT into mEDI and compare against the published targets; (2) the exact thing to demand from a lighting designer ("show me vertical-plane mEDI per room, not just horizontal lux"); (3) a $0 verification path (phone-app lux meter won't do mEDI, but a handheld EML meter will) and a free simulation path (Radiance/Alfa-Lark) before walls close.

## Primary sources (5)

1. **Brown et al., 2022, PLOS Biology** — expert consensus (workshop of lighting, neurophysiological photometry, sleep/circadian researchers): daytime minimum 250 lux melanopic EDI at the eye, vertical plane ~1.2 m; evening maximum 10 lux melanopic EDI starting 3 h before bed; sleep environment maximum 1 lux. https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001571

2. **Cain et al., 2020, Scientific Reports** — wearable spectrophotometer measurements in real homes: median melanopic illuminance at 10 pm was 11.0 mlux (range 2.4–49.6 mlux); nearly half of homes were bright enough to suppress melatonin ≥50%; average home produced 0–87% predicted suppression across individuals. Inter-individual sensitivity varied 50-fold (ED50 3.1–181 mlux). https://www.nature.com/articles/s41598-020-75622-4

3. **CIE S 026/E:2018** — international standard defining the spectral weighting functions (melanopic DER / melanopic EDI) used to quantify circadian-effective light. Daylight (D65) MDER = 1.0 by definition.

4. **Scientific Reports 2025 (lamp mitigation study)** — in-silico analysis of 52 modern lamps: fixed "warm" CCT LEDs give a 3.4-fold (236%) reduction in melatonin suppression value vs. cool LEDs; tunable LEDs shifting warm in the evening match or beat fixed-warm lamps; typical measured illuminance for modern lamps ~55 lux (above the 50 lux threshold). https://www.nature.com/articles/s41598-025-29882-7

5. **IES, "Circadian Lighting in Offices: Feasibility Boundaries and Design Trade-Offs"** — design reality check: hitting vertical melanopic targets while satisfying IES RP-1 horizontal illuminance (300–500 lux), glare limits (UGR ≤19), and energy codes simultaneously is often infeasible; spectral tuning trades against luminous efficacy. https://ies.org/fires/circadian-lighting-in-offices-feasibility-boundaries-and-design-trade-offs/

## Secondary/vendor data (label as such)

- **WELL v2 L03 Circadian Lighting Design:** 275 EML (250 melanopic EDI) for 3 points, 150 EML (136 mEDI) for 1 point, vertical plane at eye level, 4 h beginning by noon; dwelling units use performance testing. https://i2cms.s3.amazonaws.com/media/documents/WELL-V2-Rev3.pdf
- **Signify BioUp MDER values** (typical phosphor-converted LED, usable as industry-typical): 2700K → 0.44; 3000K → 0.59; 4000K → 0.82; 5000K → 0.97. (Vendor data; typical CIE-aligned values.)
- **BrainLit BioCentric Lighting:** algorithm-based light recipes from a chronobiological simulation model; claims high-end DER 1.084 (108% of daylight). Vendor claim, flag as such. https://www.brainlit.com/wp-content/uploads/2021/11/WIP_BCL_vs_HCL.pdf
- **Ketra (Lutron):** tunable full-spectrum fixtures, ~$1,000/room residential, bulbs $100+; proprietary semiconductor re-measures color 360×/sec. https://www.techhive.com/article/599742/ketra-s-bright-idea-brings-dynamic-led-lighting-to-affluent-smart-homes.html
- **Lucibel Cronos:** 28-day, 70-employee study claiming 75% reported performance/sleep improvements. Vendor study, flag as such.
- **In. Licht Pro:** handheld EML/m-EDI meter, Bluetooth + app, WELL v2 aligned outputs. (Product exists; pricing not verified.)
- **Alfa/Lark (Solemma) + Radiance:** spectral circadian lighting simulation inside Rhino/Grasshopper — the free/OSS path to pre-construction mEDI verification.

## ORIGINAL CONTRIBUTION — the mEDI gap worksheet (computed 2026-10-07)

Method: mEDI ≈ vertical-plane photopic lux × melanopic DER. Standard lighting-design rule of thumb: for typical residential downlight layouts, vertical illuminance at eye level ≈ 1/3 of horizontal work-plane illuminance. MDER from Signify BioUp typical values. Representative new-build, all-electric, no daylight contribution (worst-case winter / interior rooms).

| Room / time | Horizontal lux | CCT | MDER | Vertical lux (est.) | mEDI | Target | Verdict |
|---|---|---|---|---|---|---|---|
| Kitchen, daytime | 400 | 4000K | 0.82 | ~130 | ~107 | 250 | **57% short** |
| Living room, evening | 150 | 2700K | 0.44 | ~50 | ~22 | ≤10 | **2.2× over** |
| Bedroom, evening | 100 | 2700K | 0.44 | ~33 | ~15 | ≤10 | **1.5× over** |

What hitting 250 mEDI daytime would actually require (vertical plane, electric light only):
- At 2700K (MDER 0.44): ~570 lux vertical → absurd with downlights.
- At 5000K (MDER 0.97): ~258 lux vertical → reachable, but nobody wants a 5000K living room.
- Conclusion: without daylight or spectral-boosted fixtures, the daytime target is effectively unreachable in a normal living room — the plan fails by design, not by execution.

Cross-check against measured reality: Cain et al.'s median home hit 11.0 melanopic lux at 10 pm (target ≤10); the brightest measured home, 49.6, was ~5× over. So the worksheet's evening estimate (22) lands squarely inside the measured range — the model is consistent with field data.

## Counterarguments (full strength)

1. **The targets are consensus, not law.** Brown et al. is a workshop consensus; no ANSI/ASHRAE/IECC residential standard adopts mEDI. Designing to an unadopted metric risks expensive over-spec.
2. **Individual sensitivity varies 50-fold.** The same evening light that suppresses one person's melatonin by 80% does nothing to another's. A single number on a plan pretends a precision the biology doesn't support.
3. **Daylight does the heavy lifting.** Brown et al. says use daylight first. A well-fenestrated home with 10,000+ lux outdoors needs no electric circadian strategy by day — the electric-light math above is a worst case, and windows are the cheapest fix.
4. **The evening fix is behavioral, not architectural.** Dimming to 10 mEDI is a $30 smart-bulb schedule, not a $40K lighting package. The article must not launder a controls problem into a construction story.
5. **IES trade-off reality.** Chasing vertical melanopic targets can blow glare budgets and energy codes; the IES feasibility paper says the constraints often can't be satisfied simultaneously.

## Limitations

- The worksheet uses the 1/3 vertical-from-horizontal rule of thumb, not a ray-traced simulation; real rooms vary ±50% with layout, reflectance, and furniture.
- MDER values are typical for phosphor-converted LEDs; real lamp SPDs differ by brand.
- Daylight contribution ignored; in daylit rooms the daytime "failure" mostly vanishes.
- No measurement was taken in a real home for this article; evening numbers are cross-checked against Cain et al.'s field data, daytime numbers are modeled only.
- Ketra/BrainLit/Lucibel performance figures are vendor claims; no independent residential field trial of AI/algorithmic circadian lighting was found.

## Article angle (Elena)

Architecture as lived experience, not spec sheet: the lighting plan is a beautiful PDF that has never once been measured against the only metric your body reads. Elena's skepticism of optimization-flattening applies — but here the numbers argue for *more* design intelligence, not less: spectral simulation (Alfa/Lark), vertical-plane thinking, and the honest admission that a 2700K-everything house cannot biologically work by day. End with the actionable: demand vertical mEDI on the plan, verify with a meter, and treat evening dimming as the cheapest circadian upgrade in the house.
