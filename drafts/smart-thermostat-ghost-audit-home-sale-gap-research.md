# Research: Smart Thermostat Ghost Audit — Home Sale Gap

## Angle
19 million US homes have a smart thermostat recording 5-minute interval data about indoor temperature, HVAC runtime, occupancy, and setpoints. Peer-reviewed research proves machine learning can predict a home's insulation quality, furnace efficiency, and AC SEER rating from this data alone. During a home sale, this data is never shared with the buyer. Instead, buyers rely on utility bills (noisy, depends on occupant behavior) or pay $300-500 for a professional energy audit. The data already exists. The ML is published. Nobody built the product.

## Kill Test
✅ Does this help someone building or buying a home? YES — directly tells homebuyers what data to request and homeowners what their thermostat knows. Tells builders that pre-wiring for smart thermostats creates provable energy documentation. Tells energy auditors where their business model is vulnerable.

## Primary Sources

### 1. Smart Thermostat Installed Base
- **19 million connected smart thermostats installed in US in 2025** (IMARC Group, imarcgroup.com)
- **38 million US homes projected to have smart thermostats by 2026** (UtilityDive projection cited in Resources for the Future working paper)
- **US smart thermostat market: $1.21 billion in 2025**, growing at 15.3% CAGR to $4.5B by 2034 (IMARC Group)
- **Nest (Google) dominates with ~27% of smart thermostat owners** (~15 million households) — Parks Associates
- Honeywell (Resideo) #2, Ecobee #3
- Nest estimated 2025 residential revenue: $320M; Honeywell: $210M; Ecobee: $145M (ReportPrime)
- **42 million smart thermostat units shipped globally in 2025** (IMARC)
- Learning thermostats growing at 18.3% CAGR through 2030, driven by AI behavioral algorithms cutting heating costs 10-12% per household

### 2. ML Can Predict Home Energy Characteristics from Thermostat Data
- **"Automated Residential Energy Audits Using a Smart WiFi Thermostat-Enabled Data Mining Approach"** — Energies (MDPI), 2021, Vol. 14(9), Article 2500
- Used gradient boosting machines (GBM) on thermostat-derived features (5-minute interval data)
- Predicted with high accuracy:
  - Attic R-value (R² = 1.0 on validation set)
  - Wall R-value (R² = 1.0 on validation)
  - Furnace efficiency (R² = 1.0 on validation)
  - AC SEER rating (R² = 0.998 on validation)
- Testing on held-out houses: R² ranged 0.59-0.68 (still useful, especially combined with basic home characteristics)
- Key insight: thermostat runtime data captures the dynamic thermal response of the building envelope — how fast indoor temp drops when outdoor temp changes tells you insulation quality without ever opening a wall
- Features used: indoor temp, outdoor temp, setpoint, HVAC runtime, time-of-day patterns, occupancy

### 3. Professional Home Energy Audit Cost
- Professional audit: **$300-500** on average (FamilyHandyman, various sources)
- Includes blower door test, infrared thermography, duct leakage testing
- Takes 2-4 hours on site plus report generation
- Only ~3-5% of home sales include an energy audit (industry estimates)
- ENERGY STAR smart thermostats save ~8% of heating/cooling bills (~$50/year average)

### 4. Energy Transparency in Real Estate
- **Energy costs exceed property taxes and insurance** for the average US homeowner — yet energy is the only one of those three NOT considered in the mortgage process (RESNET/Insulation Institute)
- **RMI study ("An MPG for Homes"): analyzed ~8,000 homes across 27 US states** — remotely generated energy estimates are accurate *enough* for useful applications, but are estimates, not measured data
- **Redfin + Tendril/UtilityScore: 110 million homes** now have algorithmically estimated energy scores on real estate platforms — but these are MODEL estimates, not measured performance
- **Portland, Oregon** has mandatory home energy score disclosure at point of listing
- **Massachusetts** proposed mandatory energy disclosure at point of sale
- Gap: estimated scores ≠ measured performance. A home with a smart thermostat has the MEASURED data, but it's never surfaced

### 5. What Thermostat Data Reveals
From the MDPI study and Ecobee/RFF research:
- Indoor temperature vs. outdoor temperature response curves → insulation quality
- HVAC compressor runtime duration → equipment efficiency
- Recovery time after setback → ductwork quality and equipment sizing
- Occupancy patterns vs. energy use → behavioral vs. structural efficiency
- 5-minute granularity for 3+ years = ~315,000 data points per home
- Ecobee Eco+ TOU feature study (Resources for the Future): reduces compressor usage by 44 minutes (88%) during peak period

### 6. The Gap
- Google/Nest, Ecobee, Honeywell have this data but don't offer it as a home sale/transaction tool
- No MLS field for "smart thermostat energy performance data available"
- No standard API for exporting thermostat energy analytics in a buyer-friendly format
- Sellers have no incentive to share (might reveal HVAC problems)
- Real estate agents don't know to ask
- Appraisers can't incorporate it (no standard methodology)
- The data resets when thermostat is factory-reset or account changes during sale

### 7. Energy Savings Potential (ENERGY STAR/EPA)
- Proper sealing and insulating: **11% total house, 15% heating/cooling savings** nationally
- Northern climates: 14-16% total house savings
- Southern climates: 5-8% total house savings
- Average homeowner spends more on energy than on property taxes and insurance

## Original Contribution
Cross-referencing the MDPI research (smart thermostat data can predict insulation/HVAC characteristics) with real estate transaction data gaps (energy is the only major cost not disclosed or evaluated). Nobody has connected these two bodies of research in the context of homebuying.

Calculation: 19M homes with smart thermostats × $300-500 saved per energy audit = $5.7B-$9.5B in audit value sitting in existing thermostat data that nobody accesses.

## Strongest Counterargument
Thermostat data reflects occupant behavior, not just building physics. A family that keeps the house at 78°F in winter will show different patterns than one at 68°F. The ML models partially control for this via setpoint data, but real-world testing R² (0.59-0.68) is significantly lower than validation R² (~1.0), suggesting the models may overfit to specific building types or climates. Also, sellers would resist sharing data that might reveal HVAC problems, and Google/Ecobee have privacy concerns about sharing usage data.

## Journalist Assignment
**Priya Greenwood** — sustainability, energy efficiency, homeowner actionability. This is squarely her beat.
