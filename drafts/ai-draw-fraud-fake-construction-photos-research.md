# Research: AI-Generated Fake Construction Photos & Draw Fraud

## Journalist: Frank "The Foreman" DeLuca

## Angle
Construction loan draws have relied on photo evidence for decades. Generative AI just made it trivially easy to fabricate convincing progress photos — finished kitchens from bare drywall, completed roofing from half-framed structures. The same AI arms race playing out in every industry has hit the draw inspection process, and most lenders haven't adapted.

## Kill Test
Does this help someone building or buying a home? **YES.** If you're a homeowner with a construction loan, your lender's draw process is how they verify your money is being spent on actual work. If that process can be gamed with AI-generated photos, you're exposed. If you're a GC, understanding how lenders are tightening verification protects your cash flow.

## Primary Sources

### 1. FBI IC3 2025 Annual Report (Published April 2026)
- Real estate fraud: $275.1M in losses from 12,368 complaints (2025)
- Up from $173M/9,359 complaints (2024) and $145M/9,521 (2023)
- Peak was 2022: $397M/11,727 complaints
- AI-referencing complaints exceeded 22,000, losses >$893M
- "AI technology enables the creation of convincing synthetic content"
- Source: FBI IC3 via NAR (nar.realtor), HousingWire, Inman

### 2. Truepic — Draw Inspection Fraud Analysis
- Demonstrates how ChatGPT/Gemini can create fake construction progress photos in <10 minutes
- Process: real photo of unfinished work → AI adds hardwood floors, paint, finishings → metadata spoofed → submitted for draw approval
- Can also produce fake VIDEO walkthroughs from a single image
- Partnered with AAPL (American Association of Private Lenders) on "Media Fakes & Misrepresentation" course
- Truepic Vision solution: cryptographic verification at capture, geolocation, controlled capture (in-app only), reverse image search
- Quote (Jacob Sherick, Senior Manager, Kiavi): "Our customers love having control over the speed of the inspection process, and Truepic Vision gives us the ability to offer a quicker turnaround time without compromising integrity."
- Source: truepic.com/blog/draw-inspection-fraud

### 3. Built Technologies — Draw Agent (Launched Nov 2025)
- AI agent for construction loan draw processing
- Claims: 95% time reduction, 60% draw turnaround acceleration, 400% increase in risks detected vs. human reviews
- Three modes: Audit (read-only analysis), Assist (pre-populated decisions for human approval), Automate (fully autonomous for low-risk)
- Powered by MightyBot Agentic AI Platform
- Reviews complete project context: loan agreement, construction plans, budget, inspection photos, historical draw data, insurance certs
- Early adopters: Zions Bancorporation, Anchor Loans, AgSouth Farm Credit
- Quote (Randy Stewart, EVP, Zions Bancorporation): "What once took hours of manual review now happens in minutes with greater consistency, transparency, and control."
- Source: BusinessWire/getbuilt.com

### 4. DOJ Case — Turner Remodeling LLC (Filed June 16, 2026)
- Richard Turner, 38, Yorktown, Indiana — 9 counts bank fraud
- Submitted fabricated lien waivers claiming 5 subcontractors completed work they didn't do
- Forged subcontractor signatures
- Stole $188,000 from $785,225 construction loan
- Used funds for gambling
- FBI Indianapolis investigating
- Source: justice.gov/usao-sdin

### 5. Celent/Zest AI Fraud Report (May 2026)
- 93% of lenders say fraud contributes to credit losses
- 82% report fraud losses increased in 2026 vs prior year
- 61% identified synthetic identity fraud as fastest-growing type
- 56% flagged bust-out fraud, 55% application stacking
- "Fraud has evolved from a contained risk into a systemic threat" — Craig Focardi, Celent
- Source: BusinessWire

### 6. FundingShield Q3 2024 Wire Fraud Risk Report
- 46.43% of transactions on $82B portfolio had wire/title fraud risk
- Average problematic loan had 2.23 issues per loan
- Record-high CPL error rates (45.1%)
- Wire errors at 8.1% — 4th straight quarter above 8%
- Source: BusinessWire

### 7. Debevoise & Plimpton — AI-Generated Images for Insurance Claims (Jan 2026)
- AI image manipulation for fraudulent insurance claims is increasing
- Carriers face a "pay and chase" problem — can't always prove fraud definitively
- Creates loss reserving uncertainty
- Pattern extends to any industry relying on photo evidence: insurance, lending, construction
- Source: Columbia Law School Blue Sky Blog / Debevoise

### 8. C2PA Content Provenance Standard
- Open standard for verifying origin/history of digital content
- Cryptographic signatures embedded at capture
- ETH Zurich researchers found C2PA vulnerabilities (Feb 2026) — proposed sensor-chip-level signing
- arXiv paper: C2PA specs v2.2-2.4 fail all five claimed security goals
- Construction industry hasn't adopted C2PA, though Truepic uses its own proprietary cryptographic system
- Source: spec.c2pa.org, PetaPixel, arXiv

## Novel Analysis: The Fraud Surface Area Calculation

US residential construction starts: ~1.35M annually (Census Bureau, 2025)
Construction loans fund roughly 60-70% of new single-family starts: ~750K-900K loans/year
Average construction loan: ~$350K (varies widely by market)
Average draws per loan: 4-6 (typical schedule: foundation, framing, rough-in, drywall, finishes, final)
Average draw amount: $55-85K

Conservative estimate: 800,000 loans × 5 draws = 4,000,000 draw events per year
At 0.1% fraud rate (industry estimate for detected fraud): 4,000 fraudulent draws
At average draw of $70K: $280M potential exposure annually — remarkably close to FBI's $275M real estate fraud figure

Before AI: faking progress photos required hiring someone, staging a job site, or Photoshopping. Cost: hundreds to thousands of dollars and significant risk of detection.
After AI: 10 minutes, zero cost, near-undetectable without provenance tools.

The asymmetry is the story: the cost of fraud just collapsed to zero while the cost of detection remains high.

## Counterargument (strongest)
- Most construction loans involve in-person inspections, not just photo reviews. Hard to fake physical progress when an inspector walks the site.
- Private/hard-money lenders who rely on borrower-submitted photos are a small fraction of total construction lending.
- The Turner case (DOJ) was low-tech document fraud, not AI — the fraud vector that actually resulted in charges didn't need AI at all.

## Limitations
- No public data on what percentage of construction loan draws are approved based on photos alone vs. in-person inspection
- Truepic and Built are vendors selling solutions — their risk framing has commercial motivation
- The fraud surface area calculation uses rough estimates; actual construction loan data is fragmented across thousands of lenders
- C2PA standard hasn't been tested in construction/real estate contexts
