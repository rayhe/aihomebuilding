#!/usr/bin/env python3
"""Extract metadata from all article HTML files.

Usage:
    python3 tools/extract_metadata.py          # Print summary
    python3 tools/extract_metadata.py --json   # Output JSON for use by other tools

Extracts: slug, title, journalist, date, category, description, image, read_time
"""

import os
import re
import sys
import json
import html
from datetime import datetime

ARTICLES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'articles')

# Canonical journalist names — normalize all variants to these
JOURNALISTS = {
    'elena vasquez': 'Elena Vasquez',
    'jake kowalski': 'Jake "Jackhammer" Kowalski',
    'jake jackhammer kowalski': 'Jake "Jackhammer" Kowalski',
    'frank deluca': 'Frank "The Foreman" DeLuca',
    'frank the foreman deluca': 'Frank "The Foreman" DeLuca',
    'priya greenwood': 'Priya Greenwood',
    'marcus washington': 'Marcus "Steel" Washington',
    'marcus steel washington': 'Marcus "Steel" Washington',
    'catherine chen': 'Catherine "Code" Chen',
    'catherine code chen': 'Catherine "Code" Chen',
    'sasha blueprint': 'Sasha Blueprint',  # legacy
}

def strip_html(s):
    """Remove HTML tags and decode entities."""
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    # Clean up HTML entities that weren't decoded
    s = s.replace('&ldquo;', '"').replace('&rdquo;', '"')
    s = s.replace('&lsquo;', "'").replace('&rsquo;', "'")
    s = s.replace('&mdash;', '—').replace('&middot;', '·')
    s = s.replace('&#8322;', '₂')
    return s.strip()


def normalize_journalist(raw_name):
    """Normalize journalist name to canonical form."""
    if not raw_name:
        return None
    
    name = strip_html(raw_name).strip()
    # Remove "By " prefix
    name = re.sub(r'^By\s+', '', name, flags=re.IGNORECASE)
    name = name.strip()
    
    if not name:
        return None
    
    # Try exact match first
    key = name.lower().strip()
    if key in JOURNALISTS:
        return JOURNALISTS[key]
    
    # Try removing quotes/nicknames for matching
    simplified = re.sub(r'["""\u201c\u201d].*?["""\u201c\u201d]', '', key).strip()
    simplified = re.sub(r'\s+', ' ', simplified)
    if simplified in JOURNALISTS:
        return JOURNALISTS[simplified]
    
    # Try matching just first + last
    parts = key.split()
    if len(parts) >= 2:
        first_last = f"{parts[0]} {parts[-1]}"
        if first_last in JOURNALISTS:
            return JOURNALISTS[first_last]
    
    # If it looks like a real name (2+ words, capitalized), return as-is
    if len(name.split()) >= 2:
        return name
    
    return None


def extract_metadata(filepath):
    """Extract all metadata from a single article HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slug = os.path.splitext(os.path.basename(filepath))[0]
    meta = {'slug': slug, 'file': os.path.basename(filepath)}
    
    # Title: from <title> tag
    m = re.search(r'<title>(.*?)</title>', content)
    if m:
        title = strip_html(m.group(1))
        # Remove site name suffix
        title = re.split(r'\s*[—|]\s*AI Home Build', title)[0].strip()
        meta['title'] = title
    else:
        meta['title'] = slug
    
    # Journalist: try multiple patterns in order of specificity
    journalist = None
    
    # Pattern 1: <span class="journalist">Name</span>
    m = re.search(r'class="journalist">(.*?)</span>', content)
    if m:
        journalist = normalize_journalist(m.group(1))
    
    # Pattern 2: <div class="byline">By <strong>Name</strong> ...
    if not journalist:
        m = re.search(r'class="byline">By\s+<strong>(.*?)</strong>', content)
        if m:
            journalist = normalize_journalist(m.group(1))
    
    # Pattern 3: <div class="byline">By Name · Date
    if not journalist:
        m = re.search(r'class="byline">By\s+(.*?)(?:\s*[·&<])', content)
        if m:
            journalist = normalize_journalist(m.group(1))
    
    # Pattern 4: <span>By Name</span>
    if not journalist:
        m = re.search(r'<span>By\s+(.*?)</span>', content)
        if m:
            journalist = normalize_journalist(m.group(1))
    
    # Pattern 5: JSON-LD author
    if not journalist:
        m = re.search(r'"author".*?"name":\s*"(.*?)"', content, re.DOTALL)
        if m:
            journalist = normalize_journalist(m.group(1))
    
    # Pattern 6: article-meta with By
    if not journalist:
        m = re.search(r'class="article-meta">(.*?)</div>', content, re.DOTALL)
        if m:
            by_m = re.search(r'By\s+(.*?)(?:\s*[·&<])', strip_html(m.group(1)))
            if by_m:
                journalist = normalize_journalist(by_m.group(1))
    
    meta['journalist'] = journalist or 'Unknown'
    
    # Date: try multiple formats
    date_str = None
    
    # From byline
    m = re.search(r'(?:·|middot;)\s*(\w+ \d{1,2},? \d{4})', content)
    if m:
        date_str = m.group(1)
    
    # From JSON-LD datePublished
    if not date_str:
        m = re.search(r'"datePublished":\s*"(\d{4}-\d{2}-\d{2})"', content)
        if m:
            try:
                d = datetime.strptime(m.group(1), '%Y-%m-%d')
                date_str = d.strftime('%B %d, %Y')
            except:
                date_str = m.group(1)
    
    # From meta tag
    if not date_str:
        m = re.search(r'article:published_time.*?content="(.*?)"', content)
        if m:
            try:
                d = datetime.strptime(m.group(1)[:10], '%Y-%m-%d')
                date_str = d.strftime('%B %d, %Y')
            except:
                pass
    
    meta['date'] = date_str or 'Unknown'
    
    # Parse date for sorting
    meta['date_sort'] = ''
    if date_str and date_str != 'Unknown':
        for fmt in ['%B %d, %Y', '%B %d %Y']:
            try:
                d = datetime.strptime(date_str.replace(',', ''), fmt.replace(',', ''))
                meta['date_sort'] = d.strftime('%Y-%m-%d')
                break
            except:
                continue
    
    # Category
    m = re.search(r'class="article-badge">(.*?)</span>', content)
    if m:
        meta['category'] = strip_html(m.group(1))
    else:
        m = re.search(r'class="category-badge">(.*?)</(?:span|div)>', content)
        if m:
            meta['category'] = strip_html(m.group(1))
        else:
            meta['category'] = 'General'
    
    # Description
    m = re.search(r'name="description"\s+content="(.*?)"', content)
    meta['description'] = html.unescape(m.group(1)) if m else ''
    
    # Image
    m = re.search(r'<meta property="og:image" content="(.*?)"', content)
    if m:
        meta['image'] = m.group(1).split('/')[-1]
    else:
        m = re.search(r'<img[^>]+src="(?:\.\./)?images/(.*?)"', content)
        meta['image'] = m.group(1) if m else ''
    
    # Read time
    m = re.search(r'(\d+)\s*min read', content)
    meta['read_time'] = int(m.group(1)) if m else 5
    
    return meta


def extract_all():
    """Extract metadata from all articles."""
    articles = []
    for f in sorted(os.listdir(ARTICLES_DIR)):
        if not f.endswith('.html'):
            continue
        path = os.path.join(ARTICLES_DIR, f)
        meta = extract_metadata(path)
        articles.append(meta)
    
    # Sort by date (newest first)
    articles.sort(key=lambda a: a.get('date_sort', ''), reverse=True)
    return articles


if __name__ == '__main__':
    articles = extract_all()
    
    if '--json' in sys.argv:
        print(json.dumps(articles, indent=2))
    else:
        # Print summary grouped by journalist
        from collections import defaultdict, Counter
        by_journalist = defaultdict(list)
        for a in articles:
            by_journalist[a['journalist']].append(a)
        
        print(f"Total articles: {len(articles)}\n")
        for j in sorted(by_journalist.keys()):
            arts = by_journalist[j]
            print(f"  {j}: {len(arts)} articles")
        
        # Check for issues
        unknown = by_journalist.get('Unknown', [])
        if unknown:
            print(f"\n⚠️  {len(unknown)} articles with unknown journalist:")
            for a in unknown:
                print(f"    {a['slug']}")
        
        # Category breakdown
        cats = Counter(a['category'] for a in articles)
        print(f"\nCategories:")
        for cat, count in cats.most_common():
            print(f"  {cat}: {count}")
