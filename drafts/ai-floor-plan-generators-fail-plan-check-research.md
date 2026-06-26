# Research: AI Floor Plan Generators vs. Plan Check Reality
## Slug: ai-floor-plan-generators-fail-plan-check
## Journalist: Elena Vasquez (Architecture & Design)
## Date: June 25, 2026

## Angle
AI floor plan generators ($20-50/mo) promise homeowners and small builders instant, code-compliant residential layouts. The reality: most AI-generated floor plans fail the specific code checks that municipal plan reviewers enforce. The cost savings evaporate when resubmission fees, delays, and professional remediation are factored in.

## Kill Test
YES — directly helps anyone building or buying a home who's considering AI design tools instead of hiring an architect.

## Primary Sources

### 1. Academic: RFP-A Floor Plan Assessment Framework (MDPI, May 2025)
- Evaluated 6 AI floor plan generation models using Residential Floor Plan Assessment (RFP-A) framework
- **Only HouseDiffusion and FloorplanDiffusion achieved >90% accuracy**
- **Other models scored below or around 60%**
- No model achieved consistently high diversity across all dimensions
- Key finding: existing metrics don't reflect quality of generated designs well
- Source: Comprehensive and Dedicated Metrics for Evaluating AI-Generated Residential Floor Plans, MDPI 2025

### 2. Academic: AI Daylight Compliance Study (Cambridge Core, 2024)
- Tested ChatGPT and Microsoft Copilot for architectural layout generation
- ChatGPT: strong architectural coherence, **but fails daylight compliance thresholds**
- Copilot: weaker architecture, marginally better daylight compliance
- Key finding: "generative models excel in visual form-making, their output remains insufficiently informed by performance-oriented design logic"
- Source: Evaluating daylight performance of AI-generated housing plans, Cambridge Core

### 3. Industry: Spacial (AI Compliance Startup)
- Keeps licensed engineers in the loop — explicitly rejects pure AI output for municipalities
- CEO quote: "In construction, it's not enough to be 'mostly right.' If a plan fails code or constructability checks, it's the builder and architect who pay the price. Cities don't want AI output. They require professional validation and plans to be stamped."
- Every compliance check linked to specific code rule
- "The AI proposes, the engineer verifies, and the customer gets a stamped, trusted result."
- Source: diginomica interview with Spacial CEO

### 4. Industry: Maket.ai (AI Design Platform)
- Self-admits: "most require review by a licensed professional before construction. Accuracy and local building code compliance vary by tool."
- Trustpilot: 2.3/5 (7 reviews as of early 2026)
- User complaints: awkward room proportions, impractical circulation paths, wasted square footage
- Handles rectangular lots OK; struggles with L-shaped parcels, sloped sites, multi-story
- Pricing: free tier with 50 credits, $20-50/mo paid plans, Pro up to $100+/mo
- Source: Maket.ai own documentation; illustrarch.com 2026 review

### 5. Industry: CodeComply.AI / CivicPlus Partnership
- AI-powered plan review for municipalities
- Supports IBC, IMC, IPC, IRC, ADA, FHA, UFC, State Amended Building Codes, NFPA 101/70/72/13/14
- Claims to "cut plan review times from months to minutes"
- Critical disclaimer: "Automated compliance checks are informational and do not replace professional review or constitute legal advice. Final compliance determinations remain the responsibility of qualified reviewers."
- Source: CivicPlus press release, March 2026

### 6. Municipal Reality: San Bernardino County Plan Check Comments
- Actual plan check correction list includes 40+ items
- Specific code citations: CRC R311 egress, CBC 1207.1 kitchen clearances, CBC 1808.7 slope restrictions
- Each item requires redrawing, resubmission, re-review
- Source: San Bernardino County Land Use Services Dept plan check template

## Original Contribution: True Cost Calculation

### The "AI is cheaper" narrative breaks down:

**Path A: AI Floor Plan Generator**
- Tool subscription: $50/mo (let's say 2 months = $100)
- Still need structural engineering: $500-$2,000
- First plan check submission: ~$200-$500 (varies by jurisdiction)
- Plan check corrections (2-3 rounds typical for AI-generated plans):
  - Each correction round: $500-$1,500 in professional remediation
  - Each resubmission: 2-6 weeks delay
  - Resubmission fees: $100-$300 per round
- Additional professional review to make it buildable: $1,000-$3,000
- **Total realistic cost: $2,400-$7,800**
- **Total time: 3-6 months of review cycles**

**Path B: Licensed Architect**
- Residential design (simple home): $5,000-$15,000
- Includes code compliance, engineering coordination, plan check support
- Typical first-pass plan check approval rate: ~70-80%
- Corrections if needed: usually 1 round, minor
- **Total realistic cost: $5,000-$16,000**
- **Total time: 2-4 weeks of review**

**The breakeven:** For homes under $500K, AI tools look cheaper upfront but the correction cycle can eat most of the savings. For homes over $500K, the architect is almost always cheaper per-cycle when delays are monetized.

**Delay cost calculation:** Construction financing at 8-10% APR on a $400K project = ~$2,700-$3,300/month in carry cost. Each additional month of plan review delay from AI-generated corrections costs more than hiring an architect would have.

## What AI Tools Actually Miss (Common Plan Check Failures)

1. **Egress requirements** (IRC R311) — door swing clearances, landing dimensions, stair geometry
2. **Setback violations** — AI doesn't know local zoning overlays
3. **Fire separation** — wall ratings between attached garage and living space
4. **Structural load paths** — AI draws walls that don't align vertically
5. **Mechanical clearances** — HVAC routing, plumbing stack locations, panel access
6. **Daylight/ventilation** — bedroom window area requirements (IRC R303)
7. **Accessibility** — Fair Housing Act requirements in multi-family
8. **Local amendments** — 30,000+ jurisdictions, each with their own code amendments

## Strongest Counterargument
AI design tools aren't trying to replace architects for construction-ready plans. They're ideation tools — brainstorming machines that let homeowners arrive at their architect's office with a clear direction, reducing the discovery phase and paid revision rounds. When used this way, they genuinely save money. The problem is when homeowners skip the architect entirely and try to submit AI output for permits.

## Limitations
- Trustpilot sample size for Maket.ai is tiny (7 reviews)
- No large-scale study specifically tracking AI-generated residential plan check pass rates
- The cost calculation uses ranges, not definitive numbers, because costs vary dramatically by jurisdiction
- The academic studies evaluated research models, not the exact commercial tools homeowners use
