# ICAAP & SP 2026 — Conference Website

Static website for the **International Conference on Advances in Applied Probability and
Stochastic Processes (ICAAP & SP 2026)** — December 19–21, 2026, KAHM Unity Women's
College, Manjeri, Kerala, India.

Plain HTML/CSS/JS. **No build step** — the files are the site.

## Structure

```
index.html          Home
about.html          About (committee, RMS, KMA, college, department, organizing committee)
speakers.html       Speakers & Schedule
registration.html   Registration & Call for Papers
css/styles.css      All styling (colors, layout, components)
js/main.js          Mobile menu + subtle math-formula background
assets/             Logos, favicon, keynote photo placeholder
```

## Viewing locally

- **Quickest:** double-click `index.html` to open it in a browser.
- **Recommended (matches hosting):** from this folder run a local server and open
  <http://localhost:8000>:
  ```
  python -m http.server 8000
  ```

## Editing content

All text lives directly in the four `.html` files — open one, find the text, edit it.

**Header and footer are repeated in every page.** If you change a nav link, contact detail,
or footer text, make the **same edit in all four HTML files** (look for the comment blocks
`SHARED HEADER` and `SHARED FOOTER`).

## Things to finish before launch (search the code for `TODO`)

| What | Where | Currently |
|------|-------|-----------|
| Registration form link | `registration.html` — `id="register-form"` | dummy `#` |
| Paper submission form link | `registration.html` — `id="cfp-form"` | dummy `#` |
| Home hero buttons | `index.html` hero | point to the Registration page |
| Keynote speaker photos | `speakers.html` | `assets/keynote-placeholder.svg` |
| Accommodation details | `registration.html` #accommodation | "pending" notice |
| Detailed schedule | `speakers.html` #schedule | "announced soon" notice |
| College website link | `about.html` #college | "link to be added" |
| Exact address / map pin | footer (all pages) + `index.html` #reach | best-effort address |

### Swapping a dummy form link
In `registration.html`, replace:
```html
<a class="btn btn--primary" href="#" id="register-form">Register Now</a>
```
with your Google Form URL, e.g. `href="https://forms.gle/XXXXXXXX"`.

### Adding real speaker photos
Drop the image files into `assets/` and, in `speakers.html`, change the keynote card's
`src="assets/keynote-placeholder.svg"` to your file (e.g. `src="assets/ramaswami.jpg"`).
Square images (roughly 1:1) look best.

## Colors & fonts

Defined once at the top of `css/styles.css` under `:root` (e.g. `--teal-800`, `--maroon`,
`--gold`). Change a value there and it updates site-wide. Fonts load from Google Fonts via
a `<link>` in each page's `<head>`; if the site must work fully offline, self-host the
fonts and update those links.

## Deploying

The site is static, so any of these work — just upload the whole folder:

- **Netlify:** drag-and-drop this folder onto the Netlify dashboard, or connect a Git repo.
- **GitHub Pages:** push the folder to a repo and enable Pages on the default branch.
- **cPanel / shared hosting:** upload all files into `public_html` via the file manager or
  FTP.

Point the domain `icaapsp2026.com` at whichever host you choose.
