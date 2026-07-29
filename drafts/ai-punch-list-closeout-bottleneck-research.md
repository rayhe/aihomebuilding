# Research: AI Punch List / Closeout Bottleneck

## Angle
Your builder spends 3-4 hours turning a walkthrough into emails. An AI does it in 20 minutes. But the real cost isn't the labor — it's the $138/day in construction loan interest ticking while the punch list drags.

## Journalist: Frank DeLuca (Project Management & Operations)

## Key Data Points

### Closeout Timeline
- Construction closeout typically lasts 30-60 days (Neumann Monson Architects)
- AIA A201-2017 Section 9.8.2 requires contractor to prepare initial punch list
- Punch list triggered at 95-98% completion (industry standard)
- "Saving all inspections until closeout can create hundreds of items and weeks of extra work" (Smartsheet / construction experts)

### Carrying Cost Math (Original Analysis)
- NAHB AD&C Survey Q1 2026: Speculative single-family construction effective rate = 11.22%
- Pre-sold single-family construction effective rate = 11.68%
- Median new construction home ~$450K (use $600K for custom builder scenario)
- Construction loan at 75% LTC = $450,000
- Daily carrying cost: $450,000 × 0.1122 / 365 = $138.33/day
- 14-day closeout drag: $1,937 per home
- 30-day closeout drag: $4,150 per home
- Builder doing 8 homes/year × $1,937 = $15,496/year in avoidable carrying costs

### CountBricks Case Study (Oak Ridge Custom Home)
- 3,600 sq ft craftsman, 172 days
- 91 punch items logged, 87 closed before final inspection
- Average task closure time: 36 hours
- Retainage released 7 days earlier than contract allowed
- Builder saved estimated $6,465 in avoided rework labor

### WalkPunch (launched April 2026)
- SaaS by Archieboy Holdings, LLC
- Converts walkthrough video → AI-generated trade-sorted punch lists
- Uses OpenAI Whisper for transcription + GPT for item extraction
- Old way: notes → spreadsheet → emails = 3-4 hours
- WalkPunch: upload → review → send = ~20 minutes
- Pricing: Free (1 project, 10 items), Starter $29/mo (unlimited), Pro $79/mo (PDF ZIP by trade)
- Evidence frames captured from video at timestamp of each item

### Fieldwire (by Hilti)
- 4,000,000+ projects worldwide
- Punch list management with photo annotation, PDF reports, two-step verification
- Primarily commercial but used in residential

### Other Tools
- PlanRadar, monday.com, CountBricks
- Most designed for commercial, adapted for residential

### Closeout Delay Factors (Neumann Monson)
1. Lead times for replacement materials
2. Demolition of completed work to fix underlying issues
3. Code requirements not caught in drawings
4. Documentation gaps (warranties, as-builts, O&M manuals)

### The Problem Statement
- Most residential builders still use clipboards, spreadsheets, and email
- Punch list creation is manual: walk site with clipboard and camera, photograph each deficiency, type notes into spreadsheets, sort by sub, email assignments
- Transcription errors, missed items, coordination delays
- No formal tracking = items fall through cracks
- Retainage ($15K-50K on a typical home) held until all items resolved

### Counterargument
- Small custom builders (<10 homes/year) may not justify software subscription
- AI transcription can miss context (builder narrates "this is fine" and AI flags it)
- Adoption barrier: many builders are paper-first, phone-averse
- WalkPunch is 3 months old, no independent verification of claims

### Limitations
- NAHB carrying cost rates are national averages; regional variation significant
- CountBricks case study is vendor-provided, not independently verified
- WalkPunch has no published user count or adoption data
- No longitudinal study comparing AI vs manual punch list outcomes

## Sources
1. NAHB AD&C Survey Q1 2026 (nahb.org)
2. Neumann Monson Architects - "4 Factors that Slow Construction Closeout"
3. Smartsheet - "What Is a Construction Punch List"
4. WalkPunch press release (EIN Presswire, April 21, 2026)
5. CountBricks - New Home Punch List guide
6. AIA A201-2017 General Conditions
7. HousingWire - "AD&C credit tight in Q1" (May 2026)
8. monday.com - Construction Punch List Guide
