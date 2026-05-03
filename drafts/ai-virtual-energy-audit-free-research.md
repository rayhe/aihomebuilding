# Research: AI Virtual Energy Audits — The Audit Nobody Gets vs. the AI Audit Everyone Could

## Journalist: Priya Greenwood (Sustainability & Green Building)

## Angle
Less than 3% of US single-family homes have ever had an energy assessment. In-person audits cost $300-500 and take 2-4 hours. AI tools can now estimate a home's energy performance from utility data, smart thermostat readings, or even a Google Street View photo. The question isn't whether AI audits are as accurate as in-person ones — it's whether a free imperfect audit you actually get beats a perfect audit you never schedule.

## Kill Test
Does this help someone building or buying a home? YES — a homebuyer could check their target home's energy costs before purchase. A homeowner could identify the most cost-effective retrofit. A builder could benchmark new construction against existing stock.

## Primary Sources

### 1. RMI "MPG for Homes" Report
- Study of ~8,000 homes across 27 states
- Compared algorithm-based estimates (ClearlyEnergy, UtilityScore) to DOE Home Energy Score (HES) on-site assessments
- Finding: Remote estimates are "accurate enough" for useful applications (energy cost tracking, transparency)
- Context: <3% of US single-family homes have had any formal energy assessment
- URL: https://rmi.org/is-there-a-trade-off-with-transparency-a-deep-dive-into-automated-home-energy-estimates/

### 2. Smart WiFi Thermostat Virtual Audits (MDPI Energies, 2021)
- Used Nest/Ecobee temperature data + weather history + energy consumption
- Machine learning predicted:
  - Attic R-value: 94.08% R²
  - Wall R-value: validated (lower accuracy, still useful)
  - Furnace efficiency: 95.36% R²
  - AC SEER: validated
- No site visit needed — just thermostat data + utility bills
- URL: https://www.mdpi.com/1996-1073/14/9/2500

### 3. Google Street View + AI (Notre Dame/UMD/Utah, Building and Environment, Feb 2024)
- AI analyzed passive design characteristics from exterior images
- Predicted household energy costs with 74% accuracy
- Covered 1,402 census tracts, ~300,000 households in Chicago
- Combined with demographic data to predict energy burden
- Novel: using computer vision on building exteriors as energy proxy
- URL: https://www.sciencedaily.com/releases/2024/02/240229124655.htm

### 4. Fraunhofer/DOE Remote Assessment Tool
- $1.05M DOE-funded project (2016-2019)
- Used communicating thermostat data + interval electricity/gas data
- Identified top 20% of homes with greatest savings potential
- Reduced unnecessary in-person audits by 50%
- Partners: Eversource Energy, Holyoke Gas & Electric, National Grid
- URL: https://www.energy.gov/cmei/buildings/articles/physics-based-interval-data-models-automate-and-scale-home-energy

### 5. PG&E HomeIntel
- Free AI-based program for PG&E customers
- Claims $350/year savings from personalized recommendations
- Uses smart meter interval data
- URL: https://www.pge.com/en/newsroom/currents/energy-savings/turning-data-into-smart-decisions--how-a-free-energy-audit-chang.html

### 6. Resources for the Future Survey
- 1,784 US homeowners surveyed
- Only 4% had recent energy audits
- Free audits common but paid ones ($300-500) include blower door tests and infrared imaging
- Only 30% of audited homeowners make recommended improvements
- URL: https://www.resources.org/common-resources/the-costs-and-quality-of-home-energy-audits-what-homeowners-say/

### 7. DOE Home Energy Score (HES) — Gold Standard
- Launched 2012
- Requires on-site qualified assessor
- Comprehensive data points collected in person
- Costs $150-400 depending on market
- URL: https://www.energy.gov/energysaver/home-energy-assessments

### 8. ClearlyEnergy & UtilityScore
- Free nationwide automated estimates from public data
- ClearlyEnergy: all homes nationwide
- UtilityScore: single-family homes only
- Use public records, property data, climate data, utility rates
- No site visit, no smart devices needed

## Novel Contribution
Cross-comparison of four AI audit approaches nobody has assembled:

| Method | Input | Cost | Accuracy Proxy | Coverage |
|--------|-------|------|---------------|----------|
| Algorithm (ClearlyEnergy/UtilityScore) | Public records + utility rates | Free | ~median match to HES | All US homes |
| Smart thermostat mining | Nest/Ecobee data + bills | Free | 94% R² on R-values | ~60M smart thermostat homes |
| Street View CV | Exterior photos | Free | 74% energy cost prediction | Any photographed home |
| In-person HES | On-site inspection | $150-400 | Gold standard | <3% of homes |

The math: A free AI audit that reaches 100M homes and is 70-90% accurate identifies more total savings than a $300 audit that reaches 3M homes at 95% accuracy.

## Strongest Counterargument
AI audits can't detect some of the most critical issues: carbon monoxide risks, gas leaks, backdrafting combustion appliances, mold behind walls. A homeowner who trusts an AI "clean bill of health" might skip the in-person audit that would have caught a safety hazard. The 30% follow-through rate on professional audit recommendations already suggests people don't act on findings — a vaguer AI estimate could produce even less action.

## Limitations
- RMI study compared algorithm outputs to HES, not to actual utility bills (asset rating vs operational rating gap)
- Smart thermostat study was relatively small-sample
- Street View study focused on Chicago — transferability to other climates/building stocks unclear
- No study has tracked whether AI audit recommendations actually lead to retrofits at higher rates than conventional audits
- PG&E savings claims ($350/yr) are self-reported by program operator
