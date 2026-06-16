# Research: AI Roof Scoring from Satellite/Aerial Imagery & Insurance Cancellation

## Journalist: Jake "Jackhammer" Kowalski
## Beat: Construction Technology
## Angle: The technology behind AI roof inspections from space — what the algorithms see, how accurate they are, and what builders/homeowners should do about it

## Kill Test
Does this help someone building or buying a home? **YES.** 38% of US homes have moderate-to-poor roof ratings from AI aerial analysis. Homeowners are losing insurance coverage based on these scores. Builders need to understand how roofing decisions at construction time affect a home's AI insurability score for decades.

---

## PRIMARY SOURCES

### 1. Verisk 2025 Roof Condition Report (Industry Data)
- **38% of US residential homes show moderate-to-poor condition** based on aerial imagery analysis (as of 2025)
- Moderate-to-poor roofs experience **~60% higher loss costs** than those rated good or excellent
- Premium differential between roofs <5 years old and 11-15 years old: expanded from **$49 (2022) to $155 (2025)**
- Average deductibles rose **22% in 2025**, following 15% increase in 2024
- Roof claims severity hit record highs even as storm activity fell
- Source: insurancebusinessmag.com, Verisk data, June 2026

### 2. CAPE Analytics (AI Vendor — Primary Technology Source)
- **CAPE Roof Age: 95% accuracy** determining roof replacement year from historical aerial imagery
- **Poor/severe condition roofs: 2.5x wind/hail claims frequency** vs excellent roofs
- **9-year-old roofs: 2x more likely to be extremely hail-vulnerable** than new roofs
- **Homes with large tree overhang: 90% higher wind-related losses**
- **40% of all insurance claims are roof-related**
- CAPE attributes approved for DOI rate filings in **15 states** (AZ, CO, IA, KY, IL, IN, MI, MS, NC, OH, PA, SD, TN, VA, WI)
- How it works: Historical high-resolution aerial imagery + AI change detection → identifies when roof was last replaced
- Provides: roof age in years, year of last replacement, confidence score, related imagery
- Source: capeanalytics.com, multiple pages

### 3. Nearmap/Betterview (AI Vendor — Primary Technology Source)
- **Roof Age Gen2: claims 95% accuracy** for exact roof replacement year
- "Near-100% U.S. parcels pre-processed" for sub-2-second delivery
- Multiple evidence types with trust scores for transparent, defensible decisions
- Products: roof materials, roof shape, roof condition scoring
- Available via Betterview platform, API, Portfolio Intelligence
- Aerial imagery resolution: high enough to detect individual shingles, unlike satellite
- Source: nearmap.com

### 4. California AB 75 — Aerial Imagery Insurance Legislation (2025)
- Authored by Assemblymember Lisa Calderon
- Supported by Insurance Commissioner Ricardo Lara
- Requirements:
  - 30-day advance notice before taking or obtaining aerial images
  - Homeowner right to request and obtain copies of any aerial images
  - Can't use images older than 45 days unless problem is persistent AND verified by in-person inspection
  - Must send images + explanation if canceling/non-renewing based on aerial photos
  - Homeowner gets until effective policy change date to remedy the problem
- CA DOI has "investigated numerous complaints where flawed aerial imagery led to wrongful cancellations"
- "In several cases, insurers used imprecise drone or satellite photos... resulting in policies being incorrectly dropped due to erroneous data"
- Source: insurance.ca.gov press release (March 28, 2025), legiscan.com AB 75 text, insurify.com

### 5. NPR Investigation (Journalism — Human Impact)
- Since 2023, **at least a dozen homeowners asked Texas DOI** to investigate aerial photo use
- Alaina Callahan (Houston): insurer demanded new roof despite roof being only 5 years old and in good condition
- One homeowner lost coverage because **insurer looked at the wrong image**
- **Five insurers in Texas confirmed using third-party aerial photos** and AI to analyze them
- Homeowners **cannot see the photos** used to make coverage decisions
- Quote: "I had no recourse as a homeowner. None whatsoever."
- Source: NPR, syndicated via nprillinois.org, wamc.org

### 6. United Policyholders / Consumer Watchdog (Advocacy)
- Amy Bach (United Policyholders) drafted state legislative proposal a year ago — **no state legislators have taken it up**
- Proposal recommends: share photos with policyholders, detail precise liability, create challenge pathway
- Carmen Balber (Consumer Watchdog): "It's really a Wild West when it comes to this aerial imagery"
- "The technology that companies are using is all over the map and frequently inaccurate"
- Source: uphelp.org "Roof wars" article

### 7. State Farm Drone Incident (Case Study)
- State Farm drone inspected homeowner's roof in Santa Ana, CA without notice
- Resulted in **$20,000 repair demand** after surprise inspection
- Source: slashgear.com (March 2026)

### 8. Wall Street Journal (Quoted in CA DOI press release)
- Insurers are photographing **"nearly every building in the country"** — often without owner's knowledge
- Using AI-powered data mapping, satellite imagery, and predictive models

### 9. State Regulatory Landscape
- **Connecticut and Massachusetts** DOI issued guidance/regulations on aerial imagery use (March 2025)
- **Pennsylvania** issued bulletin regulating aerial images (2024)
- Connecticut: aerial images showing discoloration/streaking/cosmetic issues ALONE cannot support underwriting action
- Massachusetts: if insurer non-renews, must provide 45-day written notice with specific reasons
- Source: portal.ct.gov, mass.gov

### 10. NerdWallet Analysis
- Quote from Bob Passmore (VP, APCIA): "Looking at aerial photos is just another method of doing something insurers have always been doing"
- Doug Heller (Consumer Federation of America): "Using images gathered without consumer awareness, or let alone consent, is really problematic"
- Source: nerdwallet.com (May 2024)

---

## NOVEL ANALYSIS OPPORTUNITY

**The 5% gap at scale:** Both CAPE and Nearmap claim 95% accuracy. Sounds impressive. But there are ~140 million housing units in the US. 5% of 140 million = **7 million homes potentially misclassified**. At an average policy cost of ~$2,500/year, the financial exposure from the 5% error band alone is enormous. Nobody has done this math publicly.

**Builder angle:** What roofing materials and installation practices score BEST with AI aerial scoring? If you're building new, what should you specify to ensure your buyer doesn't get dropped by their insurer in year 9? This is the actionable insight for the construction audience.

**The temporal problem:** Satellite imagery can be 6-18 months old. A homeowner who replaced their roof 3 months ago might still have an old image in the system. AB 75's 45-day freshness requirement is an attempt to address this, but enforcement is unclear.

---

## STRONGEST COUNTERARGUMENT
The insurance industry argument is legitimate: roof condition IS the single most predictive variable for property claims. Human inspectors can't scale (there aren't enough of them), they're hazardous (climbing roofs), and they're inconsistent (two inspectors can disagree on the same roof). AI-powered aerial scoring is genuinely more consistent, cheaper, and covers more properties than any human inspection regime ever could. The 60% loss cost differential between good and poor roofs isn't made up — it's based on billions of dollars of claims data. Insurers who DON'T price for roof condition are subsidizing bad risks with good ones. The problem isn't that insurers use AI — it's that homeowners can't see or challenge the score.

---

## HEADLINE OPTIONS
1. "38% of American Roofs Failed an AI Inspection. Most Homeowners Don't Know It Happened."
2. "A Satellite Scored Your Roof. Your Insurer Dropped You. You've Never Seen the Photo."
3. "Your Insurer's Algorithm Rated 140 Million Roofs From Space. 7 Million Scores Might Be Wrong."

