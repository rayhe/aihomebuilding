# Research: AI Plan Review Municipal Adoption Gap

## Thesis
AI-powered plan review tools can cut building permit review times from weeks to hours, but fewer than a dozen US municipalities have adopted them. The carry cost of manual review queues costs the residential construction industry hundreds of millions annually — and homebuyers pay for every extra week.

## Journalist
Catherine Chen — policy, regulation, building codes

## Key Data Points

### Permit Review Timelines (Manual)
- Redwood City, CA: New buildings 4-8 weeks, additions 3-4 weeks, residential structural 3-4 weeks (city website, current)
- Boise, ID: Single Family Level 1 = 11 days first review, Level 2 = 13 days (FY2025 Q2 data, cityofboise.org)
- Charlotte County, FL: New SFR = 6 business days / 2 weeks, remodels = 7 days (week of Jul 13, 2026)
- Fort Worth, TX: Residential 7 business days (city website)

### AI Plan Review Tools (Supply Side)
1. **Blitz AI** (Tampa, FL) — trained on Florida Building Code + local ordinances, reviews in "minutes," generates redlined compliance reports. Claims "85% fewer resubmittals." Partnerships: CityView (permitting platform). Deployments: Naples FL (first in Florida, Apr 2026), Pueblo County CO (Jan 2026). CEO: Arjun Choudhary.
2. **AutoReview.AI** (Gainesville, FL) — UF spinoff, patent-pending, trained on full Florida Building Code (800+ pages). Cuts 3-week reviews to 24-48 hours. Deployments: Gainesville FL, Lebanon NH. Co-founded by Dr. Nawari Nawari (UF CDCP) and Rob Christy.
3. **PlanCheckPro.AI** (Delray Beach, FL) — founded 2023, 2-10 employees. Built for FBC, NEC, ADA. AI-generated comments linked to code sections.

### Cost of Delays
- NAHB 2021: Regulatory costs = 24% of final new home price (~$93,870 in 2021)
- NAHB 2026: Regulatory costs now ~$132,000 per new home (Realtor.com Jun 2026)
- 94% of developers face permit-related delays (NAHB)
- Construction material costs up 46.1% since Feb 2020 vs 24.7% general inflation
- Housing shortage: 1.2M homes (NAHB) / 4.03M homes (Realtor.com 2026)
- Single-family permits: 871,000 annualized rate (Jun 2026, Reuters/Census)
- Labor shortages prevented ~19,000 homes from being built in 2024, extended timelines by ~2 months on average

### Carry Cost Calculation (ORIGINAL)
- Average construction loan rate 2026: ~8.5% (elevated rate environment)
- If builder carries $150K lot cost during 3-week plan review delay at 8.5%: $150,000 × 0.085 / 52 × 3 = ~$736 per project
- But: many projects have pre-development costs beyond lot — engineering, survey, architecture fees already committed = ~$250K exposed capital
- $250,000 × 0.085 / 52 × 3 weeks = ~$1,226 per project in carry costs during just the plan review wait
- Scale to industry: 871,000 single-family permits/year × average 2-3 weeks excess review time × ~$400-$1,200 per project
- Conservative estimate: ~$350M-$1B in annual unnecessary carry costs industry-wide
- If AI cut review to 2 days instead of 3 weeks, the savings per project: ~$1,000

### Academic Research
- LLM code compliance study (BIM, IRC): ChatGPT 4.0 and Claude Sonnet 3.5 most effective; Grok 76.7% success rate with no retries. Meta Llama 3.1-405B and Microsoft Copilot failed to generate working scripts.
- UF-Gainesville partnership: 10+ years of AI/NLP research underlying AutoReview.AI
- Singapore (2000): first commercial BIM-integrated plan audit system
- Floor plan compliance framework (arxiv, Jul 2026): LLM converts textual building codes into executable rules

### The Gap
- ~20,000+ municipalities in the US with building authority
- Fewer than 10 have adopted AI plan review
- All early adopters are in Florida (except Lebanon NH and Pueblo County CO)
- Florida has unique advantage: single statewide building code (FBC) — most states have local amendments
- The code fragmentation problem: AI must be trained on each jurisdiction's specific amendments
- "Human in the loop" requirement: AI does first pass, human reviews AI output
- No known AI plan review deployment in California, Texas, New York, or any top-10 metro

### 21st Century ROAD to Housing Act (Jul 2026)
- Signed into law Jul 11, 2026
- Includes provisions for zoning reform, regulatory streamlining
- But: "Construction timelines, permitting changes, and production ramp-ups mean the law's benefits will take years to reach buyers"
- Does NOT mention AI plan review or automation specifically

### Strongest Counterargument
- Building codes are life-safety documents. A missed egress requirement or structural deficiency can kill people. The 76.7% accuracy rate of the best LLM (Grok) means nearly 1 in 4 code checks may be wrong. Human reviewers aren't perfect either, but they carry professional liability. Who's liable when AI misses a fire separation requirement?
- Code fragmentation: Florida has a unified code. California has CBC + local amendments in every jurisdiction. AI plan review at scale requires training on thousands of local code variants.

### Limitations
- No independent audit of Blitz AI's "85% fewer resubmittals" claim
- No published data on AutoReview.AI accuracy rates in live deployments
- LLM accuracy data comes from academic studies with structured BIM models, not the messy PDFs that building departments actually receive
- Construction loan carry cost calculation uses average rates; actual rates vary widely by builder size and creditworthiness
