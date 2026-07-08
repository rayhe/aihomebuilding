# Research: AI Safety Cameras on Construction Sites — The 95% Problem

## Angle
DroneDeploy's Safety AI uses visual language models to spot OSHA violations in daily construction site imagery with claimed 95% accuracy. The technology is genuinely novel — it reasons about scenes rather than just detecting objects. But 95% means 1 in 20 violations walks past the algorithm, the system hasn't been independently audited, workers see it as surveillance, and the companies that need it most (small and mid-size builders) probably can't afford it.

## Journalist: Jake "Jackhammer" Kowalski (Construction Technology)

## Primary Sources

### 1. MIT Technology Review — "How generative AI could help make construction sites safer" (Jul 2, 2025)
- DroneDeploy Safety AI launched Oct 2024, deployed on hundreds of US sites
- Uses visual language models (VLMs) — LLMs with vision encoders
- Claims 95% accuracy on OSHA violation detection
- NOT independently audited. Lorenzo "hopes to have his methodology independently audited by safety experts"
- "Golden data set" of tens of thousands of OSHA violation images
- 10 trained problem areas including ladder usage
- "Over a dozen layers of questioning" just for ladder safety analysis
- VLM can reason about unsafe behavior, not just detect objects
- Example: can tell if person is on top rung of ladder (older ML couldn't)
- Deployed in US, Canada, UK, South Korea, Australia
- Philip Lorenzo, exec at DroneDeploy, built the tool
- Ladders responsible for 24% of construction fall deaths

### 2. NYU AI4CE Lab — Chen Feng
- "Ninety-five percent is encouraging — but how do we fix that remaining 5%?"
- VLMs have "some pretty fundamental issues": hallucinations, edge cases
- Good at object detection, struggle with spatial reasoning, 3D from 2D images
- Lack "common sense" about visual scenes
- Referenced "Eyes Wide Shut?" paper (Shengbang Tong, Yann LeCun coauthor)

### 3. Safeguard AI (Jerusalem) — Competitor
- Traditional ML approach (no VLMs), considers it more reliable
- CEO Izhak Paz: "old computer vision is still better"
- ~3,500 sites in Israel, US, Brazil
- Training new hazard category takes weeks to 6+ months
- Mid-market and above builders only (affordability barrier)
- Uses real-time camera footage, AI agent pushes alerts to mobile devices

### 4. Buildots (Tel Aviv)
- Visual progress reports, not safety analysis
- "Our system needs to be 99% — we cannot have any hallucinations" (CEO Roy Danon)
- ~50 builders with revenue >$250M, 300+ projects
- Uses older labeled training data ML (not VLMs)

### 5. Worker Perspective
- Aaron Tan (concrete project manager, Bay Area): workers fear "bossware"
- "At my last company, we implemented cameras as a security system. And the guys didn't like that. They were like, 'Oh, Big Brother.'"
- Safety managers often responsible for up to 15 sites at once

### 6. Safety Statistics
- 1,000+ construction workers die on US job sites annually
- Falls are #1 killer, ladders cause 24% of fall deaths
- OSHA's "Fatal Four": falls, struck by object, electrocution, caught-in/between

## Kill Test
Does this help someone building or buying a home? YES — if you're a GC or safety manager, this tells you exactly what AI safety tools can and can't do. If you're a homeowner hiring a builder, asking "do you use AI safety monitoring?" is a new quality signal.

## Original Contribution
Cross-referencing the 95% accuracy claim against OSHA's actual enforcement data to calculate how many violations per project the 5% miss rate lets through on a typical residential site.
