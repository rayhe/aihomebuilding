# Research: Residential Acoustic Code Gap & AI Prediction

## Core Angle
The IRC has no mandatory acoustic requirements for single-family homes. Appendix K (Sound Transmission) exists but is explicitly "not mandatory unless specifically referenced in the adopting ordinance." IBC Section 1206 requires STC 50 for walls between dwelling units (multifamily), but within a single-family home — between the home office and the kitchen, between the master bedroom and the kids' playroom — there is literally no acoustic requirement. Meanwhile, AI/neural networks can predict STC and IIC ratings from material properties with 2-3 dB accuracy, and 53% of homebuyers want sound control.

## Key Data Points

### The Regulatory Gap
- **IRC Appendix K** (2015+): STC 45 for walls separating dwelling units; IIC 45 for floors. BUT: "The provisions contained in this appendix are not mandatory unless specifically referenced in the adopting ordinance." Most jurisdictions don't adopt it for single-family.
- **IBC Section 1206** (2021): STC 50 for walls/partitions/floor-ceiling assemblies separating dwelling units. Only applies to multifamily.
- **American Wood Council confirms**: "These code provisions apply to wall and floor/ceiling assemblies separating dwelling units from other dwelling units, or from adjacent public areas, within a building." Nothing about interior partitions within a single unit.
- **No exterior wall acoustic requirements** in US model codes either (AWC FAQ).

### The Demand
- **53% of buyers** consider soundproofing essential or desirable in their new home (NAHB "What 21st Century Home Buyers Want" survey)
- **Noise is the 2nd biggest contributor to construction lawsuits** (AIA, cited by Weyerhaeuser)
- Work-from-home revolution created massive demand for acoustically isolated home offices
- Empty-nesters, luxury buyers, townhouse/condo buyers all have near-zero tolerance for noise

### Typical STC Ratings in Residential
- Standard 2×4 wood stud wall, single-layer 1/2" drywall each side, no insulation: **STC 33-35** (Normal speech easily understood)
- Same wall with R-13 fiberglass insulation: **STC 39** (Loud speech audible as murmur)
- Resilient channel + insulation: **STC 44-48** (Loud speech heard but not audible)
- Double stud wall with insulation: **STC 55+** (Good soundproofing)

### STC Subjective Correlation (Wikipedia/ASTM)
| STC | What can be heard |
|-----|-------------------|
| 25  | Normal speech understood |
| 30  | Loud speech understood |
| 35  | Loud speech audible but not intelligible |
| 40  | Loud speech audible as murmur |
| 45  | Loud speech heard but not audible |
| 50  | Loud sounds faintly heard |
| 60+ | Most sounds don't disturb |

### The AI Capability
- **Bader Eddin et al. (2022, MDPI Acoustics):** Neural networks trained on 252 standardized lab measurements predict airborne sound reduction index (Rw) with max error of 2 dB for lightweight wooden floors. IIC prediction within 5 dB. Features: material thickness, density, dimensions, insulation type.
- **Part II (Facades):** 100 insulation curves, prediction within 3 dB for weighted airborne sound reduction.
- Key parameters: insulation material thickness, CLT panel density, concrete floating floor density, total assembly density.
- **Commercial tools exist**: COMSOL Acoustics Module, Hexagon acoustic simulation, Insul software, NRC Canada prediction tools — none residential-facing.
- **RoomDiY plugin (Audio Fusion Bureau, 2026):** Free acoustic room simulation — but designed for audio production, not residential construction.

### The Cost Gap
- Adding cavity insulation to a standard wall: ~$1-2/sqft → STC improvement from 33 to 39
- Resilient channel + insulation: ~$3-5/sqft → STC improvement from 33 to 44-48
- The ROI is massive: a 10-point STC increase cuts perceived noise by roughly half

### The Field Reality
- Walls required to have STC 40 in commercial code, but "More often we see walls performing in the mid- to high 20s" in practice (AAOA article)
- Even when acoustic requirements exist (multifamily), actual field performance often falls 5-10 points below lab-rated values due to installation defects: back-to-back electrical outlets, unsealed penetrations, single studs

## Kill Test
Does this help someone building or buying a home? YES. A homebuyer doesn't know that the $750,000 home they're buying has walls with the acoustic performance of a college dorm. A builder could add STC-optimized wall assemblies for $2-5K total cost in a typical home. An AI prediction tool could let them input their wall specs and get instant STC estimates without a $5,000 acoustical consultant.

## Sources
1. IRC 2015 Appendix K — codes.iccsafe.org
2. IBC 2021 Section 1206 — awci.org
3. NAHB "What 21st Century Home Buyers Want" survey — via builderonline.com
4. AIA construction lawsuits data — via weyerhaeuser.com
5. Bader Eddin et al., "Prediction of Sound Insulation Using Artificial Neural Networks—Part I" (2022, MDPI)
6. Bader Eddin et al., Part II: Lightweight Wooden Façade Structures (2022, MDPI)
7. American Wood Council FAQ on exterior wall acoustic requirements
8. Wikipedia: Sound Transmission Class (STC subjective correlation table)
9. AAOA article on noise complaints — field STC performance data
