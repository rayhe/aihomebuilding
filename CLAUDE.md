# CLAUDE.md — AI Home Building Site Architecture

## Overview
AI Home Building is an editorial research blog covering the intersection of artificial intelligence, robotics, and residential construction. Built on Bootstrap/Cloudflare Pages.

## File Structure
```
aihomebuilding/
├── index.html              # Homepage with article grid (newest first)
├── style.css               # Original Bootstrap theme styles
├── bg.webp                 # Background image asset
├── favicon.png             # Site favicon
├── articles/               # Individual article pages
│   ├── ai-architectural-design.html
│   ├── construction-workforce.html
│   └── ai-project-management.html
├── images/                 # Hero images for articles
│   ├── ai-architectural-design.jpg
│   ├── construction-workforce.jpg
│   └── ai-project-management.jpg
├── css/                    # Bootstrap & animation CSS
├── js/                     # Bootstrap JS bundle
├── fonts/                  # Web fonts
├── img/                    # Original template images
├── functions/              # Cloudflare Pages functions
├── CLAUDE.md               # This file
├── JOURNALISTS.md          # Fictional journalist roster
├── RESEARCH.md             # Research threads & topics
└── DESIGN.md               # Visual identity & roadmap
```

## Adding a New Article

### 1. Create the article HTML
Copy an existing article from `articles/` as a template. Key elements:
- Hero image header with gradient overlay
- Badge with category (Architecture & Design, Construction Tech, etc.)
- Playfair Display for headlines, Inter for body text
- Pull stats for key data points
- Back link to index.html
- Dark mode support via `data-theme="dark"` on `<html>`

### 2. Add hero image
- Generate: `$JARVIS_BIN_DIR/imagine "DESCRIPTION" --orientation landscape`
- Copy to `images/SLUG.jpg`
- Reference as `../images/SLUG.jpg` from article pages

### 3. Update index.html
- Add a new `<article class="article-card">` in the `.article-grid` section
- **Newest articles go FIRST** (reverse chronological)
- If the new article is the most important, move it to the featured spot
- Include: image, badge, headline link, excerpt (1-2 sentences), byline with journalist name and date

### 4. Date rules
- **Always use today's actual date** — never future dates
- Format: "March 8, 2026" (full month name, no leading zeros)

## Style Conventions
- **Accent color:** #FF6B35 (construction orange)
- **Headlines:** Playfair Display, 800 weight
- **Body:** Inter, 400 weight, 1.05rem, line-height 1.8
- **Pull stats:** 2rem, 800 weight, accent color, centered with border top/bottom
- **Cards:** 12px border-radius, subtle shadow, hover lift effect
- **Dark mode:** CSS custom properties, toggled via localStorage

## Journalist Assignment
Pick from `JOURNALISTS.md` — match the journalist's beat to the article topic. Each journalist has a distinct voice and style.

## Categories
- Architecture & Design
- Construction Technology
- Project Management
- Sustainability & Green Building
- Workforce & Labor
- Policy & Regulation

## Deployment
Push to `main` branch → Cloudflare Pages auto-deploys. No build step needed — it's static HTML.

## Self-Improvement Guidelines
Each hourly cycle should:
1. **Check RESEARCH.md** for untouched topics
2. **Pick a journalist** whose beat matches
3. **Research real data** (web_search for current stats, company news, reports)
4. **Write the article** with engaging prose, real numbers, pull stats
5. **Generate a hero image** and add to images/
6. **Update index.html** with the new card (newest first)
7. **Consider site improvements** — typography, navigation, interactivity, mobile UX
8. **Update this file and DESIGN.md** if you discover better approaches
