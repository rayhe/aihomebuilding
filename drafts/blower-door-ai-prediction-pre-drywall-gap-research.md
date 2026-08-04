# Research: AI Blower Door Test Prediction — The Pre-Drywall Gap

## Angle
The blower door test that determines whether your new home meets energy code happens AFTER drywall is installed. If it fails, finding and fixing air leaks behind finished walls is expensive, slow, and destructive. AI models can predict airtightness from construction parameters — researchers have proven it with 486 residential units in Korea and 450+ datasets in Chile. But no commercial tool exists that tells a residential builder mid-construction whether the house will pass. The test comes too late. The AI that could move it earlier hasn't left the lab.

## Key Data Points

### Blower Door Test Requirements
- **2024 IECC:** Maximum 3.0 ACH50 in Climate Zones 3-8; 4.0 ACH50 in Zones 1-2
- **Older homes:** 10-15 ACH50 typical
- **New homes (pre-air sealing focus):** 4-10 ACH50
- **Air-sealed homes:** 1-3 ACH50
- **Passive House:** ≤0.6 ACH50
- Standard test takes 90 minutes to 2 hours
- Cost: $300-$500 for residential
- Must be performed by RESNET HERS Rater, BPI Building Analyst, or equivalent
- The test happens after the house is substantially complete — drywall installed, paint often done
- **Failure requires:** Finding leaks, sealing them, retesting. Can cost $2,000-$10,000+ if leaks are behind drywall

### The Timing Problem
- Air barrier installation happens during framing/rough-in (housewrap, caulk at plates, spray foam, tape)
- Drywall covers the air barrier within days/weeks
- Blower door test happens weeks/months later at final inspection
- If the house fails, the builder must either:
  1. Do a "guided" blower door with smoke/infrared to find leaks (additional $300-$500)
  2. Cut open drywall to access and seal leaks ($50-$200/opening, plus repair)
  3. Apply exterior fixes (caulk, sealant) — limited effectiveness
- Mid-construction blower door test (pre-drywall) costs the same $300-$500 but catches problems when they're accessible
- Most builders skip it because it's an "extra" cost and delays schedule

### AI Prediction Research
1. **Korean study (MDPI):** Multiple regression on 486 residential units in 3 apartment complexes. Predicted ACH50 from construction parameters (window type, wall construction, floor area, envelope ratio). Achieved reasonable accuracy for reinforced concrete buildings.

2. **Chilean EHeD tool:** 450+ datasets from blower door tests. Inputs: material type, window/door type, housing typology (detached/semi-detached/block). Predicts n50 value for design and occupational stages.

3. **APMPS method (ScienceDirect):** Predicts airtightness from differential pressure measurements across building components. Tested on 3 residential buildings. Accuracy improved with building height and temperature differential. Most predictions within 2-3 h⁻¹ at 50 Pa.

4. **Moisture/mold ML model (MDPI):** Predicted maximum mold index (R² = 0.997) and moisture content (R² = 0.995) from building assembly parameters. Shows ML can accurately model building envelope performance from construction inputs.

5. **Efficiency Matrix EnvelopeIR:** Mobile app integrating FLIR thermal imaging with defect tracking during blower door tests. Captures air leakage locations with photos, assigns to trades, goes paperless. Not AI-predictive but the closest commercial tool.

### The Residential Gap
- **Commercial buildings:** ASHRAE Standard 202 requires commissioning. Many get pre-occupancy envelope testing.
- **Residential:** No commissioning standard. One-shot blower door test at final inspection.
- Mid-construction blower door testing is recommended by building science experts (Matt Risinger, RDH Building Science) but rarely performed
- No AI tool exists that takes construction parameters (framing type, insulation method, window specifications, air barrier system, penetration count) and predicts ACH50
- The data exists: RESNET has millions of HERS ratings with blower door test results linked to construction details
- RESNET registry is the largest database of residential building performance in the world — the training data for an AI model is sitting there

### Why Builders Skip Pre-Drywall Testing
1. Schedule pressure: adding a test adds 1-2 days
2. Cost: $300-$500 that "might not find anything"
3. Confidence: "We've always built this way and passed"
4. Subcontractor coordination: need to have all penetrations sealed before test
5. No requirement: Code only mandates final test

### Original Contribution
**Cost analysis of pre-drywall vs. post-drywall failure:**
- Mid-construction blower door test: $400
- Post-drywall failure rework: $2,000-$10,000
- Typical failure rate for first-time code-compliant builders: 15-25%
- Expected value of a pre-drywall test: $400 cost vs. (20% × $5,000) = $1,000 expected rework savings
- Break-even: if your failure rate exceeds 8%, the pre-drywall test pays for itself
- An AI prediction tool could reduce this to a $0 decision: run the model before you test

### The RESNET Data Goldmine
- RESNET National Registry: millions of HERS ratings
- Each rating includes: blower door test result, construction details, climate zone, HVAC specs
- This is exactly the training data an ML model needs
- Nobody has built the model
- The data is there. The math works. The tool doesn't exist.

## Kill Test
Does this help someone building or buying a home? **YES.**
- If you're building a custom home in 2026, your builder MUST pass a blower door test
- If the house fails: delays, rework costs, potential drywall damage
- A pre-drywall test or AI prediction tool could save $2,000-$10,000 in rework
- As a buyer: ask your builder if they do mid-construction blower door testing. If not, ask why.

## Journalist
**Priya Greenwood** — sustainability/green building. This is about building envelope performance, energy codes, and the gap between what the science says and what the industry does.

## Sources
1. 2024 IECC air leakage requirements
2. Korean airtightness prediction study (MDPI)
3. Chilean EHeD prediction tool (MDPI Sustainability)
4. APMPS method (ScienceDirect)
5. ML moisture/mold prediction (MDPI Energies)
6. Efficiency Matrix EnvelopeIR app
7. GreenBuildingAdvisor blower door testing guide
8. Matt Risinger / Build Show podcast on mid-construction testing
9. RDH Building Science webinar on airtightness
10. ICC significant changes to air leakage (2021 IECC)
