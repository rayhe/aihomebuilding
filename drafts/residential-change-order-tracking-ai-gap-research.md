# Research: AI Change Order Tracking Gap in Residential Construction

## Core Thesis
Variation orders (change orders) are the single largest driver of residential construction cost overruns, causing 23.5% of overruns in single-family home projects. Machine learning models identify change orders as the #1 predictor of cost blowouts (41.16% feature importance). Yet no AI tool exists to catch, document, and price scope changes in real-time for residential builders. Commercial construction has Procore, Autodesk Build, and PlanGrid. Single-family homebuilders still run on verbal agreements, text messages, and memory.

## Primary Sources

### 1. MDPI: Contractor-Based Evaluation of Construction Cost Overrun Factors
- Source: mdpi.com/2075-5309/16/3/607
- Key data: Variation orders cause 23.5% of cost overruns in single-family homes (highest of any project type — condos are 10.9-14.7%, townhouses 13.7%)
- Overall average across all residential types: 15.7%
- Other major factors: Labor shortages (18.3% average, 26.8% for townhouses), Material prices (10.2%), Financial capacity (12.8%)

### 2. Emerald/CatBoost ML Model for Cost Overrun Prediction
- Source: emerald.com, "Predicting cost overrun in construction projects using machine learning algorithms"
- 836 construction projects analyzed with 15 ML algorithms
- CatBoost identified as top-performing model
- Variation orders = highest feature importance at 41.16%
- Excessive quantities = 21.86%
- Budgeted costs = 20.96%
- Implication: if you could track change orders in real-time, you'd address the #1 predictor of cost blowouts

### 3. Projul Scope Creep Case Study (via LinkedIn/GO First)
- Source: linkedin.com, Grant Fuellenbach (GO First), June 2026
- $150,000 kitchen and bath remodel
- Builder ate $5,400 in costs that should have been change orders (18% of projected gross profit)
- Breakdown of undocumented changes:
  - Pantry shelving reconfiguration (verbal on-site request): $900
  - Lighting plan revision after fixtures ordered: $1,200
  - Three rounds of tile layout changes + wasted materials: $1,800
  - Mudroom coat hooks mentioned in passing: $400
  - Painter touch-ups from scope changes: $600
  - Extra island outlet: $500
- All started as verbal requests, no documentation, no signature, no invoice
- Run across 8-10 jobs/year = $25,000-$50,000/year left on the table per builder
- Projul conclusion: "Prevention is about systems, not willpower"

### 4. HKA CRUX Insight 2024 Report — Construction Disputes
- Source: lexology.com
- 662 projects analyzed in Americas (avg CapEx $638M)
- Disputes cost 33.2% of budgeted CapEx on average (global)
- Americas slightly lower: 31.7% of budgeted CapEx
- Schedule exceeded by 16 months (66.5%) on average
- 52.7% of US projects were buildings

### 5. Builder Financial Reality (2026)
- Source: LinkedIn article, Grant Fuellenbach
- Average GC net profit margin 2026: 5-6%
- Material costs up 5-7% on top of post-pandemic pricing
- Labor up 4% year-over-year, field craft averaging $36.54/hour
- Tariffs pushed effective rate on construction goods to 25-30% (40-year high)
- A builder wanting 30% gross margin needs 42.9% markup (not 30%)
- 74% of contractors say AI matters; only 25% have done anything about it

### 6. Nature/Scientific Reports: Residential Cost Overrun Investigation
- Source: nature.com/articles/s41598-025-95984-x
- Design-related inefficiencies, including insufficient specifications and frequent design alterations, contribute significantly (II = 0.52)
- "Early-stage communication among stakeholders is crucial"

## Novel Contribution: The $14 Billion Math

### Calculation
- Average custom/semi-custom home cost: $400,000 (conservative mid-range)
- Average cost overrun rate for residential: ~15% (multiple sources)
- Change order share of overruns: 23.5% (single-family, MDPI study)
- Change-order-driven cost per project: $400,000 × 15% × 23.5% = ~$14,100
- New single-family housing starts 2025: ~1.0 million units/year (Census Bureau)
- Custom/semi-custom fraction: ~30% (300,000 units)
- Total addressable change-order waste: 300,000 × $14,100 = ~$4.2 billion/year

### For remodeling (larger addressable market):
- Annual residential remodeling spending: ~$600 billion (JCHS Harvard)
- Average remodel cost overrun: ~20% (industry surveys, 78% go over budget per article #568)
- Change order share: ~20% (conservative vs. new construction's 23.5%)
- Change-order waste in remodeling: $600B × 20% × 20% = ~$24 billion/year

### Combined: ~$28 billion/year in avoidable cost overruns driven by change orders
- The tool to prevent this doesn't exist for residential

## What Exists (Commercial Only)
- **Procore**: $12.1B company. Change order management module. Enterprise pricing ($500-2,000/month). Designed for commercial GCs running $10M+ projects.
- **Autodesk Build (PlanGrid)**: Change management workflows. $290/user/month (Build tier). Assumes BIM-modeled projects.
- **BuilderTrend/CoConstruct/Buildertrend**: Residential-focused, but change order tracking is manual — you still have to type it in. No ambient capture.
- **Projul**: Project management for remodelers. Has change order forms but no automatic capture.
- **Nothing does ambient scope change detection**: No tool listens to job-site conversations, parses text messages, analyzes photo comparisons, or automatically generates change order documentation from informal communications.

## The AI Gap
An AI change order system for residential would:
1. Monitor job-site communications (texts, emails, photos) for scope change signals
2. Auto-flag requests that differ from the original specification
3. Generate a change order with estimated cost impact
4. Track approval status and budget impact in real-time
5. Create a complete audit trail for dispute prevention

The technology exists (NLP, specification comparison, cost databases). The commercial tools exist. Nobody has packaged it for the $350K custom home or the $150K kitchen remodel.

## Journalist: Frank DeLuca
- Process management, timelines, twenty years of watching projects go sideways
- Measured, world-weary. He's seen every version of the "oh, can you also..." conversation.
- This is his exact beat: the gap between what should be documented and what actually gets documented.

## Strongest Counterargument
Small residential builders work on relationships. Formalizing every verbal request into a change order could damage the contractor-client trust that keeps referrals flowing. A $20,000 bathroom remodel doesn't have the margin for a $500/month software subscription. The AI might create more paperwork than it prevents.

## Limitations
- The MDPI study is Thailand-based, though overrun patterns are broadly similar across markets
- The CatBoost model used Jordanian construction data — transferability to US residential is assumed, not proven
- The $14B calculation uses conservative assumptions but has wide error bars
- No randomized trial has measured the effect of AI change order tracking on residential cost overruns
