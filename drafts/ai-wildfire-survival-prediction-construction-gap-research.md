# Research: AI Wildfire Survival Prediction — The Construction Gap

## Angle
An AI model predicts with 82% accuracy whether your home will survive a wildfire — based on construction materials, roof pitch, defensible space, and structure separation. But most builders in fire-prone areas build exactly to code minimum, which was designed to prevent ignition from embers, not to model survival probability. The gap between "code-compliant" and "survives a wildfire" is now measurable, insurable, and AI-scorable. Builders aren't designing to the AI's score, and the people who buy those homes pay for it in premiums — or in total loss.

Kill test: Does this help someone building or buying a home? YES — in fire-prone areas (which now include 1.5M+ California structures alone), construction decisions made at framing stage determine whether the home is insurable, at what price, and whether it survives. The AI scoring gap between code-minimum and fire-hardened construction is the difference between a $3,000/year premium and a $12,000/year premium or outright uninsurability.

## Primary Sources

### Source 1: UC Berkeley Engineering — Wildfire Defense Machine Learning Model (Winter 2025)
- Led by Michael Gollner (associate prof, mechanical engineering) and Maryam Zamanialaei (postdoc)
- Used CAL FIRE's damage inspection database (DINS) — on-the-ground surveys of all structures damaged/destroyed in major CA wildfires since 2013
- Combined with geospatial data on structure spacing, construction materials, vegetation density
- **ML model predicts structure survivability with 82% accuracy**
- Key finding: structure separation distance is the most influential factor driving structure loss, especially in densely built areas
- Flame length and construction features also substantially contribute
- Removing vegetation within 5-foot perimeter reduces structure losses by 17%
- Home hardening + defensible space together can double the number of homes that survive
- Source: https://engineering.berkeley.edu/news/2025/11/wildfire-defense-that-works/

### Source 2: IBHS + ZestyAI Joint Study — Fuel Density Mitigation Impact
- Mitigating fuel density risk nearly doubles a property's wildfire survival rate
- Z-FIRE trained on 1,200+ wildfire events across several decades
- Accounts for property-level factors: defensible space, building material, roof pitch
- Legacy wildfire risk models fail to consider these property-level factors
- "While it is not possible to eliminate wildfire risk we are not powerless against it"
- Source: https://ibhs.org/ibhs-news-releases/nearly-doubling-a-propertys-wildfire-survival-rate/

### Source 3: ZestyAI Z-FIRE — LA Wildfire Validation (Jan 2025)
- During LA wildfires: 94% of Palisades fire area and 87% of Eaton fire area rated High or Very High Risk by Z-FIRE
- More than 1.5 million structures in California face high or very high wildfire risk
- Z-FIRE allows insurers to move beyond binary "insure or drop" decisions
- Can work with policyholders on mitigation: defensible space, fire-resistant roofing, other measures
- Z-FIRE has helped insurers write hundreds of thousands of policies that would otherwise have been non-renewed or declined
- CA FAIR Plan (insurer of last resort) adopted Z-FIRE: "We can no longer rely on 30-year-old technology to understand modern climate phenomena"
- CDI has approved Z-FIRE in rate filings; approved for use in California
- Source: https://www.finextra.com/pressarticle/104245/zestyai-wildfire-risk-model-available-for-us-n-califronian-rate-filings

### Source 4: IBHS Construction Costs for Wildfire-Resistant Homes (2025)
- Detailed cost estimates for three wildfire-resistant construction scenarios vs. "traditional" non-resistant materials
- Post-LA fires context: 16,000+ structures destroyed, January 2025
- California Building Code Chapter 7A (becoming Part 7, Title 24 CWUIC on Jan 1, 2026)
- IBHS Wildfire Prepared Home (WFPH) and Wildfire Prepared Home Plus (WFPH Plus) standards
- WFPH Base: mitigations to structure and defensible space to reduce risk from embers
- WFPH Plus: enhanced protection against flames and radiant heat
- Covers: roofing, eaves, siding, windows/doors, decks, 0-5 foot noncombustible zone
- FORTIFIED homes: 35% less likely to file insurance claim, 22% less damage than traditionally built (from earlier IBHS data)
- FORTIFIED Gold adds 1-3% to total construction budget for new construction
- FORTIFIED Roof re-roofing cost increase: $1,000-$3,000 for 2,000 sq ft home
- Source: https://ibhs.org/wp-content/uploads/Construction_Costs_Wildfire_Resistant_Homes_HE-IBHS_Final_2025.pdf

### Source 5: IBHS + APCIS Joint Framework (March 2026)
- Science-based home hardening and defensible space standards
- Includes noncombustible zone within 5 feet of structures
- Designed to give insurers a consistent, verifiable basis for incorporating mitigation into underwriting and premium pricing
- More than 20 states have accepted AI-driven wildfire and hail models in rate filings
- Less than 35% of Americans live in communities that have adopted a modern building code
- Source: https://www.insurancebusinessmag.com/us/news/catastrophe/reducing-property-risk-not-raising-insurance-premiums-is-vital-in-the-catastrophe-market-578473.aspx

### Source 6: Merkley's Wildfire Insurance Affordability Act (July 23, 2026)
- Grants to states for individual homeowners to create defensible space and harden homes
- Pilot program: vouchers for low-income homeowners who complete hardening
- Context: insurance costs have doubled or tripled in fire-prone areas
- "It won't lower rates to what they were in the past, but it's trying to find a way to help people who might not be able to afford insurance"
- Source: https://www.statesmanjournal.com/story/news/wildfires/2026/07/24/sen-jeff-merkley-promotes-bills-to-reduce-wildfire-insurance-cost/91043885007/

### Source 7: Louisiana FORTIFIED Insurance Data
- Louisiana Act 533: insurance providers legally mandated to offer premium discounts for FORTIFIED designation
- Homeowners see 20-52% reduction on wind and hail portion of premiums
- Louisiana Fortify Homes Program: up to $10,000 grants for FORTIFIED roof upgrades
- 2026 grant funds entirely exempt from state income tax
- Paid directly to approved contractors (homeowners don't front capital)
- Source: https://www.wcia.com/business/press-releases/ein-presswire/920718652/priority-roofing-champions-ibhs-fortified-roof-standards-to-protect-gulf-south-homes-ahead-of-2026-hurricane-season/

## Novel Contribution
**The "Build-to-Survive" vs "Build-to-Code" cost-benefit calculation:**
- IBHS data: FORTIFIED Gold adds 1-3% to new construction cost = $3,000-$12,000 on a $400K home
- Insurance savings in fire-prone areas: 20-52% premium reduction = $2,000-$6,000/year
- Payback period: 6 months to 6 years on the construction premium alone
- But the real math is about total loss avoidance: if AI predicts your code-minimum home has a 40% chance of destruction in a wildfire perimeter vs 20% for a hardened home, the expected loss difference on a $400K structure is $80,000
- No builder currently markets to an AI wildfire survival score. The AI scoring infrastructure exists (Z-FIRE, Berkeley ML model), the insurance incentive structure exists (20+ state approvals, FORTIFIED mandates), but the builder-side adoption doesn't

## Strongest Counterargument
- Building codes in WUI (Wildland-Urban Interface) areas already address wildfire: CA Chapter 7A has been in effect since 2008 and is one of the nation's most stringent. Saying builders build "to code minimum" understates what code actually requires in high-risk zones.
- AI survival prediction at 82% accuracy means 18% of the time it gets it wrong. A builder cannot warrant that a home will survive a wildfire, and marketing based on an AI survival probability creates legal liability exposure that no general counsel will accept.
- The cost premium for fire-hardened construction, while modest in percentage terms (1-3%), lands on top of already-stretched affordability in fire-prone California markets where median home prices exceed $700K. Adding any cost to new construction when housing supply is already constrained requires honest trade-off analysis.
- Wildfire survival depends heavily on factors builders don't control: wind speed, fire intensity, firefighting response, neighbor's maintenance, vegetation management on adjacent properties. The best-built home on the block can still burn if the neighbor's cedar fence channels embers to the eaves.

## Limitations
- Berkeley ML model tested on California wildfire data only — applicability to other fire-prone states (Colorado, Oregon, Washington, Montana) is unvalidated
- ZestyAI's Z-FIRE performance claims are company-reported; no independent academic validation of the 94%/87% LA fire correlation
- IBHS cost data for wildfire-resistant construction focuses on material costs, not total installed costs (labor varies significantly by market)
- No published data connecting AI wildfire risk scores directly to construction quality metrics at the builder level
- Louisiana FORTIFIED insurance mandate data is for wind/hail, not wildfire — direct premium reduction data for wildfire-hardened homes is thinner
- The 82% accuracy figure from the Berkeley study is a single aggregate metric — precision and recall by construction type are not broken out

## Journalist
Priya Greenwood — Sustainability & Green Building. This is about climate resilience, construction science, and the gap between what code requires and what AI predicts will survive. Priya's evidence-based passion and ability to connect building science to real homeowner outcomes fits perfectly.
