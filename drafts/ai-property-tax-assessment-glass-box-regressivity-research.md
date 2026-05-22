# Research: AI Property Tax Assessment — Glass Box vs Black Box Regressivity

## Journalist: Catherine "Code" Chen (Policy & Regulation)

## Angle
Property tax assessment is America's largest stealth tax system (~$600B+ annually). It's been systematically regressive for decades — poor homeowners pay more per dollar of value, rich homeowners pay less. AI is now being deployed to fix this (C3 AI in Riverside County, Cook County reforms, NYC pilot). But the same opacity that made the old systems unfair could infect the new AI systems unless counties mandate transparency. The "glass box" vs "black box" framing captures the stakes.

## Kill Test
Does this help someone building or buying a home? YES — every homeowner pays property taxes. Understanding that your assessment may be algorithmically biased is critical financial planning, and knowing how to challenge it is directly actionable.

## Primary Sources

### 1. University of Chicago Harris School of Public Policy
- **Finding:** 97.7% of U.S. counties have regressive property tax assessments
- Lower-value homes face up to 50% higher effective tax rates
- 10/90 ratio metric used for measurement
- Regressivity worsened during the Great Recession and COVID-19
- Source: harris.uchicago.edu

### 2. Philadelphia Federal Reserve (2022)
- **Key quote:** "Owners of inexpensive houses pay almost 50% higher effective tax rates than owners of expensive houses"
- Source: philadelphiafed.org

### 3. Cook County, Illinois (America's most studied case)
- ProPublica investigation confirmed deep unfairness under prior assessor
- Kaegi reforms: saved homeowners $1.9 billion (University of Chicago study)
- BUT: commercial appeals shifted $2 billion BACK onto homeowners over 3 years
- 240,000 homeowners saw 25%+ property tax spikes in 2024 (~$500M impact)
- PTAXSIM tool: publicly available R software simulating tax impacts (2006-2020 data)
- Atlanta: 69% of lowest-value properties over-assessed vs 32% of highest-value
- Source: cookcountyassessoril.gov, propublica.org

### 4. C3 AI Municipal Deployments
- **Riverside County, CA:** 5-year contract, 40% speed improvement in appraisal process, collapsed 30 separate models → 4 unified AI models. Tasks that took hours now done in minutes.
- **NYC Finance Department:** Pilot to revalue condo properties using C3 AI. Goal: "more fair and transparent way to assess properties."
- Source: c3.ai, AEI

### 5. Governing.com — "Data Rot" Concept (Peter Gariepy, CPA)
- "Over-smoothing" flaw: legacy CAMA systems pull properties toward average
- $30K home assessed at $60K; higher-value home pulled down
- "Data rot" cycle: wealthy appeal → lower comp → system learns → poor don't appeal → inflated value becomes permanent
- "Glass box" vs "black box" mandate: AI must show its work
- Source: governing.com

### 6. UChicago Booth School — K-Segment Model (arxiv)
- Scalable property valuation model addressing regressivity
- Formally combines accuracy and fairness metrics
- Source: arxiv.org/abs/2312.05996

### 7. Iowa Legislature (2026)
- New law: assessors MUST explain 10%+ valuation spikes over 2 years
- Burden of proof shifts to assessors
- Source: desmoinesregister.com

### 8. Urban Institute
- AVMs disproportionately understate Black neighborhoods' home values
- Lower sales prices in majority-Black areas amplify AVM errors
- Source: urban.org

### 9. National Taxpayers Union
- Over 50% of U.S. properties face assessments exceeding current values
- 40-60% of property tax appeals are successful
- Average successful appeal reduces assessment 10-15%, saving $500+/year
- Source: reported by Medical Economics, Pharmacy Times

## Original Contribution (Required)
Calculate the effective tax rate differential on a realistic home purchase scenario:
- National average property tax rate: ~1.1%
- On a $300,000 home with 50% regressivity penalty → effective rate 1.65% vs 1.1%
- Annual overpayment: ~$1,650/year
- Over 15-year ownership: ~$24,750 in excess taxes
- Compare: that's more than a new roof, more than most home improvement projects

## Strongest Counterargument
Transparent AI could make the problem WORSE: if "glass box" systems show exactly which comparables and factors drove the assessment, sophisticated homeowners with lawyers will game the model even more effectively. The appeals gap could widen rather than narrow. And AI systems trained on historically regressive data could bake existing bias into "objective" models.

## Limitations
- We use national averages; regressivity varies enormously by jurisdiction
- Cook County reforms show improvement is possible, but the $2B clawback via commercial appeals shows the system adapts
- C3 AI deployments are recent; long-term outcomes not yet measured
- "50% higher effective tax rate" is top-decile vs bottom-decile; median disparity is lower

## Structure Proposal
1. Cold open: A specific dollar amount — how much the average over-assessed homeowner overpays over 15 years
2. The regressivity problem — 97.7% of counties, the Philly Fed finding, how "data rot" works
3. The AI fix — C3 AI in Riverside/NYC, Cook County reforms, PTAXSIM tool
4. The transparency question — glass box vs black box, Iowa's new law
5. The counterargument — why transparency might help the wealthy more
6. What you should do — check your assessment, appeal window, actionable steps
