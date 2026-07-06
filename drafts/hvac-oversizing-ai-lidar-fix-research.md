# Research: HVAC Oversizing — The AI/LiDAR Fix

## Angle
Your HVAC contractor sized your system by gut feel. The system is probably 50% too big. AI + LiDAR tools now do in minutes what a proper Manual J calculation takes hours to get wrong. The economics and comfort implications are enormous — and the industry is finally catching up.

**Journalist:** Priya Greenwood (Sustainability & Green Building)
**Kill test:** Does this help someone building or buying a home? YES — anyone replacing HVAC, buying new construction, or doing a retrofit needs to know their system is almost certainly oversized, what that costs them, and what tools now exist to fix it.

## Primary Sources

### 1. Nature Communications (2025) — Largest HP field study ever
- **Paper:** "Estimation of energy efficiency of heat pumps in residential buildings using real operation data"
- **Sample:** 1,023 heat pumps across 10 European countries, monitored 2021-2023
- **Key findings:**
  - 2-3x efficiency difference between worst and best systems
  - 17% of air-source HPs fell below EU efficiency standards
  - ~10% of systems were oversized
  - ~1% undersized
  - After on-site optimization by energy consultant, 50% of Swiss households (297 sample) achieved avg savings of 1,805 kWh (15.2%) per year (Weigert et al.)
  - Up to 24% lower performance than product certificate labels (Nolting et al.)
- **URL:** https://www.nature.com/articles/s41467-025-58014-y

### 2. ACCA / Energy Vanguard — Manual J Sizing Reality
- **Source:** Energy Vanguard (Allison Bailes III, PhD), GreenBuildingAdvisor
- **Key data:**
  - Contractors using "500 sq ft per ton" rule of thumb install systems 2-5x too large
  - Proper Manual J calculations show newer homes need 800-1,500+ sq ft per ton
  - Study of 40 new construction projects: average was 1,431 sq ft/ton
  - Savannah case study: furnace was 89,000 BTU output; Manual J said 60,000 BTU needed; runtime measurement showed actual need was 46,000 BTU — system was nearly TWICE the size needed
  - Manual J itself builds in ~15% oversizing by default
  - ENERGY STAR requires no more than 15% cooling oversizing

### 3. ServiceTitan/Conduit Tech — AI + LiDAR Solution
- **Source:** ServiceTitan acquisition announcement (Sept 2025)
- **Key facts:**
  - ServiceTitan (Nasdaq: TTAN) acquired Conduit Tech for AI-powered HVAC design
  - Conduit uses LiDAR-powered 3D scanning to create precise home models in minutes
  - ACCA Manual J Certified ("Powered by Manual J" approval)
  - Reduces proposal creation from hours to minutes
  - Founded 2022 by Shelby Breger and Marisa Reddy
  - Improperly designed HVAC systems consume up to 30% more energy than expected (ACCA/Conduit)

### 4. DOE / Energy.gov — Cost Data
- **Source:** FEMP/Energy.gov heat pump purchasing guide (updated 2025)
- **Key data:**
  - Best available vs less efficient: $5,533 lifetime savings (hot-humid)
  - SEER2 range: 14.3 (less efficient) to 24/11 HSPF2 (best available)
  - Annual energy cost difference: $846 vs $1,354

### 5. NJ Green Building Manual / NREL
- HVAC systems consume 48% of energy in typical US home
- Design engineers oversize for conditions occurring only 1-2.5% of the time
- NREL (Booten et al. 2014): oversizing penalty comes from off-cycle parasitic power consumption, not cycling efficiency

### 6. ASHRAE Journal (Feb 2026) — Pogosian
- Heat pump systems analyzed for SF Bay Area residential
- Oversized units in humid climates lead to poor dehumidification
- Sizing must consider heating AND cooling loads simultaneously

### 7. OSTI/NREL (Nov 2024) — Design Load Gap Study
- "Design Heating and Cooling Load Calculation Versus Building Load Simulation for Cold Climate Heat Pumps"
- Grimes-Casey, Thomas, Masi-Perkins
- Documents gap between Manual J block-load calculations and EnergyPlus simulation for cold climate heat pumps

## Original Contribution
Novel cost calculation: If the average US home's HVAC is 50% oversized (Energy Vanguard data), and oversized systems use up to 30% more energy (ACCA/Conduit data), and HVAC is 48% of home energy (NJ Green Building Manual), then the average American household is wasting ~14.4% of total home energy on HVAC oversizing alone. At median US electricity cost (~$0.17/kWh, EIA 2025) and median residential consumption (~10,500 kWh/year), that's ~$257/year per household. Across 84 million owner-occupied homes — potentially $21.6 billion/year in wasted energy.
