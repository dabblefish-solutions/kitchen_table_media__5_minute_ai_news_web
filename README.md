# 5 Minute AI News — website

Static site for [www.5minuteainews.com](https://www.5minuteainews.com), served via GitHub Pages from this repo's `main` branch root.

This repo is auto-updated daily by the podcast pipeline (repo `dabblefish-podcast--5minainews`), which regenerates the day's episode data and pushes the changes here.

## Structure

- `index.html`, `app.js`, `styles.css`, `brand.css` — homepage
- `archive/` — episode archive (`index.html`, `archive.css`, `archive.js`, `data.js`)
- `console/` — internal console view (`index.html`, `console-data.js`)
- `CNAME` — custom domain for GitHub Pages

## Machine-written files — do not hand-edit

The following files are written automatically by the pipeline and will be overwritten on the next daily run. Do not hand-edit them:

- `data.js`
- `archive/data.js`
- `console/console-data.js`

Everything else (markup, styles, render logic) is safe to edit by hand.
