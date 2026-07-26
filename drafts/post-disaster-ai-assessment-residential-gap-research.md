# Research: Post-Disaster AI Building Assessment — The Residential Gap

## Angle
After an earthquake or hurricane, your home gets a 3-minute visual inspection by a volunteer who may have read the field manual on the flight over. An AI model predicts structural safety of concrete buildings at 91% accuracy. Nobody has built one for the wood-frame house where 85% of post-disaster assessments actually happen.

## Journalist
Catherine Chen — policy/regulation/legal (ATC-20 is a regulatory framework, FEMA policies, building code implications)

## Primary Sources

### 1. ATC-20 Rapid Assessment Framework (Applied Technology Council, 1989/1995/1997)
- Original: ATC-20 "Procedures for Postearthquake Safety Evaluation of Buildings" (1989), funded by California OES, OSHPD, FEMA
- Field Manual: ATC-20-1, revised 2005
- Written for "volunteer structural engineers and building inspectors"
- Rapid evaluation → green (INSPECTED), yellow (RESTRICTED USE), red (UNSAFE) placards
- ATC-20-2 addendum: revised forms and placards, "LIMITED ENTRY" → "RESTRICTED USE"
- ATC-20-3: 53 case studies for training
- Key limitation from ATC paper: "individuals involved in the safety evaluations had little or no prior training in using the ATC-20 methodology. In some instances, building inspectors and engineers were given only the assessment forms and placards and told to begin inspections."
- "One planeload of volunteers from Southern California was given the ATC-20-1 document to read on the flight to the damaged area."

### 2. Northridge Earthquake Assessment Data (UN/OCHA proceedings)
- Total assessments: 113,915 buildings
- Residential dwellings: 97,212 (85.3% of all assessments)
  - Green (INSPECTED): 80,867 (83%)
  - Yellow (LIMITED ENTRY): 9,204 (9%)
  - Red (UNSAFE): 2,109 (2%)
  - Unknown: 5,032 (5%)
- 76% of all buildings inspected in first two weeks found safe for occupancy
- Commercial buildings: 7,528 (6.6%) — much higher red/yellow rates (8% red, 17% yellow)

### 3. ML Framework for Post-Earthquake Structural Safety (Structural Safety journal, ScienceDirect)
- 4-story RC special moment frame building
- Incremental dynamic analysis with sequential ground motions
- Classification and Regression Tree + Random Forests models
- 91% accuracy using response patterns, 88% using damage patterns
- Maps response/damage patterns to structural safety state (safe vs unsafe to occupy)
- KEY GAP: Applied to a 4-story RC building, NOT residential wood-frame

### 4. Turkey Earthquake Ensemble ML Study (MDPI Buildings, 2023 Kahramanmaraş)
- 16,611 building-level real field observations from Kırıkhan, Hatay
- Three operational damage levels: No-Damage, Slight–Moderate, Heavy–Collapse
- Eight ML models compared: LGBM achieved joint-highest Balanced Accuracy
- SHAP analysis: building age, lithology, number of floors, structural system, plinth area, proximity to faults
- CatBoost: highest sensitivity for Heavy-Collapse class
- KEY: "model selection should be guided by operational priorities, particularly in life-safety- and early-response-oriented scenarios"

### 5. VLM/Deep Learning Framework (Dakota State University, 2025)
- Drone footage + Video Restoration Transformer + Gemma3:27b VLM
- 84.5% classification accuracy across four damage categories
- Validated on 2023 Turkey earthquake drone imagery and 2013 Moore tornado satellite data
- "The system's accessibility allows non-technical users to perform preliminary analyses"

### 6. GAI Model Comparison (MDPI Buildings 2024)
- GPT-4o: 68.2% accuracy
- Gemini 1.5 Flash: 50.0%
- GPT-4o mini: 45.5%
- Gemini 1.5 Pro: 31.8%
- RAG techniques could significantly improve accuracy

### 7. Inspector Shortage Data
- Tokyo: 110,375 certified inspectors for 1.9 million buildings — clearly insufficient for major event
- Anchorage 2018 earthquake: Municipality had inspected only HALF of buildings on their list, had to hire additional engineers (budgetary constraints)
- ATC-20 documented limitations: "(1) inspector bias and/or experience-based variability, (2) lack of access to damaged locations or members, (3) time consuming, and (4) qualitative in nature and not entirely quantitative or physics-based"

## Novel Analysis
The 91% accurate ML model was tested on one building type: a 4-story reinforced concrete special moment frame. The Turkey study used 16,611 buildings but the dataset is overwhelmingly RC construction (Turkey's building stock is ~85% RC). The drone/VLM framework validated on collapsed concrete buildings.

Meanwhile, 85% of actual post-earthquake assessments in the US are residential dwellings — predominantly 1-2 story wood-frame construction. Wood-frame failure modes are fundamentally different from RC:
- Cripple wall collapse (not a factor in RC)
- Soft-story garage openings
- Foundation anchor bolt failure
- Chimney toppling
- Unbraced water heater damage
- Plywood sheathing nail pop patterns

None of the AI models incorporate these features. The 91% accuracy number is real — but it applies to a building type that accounts for under 7% of post-disaster assessments in the US.

## Counterargument
The BORP (Building Occupancy Resumption Program) in San Francisco allows pre-certification of private inspection by qualified experts, bypassing the public queue. But BORP is available only to commercial building owners, not homeowners.

## Kill Test
Does this help someone building or buying a home? YES — homeowners in seismic/hurricane zones need to understand that the system designed to tell them whether their home is safe relies on 3-minute visual checks by potentially untrained volunteers, and the AI replacement being developed in labs is trained on the wrong building type.
