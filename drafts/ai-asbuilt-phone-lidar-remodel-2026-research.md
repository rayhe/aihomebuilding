# Research: AI as-built documentation from phone LiDAR scans for remodels

## Slug
ai-asbuilt-phone-lidar-remodel-2026

## Journalist
Elena Vasquez (Architecture & Design)

## Kill test
Does this help someone building or buying a home? YES. A homeowner planning a remodel currently pays $3,500-$5,000 for an as-built survey (Letter Four) or $0.60-$1.50/sq ft (asbuiltdrawings.com) before an architect will even start design. Phone LiDAR + cloud drafting (Canvas $0.15-$0.30/sq ft, delivered in 3 days) collapses that line item by an order of magnitude. Homeowners can walk in with their own measured drawings.

## Novel contribution (original analysis)
Cost-per-square-foot comparison of traditional as-built survey vs phone-scan cloud drafting for a 2,000 sq ft home, nobody has run side by side:
- Canvas by Occipital: $0.15/sq ft (SketchUp forum user report) = ~$200 2D floor plan / $300 3D SketchUp-Revit file for 2,000 sq ft (engineering.com, 2,800... verified: engineering.com says $200 2D / $300 3D for 2,000 sq ft home, 3-day turnaround, 30-min scan)
- Traditional residential as-built survey: $0.60-$1.50/sq ft 2D, $0.90-$2.00/sq ft 3D (asbuiltdrawings.com) = $1,200-$3,000 for 2,000 sq ft; Letter Four (CA architecture firm) quotes $3,500-$5,000
- Crest Real Estate cites $2-$3/sq ft = $4,000-$6,000 for 2,000 sq ft
- So phone-scan is roughly 10-15x cheaper and 3 days vs weeks of scheduling
- DIY subscription path: Polycam Pro $79.99-$99/year (free unlimited spatial captures on free tier per SlashGear) + architect spot-check of dimensions, but accuracy ceiling is phone hardware

## Accuracy reality check (the limitation section)
- IT-Jim RoomPlan analysis: measurement drift up to +/-5 cm per wall; walls modeled as uniform 16 cm thick regardless of reality; exterior walls wrong; rooms over ~9x9 m (30x30 ft) not designed for single scan, drift grows; auto-straightens non-perpendicular walls (distorts real geometry); doors/windows merge incorrectly; ceilings/skylights not captured
- Architizer (RoomScan): sufficient for feasibility studies, but architects round to 1/16 inch for design-phase drawings; RoomScan added High-Precision mode with laser-measure spot checks
- AEC Magazine on Polycam: inch-level accuracy claim for single rooms; limitations for large scenes, stitching drift across multiple rooms; "Would I use it on a major airport refurbishment? Only as a quick rough."; trajectory toward scan-to-BIM with IFC export
- SketchUp forum: Canvas on iPhone 12 mini (no LiDAR) was "off by 1/4 inch over 5 ft"; real interior designer still double-checks dimensions; scan alone can't tell you where pipes, wiring, or structural members hide inside walls, the thing that actually torpedoes remodels

## What phone scan as-builts can't see
- Nothing behind drywall: plumbing runs, electrical, ductwork, structural members. Every remodel horror story is what you find when the wall comes off.
- Moisture, rot, termite damage inside wall cavities
- Load-bearing determinations: still need a structural engineer
- Permit history and unpermitted work

## Workflow for a homeowner planning a remodel
1. Walk the house with iPhone Pro / iPad Pro (LiDAR), 30-60 min for a 2,000 sq ft house (engineering.com timed ~30 min)
2. Upload to Canvas ($200 2D / $300 3D), 3-day turnaround (20% rush surcharge for next-day)
3. Or DIY with Polycam (free tier unlimited room captures; Pro for CAD/BIM exports: AutoCAD, SketchUp, Revit, Rhino, IFC)
4. Spot-check critical dimensions with a laser measure; bring the set to the first architect meeting instead of the tape-measure stage

## Sources (primary)
1. Engineering.com: "Canvas Is Without Measure: 3D CAD Model of House Using iPhone" — https://www.engineering.com/canvas-is-without-measure-3d-cad-model-of-house-using-iphone/ — timed 30-min scan, $200/$300 for 2,000 sq ft, 3-day delivery
2. IT-Jim: Apple RoomPlan API limitations — https://www.it-jim.com/blog/apple-roomplan-api/ — +/-5 cm drift, 16 cm uniform wall thickness, 9x9 m room limit, rectangular simplification
3. AEC Magazine: Polycam for AEC — https://aecmag.com/reality-capture-modelling/polycam-for-aec/ — inch-level, IFC export trajectory, "quick rough" on large jobs
4. asbuiltdrawings.com residential pricing — https://asbuiltdrawings.com/residential-as-built-survey-pricing-packages/ — $0.60-$1.50/sq ft 2D, $0.90-$2.00/sq ft 3D
5. Letter Four (CA architect) fee guide — https://www.letterfour.com/resources/building-or-remodeling-a-home-in-california — as-built survey $3,500-$5,000
6. SketchUp forum: interior designer using Canvas, off 1/4" over 5 ft, double-checks dimensions — https://forums.sketchup.com/t/importing-room-scans/213204
7. Alterpex: average $0.50-$3/sq ft depending on technology — https://alterpex.com/blog/as-built-drawings-cost
8. Architizer Journal on RoomScan: feasibility-grade, not design-phase precision; high-precision laser check mode — https://architizer.com/blog/practice/tools/architects-app-of-the-week-draw-a-plan-in-seconds-with-roomscan-pro/amp/
9. Crest Real Estate: $2-$3/sq ft for as-built drawings — https://www.crestrealestate.com/an-expert-guide-to-understanding-as-built-drawings/

## Strongest counterargument
Precision below design-phase tolerance means scan as-builts are a starting point, not a deliverable. A 5 cm per-wall drift across a 30-foot wall compounds to inches of error — enough to blow cabinet runs and tile layouts. Worse, they give homeowners false confidence: a beautiful, plausible floor plan that looks authoritative but isn't verified. The real remodel killers (unpermitted work, hidden structure, rot, knob-and-tube wiring) are invisible to any scan. The savings are real only if the architect still verifies.
