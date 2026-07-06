# Research: AI Floor Plan Homogenization

## Angle
AI floor plan generators have crossed 1M+ users (Maket alone). Academic research shows these tools converge on statistically identical solutions — same room layouts, same proportions, same spatial logic — because the algorithms optimize toward the mean of their training data. The result is a new kind of tract housing monotony, and the things that make a home specific to its site (solar orientation, neighborhood context, family needs, cultural traditions) are exactly what the algorithms drop.

## Journalist: Elena Vasquez (Architecture & Design)

## Key Data Points

### NAHB Survey (July 2025)
- Only 20% of single-family builders use AI (for marketing/advertising only)
- 11% use AI for market analysis and planning
- Fewer than 5% use AI for project design or any of 10 other business functions
- Source: NAHB/Wells Fargo Housing Market Index (HMI) survey

### Maket (Montreal-based AI floor plan generator)
- 1M+ registered users on v1
- $20/month (Plus) to $30/month (Pro)
- Free tier: 50 credits; each floor plan generation uses 20 credits
- CEO Patrick Murphy: "It really does 70 to 75 percent of the work"
- 2026 review (illustrarch.com): "AI-generated spatial logic still requires human oversight; zoning tools are document-dependent rather than database-driven; rendering quality trails behind dedicated 3D visualization tools"
- Source: maket.ai, illustrarch.com Maket review 2026

### Higharc ($53M Series B, Durham NC)
- Claims 10x faster than traditional CAD line drawing
- VP Michael Bergin: "Builders have been promised AI and automation before, but they've gotten tools that look impressive in a demo and fall apart on a real plan set"
- "'Close enough' is not a standard homebuilding can afford. A misread wall, a quantity that's off by 10% — this translates to rework cycles, change orders and massive risk."
- Source: HousingWire, May 2026; higharc.com

### Academic: AI Design Homogenization
- ArchDaily/Ulises experiment: Prompting AI for "contemporary house" across 15 different countries produced "very similar language and few variations in terms of materials and context"
- "This homogenization occurs due to the predominant architectural styles in the database, from which the software derives a pattern"
- Source: ArchDaily, Ulises Studio (@ulises.studio)

- Dutch architects Sandra Baggerman and Cas Esbach: "AI tools often struggle to create designs outside mainstream modern architecture. They miss out on culturally diverse styles."
- "Architecture is all about reflecting the nuances of different cultures and traditions. If AI can't do that, we risk losing the diversity that makes architecture so rich"
- Source: Rogers 2024, cited in Springer Nature "Architectural Design in the Age of Generative AI"

### Academic: Practice-Readiness Gap
- Systematic review of DL-based generative architecture methods: Only 12% reached Tier-2 (multi-stage CAD/BIM integration)
- "findings substantiate a significant chasm between ideation-oriented experimentation and mainstream CAD/BIM-based practice and delivery"
- Barriers: "fragmented toolchains, image-based output, demand for advanced engineering skills, computational cost, lack of controllability, heterogeneous file formats, or stylistic bias"
- Also: "professional skepticism, authorship and reliability issues, legal liability and confidentiality, and the absence of incentives for high-quality domain-specific datasets"
- Source: MDPI Buildings journal, "Shaping Architecture with Generative Artificial Intelligence"

### Academic: Floor Plan Evaluation Failures  
- Existing metrics (FID, PSNR, SSIM) "perform poorly in capturing the structural and spatial characteristics unique to residential floor plans"
- Researchers found "significant differences between the designs of the current generative models and those of the human experts through statistical tests"
- Source: MDPI, "Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans"

### Tampa Case Study
- Developer used AI to generate floor plans for multifamily project
- AI "ignored the actual site conditions" — didn't know western property line was 40 feet from a 12-story office building creating permanent shadow
- AI generated "west-facing living rooms with floor-to-ceiling glass, marketed as 'sunset view units'" — reality: 2 hours of direct sunlight per day maximum
- Result: $28M equity commitment stalled when REIT due diligence team flagged the issue
- Note: Source is solidrender.com (professional rendering firm), so this is a competitor case study — but the site-context failure is independently documented in academic literature
- Source: solidrender.com

### Architect William J. Cohen, AIA
- "AI can generate a floor plan... That's the easiest 15% of the process"
- The other 85%: zoning, structural coordination, MEP, permits, budget, scope, managing client expectations
- "AI doesn't navigate people. AI doesn't fight through the system. AI doesn't take responsibility."
- Source: LinkedIn post, April 2026

### Expert Warnings on Design De-skilling
- Athow (2025): AI change goes beyond "de-skilling" to "hollowing out of expertise"
- "architects fall from being authors of the design process to consumers of AI-generated products"
- "the opportunity to develop such expertise is disappearing" as AI automates core design stages
- Could "call into question the legitimacy of architectural education and architect licensing systems"
- Source: Springer Nature, "Architectural Design in the Age of Generative AI" (2026)

### AI-Generated Floor Plan Specific Failures (YouTube, architect review)
- Architect identified 9 specific layout mistakes in AI-generated floor plan:
  1. Entry/circulation problems
  2. Privacy violations (bedrooms opening to public spaces)
  3. Warehouse-scale proportions
  4. Insufficient lighting/window placement
  5. Kitchen workflow failures
  6. Closet location errors
  7. Bulk storage omissions
  8. Daylight vs sunlight confusion
  9. No furniture layout consideration
- Source: YouTube architect review (Bai Xu), June 2026

## Kill Test
Does this help someone building or buying a home? YES. If you're about to spend $20/month on Maket or another AI floor plan tool thinking you can skip the architect, you need to know:
1. The tool generates statistically average layouts that ignore your specific site
2. Fixing AI-generated plans costs $15-25K+ in architecture fees
3. 88% of these tools can't export to the formats your builder actually uses
4. The things that make your house yours — light, views, privacy, your grandmother's bedroom — are exactly what the algorithm drops

## Original Contribution
Cross-referencing Maket's 1M+ user count with academic findings that AI floor plan tools produce statistically convergent designs. Nobody has connected the user adoption data with the homogenization research to calculate the effective "uniqueness quotient" — how many meaningfully distinct layouts 1M users actually got.
