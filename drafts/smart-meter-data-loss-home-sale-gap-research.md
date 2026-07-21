# Research Notes: Smart Meter Data Loss at Home Sale

## Core Thesis
Your utility's smart meter collects 35,040+ data points per year about your home's energy behavior. When you sell your home, the buyer gets approximately 12 numbers (monthly totals). That's a 99.97% information loss — at the exact moment someone most needs the data to make a $500K+ purchase decision.

## Key Data Points

### Smart Meter Deployment (EIA Table 10.05, 2024 data)
- 123,019,799 residential AMI smart meters installed (US, 2024)
- 140,491,981 total AMI endpoints
- Up from 57.1M residential in 2015 — growth rate ~10M/year
- ~78% of US residential electric meters are now AMI
- AMI records at minimum hourly intervals; many at 15-minute or 8-second intervals
- Source: EIA Form 861, published data through 2024

### The Data Loss Calculation (Original Contribution)
- 15-minute interval meter: 96 readings/day × 365 = 35,040 data points/year
- Hourly interval: 8,760 data points/year
- What homebuyer receives: ~12 monthly total kWh numbers
- Information loss: 35,040 → 12 = 99.97% (at 15-min); 8,760 → 12 = 99.86% (hourly)
- With 5 years of data: 175,200 → 12 = 99.99% loss

### What AI Can Extract from Full Smart Meter Data
- **HVAC fault detection:** NILM detects 10 different RTU faults with 94% accuracy, responsible for 10-30% of total repair costs (MDPI review, "Fault Detection and Efficiency Assessment for HVAC Systems Using Non-Intrusive Load Monitoring")
- **Appliance health prediction:** HNILM system grades appliance health (Normal/Low/Medium/High) from 8-second smart meter data — predicts failure before it happens (dev.to, DBAN-ED + VXGB-AD pipeline)
- **Energy consumption reduction:** NILM-based FDD could reduce building energy consumption by 20-30% (same MDPI review)
- **Insulation quality:** WiFi thermostat + smart meter data predicts insulation R-values, window quality, duct leakage (MDPI, "Automated Residential Energy Audits Using a Smart WiFi Thermostat")
- **Building envelope characterization:** AI can determine thermal mass, air leakage rates, and HVAC sizing from consumption patterns

### Current Disclosure Requirements (Minimal)
- **Montgomery County, MD:** Requires sellers to provide 12 months of utility bills or cost/usage history. Does NOT require raw smart meter data.
- **California AB 1103/531:** Energy use disclosure for nonresidential buildings >5,000 sq ft only. Residential buildings exempt.
- **New York (proposed):** NYSERDA proposal to require 12-month energy consumption disclosure at sale/lease. Status: Pending as of 2025.
- **Chicago:** MyHomeEQ platform integrates utility data into MLS listings — one of the few automated systems. But still aggregated data, not raw intervals.
- **Most states:** No energy disclosure requirement at home sale whatsoever.

### What Exists vs. What's Accessible
- Utilities sit on terabytes of residential energy data
- Privacy regulations (state PUC rules, DOE guidelines) restrict sharing
- Green Button initiative (DOE) gives customers access to their OWN data — but most buyers aren't customers yet
- Third-party data aggregators like Urjanet, MyHomeEQ exist but coverage is spotty
- Real estate MLS systems could display energy performance data but <5% of MLS boards do

### Counterarguments
- Privacy: Utility data reveals occupancy patterns, lifestyle, appliance usage. Legitimate concern.
- Accuracy: NILM disaggregation accuracy varies (60-95% depending on appliance type). Not perfect.
- Complexity: Raw 15-minute data means nothing to most buyers. Needs translation layer.
- Cost: Building analytical pipeline for millions of homes isn't free.

### The Comparison that Kills
- Carfax report: Full vehicle history (maintenance, accidents, mileage) required by convention at car sale
- Home: No equivalent exists despite being 10x the purchase price
- A home "energyfax" using smart meter data is technically trivial and vastly more informative

## Sources
1. EIA Table 10.05 — Advanced Metering Count by Technology Type (2015-2024)
2. MDPI — "Fault Detection and Efficiency Assessment for HVAC Systems Using Non-Intrusive Load Monitoring: A Review"
3. MDPI — "Automated Residential Energy Audits Using a Smart WiFi Thermostat-Enabled Data Mining Approach"
4. dev.to — "How I Built an AI That Detects When Your Appliances Are About to Break — Using Only a Smart Meter"
5. Montgomery County MD — Office of Consumer Protection, Utility Bill Disclosure Law
6. California Public Resources Code §25402.10 (AB 1103/531)
7. ACEEE — "Residential Energy Use Disclosure: A Guide For Policymakers"
8. Columbia Sabin Center — "Require energy consumption disclosure at sale"
9. DOE — Smart Grid/Green Button Initiative guidelines

## Journalist
**Priya Greenwood** — Sustainability & Green Building
- Passionate but evidence-based. Urgency without preachiness.
- Connects energy data to real utility bills.
- Strong use of comparisons and contrasts.

## Angle
Not a "smart meters are cool" tech piece. This is about a systemic market failure: the data exists, the AI to interpret it exists, but the institutional plumbing to connect them at the point of sale doesn't. Every home sale is a $500K decision made with less data than a $30K car purchase.
