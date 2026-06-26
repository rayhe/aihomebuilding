# Research: AI Structural Topology Optimization — Residential Material Waste
## Article #406 | Journalist: Priya Greenwood | Beat: Sustainability

### Kill Test
**Does this help someone building or buying a home?**
YES. Homebuilders and architects overdesign structures because prescriptive code tables mandate specific lumber/steel sizes regardless of actual loads. New MIT topology optimization framework demonstrates 33-90% material reductions on structural elements while maintaining or exceeding strength requirements. Actionable for architects considering engineered design alternatives, and for builders evaluating material costs as lumber prices remain volatile.

---

### Core Angle
Your house frame has 30-40% more wood than it structurally needs. Building codes tell framers what size lumber to use — they don't calculate what size the loads actually require. MIT's new topology optimization framework just proved it can cut structural material by up to 90% on bridges and 33% on reinforced concrete beams, running on a MacBook Pro. But the IRC prescriptive code tables that let any framer build without an engineer are the same tables that guarantee overdesign. The carbon cost of that convenience? Over 7% of global CO2 emissions come from construction materials.

---

### Primary Sources

**1. MIT Topology Optimization Framework (June 2026)**
- Published in *Automation in Construction* journal
- Lead: Josephine Carstensen, PhD, Gilbert W. Winslow Career Development Professor in Civil Engineering, MIT
- First author: Zane Schemmer (PhD student)
- Key innovation: Constructability-constrained topology optimization — lets engineers specify max members at a joint, min component sizes, min connection angles
- Multi-material support: assigns steel vs timber per-component (not fractional blends: "You can't have a part that's 72 percent timber and 28 percent steel")
- Material reduction: up to 90% on truss structures
- Case study: Lockport "Upside-Down Bridge" near Buffalo, NY — tested timber-only, steel-only, and hybrid timber-steel designs
- Runs on standard MacBook Pro
- Status: Research; small-scale physical prototypes planned
- Quote (Carstensen): "There's an interplay between the materials you're using, the constructability of designs, and the optimization of the structure. You need to be able to address all three at the same time."
- Source: Knowridge (knowridge.com/2026/06/new-ai-design-tool-could-cut-building-materials-by-up-to-90/), Interesting Engineering

**2. MIT Reinforced Concrete Topology Optimization (April 2026)**
- arXiv:2604.22070v1 — Jewett & Carstensen (same lab)
- Specifically reinforced concrete beams — more directly applicable to residential foundations
- Fabricated and tested physical prototypes
- Results: optimized beams reached loads 36-42% HIGHER than conventional design with SAME material consumption
- Material reduction potential: ~33% while maintaining today's performance requirements
- Quote from abstract: "a viable path forward in reaching carbon neutrality of reinforced concrete construction"

**3. DOE Advanced Framing Reference (energy.gov)**
- Advanced framing (24" OC vs 16" OC, single top plates, two-stud corners) already demonstrated:
  - Materials cost savings: $500-$1,000 per house (1,200-2,400 sq ft)
  - Labor cost savings: 3-5%
  - Annual heating/cooling cost savings: up to 5%
- This is the LOW end of optimization — simple prescriptive changes. Topology optimization goes far beyond.

**4. ASCE Structural Engineering Institute Sustainability Committee**
- White paper explicitly recommends "increased use of topology optimization as a way to avoid over-design and reduce construction material consumption"
- Referenced in arxiv.org/abs/2604.22070

**5. Embodied Carbon Data**
- Construction materials: >7% of global CO2 emissions (2022 data)
- Concrete: 0.034-0.172 kg CO2e per kg (Pinewood Structures data)
- Steel: 1.55-2.46 kg CO2e per kg
- Typical UK house: embodied carbon (materials A1-A3) = 21% of lifecycle emissions
- Concrete accounts for 91% of building structure mass, 74% of lifecycle GWP (mdpi study)
- Steel accounts for 9% of mass but 26% of GWP
- Timber mass timber building: 48 kg CO2-e/m² less than concrete counterpart (Robati & Oldfield)

**6. University of Michigan — Topology Optimization + 3D Concrete Printing**
- NP-3DCP (nonplanar 3D concrete printing) coupled with topology optimization
- Prototypes: "Shell Wall" and "Branch Wall"
- Demonstrates material savings + reduced carbon footprint
- Published in Springer (link.springer.com)

---

### Counterargument (strongest case against)
Topology optimization produces non-standard structural elements. Every custom beam, truss, or joint needs engineering stamp, which adds $3,000-$10,000 per project. For production builders doing 200+ identical homes, the engineering cost amortizes to nothing. For custom one-offs, it may cost more than the material savings. IRC prescriptive tables exist because they eliminate the need for per-project engineering — that democratization matters.

### Limitations
- MIT framework tested on truss structures and bridges, not residential framing directly
- The 90% figure is for optimized trusses vs conventional — residential framing reduction would be lower (probably 20-35% range based on the concrete beam data)
- Physical prototypes are planned but not yet built for the constructability-constrained version
- Runs on MacBook Pro but requires engineering expertise to set up constraints
- No cost data on topology-optimized residential construction

### Novel Contribution
Calculate the material waste in a typical 2,400 sq ft wood-frame home using prescriptive IRC tables vs what topology optimization could theoretically achieve. Use DOE advanced framing savings ($1,000) as floor, and MIT 33% reduction data as ceiling, to bound the realistic savings range.
