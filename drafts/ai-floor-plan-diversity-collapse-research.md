# Research: AI Floor Plan Generators — The Diversity Collapse Problem

## Journalist: Elena Vasquez (Architecture & Design)
## Date: April 30, 2026

## Thesis
AI generative floor plan tools promise architectural choice — hundreds of layout options in seconds — but the underlying models mathematically converge toward sameness. Peer-reviewed research shows that as these models improve at generating "realistic" plans, they get worse at generating diverse ones. The training datasets compound the problem: the most widely used dataset (RPLAN, 80,000+ plans) consists entirely of Chinese urban apartments, not American single-family homes. The result is AI tools that generate variations of the same plan and call it "choice."

## Kill Test
Does this help someone building or buying a home? YES — homeowners and builders using Maket.ai, Finch3D, or similar tools to explore design options need to know that "200 floor plan options" may contain far fewer meaningfully distinct layouts than advertised. Practical guidance: how to evaluate whether AI-generated options are genuinely different, and when to invest in a human architect instead.

## Primary Sources

### 1. Stoppani & Bacciu (2025), "Boundary-Constrained Diffusion Models for Floorplan Generation: Balancing Realism and Diversity" (arXiv 2602.01949)
- **Key finding:** "Prolonged training drives diversity collapse undiagnosed by FID, revealing a critical trade-off between realism and diversity."
- Proposed the "Diversity Score" (DS) metric to quantify layout diversity under fixed constraints
- Out-of-distribution (OOD) evaluations show "models' reliance on dataset priors" — they can't generalize beyond training data
- FID (the standard metric) only measures realism, not diversity. Models can score well on FID while producing near-identical outputs
- University of Pisa + H&M Group collaboration

### 2. RPLAN Dataset (Wu et al.)
- 80,000+ annotated floor plans — the dominant training dataset for AI floor plan generation
- **Critical limitation:** Exclusively Chinese urban apartment layouts. Single-unit, predominantly rectangular rooms.
- No American single-family detached homes, no ranch plans, no split-levels, no two-story colonial foyers
- Every AI floor plan model trained on RPLAN inherits Chinese spatial norms (wet/dry bathroom separation, compact kitchens, shoes-off genkan-style entries)

### 3. ResPlan (Abouagour & Garyfallidis, 2025, Indiana University)
- New dataset: 17,000 plans, attempts to be more diverse
- Explicitly acknowledges RPLAN limitations: "RPLAN predominantly consists of simple, single-unit layouts with mostly rectangular room shapes"
- Provides both geometric and graph-based formats
- Still limited in cultural/geographic diversity

### 4. Maket.ai (commercial platform)
- 1 million+ registered users, Montreal-based
- $30/month Pro plan
- $3.4M CAD seed funding (Oct 2025, Amiral Ventures)
- Generates floor plans in seconds from room counts, sqft, adjacency rules
- Review (illustrarch.com, March 2026): "requires manual intervention to refine" — zoning compliance claims need professional verification before permit submission
- Low-res on free plan, DXF export only on Pro

### 5. Finch3D (commercial platform)
- Swedish-built, graph-based (not image training)
- Founded by architects Pamela Nunez Wallgren, Jesper Wallgren, Martin Kretz
- Uses proprietary "Finch Graph" for spatial relationships — architecturally coherent outputs
- €800–2,750/yr
- Focused on multifamily and commercial, less on single-family residential
- Appeared in Financial Times
- More architecturally rigorous than image-based generators

### 6. Harvard Design Magazine — "Resistant Data" (Christoforetti, 2025)
- Elizabeth Bowie Christoforetti, Harvard GSD
- "What we decide to automate matters... technology tends to amplify, accelerate, or consolidate the inherited values and value systems of our society"
- AI in architecture risks cementing existing design conventions rather than expanding possibilities
- Students questioning fundamental processes while critics discuss formal merits — two scripts on the same stage

### 7. RSM US — "The Rising Uniformity of Multifamily Housing"
- 5-over-1 construction has homogenized American multifamily housing
- IBC Section 510.2 enables wood-over-concrete podium
- 75% of US residential zoning reserved for single-family
- 17% of 530,000 multifamily starts in 2020 by top 25 developers (Census Bureau + NMHC)
- AI tools could accelerate this convergence by further standardizing design

### 8. MDPI — "Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans" (Buildings, 2025)
- Peer-reviewed framework for evaluating AI floor plan quality
- Highlights gap between perceptual metrics (how it looks) and functional metrics (how it works)

## Original Contribution / Novel Analysis
Cross-reference the diversity collapse finding (Stoppani) with commercial tool claims. If Maket.ai claims to generate "hundreds of options," and the underlying model mathematics show diversity collapse, how many *meaningfully distinct* layouts does a user actually get? Calculate an effective diversity ratio by analyzing the DS findings against commercial tool marketing.

Additionally: map the RPLAN geographic bias onto U.S. single-family housing starts. In 2024, 947,000 single-family homes were started (Census Bureau). How many of those were designed using tools whose training data contained zero American single-family homes?

## Strongest Counterargument
Finch3D's graph-based approach avoids the image-based diversity collapse problem. Not all AI floor plan tools use diffusion models trained on RPLAN. The diversity collapse research specifically applies to diffusion/GAN-based generators, not all generative design tools. Some tools (like Finch) use rule-based graph systems that don't suffer from training data convergence.

## Limitations
- The Stoppani paper studies academic models, not commercial products. Maket.ai and others may use proprietary architectures that mitigate diversity collapse differently.
- We don't have access to the training data composition of commercial tools. RPLAN is the default academic dataset, but companies may supplement with proprietary data.
- "Diversity" in floor plans is hard to define. Two plans with different room sizes but identical topology might be meaningfully different for one buyer and identical for another.
- The paper's DS metric is new and hasn't been independently validated or widely adopted.

## Headline Options
1. "You Asked the AI for 200 Floor Plans. It Gave You the Same Plan 200 Times."
2. "Every AI Floor Plan Tool Trained on the Same 80,000 Apartments. None of Them Were Houses."
3. "The AI Generated 12 Layout Options. A New Diversity Metric Says 3 Were Actually Different."
4. "Your AI Floor Plan Generator Learned Architecture from 80,000 Chinese Walk-Ups. It Shows."
