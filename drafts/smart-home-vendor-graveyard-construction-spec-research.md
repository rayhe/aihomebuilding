# Research: Smart Home Vendor Graveyard and Construction Specs
## Frank DeLuca — Project Management & Operations

### Angle
When a builder specs a smart home platform into new construction, they're embedding a 3-5 year technology lifecycle into a 30-year structure. The graveyard of dead smart home platforms is deep, and nobody's calculating the hidden cost.

### The Graveyard (confirmed dead/sunset platforms)
1. **Revolv** (2016) — Nest/Google bought it, then bricked all devices. Shipped 100K+ units/month in 2014. Two years later, paperweights. Customers got nothing.
2. **Insteon** (2022) — Went insolvent overnight. Servers went dark without warning. CEO scrubbed LinkedIn. Thousands of homeowners woke up to dead houses. Community later bought the assets.
3. **Staples Connect** (2016) — Launched 2013, dead 2016. Z-Wave/ZigBee hub. Zonoff (platform partner) left, no one maintained the servers.
4. **Lowe's Iris** (2019) — Big-box retail smart home platform. Discontinued entirely. Users given transition timeline but hardware became useless.
5. **Wink** (2020) — Free platform suddenly required $4.99/month subscription or devices stop working. Extortion model.
6. **Logitech Harmony** (2019 discontinued) / **POP** (2024 sunset) — POP smart buttons ceased support Oct 2024. Owners got 15% discount. Harmony remotes discontinued.
7. **Belkin Wemo** (2025) — Dropping support for older devices. Users advised to move to alternatives.
8. **Futurehome** (2025) — Norwegian platform went bankrupt. Forced surviving users to pay 99 NOK/month (~$10) for continued access. Louis Rossmann offered $5K bounty for firmware hack.
9. **Nest Secure** (2020) — Google discontinued its own alarm system. 
10. **iRobot** (2025) — Bankruptcy after failed Amazon acquisition.
11. **Echo Look** (2020) — Amazon deactivated.
12. **Spotify Car Thing** (2024) — Bricked.

### Cost Data
- **Hardwired smart home system**: $10,000–$25,000 for standard installations
- **Luxury/full-home**: up to $100,000+
- **Wireless setups**: $500–$2,500 (lower investment, lower risk)
- **Pre-wire during rough-in** (Cat 6, conduit, speaker wire, low-voltage): $3,000–$5,000 for typical new build
- **Basic electrical**: $2–$5/sqft for new construction
- **Home lifespan**: 50-100 years. Mortgage: 30 years.
- **Smart home platform median lifespan**: ~3-5 years before sunset/major disruption

### Original Contribution: Hidden Technology Depreciation
Nobody calculates this in the construction budget:
- $20,000 smart home system ÷ 4-year platform lifespan = $5,000/year invisible depreciation
- Over 30-year mortgage: 7-8 full platform replacements = $140,000-$160,000 in tech refresh
- Compare to: structured wiring (Cat 6, conduit, low-voltage) at $3,000-$5,000 during rough-in, lasting 30+ years
- The wire outlasts the brain. Always has.

### Matter Protocol (the "solution")
- Launched 2022, backed by Apple, Google, Amazon, Samsung
- Supposed to make devices platform-agnostic
- After 2+ years: Tom's Guide called it "stalled"
- Only supports ~20 device types
- Some companies (Belkin) exiting rather than adopting
- Matter 1.4 released (2026) but adoption remains slow
- Thread mesh networking adds complexity
- **The hope**: devices survive vendor death if they speak Matter
- **The reality**: most installed devices are pre-Matter

### Smart Building AI Consolidation (Memoori 2026)
- 34 new smart building AI companies entered market in 2025
- Only 11 new startups founded
- AI-native vendors being acquired faster than new ones form
- Structural shift: the independent AI brain you spec today may be absorbed into a conglomerate tomorrow

### ServiceTitan 2026 Data (contractor perspective)
- 74% of contractors say AI matters for efficiency
- Only 25% actually use AI meaningfully
- 50% don't trust AI capabilities
- 95% of AI pilots fail due to poor implementation
- The "Franken-stack" problem: fragmented software systems that prevent AI from delivering

### The Frank DeLuca Take
This is a spec problem, not a technology problem. When I write a spec for plumbing, I specify copper or PEX — materials with 50-year track records and multiple manufacturers. When I specify smart home, I'm locking a homeowner into one company's server. That's not a spec. That's a prayer.

### Strongest Counterargument
Matter IS making progress. Z-Wave and Zigbee devices with Home Assistant DO survive vendor death because they use local control. Not all smart home investment is wasted — structured wiring, conduit, and standard protocols have lasting value. The risk is specifically in cloud-dependent, proprietary platforms, not in smart home technology broadly.

### Limitations
- Graveyard timeline spans consumer products of varying scale (Spotify Car Thing vs Insteon)
- Cost figures are national averages; markets like SF Bay Area run 2-3x
- Matter adoption data is fuzzy — CSA doesn't publish actual device-in-use counts
- "Platform lifespan" is informal — no industry tracking this metric formally
- Pre-wire cost estimates assume single-family detached, 2,000-3,000 sqft

### Sources
1. PCWorld — "12 killer smart home gadgets left for dead"
2. TechHive — "10 killer smart home products stone dead"
3. PIRG — "Bricked house: How obsolescence looms"
4. Forrester — "Insteon and the Internet of Bricks"
5. The Register — Insteon insolvency reporting
6. Environment America — 100M+ lbs electronic waste from expired software
7. Tom's Guide — "What's the matter with Matter" (2026)
8. Memoori — Smart Building AI Consolidation (2026)
9. ServiceTitan — 2026 Residential State of the Trades Report
10. Angi — Electrical wiring new construction costs
11. Builds and Buys — Smart Home Integration Cost Guide
12. How-To Geek — Smart home devices too old for 2026
13. Futurehome/Rossmann — bankruptcy and firmware bounty
14. HousingWire — Connected data in homebuilding 2026
