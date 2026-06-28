# Research: MIT Topology Optimization Framework for Constructable Trusses

## Topic
MIT researchers have created a topology optimization framework that produces actually-buildable structural designs, not just theoretical optima. The framework simultaneously optimizes for minimum embodied carbon AND constructability constraints. Published in Automation in Construction, June 24, 2026.

## Kill Test
- Does the site already have this? NO. Zero articles on structural topology optimization. Existing articles cover concrete sensors (3), lumber grading (2), and floor plan generators (1, different topic).
- Is it AI-related? Yes — algorithmic optimization using mixed-integer linear programming, a computational method with direct AI/ML adjacency.
- Is it residential-relevant? Partially — the paper tests bridge trusses, but residential roof trusses use the same structural principles. Novel contribution bridges this gap.

## Primary Sources

### Source 1: Schemmer & Carstensen, "Minimum Carbon Trusses" (Automation in Construction, June 2026)
- Authors: Zane Hallowell Schemmer, Josephine Voigt Carstensen
- Affiliation: MIT Dept. of Civil and Environmental Engineering
- Published: June 24, 2026 in Automation in Construction
- DOI: 10.1016/j.autcon.2026.107085
- arXiv preprint: 2602.07185
- Key findings:
  - Mixed-integer linear programming framework for constructable topology optimization
  - Users can constrain: max connections per joint, min angle between components, min part sizes
  - Multi-material optimization (steel + timber simultaneously)
  - In one example, introducing a lower-carbon material option improved carbon by nearly 29%
  - In another example, introducing lower-carbon material had almost no effect
  - Ran on a standard MacBook Pro
  - Tested on Lockport "Upside-Down Bridge" near Buffalo, NY
- Quote (Carstensen): "You need to be able to address all three [materials, constructability, optimization] at the same time."
- Quote (Schemmer): "A big question Josephine and I were asking is why isn't industry using it?"
- Quote (Schemmer): "You can't have a part that's 72 percent timber and 28 percent steel."

### Source 2: Ching & Carstensen, "Truss topology optimisation of timber-steel structures" (Engineering Structures, 2021)
- Earlier work by same lab
- Showed "at least 10%" improvement in embodied carbon
- Carstensen said savings "could actually be two to three times that" (i.e., 20-30%)
- Established the timber-steel optimization approach
- Basis for Ching's master's thesis

### Source 3: SBCA Market Share Data (Home Innovation Research Labs, April 2021)
- 71.8% aggregate market share for roof trusses in single-family construction
- Only 42.4% of roofs are framed using ONLY trusses
- 29.4% are hybrid roofs (trusses + rafters)
- Market share lost in multi-family (-8%)

### Source 4: Residential Construction Data
- Typical 2,000 sq ft home: ~16,000 board feet of lumber (NAHB/multiple sources)
- Roof truss package for 2,000 sq ft: $7,500–$12,000 materials (This Old House)
- $1.50–$4.50/sq ft for materials
- MiTek Structure is dominant design software (used by Stockton Truss, Littfin Truss, Mattingly Lumber, etc.)

### Source 5: Construction Industry Carbon Data
- Construction materials: >7% of global carbon emissions (2022)
- Timber frames: ~119 kg CO2e/m² (Hart et al.)
- Concrete frames: ~185 kg CO2e/m²
- Steel frames: ~228 kg CO2e/m²
- Wood has lower embodied carbon AND sequesters carbon during growth

## Novel Contribution

### Calculation: What MIT's framework would save across US residential roof trusses annually

**Inputs:**
- US single-family housing starts: ~1.35M/year (Census Bureau)
- Roof truss penetration: 71.8% (SBCA) → ~969,000 homes
- Average roof truss package cost: ~$9,750 (midpoint $7,500–$12,000)
- Conservative material savings estimate: 10% (lower bound from Carstensen's own published claim)

**Material savings:**
- Per-house lumber savings: ~$975
- Annual US savings: ~$945M in lumber materials

**Carbon savings (per house):**
- Roof truss lumber mass: ~2,700 kg (rough estimate: ~1,600 bf × 1.7 kg/bf for a truss package)
- Embodied carbon: ~0.25 kg CO2e/kg → ~675 kg CO2e per house for roof trusses
- 10% savings: ~68 kg CO2e per house
- Annual US savings: ~66,000 metric tons CO2
- Equivalent: ~14,400 passenger vehicles removed

**But the per-truss economics kill adoption:**
- Average house: ~25-30 trusses
- Per-truss material savings at 10%: ~$33-39
- This is below the threshold where fabricators would change their design software, retrain staff, and reconfigure jig layouts

## Strongest Counterargument
1. Wood is already the lowest-carbon structural material and sequesters carbon during growth. Optimizing wood trusses further has diminishing returns compared to switching concrete/steel structures to wood.
2. Residential roof trusses are already relatively material-efficient — standard patterns like Fink/Warren work well at 20-40 foot spans. The MIT framework's biggest gains come on longer spans (bridges, commercial buildings).
3. Nobody has tested this on residential trusses specifically. The paper tests bridge trusses.

## Limitations
- The 29% carbon figure is for a specific multi-material bridge case, NOT residential all-wood trusses
- No residential truss manufacturer has tested the framework
- Per-house savings estimate uses lumber cost as proxy for material volume savings, which is imperfect
- The framework's computational requirements may scale differently for the thousands of unique truss configurations a large fabricator produces weekly
- Wood's carbon sequestration is not factored into the savings calculation (it would reduce the net carbon benefit)

## Journalist: Catherine "Code" Chen
- Sharp, analytical voice fits the research-to-practice gap angle
- Can handle the structural engineering concepts
- Dry humor works for "industry shrugged" tone
- Last used: #412 (5 articles ago) — rotation-compliant
