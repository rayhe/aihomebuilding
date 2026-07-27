# Research: Smartphone Concrete Crack Measurement — Homeowner Gap

## Angle
A smartphone camera can measure concrete crack widths to sub-millimeter accuracy (0.15–0.16mm MAE). ACI 224R-01 sets the structural concern threshold at 0.3mm. The technology works — multiple 2024–2026 peer-reviewed studies confirm it. The hardware is in every homeowner's pocket. But no consumer app exists. The gap: proven science, universal hardware, zero consumer products.

## Kill Test
**Does this help someone building or buying a home?** YES:
- Homeowners can assess foundation cracks before calling a $400–$700 structural engineer
- Homebuyers can document and measure cracks during walkthroughs
- Builders can quality-check concrete work without specialized gauges

## Primary Sources

### 1. Nature Scientific Reports (2026)
- "Automated low-cost framework for crack measurements in RC structures using deep learning approach"
- Uses standard 12-megapixel smartphone camera at ~1.0m standoff distance
- Field of view: ~400mm × 300mm per image
- Validated in real scenarios: slabs, beams, columns in existing RC residential buildings
- Three components: DL detection/segmentation model, patching/stitching technique, checkerboard calibration
- Framework validated through large-scale experimental specimens AND existing RC structures
- URL: https://www.nature.com/articles/s41598-026-50880-w

### 2. Binocular Vision + U-Net Study (MDPI, Applied Sciences)
- "Intelligent Measurement of Concrete Crack Width Based on U-Net Deep Learning and Binocular Vision 3D Reconstruction"
- 9 measurement points, compared calculated vs true crack widths measured with percentage scale
- Maximum difference: 0.31mm, minimum: 0.07mm, average: 0.15mm
- Average measurement error (0.15mm) is BELOW the 0.2mm threshold distinguishing acceptable from concerning
- "Sufficient to reliably classify cracks into appropriate maintenance categories"
- Follows JTG H12-2015: <0.2mm acceptable, 0.2–0.5mm active deterioration, >0.5mm significant concern
- URL: https://www.mdpi.com/2076-3417/16/5/2355

### 3. MobileNetV2 + Adaptive Thresholding (MDPI, Infrastructures)
- "Computer Vision-Based Concrete Crack Identification Using MobileNetV2 Neural Network"
- MobileNetV2: compact model suitable for deployment on mobile devices
- Algorithm validated: measured 1.22mm crack width matched caliper measurement (1.22mm)
- Integration of camera settings with real-world metrics for pixel-to-physical conversion
- "Can be effectively and efficiently implemented in real-world scenarios"
- URL: https://www.mdpi.com/2412-3811/10/2/42

### 4. Deep Learning Crack Detection with Laser Calibration (Metrology, 2024)
- CNN + U-Net models: 99.22% classification accuracy, 96.54% segmentation accuracy
- Mean absolute error for crack width measurement: 0.16mm
- Novel laser calibration method for millimeter-scale measurements
- "Promotes safer, quicker inspections less prone to human error"

### 5. Standard Test Apparatus for Phone Apps (MDPI, 2025)
- "A Standard Test Apparatus and Method for Validating the Accuracy of Mobile Phone Apps in Measuring Concrete Crack Widths"
- Standardized crack-width calibration plate (CWCP) + simulated wall (SW)
- Two-stage procedure for precise phone positioning
- Demonstrates methodology exists to validate consumer apps
- Submitted Apr 2025, published Jun 2025

### 6. Chinese Patent CN110276752B (Android App)
- Working Android app for concrete crack characteristics
- Error: ±2.68% vs crack width gauge
- Calculates: width, length, area from smartphone photos
- Uses magnification factor + shooting distance calibration

## Crack Width Standards (for homeowner context)

### ACI 224R-01 (American Concrete Institute)
- 0.3mm: reasonable crack width for RC structures exposed to soil or moist air
- 0.1mm: water-retaining structures
- These are DESIGN limits, but widely used as assessment benchmarks

### Practical homeowner thresholds (from industry sources)
- < 1/16 inch (1.5mm): Usually cosmetic, concrete shrinkage/curing
- 1/16 – 1/8 inch (1.5–3mm): Minor movement, generally safe, monitor
- 1/8 – 1/4 inch (3–6mm): Active settlement, investigate
- > 1/4 inch (6mm): Significant movement, needs professional evaluation
- Horizontal or stair-step (any width): Needs immediate inspection

### Eurocode 2 / BS 8110 (UK)
- 0.3mm limit for aesthetic reasons; visible at ~3m viewing distance

## Cost Data — Structural Engineer Foundation Inspection
- National average: ~$600 (range $300–$1,000)
- Engineer hourly rate: $100–$500/hour
- Typical inspection: 1–2 hours
- Includes: visual assessment, crack analysis, level measurements, moisture check, written report
- Sources: Angi (Jul 2026), This Old House (Jun 2026), Level Engineering

## The Gap
- Multiple validated frameworks exist for smartphone-based crack measurement
- MobileNetV2 architecture specifically designed for mobile deployment
- Accuracy (0.15–0.16mm MAE) exceeds the 0.2mm threshold needed for triage
- A standardized validation methodology exists (2025 paper)
- A working Android app was patented (Chinese patent)
- Yet NO consumer-facing app exists in US/EU markets
- Homeowners still rely on: magnifying glass + ruler, or $600 engineer visits, or "does that look bad to you?" conversations

## Journalist
**Jake Kowalski** — construction technology, punchy, hands-on, specs-oriented. Explains cool machines to smart friends. This is right in his wheelhouse: a tool that works, hardware everyone has, product nobody built.
