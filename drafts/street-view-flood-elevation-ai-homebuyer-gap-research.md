# Research: Street View Flood Elevation AI — Homebuyer Gap

## Core Thesis
A surveyor charges $600 to measure how high your front door sits above grade — the single most important variable in determining whether floodwater gets inside your home. Researchers at Texas A&M just did it for 12,241 homes using Google Street View photos that already existed. Nobody sells this capability to homebuyers.

## Primary Sources

### 1. Li et al. (2026) — Texas A&M / Elev-Vision Study
- **Paper:** "Property-Level Flood Risk Assessment Using AI-Enabled Street-View Lowest Floor Elevation Extraction and ML Imputation Across Texas"
- **Authors:** Xiangpeng Li, Yu-Hsuan Ho, Sam D Brody, Ali Mostafavi
- **Published:** April 1, 2026 (arXiv:2604.01153)
- **Method:** Three-stage pipeline:
  1. Extract lowest floor elevation (LFE) and height difference between street grade and lowest floor (HDSL) from Google Street View using Elev-Vision framework
  2. Impute missing values with Random Forest + Gradient Boosting (16 terrain, hydrologic, geographic features)
  3. Integrate with Fathom 1-in-100 year inundation surfaces + USACE depth-damage functions
- **Scale:** 12,241 residential structures across 18 areas of interest in Texas
- **Results:**
  - 73.4% of parcels had street view imagery available
  - 49.0% direct LFE/HDSL extraction success (5,992 structures)
  - ML imputation retained for 13 AOIs (R² from 0.159 to 0.974)
  - 5 AOIs excluded where performance was insufficient
- **Output:** Property-specific interior flood depth AND expected dollar loss
- **Significance:** Advances LFE estimation from pilot-scale to regional end-to-end workflow

### 2. Neptune Flood Research Group (December 2025)
- 84% of FEMA flood maps are outdated
- 6% date back to 1970s-1980s
- 40% of continental US remains unmapped
- 30% of NFIP claims in past decade came from OUTSIDE FEMA high-risk zones
- FEMA identifies 7.9M high-risk properties; First Street Foundation finds 17.7M
- Nearly 10 million high-risk properties fall outside official maps
- 13 million high-risk properties have no or low flood insurance
- Some inland/fast-growing regions have 5-8x more high-risk properties than FEMA identifies

### 3. First Street Foundation
- Nonprofit that builds property-level flood risk models
- Uses sea-level rise, coastal storm surge, peak precipitation, river flooding
- Found ~8 million more at-risk properties than FEMA
- Offers free lookup at floodfactor.com
- But focuses on hazard probability, not interior depth or dollar loss
- FEMA Risk Rating 2.0 now uses some third-party data (including First Street), but still doesn't do street-view-based elevation analysis

### 4. Elevation Certificate Economics
- Average cost: $400-$750 (NerdWallet/Angi data) or ~$600 (HomeAdvisor)
- Range: $170-$2,000 depending on location, property size, terrain
- Requires licensed land surveyor, professional engineer, or certified architect
- Typically takes ~5 business days
- FEMA Risk Rating 2.0 (Oct 2021) no longer REQUIRES ECs for NFIP policies
- But ECs can still lower premiums if they show more favorable measurements
- Very few homebuyers get one voluntarily — it's friction and cost at closing

### 5. FEMA Flood Map Context
- Maps focus on river channels and coastal flooding
- Largely exclude flash flood risk from intense rain
- Don't account for climate change projections
- Harris County, TX: 47% of FEMA flood claims across 3 decades were OUTSIDE 100-year flood zones
- "Snapshots in time" — FEMA's own language
- Flood disclosure varies by state (29 states require some form of disclosure, but many only require disclosing what the seller knows, not independent assessment)

## The Gap
The technology exists to assess property-level flood risk from street-view imagery at essentially zero marginal cost per property. The data this produces — how high is the lowest floor relative to the predicted flood elevation — is the SAME data a $600 surveyor visit generates, and it's the single most important factor in flood insurance pricing and actual flood damage.

But:
- No commercial product packages this for homebuyers
- FEMA still uses zone-level maps (84% outdated)
- Real estate disclosures don't require property-level analysis
- Insurers benefit from information asymmetry
- The Texas study is published research, not a product

## Journalist
Catherine Chen — regulatory/legal angle. FEMA mapping policy, flood disclosure law gaps, the information asymmetry between what technology can deliver and what homebuyers receive.

## Headline
"A Surveyor Charges $600 to Measure How High Your Front Door Sits. An Algorithm Did It for 12,241 Homes From Photos Google Already Had."
