# Research: AI Siding Installation Defect Detection — Catherine Chen

Slug: `ai-siding-install-defect-detection-warranty-gap-2026`
Article number: 917
Journalist: Catherine "Code" Chen (policy & regulation)

## Angle
Fiber-cement siding fails in two ways: the product fails, or the installer fails it. Fifteen years of class-action litigation (CertainTeed's $103.9M WeatherBoards settlement, the six-year HardiePlank multidistrict case that James Hardie won on dismissal) keeps circling the same distinction: the manufacturers' defense in every case is improper installation, and their installation manuals read like legal documents because they are. The manuals specify clearances to the inch, nail placement to a printed line, flashing details at every junction. Almost none of it is verifiable after the wall is finished — blind nailing is literally covered by the next course. AI vision inspection during installation (photo per course, checked against the manufacturer's own spec) is the only practical way to verify the work while it is still visible, and it converts the warranty from a promise into a record.

Kill test: yes. A residing job runs $15,000-$40,000 and the warranty is 30 years non-prorated — but only if the installation met the manual. This tells a homeowner exactly which details to photograph while the crew is on the wall, what the clearance numbers are, and why the inspection has to happen during the install, not after.

## Primary sources (6)

1. **James Hardie HardiePlank installation instructions (HZ5, via Florida Product Approval FL13192)**: blind nailing and face nailing fastener schedules (11ga roofing nail 0.121" x 0.371" HD x 1.75"; siding nail 0.09" x 0.221" HD x 2"); nail line 3/4"-1" for blind nail placement; min 1-1/4" overlap; pinbacks with finish nails only, not a substitute for blind/face nailing; pneumatic fastening — drive snug, under-drive rather than over-drive; hot-dipped galvanized or stainless fasteners.
   - https://floridabuilding.org/upload/PR_Instl_Docs/FL13192_R6_II_HardiePlank-Install-Instr_.pdf

2. **James Hardie general installation requirements (via installer-published checklist, Elite Home Exteriors NW, and 2008 install instructions on Yumpu)**: 6" minimum clearance to finished grade; 2" clearance to roofs, decks, paths, steps, driveways; 1/4" clearance to horizontal flashing — do not caulk that gap; kickout flashing at roof-wall junctions (min 4"x4", 100-110 degree bend, per IRC 905.2.8.3); Z-flashing above window trim; L-flashing at patios/decks; starter strip at proper lap angle; field joints "moderately touching" — install joint flashing, do NOT caulk field joints; flash membrane around window/door openings; 1" gap between gutter end caps and siding.
   - https://www.elitehomeexteriorsnw.com/blog/elite-hardie-siding-installation/
   - https://www.yumpu.com/en/document/view/30237609/2008-hardiplank-lap-siding-installation-instructions

3. **HardiePlank MDL amended complaint (Case 0:12-md-02359-MJD, filed 08/09/13, via InspectAPedia)**: plaintiffs alleged the siding was defectively designed/manufactured such that it prematurely fails — cracking, flaking, delamination, discoloration — allowing water and moisture to penetrate into the structure and damage the underlying structure; alleged James Hardie marketed a 50-year no-problem product while statutes of limitation/repose could shrink effective warranty coverage to as little as one year.
   - https://inspectapedia.com/exterior/Hardiplank-Amended-Complaint.pdf

4. **Bloomberg Law — "HardiePlank Maker Wins Dismissal of Product Claims"**: James Hardie won dismissal in the multidistrict litigation over allegedly defective fiber cement siding; the six-year-old case alleged flaws that trap moisture and reduce adhesiveness; the court found the case unsuitable for class treatment and rejected key expert evidence; individual claims dismissed the following day by Judge Michael J. Davis (D. Minn.).
   - https://news.bloomberglaw.com/product-liability-and-toxics-law/hardieplank-maker-wins-dismissal-of-product-claims

5. **CertainTeed WeatherBoards fiber cement siding class action (via InspectAPedia summary)**: US settlement — CertainTeed to pay $103.9 million; class = structures with WeatherBoards installed on or before September 30, 2013 showing "qualifying damage"; court approval March 20, 2014; eligible members chose between repair-and-replace (replacement siding + $4.75/sq ft for labor/installation) or quick cash ($4.25/sq ft for qualifying-damage areas). Canadian parallel: CAD $7.25 million settlement (Oct 2016, BC/Alberta).
   - https://inspectapedia.com/exterior/Fiber_Cement_Siding_Identification.php
   - https://www.newswire.ca/news-releases/settlement-achieved-with-certainTeed-corporation-in-weatherboardsTM-fiber-cement-siding-class-action-599044271.html

6. **HardiePlank HZ5 nail-line identification (InspectAPedia)**: James Hardie manufactures certain lap siding with an embossed nail line to guide blind-nail placement — and the company warns the nail line "should not be used as a lap line"; the line is covered by the succeeding course, meaning proper nail placement is unverifiable after installation without removing siding.
   - https://inspectapedia.com/exterior/Fiber_Cement_Siding_Identification.php

## Original contribution (novel analysis)
The cross-reference nobody makes: the installation manual is the warranty's enforcement mechanism, and its most critical checks have a ~40-minute verification window. Blind nailing must land in a 3/4"-to-1" nail line that the next course covers permanently. Field joints must have flashing behind them, not caulk — invisible once the wall is done. Kickout flashing at roof-wall junctions is buried behind the siding courses that follow. Every one of the manufacturer's defenses in fifteen years of litigation ("improper installation") points at details that a post-installation inspector cannot see. The novel point: an AI vision check is not competing with the final inspection — it is competing with amnesia. Photograph each course before the next goes on, run the images against the spec checklist (nail line hits, overlap depth, flashing presence, clearance measurements), and the homeowner holds a course-by-course compliance record that neither the installer nor the manufacturer can reconstruct after the fact. No siding AI product marketing makes this temporal argument; they all sell "find defects," which misses that the defects that void warranties are the ones you can only see mid-install.

Also: the CertainTeed settlement's two-tier payout ($4.75/sq ft repair-and-replace vs $4.25/sq ft quick cash) gives a concrete dollar figure for what a failed siding job costs per square foot — usable as the "cost of being wrong" input in the inspection ROI math.

## Costs / actionable
- Residing a typical home: $15,000-$40,000 (market range; varies by region and stories).
- CertainTeed settlement economics as the cost-of-failure benchmark: $4.75/sq ft all-in for repair-and-replace on qualifying damage; a 2,000 sq ft wall area = ~$9,500 in the settlement's own math.
- Hardie warranty: 30-year non-prorated, transferable — contingent on installation per the manual.
- The homeowner's zero-cost version: phone photos of each course before the next is installed, checked against the 16-point list (6" grade clearance, 2" roof/deck clearance, 1/4" flashing gaps uncaulked, kickout flashing present, nails in the nail line, joint flashing not caulk).
- The AI version: drone or phone-based vision inspection services that flag nail placement, flashing, and clearance violations during the install window. (Pricing for siding-specific AI inspection is still emerging; general drone roof/exterior inspection runs a few hundred dollars.)
- IRC 905.2.8.3: kickout flashing at roof-wall junctions, minimum 4" x 4".

## Skepticism
- AI cannot see behind the siding. The failures that matter most — missing WRB, unflashed penetrations, no housewrap laps — are hidden by the time any camera arrives unless the photos were taken during the install.
- Manufacturer installation manuals double as liability shields. Every warranty denial in the litigation record says "improper installation." A photo record could just as easily become the manufacturer's exhibit A as the homeowner's.
- The HardiePlank MDL dismissal shows how hard product-defect claims are to win: six years, rejected experts, no class certified. Installation-error claims against contractors face the mirror problem — proving which course was nailed wrong five years later.
- Vision models trained on one manufacturer's profile (HardiePlank Cedarmill) may misread others; nail-line position, exposure, and overlap vary by product.
- Fiber-cement cutting generates respirable crystalline silica — the install crew's dust practices matter more to health than any app.

## Limitations (to state in article)
- Settlement figures ($103.9M CertainTeed, CAD $7.25M Canada) come from secondary reporting and settlement-administration summaries, not court-published damages findings; CertainTeed denied the product was defective.
- HardiePlank MDL dismissal details from a Bloomberg Law summary; the underlying opinions were not independently reviewed.
- Installation clearance/fastener figures are from the HZ5-zone instructions and installer-published checklists; other climate zones (HZ10) and products differ — verify against the manual for the exact product on the wall.
- No independent field study of AI siding-inspection accuracy exists; the "photograph each course" method is the author's synthesis, not a tested protocol.
- Residing cost range is a national market estimate, not a quote.

## Strongest counterargument (to include)
The entire premise can be turned around. The reason manufacturers publish 40-page installation manuals with tolerances to the quarter inch is not purely building science — it is also legal architecture. Every additional specified detail is another potential "improper installation" finding that voids the 30-year warranty the brochure advertised. An AI system that documents every course to the millimeter does not necessarily empower the homeowner; it may simply produce the high-resolution evidence the manufacturer needs to deny the claim. The CertainTeed settlement paid $4.25-$4.75 per square foot precisely because proving whose fault a failure was — product or installer — had become impossible at scale. More documentation does not resolve that ambiguity; it just moves it to an earlier date with better lighting. And the cruelest version: the homeowners who most need this protection — the ones hiring the cheapest bidder — are the least likely to pay for an AI inspector to watch the crew.
