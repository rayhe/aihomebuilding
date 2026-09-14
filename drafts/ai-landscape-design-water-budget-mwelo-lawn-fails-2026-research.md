# Research: AI Landscape Renders vs. the Water Budget

**Slug:** ai-landscape-design-water-budget-mwelo-lawn-fails-2026
**Journalist:** Priya Greenwood (sustainability & green building)
**Date researched:** September 14, 2026
**Kill test:** Does this help someone building or buying a home? YES. Every new California home with more than 500 sq ft of landscaping must submit a water-budget worksheet proving estimated water use stays under the legal allowance. Buyers asking builders for lawns, and builders promising them, need the actual math. The AI design apps nobody mentions this.

## Angle

AI landscape apps (AIGardenPlanner, Gardenly, LandscapioAI, Yardzen) generate lush yard designs in about a minute for $9/month. None of them compute California's mandatory water budget. I ran the MWELO worksheet math for a typical new Bay Area yard and found the lawn fraction that actually passes: roughly one-third. The rest of the AI render is a permit problem.

## Primary sources

1. **Final MWELO regulatory text (Jan 3, 2025)** — CA Code of Regs Title 23, Division 2, Ch. 2.7. MAWA = ETo x 0.62 x [(ETAF x LA) + (1-ETAF) x SLA]. Max ETAF: 0.55 residential, 0.45 nonresidential, 1.0 SLA. Applies to new construction with landscape area >500 sq ft and rehabbed landscapes >2,500 sq ft. https://cwc.ca.gov/-/media/DWR-Website/Web-Pages/Programs/Water-Use-And-Efficiency/Urban-Water-Use-Efficiency/MWELO-Rulemaking/Final-MWELO-Text-and-Appendices_20250103.pdf
2. **MWELO Guidebook: Landscape Irrigation Water Budget Overview** — worked examples (Santa Monica ETo 44.2, Patterson ETo 57.3), ETWU = ETo x 0.62 x [(PF/IE) x LA] per hydrozone. https://cwc.ca.gov/-/media/DWR-Website/Web-Pages/Programs/Water-Use-And-Efficiency/Urban-Water-Use-Efficiency/MWELO-Files/MWELO-Guidebook/C--Landscape-Irrigation-Water-Budget-Overview.pdf
3. **MWELO Appendix C (23 CCR app C)** via Cornell LII — per-city annual ETo table; Alameda County cities 41-48.2 in/yr. https://www.law.cornell.edu/regulations/california/23-CCR-2-Chapter-2-7-app-C
4. **San Mateo County sample Water Efficient Landscape Worksheet** — uses ETo = 50.1; shows the real worksheet with hydrozones (front yard spray turf PF 0.8, IE 0.75; side yard drip PF 0.5; rear drip PF 0.3; pool PF 1.0), sitewide ETAF check at 0.549 vs 0.55 max. https://www.smcgov.org/media/73971/download?attachment
5. **AB 1572 phase-in deadlines** (Sunnyvale municipal page, cross-checked with BB&K law firm memo): potable-water irrigation of nonfunctional turf banned Jan 1, 2027 (public agency), Jan 1, 2028 (commercial/industrial/institutional), Jan 1, 2029 (HOA common areas). Residential properties explicitly NOT covered. https://www.sunnyvale.ca.gov/homes-streets-and-property/water-and-sewer/water/nonfunctional-turf
6. **AIGardenPlanner** — $9/month (50 designs/month), upload photo, design in under 60 seconds, 50+ styles. https://aigardenplanner.com?via=bonoboai
7. **Gardenly** — $4.50-$7/month tiers, 30-second photo-to-design, climate-zone plant recommendations. https://gardenly.app/ja
8. **LandscapioAI (Hacker News launch post)** — photo or satellite view in, render + line-item material/labor budget with +/-15% accuracy claim, contractor-ready PDF; free tier 3 designs/day, paid from $9/week. https://news.ycombinator.com/item?id=44274713
9. **Yardzen** via Garden Center magazine — $250 botanical makeovers to $1,000-$1,500 full-yard designs, human designers + materials lists. https://www.gardencentermag.com/article/take-landscape-design-online/

## Original contribution: the worked lawn-fraction math

Setting: new single-family home, Bay Area climate, annual ETo = 50.1 in/yr (the value San Mateo County's own sample worksheet uses; consistent with MWELO Appendix C Bay Area cities).
Landscape area: 2,000 sq ft (front + back after house, driveway, patio).

**MAWA (annual gallons allowed):**
MAWA = 50.1 x 0.62 x (0.55 x 2,000) = 31.062 x 1,100 = **34,168 gal/yr**
Budget per sq ft: 17.08 gal/sqft/yr.

**Cool-season turf hydrozone (the default AI render lawn):**
WUCOLS plant factor PF = 0.8 (high); overhead spray IE = 0.75 (MWELO standard).
ETAF_turf = 0.8/0.75 = 1.0667.
Per sq ft: 31.062 x 1.0667 = **33.13 gal/sqft/yr**.
Full 2,000 sq ft lawn = 66,260 gal/yr = **194% of the legal budget. Fails by 2x.**

**Maximum lawn if everything else gets zero water:**
34,168 / 33.13 = **1,031 sq ft = 51.6% of the yard.**

**Realistic design (rest as low-water drip plantings):**
Low-water shrubs: PF 0.2, drip IE 0.81 -> 31.062 x 0.2469 = 7.67 gal/sqft/yr.
33.13x + 7.67(2000 - x) <= 34,168 -> 25.46x <= 18,828 -> x <= **739.5 sq ft = 37% of the yard.**

So: the AI render's wall-to-wall lawn is illegal as drawn; the compliant ceiling is roughly one-third lawn plus drip, or half lawn with everything else bone dry.

## Secondary findings

- The San Mateo County sample worksheet (a real county form) shows how close real designs run: its 5,000 sq ft example landed at sitewide ETAF 0.549 vs the 0.55 legal max, with only 1,000 sq ft of spray turf. One bad hydrozone sinks the sheet.
- MWELO compliance is a paperwork gate at permit: performance path requires the Landscape Documentation Package with the worksheet signed before construction.
- AB 1572 (turf ban) does NOT cover single-family residential, so homeowners reading about "the turf ban" may think they're exempt from everything; MWELO water budgets are the actual constraint on new builds. The two laws get conflated constantly.
- None of the AI design tools (AIGardenPlanner, Gardenly, LandscapioAI, Yardzen's AI features) produce an ETWU/MAWA worksheet or flag plant-factor compliance. They output renders and shopping lists.

## Strongest counterargument (full strength)

AI renders are concept tools, not permit documents, and nobody serious claims they are. A licensed landscape architect does the real worksheet in a few hours, and the MWELO math is forgiving by design: the sitewide average-ETAF approach means you trade lawn for drip and pass, and microclimates matter (coastal ETo is much lower than inland, which changes the ceiling). A $9 app that gets a buyer 80% of the way to a planting plan in a minute is genuinely useful, and penalizing it for not doing civil-engineering paperwork is like blaming a sketchbook for not being a blueprint. The right response is for the apps to add a compliance check, not to tell homeowners the tool is useless.

## Limitations

- Math uses ETo 50.1 (Bay Area). Inland and Southern California ETo runs much higher (Fresno 51.1, Patterson 57.3, Imperial County 70+), which tightens the budget; coastal cities run lower, which loosens it. Readers must use their own city's Appendix C value.
- Plant factors from WUCOLS categories (high 0.7-1.0, low 0.1-0.3); I used 0.8 turf and 0.2 low-water shrubs. Actual selections shift the numbers.
- Assumes standard MWELO irrigation efficiencies (0.75 spray, 0.81 drip); high-efficiency systems change results.
- Lawn establishment-year water use is higher than the established-landscape budget; MWELO handles this via the establishment schedule, not the worksheet, so first-year reality may exceed the budget even on a compliant design.
- Did not verify local turf-replacement rebate amounts (they vary by water district and change year to year); article avoids specific rebate claims.

## Actionable takeaways (for the article)

- If you're building new in CA: ask your builder or landscape architect for the MWELO worksheet before you fall in love with a design. The lawn fraction is the first thing to check.
- Rule of thumb from the math: at Bay Area ETo, budget for no more than ~1/3 of the yard in spray-irrigated turf; inland, less.
- If a designer hands you an AI render with wall-to-wall lawn, ask what the sitewide ETAF is. If they can't answer, the design isn't permit-ready.
- Swapping spray for drip on plantings roughly quadruples your water headroom per square foot; that is the single highest-leverage move in the worksheet.
