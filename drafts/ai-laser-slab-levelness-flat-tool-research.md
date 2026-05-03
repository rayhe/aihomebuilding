# Research: AI Laser Slab Levelness — ORNL FLAT Tool

## Journalist: Jake "Jackhammer" Kowalski (Construction Technology)

## Core Angle
Oak Ridge National Laboratory built a tool (FLAT) that uses a laser scanner + unsupervised ML to check if your foundation slab is level — in under 60 seconds, while the concrete is still wet. Traditional method: a guy walks the slab with a 10-foot straightedge after the concrete hardens, checking maybe 5-10 spots. FLAT checks the entire surface. Break-even math for a residential builder.

## Primary Sources

### 1. ORNL FLAT Tool (DOE / Oak Ridge National Laboratory)
- **Paper:** Hayes, Maldonado, Tang, Hun (2024). "Flat and Level Analysis Tool (FLAT) for real-time automated segmentation and analysis of concrete slab point clouds." ISARC 2024, 41st conference, Lille, France. DOI: 10.22260/ISARC2024/0109
- **Press release:** ORNL, "Using AI to construct on the level" (updated July 3, 2025)
- **How it works:** 360-degree terrestrial laser scan → dense point cloud → unsupervised ML auto-segments concrete slab from full scene → automated FF/FL analysis per ASTM E1155
- **Speed:** Reduces measurement time by 90%+. Results in under a minute.
- **Key innovation:** Can scan WHILE concrete is still wet/plastic. Traditional method requires concrete to harden first.
- **Tested:** Two housing developments (per ORNL press release)
- **Researchers:** Nolan Hayes, Diana Hun, Bryan Maldonado Puente (ORNL Building Technologies Research and Integration Center)
- **Accuracy:** "Comparable accuracy to manual methods" per paper abstract

### 2. ASTM E1155 — Floor Flatness/Levelness Standard
- FF (Floor Flatness) and FL (Floor Levelness) numbers
- Residential standard: FF 25/FL 20
- Conventional: FF 20/FL 15
- Super Flat: FF 50+/FL 30+
- Traditional test: 3-meter (10-foot) straightedge. Technician chooses test locations — subjective and non-representative.

### 3. Cost Data — Rework vs Prevention
- **Grinding hardened concrete:** $15/sq ft (iScano, 2026)
- **Typical residential slab:** 1,500-2,000 sq ft
- **One rework event (residential):** $2,000-$10,000+ depending on severity
- **Concrete leveling after cure:** $662-$1,866 average (Angi 2026 data)
- **Foundation repair (severe):** $2,200-$100,000 (NerdWallet 2026)
- **Fixing while wet:** Near-zero cost — just screed the area again
- **Post-tension cable hit (if drilling into hardened slab):** $50,000+ structural repair (iScano)

### 4. Laser Scanner Costs
- **Leica BLK360:** ~$16,000 (G2 generation, survey-grade)
- **Leica BLK360 SE Essentials:** ~£12,500 (~$15,600) includes software
- **Rental:** From $626/month (Kwipped marketplace)
- **Accuracy:** 4mm at 10m range
- **Speed:** Full 360° scan in under 30 seconds

### 5. iScano Industry Data (2026)
- "The most expensive rework isn't the concrete itself; it's what is inside or under it."
- Pre-pour scanning prevents $10K+ rework costs
- Missing conduit sleeve → X-ray and core-drill later → ~$2,000 per hole
- ACI 117 allows ±3/4 inch slab elevation tolerance, but curtain wall anchors may only have ±1/2 inch adjustment → conflict → litigation

## Original Contribution: Break-Even Analysis

### Scenario: 20-home/year residential builder
- Average slab: 1,800 sq ft
- Defect rate (slab exceeds tolerance): ~10-15% (ACI 302.1R notes minimal QC in residential)
- Average rework cost per incident: ~$3,000 (conservative — grinding 200 sq ft at $15/sq ft)
- Expected rework cost without scanning: $3,000 × 12.5% = $375/home

### Option A: Buy scanner ($16,000)
- Break-even: $16,000 / $375 = 43 homes = ~2.1 years
- But: also catches issues while concrete is WET (rework drops to near-zero), so real savings per home may be higher

### Option B: Rent scanner ($626/month, use 2 days/month)
- Annual cost: $7,512
- Break-even: need to avoid ~2.5 rework events/year ($3,000 each)
- At 20 homes with 12.5% defect rate = 2.5 events → exactly break-even on rental alone
- Any efficiency gain in pour scheduling or reduced inspection labor is pure profit

### Option C: Hire surveyor ($500-800/slab)
- Per-home: $500-800
- 20 homes: $10,000-$16,000/year
- More expensive than rental, and surveyor may not come during the pour window

## Strongest Counterargument
Most residential builders don't check slab levelness AT ALL beyond eyeballing it. FF/FL testing is a commercial/industrial spec. The question isn't "should you replace your straightedge with a laser?" — it's "should you start checking at all?" A $16K scanner might be overkill when the real problem is that nobody's looking.

## Limitations
- FLAT tested at two housing developments only — no published data on how many defects were actually caught vs. traditional methods
- No published per-unit cost for FLAT software licensing from ORNL
- Break-even analysis uses assumed 10-15% defect rate based on general ACI commentary, not measured residential slab failure data
- 90% time reduction claim is for measurement only, doesn't include setup/transit time for scanner
- FLAT specifically designed for slab-on-grade; pier/post-tension performance not yet demonstrated

## Kill Test
**Does this help someone building or buying a home?** YES. A homeowner paying $400K+ for a new construction home has no idea whether the slab was level. Builders doing 20+ homes/year have a financial case for scanning. The "catch it while it's wet" angle is genuinely actionable — it's the difference between a free fix and a $3,000+ one.
