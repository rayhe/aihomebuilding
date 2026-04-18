# Research: AI Demand Forecasting for Spec Home Starts Optimization

## Journalist: Frank "The Foreman" DeLuca
## Date: April 18, 2026

## Thesis
Production builders make their most expensive recurring decision — how many spec homes to start each month — using spreadsheets, backward-looking sales data, and gut instinct. When markets turn volatile (as they have in April 2026 with Iran conflict, oil prices, and collapsing builder sentiment), the penalty for guessing wrong is severe: every unsold completed spec home bleeds ~$3,100/month in carrying costs. AI demand forecasting tools (Zonda, etc.) exist but adoption at the operational level — the actual starts decision — remains thin.

## Kill Test
Does this help someone building or buying a home? YES. Builders need to optimize starts decisions to survive volatile markets. Homebuyers benefit because smarter starts = fewer fire-sale discounts on overbuilt inventory AND fewer shortages in underbuilt markets.

## Primary Sources (3+)

### Source 1: NAHB/Wells Fargo Housing Market Index — April 2026
- HMI: 34 (8-month low, down 4 from March, below 50 = negative)
- 62% of builders report material cost increases from oil/fuel
- 70% report pricing challenges due to material cost uncertainty
- Sales expectations plunged 7 pts to 42
- 36% of builders cutting prices (avg 5% reduction)
- Iran war, oil prices, inflation fears weighing on market
- West region hit hardest (29)
- Source: realtor.com reporting on NAHB data (April 2026)

### Source 2: Census Bureau — Build Times & Housing Data
- Average single-family build time: 10.1 months (3 months longer than a decade ago)
- Source: Census Bureau via NAHB Eye on Housing (August 2024)
- FRED MSACSR (Monthly Supply of New Houses) — tracking new home inventory levels

### Source 3: Builder Earnings — Cancellation Rate Data
- D.R. Horton cancellation rate spiked in 2022 rate shock (industry-wide spike above 25%)
- PulteGroup Q2 2025: 7,639 closings, $559K avg price, 27% gross margin
- Builder revenue highly sensitive to cycle time and inventory management
- Sources: Public earnings reports (D.R. Horton, PulteGroup, Lennar, KB Home)

### Source 4: Carrying Cost Data
- Construction loan rates: 7-9% (current)
- Builder's risk insurance: market softening but still $200-400/month per unit
- Property taxes accrue on completed homes
- Source: AmWins H1 2025 Builder's Risk Report, Bankrate

### Source 5: Zonda (Demand Forecasting Platform)
- Real-time housing demand data at CBSA, zip code, and community level
- Tracks supply, demand, land, lots, listings, builders, sales
- "Forecast with precision" — supply, future lots, demand alignment
- Used by major builders
- Source: zondahome.com

### Source 6: NAHB Blog — Cycle Time and Carrying Costs
- Builder case study: Glen Harris III, $4M builder who systematized scheduling
- Front-loading jobs to prevent delays
- Rework as "silent thief of time"
- Source: NAHB Blog (November 2025)

## Novel Contribution (Required)
**Per-unit monthly carrying cost calculation for unsold spec homes:**
- Median new home: ~$420,000
- Construction loan (~70% LTC): ~$294,000
- Monthly interest at 8%: ~$1,960
- Property tax (~1.2% annual): ~$420/month
- Builder's risk insurance: ~$250/month
- Utilities/maintenance: ~$150/month
- Opportunity cost (capital tied up): ~$320/month (at 1.3% monthly return on capital)
- **Total: ~$3,100/month per unsold completed spec home**

**Industry-scale extrapolation:**
If Census data shows ~100,000 completed new homes for sale nationally, and the average time from completion to sale is extended by even 30 days due to poor demand forecasting, the industry-wide excess carrying cost is: 100,000 × $3,100 = **$310 million/month** in carrying costs that could be reduced with better starts timing.

**Comparison to 2022 rate shock:**
During 2022, builders who over-started specs faced cancellation rates above 25% (vs normal ~15%). A 10-percentage-point increase in cancellations on, say, 600,000 annual starts = 60,000 unexpected unsold homes × $3,100/month × 3 months average overhang = **$558 million in excess carrying costs** — roughly the amount that better demand forecasting could have prevented.

## Strongest Counterargument
AI demand forecasting is only as good as its inputs, and the most damaging market turns (2022 rate shock, 2026 Iran conflict) are precisely the kind of black swan events that models can't predict. A model trained on 2019-2021 data would have recommended aggressive starts heading into 2022 — exactly the wrong call. The real value isn't prediction accuracy but scenario modeling: what happens to your portfolio if rates jump 200bps? What if absorption slows 30%? Traditional builders do this on napkins; AI does it with actual probability distributions.

## Limitations
- Per-unit carrying cost calculation uses median figures; actual costs vary dramatically by market (Austin vs. NYC vs. Phoenix)
- Census "completed unsold" data includes a mix of true spec overbuilds and model homes
- Zonda and similar platforms are used by large builders; adoption data for small/mid-size builders is anecdotal
- No published controlled study comparing AI-optimized starts decisions vs. traditional methods
- Construction loan rates vary by builder credit, relationship, and market — 8% is approximate

## Article Angle
Cold open: A specific builder in April 2026, watching NAHB sentiment crater, staring at 14 completed specs that won't sell this quarter. Each one costs $3,100/month to hold. He started them 10 months ago when the market looked fine. An AI tool could have flagged the risk — but he didn't use one.
