# Research: AI Virtual Draw Inspections — the lender's draw inspector is now in the borrower's phone

**Slug:** virtual-draw-inspection-borrower-phone-lender-2026
**Journalist:** Frank "The Foreman" DeLuca (project management & operations beat)
**Date:** September 6, 2026

## Topic
Construction lenders are replacing third-party on-site draw inspectors with AI-authenticated virtual inspections that the borrower performs on their own phone. Truepic Vision (authenticated photo/video capture with geolocation, timestamp, and tamper detection) integrated with Cotality's Mercury Network and Collateral Management System in June 2026 to serve construction and renovation draws. DroneDeploy's Progress AI uses vision-language models to auto-validate pay applications from drone/360 captures.

## Kill test: does this help someone building or buying a home?
Yes. If you're a custom-home builder or owner-builder financing a project: draw money used to arrive 7-10 business days after request; virtual inspection collapses that to hours, and one lender funds draws in under 30 minutes from the borrower's phone. But you now perform the inspection yourself, under fraud-detection software, with a shared "risk intelligence network" watching. Know the tradeoff before your first draw.

## Primary sources (5)

1. **Truepic Vision: Accelerate Draw Inspections for Construction Lending** (truepic.com/vision/construction-lending) — median turnaround 24 hours; borrower performs inspection on own device at own time; photos validated at project address, each unique. Quotes: Chris Marohn, VP Operations: "Turnaround time is less than seven minutes from getting the email to sending the Truepic inspection. We can get a draw turned around in under a half hour, ready to fund." Jacob Sherick, Senior Manager, Construction Feasibility & Draws.
2. **Truepic and Cotality strategic integration, announced June 23, 2026** (GlobeNewswire) — Truepic Vision embedded in Cotality's Mercury Network and Collateral Management System; supports construction and renovation draws, home equity, 1004D final inspection alternatives, natural disaster documentation, default servicing. Sage Nichols (Cotality SVP, Collateral Solutions): lenders get "trusted, verified imagery in today's era of increasing AI-generated fraud risk"; turnaround "from days or weeks to hours." Craig Stack (Truepic founder): authenticated visual data becomes "foundational to modern lending infrastructure." Platform includes fraud detection/authentication testing on all visuals and a "risk intelligence network to help identify bad actors and fraud techniques in real time."
3. **DroneDeploy Progress AI** (Equipment World; AEC Magazine, July/August 2025 edition) — vision-language models interpret drone flights and 360 walkthroughs; "95% accurate" auto-generated progress reports; beta customers used it to "validate pay apps" and track milestones. James Stripe (CPO): progress data including percent complete by trade/location available minutes after upload.
4. **Rabbet 2024 (via prior site research, thread 54)** — $280B annual cost of slow payments in U.S. construction; draw requests take 7-10 business days. (Context baseline for the before/after.)
5. **Cotality context** — formerly CoreLogic; Mercury Network + CMS serve mortgage lenders nationwide. (Company identity confirmed in GlobeNewswire release.)

## Original contribution (novel calculation)
**Draw-float carrying cost.** Assumptions, all stated: $600,000 construction loan, 7% APR, 8 draws over the project, each draw release accelerated by 6 business days (≈8 calendar days) vs. traditional third-party inspection, average outstanding balance during draw cycles $300,000.
- Daily interest: $300,000 × 7% / 365 = $57.53/day
- Float recovered: 6 business days ≈ 8 calendar days × 8 draws = 64 calendar days
- **≈ $3,680 in pure interest per project** — before counting the plumber who walks on day 3 of a 10-day draw.
Methodology is the contribution: nobody publishes the per-project interest math of virtual vs. on-site draw inspection.

## Skepticism / what's unproven
- Truepic's fraud-detection and "risk intelligence network" claims are vendor claims. No public third-party audit of false-positive rates; a borrower flagged by the fraud network has no published appeal path.
- Virtual inspection verifies *that work exists*, not *that work is right*. A photo can't confirm the waterproofing membrane was lapped correctly or the shear wall nailing schedule was followed. Faster draws can fund faster mistakes.
- The model shifts inspection labor onto the borrower (unpaid), and the borrower now performs a task that used to carry a third-party inspector's professional liability.
- Concentration risk: one dominant integration (Cotality Mercury/CMS + Truepic) becoming the default rails for draw verification.

## Strongest counterargument
The third-party draw inspector was never the hero of this story. Draw inspectors verify coarse percent-complete to protect the lender's collateral position; they never did QA. Virtual inspection does the same coarse job faster and cheaper, which is exactly what lenders needed — but framing it as "smarter inspections" overstates what changed. What changed is speed and cost, not insight. The residential builder who thinks the lender's 24-hour photo review substitutes for a real site QA walk is buying a false sense of security at exactly the moment money is moving fastest.

## Limitations
- Carrying-cost math uses national-average assumptions; actual savings vary with rate, draw count, and lender behavior.
- Truepic customer count and market penetration not disclosed; this is an early-adopter story, not a market-wide transformation yet.
- Community-bank draw processes (the bulk of custom-home lending) remain mostly manual — adoption gap noted in thread 54 applies here too.

## Proposed headline
"Your Lender Isn't Sending a Draw Inspector Anymore. They're Texting You a Link."

## Angle
Twenty years of projects going sideways has taught Frank that nobody reads the draw paperwork. Now the paperwork reads you. Cold open: a draw inspector used to drive out, walk the slab, bill $200, and take 5 days. Now your phone buzzes with a link, you photograph the framing, the fraud algorithm authenticates the pixels, and the wire moves before lunch. The money got faster. The question is who absorbed the risk the inspector used to carry.
