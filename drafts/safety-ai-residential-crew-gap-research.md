# Research: Safety AI Residential Crew Gap

## Angle
AI safety tools are being deployed on commercial construction sites. Residential crews — roofers, framers, siding crews — have the highest fatality rates and most OSHA citations but can't use any of these tools. The tools cost too much, require infrastructure small crews don't have, and are designed for enterprise GCs.

## Journalist: Marcus "Steel" Washington

## Key Data Points

### Fatalities
- 389 fatal falls out of 1,034 construction fatalities in 2024 (BLS data via OSHA)
- Falls are the #1 cause of death in construction
- Fatal falls investigated by federal OSHA dropped from 234 to 189 in FY 2024 (~20% decrease)
- Total fatality investigations: 826 in FY 2024, down 11% from 928
- 1,000+ construction workers die on the job each year in the US (MIT Tech Review)

### OSHA Citation Data (Oct 2024–Sep 2025)
**Fall protection citations by industry (top):**
- Roofing Contractors (NAICS 23816): 3,687 citations / 3,630 inspections / $27M penalties
- Framing Contractors (NAICS 23813): 1,965 citations / 1,924 inspections / $12M penalties
- Residential Building Construction (NAICS 23611): 251 citations / 243 inspections / $1.3M
- Siding Contractors (NAICS 23817): 188 citations / 186 inspections / $708K

**All OSHA citations by industry (top):**
- Roofing: 10,619 citations / 4,255 inspections / $46.5M
- Framing: 5,803 citations / 2,351 inspections / $22.9M
- Masonry: 1,661 citations / 540 inspections / $4.9M
- Residential Building: 1,202 citations / 501 inspections / $3.7M
- Siding: 1,136 citations / 431 inspections / $2.9M
- Commercial/Institutional Building: 860 citations / 414 inspections / $3.2M

Note: Residential trades (roofing + framing + siding + masonry + residential building) = 20,421 citations. Commercial building = 860. 24:1 ratio.

### Workers' Comp Costs
- California roofers (class code 5552): $24-$80 per $100 of payroll
- Typical rate after EMR: $15-$40+ per $100 of payroll
- 6-person roofing crew, $300K annual payroll, 1.0 EMR: $45,000-$60,000/year workers' comp
- Average: 9-15% of total payroll for roofing operations
- EMR swing: 0.65 (excellent) to 1.5 (poor) — $85,000 difference on $100K base premium
- Average lost-time injury: $42,000 (BLS 2022)
- Industry total: $7.87B from 167,000 lost-time injuries in 2022

### AI Safety Tools (Commercial Market)
- **DroneDeploy Safety AI:** Launched Oct 2024. Premium add-on to DroneDeploy Ground. Analyzes 360 walkthrough imagery. Beta users: 89% drop in unsafe conditions in 3 weeks. Requires: 360 cameras, DroneDeploy Ground subscription, reality capture workflow. Designed for large GCs (e.g., Layton Construction). OSHA 1910/1926 standards mapped.
- **AI Camera Systems (construction equipment):** $2,000-$14,000 per unit + $100-$600/month subscription
- **Wearable Safety Market:** $4.15B in 2024, growing 10.8% CAGR to $6.85B by 2029
- **Edge-AI wearable (proof of concept, May 2026 paper):** Ear-level device, Raspberry Pi Pico, PPG + infrared + 9-axis IMU. F1-score 97.8%. Sub-0.5s inference. Still in "controlled evaluation" — no field deployment.
- **Drone-based PPE detection (research paper):** 99.9% detection rate for helmets/harnesses/lifelines. Requires high-performance hardware + drone infrastructure.

### The Gap
- DroneDeploy needs: 360 cameras ($500+ each), DroneDeploy Ground subscription, site safety manager to review reports, enterprise contract
- AI cameras need: per-unit hardware ($2K-$14K), monthly subscriptions, fleet management platform
- Wearable sensors need: per-worker devices ($200-$500 each), charging infrastructure, data dashboard, safety manager
- A 6-person residential framing crew has: one truck, one ladder, one nail gun per man, no IT infrastructure, no safety manager, no reality capture workflow

### Original Contribution
Cross-reference: OSHA citations concentrate overwhelmingly in residential trades (roofing, framing, siding). The ratio of residential-trade citations to commercial is ~24:1. But every AI safety tool on the market is designed for commercial GC workflows. The workers who die most are the workers furthest from the technology that could save them.

Cost analysis: A roofing crew paying $45K-$60K/year in workers' comp has the financial incentive to adopt safety tech if it lowers their EMR. A single avoided lost-time injury ($42K average) pays for a year of monitoring. But the minimum buy-in for existing tools exceeds the annual revenue of most residential specialty contractors.

### Sources
1. BLS data via OSHA Fall Prevention Campaign (2024): 389 fatal falls / 1,034 construction fatalities
2. OSHA Accident Search Database: fatality records with NAICS codes
3. OSHA Industry Profile citation data (Oct 2024 – Sep 2025)
4. DOL press release: FY 2024 investigation decline
5. DroneDeploy Safety AI launch (Oct 1, 2024 press release)
6. MIT Technology Review: "How generative AI could help make construction sites safer"
7. ResearchAndMarkets: construction wearable market $4.15B growing to $6.85B by 2029 (10.8% CAGR)
8. ConstructionEquipment.com: AI camera pricing $2K-$14K + $100-$600/mo
9. MoneyGeek: workers' comp for roofers ($567/mo avg, $6,808/yr for 1-4 employees)
10. California roofing insurance: $15-$40+ per $100 payroll
11. MDPI paper (May 2026): Edge-AI ear-level wearable, F1-score 97.8%
12. MDPI paper: AI in Construction Health & Safety use cases survey
13. HCSS: EMR calculation methodology and premium impact ($85K swing)
