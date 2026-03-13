#!/usr/bin/env python3
"""Rebuild sitemap.xml and feed.xml from article metadata."""
import os, re
from datetime import datetime
from html.parser import HTMLParser

ARTICLES_DIR = 'articles'
SITE_URL = 'https://rayhe.github.io/aihomebuilding'

class ArticleMeta(HTMLParser):
    def __init__(self):
        super().__init__()
        self._in_title = False
        self.title = ''
        self.description = ''
        self.author = ''
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == 'title': self._in_title = True
        if tag == 'meta':
            name = d.get('name', '')
            prop = d.get('property', '')
            content = d.get('content', '')
            if (name == 'description' or prop == 'og:description') and not self.description:
                self.description = content
            if name == 'author':
                self.author = content
    def handle_data(self, data):
        if self._in_title: self.title += data
    def handle_endtag(self, tag):
        if tag == 'title': self._in_title = False

def extract(slug, content):
    p = ArticleMeta()
    p.feed(content)
    m = re.search(r'By\s+<strong>([^<]+)</strong>', content)
    author = m.group(1).strip() if m else (p.author or 'Staff')
    m = re.search(r'(\w+ \d{1,2}, \d{4})', content)
    date_str = m.group(1) if m else 'March 11, 2026'
    try:
        date_obj = datetime.strptime(date_str, '%B %d, %Y')
    except:
        date_obj = datetime(2026, 3, 11)
    m = re.search(r'class="badge[^"]*"[^>]*>(?:[^<]*?(?:🏛️|🏗️|📋|🌿|👷|⚖️|🏠|📊)\s*)?([^<]+)', content)
    raw_cat = m.group(1).strip() if m else 'Technology'
    title = p.title.replace(' — AI Home Building', '').replace(' &mdash; AI Home Building', '').replace(' | AI Home Building', '').strip()
    if not title: title = slug.replace('-', ' ').title()
    return {
        'slug': slug,
        'title': title,
        'description': p.description or '',
        'author': author,
        'date_obj': date_obj,
        'date_str': date_str,
        'category': raw_cat,
    }

def xml_escape(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;').replace("'", '&apos;')

def rebuild_sitemap(articles):
    urls = [f'''  <url>
    <loc>{SITE_URL}/</loc>
    <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>''']
    for page in ['series.html', 'companies.html', 'writers.html']:
        urls.append(f'''  <url>
    <loc>{SITE_URL}/{page}</loc>
    <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>''')
    for a in articles:
        urls.append(f'''  <url>
    <loc>{SITE_URL}/articles/{a['slug']}.html</loc>
    <lastmod>{a['date_obj'].strftime('%Y-%m-%d')}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>''')
    sitemap = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
'''
    with open('sitemap.xml', 'w') as f:
        f.write(sitemap)
    print(f'✅ sitemap.xml: {len(urls)} URLs ({len(articles)} articles + 3 pages)')

def rebuild_feed(articles):
    items = []
    for a in articles[:50]:  # RSS best practice: limit to 50 most recent
        title = xml_escape(a['title'])
        desc = xml_escape(a['description'])
        author = xml_escape(a['author'])
        pub_date = a['date_obj'].strftime('%a, %d %b %Y 12:00:00 GMT')
        link = f"{SITE_URL}/articles/{a['slug']}.html"
        cat = xml_escape(a['category'])
        items.append(f'''    <item>
      <title>{title}</title>
      <link>{link}</link>
      <guid isPermaLink="true">{link}</guid>
      <description>{desc}</description>
      <author>{author}</author>
      <category>{cat}</category>
      <pubDate>{pub_date}</pubDate>
    </item>''')
    feed = f'''<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Home Building</title>
    <link>{SITE_URL}/</link>
    <description>Research, analysis, and reporting on how artificial intelligence is transforming home design, building, and project management.</description>
    <language>en-us</language>
    <lastBuildDate>{datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT')}</lastBuildDate>
    <atom:link href="{SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
  </channel>
</rss>
'''
    with open('feed.xml', 'w') as f:
        f.write(feed)
    print(f'✅ feed.xml: {len(items)} items')

def main():
    import subprocess
    articles = []
    for fname in os.listdir(ARTICLES_DIR):
        if not fname.endswith('.html'): continue
        slug = fname[:-5]
        with open(f'{ARTICLES_DIR}/{fname}', 'r') as f:
            content = f.read()
        articles.append(extract(slug, content))
    # Git order for tiebreaking
    result = subprocess.run(
        ['git', 'log', '--diff-filter=A', '--name-only', '--pretty=format:', '--', 'articles/'],
        capture_output=True, text=True
    )
    git_order = [l.replace('articles/', '').replace('.html', '')
                 for l in result.stdout.strip().split('\n')
                 if l.strip() and l.endswith('.html')]
    git_rank = {slug: i for i, slug in enumerate(git_order)}
    articles.sort(key=lambda a: (-a['date_obj'].timestamp(), git_rank.get(a['slug'], 999)))
    rebuild_sitemap(articles)
    rebuild_feed(articles)

if __name__ == '__main__':
    main()
