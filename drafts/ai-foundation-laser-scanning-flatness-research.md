# Research: AI-Powered Foundation Scanning — Catching Problems While the Concrete Is Wet

## Angle
Your builder checks foundation levelness with a straightedge and his eyeballs. It takes hours, misses problems, and only happens after the concrete hardens — when fixing a dip costs $15,000 instead of $50. Oak Ridge National Laboratory built a tool that does it in 60 seconds, while the slab is still wet.

## Journalist
Jake "Jackhammer" Kowalski — construction tech, tools, robotics

## Kill Test
Does this help someone building or buying a home? YES. Foundation problems are the most expensive residential repair category. Catching levelness issues during a pour vs. after hardening is the difference between re-screeding ($50 in labor) and slab jacking ($4,500–$37,500 per Angi 2026 data).

## Primary Sources

### 1. ORNL FLAT Tool (Flat and Level Analysis Tool)
- **Source:** Oak Ridge National Laboratory, Building Technologies Research and Integration Center
- **Published:** June 3, 2025 (paper presented at ISARC 2024, Lille, France)
- **Researchers:** Nolan W. Hayes, Bryan P. Maldonado, Mengjia Tang, Diana Hun
- **What it does:** Uses 360-degree terrestrial laser scanner (TLS) to create a dense point cloud of a concrete slab. ML-based segmentation algorithms automatically extract the slab surface from the full scan. Then automated analysis algorithms report flatness/levelness per ASTM E1155 standard.
- **Key performance:** 
  - Foundation measurement time reduced by >90% vs manual methods
  - Detects deviations as small as 1/8 inch (3.2mm)
  - Results in under 1 minute
  - No slab preparation required (no chalk lines, no marking)
  - Demonstrated at two housing developments
- **Quote:** "With this digital tool, you can quickly get estimates for the foundation's smoothness with minimal human involvement. This enables faster building construction because FLAT can tell you within a minute if any mistakes were made and where they are." — Nolan Hayes, ORNL
- **Future work:** Demonstrations with suspended slabs, floor decking, and pier foundations
- **Status:** Research tool, not yet commercially available. ORNL Technology Licensing (partnerships@ornl.gov, 865-574-1051)
- **Publication:** ISARC 2024 Proceedings (Pages 838-846, ISBN 978-0-6458322-1-1)

### 2. Piezoelectric Sensors + Deep Learning for Concrete Strength (Supporting)
- **Source:** Nature Communications (DOI: 10.1038/s41467-025-67168-8), PMC12800108
- **What:** Embeds piezoelectric (PZT) sensors in concrete to monitor curing strength in real-time using deep learning on electromechanical impedance (EMI) signals
- **Results:** ~15% prediction error vs ASTM C39 standard compression tests. Validated across 4 large-scale highway projects.
- **Standards impact:** Aspects incorporated into AASHTO T412 — a new national standard for non-destructive concrete testing
- **Residential relevance:** Currently validated for highway, but the principle applies. Instead of breaking cylinders at 7 and 28 days, you'd know real-time when the slab hits spec strength.

### 3. ASTM E1155 F-Number System
- Standard test method for floor flatness (FF) and floor levelness (FL)
- F-number scale: 12 to 45+ in practice
  - Conventional: FF20/FL15 (basic slabs)
  - Moderately Flat: FF25/FL20 (carpeted areas)
  - Flat: FF35/FL25 (tile, warehouse)
  - Very Flat: FF45/FL35 (sensitive finishes)
  - Super Flat: FF60+/FL40+ (AGV warehouses)
- Most residential builders DON'T test to ASTM E1155 — they use a 10-foot straightedge (ACI 117 gap method)
- The straightedge method is "inexact and rarely representative of the entire floor since the technician is free to choose any location"

### 4. Foundation Repair Costs (2026 Data)
- Foundation leveling: $4,500–$37,500 (Angi, 2026)
- House leveling: $10,000–$30,000 (HomeLight, 2026)
- Concrete leveling per sq ft: $3–$25 (Angi)
- Labor: 50–70% of leveling costs
- Mudjacking: $3–$8/sq ft
- Polyjacking: $5–$25/sq ft
- Self-leveling compound: $1.80–$5/sq ft (professional application)

### 5. ORNL Related Research
- Also developed: nondestructive microwave radar for moisture detection inside walls (Dec 2024)
- Hempitecture (Innovation Crossroads graduate): $8.4M DOE funding for hemp-based building insulation
- Urban heat wave simulation incorporating building infrastructure effects (Dec 2024)

## Original Contribution
**Cost-gap analysis:** Calculate the cost of catching a foundation deviation during pour vs. after hardening.

- During pour (wet concrete): re-screed, bull-float, or add material. Labor cost: ~$50–$200 for a finisher to spend 15–30 minutes fixing a localized dip.
- After hardening (discovered during framing or flooring): Options are grinding ($3–$15/sq ft), self-leveling compound ($1.80–$5/sq ft), or full slab jacking ($4,500–$37,500). Plus the schedule delay: 1–3 weeks.
- For a typical 2,000 sq ft slab: a 3/8-inch dip across 200 sq ft caught after hardening = $600–$3,000 in remediation. Caught while wet = $100 in re-screeding.
- Typical TLS scanner cost: $15,000–$40,000 for a Leica or Trimble unit. FARO Focus swift: ~$20,000.
- Break-even: if a builder doing 15 homes/year prevents one $3,000+ rework per year, the scanner pays for itself in 5–7 years. If they prevent one $15,000 foundation claim, it pays for itself in year one.

## Strongest Counterargument
- FLAT is still research — ORNL hasn't commercialized it. No residential contractor can buy it today.
- A terrestrial laser scanner costs $15,000–$40,000. Most volume builders won't invest that for flatness testing alone.
- The current manual method (straightedge) is "good enough" for most residential applications. IRC doesn't require F-number testing for single-family homes.
- Scan-to-analysis requires software expertise most concrete crews don't have.

## Limitations
- FLAT validated at only two housing developments — small sample
- No independent cost-benefit study published
- Piezoelectric concrete monitoring validated only on highway projects, not residential
- Scanner cost data is approximate (vendors don't publicly list prices)
- No data on how often foundation flatness issues actually cause costly rework in residential (the figure is extrapolated from repair industry data)
