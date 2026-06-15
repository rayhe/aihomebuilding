# Research: AI Home Appraisals Systematically Undervalue Green and High-Performance Homes

## Thesis
AI-powered automated valuation models (AVMs) are increasingly replacing human appraisers in mortgage underwriting. But these models are trained on decades of historical transaction data that never captured green building premiums — creating a structural blind spot that costs builders and homeowners tens of thousands of dollars per transaction.

## Journalist
Catherine "Code" Chen — policy, regulation, building codes, legal implications

## Kill Test
Does this help someone building or buying a home? **YES.** If you're a builder investing in high-performance features (geothermal, solar, ICF, spray foam, triple-pane windows), the appraisal is the choke point where that investment either gets recognized or gets zeroed out. If you're a buyer, the appraisal determines how much the lender will give you.

## Primary Sources

### 1. Federal AVM Rule (July 17, 2024)
- **Source:** Federal Reserve Board, CFPB, FDIC, FHFA, NCUA, OCC — joint final rule
- Six agencies requiring quality control standards for AVMs used by mortgage originators and secondary market issuers
- Five quality control factors: (1) high confidence in estimates, (2) protect against data manipulation, (3) avoid conflicts of interest, (4) random sample testing, (5) comply with nondiscrimination laws
- Effective Q4 2025 (first calendar quarter following 12 months after Federal Register publication)
- The nondiscrimination factor is an *independent* requirement — meaning institutions must build specific AVM policies to comply with fair lending laws
- Dodd-Frank mandate, Section 1125

### 2. ATTOM AI-Powered AVM Launch (May 5, 2026)
- **Source:** ATTOM press release via PR Newswire / Morningstar
- Next-generation AVM: "ground-up, AI-first rebuild" replacing traditional comparable-sales-based models
- Uses 30+ years of time-adjusted transaction history across 98 million US properties
- Median absolute percentage error: 2.9%; >80% of valuations within 10% of actual sale price
- Each valuation includes a confidence score
- Built for enterprise use: mortgage, insurance, investment, proptech
- CEO Rob Barber: "We've moved beyond static, comp-based approaches"
- VP Data Science Aaron Wagner: "We model how each neighborhood has evolved over the past 30 years"

### 3. Green Appraisal Gap Data
- **Source:** Green Builder Media article, Sandra Adomatis (leading green appraisal expert)
- Only <5% of ~43,000 US residential licensed appraisers have meaningful education in sustainable/energy-efficient features
- MLS data gap: In 30 recent comparable sales, ZERO had green/energy-efficient identifiers — not because homes aren't efficient, but because data wasn't entered
- "The current system structurally suppresses value" — if market can't see it, can't price it; if appraisers can't find it, can't adjust for it
- Concept of "invisible value" — real value made invisible by systemic data gaps

### 4. NAHB Strategies for Green Appraisals
- **Source:** NAHB.org, Hibbs Homes case study, NAHB BizTools video
- Matt Belcher (Hibbs Homes, Wildwood MO) — requires qualified appraisers in sales contracts
- Contract clause requires 14+ hours of green valuation education from appraiser
- Appraisal Institute's Residential Green and Energy Efficient Addendum — worksheet for cataloguing performance certifications, ratings, features
- Bill Garber (Appraisal Institute): "Appraisers can't support what they can't document"

### 5. GREEN Appraisals Act (May 2024)
- **Source:** Rep. Sean Casten (IL-06) and Sen. Michael Bennet (CO)
- Would require energy-efficient and clean energy features to be considered in residential appraisals
- Appraisals would need to consider: energy efficiency characteristics, renewable energy features, estimated energy savings, energy consumption vs. comparable properties
- Requires additional appraiser education/training
- Status: introduced, not yet enacted

### 6. ProBuilder / IBS 2025 — Resilience Features in Appraisals
- **Source:** ProBuilder.com, International Builders' Show coverage
- NGBS Green certification now includes "Green+" resilience add-ons: wildfire, wind, water, earth-movement
- Resilience features (sealed roof decks, ember-resistant vents) are invisible to appraisers during typical inspection
- Cindy Wasser (Home Innovation Research Labs) — verification programs exist but penetration is low

## Original Contribution (Novel Analysis)

### The Algorithm's Training Data Problem
ATTOM's AVM uses "30+ years of time-adjusted transaction history." But for most of those 30 years, green building features were either:
- Not built at all (geothermal was rare pre-2010)
- Not tracked in any database (no MLS green fields)
- Not valued by human appraisers who didn't understand them

So the AI learns from data that structurally excludes green premiums. The result: the more sophisticated the AI, the more confidently it replicates the historical bias of ignoring green value.

### Dollar Impact Calculation
- Average cost of green/high-performance features in new construction: $15,000-$65,000 (depending on level — HERS-rated insulation to full net-zero)
- If AVM assigns zero value to those features, the builder faces an appraisal gap on every closing
- On a $600,000 custom home with $45,000 in green features, a 2.9% AVM error sounds impressive — but 2.9% of $600K is $17,400. The green features alone are worth 3x that error margin.
- The AVM might be "accurate" in the sense that comparable sales didn't capture green premiums either — making the error self-reinforcing

### Nondiscrimination Paradox
The federal AVM rule requires compliance with nondiscrimination laws. But the green appraisal gap could have disparate impact dimensions:
- If green-built homes are concentrated in specific neighborhoods or income brackets
- If the AVM's training data reflects decades of discriminatory appraisal practices that also didn't value improvements in minority neighborhoods
- The nondiscrimination requirement could force AVM providers to address the green gap — but only if regulators test for it

## Strongest Counterargument
AVM providers would argue that their models reflect *market* value — what buyers actually pay — not replacement cost or feature value. If the market doesn't pay a premium for green features (because buyers can't see them in listings), the AVM is correctly reflecting market reality. The fix isn't in the algorithm; it's in MLS data standards and buyer education. A "correct" AVM that assigns value to features the market doesn't price would be *less* accurate, not more.

## Limitations
- We don't have access to ATTOM's training data or methodology beyond their press release
- The <5% appraiser education figure is from one expert (Adomatis) — no government source
- The GREEN Appraisals Act hasn't been enacted, so we can't assess its impact
- MLS green data capture rates vary wildly by market
- The nondiscrimination intersection is our analysis, not established regulatory position
