# Research: AI Floor Plans and the Death of the Threshold

## Slug: ai-floor-plan-threshold-death
## Journalist: Elena Vasquez
## Date: July 18, 2026

## Thesis
AI floor plan generators optimize every square foot for named, functional rooms — bedrooms, kitchens, living rooms — and systematically eliminate or compress the unnamed in-between spaces (foyers, vestibules, mudrooms, landings, alcoves, hallway niches) that traditional architecture used to create psychological transitions. Neuroscience research on the "doorway effect" and event segmentation shows these transitional spaces are cognitively significant: they help the brain close one context and open another. When an AI treats them as wasted square footage, the resulting home may meet code and maximize efficiency, but it eliminates the spatial grammar that makes a house feel like a home.

## Kill Test
Does this help someone building or buying a home? YES — directly. Anyone reviewing an AI-generated floor plan needs to understand that the "efficient" layout missing a foyer, vestibule, or transition zone isn't just losing square footage — it's losing a psychological mechanism that affects how comfortable the home feels day-to-day. Actionable: what to look for, what to demand from a plan, how much transitional space to budget.

## Primary Sources

### 1. Gabriel Radvansky — "Doorway Effect" Research (University of Notre Dame)
- Controlled experiments show participants more likely to forget information when passing through a doorway vs. traveling the same distance within a single room
- Explanation: not distraction, but "context updating" — the brain registers a new spatial context and reduces accessibility of the previous context
- Published in: Quarterly Journal of Experimental Psychology, multiple studies from 2006-2011
- Implication: doorways/thresholds are cognitive reset points that help organize memory and attention

### 2. UCL Analysis (Bond University replication, 2021)
- Tried to replicate doorway effect in physical and virtual rooms
- Found: it's not the doorway itself but the *change of environment* that causes forgetting
- "It's more efficient for us only to retrieve information about the current situation, rather than remembering all the information from everything we've recently experienced."
- Implication: transitional spaces that create environmental change serve a cognitive function — compressing them into non-spaces removes the environmental shift

### 3. Psychology Today — "From Horror to Healing: The Neuroscience of Liminal Spaces" (May 2026)
- Miriam Hoffman's research on "places of pause" — benches at decision points can encourage cognitive processing
- "Architecture offers valuable strategies for managing uncertainty. By intentionally designing transitions — limiting simultaneous boundary moments, increasing context visibility, and creating spaces for reflective pause — we can move through change with greater psychological resilience."
- Key refs: Buckley et al. (2022) in Cognition — "The spatial layout of doorways and environmental boundaries shape the content of event memories"
- The brain interprets liminal spaces the same way it processes life transitions

### 4. Frontiers — "Walking through Architectural Spaces: Impact of Interior Forms on Human Brain Dynamics"
- Mobile EEG study of people walking through different interior forms in VR
- Strong impact of spatial transitions on anterior cingulate cortex (ACC) activity
- Theta band activity in ACC correlated with feature types and geometry
- Evidence that architectural transitions are neurologically processed, not just aesthetically perceived

### 5. Medium Article on Cognitive Thresholds in Architecture
- Thresholds function as "reset mechanisms" — close one context, open another, reallocate attention
- "When the brain does not care about architectural categories. It responds to perceptual change."
- Thresholds created through: spatial compression/expansion, lighting shifts, material transitions, acoustic differences, ceiling height variation
- Open plans without clear segmentation: "context boundaries blur, memory encoding becomes less distinct, attention lacks reset points. This increases cognitive load."
- Traditional architecture handled this through: vestibules, courtyards, layered entry sequences, semi-public zones
- Key insight: "graduated transitions" are more effective than sharp breaks — the brain adjusts incrementally

### 6. AI Floor Plan Generator Landscape (2026)
- **Maket.ai**: 1M+ registered users, generates layouts from room types, quantities, target square footage, and lot shape. Outputs: labeled rooms with dimensions. No evaluation of transitional quality.
- **TestFit**: multi-family feasibility — inputs site dimensions, zoning, setbacks, unit mix; outputs unit counts and parking ratios. Treats circulation as overhead.
- **Snaptrude**: generates compliant BIM-ready floor plans from text prompts or Excel room schedules, factors in adjacencies, zoning, building codes. Focus on massing, core generation, unit packing. Architects "reclaim 8-12 hours per week."
- **ARCHITEChTURES**: residential optimization with regulatory compliance.
- Common pattern: ALL tools take a list of rooms as input. None ask about transitional spaces, arrival sequences, threshold quality, or spatial decompression zones.

### 7. RFP-A Evaluation Framework (MDPI, 2026)
- "Residential Floor Plan Assessment" framework evaluates AI-generated plans on:
  1. Room number compliance
  2. Connectivity (graph edit distance)
  3. Room locations (coordinate system)
  4. Geometric features (IoU)
- Missing: ANY metric for transitional space quality, threshold design, or spatial sequence
- The framework literally evaluates whether the right rooms exist in the right places — not whether moving between them feels human

### 8. Architectural Programming Standards
- Standard architectural programming: enclosed spaces get 10-30% circulation added
- More than 50% enclosed → add 30% circulation; between 20-50% → add 15-25%; less than 20% → add 10%
- These percentages are treated as overhead, not as design space
- The framing matters: "circulation" implies movement between destinations, not places worth being

### 9. Pro Builder / Housing Design Matters
- "Too much square footage in a poorly laid out home can cause excessive circulation and leave useless space in hallways and stairways."
- Industry framing treats hallways, stairs, landings as "useless space" — exactly the language AI tools internalize
- When going from one-story to two-story: "Not only is there additional square footage in the stairs themselves, the path to the stairs takes up space on both levels. Not exactly valuable square footage."

### 10. Coohom / Foyer Design
- Modern design increasingly treats foyer as "interface" — "a permissions layer that calibrates mood, privacy, and pace"
- Micro foyer airlock: 4-5 feet deep vestibule that "isolates the main living space from the exterior door, helping control mess, noise, and visual exposure"
- Even this framing is functional, not experiential — the architectural tradition of the foyer as an arrival *experience* is being compressed into an "airlock"

## Original Analysis

### The Square-Footage Efficiency Trap
AI floor plan tools accept input as a list: 3 bedrooms, 2 bathrooms, kitchen, living room, dining room, garage. Total: 2,200 sq ft.

What's NOT on that list:
- The 40 sq ft vestibule between front door and living room
- The 25 sq ft landing at the top of the stairs
- The 6-foot-wide mudroom buffer between garage and kitchen
- The alcove where the hallway widens before the master suite
- The 3-foot compression point where the ceiling drops before the kitchen opens up

These un-named spaces don't appear in room lists. They don't have program requirements. They don't show up in zoning calculations. And AI tools, which optimize against a room list, have no incentive to create them.

### Quantifying the Loss
A well-designed 2,200 sq ft home might dedicate 150-250 sq ft to deliberate transitional spaces (beyond minimum code circulation). That's 7-11% of the floor area.

An AI-optimized 2,200 sq ft plan allocates that space to room area — bigger bedrooms, larger closets, expanded kitchen island. The plan scores better on every metric AI tools track: room sizes, efficiency ratio, program compliance.

But the home feels different. You open the front door and you're *in* the living room. The garage door opens directly into the kitchen. The hallway from bedrooms to bathroom is 36 inches wide and 14 feet long — minimum code. The stairs arrive at a landing that immediately becomes a hallway.

### What AI Tools Would Need to Fix This
1. A "spatial sequence" metric — evaluating not just what rooms exist, but how moving between them feels
2. Threshold quality scoring — does the plan create meaningful transitions between public/private, indoor/outdoor, active/quiet zones?
3. Proportional analysis at transition points — does the ceiling height, width, or material change create a perceptual shift?
4. Arrival sequence evaluation — what is the experience of entering the home from the front door? From the garage?

None of the current tools (Maket, TestFit, Snaptrude, ARCHITEChTURES) include any of these metrics.

## Strongest Counterargument
Square footage costs money — roughly $150-350/sq ft for new construction. Those 200 sq ft of transitional space cost $30,000-70,000 at median build costs. In a market where affordability is the primary barrier to homeownership, arguing for "ceremonial space" is arguably a luxury position. Many buyers would rather have a larger kitchen or an extra closet than a vestibule they walk through in 2 seconds.

Additionally, open-concept design — which deliberately eliminates transitions — has been the dominant buyer preference for 15+ years. The market has spoken, and it wants fewer walls, not more threshold experiences.

## Limitations
- No direct study comparing AI-generated plans vs. architect-designed plans specifically on transitional space allocation
- The doorway effect research was conducted in controlled lab/VR settings, not in residential environments over months of occupancy
- "How a home feels" is subjective and varies by culture, age, and individual
- Efficiency metrics for AI tools are evolving rapidly; future versions may incorporate spatial quality measures
