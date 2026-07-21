# Research: NEC Load Calculation vs. Real-World Demand — The Panel Bottleneck

## Angle
The NEC Article 220 load calculation says a fully electrified 1,500 sq ft home needs ~125 amps. Real-world data from 700+ homes shows the most common peak is 29 amps. Forty-eight million US homes are told they need $15,000+ upgrades based on math that has never measured a real house. New code provisions (NEC 220.70, Article 750) and smart panels (SPAN, ABB ReliaHome) offer a software fix to a hardware problem — but the code hasn't caught up to the data.

## Journalist
Catherine "Code" Chen — Policy & Regulation. This is fundamentally a code story: the gap between NEC Article 220 theoretical load calculations and real-world electrical demand, and how new code provisions are starting to close it.

## Key Data Points

### The Scale of the Problem
- **48 million US homes** would require service upgrades to safely accommodate a typical Level 2 EV charger (Schneider Electric, Feb 2025)
- **PG&E estimates 600,000+ homes** in its service area alone will need some type of electric service upgrade in the next decade (PG&E/SPAN press release, Feb 2026)
- **More than 50%** of American homes receive 100 amps or less (Qmerit)
- **62% of US homes have 200A panels**, meaning ~38% (est. 48-50M homes) are sub-200A (LBNL/UC Davis survey, 281 validated responses from 565)
- Service upgrade costs: **$2,000–$30,000**, wait times **2 months to 2 years** (Redwood Energy via Canary Media)
- Panel update (without service upgrade): **$1,200–$2,000** (Peninsula Clean Energy)
- SPUR Bay Area report: reducing panel upsizing from 60% to 30% would save **$3.4 billion** in the Bay Area alone

### The Code vs. Reality Gap
- **NEC Article 220** (now relocated to Article 120 in 2026 NEC): load calculations assume worst-case simultaneous loads
- Example from Mike Holt (NEC educator): 1,500 sq ft home with standard electric loads (heat pump, cooktop, oven, dryer, water heater, dishwasher, disposal) calculates to **125 amps** using NEC 220.82 optional method
- **Peninsula Clean Energy real-world data** (early 2024): across 700+ all-electric single-family homes, **99% never drew more than 100 amps** all year
- **Most common peak demand: 29 amps** — less than one-third of a 100A panel's capacity
- PCE pilot: 9 low-income Bay Area homes fully electrified, 5 on 100-amp panels — **no service upgrades needed**
- Participant energy bills **fell 20% on average**
- Since pilot: dozens more homes retrofitted, **95% haven't needed upgrades**
- Calgary (cold climate): handful of 100-amp homes have gone fully electric, suggesting the barrier is lower than critics claim

### NEC Code Evolution
- **NEC 220.70 + Article 750** (added in recent NEC cycles): new provisions for Energy Management Systems (EMS)
- EMS can limit current by shedding load if total exceeds maximum ampere setpoint
- Allows more precise calculation based on managed electrical demand, not worst-case theoretical
- **NEC 220.87**: optional calculation using actual maximum demand data (1-year period or 30-day recording with ammeter)
- Exception: not permitted if home has solar PV, wind, or peak load shaving (ironic, since these are the homes most likely to electrify)
- **NEC 220.60**: non-coincident loads — was NOT designed for continuous loads like EV chargers; gaps revealed by electrification

### The Smart Panel Solution
- **SPAN Panel**: ~$3,500 retail; certified Energy Management System; "PowerUp" feature manages loads to stay within 80% of rated capacity
- **Eaton invested $75M in SPAN** (March 2026) to drive costs down via manufacturing and supply chain scale
- **SPAN Edge**: at-the-meter device, installed in 15 minutes, enables load management without replacing the panel at all
- **PG&E PanelBoost program**: deploying SPAN Edge at scale, partnering with next-gen metering infrastructure
- Installer quote: "PG&E just made it possible to effectively have a 200-amp panel by throttling the loads in their house"
- **ABB ReliaHome Smart Panel**: mounts next to existing panel, monitors and controls key circuits via app
- **Lumin**: another smart panel competitor
- **Qmerit AI Panel Insights**: AI evaluates panel photos to determine capacity; LoadCRE (Load Capacity Recommendation Engine) determines if panel can handle additions

### Limitations / Counterarguments
- PCE data is from **temperate Bay Area** — may not apply in extreme heat (Houston, Phoenix) or cold (Minneapolis, Chicago)
- Pecan Street CTO Scott Hinson: whether upgrades are needed "is going to be regionally dependent"
- Smart panels add a software dependency — if the system fails, overload risk returns
- Internet connection required for most smart panels (SPAN requires Wi-Fi, has cellular backup)
- The 29-amp median doesn't capture edge cases — the 1% that did exceed 100A could have dangerous consequences
- NEC 220.87 exception excludes homes with solar PV or peak load shaving from using actual demand data

## Sources
1. Schneider Electric Blog — "Upgrading your electrical panel and service" (Feb 2025): 48M homes stat
2. Canary Media — "Yes, it's possible to electrify a home on just 100 amps" (2023): Wayne Szeto case, 48M homes, PCE data
3. Canary Media — "Many homes already have the power to electrify, study finds" (Mar 2026): PCE pilot results, 99%/29A stats
4. Peninsula Clean Energy — "Electrify your home without costly electrical service upgrades": pilot details, service vs panel distinction
5. PG&E/SPAN press release (Feb 2026): 600,000 homes, PanelBoost program, SPAN Edge
6. Energy Central — Eaton $75M SPAN investment (Mar 2026)
7. Schneider Electric Blog — "NEC 220.70: Effective energy load management" (Jun 2025): NEC 220.70, Article 750, EMS provisions
8. SPUR report: $3.4B savings estimate for Bay Area
9. ACEEE/LBNL — "Comprehensive Survey of Electrical Panel Capacities" (Alan K. Meier, Sadia Gul): 62% 200A stat
10. Mike Holt — NEC Article 220 load calculation examples
11. NEC 2026 — Article 220 relocated to Article 120 in Chapter 1
12. POWER Magazine — "How PG&E Is Supporting EV Growth" (Feb 2025): SPAN Edge technical details
13. NYSERDA — panel upgrade guidance: $3,000–$5,000 typical cost range
14. Qmerit — AI Panel Insights / LoadCRE tool
