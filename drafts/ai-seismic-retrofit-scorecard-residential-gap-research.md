# Research: AI Seismic Vulnerability Scoring — The Residential Gap

## Topic
Japan mandates seismic scorecards for building sales. AI can now score residential seismic vulnerability from satellite imagery and street view photos. The US has 1.2 million homes vulnerable to foundation failure and no scoring system for any of them. Only 1.25% have been retrofitted in 12 years.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Primary Sources

### 1. California Government Code §8897 (1993, as amended)
- ~1,200,000 homes in California not bolted to foundations or lacking adequate cripple wall bracing
- Building codes didn't require foundation bolting until ~1949; some jurisdictions not until 1958
- Loma Prieta 1989: Over 23,000 homes damaged/destroyed due to inadequate foundation anchoring
- Legislature goal: all homes anchored to foundations, deficiencies disclosed to buyers
- Source: https://law.justia.com/codes/california/code-gov/title-2/division-1/chapter-13-8/article-1/section-8897/

### 2. California Earthquake Brace + Bolt (EBB) Program (CRMP)
- Launched 2013, offers grants up to $3,000 for code-compliant seismic retrofits
- As of 2021: 15,000 retrofits completed (statewide, 12 years)
- 15,000 / 1,200,000 = 1.25% of vulnerable homes retrofitted
- Typical retrofit cost: $3,000-$7,000
- Eligible: built before 1980, raised concrete foundation, cripple wall
- CEA policyholders get up to 25% insurance premium discount post-retrofit
- Source: https://www.crmp.org/press-room/press-releases/2021/more-than-15000-california-homes-protected-from-catastrophic-earthquake-damage-with-seismic-retrofit-program

### 3. PEER-CEA Research Project (UC Berkeley, 2020)
- "Quantifying Performance of Retrofit of Cripple Walls and Sill Anchorage"
- 99% chance of M6.7+ earthquake in California within 30 years
- Retrofit savings: $10,000-$200,000+ after a major earthquake
- Savings = 20-40% of replacement value of many California homes
- Cost of retrofit ($3,000-$7,000) vs. cost of unretrofitted damage ($10K-$200K+)
- Source: https://peer.berkeley.edu/sites/default/files/task7.3_lay-audience-report_20201016.pdf

### 4. Japan Act on Promotion of Seismic Retrofit of Buildings (1995, revised 2013)
- 1995 original: Required seismic evaluation for large buildings (2+ stories, 1,000+ m²)
- 2013 revision: Required seismic evaluation by owners of ALL existing buildings, including single-family houses
- Local governments periodically disclose Is-indices (seismic performance scores) and retrofit schedules
- By ~2020, almost all pre-1981 public school buildings evaluated as seismically safe (retrofitted or rebuilt)
- Tokyo: "Earthquake Resistant Mark" placed on buildings confirmed to meet standards
- Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC8403529/

### 5. Japan Earthquake Insurance Discounts
- Seismic isolated building: 50% premium discount
- Earthquake resistance Class 3: 50% discount
- Class 2: 30% discount
- Class 1: 10% discount
- Earthquake resistance diagnosis (meets 1981+ standard): 10% discount
- Age of construction discount (post-1981): 10% discount
- Discounts cannot be stacked
- Source: https://www.mof.go.jp/english/policy/financial_system/earthquake_insurance/outline_of_earthquake_insurance.html

### 6. AI/ML Seismic Vulnerability Assessment
- Italian researchers: CNNs applied to satellite images + street view to automatically identify residential building features affecting seismic vulnerability
- Significant reduction in time and costs vs. manual assessment
- Source: https://www.sciencedirect.com/science/article/pii/S2452321623002627

- Turkish study (2025): XGBoost, Random Forest, AdaBoost applied to 600 buildings
- XGBoost achieved superior accuracy vs. traditional RVS
- Automated web tool eliminates manual calculation errors
- Key features: building height (strong negative correlation), soft-story, short columns
- Source: https://www.mdpi.com/2076-3417/16/3/1271

- Satellite-based damage prediction (2025 SSRN): Random Forest on 2023 Türkiye M7.8 earthquake
- R² = 0.862 at 500m spatial scale
- Uses building height + construction period as proxy for structural types
- 26 indicators including ground motion, topography, spectral features
- Source: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5858839

### 7. Japan Property Transaction Requirements
- Five documents buyers should request:
  1. Construction confirmation certificate (建築確認済証) — shows code version
  2. Inspection completion certificate (検査済証)
  3. Housing Performance Evaluation Report (住宅性能評価書) — includes Seismic Grade
  4. Seismic diagnosis report (耐震診断書) — required for pre-1981 buildings
  5. Building structure type
- Source: https://housingjapan.com/blog/why-japans-earthquake-resistant-buildings-are-the-future-of-real-estate/

### 8. USGS Investment Data
- Bay Area homeowners + agencies invested at least $63 million in single-family retrofit since 1989
- Berkeley transfer tax rebate: $29 million since 1991
- Source: https://pubs.usgs.gov/of/2018/1168/ofr20181168.pdf

## Original Contribution

**The Pace Calculation:** At 15,000 retrofits over 12 years (2013-2025), California retrofits 1,250 homes/year. With 1.2 million vulnerable homes, it would take 960 years to retrofit all of them at current pace. The program's $3,000 grant costs ~$3.6M/year in grants. Total retrofit cost for all 1.2M homes at $5,000 average = $6 billion. Japan retrofit 85,000 school buildings in ~15 years by making evaluation mandatory and tying it to insurance and disclosure. California has achieved 1.25% in 12 years by making it voluntary and hiding the score.

**The AI gap:** ML models can score building seismic vulnerability from satellite imagery (R² = 0.862) and street-view photos (CNN feature extraction) without anyone visiting the property. Japan requires disclosure; the US doesn't. A consumer-facing AI seismic score — like a Zillow Zestimate for earthquake risk — could be generated for every home in California from existing satellite data. Nobody has built it for residential.

**The disclosure asymmetry:** Japan: mandatory seismic diagnosis, grade disclosed to buyers, insurance discounts up to 50%. California: optional retrofit, no mandatory scoring, no requirement to disclose vulnerability to buyers beyond the general §8897 form (which lets sellers self-report without professional evaluation).

## Kill Test
**Does this help someone building or buying a home?** YES.
- Buyers: know that Japan has mandatory seismic scoring, US doesn't; ask for foundation status before buying
- Owners of pre-1980 homes: EBB exists, costs $3K-7K, saves $10K-$200K, get 25% insurance discount
- Builders: AI scoring tools could become standard for new construction certification
- Policy: AI scoring could enable mandatory disclosure without adding bureaucratic burden
