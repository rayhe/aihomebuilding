# Research Notes: AI Floor Plan Tools and the Aging-in-Place Design Gap

## Article #574 — Elena Vasquez (Architecture & Design)

### Thesis
AI floor plan generators serve over a million users, but none include aging-in-place or accessibility as a design parameter. Building accessibility into a new home at design stage costs $100–$500. Retrofitting the same features later costs $10,000–$50,000+. AI tools could close this gap with a checkbox. None have.

### Key Sources

**1. AARP Home & Community Preferences Survey**
- 77% of people 50+ want to stay in their current home as they age
- Only 49% think they'll be able to
- 9 out of 10 people 65+ want to age at home

**2. Harvard Joint Center for Housing Studies (JCHS)**
- Less than 4% of all US homes offer single-floor living, no-step entries, and wide hallways/doorways — the key features of accessible housing
- Cited by Morningstar/MarketWatch April 2026

**3. Freddie Mac 55+ Survey / Insight Report**
- 1.5 million older households need retrofitting
- 5 essential accessibility features identified by JCHS: step-free entrance, bedroom/bath/kitchen on main level, wide doorways/hallways, lever handles, accessible controls
- "Major retrofitting can be 40 times more expensive than adding simple aging in place features" — 40x multiplier

**4. Montana Disability and Health Program / Visitability Research**
- Planned-in-advance basic access costs $100 for homes on concrete slab, $500 for homes with basements
- Retrofitting an existing house is "usually expensive, may be hard to coordinate during a health crisis, and often is awkward looking"
- "Most stock house plans showing narrow doors already have ample wall space for the builder simply to write in a wider door specification, without re-drawing plans"

**5. NAHB Aging-In-Place Remodeling Checklist / CAPS Program**
- 5' x 5' clear turning space in living area, kitchen, bedroom, bathrooms
- Hallways minimum 36" wide (wider preferred)
- At least one step-free, covered entry
- Doors: 32" clear width (requires 36" door)
- Lever hardware on all doors
- Low thresholds: exterior max 1/2", interior max 1/4"

**6. Cleveland Age-in-Place Criteria (2024 Draft)**
- More specific standards: 42" wide hallways, 5-foot turning radius
- Main bedroom minimum 11.5' x 14.5' for wheelchair accessibility
- 42" wide paved travel path from sidewalk to accessible entry
- Side-by-side laundry on first floor
- Microwave on or under countertop, not above range

**7. Morningstar/MarketWatch — "Planning to age in place? Watch out for these hidden costs" (April 2026)**
- Evan Farr, certified elder-law attorney: "Installing stairlifts, reconfiguring bathrooms, widening doorways and adding entrance ramps may carry a price tag in excess of tens of thousands of dollars"
- "Adding a first-floor bedroom and bath or installing an elevator can rival the cost of a major renovation"

**8. AARP Cost Data**
- Grab bars: minimal cost
- Lever door handles: $20-$25 each
- Step-free entrance: $1,000-$4,000
- Wide doorways: <$100 in materials (new construction), much more in retrofit
- Shower/tub accessibility: $1,000+

**9. myAccessibleHome App (Disability Scoop, June 2026)**
- $1.6M federal funding from NIDILRR (National Institute on Disability, Independent Living, and Rehabilitation Research)
- iOS launched May 2026, Android expected fall 2026
- Uses AR for precise measurements
- Still requires occupational therapist sign-off
- Available only through partnerships, not direct download

**10. AI Floor Plan Tool Audit**
- Maket.ai (1M+ users): Inputs are room types, quantities, square footage, lot shape. NO accessibility parameter.
- Planner 5D: "Smart Wizard" suggests furniture placement based on dimensions. NO accessibility mode.
- RoomGPT: Upload photo, choose style. Pure aesthetic. NO accessibility.
- Homestyler: AI-based staging and 3D visualization. NO accessibility.
- TestFit: Multi-family feasibility with zoning — closest to including accessibility, but targets commercial scale.
- GetFloorPlan AI: 2D sketch to 3D. NO accessibility.
- ARCHITEChTURES: Claims "regulatory" compliance. May include some accessibility but targets multi-family.
- Autodesk Forma: Site massing + analysis. Partial environmental but not aging-in-place.

### Original Contribution
1. **Cost gap calculation**: $100-$500 at design stage vs $10,000-$50,000+ retrofit = 20x to 500x multiplier. For the median case, ~$300 vs ~$25,000 = 83x cost penalty for not designing it in.
2. **Feature audit**: 0 of top 8 consumer AI floor plan tools include aging-in-place as an input parameter. Not one offers a "wheelchair accessible," "aging-in-place," or "universal design" mode.
3. **The demographic math**: 10,000 baby boomers turn 65 every day (US Census). 1.4 million new homes started in 2025. Less than 4% are accessible (JCHS). AI tools generate millions of floor plans annually and embed none of this into their design logic.
4. **The visitability insight**: The Montana data proves that "most stock house plans showing narrow doors already have ample wall space for the builder simply to write in a wider door specification, without re-drawing plans." An AI tool could make this substitution automatically at zero computational cost. It doesn't.

### Strongest Counterargument
AI tools are for early-stage exploration, not construction documents. Accessibility compliance is an architect's or builder's responsibility, not a floor plan generator's. Adding accessibility constraints would reduce the tool's creative freedom and produce less visually appealing layouts. And the 35-year-old homeowner doesn't want to think about being 75.

Counter-counter: (1) The tools are marketed as "build-ready" layouts. (2) The constraints are trivial — a 36" door instead of 32", a 5' turning radius in bathrooms. These don't reduce aesthetic quality; they're invisible in renderings. (3) The 35-year-old is the exact person who should build it in now, because the $300 they don't spend today becomes the $25,000 they spend at 70. (4) Fair Housing Act already requires 7 accessibility features in multifamily — single-family is the gap, and AI tools reproduce it.

### Limitations
- No survey data on what percentage of AI floor plan users actually build from generated plans
- The $100-$500 design-stage cost is for visitability standards (zero-step entry, wide doors, ground-floor bath) — full wheelchair accessibility is more expensive even at design stage
- myAccessibleHome app is too new for outcome data
- Some builders may already apply universal design principles regardless of AI tool output — the tool's omission may not translate directly to built outcomes
