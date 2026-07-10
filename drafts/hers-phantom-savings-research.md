# Research: HERS Score Phantom Savings
## Journalist: Priya Greenwood (Sustainability & Green Building)

### Core Thesis
The HERS Index — now carried by 34% of all new U.S. homes — compares energy performance to a 2006 code-built home. A national average HERS score of 55 sounds like a 45% efficiency gain. But the baseline is 20 years old. The "savings" printed in bold on the certificate are measured against a house nobody's built in two decades. AI energy scoring tools that use actual utility data instead of physics simulations could close the gap between paper promises and real bills.

### Key Data Points

**HERS Index (2024-2025 RESNET data):**
- National average HERS: 55 (2024), down from 61 (2021), 58 (2021/2022)
- 436,000+ homes rated in 2024 (33% of new single-family homes)
- 420,135 homes rated in 2025 (34% of new homes — market share grew)
- Texas: 113,000+ ratings, Massachusetts: 88% of new homes rated
- California average HERS: 10 (!) — the lowest in the nation
- Average annual energy cost for HERS-rated home: $1,630 (2021)
- RESNET claims HERS-rated homes save avg $1,100/year vs code-minimum
- 196% increase in annual HERS ratings from 2013-2024
- Source: RESNET 2025 Statistical Abstract, HousingWire, Building Performance Association

**The Performance Gap:**
- UK Zero Carbon Hub / Innovate UK: performance gap typically 2.6x worse than design predictions. Gaps can reach 287% (Calì et al.)
- Green Builder Media: "the HERS Index-reported energy savings have become highly overstated for new homes" because baseline is 2006 IECC
- The certificate shows savings "relative to an average U.S. home" — highly ambiguous. "Homebuyers will interpret the savings as the utility bill they should experience — a huge over-promise." (Green Builder Media)
- RMI study: algorithm-based vs physics-based assessments show 20-30% average absolute difference

**The California Paradox (devastating cross-reference):**
- California HERS scores dropped 57 points since 2013 (most improvement of any state)
- California 2025 average HERS: 10 (90% better than 2006 baseline!)
- BUT: Arik Levinson (Georgetown/NUS): "after controlling for size and location of homes, and income, age, number, and education of occupants, there is no evidence that homes constructed since California instituted its building energy codes use less electricity today than homes built before the codes came into effect"
- This uses three separate approaches (within-RECS, within-California utility data, California vs other states) — all yield same answer
- This doesn't mean codes are bad — it means the savings credited to codes are overstated

**Current energy costs:**
- Average US residential monthly energy bill (2023): $136.84 (EIA/This Old House)
- Average Americans spend ~$2,000/year on home energy (DOE)
- $200-$400 of that is wasted (DOE)
- Residential electricity rate: 16.48¢/kWh (2024), 17.30¢ (2025), projected 18.29¢ (2026)
- EIA projects US power demand hitting records in 2026-2027 (AI data centers + electrification)
- Energy-efficient homes sell for 2.7% more (Freddie Mac); better ratings → up to 5% premium

**AI Energy Scoring:**
- RMI/DOE study: ClearlyEnergy and UtilityScore use algorithm-based assessments on actual utility data
- ML models (XGBoost, ANN) achieving R² > 0.98 on actual consumption prediction (MDPI studies)
- Key features: windows (74.3% of envelope impact), floors (20.2%), walls (4.2%), roofs (1.4%)
- SHAP-based interpretable models can explain WHY a home uses what it does
- These tools can pull granular utility rate data that HERS/REM/Rate can't
- The DOE Home Energy Score (HES) and HERS have no statistical correlation (FSEC study) — they measure fundamentally different things

### Original Contribution
1. **Phantom savings calculation:** 436,000 HERS-rated homes in 2024 × $1,100 claimed average savings = $479.6M in promised savings. If performance gap is even 50% (conservative vs 2.6x UK finding), that's ~$240M in savings that don't materialize for homebuyers annually.
2. **California paradox juxtaposition:** HERS score of 10 (90% better than baseline) vs academic finding of zero actual electricity reduction — nobody has laid these two numbers side by side for a builder audience
3. **The 20-year baseline problem:** HERS score of 55 compared to 2006 code. But 2006 code already required more insulation and better windows than most existing homes. Being 45% better than "pretty good" doesn't mean what homebuyers think it means.
4. **Rate assumption compound error:** HERS uses REM/Rate physics models with assumed occupancy. Real occupants are different. Plus rates are rising (16.48¢ → 18.70¢ projected 2027 = 13.5% increase in 3 years). Even if consumption matches, bills won't.

### Sources
- RESNET 2025 Statistical Abstract "Trends in HERS Rated Homes"
- HousingWire: "HERS Scores Hit New Lows" (2024 data)
- RESNET: "HERS Rated Homes in 2025: State-by-State Performance"
- Green Builder Media: "Beyond Energy Ratings Basics"
- Arik Levinson, "How Much Energy Do Building Energy Codes Really Save?" (Georgetown/NUS)
- Zero Carbon Hub / Innovate UK: building performance gap study
- RMI/DOE: "Is There a Trade-off with Transparency?"
- EIA Short-Term Energy Outlook (July 2026)
- This Old House / EIA: residential energy statistics 2023
- Freddie Mac: energy-efficient home value premium
- FSEC: "Relationship between DOE HES and RESNET's HERS"
- MDPI: multiple ML energy prediction studies (XGBoost, ANN models)
- DOE: average household energy spend ($2,000/year)

### Kill Test
Does this help someone building or buying a home? YES.
- **Homebuyers:** Don't trust the bold number on the HERS certificate at face value. Ask for actual utility data from comparable homes in the same subdivision.
- **Builders:** The HERS score is a competitive differentiator, but overpromising and underdelivering on energy costs creates warranty risk and reputation damage.
- **Both:** AI tools that use actual utility data (not physics models) are emerging. They're not perfect, but they're measuring the right thing.
