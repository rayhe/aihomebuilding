# Research: The Algorithmic Appraisal Convergence

## Angle
Three forces are converging to eliminate the human home appraiser: (1) the UAD 3.6 mandate turning appraisals into machine-readable data, (2) Fannie/Freddie expanding appraisal waivers to lower down payments, and (3) the appraiser workforce collapsing with no replacements. Most homebuyers won't know their home's value was determined by an algorithm until something goes wrong.

## Journalist
Catherine "Code" Chen — Policy & Regulation

## Kill Test
✅ Directly affects anyone buying, selling, or refinancing a home. The appraisal determines whether your mortgage gets funded and how much the bank will lend. If an AVM gets it wrong, your deal dies or you overpay.

## Primary Sources

### 1. UAD 3.6 Mandate (Fannie Mae / Freddie Mac)
- **Broad production:** January 26, 2026 (live now)
- **Mandatory:** November 2, 2026 — all new appraisal reports must use UAD 3.6 or UCDP returns "Fatal" / "Not Successful"
- **Legacy retirement:** May 3, 2027 — no more UAD 2.6 even for revisions
- Replaces forms 70, 1004, 1073, 2055, 465, 442 and all variants
- New dynamic URAR framework adapts by property type
- Aligns with ANSI Z765-2021 for measurement, expanded ADU/solar/disaster mitigation reporting
- FHA transition in progress — beta testing underway (FHA INFO 2025-42, updated June 25, 2026)
- Source: singlefamily.fanniemae.com, sf.freddiemac.com, newslink.mba.org

### 2. Appraisal Waiver Expansion Data (AEI, March 2026)
- **Freddie Mac purchase waivers:** 19.7% of purchases (9,237 of 46,905)
- **Freddie Mac no-cash-out refi waivers:** 51.7%
- **Freddie Mac total waivers:** 31.7%
- **Fannie Mae purchase waivers:** 12.1% of purchases (5,972 of 49,481)
- **Fannie Mae no-cash-out refi waivers:** 48.1%
- **Fannie Mae total waivers:** 25.0%
- Freddie Mac expanding ACE (Automated Collateral Evaluation) from 80% to 90% LTV
- With PDR (Property Data Report), LTV can go to program limits — as low as 3% down for Home Possible
- $4 billion+ already saved in appraisal costs
- Source: AEI Housing Center (aei.org), Inman

### 3. Fannie Mae AI Governance (LL 2026-04)
- Issued April 2026, effective **August 6, 2026**
- Applies to ANY AI/ML system used in origination or servicing
- Covers vendor-provided systems too, not just internally developed
- Freddie Mac acted earlier: Guide Bulletin 2025-16, effective March 3, 2026
- Lenders selling to both must meet the more stringent requirements of each
- Source: Harris Beach Murtha analysis, harrisbeachmurtha.com

### 4. CFPB Proposed Rule on AVM Fairness
- Joint with Fed, FDIC, FHFA, NCUA, OCC
- Would ensure automated home valuations are "fair and nondiscriminatory"
- Recognition that AVMs can bake in historical bias
- Interagency Task Force on Property Appraisal and Valuation Equity (PAVE)
- Source: consumerfinance.gov

### 5. Appraiser Workforce Collapse
- Peak: ~100,000+ credentials in 2007
- Current: ~75,000-80,000 individual appraisers (credentials overcount due to multi-state licenses)
- **28% decline since 2007** (Appraisal Institute)
- **20% decline in unique certified generals over 5 years** (ABA Banking Journal, citing ASC/FFIEC data, June 2026)
- **62% of appraisers are age 51+**; only 13% are 35 or younger
- 3% annual decline rate expected to continue
- Trainee pipeline collapsing: Massachusetts saw 1,178 fewer trainees in recent data
- Average appraiser fee: ~$400-500 minus AMC cut
- Barrier to entry: 75+ hours education, 1,000+ hours supervised experience, years of training
- Source: CSBS, ABA Banking Journal, Appraisal Institute, HousingWire (Jim Park interview, Jan 2026)

### 6. AVM Accuracy Data
- **Zillow Zestimate:** <2% median error rate (after June 2019 photo analysis update)
- **Academic AVM (Oslo):** 5.4% median absolute percentage error, 96% within 20% of actual price
- **Academic AVM with CNN image analysis:** 5.6% median error (better than Zillow pre-2019)
- Human appraisers vs AVMs: comparable in normal markets; humans better in "stable phases" but machines better in volatile ones
- Current Zillow incorporates visual AI analyzing property photos
- ATTOM AVM: combines assessor records, MLS, 30 years sales history, census-block-level indices

### 7. Racial Bias in Appraisals
- **Brookings:** 10% of homes in majority-Black neighborhoods at risk of under-appraisal; median appraisal 15% lower in majority-Black vs <1% Black neighborhoods
- **AEI study:** Using accuracy-validated AVM as neutral benchmark, found AVM is "race-neutral and unbiased" while human appraisals show measurable gaps
- **Lehigh/Bowen study (SSRN 2024):** LLMs show racial bias in mortgage underwriting — Black applicants need ~120 credit score points higher for same approval rate from GPT-4 Turbo
- But: simple instruction to "ignore race" virtually eliminated LLM bias
- **Journal of Real Estate Finance & Economics:** Same-property study found NO statistically significant difference in appraisals by race when controlling for property, geography, and time — contradicting narrative

### 8. The Academic Framework
- arxiv paper (Teikari et al., Aug 2025): "The Architecture of Trust" — three-layer framework for AI-augmented valuation
- UAD 3.6 → structured data → better AVM training data → more accurate AVMs → more waivers → fewer humans needed
- "Profound implications for professional practice, market efficiency, and systemic risk"

## Original Contribution
Calculate the convergence timeline: at current appraiser attrition rates (3%/yr, accelerating) and waiver expansion rates, when does the human appraiser become effectively optional for the majority of transactions? Cross-reference with UAD 3.6 data standardization creating better AVM training data. Nobody has done this convergence math.

## Strongest Counterargument
AVMs can't inspect — they don't know your foundation has a crack, your HVAC is 20 years old, or that the previous owner converted the garage illegally. An algorithm processing comparable sales data cannot detect deferred maintenance, unpermitted work, or environmental hazards. The 2008 financial crisis was partly caused by inadequate property valuation. Removing the one independent human who physically enters the home and renders a professional opinion could create systemic risk in a $46 trillion residential real estate market.
