# Research: AI Panel Assessment — Your $5,000 Panel Upgrade May Be Unnecessary

## Angle
The electrification wave (EV chargers, heat pumps, induction ranges, electric water heaters) is hitting America's 48 million homes with 100-amp panels. Electricians reflexively prescribe $3,000–$10,000 panel upgrades. But AI can now read your panel from a single phone photo, calculate your actual load, and — 70% of the time — prove you don't need the upgrade. Smart load management devices ($1,500–$2,200) let your existing panel juggle loads intelligently instead.

## Journalist
Jake "Jackhammer" Kowalski — construction tech, tools, specs

## Primary Sources

### 1. Qmerit Panel Insights + LoadCRE (Source: qmerit.com, diginomica.com)
- Qmerit: North America's leading EV charger installer, 269,000+ home installations
- **Panel Insights™**: AI trained on 269K installations, analyzes electrical panel from a SINGLE smartphone photo
  - Identifies: available circuit spaces, tandem breakers, total capacity, panel brand, breaker types, connected loads
  - Developed with Schneider Electric "AI Hub" (400+ data scientists) and Microsoft Cognitive Services (computer vision)
  - CTO Manoj Puthenveetil: 10-month development, most time spent labeling data correctly
  - Self-learning loop: electrician corrections automatically fed back to improve model
- **LoadCRE™ (Load Capacity Recommendation Engine)**: Takes Panel Insights results, instantly calculates available capacity for EV charger, heat pump, electric water heater
- ChargeRight (Jason Walls, IBEW Master Electrician): "70% of homeowners already have enough capacity" — NEC 220.82 Optional Method load calc proves it

### 2. Panel Upgrade Costs (Sources: This Old House, Angi, HomeAdvisor)
- Standard 200-amp panel upgrade: $1,300–$3,000 (panel + labor)
- But real-world total often $3,000–$10,000+ when including:
  - Utility service upgrade (new meter, feed wires): $1,000–$4,000
  - Conduit/wiring runs: varies by home
  - Permit + inspection: $150–$400
- Schneider Electric SVP Richard Korthauer: 400-amp utility service upgrade can add "$17,000 in builder development costs per home"
- Most homeowners paying $1,300–$3,000 for a 200-amp upgrade (This Old House)

### 3. Smart Panel / Load Management Alternatives (Sources: OhmSnap, solarreviews.com, cepro.com, medium.com)
- **SPAN Drive** (add-on module): $1,500–$2,200 hardware
  - 2 circuits, UL 3141 certified, dynamic circuit sharing
  - Enables 48A EV charging on 100A or 125A panel
  - No full panel replacement needed
- **SPAN Smart Panel** (full replacement): $3,500–$4,500 hardware + $2,500–$6,000 install = $6,000–$10,000 total
  - 32 circuits, app control, circuit-level monitoring
  - PowerUp dynamic load management
  - Eaton $75M investment (early 2026) — going mainstream
- **Schneider Square D QO Smart Panel + Smart Power Manager**
  - Modular: add control only where needed
  - Load shedding when service hits capacity
  - Works with existing QO panel ecosystem
- ROI reality check (Medium/US Power): 15% bill savings on $250/mo = $450/yr → 11+ year payback on $5K premium from monitoring alone. Real value is in AVOIDING the service upgrade.

### 4. NEC 2026 Code Changes (Sources: pv-magazine-usa.com, Schneider blog, MotorTrend)
- **Power Control Systems (PCS)** provisions: first time electrical code explicitly provides code-compliant path to use software-managed load control instead of oversized panels
- NEC 2026 Articles 220, 625, 706 changes:
  - PCS-listed devices can manage overload by shedding loads in real time
  - Allows "right-sizing" standby/backup systems via inverter load management
  - UL 3141 certification for managed EV circuits
- DIY EV install now banned: "qualified person" requirement (NFPA voted June 2025)
- GFCI for hardwired EVSE: removed after industry appeal (Honda, GM, Ford, Rivian, ChargePoint)
- Big shift: code moving from passive overcurrent protection to active, real-time load monitoring

### 5. Electrification Demand Context
- ABC: construction industry needs 349,000 net new workers in 2026, 456,000 in 2027
- Residential EV charger market growing — all major automakers pushing Level 2 home charging
- Heat pump installations surging as gas furnace bans take effect in some jurisdictions
- Many homes built before 1990 have 100-amp (or even 60-amp) service
- Whole-home electrification (EV + heat pump + water heater + induction range) can demand 150–200A+ on paper
- But actual simultaneous draw is far lower than sum of rated loads — that's the insight AI exploits

## Kill Test
✅ Does this help someone building or buying a home?
- Homeowner adding EV charger: save $1,500–$10,000 by avoiding unnecessary panel upgrade
- Builder electrifying new construction: right-size panels, avoid $17K/home 400A service costs
- GC: understand when to recommend load management vs. panel upgrade
- Specific products, specific costs, specific code references

## Original Contribution
Cost comparison nobody's calculated: NEC 220.82 Optional Method load calc (free) + AI panel photo assessment (free via Qmerit) + SPAN Drive ($1,500–$2,200) vs. traditional 200-amp upgrade ($1,300–$3,000 minimum, often $5,000+). For 70% of homes, the cheaper path works — total savings: $1,000–$8,000 per home.
