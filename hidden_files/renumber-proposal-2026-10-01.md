# AI Home Building: renumber-vs-drain proposal (2026-10-01)

Decision requested: **renumber** (recommended) vs drain the 6 unnumbered queue heads.

Recommendation: renumber. Draining deletes 6 finished, critiqued, hero-ready articles
and throws away their scheduled slots. Renumbering costs one status.json edit and
restores the 1/day pipeline immediately (one article can ship today, 2026-10-01).

## Verified facts (read from drafts/status.json 2026-10-01 ~12:15 PDT)

- Queue depth: 212 entries in `ship_ready`.
- Unnumbered heads: **6** (no `article_number`): ids 769-773 with ship_after
  2026-09-27 .. 2026-10-01 (all 5 past-due), plus
  `ai-window-placement-shading-design-cooling-2026` (no date, phase null).
- #787 is double-claimed:
  - `ai-manual-j-oversized-ac-20-minute-load-calc-2026` (completed 2026-09-06T02:30, earlier) -> ship 2026-10-11
  - `virtual-draw-inspection-borrower-phone-lender-2026` (completed 2026-09-06T20:45, later) -> ship 2026-10-20
- Free article numbers (never published, not in queue, not in index.html):
  770, 771, 772, 773, 779, 786, 800, 829, 830, 837-842, 850, 856-859, 973.
  (Numbers 756-769 are published articles; 769 = zone-zero-five-feet, published 2026-09-28.)
- Open calendar slots (1/day): Oct 1 (today), Oct 25, Nov 26, Nov 27, Dec 4, Dec 5, ...
  (Oct 9 holds two articles 782+783; left untouched.)
- Numbers are NOT chronological on this site (#753-755 ship Nov 7-9 while #774
  ships Oct 2), so head-adjacent free numbers with later dates are normal.

## Proposed renumber map (no numbered entry is touched except the #787 duplicate)

| # | slug | old ship_after | new number | new ship_after | why |
|---|------|----------------|-----------|----------------|-----|
| 1 | ai-simulator-rookie-crew-hiring-screening-2026 | 2026-10-01 | 770 | 2026-10-01 (today) | phase SHIP, gates re-verified, hero real JPEG; fills today's open 1/day slot |
| 2 | solar-shade-act-ai-shadow-model-2026 | 2026-09-27 | 771 | 2026-10-25 | legacy-markup blocker removed 2026-09-29, hero real JPEG |
| 3 | ai-concrete-carbon-mix-optimization-2026 | 2026-09-28 | 772 | 2026-11-26 | hero real JPEG, gates pass |
| 4 | ai-delivery-dispatch-late-lumber-idle-crew-2026 | 2026-09-29 | 773 | 2026-11-27 | hero real JPEG, gates pass |
| 5 | ai-voice-agents-receptionists-missed-calls-contractor-2026 | 2026-09-30 | 779 | 2026-12-04 | hero_hash present |
| 6 | ai-window-placement-shading-design-cooling-2026 | none | 786 | 2026-12-05 | phase null -> set to ship_ready; hero real JPEG |

## #787 duplicate resolution

- Keep #787 = `ai-manual-j-oversized-ac-20-minute-load-calc-2026` (completed first,
  2026-09-06T02:30; ship 2026-10-11 unchanged).
- Renumber `virtual-draw-inspection-borrower-phone-lender-2026` to **#800**,
  keep ship_after 2026-10-20 (that date is free: neighbors #795 Oct 19, #796 Oct 21).
- Normalize its key to `article_number` (currently `number`), matching convention.

## Known gap NOT in this proposal (flagged for a later run)

- #785 `ai-roof-measurement-bid-referee-2026` has an article number but phase null
  and no ship_after. Suggested follow-up: assign 2026-12-06. Left out of this
  approval to keep the decision atomic.

## Exact apply operations (run on Ray's yes; do NOT run without approval)

```bash
cd ~/workspace/aihomebuilding
python3 - <<'EOF'
import json
p = 'drafts/status.json'
s = json.load(open(p))
renumber = {
  'ai-simulator-rookie-crew-hiring-screening-2026': (770, '2026-10-01'),
  'solar-shade-act-ai-shadow-model-2026':            (771, '2026-10-25'),
  'ai-concrete-carbon-mix-optimization-2026':       (772, '2026-11-26'),
  'ai-delivery-dispatch-late-lumber-idle-crew-2026': (773, '2026-11-27'),
  'ai-voice-agents-receptionists-missed-calls-contractor-2026': (779, '2026-12-04'),
  'ai-window-placement-shading-design-cooling-2026': (786, '2026-12-05'),
}
for e in s['ship_ready']:
    slug = e.get('slug')
    if slug in renumber:
        n, d = renumber[slug]
        e['article_number'] = n
        e['ship_after'] = d
        e['phase'] = 'ship_ready' if e.get('phase') in (None, 'ship_ready') else e['phase']
        e['hold_reason'] = 'Renumbered 2026-10-01 per Ray approval (was past-due unnumbered head).'
    if slug == 'virtual-draw-inspection-borrower-phone-lender-2026':
        e['article_number'] = 800
        e.pop('number', None)
        e['hold_reason'] = 'Renumbered 787 -> 800 2026-10-01 per Ray approval (787 duplicate resolved).'
json.dump(s, open(p, 'w'), indent=2, ensure_ascii=False)
print('done')
EOF
```

Then verify: `python3 -c` assert no entries without article_number, assert #787 appears
exactly once, `git diff --stat drafts/status.json`, review the diff, commit as
`Ray He <rayche@gmail.com>` with message
"Renumber 6 queue heads (770-773, 779, 786); resolve #787 duplicate -> #800",
push via the extraHeader recipe (never plain push; ~/.git-credentials is malformed).

Post-apply state: queue depth still 212, 0 unnumbered heads, #787 unique, and the
2026-10-01 (today) 1/day slot is filled by #770, so the next pipeline run can publish.
