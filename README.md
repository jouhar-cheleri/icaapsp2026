# ICAAP & SP 2026 — Conference Website

Static website for the **International Conference on Advances in Applied Probability and
Stochastic Processes (ICAAP & SP 2026)** — December 19–21, 2026, KAHM Unity Women's
College, Manjeri, Kerala, India.

Plain HTML/CSS/JS. **No build step** — the files are the site.

## Structure

```
index.html            Home — hero, topics, important dates, how to reach
about.html            About — the conference, RMS, KMA, college, department, Manjeri
committee.html        Committee — academic programme committee, conveners, organizing committee
speakers.html         Speakers — keynote, plenary, invited
schedule.html         Schedule — placeholder until the programme is fixed
call-for-papers.html  Call for Papers — publication, topics, submission, mode, deadlines
registration.html     Registration — fees, payment (pending), accommodation, dates
participants.html     Registered Participants — placeholder until registration closes
gallery.html          Gallery — placeholder until after the conference
css/styles.css        All styling (colors, layout, components)
js/main.js            Mobile menu + subtle math-formula background
assets/               Logos, favicon, speaker photos
```

The nine pages mirror the structure of the previous edition's site (ICAPSSP 2025, NIT
Calicut). `CONTENT-MAP.md` records that mapping and what content is still outstanding.

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
or footer text, make the **same edit in all nine HTML files** (look for the comment blocks
`SHARED HEADER` and `SHARED FOOTER`).

## Things to finish before launch (search the code for `TODO`)

| What | Where | Currently |
|------|-------|-----------|
| Payment details + registration link | `registration.html` #register | "will be updated soon" notice |
| Accommodation details | `registration.html` #accommodation | "pending" notice |
| Detailed schedule | `schedule.html` | placeholder page |
| Participant list | `participants.html` | placeholder page |
| Photos | `gallery.html` | placeholder page |
| College website link | `about.html` #college | "link to be added" |
| About Manjeri section | `about.html` #manjeri | our draft — needs client review |
| Plenary / invited speaker photos | `speakers.html` | names only (keynote photos are in place) |
| Exact address / map pin | footer (all pages) + `index.html` #reach | best-effort address |

Note: **paper submission is by email**, not a form — a two-page extended abstract to the
conference address. There is no submission form link to fill in.

### Filling in a placeholder page
Each placeholder page has one `<div class="pending">…</div>` block marked with a `TODO`
comment. Replace that whole block with the real content.

### Adding real speaker photos
Drop the image files into `assets/speakers/` and point the card's `src` at your file. Square
images (roughly 1:1) look best.

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
