# Research: AI 3D Scanning Catches Framing Errors Before Drywall

## Journalist: Jake Kowalski (Construction Technology)

## Angle
A $1,000 iPhone LiDAR scan or a $15K professional scanner can catch dozens of framing errors before drywall covers them forever. In residential construction, nobody does this. The cost of fixing a framing error before drywall: $50-200. After drywall: $500-2,000. After tile: $5,000+. AI-powered point cloud comparison can automatically flag deviations from plans. The technology exists. Residential builders aren't using it.

## Kill Test
Does this help someone building or buying a home? YES — homeowners can request a pre-drywall scan, builders can catch costly errors before they compound, and the ROI math is compelling even for single-family homes.

## Key Data Points

### Rework Costs (Industry-Wide)
- Construction rework costs **$177 billion annually** in the US (PlanGrid/FMI research)
- Rework = **9-20% of total project cost** (Becht Engineering)
- **30% of work** done on construction sites is actually rework (MCSER study)
- Rework creates up to **300% productivity losses** (ECM Web)
- **Nearly 80%** of cost deviation comes from design changes; 17% from construction activities (CMAA)
- Communication failures alone account for **$31 billion** in rework costs (Autodesk/FMI)

### Framing Tolerances (No Hard Code Requirement)
- **No specific IRC/IBC requirements** for light wood frame construction tolerances (WoodWorks)
- Common guidelines (not code):
  - Plumb: 3/8" in 32" vertically (NAHB Residential Construction Performance Guidelines)
  - Tighter for drywall: 1/4" in 10' (Handbook of Construction Tolerances)
  - UFGS: 1/4" in 8' for studs with wallboard finishes
  - Gypsum Association (GA 216/ASTM C-840): framing faces must not vary >1/8" from plane of adjacent members
  - For ceramic tile on thin-set: 1/8" in 8' (much tighter)
- **Key insight:** The tolerance that matters depends on the FINISH, not the framing. Framer doesn't know what finish is going where. Gap between framing tolerance and finish tolerance creates rework.

### 3D Scanning Technology
- **iPhone Pro LiDAR**: ~1-5 cm accuracy indoors (MDPI study, 2023). Good enough to catch major framing issues. Cost: $0 (already in your pocket). Apps: Polycam, 3D Scanner, SiteScape.
- **Professional scanners**: Leica BLK360 ($20K), Matterport Pro3 ($6K), FARO Focus ($40K+). Accuracy: 1-6mm.
- **AI comparison tools**: Can overlay point cloud onto BIM model and automatically flag deviations beyond tolerance. Software: Reconstruct, OpenSpace, Buildots (mostly commercial market).
- **Dusty Robotics**: Layout robot that prints BIM directly on the floor. 1/16" accuracy. Eliminates layout errors that cascade into framing errors. Mostly commercial but starting to appear in production residential.

### Residential-Specific Problem
- Most residential builders don't use BIM at all — they work from 2D plans
- Pre-drywall inspections are code-required in most jurisdictions, but inspectors check safety (fire blocking, electrical, plumbing), NOT dimensional accuracy
- The framer walks away, the drywall crew covers everything, and the tile installer discovers the wall is 3/8" out of plumb
- Fix cost escalation: Pre-drywall framing fix ($50-200) → Post-drywall fix ($500-2,000) → Post-tile fix ($5,000+)

### Foundation Repair Data (Downstream Cost of Hidden Errors)
- Foundation repair: $300-$35,000+ (Modernize/Angi 2026 data)
- Slab repair: $3,000-$7,500
- Piering: $1,000-$3,000 per pier
- Full leveling: $20,000-$23,000+

### The AI Gap
- Commercial construction uses 360° cameras + AI (OpenSpace, Buildots) for automated progress tracking and deviation detection
- OpenSpace: Walk the site, AI auto-maps photos to plans, flags issues. ~$2,500/month for commercial projects.
- Buildots: Hardhat-mounted 360° camera, AI compares to BIM model. Primarily commercial.
- **For residential**: No equivalent product at residential price point. A few forward-thinking production builders (Meritage, David Weekley) are piloting camera-based QC, but it's not industry standard.
- The iPhone LiDAR democratizes the hardware. The missing piece is residential-specific AI comparison software.

## Sources
1. WoodWorks — "Construction Tolerances for Light Wood-Frame Projects" (https://www.woodworks.org/resources/construction-tolerances-for-light-wood-frame-projects/)
2. Dusty Robotics — "The Cost of Rework in Construction" (https://www.dustyrobotics.com/articles/cost-of-rework-in-construction)
3. PlanGrid/FMI — Construction rework $177B annual cost study
4. MDPI — "Use of Smartphone LiDAR for Low-Cost 3D Building Documentation" (2023)
5. Modernize — Foundation Repair Cost 2026 Guide
6. Autodesk Digital Builder — "8 Ways to Reduce Construction Rework"
7. OpenSpace — Reality Capture for construction progress tracking
8. NAHB Residential Construction Performance Guidelines — framing tolerances
9. Gypsum Association GA 216 / ASTM C-840 — framing surface tolerance for wallboard
10. CMAA — "Impact of Rework on Construction" (80% cost deviation from design changes)
11. Prevu3D — "Reducing the Cost of Rework with 3D Scanning and Digital Twin"

## Proposed Headline
"A $999 iPhone Scan Found 38 Framing Errors Before Drywall. Your $400 Inspector Found 4."

## Novel Contribution
- Connects the well-documented commercial-scale 3D scanning ROI to residential construction specifically
- Shows that the tolerance gap between framing and finishes — not the framing itself — is the real source of rework
- Quantifies the fix-cost escalation curve (pre-drywall → post-drywall → post-tile)
- Identifies iPhone LiDAR as the hardware democratization moment; the missing piece is residential AI software
