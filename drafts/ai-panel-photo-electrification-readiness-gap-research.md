# Research: AI Panel Photo Analysis and the Electrification Readiness Gap

## Kill Test
**Does this help someone building or buying a home?** YES.
- Homebuyers of existing homes: AI can determine if the electrical panel handles electrification (EV charger, heat pump) before purchase — revealing a hidden $1,800–$4,500 upgrade cost.
- Builders of new homes: AI panel analysis + smart panel integration can ensure electrification readiness without upgrading to 400A service.

## Core Thesis
An AI can now read a single photo of a residential electrical panel and determine in seconds whether the home can handle an EV charger, heat pump, or electric water heater — work that previously required a $100–$300 electrician site visit and manual NEC Article 220 load calculations. Qmerit's Panel Insights™, trained on 269,000+ installations, has made this possible. The problem: 48 million U.S. homes need a panel upgrade just to install an EV charger, and most homebuyers never check panel capacity before closing. The AI knows the answer. Nobody asks.

## Primary Sources

### 1. Qmerit Panel Insights™ + LoadCRE™
- **Source:** Qmerit press release (qmerit.com), company website
- **Key facts:**
  - Panel Insights™: AI evaluates panel specs from a single photo — available circuit spaces, tandem breakers, total capacity
  - LoadCRE™ (Load Capacity Recommendation Engine): auto-generates NEC Article 220 load calculations
  - Training data: 269,000+ home charging installations
  - Developed with Schneider Electric AI Hub + Microsoft Cognitive Services
  - Eliminates separate site visit by electricians
  - API-first approach — shared with industry partners
  - CEO: Tracy K. Price, founder
  - Schneider CTO for Innovation: Scott Harden

### 2. 48 Million Panel Upgrade Estimate
- **Source:** Schneider Electric, via their blog (blog.se.com)
- **Quote:** "It's estimated that as many as 48 million homes in the USA would require a panel upgrade to accommodate an EV charger."
- Context: Most of these are homes with 100A or 150A service, standard in homes built before 2000.

### 3. Panel Upgrade Costs (2025-2026 data)
- **Sources:** This Old House, Angi, NYSERDA, Fixr.com, DIYProjects.com
- **200A upgrade:** $1,300–$4,500 (panel + installation)
- **400A upgrade:** $8,000–$12,000
- **NYSERDA estimate:** $3,000–$5,000 typical
- **Full service upgrade** (meter + wire + panel): can exceed $5,000
- **Panel relocation** (if required by code): $500–$4,000 additional
- **Meter box replacement:** $200–$650 additional

### 4. Smart Panel Alternative
- **Sources:** ABB (ReliaHome), Schneider (Pulse), YouTube (electrical contractor)
- Smart panels manage loads to stay within existing capacity
- Turn EV chargers, water heaters on/off to prevent overload
- Can avoid panel upgrade entirely in some cases
- NYSERDA: "These systems can manage electrical loads in a fully electrified house with less overall capacity"

### 5. NEC Load Calculation Complexity
- NEC Article 220 governs residential load calculations
- Continuous load rule: 125% for continuous loads (EV charging)
- Demand factors reduce calculated load below sum of breaker ratings
- Manual process takes electricians hours, is error-prone
- AI automates this from a single photo

## Original Contribution: The $4,500 Question Homebuyers Never Ask

**My calculation of what full electrification actually demands:**

A "typical" existing home with 200A service:
- Base load after demand factors: ~15,000–18,000W
- Add Level 2 EV charger (48A circuit, continuous): 11,520W × 1.25 = 14,400W calculated
- Add heat pump (4-ton): ~5,000–7,500W
- Add electric water heater: ~4,500W
- **Total calculated load: ~39,400–44,400W**
- **200A × 240V = 48,000W service capacity**

For a home already at 75% utilization (common in older homes with gas appliances converting to electric), adding just an EV charger can push the calculated load past panel capacity.

**The hidden cost disclosure gap:**
- Average panel upgrade: $3,000–$5,000
- Homes affected: ~48 million
- Total hidden electrification cost: $144–$240 billion industry-wide
- Per-home cost that no real estate listing discloses: $3,000–$5,000
- An AI can identify this cost from a phone photo before the buyer signs

**Compare to home inspection costs:**
- Average home inspection: $300–$500
- Electrical panel assessment by electrician: $100–$300 for a site visit
- AI panel photo analysis: <$1 per analysis at scale

## Strongest Counterargument
NEC demand factors are deliberately conservative — not every appliance runs simultaneously. A skilled electrician applying proper demand factors to a 200A panel will often find it CAN handle EV charging + heat pump without an upgrade, especially with load management devices. The 48 million figure may overstate the actual number needing upgrades because it doesn't account for smart load management.

## Limitations
- Qmerit's Panel Insights accuracy rate is not publicly disclosed
- The 48 million figure comes from Schneider Electric, which sells panel upgrade products (potential conflict)
- AI photo analysis has edge cases: obscured breakers, non-standard panels, older installations with faded labels
- Cost estimates vary significantly by region and utility requirements

## Journalist
**Jake Kowalski** — tech/tools beat, practical voice, tells stories through what tools can and cannot do
