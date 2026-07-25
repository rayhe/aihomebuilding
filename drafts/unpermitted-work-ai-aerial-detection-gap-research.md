# Research: Unpermitted Construction AI Detection Gap

## Core Angle
Counties have permit databases. Google/EagleView/Nearmap have decades of aerial imagery showing every roof change. AI can cross-reference building footprint changes against permit records with 75-88% accuracy. Nobody sells this to homebuyers. The tool that would catch an unpermitted addition before closing doesn't exist as a consumer product.

## Primary Sources

### 1. PASS AI® / City Detect — Municipal AI Code Enforcement
- Source: PublicCEO, June 2026 (Cathedral City, CA implementation)
- Vehicle-mounted cameras + computer vision
- Oct 2025–Jan 2026: 186,297 images captured across 5 districts
- 12,489 parcels analyzed, 18,612 roadside detections, 90+ miles of roadway
- 623 individual parcel violations across 36 code violation types
- Only 4% of parcels had any code issue; severe blight <0.3%
- 30-40% of properties achieved voluntary compliance before follow-up
- New job classification created: "Code Compliance Specialist" (AI system management)

### 2. Academic: CNN Building Change Detection
- Serbia study (MDPI Remote Sensing, 2021): U-Net + OBIA classification on VHR satellite imagery
  - 84-88% object identification accuracy, kappa 89-96%
  - Serbia has 2+ million illegal buildings (official data)
  - Proposed method: detect footprint changes, compare against cadastral database
- Egypt study (MDPI Applied Sciences, 2025): ResUNet++ for unauthorized construction on government lands
  - Detects building expansions, new constructions, encroachments
  - High precision and recall on LEVIR-CD and S2Looking benchmarks
- ISPRS 2015 (Tehran): K-means change detection on panchromatic satellite imagery
  - 343 buildings analyzed, 19 under construction found, 3 identified as unlicensed
  - 75% accuracy for illegal building detection

### 3. Legal Framework — Unpermitted Work Consequences
- California Civil Code § 1102 et seq.: sellers must disclose known material defects including unpermitted work through Transfer Disclosure Statement
- Insurance companies may deny claims on unpermitted spaces (electrical fires, structural failures)
- Cities can fine owners, force tear-down of unpermitted improvements
- Appraisers cannot include unpermitted square footage in valuation
- Lenders may refuse mortgages on properties with unresolved permit issues
- Source: Redfin blog (2026), Nolo.com, stevelopezlaw.com

### 4. AI Permit Pre-Check Tools (Adjacent but Different)
- Archistar eCheck: AI parses architectural drawings against zoning/building codes — Austin adopted
- CivCheck: Honolulu, Denver — catches missing docs, incomplete submissions upfront
- Deloitte Smart Permitting Agent: AWS Marketplace, reads CAD drawings, detects violations
- These tools check NEW permits — nobody checks EXISTING homes for MISSING permits

### 5. Existing Aerial Imagery Infrastructure
- Google Earth: historical satellite imagery going back to 1984 (Landsat) and high-res from ~2004
- EagleView: oblique aerial imagery for 95% of US properties, used by insurers and assessors
- Nearmap: high-frequency aerial surveys (multiple times per year in major metros)
- County assessors already use aerial imagery for property tax assessment changes
- The data exists. The cross-reference doesn't.

## Original Contribution / Novel Calculation
- The building blocks: (1) aerial imagery time series showing physical changes, (2) permit databases listing approved work, (3) AI change detection at 75-88% accuracy
- The gap: nobody has productized the cross-reference for homebuyers
- Cost to check permits manually: varies, but typically $25-100 per property, in person or online, limited to one jurisdiction
- Cost of missing unpermitted work: retroactive permitting $5,000-$15,000; insurance claim denial $50K-$200K+; forced tear-down $20K+
- An AI tool could: compare Google Earth imagery from purchase year minus 20 years, detect all building footprint changes, cross-reference against county permit database, flag discrepancies — all before closing
- EagleView already sells to insurance companies (property condition assessment); nobody sells the same product to homebuyers

## Strongest Counterargument
- Not all unpermitted work is visible from above (interior renovations, electrical, plumbing)
- Satellite resolution limitations (10m Sentinel vs 30cm commercial) — need high-res for residential
- Permit database fragmentation: 20,100+ separate permit-issuing jurisdictions (Census Bureau), many not digitized
- Privacy concerns: automated surveillance of property modifications

## Limitations
- No public data on what percentage of existing US homes have unpermitted work (industry estimates range from 10% to 50% depending on market)
- Detection accuracy varies by resolution and building density
- Cross-reference requires both digital permit records AND temporal aerial imagery — many rural counties lack one or both
- Interior modifications (the most dangerous ones — electrical, plumbing) are invisible to aerial detection

## Kill Test
Would this help someone building or buying a home? YES — homebuyers could get an automated report flagging likely unpermitted modifications before closing, similar to how Carfax works for used cars. The tool would save thousands in avoided surprises and potentially prevent insurance claim denials.

## Journalist
Jake "Jackhammer" Kowalski — construction technology beat. The tech exists, nobody's built the product. Punchy, specs-heavy, bar conversation style.
