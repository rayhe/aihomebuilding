# Research: AI Sound Insulation Prediction — Residential Gap

## Angle
AI can predict sound insulation with 1 dB accuracy, classify inter-floor noise at 95%, and model acoustic performance before a wall goes up. But residential homebuyers get no acoustic data at all. The IRC has no acoustic requirements for single-family homes. Multi-family code minimum (STC 50) is barely acceptable — you can still hear loud conversations. The cost of fixing poor acoustics after construction is 10x the cost of building it right.

## Journalist: Elena Vasquez (Architecture & Design)
She sees buildings as art, and sound is architectural. She'd focus on lived experience of noise, the design decisions that create acoustic failures, and the AI tools that could prevent them.

## Key Sources

### 1. Inter-Floor Noise Classification via CNN (Shin et al., 2020)
- PLoS ONE: doi.org/10.1371/journal.pone.0243758
- 1,515 sound sources recorded 24h from 3 households
- ResNet achieved 95.27% accuracy classifying inter-floor noise
- Six noise source types: Footsteps, Dragging furniture, Hammering, Instant impact, Vacuum cleaner, PA system
- The manual process (hiring a listener to judge noise sources) costs time and money; AI does it in seconds

### 2. AI Prediction of Sound Insulation for CLT Floor Assemblies (MDPI Applied Sciences, 2024)
- ANN model predicting airborne and impact sound insulation for CLT-based floors
- Weighted sound reduction indices estimated within 1 dB error
- Frequency range: 50-5,000 Hz
- Strong correlation between airborne insulation and total thickness/density

### 3. AI-Driven Multi-Objective Window Optimization (Scientific Reports, Feb 2026)
- Nasab & Rabiei, Bauhaus University Weimar
- ANN surrogate model for window dimensions vs energy/thermal comfort
- Demonstrates AI can optimize fenestration design at early stage
- But only applied to simplified office building, not residential

### 4. Psychoacoustic Heatmap ML Model (MDPI Sensors, 2025)
- PHMLM predicts noise impact from HVAC with 31% lower MAE than traditional models
- 1,208 jury listening tests with 101 participants
- Converts psychoacoustic metrics to 227×227 heatmap images for ML input
- Application: sustainable building design — not marketed to residential

### 5. Building Code Context
- IBC Section 1207.1: STC 50 lab / STC 45 field minimum for multifamily party walls/floors
- IRC (International Residential Code): NO acoustic requirements for single-family homes
- LEED ID credit requires STC 55 (walls) and STC+IIC 55 (floors) — rarely applied to single-family
- STC 50 performance: "loud speech may be faintly audible but not understood" — you still hear thumps, music bass, appliance vibration

### 6. Industry Statistics
- Noise is #2 contributor to construction lawsuits (AIA)
- Noise is #1 complaint of hotel guests (JD Power)
- American Apartment Owners Association: noise is top renter complaint after deposit disputes, repairs, and bed bugs
- Cost of retrofitting poor acoustics: 10x the cost of doing it right during construction (CREB)
- STC of typical wood-frame wall with single drywall each side: ~33-35 (poor)
- STC of double-stud wall with insulation + resilient channel: ~57-60 (great)
- Cost difference: ~$2-4/sq ft additional for high-STC assembly vs standard

### 7. Green Builder Media — Townhouse Walls
- "A surprising number of new and existing townhomes lack adequate soundproofing between units"
- No code mandate for sound in single-family attached (some jurisdictions)
- Cellulose insulation (Greenfiber) achieves STC 52 in firewall assembly

### 8. ADMARES Smart Factory with Siemens Digital Twin
- 141 robots, 26 production lines, modular factory
- Digital twin validates designs before production
- Acoustic performance could theoretically be modeled pre-production but isn't highlighted
- Shows the capability exists at factory scale

## Kill Test
Does this help someone building or buying a home? YES.
- Homebuyer: Ask for STC ratings before purchase. Know what the numbers mean. Demand acoustic testing.
- Builder: Upgrade wall assemblies for $2-4/sq ft. Use AI prediction tools during design. Differentiate on acoustic quality.
- Architect: Integrate acoustic simulation into early design. AI tools exist — use them.

## Story Structure
1. Cold open: You hear your neighbor's argument through the wall of your new $600K townhome. Your architect never mentioned acoustics.
2. What STC ratings mean and why building code minimums are insufficient
3. The AI tools that exist: CNN noise classification (95% accuracy), ANN insulation prediction (1 dB accuracy), psychoacoustic ML models
4. Why none of these reach residential: no code requirement = no market demand = no product development
5. The cost asymmetry: $2-4/sq ft during construction vs 10x to fix later
6. What a buyer should actually do
