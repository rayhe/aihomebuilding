#!/usr/bin/env python3
"""Rebuild the AI Home Building homepage grid from article metadata.
Eliminates duplication by generating cards programmatically.
Usage: cd ~/workspace/aihomebuilding && python3 tools/rebuild_grid.py
"""
import os, re, sys
from html.parser import HTMLParser
from datetime import datetime

ARTICLES_DIR = 'articles'
INDEX_FILE = 'index.html'

# Category → data-category mapping and emoji
CATEGORY_MAP = {
    'architecture': ('architecture', '🏛️ Architecture & Design'),
    'design': ('architecture', '🏛️ Architecture & Design'),
    'construction': ('construction', '🏗️ Construction Tech'),
    'management': ('management', '📋 Project Management'),
    'sustainability': ('sustainability', '🌿 Sustainability'),
    'workforce': ('workforce', '👷 Workforce'),
    'policy': ('policy', '⚖️ Policy & Regulation'),
    'smart home': ('smart-home', '🏠 Smart Home'),
    'industry': ('industry', '📊 Industry'),
    'technology': ('construction', '🏗️ Construction Tech'),
}

def categorize(cat_text):
    """Map article category text to data-category and display badge."""
    lower = cat_text.lower().strip()
    for key, (data_cat, badge) in CATEGORY_MAP.items():
        if key in lower:
            return data_cat, badge
    return 'construction', '🏗️ Construction Tech'


class ArticleMeta(HTMLParser):
    def __init__(self):
        super().__init__()
        self._in_title = False
        self.title = ''
        self.description = ''
        self.author = ''
        
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == 'title':
            self._in_title = True
        if tag == 'meta':
            name = d.get('name', '')
            prop = d.get('property', '')
            content = d.get('content', '')
            if (name == 'description' or prop == 'og:description') and not self.description:
                self.description = content
            if name == 'author':
                self.author = content
                
    def handle_data(self, data):
        if self._in_title:
            self.title += data
            
    def handle_endtag(self, tag):
        if tag == 'title':
            self._in_title = False


def extract(slug, content):
    p = ArticleMeta()
    p.feed(content)
    
    # Category
    m = re.search(r'class="badge[^"]*"[^>]*>(?:[^<]*?(?:🏛️|🏗️|📋|🌿|👷|⚖️|🏠|📊)\s*)?([^<]+)', content)
    raw_cat = m.group(1).strip() if m else 'Technology'
    data_cat, badge = categorize(raw_cat)
    
    # Author
    m = re.search(r'By\s+<strong>([^<]+)</strong>', content)
    author = m.group(1).strip() if m else (p.author or 'Staff')
    
    # Date
    m = re.search(r'(\w+ \d{1,2}, \d{4})', content)
    date_str = m.group(1) if m else 'March 11, 2026'
    try:
        date_obj = datetime.strptime(date_str, '%B %d, %Y')
    except:
        date_obj = datetime(2026, 3, 11)
    
    # Short date
    short_date = date_obj.strftime('%b %d, %Y') if date_obj else date_str
    
    # Image
    m = re.search(r'<img[^>]+src="([^"]+)"[^>]*class="[^"]*hero', content)
    if not m:
        m = re.search(r'<img[^>]*class="[^"]*hero[^"]*"[^>]+src="([^"]+)"', content)
    image = m.group(1) if m else f'images/{slug}.jpg'
    if image.startswith('../'):
        image = image[3:]
    elif not image.startswith('images/') and not image.startswith('http'):
        image = f'images/{slug}.jpg'
    
    title = p.title.replace(' — AI Home Building', '').replace(' | AI Home Building', '').strip()
    if not title:
        title = slug.replace('-', ' ').title()
    # Escape HTML
    title = title.replace('&', '&amp;').replace('"', '&quot;')
    
    excerpt = p.description or ''
    excerpt = excerpt.replace('&amp;', '&').replace('&mdash;', '—').replace('&quot;', '"')
    if len(excerpt) > 200:
        excerpt = excerpt[:197] + '...'
    excerpt = excerpt.replace('&', '&amp;').replace('"', '&quot;')
    
    # Word count for reading time
    text = re.sub(r'<[^>]+>', '', content)
    words = len(text.split())
    read_min = max(1, round(words / 250))
    
    return {
        'slug': slug,
        'title': title,
        'excerpt': excerpt,
        'data_cat': data_cat,
        'badge': badge,
        'author': author,
        'date_str': date_str,
        'short_date': short_date,
        'date_obj': date_obj,
        'image': image,
        'read_min': read_min,
    }


def card_html(a):
    return f'''\t\t<article class="article-card" data-category="{a['data_cat']}">
\t\t\t<a href="articles/{a['slug']}.html">
\t\t\t\t<img loading="lazy" decoding="async" src="{a['image']}" alt="{a['title']}">
\t\t\t</a>
\t\t\t<div class="card-body">
\t\t\t\t<span class="badge">{a['badge']}</span>
\t\t\t\t<h3><a href="articles/{a['slug']}.html">{a['title']}</a></h3>
\t\t\t\t<div class="card-meta">{a['author']} &middot; {a['short_date']} &middot; ☕ {a['read_min']} min</div>
\t\t\t</div>
\t\t</article>'''


def featured_html(a):
    return f'''\t<article class="featured-article">
\t\t<a href="articles/{a['slug']}.html">
\t\t\t<img class="featured-img" loading="eager" decoding="async" src="{a['image']}" alt="{a['title']}">
\t\t</a>
\t\t<div class="featured-text">
\t\t\t<div class="badge">{a['badge']}</div>
\t\t\t<h2><a href="articles/{a['slug']}.html">{a['title']}</a></h2>
\t\t\t<p class="excerpt">{a['excerpt']}</p>
\t\t\t<div class="byline">By <strong>{a['author']}</strong> &middot; {a['date_str']}</div>
\t\t</div>
\t</article>'''


def main():
    articles = []
    for fname in os.listdir(ARTICLES_DIR):
        if not fname.endswith('.html'):
            continue
        slug = fname[:-5]
        with open(f'{ARTICLES_DIR}/{fname}', 'r') as f:
            content = f.read()
        articles.append(extract(slug, content))
    
    # Get git add order (newest first) for tiebreaking same-date articles
    import subprocess
    result = subprocess.run(
        ['git', 'log', '--diff-filter=A', '--name-only', '--pretty=format:', '--', 'articles/'],
        capture_output=True, text=True
    )
    git_order = [l.replace('articles/', '').replace('.html', '') 
                 for l in result.stdout.strip().split('\n') 
                 if l.strip() and l.endswith('.html')]
    git_rank = {slug: i for i, slug in enumerate(git_order)}
    
    # Sort: newest date first, then git commit order (newest first) for ties
    articles.sort(key=lambda a: (-a['date_obj'].timestamp(), git_rank.get(a['slug'], 999)))
    
    featured = articles[0]
    grid = articles[1:]
    
    with open(INDEX_FILE, 'r') as f:
        html = f.read()
    
    # Replace featured
    html = re.sub(
        r'<article class="featured-article">.*?</article>',
        featured_html(featured),
        html, flags=re.DOTALL, count=1
    )
    
    # Replace grid
    cards = '\n'.join(card_html(a) for a in grid)
    html = re.sub(
        r'(<!-- ARTICLE GRID START -->).*?(<!-- ARTICLE GRID END -->)',
        f'\\1\n{cards}\n\\2',
        html, flags=re.DOTALL
    )
    
    # Update counts
    count = len(articles)
    html = re.sub(r'\d+\s*Articles', f'{count} Articles', html, count=1)
    
    with open(INDEX_FILE, 'w') as f:
        f.write(html)
    
    print(f'✅ Rebuilt: {count} articles ({count-1} grid + 1 featured)')
    print(f'   Featured: {featured["title"][:60]}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
