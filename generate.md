# generate.md — AI Home Building Content Generation

_How an autonomous AI agent produces, evaluates, and improves articles on the AI Home Building editorial blog._

## Overview

AI Home Building runs a single content-generation cron on a 2-hour interval. Each cycle either drafts a new article, revises an in-progress draft, or performs a site improvement. No human intervention between cycles. A human (Ray) provides editorial direction; the AI agent handles research, drafting, self-critique, revision, and publishing.

## Cron Definition

### `aihome-improve` — Article Drafting & Revision

**Schedule:** Every 2 hours (stagger offset: :20)
**Cron file:** `cron.d/hourly/aihome-improve__interval@2h.md`
**Execution:** Isolated (no main session context)

**What it does:**
- Checks `drafts/status.json` for in-progress work
- If no draft exists: picks an uncovered research thread from `RESEARCH.md`, web searches for real data, picks a journalist from `JOURNALISTS.md` whose beat fits, writes a full draft
- If a draft exists: reads it, scores 1-10 on five dimensions, writes genuinely adversarial criticism, revises, updates status
- Every 3rd article day: does a site improvement instead (tracked in status.json)
- Publishes only when: revisions ≥ 3 AND honest score ≥ 8/10
- Skips image generation — uses CSS gradient placeholder

**Quality gates:**
- Self-critique gate: Propose → Challenge ("Is this the best use of this cycle?") → Proceed, modify, or skip
- Scoring dimensions: Surprising angle? Real data with sources? Distinct journalist voice? Would a reader share this? Anti-AI voice clean?
- Must read `CLAUDE.md` (site architecture), `JOURNALISTS.md` (voice differentiation), `RESEARCH.md` (research threads), `STORY_GUIDE.md` (writing rules)

**File structure:**
```
aihomebuilding/
├── drafts/
│   ├── current.html          # Active draft
│   └── status.json           # Stage, revision count, criticism log
├── articles/                  # Published articles
├── CLAUDE.md                  # Site architecture guide
├── JOURNALISTS.md            # Journalist personas
├── RESEARCH.md               # Research threads (uncovered topics)
├── STORY_GUIDE.md            # Anti-AI voice rules, source standards
├── index.html                # Homepage
├── feed.xml                  # RSS feed
└── sitemap.xml               # Sitemap
```

**The full cron prompt:**

```markdown
Improve the AI Home Building editorial blog at ~/workspace/aihomebuilding/

## Setup
git config, pull origin main

## Context
Read CLAUDE.md, JOURNALISTS.md, RESEARCH.md, STORY_GUIDE.md in the repo for site architecture, journalist voices, research threads, and writing rules.

## Workflow: One Article Per Day, Polished Over Multiple Cycles

Check drafts/status.json in the repo root.

### If no draft exists (or draft was published today already):
- Every 3rd article day: Do a Site Improvement instead (track in status.json)
- Pick uncovered thread from RESEARCH.md, web search for real data
- Pick journalist from JOURNALISTS.md whose beat fits
- Write a full draft, save to drafts/current.html
- Write drafts/status.json
- Skip image generation — use CSS gradient placeholder
- Do NOT publish yet.

### If a draft exists and stage is "draft" or "revising":
1. Read drafts/current.html and drafts/status.json
2. Evaluate harshly — score 1-10
3. Write criticism — be genuinely adversarial
4. Revise the draft incorporating criticism
5. Update status.json
6. Publish decision: If revisions >= 3 AND honestly 8+/10:
   - Copy to articles/SLUG.html, update index.html, feed.xml, sitemap.xml
   - Commit and push to main

## Self-Critique Gate
1. Propose your angle in 1-2 sentences
2. Challenge it — is this the best use of this cycle?
3. Verdict: Proceed, modify, or skip to site improvement

## Rules
- Follow anti-AI voice rules + source citations in STORY_GUIDE.md
- Push to main branch only when publishing
- Today's date only
- Articles newest-first in index.html
- Featured article rotates to newest on publish
```

---

## How the Quality System Evolves

The quality system improves through:

1. **Iterative criticism.** Each article goes through 3+ adversarial revision cycles. The criticism identifies specific weaknesses (factual errors, AI voice tells, weak sourcing) and the next revision addresses them.

2. **Research thread tracking.** `RESEARCH.md` maintains a list of uncovered topics, preventing the agent from recycling angles or missing important areas.

3. **Conversational evolution.** When the human editor identifies problems the automated critique missed, the insight feeds back into future cycles through updated guide files.

What does NOT self-improve (yet): the cron prompt itself is a static markdown definition. The scoring rubric dimensions haven't changed since creation. The publish threshold (8/10) hasn't been raised. These are areas where the system could evolve but currently doesn't.

---

## Current Stats (as of 2026-03-13)

- **79 articles** published
- **Multiple journalist personas** with distinct voices and beats
- **Article publish threshold:** 8/10 after 3+ revision cycles
- **Deployed via:** GitHub Pages (rayhe/aihomebuilding, main branch)
