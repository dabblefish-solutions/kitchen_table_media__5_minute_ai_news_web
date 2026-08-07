# 5 Minute AI News — website

Static site for [www.5minuteainews.com](https://www.5minuteainews.com), served via GitHub Pages from this repo's `main` branch root.

This repo is auto-updated daily by the podcast pipeline (repo `kitchen_table_media__5_minute_ai_news_generator`), which regenerates the day's episode data and pushes the changes here.

## Structure

- `index.html`, `app.js`, `styles.css`, `brand.css` — homepage (prerendered static HTML; app.js only wires the subscribe form)
- `archive/` — episode archive (`index.html`, `archive.css`) — also prerendered static HTML
- `console/` — internal console view, noindex'd, still JS-rendered (`index.html`, `console-data.js`)
- `templates/` — `index.html.tmpl` / `archive.html.tmpl`, the token-substitution sources the pipeline renders `index.html` and `archive/index.html` from (see the token contract documented at the top of each file)
- `sitemap.xml`, `robots.txt` — regenerated (sitemap) / static (robots) at the repo root
- `CNAME` — custom domain for GitHub Pages

## Machine-written files — do not hand-edit

The following files are written automatically by the pipeline and will be overwritten on the next daily run. Do not hand-edit them:

- `index.html`
- `archive/index.html`
- `sitemap.xml`
- `console/console-data.js`

Everything else (markup, styles, templates) is safe to edit by hand.
