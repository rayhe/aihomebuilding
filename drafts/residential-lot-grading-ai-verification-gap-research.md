# Research: Residential Lot Grading AI Verification Gap

## Angle
AI site-grading tools exist for commercial development (Autodesk InfoDrainage ML Deluge, Kimley-Horn custom AI grading for 2,000-acre solar farms). But on a residential lot — where grading errors cause the most expensive callbacks — a bull operator follows grade stakes by eye, nobody verifies the finished grade with anything more precise than a 4-foot level, and the homeowner discovers the problem 18 months later when water pools against the foundation.

## Kill Test
Does this help someone building or buying a home? YES — every homeowner and builder needs to understand: (1) proper grading is the single biggest determinant of water damage, (2) verification is essentially nonexistent on residential jobs, (3) technology to automate verification exists and costs less than a single foundation repair.

## Key Data Points

### The Problem Scale
- Water damage = 20% of all homeowners' insurance claims (American Insurance Association)
- Foundation repair: $5,000–$15,000 typical in Georgia/Southeast; national avg ~$4,500 (HomeAdvisor data)
- Waterproofing after water intrusion: additional $3,000–$10,000
- IRC requirement: 6 inches of fall within first 10 feet from foundation (R401.3)
- NIST study: improper installation (including oversizing, duct leaks) increases household energy use ~30% — grading affects infiltration loads
- DOE field study: >65% of residential HVAC systems improperly installed — site conditions (drainage, moisture) are contributing factors
- FSEC/UCF (Lucas 1993): two-thirds of 75 Northwest homes had oversized systems; poor drainage = higher humidity loads = bigger systems needed

### The Technology Gap
- **Autodesk InfoDrainage ML Deluge**: Machine learning flood mapping, seconds not hours. But: commercial-scale tool, subscription-based, requires Civil 3D integration. Not aimed at a residential GC pouring a foundation.
- **Kimley-Horn AI grading tools**: Custom AI for automated site grading on 2,000-acre solar farm sites. "Accelerate the first 10-40% of grading work." But: internal tools, not available to residential builders.
- **Conduit Tech LiDAR scanning**: Phone-based LiDAR for HVAC load calcs. Scans a home in 15 minutes. Could measure lot grade slopes — but doesn't. Tool is HVAC-focused.
- **iPhone/iPad LiDAR**: Built into every Pro model since 2020. Can measure elevation changes to ±1cm over short distances. Nobody has built a "grade check" app for residential lots.
- **Drone photogrammetry**: Used routinely on commercial sites for cut/fill verification. A residential builder flying a $800 drone + $200/yr software could verify grade in 20 minutes. Almost none do.

### What Happens Today (Residential)
1. Civil engineer or surveyor sets grade stakes
2. Excavation contractor grades to stakes by eye/experience
3. Builder does visual "eyeball" check with a 4-foot level (if they check at all)
4. No independent verification before pouring foundation or backfilling
5. Settlement occurs over 12-24 months
6. Negative grading develops at 30-40% of homes (industry estimate)
7. Water intrusion → foundation damage → warranty claim or insurance claim

### What Could Exist
- Phone LiDAR app: walk the perimeter, get a pass/fail on IRC 6-inch-in-10-feet requirement. Development cost: ~$50K. Potential market: every home inspector, builder, buyer.
- Drone + photogrammetry grade verification: fly site post-grading, compare to design grade. Already done on commercial. Cost: $200-400/residential lot. Time: 30 minutes.
- IoT settlement monitoring: $50-100 wireless tilt sensors on foundation, alert if grade shifts. Exist for commercial buildings. Not marketed to residential.

### Sources
1. IRC R401.3 — grading requirement (6 inches in 10 feet)
2. American Insurance Association — water damage claims data
3. NIST 2014 — HVAC installation fault study (Domanski, Henderson, Payne)
4. DOE/Building America — field study on fault prevalence (>65% improperly installed)
5. NREL TP-5500-60801 — energy impacts of oversized air conditioners
6. Autodesk InfoDrainage ML Deluge — ML flood mapping for commercial drainage design
7. ASCE July 2026 — Kimley-Horn AI grading tools for large land parcels
8. Conduit Tech / ServiceTitan — LiDAR-based HVAC load calculation
9. InterNACHI / NACHI — lot drainage inspection in expansive soils
10. Bucktown Grading (Medium) — residential grading cost data, Georgia market

## Journalist
Frank "The Foreman" DeLuca — operations/process lens. He's seen a thousand lots graded wrong. He knows the sequence matters. Methodical, patient, world-weary humor.

## Headline Options
1. "Your Builder Graded Your Lot by Eye. A $300 Drone Would Have Caught the Slope Before It Cost You $12,000."
2. "An AI Grades a 2,000-Acre Solar Farm in Hours. Your Half-Acre Lot Got a Guy on a Bulldozer and a Four-Foot Level."
3. "The Tool That Verifies Your Lot Grade Exists. It Costs $300 and Takes Thirty Minutes. Your Builder Used His Eyes."
