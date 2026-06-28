# Research: AI Panel Photo Analysis for EV Charger / Heat Pump Upgrades

## Angle
Your electrician quoted $5,000 for a panel upgrade before installing your EV charger. An AI analyzed a photo of your panel and ran five NEC methods simultaneously. You didn't need the upgrade. Neither do 70% of homeowners.

## Journalist
Jake Kowalski — Construction Technology (punchy, hands-on, specs-heavy, respects the trade)

## Kill Test
Does this help someone building or buying a home? YES — anyone electrifying (EV charger, heat pump, induction stove) faces the panel upgrade question. Direct money savings of $1,800–$5,000+.

## Primary Sources

### 1. ChargeRight (evchargeright.com)
- Founded by Jason Walls, Master Electrician, IBEW Local 369, EVITP Certified
- $12.99 AI panel assessment vs $150–$300 electrician service call
- Runs 5 NEC methods simultaneously: 220.82, 220.83-A, 220.83-B, 220.53 Standard, 2026 NEC Preview
- Most electricians only run one method (typically the conservative Standard Method that produces higher numbers = upsell to upgrade)
- AI-powered panel photo analysis: flags FPE, Zinsco panels, melted bus bars, double-taps
- 860K organic site visits
- Key stat: 70% of homes already have enough capacity for EV charger without upgrade
- Demo case: same 2,400 sqft home, 200A panel, 48A Tesla charger
  - NEC 220.82 (Optional Method): 149A — fits, $0 upgrade needed
  - Standard Method (contractor default): 204A — $3,000–$5,000 upgrade quoted
  - Same house, same loads, 23-amp gap. That gap is the entire cost difference.
- Provisional patent filed

### 2. Qmerit Panel Insights + LoadCRE
- North America's leading EV charger installer
- 269,000+ home charging installations (proprietary database)
- Panel Insights™: AI algorithms evaluate panel from single photo
  - Available circuit spaces, tandem breakers, total capacity
  - Developed with Schneider Electric "AI Hub" team
  - Uses Microsoft Cognitive Services (computer vision)
- LoadCRE™ (Load Capacity Recommendation Engine): 
  - Takes Panel Insights results → calculates available capacity
  - Auto-generates load calculation for electrical permit
  - Eliminates separate site visit by contractors
- CEO: Tracy K. Price
- CTO quote (Schneider): Scott Harden — "leveraging Computer Vision and Microsoft Cognitive Services"
- API-first approach — sharing with industry partners

### 3. NEC Code Technical Detail
- NEC 220.82 (Optional Method): Combines all general loads into one sum, applies 100% to first 10,000 VA, 40% above that. HVAC at 100% AC or 40% heating (4+ units). Produces LOWER total.
- Standard Method (Part III): Granular, separate demand factors per load category. Produces HIGHER, more conservative results.
- Mike Holt (NEC Consultant for EC&M Magazine): "The standard method for sizing a dwelling feeder or service load presents several problems that are all solved by the optional method."
- Optional method available for any dwelling with 100A+ service
- Both methods are code-compliant — the Optional Method is NOT a shortcut or hack
- 2026 NEC changes: lighting load dropped from 3 to 2 VA/sqft, first demand tier from 10kVA to 8kVA, EV chargers now calculated at 100% with no demand factor

### 4. DOE EVGrid Assist Data
- By 2030: 33M EVs on US roads, 28M charging ports needed
- 25.7M (92%) expected to be private L1/L2 at single-family homes
- 64% of all EV charging at single-family homes
- As of Feb 2026: 326K+ publicly accessible L2 and DC fast charging ports

### 5. Cost Data (EnergySage/Qmerit/ACDirect)
- Panel hardware: $250–$450
- 100A to 200A panel swap: $1,800–$4,000 (most common upgrade)
- Fuse box to 200A: $2,500–$5,000+
- 200A to 320/400A: $3,500–$6,000+
- Sub-panel addition: $800–$2,000
- Load management device: $200–$600 (may avoid full upgrade)
- EV charger installation: avg $2,442
- Smart electrical panel: $2,000–$5,000

### 6. ABB ReliaHome Smart Panel
- Whole-home energy management
- Mounts next to existing panel
- Manages big loads (EV chargers, pools, water heaters) to stay within existing service
- Alternative to full panel upgrade

### 7. CleanTechnica / Industry Data
- 80% of homes don't need the upgrade (ChargeRight claim)
- NEC 2023: certified Energy Management Systems allow "capping" total current — can legally install high-powered EV charger without exceeding 100A service
- NAHB: ~50% of builders claim to use AI, but <5% use it for actual building functions

## Novel Contribution
Calculate the national scale of unnecessary panel upgrades:
- ~2M+ new EV registrations/year in US (growing)
- If ~50% get quoted for panel upgrades they don't need (conservative vs ChargeRight's 70% claim)
- Average unnecessary upgrade: ~$3,000
- That's ~$3B/year in unnecessary panel upgrades nationwide
- These tools could save individual homeowners $1,800–$5,000 each

## Strongest Counterargument
Electricians have legitimate reasons to be conservative:
- Liability — if a panel they certified as adequate fails or causes a fire, they're liable
- The Standard Method exists precisely to build in safety margin
- An AI looking at a photo can't verify wire gauge behind the wall, can't test for loose connections, can't smell burning
- Physical inspection still matters
- Some homes genuinely do need upgrades (especially pre-1960s wiring, FPE/Zinsco panels)

## Limitations
- ChargeRight's "70% don't need upgrades" claim is self-reported and not independently verified
- $3B estimate relies on assumptions about EV charger installation volumes and upgrade quote rates
- AI panel photo analysis has inherent limitations: photo quality, angle, panel condition not visible externally
- NEC 220.82 Optional Method, while code-compliant, does reduce safety margins — there's a reason the Standard Method is more conservative
- Regional variation in code adoption, inspector preferences, and utility requirements
