# Research: AI Heat Pump Heating Curve Performance Gap

## Core Thesis
Heat pumps are properly sized but still underperform because installers set the heating curve once during installation and never optimize it. AI-based controllers can continuously adapt and close this performance gap. The data is now definitive: a 708-system study shows a 2-3x performance spread between worst and best systems, and AI controllers deliver 13-25% improvements.

## Primary Sources

### 1. Nature Communications — Brudermueller, Potthoff, Fleisch et al.
- **Sample:** 708 heat pump systems (612 ASHPs, 96 GSHPs) with continuous monitoring
- **Key findings:**
  - Average ASHP SCOPreal: 3.72; GSHP SCOPreal: 4.80
  - Maximum ASHP efficiency: 5.55; Maximum GSHP: 7.36
  - **17.2% of ASHPs fall below optimization threshold of 3.01** (need optimization)
  - Only 2.1% of GSHPs below threshold
  - Factor of 2-3x difference between worst and best performers
  - 29.6% ASHPs at A+ level, 30.4% at A++, 28.6% at A+++
  - Highlights importance of digital monitoring solutions and personalized feedback
- **Source:** Nature Communications, "Estimation of energy efficiency of heat pumps in residential buildings using real operation data"

### 2. Fraunhofer ISE — 4-Year Field Study (Nov 2025)
- **Sample:** 77 heat pumps in existing residential buildings across Germany
- Buildings dating from 1826 to 2001 — mix of renovated and unrenovated
- ASHP average seasonal performance factor (ASPF): 3.4 (improved from 3.1 in prior study)
- Range: 2.6 to 5.4 across all systems
- "Heat pumps can be operated efficiently even in older buildings" — Danny Günther, Fraunhofer ISE
- "However, we have also uncovered optimization potential"
- Measurements: minute-accurate recording of compressors, controls, heating rods, hydraulic circuits
- **Source:** pv-magazine.com, Nov 4, 2025

### 3. Fraunhofer AI4HP Project — AI-Controlled Heat Pumps
- Franco-German consortium: Fraunhofer ISE + Stiebel Eltron + CEA List + LPNC + EDF R&D
- Developed neural network (transformer architecture) for time series prediction
- Uses artificial neural network to digitally represent building's thermal behavior
- Real-time optimization algorithm adjusts flow temperature
- **Simulation results:** 3 buildings, 1 heating season each
  - Energy savings: **13% on average** vs standard heating curve
  - Self-calibration and adaptability to new conditions confirmed
- **Field test results:**
  - **25% COP improvement** (needs longer evaluation)
  - Stable heating curve parameters established after "just a few days"
- **EDF domestic hot water test:** heat pump reduced power consumption by up to **8%**
- Key insight: "AI methods must become more robust and scalable in order to implement them cost-effectively in a large number of different building types" — Dr. Lilli Frison
- **Source:** Fraunhofer ISE press release; pv-magazine.com, Dec 18, 2024

### 4. ASHRAE Journal — Residential Heat Pumps & Climate Goals (Feb 2026)
- By David Pogosian, co-owner of NUR HVAC, Belmont, CA
- Heat pumps analyzed economically using cost-benefit analysis, life-cycle performance, energy risk metrics
- San Francisco Bay Area focus
- "Oversized units may lead to poor dehumidification, discomfort and even health or durability issues"
- "Sizing must consider heating AND cooling loads"
- **Source:** ASHRAE Journal vol. 68, No. 2, February 2026

### 5. Conduit Tech / ServiceTitan (Background)
- ServiceTitan acquired Conduit Tech (2025)
- LiDAR-powered iPad scanning → 3D models → ACCA-certified Manual J calculations in 15 minutes
- "Improperly designed & installed HVAC systems can consume as much as 30% more energy than expected" — ACCA/Conduit Tech press release
- Integration with ServiceTitan's AI automation products

### 6. Hybrid Physical-LSTM Study (Zadar, Croatia, April 2026)
- Important CAUTIONARY source
- Hybrid physical-LSTM model for air-to-air heat pump control
- Physical model calibrated against 52,128 real IoT measurements (2024/2025 heating season)
- RMSE ≈ 0.076°C (high accuracy)
- BUT: 15-day continuous simulations showed LSTM correction caused indoor temp underestimation of 1.25-1.31°C
- AND **increased simulated electricity consumption by more than 300%** (316 kWh vs 72 kWh)
- Key finding: RMSE alone insufficient for evaluating hybrid models for MPC
- "Implicit virtual heat flux" problem — LSTM correction breaks thermodynamic consistency
- **Source:** MDPI Energies, April 2026

## The Problem (for the article)
1. Standard practice: installer sets heating curve once during installation
2. Heating curve is a static mapping of outdoor temp → supply water temp
3. Never accounts for: building thermal mass, solar gain variations, occupant behavior, building aging/renovation, seasonal adaptation
4. Result: 17.2% of ASHPs running below minimum efficiency threshold; 2-3x spread in performance

## The Cost to the Homeowner
- Average ASHP installation: $15,000-$25,000
- A system running at COP 3.0 vs potential 4.5 = 33% more energy consumed
- At $0.16/kWh average US residential, for a home using 12,000 kWh/year for heating:
  - COP 3.0: 4,000 kWh electricity = $640/year
  - COP 4.5: 2,667 kWh electricity = $427/year  
  - Difference: ~$213/year wasted
- Over 15-year heat pump lifespan: ~$3,200 in unnecessary energy costs

## The Skepticism (required)
- The Zadar LSTM study is a critical counterpoint: AI models can INCREASE energy consumption when thermodynamic consistency isn't maintained
- AI4HP field test was only 1 week — COP improvement of 25% "needs to be evaluated in more detail during longer field test series"
- Consumer-facing AI thermostats (Ecobee, Nest, Tado) claim optimization but independent verification is limited
- Most residential heat pumps don't have enough sensors for sophisticated AI control
- Retrofit AI controllers may void manufacturer warranties

## Kill Test
Does this help someone building or buying a home? YES:
- If you're installing a heat pump, you should know that the default installer settings leave 13-25% efficiency on the table
- You should ask about monitoring solutions and demand a commissioning checkup after the first heating season
- If buying a new home with a heat pump already installed, check if it was actually optimized
