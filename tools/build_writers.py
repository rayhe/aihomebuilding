#!/usr/bin/env python3
"""Generate writers.html — journalist archive pages.

Creates a standalone page with each journalist's bio, stats, and article archive.
"""

import os
import sys
import html

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__))))
from extract_metadata import extract_all, normalize_journalist

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT = os.path.join(REPO_DIR, 'writers.html')

JOURNALISTS = {
    'Elena Vasquez': {
        'slug': 'elena-vasquez',
        'emoji': '🏛️',
        'beat': 'Architecture & Design',
        'style': 'Elegant, precise prose with an eye for aesthetic detail. Draws connections between classical architecture and computational design.',
        'background': 'Former architecture critic for a major metro paper. Holds a Master\'s in architectural history.',
        'catchphrase': 'The blueprint is dead. Long live the algorithm.',
    },
    'Jake "Jackhammer" Kowalski': {
        'slug': 'jake-kowalski',
        'emoji': '🔨',
        'beat': 'Construction Technology',
        'style': 'Punchy, no-nonsense tech journalism. Gets excited about robots and hardware. Writes like he\'s explaining cool machines to a smart friend at a bar.',
        'background': 'Former construction worker who became a tech writer. Still has calluses.',
        'catchphrase': 'If it can\'t survive a job site, it doesn\'t belong on one.',
    },
    'Frank "The Foreman" DeLuca': {
        'slug': 'frank-deluca',
        'emoji': '📋',
        'beat': 'Project Management & Operations',
        'style': 'Methodical, process-oriented. Loves timelines, Gantt charts, and efficiency metrics. Twenty years of projects going sideways — he\'s seen it all.',
        'background': '20 years as a general contractor before becoming a writer. PMP certified. Thinks in critical paths.',
        'catchphrase': 'Every delay has a root cause. AI just finds it faster.',
    },
    'Priya Greenwood': {
        'slug': 'priya-greenwood',
        'emoji': '🌿',
        'beat': 'Sustainability & Green Building',
        'style': 'Passionate but evidence-based. Connects environmental data to building practices. Makes energy modeling feel urgent and accessible.',
        'background': 'Environmental engineer turned journalist. Previously worked at a net-zero design firm.',
        'catchphrase': 'Every kilowatt-hour the building wastes is a design failure.',
    },
    'Marcus "Steel" Washington': {
        'slug': 'marcus-washington',
        'emoji': '⚙️',
        'beat': 'Workforce & Labor',
        'style': 'Investigative, human-centered. Tells construction stories through the workers who live them. Not afraid of uncomfortable conclusions.',
        'background': 'Labor reporter who covered manufacturing automation before pivoting to construction. Union family.',
        'catchphrase': 'Behind every labor statistic is someone\'s mortgage payment.',
    },
    'Catherine "Code" Chen': {
        'slug': 'catherine-chen',
        'emoji': '⚖️',
        'beat': 'Policy & Regulation',
        'style': 'Sharp, analytical legal/policy journalism. Translates building codes, zoning laws, and regulatory frameworks into readable prose.',
        'background': 'JD from Georgetown, practiced construction law for 5 years before becoming a policy journalist.',
        'catchphrase': 'The code doesn\'t care about your timeline.',
    },
}

def esc(s):
    return html.escape(s, quote=True)

def generate():
    articles = extract_all()
    
    # Group by journalist
    from collections import defaultdict
    by_journalist = defaultdict(list)
    for a in articles:
        by_journalist[a['journalist']].append(a)
    
    # Build page
    parts = []
    parts.append(f'''<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Meet the journalists of AI Home Building. Six writers covering AI's impact on residential construction — from architecture to policy.">
    <title>Our Writers — AI Home Building</title>
    <link rel="canonical" href="https://rayhe.github.io/aihomebuilding/writers.html">
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
    <link rel="apple-touch-icon" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css?1563">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="Our Writers — AI Home Building">
    <meta property="og:description" content="Meet the journalists of AI Home Building. Six writers covering AI's impact on residential construction.">
    <meta property="og:url" content="https://rayhe.github.io/aihomebuilding/writers.html">

    <style>
        :root {{
            --accent: #FF6B35;
            --accent-dark: #E55A2B;
            --bg-primary: #FAFAF8;
            --bg-card: #FFFFFF;
            --text-primary: #1A1A1A;
            --text-secondary: #555555;
            --text-muted: #888888;
            --border: #E8E8E4;
            --shadow: 0 2px 12px rgba(0,0,0,0.06);
            --shadow-hover: 0 8px 30px rgba(0,0,0,0.12);
        }}
        [data-theme="dark"] {{
            --bg-primary: #111111;
            --bg-card: #1A1A1A;
            --text-primary: #F0F0F0;
            --text-secondary: #BBBBBB;
            --text-muted: #888888;
            --border: #2A2A2A;
            --shadow: 0 2px 12px rgba(0,0,0,0.3);
            --shadow-hover: 0 8px 30px rgba(0,0,0,0.5);
        }}
        * {{ box-sizing: border-box; }}
        body {{
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            margin: 0; padding: 0;
            line-height: 1.6;
            transition: background 0.3s, color 0.3s;
        }}
        
        /* Header */
        .page-header {{
            background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%);
            color: white;
            padding: 48px 24px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }}
        .page-header::before {{
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url('bg.webp') center/cover;
            opacity: 0.1;
        }}
        .page-header-inner {{
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
        }}
        .page-header h1 {{
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 2.4rem;
            font-weight: 800;
            margin: 0 0 12px;
        }}
        .page-header h1 span {{ color: var(--accent); }}
        .page-header p {{
            font-size: 1.05rem;
            color: rgba(255,255,255,0.7);
            margin: 0;
            line-height: 1.6;
        }}
        .back-link {{
            display: inline-block;
            margin-top: 20px;
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
        }}
        .back-link:hover {{ text-decoration: underline; }}
        
        /* Nav strip */
        .writer-nav {{
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 0;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            position: sticky;
            top: 0;
            z-index: 100;
        }}
        .writer-nav::-webkit-scrollbar {{ display: none; }}
        .writer-nav-inner {{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            max-width: 1200px;
            margin: 0 auto;
            min-width: max-content;
        }}
        .writer-nav a {{
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 14px 18px;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            white-space: nowrap;
            border-bottom: 3px solid transparent;
            transition: all 0.2s;
        }}
        .writer-nav a:hover {{
            color: var(--accent);
            border-bottom-color: var(--accent);
        }}
        .writer-nav a .nav-emoji {{
            font-size: 1.1rem;
        }}
        .writer-nav a .nav-count {{
            background: var(--bg-primary);
            padding: 2px 7px;
            border-radius: 10px;
            font-size: 0.7rem;
            font-weight: 700;
            color: var(--text-muted);
        }}
        
        /* Writer section */
        .content {{ max-width: 1000px; margin: 0 auto; padding: 0 24px; }}
        
        .writer-section {{
            padding: 48px 0 32px;
            border-bottom: 1px solid var(--border);
        }}
        .writer-section:last-child {{ border-bottom: none; }}
        
        .writer-header {{
            display: flex;
            gap: 24px;
            align-items: flex-start;
            margin-bottom: 32px;
        }}
        .writer-avatar {{
            width: 80px; height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent), var(--accent-dark));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            flex-shrink: 0;
        }}
        .writer-info h2 {{
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 1.6rem;
            font-weight: 800;
            margin: 0 0 4px;
        }}
        .writer-beat {{
            display: inline-block;
            background: var(--accent);
            color: white;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 3px 10px;
            border-radius: 4px;
            margin-bottom: 10px;
        }}
        .writer-bio {{
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.7;
            margin: 0 0 8px;
        }}
        .writer-catchphrase {{
            font-style: italic;
            color: var(--accent);
            font-size: 0.85rem;
            font-weight: 600;
        }}
        .writer-stats {{
            display: flex;
            gap: 24px;
            margin: 20px 0;
        }}
        .writer-stat {{
            text-align: center;
        }}
        .writer-stat-num {{
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--accent);
        }}
        .writer-stat-label {{
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--text-muted);
            font-weight: 600;
        }}
        
        /* Article list */
        .article-list {{
            display: grid;
            gap: 16px;
        }}
        .article-item {{
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 16px;
            text-decoration: none;
            color: inherit;
            transition: box-shadow 0.2s, transform 0.15s;
        }}
        .article-item:hover {{
            box-shadow: var(--shadow-hover);
            transform: translateY(-2px);
        }}
        .article-item img {{
            width: 100px;
            height: 70px;
            object-fit: cover;
            border-radius: 6px;
        }}
        .article-item-body h3 {{
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 0.95rem;
            font-weight: 700;
            margin: 0 0 6px;
            line-height: 1.3;
            color: var(--text-primary);
        }}
        .article-item-meta {{
            font-size: 0.75rem;
            color: var(--text-muted);
        }}
        
        @media (max-width: 640px) {{
            .writer-header {{
                flex-direction: column;
                align-items: center;
                text-align: center;
            }}
            .writer-stats {{
                justify-content: center;
            }}
            .article-item {{
                grid-template-columns: 1fr;
            }}
            .article-item img {{
                width: 100%;
                height: 140px;
            }}
            .page-header h1 {{ font-size: 1.8rem; }}
            .writer-nav a {{ padding: 12px 14px; font-size: 0.8rem; }}
        }}
        
        /* Dark mode toggle */
        .theme-toggle {{
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: var(--bg-card);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            transition: all 0.2s;
        }}
        .theme-toggle:hover {{
            box-shadow: var(--shadow-hover);
            transform: scale(1.1);
        }}
        
        /* Footer */
        .site-footer {{
            background: #1A1A1A;
            color: rgba(255,255,255,0.6);
            text-align: center;
            padding: 32px 24px;
            font-size: 0.8rem;
            margin-top: 48px;
        }}
        .site-footer a {{
            color: var(--accent);
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <div class="page-header">
        <div class="page-header-inner">
            <h1>Our <span>Writers</span></h1>
            <p>Six journalists covering every angle of AI&rsquo;s impact on residential construction &mdash; from the job site to the code book, from the factory floor to the utility bill.</p>
            <a href="index.html" class="back-link">&larr; Back to AI Home Building</a>
        </div>
    </div>

    <nav class="writer-nav">
        <div class="writer-nav-inner">
''')
    
    # Nav links
    ordered_journalists = [
        'Elena Vasquez',
        'Jake "Jackhammer" Kowalski',
        'Frank "The Foreman" DeLuca',
        'Priya Greenwood',
        'Marcus "Steel" Washington',
        'Catherine "Code" Chen',
    ]
    
    for name in ordered_journalists:
        info = JOURNALISTS[name]
        count = len(by_journalist.get(name, []))
        short = name.split('"')[-1].strip() if '"' in name else name.split()[-1]
        parts.append(f'            <a href="#{info["slug"]}"><span class="nav-emoji">{info["emoji"]}</span> {esc(short)} <span class="nav-count">{count}</span></a>\n')
    
    parts.append('        </div>\n    </nav>\n\n    <div class="content">\n')
    
    # Writer sections
    for name in ordered_journalists:
        info = JOURNALISTS[name]
        writer_articles = by_journalist.get(name, [])
        # Sort newest first
        writer_articles.sort(key=lambda a: a.get('date_sort', ''), reverse=True)
        
        parts.append(f'''
        <section class="writer-section" id="{info['slug']}">
            <div class="writer-header">
                <div class="writer-avatar">{info['emoji']}</div>
                <div class="writer-info">
                    <h2>{esc(name)}</h2>
                    <span class="writer-beat">{esc(info['beat'])}</span>
                    <p class="writer-bio">{esc(info['style'])}</p>
                    <p class="writer-bio" style="font-size:0.85rem;">{esc(info['background'])}</p>
                    <p class="writer-catchphrase">&ldquo;{esc(info['catchphrase'])}&rdquo;</p>
                    <div class="writer-stats">
                        <div class="writer-stat">
                            <div class="writer-stat-num">{len(writer_articles)}</div>
                            <div class="writer-stat-label">Articles</div>
                        </div>
                        <div class="writer-stat">
                            <div class="writer-stat-num">{sum(a.get('read_time', 5) for a in writer_articles)}</div>
                            <div class="writer-stat-label">Min Total Read</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="article-list">
''')
        
        for a in writer_articles:
            img = f'images/{a["image"]}' if a.get('image') else 'images/ai-architectural-design.jpg'
            parts.append(f'''                <a href="articles/{esc(a['file'])}" class="article-item">
                    <img loading="lazy" decoding="async" src="{esc(img)}" alt="">
                    <div class="article-item-body">
                        <h3>{esc(a['title'])}</h3>
                        <div class="article-item-meta">{esc(a['date'])} &middot; ☕ {a.get('read_time', 5)} min read</div>
                    </div>
                </a>
''')
        
        parts.append('            </div>\n        </section>\n')
    
    # Handle Sasha Blueprint if present (legacy)
    sasha_articles = by_journalist.get('Sasha Blueprint', [])
    # Skip — legacy character
    
    total_articles = sum(len(by_journalist.get(n, [])) for n in ordered_journalists)
    
    parts.append(f'''
    </div>

    <footer class="site-footer">
        <p><strong>{total_articles} articles</strong> across 6 beats &middot; <a href="index.html">AI Home Building</a> &middot; <a href="series.html">Reading Paths</a> &middot; <a href="companies.html">Company Directory</a></p>
        <p style="margin-top:8px;">&copy; 2026 AI Home Building. Built for builders, by algorithms and editors.</p>
    </footer>

    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode" title="Toggle dark mode">🌙</button>

    <script>
        // Dark mode
        function toggleTheme() {{
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            document.querySelector('.theme-toggle').textContent = next === 'dark' ? '☀️' : '🌙';
        }}
        (function() {{
            const saved = localStorage.getItem('theme');
            if (saved) {{
                document.documentElement.setAttribute('data-theme', saved);
                if (saved === 'dark') document.querySelector('.theme-toggle').textContent = '☀️';
            }} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {{
                document.documentElement.setAttribute('data-theme', 'dark');
                document.querySelector('.theme-toggle').textContent = '☀️';
            }}
        }})();
        
        // Smooth scroll for nav
        document.querySelectorAll('.writer-nav a').forEach(a => {{
            a.addEventListener('click', function(e) {{
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {{
                    const navHeight = document.querySelector('.writer-nav').offsetHeight;
                    const y = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
                    window.scrollTo({{ top: y, behavior: 'smooth' }});
                }}
            }});
        }});
        
        // Highlight active nav on scroll
        const sections = document.querySelectorAll('.writer-section');
        const navLinks = document.querySelectorAll('.writer-nav a');
        const observer = new IntersectionObserver(entries => {{
            entries.forEach(entry => {{
                if (entry.isIntersecting) {{
                    const id = entry.target.id;
                    navLinks.forEach(a => {{
                        a.style.borderBottomColor = a.getAttribute('href') === '#' + id ? 'var(--accent)' : 'transparent';
                        a.style.color = a.getAttribute('href') === '#' + id ? 'var(--accent)' : '';
                    }});
                }}
            }});
        }}, {{ rootMargin: '-30% 0px -60% 0px' }});
        sections.forEach(s => observer.observe(s));
    </script>
</body>
</html>''')
    
    content = ''.join(parts)
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ writers.html: {len(ordered_journalists)} journalists, {total_articles} articles")


if __name__ == '__main__':
    generate()
