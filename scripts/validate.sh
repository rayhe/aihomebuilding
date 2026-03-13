#!/bin/bash
# Pre-push validation for AI Home Building site
# Run before every push to catch missing images, meta tags, broken links, etc.

set -euo pipefail
cd "$(dirname "$0")/.."

ERRORS=0
WARNINGS=0

echo "🔍 Validating AI Home Building site..."
echo ""

# 1. Every article must have a hero <img> tag
echo "=== Hero Images in Articles ==="
for f in articles/*.html; do
    name=$(basename "$f")
    if ! grep -q '<img' "$f"; then
        echo "  ❌ MISSING hero image: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 2. Every article must have og:image meta tag
echo "=== og:image Meta Tags ==="
for f in articles/*.html; do
    name=$(basename "$f")
    if ! grep -q 'og:image' "$f"; then
        echo "  ❌ MISSING og:image: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 3. Every article must have twitter:card meta tag
echo "=== twitter:card Meta Tags ==="
for f in articles/*.html; do
    name=$(basename "$f")
    if ! grep -q 'twitter:card' "$f"; then
        echo "  ❌ MISSING twitter:card: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 4. Index cards must not have gradient placeholders
echo "=== Index Card Placeholders ==="
GRADIENTS=$(grep -c 'background:linear-gradient' index.html 2>/dev/null || true)
# Subtract known UI gradients (calculator, non-card elements)
CARD_GRADIENTS=$(python3 -c "
import re
with open('index.html') as f:
    content = f.read()
cards = re.findall(r'<article class=\"article-card\".*?</article>', content, re.DOTALL)
count = sum(1 for c in cards if 'background:linear-gradient' in c)
print(count)
" 2>/dev/null || echo "0")
if [ "$CARD_GRADIENTS" -gt 0 ]; then
    echo "  ❌ $CARD_GRADIENTS index cards still using gradient placeholders"
    ERRORS=$((ERRORS + CARD_GRADIENTS))
else
    echo "  ✅ All index cards have real images"
fi
echo ""

# 5. Every image referenced in index.html must exist on disk
echo "=== Image File References ==="
grep -oP 'src="images/[^"]+' index.html | sed 's/src="//' | sort -u | while read -r img; do
    if [ ! -f "$img" ]; then
        echo "  ❌ MISSING file: $img"
        # Can't increment ERRORS in subshell, use temp file
        echo "1" >> /tmp/aih_validate_errors
    fi
done
if [ -f /tmp/aih_validate_errors ]; then
    count=$(wc -l < /tmp/aih_validate_errors)
    ERRORS=$((ERRORS + count))
    rm /tmp/aih_validate_errors
fi

# Also check article image references
for f in articles/*.html; do
    grep -oP 'src="[^"]*images/[^"]+' "$f" 2>/dev/null | sed 's/src="//' | sed 's|../||' | while read -r img; do
        if [ ! -f "$img" ]; then
            echo "  ❌ MISSING file in $(basename "$f"): $img"
            echo "1" >> /tmp/aih_validate_errors
        fi
    done
done
if [ -f /tmp/aih_validate_errors ]; then
    count=$(wc -l < /tmp/aih_validate_errors)
    ERRORS=$((ERRORS + count))
    rm /tmp/aih_validate_errors
else
    echo "  ✅ All referenced images exist"
fi
echo ""

# 6. Article count consistency
echo "=== Article Count ==="
FILE_COUNT=$(ls articles/*.html 2>/dev/null | wc -l)
INDEX_CARDS=$(python3 -c "
import re
with open('index.html') as f:
    content = f.read()
cards = re.findall(r'<article class=\"article-card\"', content)
print(len(cards))
" 2>/dev/null || echo "0")
TICKER=$(grep -oP '\d+ articles' index.html | head -1 | grep -oP '\d+' || echo "0")

echo "  Files: $FILE_COUNT | Index cards: $INDEX_CARDS | Ticker: $TICKER"
if [ "$FILE_COUNT" -ne "$INDEX_CARDS" ]; then
    echo "  ⚠️  Article file count ($FILE_COUNT) != index card count ($INDEX_CARDS)"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# 7. Sitemap check
echo "=== Sitemap ==="
if [ -f sitemap.xml ]; then
    SITEMAP_COUNT=$(grep -c '<loc>' sitemap.xml || true)
    echo "  Sitemap URLs: $SITEMAP_COUNT"
else
    echo "  ❌ sitemap.xml not found"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 8. No duplicate nav items
echo "=== Navigation ==="
WRITERS_NAV=$(grep -c "Writers" index.html || true)
# Expected: 1 desktop + 1 mobile = 2
if [ "$WRITERS_NAV" -gt 2 ]; then
    echo "  ⚠️  Found $WRITERS_NAV Writers nav references (expected 2: desktop + mobile)"
    WARNINGS=$((WARNINGS + 1))
else
    echo "  ✅ Nav links clean"
fi
echo ""

# Summary
echo "================================"
if [ "$ERRORS" -gt 0 ]; then
    echo "❌ FAILED: $ERRORS errors, $WARNINGS warnings"
    exit 1
elif [ "$WARNINGS" -gt 0 ]; then
    echo "⚠️  PASSED with $WARNINGS warnings"
    exit 0
else
    echo "✅ ALL CHECKS PASSED"
    exit 0
fi
