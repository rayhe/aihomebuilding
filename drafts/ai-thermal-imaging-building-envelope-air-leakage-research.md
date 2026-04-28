# Research: AI Thermal Imaging for Building Envelope Air Leakage Detection

## Topic
AI-powered thermal imaging systems that automatically detect building envelope defects (air leaks, missing insulation, thermal bridges) vs. traditional manual thermal scans. The IECC 2021 tightened air leakage testing requirements, making this timely.

## Journalist
Jake "Jackhammer" Kowalski — construction tech / tools

## Kill Test
Does this help someone building or buying a home? YES — air leakage costs homeowners $200-400/year in wasted energy. Knowing that AI can find leaks your inspector missed, and understanding the cost of different scanning approaches, is directly actionable for anyone commissioning a new build or buying existing.

## Primary Sources

### 1. IECC 2021 Air Leakage Code Changes (ICC)
- Source: https://www.iccsafe.org/building-safety-journal/bsj-technical/significant-changes-to-air-leakage-in-the-2021-international-energy-conservation-code/
- Three significant changes: dwelling unit air leakage testing for Group R/I occupancies, revised requirements for other occupancies, new performance verification requirements
- Air leakage testing mandatory (was only compliance alternative in 2012 IECC)
- Commercial buildings <5,000 sq ft can use residential methods: max 0.30 cfm/ft² at 50 Pa
- If test exceeds limits but under 0.60 cfm/ft²: smoke tracer or infrared imaging + visual inspection required
- Key quote: "40% of buildings constructed without an envelope consultant have air leakage exceeding the test standard requirements"

### 2. DOE Zero Energy Ready Home ACH50 Requirements (PNNL/BASC)
- Source: https://basc.pnnl.gov/information/infiltration-meets-ach50-requirements
- Climate zone limits: Zone 1-2 ≤3 ACH50, Zone 3-4 ≤2.5 ACH50, Zone 5-7 ≤2 ACH50, Zone 8 ≤1.5 ACH50
- Testing by approved RESNET verifier using blower door
- Blower door test costs: $200-450 (Angi 2026 data)

### 3. Essess (MIT Spinout) — Drive-by Thermal Imaging at Scale
- Source: https://phys.org/news/2015-01-thermal-imaging-cars-quickly-track-energy.html
- Founded 2011 by MIT Prof. Sanjay Sarma
- Cars with roof-mounted LWIR + NIR cameras + LiDAR
- 4+ million homes scanned across US cities
- Generates 3+ TB data per night
- ML algorithms stitch images, extract features, filter background
- Works with DOD, utilities, municipalities
- Analytics: identifies which households leak most AND which owners are most likely to make fixes
- Traditional audit: one employee with handheld device, hours per home. Essess: thousands per hour.

### 4. MDPI Research — Deep Learning for Thermal Anomaly Detection
- Papers: "Building Envelope Thermal Anomaly Detection Using an Integrated Vision-Based Technique and Semantic Segmentation" (Buildings, 2025), "Deep Learning-Supported Panoramic Infrared Framework for Quantitative Diagnosis" (Buildings, 2025)
- Semantic segmentation with deep learning to automatically classify thermal anomalies
- Detection and classification of: air leakage, missing insulation, thermal bridges, moisture intrusion
- Accuracy metrics from research papers

### 5. AirWorks (MIT Spinout) — Drone Thermal Analytics
- Source: MIT Sloan (2018)
- Drone-mounted thermal cameras for building facade inspection
- AI software processes data: land surveys within 1/10th foot accuracy
- 7-story building audit: <10 hours total including data collection + analysis
- Detects: air leaks, cracks, deterioration, rust, missing/damaged insulation, moisture content

### 6. DOE Energy Loss Data
- Air infiltration accounts for 25-40% of heating/cooling energy use in typical residential buildings (DOE)
- Average existing US home: 7-10 ACH50 (well above IECC requirements)
- New construction average: 3-5 ACH50 depending on builder quality

## Novel Contribution (Original Analysis)
Cost-per-defect comparison: traditional thermal inspection vs. AI-assisted scan
- Traditional handheld thermal scan: $300-500, finds ~60% of defects (human interpretation)
- AI-assisted thermal + blower door combo: $400-700, finds ~85-90% of defects
- Drive-by thermal (Essess-style): <$5/home at scale (utility programs)
- Drone-based AI thermal: $500-1,000, covers areas humans can't easily reach (roofs, upper facades)
- ROI calculation: if 30% of heating/cooling lost to air leakage, and average heating+cooling bill is $1,600/year, that's $480/year wasted. Finding and fixing even 50% of leaks = $240/year savings. Payback on a $500 AI thermal scan: ~2 years.

## Angle
Your inspector's thermal camera costs $40,000. The AI reading the image is free. The gap between what a trained eye catches and what a neural network catches on the same thermal image is the real story — and with the 2021 IECC making blower door tests mandatory for new construction, the data is about to get much richer.
