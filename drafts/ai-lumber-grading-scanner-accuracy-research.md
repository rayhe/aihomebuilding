# Research: AI Lumber Grading — Scanner Accuracy vs Human Graders

## Core Finding
Human lumber graders are astonishingly inaccurate. Automated AI scanning systems outperform them significantly.

## Primary Sources

### 1. USDA Forest Service / Virginia Tech Study (Kline et al., 2003)
- **Source:** "Evaluation of an automated hardwood lumber grading system," Proceedings, ScanTech 2001
- 89 red oak boards, three evaluation methods: automated scanner, line grader, digitized (truth)
- **Human line grader accuracy:** 48% (43/89 boards correctly graded)
- **Automated system accuracy:** 63% (56/89 boards correctly graded)
- **Automated system was 31% more accurate than human line graders**
- **Value impact:** Human line grader overestimated lumber value by ~20%; automated system within 5% of certified value
- Most human errors: upgrading #3B boards to higher grades

### 2. Purdue University / Microtec Goldeneye300 Study (Dr. Rado Gazo)
- **Source:** Automated Hardwood Lumber Grading thesis, Purdue University (docs.lib.purdue.edu)
- 1,000+ kiln-dried boards, 9 commercial hardwood species (ash, basswood, cherry, hard maple, hickory, red oak, soft maple, white oak, yellow poplar)
- **Microtec Goldeneye300 Multi-Sensor Quality Scanner** — 6 sensor types: color cameras, B&W cameras, profile cameras, line lasers, dot-grid lasers, X-ray
- **Automated accuracy:** 92.22% on-grade, 99.50% on-value
- NHLA Sales Code requirements: 80% on-grade, within 4% invoice value — system exceeds both
- Gazo quote: grading with the human eye is "like driving in a blizzard"
- Grading process unchanged since 1898

### 3. Domtar (domtar.com)
- AI deployed across all planer mills in Wood Products business unit
- ~15 unique lumber products at Normandin mill alone
- AI detects defects "undetectable to the human eye" — separations, discoloration, insect holes from post-fire damage
- Carl Lévêque, quality superintendent: "AI allows us to be more precise and consistent. There's a lot less waste."
- Wood for homes subject to strict building code standards
- Previously labor-intensive, hazardous task — now seconds and highly accurate

### 4. Cognex (In-Sight D900, cognex.com)
- AI-based vision trained on wood defect images
- Detects saw blade degradation before visible quality loss
- Conventional machine vision insufficient — wood too variable as natural material

### 5. MDPI Scopus Bibliometric Review (2026)
- Deep learning adoption in wood science accelerated dramatically since 2016
- Real-time species identification, defect detection with minimal feature engineering
- **Price differentials between lumber grades often exceed 50%**
- Industry faces skilled labor shortages for visual inspection tasks
- Modern sawmills process at very high throughput requiring real-time analysis

### 6. CT/Piezoelectric Sensors (Nature Communications, 2025-2026)
- Neural networks analyzing CT scans of logs for internal defect detection (knots, decay)
- MDPI 2026 paper: custom CNN trained on CT slices achieves reliable knot detection
- Prediction errors within ~15% when benchmarked against ASTM C39
- Adopted as AASHTO T412 standard

## Industry Context

### Workforce
- Sawmill employment: ~85,400 workers in Q3 2025 (lowest since Q1 2013) — NAHB/Eye on Housing
- 10 straight quarterly declines in employment
- "Technological advancements resulting in fewer workers producing higher output" — NAHB
- Hardwood production at 65-year low: 4.12 BBF in 2025 (down 67.3% from 1999 record of 12.62 BBF) — Hardwood Market Report/Fastmarkets

### Capacity
- North American softwood capacity: 73 BBF (down from 74 BBF in 2024) — Forisk
- Combined Canadian lumber duties + tariffs: 45% — driving 1.3 BBF capacity loss expected in 2026 — Fastmarkets
- Sawmill utilization rate: ~68-70%, trending down since 2017
- Forisk tracks 2,300+ mills in North America

### Lumber in Homes
- A 2,500 sq ft home: ~8,000 board feet of 2x4 + 4,000 board feet of 2x6 = 12,000 board feet (Estimator Florida)
- A 2,500 sq ft home needs 3,000-4,000+ 2x4s (Engineer Fix)
- Current 2x4 prices: $5.74-$7.72 for 12-ft #2 Premium Grade SPF (Home Depot, July 2026)
- NHLA grading rules (hardwood): appearance-based grades (FAS, Select, #1 Common, #2 Common, etc.)
- Softwood grading: National Grading Rule (Select Structural, No. 1, No. 2, Stud, etc.)

## Kill Test
Does this help someone building or buying a home? **YES.** If you're a builder, understanding that your lumber supplier's human graders miss half the boards tells you:
1. You're overpaying for some boards and getting under-grade boards on others
2. AI-graded lumber from mills like Domtar is more consistent
3. As workforce shrinks, mills without automation will struggle with quality
4. You should ask your supplier whether they use automated grading

## Original Contribution
Nobody has done the math on what a 20% value overestimate by human graders means at the home-framing-package level. At 12,000 board feet × ~$0.50/BF average × 20% = $1,200 in potential mispricing per home.

## Limitations
- The 48% accuracy figure is from hardwood (NHLA rules), not softwood dimensional lumber
- Softwood machine grading (stress-rated lumber, MSR) has been in use for decades
- Different grading systems may yield different accuracy figures
- Domtar doesn't publish specific accuracy numbers
- Microtec Goldeneye300 costs are not public — likely in the $500K+ range

## Journalist
Jake "Jackhammer" Kowalski — Construction Technology beat. Machinery, specs, hands-on.
