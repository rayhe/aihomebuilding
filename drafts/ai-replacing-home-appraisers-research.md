# Research Notes: AI Replacing Home Appraisers

## Journalist: Marcus "Steel" Washington (Workforce & Labor)

## Angle
The residential appraiser workforce is aging out and shrinking while AI automated valuation models (AVMs) and GSE appraisal waivers expand to fill the gap. But AVMs can't walk through your house, can't smell mold, can't see a cracked foundation. What happens when the humans are gone and the algorithm is wrong by 2.9% on your $1.2M home?

## Kill Test
Does this help someone building or buying a home? YES — directly affects every home purchase transaction. Buyers and sellers need to know whether the AI valuation protecting their deal is reliable, and when to demand a human appraisal.

## Primary Sources

### 1. ATTOM AI-Powered AVM (May 5, 2026)
- Source: ATTOM press release + PR Newswire
- 2.9% median absolute percentage error across 98 million US properties
- 80%+ of valuations within 10% of actual sale price
- Built on 30+ years of time-adjusted transaction history
- Replaces traditional comparable-sales dependency
- Delivers confidence scores per valuation
- Enterprise use: mortgage, insurance, investment, proptech
- CEO Rob Barber: "complete re-architecture of the AVM using advanced AI"
- Available via API, bulk delivery, Snowflake, Databricks

### 2. Working RE — 2026 Market Update (March 2026)
- Source: workingre.com, Isaac Peck (Publisher)
- Appraisal volume flat since 2023, no meaningful rebound
- High mortgage rates keeping refinance low
- Appraisal waivers: ~23% of GSE loans (Oct 2025 AEI Housing Center data)
- Peaked at nearly 50% during pandemic (2021)
- Current 23% = elevated vs historical norms but off the peak
- PDCs (Property Data Collections) growing slowly, not dramatically
- Waivers cluster around lower-risk, standardized transactions
- Freddie Mac ACE+ Property Data Report, Fannie Mae Value Acceptance + Property Data expanding waiver capabilities

### 3. AEI Housing Center — GSE Appraisal Waiver Tracking
- Source: American Enterprise Institute
- GSE appraisal waivers now account for 40%+ of all valuations per one measure
- April 2025: waivers at 17% (up 2 pts from March 2021)
- Fannie at 16%, Freddie at 17%
- Risk: automated systems may exacerbate home price inflation by enabling overvaluation during refinances

### 4. FHFA Policy Changes (Oct 2024)
- Source: FHFA, Inman, NAR
- Expanded appraisal waivers from 80% to 90% LTV (non-PDC)
- Expanded to 97% LTV for inspection-based waivers
- Fannie Mae: appraisals "no longer the default option"
- Saved borrowers over $2.5 billion since 2020
- NAR urged pause on expansion citing data security, potential abuse
- Appraisal Foundation warned of risks to consumer safety and market integrity

### 5. Appraiser Workforce Decline
- Source: National Mortgage News, SWBC, HousingWire, NMP
- ~23,000 fewer appraisers since 2007 (National Mortgage News)
- Only 8,000-9,000 trainees nationwide (NMP)
- Aging workforce: median age 50+
- Barriers to entry: 2,000+ supervised hours, state licensing, low trainee pay
- HousingWire: 30-year-old appraisers struggling to find stable employment in current market
- Many appraisers retiring or transitioning to other fields
- Competition intensifying in flat-volume market

### 6. Federal Appraisal Threshold (2026)
- Source: CFPB, Fed, OCC
- Higher-priced mortgage loan appraisal exemption threshold raised from $33,500 to $34,200 (Jan 1, 2026)
- Based on 2.1% CPI-W increase

### 7. Blend Autopilot — AI Mortgage Document Review
- Source: Blend.com
- AI agent automating mortgage document review
- Generates needs lists and updates loan data in real time
- 53% of borrower interactions outside business hours
- Reduces unnecessary follow-ups by 50%

## Original Contribution: The Error Cost Calculation
- 2.9% median error at different price points:
  - $350K home: $10,150 error
  - $500K home: $14,500 error
  - $750K home: $21,750 error
  - $1.2M home: $34,800 error
  - $2M home: $58,000 error
- Human appraisal cost: $500-$700 nationally, $800-$1,200 in high-cost markets
- Break-even: even at the cheapest home, the potential AVM error exceeds the appraisal cost by 14-20x
- BUT: human appraisers also have error — estimated 5-10% miss rate on material defects
- The question isn't "is AI perfect?" but "is it worse than the shrinking, overworked human pool?"

## Strongest Counterargument
AVMs don't replace appraisers — they complement them. The 2.9% median error sounds good, but that's the MEDIAN. The tail — the 20% of valuations NOT within 10% — can be catastrophically wrong. In low-liquidity markets (rural, new construction, unique properties), AVMs have historically performed worst. And unlike a human appraiser, an AVM can't spot the illegal addition, the foundation crack, or the environmental hazard next door. The question is whether the lending industry cares about accuracy or speed.

## Limitations
- ATTOM's 2.9% error figure is self-reported; no independent third-party audit
- AEI waiver data tracks GSE loans only — private/portfolio lending not captured
- Appraiser count numbers are estimates from different sources with different methodologies
- We don't have data on how often AVM errors lead to actual borrower losses
- Regional variation is massive — national averages obscure local realities
