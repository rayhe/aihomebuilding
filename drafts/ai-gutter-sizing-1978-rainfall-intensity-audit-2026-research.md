# Research: AI Gutter Sizing & the 1978 Rainfall Table (#965)

**Slug:** ai-gutter-sizing-1978-rainfall-intensity-audit-2026
**Journalist:** Frank "The Foreman" DeLuca (Project Management & Operations)
**Date researched:** 2026-09-24
**Status:** Novel vs 929 existing slugs (zero prior gutter/attic-ventilation/driveway/fence coverage)

## Kill test
Does this help someone building or buying a home? **Yes.** Gutter size is a spec decision on every new build and every gutter replacement. A 5"-to-6" upsell costs $400-800 on a typical home; getting it wrong means fascia rot, soffit damage, and foundation water. This article gives the reader the actual sizing math and tells them when the upsell is worth it and when it is contractor margin.

## Core findings

### 1. The rainfall data behind gutter sizing is 48 years old
- SMACNA's gutter/downspout sizing tables (Table 1-2 rainfall intensities) are "based on records through 1978" — per the SMACNA document reproduced by Amerimax. ([source](https://mans.io/files/viewer/1827176/1))
- SMACNA's formula: 96.15 sq ft of roof at 1 in/hr rainfall = 1 gpm of flow. Example in the document: New Orleans 5-minute 100-year intensity 8 in/hr; Los Angeles also listed. ([source](https://git.openingdesign.com/OpeningDesign/OD_Library/raw/commit/7d024c72531fb8893d9b661962168ae3a2995907/AEC%20Literature/D20%20Plumbing/D2020%20Sanitary%20Drainage/077123%20-%20Manufactured%20Gutters%20and%20Downspouts/gutter%20sizing%282%29.pdf))
- UPC Appendix D Table D1 (still referenced by inspectors for gutter math): Phoenix design intensity 2.2 in/hr = 0.023 gpm per sq ft of roof. 2,500 sq ft roof = 57.5 gpm = 3,450 gallons per hour, "over 10 tons of water." ([source](https://forum.nachi.org/t/gutter-size-calculation-article/47225))

### 2. Rain is heavier than the tables say
- Fifth National Climate Assessment via Climate Central: precipitation on the heaviest 1% of days increased 1958-2021: Northeast +60%, Midwest +45%, Southeast +37%, South +21%. ([source](https://www.climatecentral.org/climate-matters/extreme-precipitation-in-a-warming-climate))
- EPA: heavy precipitation events happening more often across the contiguous US since the 1950s, especially Northeast and Midwest; strong evidence warming contributed. ([source](https://www.epa.gov/climatechange-science/extreme-precipitation))
- First Street Foundation (2023) warned Atlas 14 infrastructure data is out of date: in the worst cases, what is estimated to be a 1-in-100-year flood is actually a 1-in-8-year event. ([source](https://www.wmnf.org/floods-worsening-engineers-worry-national-rainfall-database-wont-be-updated/))

### 3. Atlas 15: the fix that may not ship
- NOAA Atlas 15 will supersede Atlas 14 with nationwide coverage and nonstationary (trend-aware) statistics; Volume 1 (observed, trend-adjusted) slated 2026, Volume 2 (climate-model projections of future rainfall) 2027 per the Feb 2025 NOAA progress report. ([source](https://www.weather.gov/media/owp/oh/hdsc/docs/202501_HDSC_PR.pdf))
- Atlas 15 Volume 2 — the forward-looking volume — was suspended by the Commerce Department in 2025 before completion; described as low-cost and nearly finished. ([source](https://resist.bot/letters/6c26b189-9eca-45df-9e4a-0711c8e8f5a9))
- Engineering takeaway from Nave Newell: Atlas 15 will "require us to reevaluate, and likely upsize, our stormwater management systems"; design storm volumes "will generally increase." ([source](https://www.navenewell.com/noaa-atlas-15/))

### 4. Nobody sizes residential gutters with any of this
- The IRC does not mandate gutters at all. R801.3 only requires a "controlled method of water disposal" in areas with expansive or collapsible soils, discharging 5 ft from the foundation. No national code specifies gutter size. (Inspector consensus, InterNACHI/Fine Homebuilding forums: [1](http://www.inspectionnews.net/home_inspection/roofing-system-home-inspection-and-commercial-inspection/21769-guttering-requirement.html), [2](https://www.finehomebuilding.com/forum/gutter-requirements))
- Residential gutter sizing is contractor rule-of-thumb. The two competing rules of thumb do not agree with each other: the "5,520 sq ft" rule for 5" K-style (Ontario contractor table) vs SMACNA downspout pairing math (a 2x3 downspout serves ~600 sq ft at 1 in/hr per SMACNA Table 1-3). At design intensities of 6-8 in/hr those numbers collapse by a factor of 6-8.

### 5. The 5" vs 6" numbers
- Capacity (ideal conditions): 5" K-style ~1.2 gal/min per foot of run, rated to ~5,520 sq ft; 6" K-style ~2.0 gal/min/ft, rated to ~7,960 sq ft. Downspout pairings: 5" uses 2x3 (drains ~600 sq ft each); 6" uses 3x4 (drains ~1,200 sq ft each, doubling exit capacity). ([source](https://www.custom-contracting.ca/blog/5-inch-vs-6-inch-eavestrough-ontario), [source](https://ridgelineconstructionhsv.com/5-inch-vs-6-inch-gutters/))
- Field rules: runs over 40 ft should not have single-terminal discharge; 5" systems target ~25 ft of gutter per downspout; 6" can stretch to ~35 ft. ([source](https://www.thegutterguy.com/s/Gutter-and-Downspout-Sizing-Principles-in-Residential-Applications.pdf))
- Costs (2026): 5" seamless aluminum $8-12/ft installed; 6" $10-16/ft. Typical 150-ft home: $1,400-2,200 vs $1,800-3,000. Upgrade delta: roughly $400-800. ([source](https://ridgelineconstructionhsv.com/5-inch-vs-6-inch-gutters/), [source](https://github.com/ripplejonathan/rippleroofs/blob/HEAD/content/blog/gutter-installation-austin.mdx))
- Failure costs: single fascia board replacement from overflow damage $600-6,000 (Angi 2026, via Ridgeline); restoration-industry press releases put average water-damage incident payouts around $11,000-15,400 (aggregator sources, treat as directional).

### 6. The AI angle
- Drone + AI inspection is already at the roofline: EagleView Assess (drone-powered inspection and damage detection, 300+ patents, 3B+ image library); Loveland Innovations IMGING with on-site drone measurements and deep-learning damage detection; Hover turns smartphone photos into 3D property models with material takeoffs. ([source](https://eijournal.com/news/products-2/imging-becomes-first-drone-platform-with-on-site-roof-measurements-adds-ai-damage-detection-for-commercial-roofs), [source](https://markets.financialcontent.com/worldnow/article/prunderground-2026-1-6-property-claims-research-network-reviews-top-5-roof-measurement-companies-for-insurance-adjusters-in-2026))
- Gap: none of these tools sell a *gutter-sizing audit* to the homeowner. The inspection industry photographs the roof and the insurance industry prices the risk, but nobody runs the SMACNA math against the house. That is the article's proposed audit: 6 measurements (run length, downspout count/size, roof plane area, pitch, valley concentration, local design intensity) photographed and computed.

## Original contribution (worked math)
1. **The 1978-gap calculation:** SMACNA Table 1-2 intensities are based on records through 1978. In the Northeast, heaviest-1%-day precipitation is up 60% since 1958 (Fifth NCA). A gutter system "correctly sized" to a 1978 intensity table is carrying 2026 rain. On a 1,500 sq ft roof plane at 4 in/hr: 1,500 x 4 / 96.15 = 62 gpm of inflow. A 40-ft run of 5" K-style moves ~48 gpm (1.2 gpm/ft). Overflow begins in under a minute; a 6" run moves ~80 gpm and buys margin. Assumptions stated: ideal slope, clean gutters, single outlet — real-world worse.
2. **The break-even:** $400-800 upsell vs $600-6,000 single fascia repair (Angi 2026). One prevented overflow incident pays for the upgrade on most homes.
3. **The design-life mismatch:** aluminum gutters are sold as 20-30-year components; the intensity tables sizing them are 48 years old and predate the observed trend entirely.

## Limitations
- Capacity figures (1.2 / 2.0 gal/min/ft) are from a contractor whitepaper and a Canadian contractor table, not an independent lab test; treat as directional.
- SMACNA Table 1-2 is a commercial/architectural standard; residential practice is rule-of-thumb, so "sized to 1978 data" is shorthand for "the only published intensity tables in common use are stale," not a claim that contractors literally consult Table 1-2.
- Climate Central/NCA figures are daily extremes (heaviest 1% of days), not 5-minute gutter-design intensities; the directional argument holds but the percentage does not transfer 1:1 to a gutter inflow calc.
- No peer-reviewed study links gutter undersizing to claim frequency; the fascia-repair cost figure is Angi 2026 via a contractor blog.

## Strongest counterargument (to state at full strength)
Most gutter overflow is a maintenance failure, not a sizing failure: a clean 5" gutter, correctly sloped, with downspouts every 25 feet, handles nearly every real storm outside hurricane country. The 6" upsell is often contractor margin dressed as engineering. And Atlas 15 is municipal-stormwater policy, not residential practice — no code ties gutter size to IDF curves, so calling the data "stale" for a component nobody engineers is a category error. The honest version: the data gap matters at the subdivision and storm-sewer level; at the eave level, cleaning your gutters twice a year buys more capacity than an extra inch of aluminum.
