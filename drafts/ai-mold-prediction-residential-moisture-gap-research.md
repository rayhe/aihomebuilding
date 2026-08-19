# Research: AI Mold Risk Prediction — The Residential Moisture Gap

## Angle
Your builder sealed your house tight enough to pass the energy code. An AI trained on 2,000 home inspections predicts which sealed homes will grow mold with 98% accuracy. Nobody offers it to homeowners.

## The Problem
- New homes are built tighter than ever for energy efficiency (IECC 2021+, ASHRAE 62.2 mechanical ventilation requirements)
- Tighter envelopes trap moisture — condensation on cool surfaces, inadequate dehumidification during swing seasons
- NAHB white paper: "Ventilation rates higher than needed... add excess humidity in warm, humid climates, which if not removed by cooling and dehumidification equipment can result in mold activity."
- Building Science Corp (Joe Lstiburek): in hot-humid climates, ASHRAE 62.2 ventilation can push indoor RH above 65%, approaching mold conditions
- Water damage insurance claims: **$13 billion/year** (NAIC). Mold claims alone exceeded **$2 billion/year** per Insurance Information Institute
- Average water damage restoration: **$3,860** per project (Angi/PuroClean). Category 3 (with mold): $7-7.50+/sq ft

## The AI That Exists

### Leeds Beckett University (UK) — First Peer-Reviewed AI Mold Predictor
- PhD student Gulala Aziz, Leeds Sustainability Institute
- Published in Nature Scientific Reports (2025)
- Trained on **2,000+ home inspections** across **125 local authorities** in England
- Uses building features: wall insulation type, heating costs, energy efficiency rating, construction age
- **98% accuracy** with current data, drops to 70% with stale data
- First peer-reviewed application of AI on damp and mould risk
- Quote (Aziz): "We take data which most housing providers will already have access to, meaning the tool can be deployed in a quick and cost-effective manner"
- Source: https://www.leedsbeckett.ac.uk/news/2025/06/ai-tool-for-housing/

### NRC Canada / ML Moisture Durability Tool
- Machine learning model predicting mold index and maximum moisture content
- Trained on 48,855 simulated wall assemblies
- R² of 0.93+ for mold index prediction
- Key predictive features (ranked): vapor barrier resistance (wet/dry), continuous insulation R-value, exterior sheathing resistance
- Published in MDPI Energies journal
- Source: https://www.mdpi.com/1996-1073/16/4/2033

### Sensor Innovation (Norway) — into® Control System
- Real-time AI-powered humidity + temperature monitoring
- Detects moisture in hidden structural elements (roofs, walls, floors, pipes)
- Hybrid-AI: machine learning + building physics
- Instant alerts via SMS/email/BMS
- Source: https://businessnorway.com/solutions/sensor-innovation-uses-ai-to-monitor-humidity-in-buildings

### NEC Housing AI (UK Council Deployment)
- Cross-references housing stock age, ventilation levels, repair histories with weather data
- 98% accuracy with current data, 70% with stale data
- Used by councils to prioritize inspections before damage occurs
- Source: https://governmenttechnology.co.uk/features/how-ai-can-tackle-damp-and-mould-it-appears

### Sunderland Smart City Pilot
- 21 social housing properties
- AICO sensors (4G connected) + iOpt sensors (LoRaWAN)
- 3 sensors per home + window open/close sensors
- Year-long pilot March 2025–March 2026
- Monitoring ventilation habits and indoor air quality impact
- Source: https://www.sunderlandoursmartcity.com/news-and-insights/case-studies/smart-mould-and-damp-sensors-data-homes/

## The Residential Gap
- **Commercial buildings:** Continuous BMS monitoring, demand-controlled ventilation (DCV), CO2/humidity sensors in every zone, professional commissioning
- **UK social housing:** AI mold prediction pilots underway (Leeds Beckett, NEC Housing, Sunderland)
- **US new residential construction:** ZERO. No mold risk assessment at design stage. No continuous moisture monitoring. No AI prediction. No post-occupancy verification.
- Builder seals the envelope, installs minimum-code mechanical ventilation, hands over keys. Nobody checks whether the combination of materials, climate, and occupant behavior will produce mold.
- ASHRAE 62.2 prescribes ventilation RATES but not MONITORING. A bathroom fan running on a timer is "compliant" even if the home is growing mold behind the drywall.

## Kill Test
Does this help someone building or buying a home?
- **YES.** If you're building: ask your builder about the mold index of your wall assembly. They won't know. The NRC Canada model can tell you, but nobody offers it.
- If you're buying: know that your new tight home has no moisture monitoring. A $200 set of humidity sensors and an AI platform could catch problems before $13,000+ in damage.
- Actionable: Sensor costs ($50-200 per home), AI platform costs (varies), what to ask your builder, what the code requires vs. what would actually protect you.

## Journalist
Priya Greenwood — sustainability beat. Connects energy efficiency policy (tight envelopes) to real homeowner consequences (mold). Evidence-based urgency without preachiness.
