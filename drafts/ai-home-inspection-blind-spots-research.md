# Research: AI Home Inspection Blind Spots

## Thesis
AI home inspection tools are automating the paperwork — making report-writing faster — while leaving the fundamental limitation of home inspections completely untouched: they're visual-only. The ASHI/InterNACHI Standards of Practice explicitly prohibit inspectors from opening walls, accessing unsafe areas, or doing anything invasive. AI tools that process photos and voice notes can only work with what the inspector already sees. The real hidden defects — the ones that cost buyers $10,000+ — stay hidden.

## Key Data Points

### The Home Inspection Industry
- $4.9B US building inspectors market in 2026 (IBISWorld, NAICS 54135)
- Building inspection services globally: $10.47B (2026, Mordor Intelligence), 7.24% CAGR through 2031
- Residential accounted for 51.92% of building inspection services market in 2025
- Average home inspection: 2–2.5 hours (condos: 1–1.5 hours)
- Inspector does 2 walkthroughs with reports per day (Homes.com/Binsr)

### What Inspectors Actually Find (Repair Pricer, 50,000 reports)
- 55% of homes: doors needing adjustment (possible foundation indicator)
- 54%: missing exterior caulking/sealant → water damage risk
- 48%: missing GFCI protection → electrocution risk
- Most expensive defects in 9-20% of homes: $1,000–$10,000 repair range
- More than 1M repairs totaled $11,000+ in costs

### The Fundamental Limitation: Visual Only
- ASHI SOP: inspectors "inspect readily accessible, visually observable, installed systems and components"
- InterNACHI SOP Section III: inspector is NOT required to "dismantle, open or uncover any system or component"
- Cannot inspect: behind walls, under floors, underground pipes/tanks, unsafe areas
- Cannot: offer engineering services, determine age of construction, determine insurability
- 80% of homeowner claims are water-related, and most active moisture conditions would be missed without thermal cameras (Alex Harbur, People's Trust Insurance)
- Concealed defects, latent defects, consequential damages explicitly excluded (ASHI SOP 13.1.B.2.a)

### AI Tools in the Market
1. **Binsr Inspect** ($1.1M pre-seed, New Stack Ventures + Silence VC, 2023)
   - Founded by Mark Garcia (ex-Salesforce, scaled Buildout to $30M rev) and Aryash Dubey (ASU)
   - AI voice + video: inspector says "crack in HVAC unit in garage, mark as safety hazard" → AI builds report
   - Video auto-grabs images, annotates, adds to comments
   - 700+ companies on waitlist (as of Dec 2025)
   - "We want less tapping, more inspecting" — reduce "human motions"
   - Still in beta, 50 customers using platform
   - Focus: report generation speed, not defect detection

2. **Paraspot AI** (Inman review, Nov 2025)
   - Mobile-first inspection using computer vision and audio narration
   - AI automatically transcribes audio, identifies common issues, categorizes images by room
   - Reports produced in minutes
   - Primary use: commercial multifamily, single-family rentals, student housing
   - What it does: speeds up documentation. What it doesn't: find hidden defects.

3. **Home Inspector Buddy** (Product Hunt)
   - AI assistant flags potential issues from photos
   - Supports different report types (general, 4-point, NACA)
   - Ranks severity and code relevance
   - Early stage

4. **PropScan AI** (HatchWorks, 48-hour prototype)
   - Upload photos + property details → AI identifies structural issues, estimates market value, generates repair cost breakdown
   - Surfaced $20K in needed fixes on a single property in testing
   - Rapid prototype, not production

5. **Coforge Smart Glass solution**
   - Inspector wears smart glass → AI engine auto-detects cracks/damages on walls/roofs
   - Generates severity & risk score, summarizes content, auto-creates PDF report
   - Designed for insurance underwriting, not consumer home buying

### The Gap: Thermal/Sensor Detection
- FLIR thermal cameras can detect moisture behind walls via evaporative cooling signatures
- "80% of our homeowners' claims are water related. Without thermal cameras and moisture meters we would miss most deficiencies" — Alex Harbur, People's Trust Insurance
- Thermal imaging isn't AI-exclusive — it's a $300-$2,000 hardware investment
- Build Test Solutions Heat3D: FLIR One Pro + AI calculates actual U-values (from our previous article)
- MDPI Buildings 2025: deep learning thermal anomaly detection 92% precision vs 72% conventional
- Most AI inspection startups are NOT incorporating thermal imaging — they're processing visible-light photos

### Inspection Waiver Problem
- During pandemic housing boom, 20%+ of buyers waived inspections entirely in competitive markets
- This trend has moderated but inspections are still sometimes waived or curtailed
- AI tools could make inspections faster/cheaper, lowering barrier to always getting one

### Liability & Legal
- Inspector liability typically limited by contract — often to fee amount ($300-$500)
- ASHI SOP explicitly excludes concealed conditions, latent defects
- When AI tools make claims about defect detection from photos — who's liable if it misses something?
- No established legal framework for AI-augmented inspection liability

## Original Contribution
Cross-referencing what AI inspection tools actually do (report automation, voice-to-text, photo categorization) against the ASHI/InterNACHI Standards of Practice reveals that AI is optimizing the 1-3 hours of post-inspection report writing — not the 2-hour inspection itself. The $1,000-$10,000 defects that actually matter to buyers are almost all behind walls, under foundations, or in concealed spaces that neither the inspector nor the AI is allowed to access. The one technology that actually sees through walls — thermal imaging — is barely represented in the current crop of AI inspection startups.

## Journalist
Catherine "Code" Chen — the Standards of Practice angle, liability questions, and regulatory framework are her beat. The story is about what the rules allow, what AI can't change about those rules, and who pays when the system fails.

## Sources
- InterNACHI Standards of Practice (nachi.org)
- ASHI Standards of Practice (homeinspector.org)
- Repair Pricer analysis of 50,000 inspection reports (gaar.com)
- Binsr Inspect: New Stack Ventures announcement, Inman review (Dec 2025), AZ Big Media, Homes.com
- Paraspot: Inman review (Nov 2025)
- IBISWorld: Building Inspectors in the US Market Size (Feb 2026)
- Mordor Intelligence: Building Inspection Services Market
- FLIR building inspection documentation
- People's Trust Insurance / Alex Harbur interview (FLIR)
- InterNACHI: "The Limitations of a Home Inspection" (Nick Gromicko, CMI)
- New American Funding: "Buyer Be Warned" (Dec 2025)
