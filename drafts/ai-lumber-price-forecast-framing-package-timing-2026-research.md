# Research: AI Lumber Price Forecasting — Timing the Framing Package

**Slug:** ai-lumber-price-forecast-framing-package-timing-2026
**Journalist:** Frank "The Foreman" DeLuca (Project Management & Operations)
**Date:** September 10, 2026
**Kill test:** A GC or owner-builder deciding when to lock a framing package can save ~$3,000 per house by timing the commodity cycle. This helps someone building a home. PASS.

## Thesis
Framing is 16.6% of new-home construction cost (NAHB 2024 survey), and the commodity inside it — softwood framing lumber — is the most volatile input on the bill. In 2026, duties, mill closures, and Canadian wildfires pushed the Random Lengths composite to $535/MBF, its highest since September 2022 and 23% above a year earlier. AI price-forecasting tools (LLAIE's material cost trend tracking, academic ANN/lumber-futures models) are now aimed at the buy-timing question: lock now or wait? The math says the swing on a single typical house is roughly $3,000 — real money on a per-unit basis for small builders, and the institutional tools (CME futures) are too illiquid for a residential GC to hedge with.

## Primary sources (8)

1. **NAHB Framing Lumber Prices page** (updated ~Sep 2026, data through Aug 28, 2026): Madison's Lumber Price Index at $521.35/MBF on Aug 28 (down 1.6% WoW, down 6.6% MoM, up 9.3% YoY). Preliminary AD/CVD duties on Canadian softwood fell from 35.2% combined to 25.9% (10.7% AD + 14.2% CVD); plus the 10% Section 232 tariff = 35.9% on Canadian imports. Surveys by Home Innovation Research Labs: average new single-family home uses ~15,000 board feet of framing lumber + 2,200 sq ft softwood plywood + 6,800 sq ft OSB.
   https://www.nahb.org/News-and-Economics/Housing-Economics/National-Statistics/Framing-Lumber-Prices/?_ga=2.172616736.288183860.1596739367-990402601.1595433984

2. **Wall Street Journal** (Aug 2026): "Home-Building Is Sputtering, but Lumber Prices Haven't Been So High in Years." Random Lengths Framing Lumber Composite reached $535/MBF — highest since September 2022, 23% higher than a year ago. Supply-driven: Canadian duties, 10% tariff, mill curtailments BC to Florida. D.R. Horton and Meritage Homes call the run-up a headwind. Lumber futures down ~12% from late-July high — D.A. Davidson's Kurt Yinger suspects prices "now approximate what will ultimately be their highs for the year."
   https://www.wsj.com/finance/commodities-futures/home-building-is-sputtering-but-lumber-prices-havent-been-so-high-in-years-a2ef1cf2

3. **Barchart** (Jul 28, 2026): CME physical lumber futures at $642.50/MBF, 11.5% above the 2025 close; Canadian wildfires stoking supply fears. Trading range since Aug 2022: $450.50–$712.00/MBF. New smaller contract has only 8,077 contracts of open interest (Jul 27) — illiquid. Seasonality: demand declines late fall/winter. Old contract hit $1,711.20 (May 2021) and $1,477.40 (Mar 2022).
   https://www.barchart.com/story/news/3559725/what-are-the-prospects-for-lumber-prices

4. **Fastmarkets 2026 North American wood products outlook**: softwood lumber capacity to decline by over 1.3 billion board feet on BC and US South mill closures; duties may fall to 15-20%; tariffs on Brazilian panels; volatility forecast to rise 50-100% from sleepy 2023-24 levels; builder confidence "lowest since the Global Financial Crisis."
   https://www.fastmarkets.com/insights/five-predictions-for-the-2026-north-american-wood-products-market/

5. **NAHB Cost of Construction Survey 2024**: average construction cost $428,215 ($162/sq ft, series record); framing = 16.6% of construction cost (down from 20.5% in 2022 — the largest percentage-point decrease of any stage). Interior finishes 24.1%, rough-ins 19.2%, exterior finishes 13.4%.
   https://getfea.com/end-use/construction-costs-of-a-new-us-single-family-home-increased-in-2024?doing_wp_cron=1762646818.4229469299316406250000

6. **U.S. Lumber Coalition rebuttal (Mar 2025)** — the counterargument's numbers: 2024 monthly RL composite averaged $400/MBF; a standard home uses 15 MBF → $6,000 softwood cost, ~1.2% of the $506,208 average 2024 new-home price; with $75/MBF transport + 18% wholesaler margin, builder cost $8,413 = 1.7% of home price. (Drawn from West Fraser 2024 investor presentation.)
   https://uslumbercoalition.org/wp-content/uploads/2025/03/NAHB-Claims-Analysis-03202025_FINAL.pdf

7. **Oregon State / Prof. (Reimer) lumber price prediction research** (today.oregonstate.edu): from 2005-2020 the RL composite ranged $346–$924/MBF — the $578 spread nearly equal to the 15-year average itself. Method predicts direction 6 months out using readily observable info.
   https://today.oregonstate.edu/news/lumber-prices-skyrocket-oregon-state-professor-develops-method-predict-future-price-changes

8. **MDPI Forests: ANN vs classical timber price forecasting**: artificial neural networks (MLP/RBF) beat ARIMA/ETS/TBATS on timber prices, especially outliers and turning points; classical models biased toward average values and missed upward trends. Academic support that ML is genuinely better suited to lumber's fat-tailed moves than trend extrapolation.
   https://www.mdpi.com/1999-4907/14/2/177

## Tools / products
- **LLAIE (Lund Lumber AI Estimator)**: AI blueprint-to-material-list in under 5 minutes; imports supplier price lists; "material cost trend tracking & markup recommendations" — the closest shipping product to AI buy-timing guidance for builders/yards. JobTread integration.
  https://www.youtube.com/watch?v=iAm3ZJvnRo4
- **Random Lengths / Fastmarkets** pricing data feeds (paid); **Madison's Lumber Reporter** weekly; CME physical lumber futures (illiquid, 8K open interest — not a practical hedge for a GC).

## Original calculation (the finding)
A typical new single-family home uses ~15,000 board feet of framing lumber (NAHB/Home Innovation Research Labs). Using the observed Aug-2022-to-2026 trading range ($450.50 low to $712.00 high):
- Worst-case buy vs best-case buy: $261.50/MBF × 15 MBF = **$3,923 swing per house** on the framing lumber alone.
- More realistic 2026 seasonal swing (Jan ~$450 SPF benchmark per Madison's to summer ~$535-595 composite/SYP readings): ~$100-150/MBF × 15 MBF = **$1,500-$2,250 per house**.
- A small builder framing 20 homes/year leaves $30K-$78K on the table depending on buy timing — roughly one superintendent's salary. Nobody in the trade press has run this per-unit math against the 2026 duty environment.

Context math: 16.6% of $428,215 = ~$71,084 framing-stage cost. The lumber commodity portion (~$6K-$8.4K per the Coalition's own 2024 math, higher in 2026) is the volatile core; labor and trusses/sheathing are steadier.

## Strongest counterargument (full strength)
The U.S. Lumber Coalition's math is correct and devastating to the "lumber is killing affordability" narrative: framing lumber is ~1.2-1.7% of a new home's price. A $3,000 swing is noise against a $500K+ home and dwarfed by land, labor, and regulatory costs. Worse for the AI-forecast pitch: no forecast beats the practical tools builders already have — most buy from yards on 30-60 day price locks, not spot, and the yard's bunk price smooths weekly spikes. The CME futures contract is too illiquid to hedge a residential schedule. An AI that predicts the composite with 96% trend accuracy (cf. the RePEc wood-panel paper's 96.1% 60-day trend accuracy) still can't tell you what YOUR yard will charge for YOUR package on YOUR delivery date. Forecasting the commodity is not the same as forecasting the invoice.

## Limitations
- Random Lengths composite and Madison's index are wholesale/mill benchmarks, not delivered yard prices; transport, handling, and yard margins ($75/MBF transport + ~18% margin per Coalition math) vary by region and were not independently verified.
- LLAIE pricing, accuracy of its trend tracking, and user adoption were not verified — claims come from the vendor's own video description.
- The $3,923 and $1,500-$2,250 figures are arithmetic on published benchmarks, not observed transaction data; no third-party audit of builder-level savings exists.
- Assumes 15 MBF/home (NAHB/Home Innovation) — smaller homes and panelized builds use less; the swing scales linearly.
- Seasonal pattern (spring/summer highs, fall/winter lows) is historical tendency, not a law — 2026's duty and wildfire shocks are supply-side and can override seasonality.

## Skepticism notes
- Katerra-style "tech fixes lumber" graveyard: plenty of startups promised procurement AI; lumber's price discovery is still phone calls and bunk pricing.
- Fastmarkets itself warns policy-driven forecasting is "challenging to say the least" — tariffs and duties move faster than any model retrains.
- Builders who tried to "time" 2021-2022 got destroyed both ways; the honest advice may be "buy when the slab is ready," not "buy when the model says."

## Headline candidates
- "Lumber Moved $120 Per Thousand Feet in Six Weeks. Your Framing Bid Expired Yesterday."
- "Your Framing Package Costs $2,200 More Than It Did in January. An AI Could Have Told You."
- "The Lumber Market Swung $3,900 Per House This Cycle. Your Supplier Saw It Coming; Did You?"
