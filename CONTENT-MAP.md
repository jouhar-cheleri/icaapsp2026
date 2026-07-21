# Content reorganisation map — ICAAP & SP 2026

Reference: ICAPSSP 2025, NIT Calicut — https://sites.google.com/nitc.ac.in/icapssp25/home (all 9 pages scraped)
Our sources: `index.html`, `about.html`, `speakers.html`, `registration.html`, `icaap brochure.docx`, `Home page content.docx`

## 1. What we actually have (content inventory)

Everything in the brochure is already on the site. Nothing has been lost in the build.

| Content block | Words / count | Currently lives in | Status |
|---|---|---|---|
| Conference title, dates, venue, organizers | — | `index.html` hero | ✅ |
| Organizer + RMS + KMA logo strip | 3 logos | `index.html` | ✅ |
| About the Topic / Scope of the Conference | 2 paras | `index.html` | ✅ |
| Topics to be covered | 18 items | `index.html` | ✅ |
| Important dates | 6 rows | `index.html` **and** `registration.html` (duplicated) | ✅ |
| How to reach — Flight | full | `index.html` | ✅ |
| How to reach — Train | brochure text is **truncated** ("Tirur Railway Station:") | `index.html` (site has written filler) | ⚠️ verify |
| How to reach — Bus | — | — | ❌ absent (ref site had it) |
| Map link | generic search URL | `index.html` | ⚠️ needs real pin |
| About RMS | 3 paras | `about.html` | ✅ |
| About KMA | 3 paras | `about.html` | ✅ |
| About the College | 1 para | `about.html` | ✅ |
| About the Department | 1 para | `about.html` | ✅ |
| International Academic Programme Committee | **16 members** + chairperson | `about.html` | ✅ |
| Organizing Committee | **13 members** with designations | `about.html` | ✅ |
| Convener + 2 Co-Conveners | 3 cards | `about.html` | ✅ |
| Keynote speakers | **5**, all 5 photos present in `assets/speakers/` | `speakers.html` | ✅ |
| Plenary speakers | **21** | `speakers.html` | ✅ |
| Invited speakers | **13** | `speakers.html` | ✅ |
| Publication — ANOR (Springer) special issue | — | `registration.html` + hero | ✅ |
| Topics for contributory paper presentation | 10 items | `registration.html` | ✅ |
| **For Submissions** — 2-page extended abstract → `icaapsp2026@unitywomenscollege.ac.in` | — | `registration.html` | ✅ |
| Mode of participation | — | `registration.html` | ✅ |
| Registration fee — 3 tables (India-only / India+paper / International) | 8 rows | `registration.html` | ✅ |
| Contact — email, WhatsApp, address, website | — | footer, all pages | ✅ |

**Correction to my last message:** the organizing committee, the IAPC, the speaker list, the publication policy, the fee structure and the submission route were all already complete. The submission route is **email, not a form** — so the `Submit Your Paper` button pointing at `#` is not a missing link, it's a button that shouldn't exist as a form link. Same for the fee tables: the brochure lists flat amounts with **no GST line and no early-bird tier** — unlike 2025. That's a decision to confirm, not a gap.

## 2. Reference structure vs. ours

| # | ICAPSSP 2025 page | Our equivalent content | Where it sits today |
|---|---|---|---|
| 1 | Home | hero, logos, scope, topics, dates, how to reach | `index.html` ✅ |
| 2 | Photos | — | ❌ nothing |
| 3 | Registered Participants | — | ❌ nothing |
| 4 | About (conference, institution, department, **host city**) | conference, RMS, KMA, college, department | `about.html` — city missing |
| 5 | Organising Committee | IAPC 16 + OC 13 + conveners 3 | buried at the bottom of `about.html` |
| 6 | Speakers | 39 speakers in 3 tiers (they had 14 flat) | `speakers.html` ✅ **richer than theirs** |
| 7 | Schedule | — | `speakers.html` placeholder |
| 8 | Call for Papers | ANOR, topics, submissions, mode | inside `registration.html` |
| 9 | Registration | 3 fee tables, accommodation, dates | `registration.html` |

The imbalance: `registration.html` carries three pages' worth of content, `about.html` carries two, and `speakers.html` carries two. That's the client's complaint — not missing content, **buried** content.

## 3. Proposed 9 pages

| # | Page | Content moved in | Net new writing needed |
|---|---|---|---|
| 1 | `index.html` **Home** | hero · logos · scope · topics (18) · important dates · how to reach · fee summary + CTA | none |
| 2 | `about.html` **About** | About the Topic · Scope · RMS · KMA · College · Department · **About Manjeri & Malabar** | 1 new section |
| 3 | `committee.html` **Committee** | IAPC (16) · Organizing Committee (13) · Convener & Co-Conveners (3) | none — lift from `about.html` |
| 4 | `speakers.html` **Speakers** | Keynote (5, with photos) · Plenary (21) · Invited (13) | none |
| 5 | `schedule.html` **Schedule** | placeholder until programme is fixed | client input |
| 6 | `call-for-papers.html` **Call for Papers** | ANOR publication · topics for contributory papers (10) · For Submissions · Mode of participation · submission deadlines | none — lift from `registration.html` |
| 7 | `registration.html` **Registration** | 3 fee tables · **how to pay** · accommodation · dates to remember | client input |
| 8 | `participants.html` **Registered Participants** | placeholder / embedded sheet | client input |
| 9 | `gallery.html` **Gallery** | campus & past-event photos now, conference photos later | client input |

Design, colours, type and the maths background stay exactly as they are. Only the nav grows from 4 to 9 items and needs a compact treatment on mobile.

## 4. Real gaps — the short list

### Blocking a launch
1. **How to pay the registration fee.** The brochure gives amounts but no mechanism: no bank account/IFSC, no UPI/QR, no gateway, no registration form. Right now a reader knows the price and has no way to pay it. *(Also: are the amounts GST-inclusive? Is there an early-bird tier, or is it single-rate as the brochure implies?)*
2. **Accommodation.** The brochure says "for more details visit the conference website" — which is this website. Need options, tariff, and how to request.

### Needed to fill the new pages
3. **Schedule** — day-wise programme for Dec 19–21 (sessions, times, halls, breaks).
4. **Gallery** — usable photos (campus, department, past seminars) so the page isn't empty at launch.
5. **Registered participants** — a published Google Sheet once registration opens.
6. **About Manjeri / Malabar** — 2–3 paragraphs on the host town and region, matching the reference site's "About Calicut". *I can draft this — just approve.*

### Small, quick fixes
7. **College website URL** — still "link to be added" in `about.html`.
8. **RMS and KMA website links** — the brochure points readers to their official sites without giving the URLs.
9. **Exact Google Maps pin** for the venue.
10. **"By Train" details** — the brochure is cut off mid-sentence at "Tirur Railway Station:". Confirm the current site text is right.
11. **"By Bus"** — absent entirely; the reference site had it.
12. **Photos for plenary and invited speakers** — only the 5 keynote photos exist. Optional; the tiered layout works without them.
13. **`Submit Your Paper` button** — submission is by email, so this should become a `mailto:` or be removed rather than wait for a form URL.

### Already correct, flagging for the record
14. Both docx files say **"December 9, 20 and 21, 2026"** — a typo for 19. The site already says 19–21. If the brochure is being reprinted, fix it there.

## 5. Order of work
1. Confirm the 9-page structure and nav labels.
2. Build the 5 new/split pages by **moving existing markup** — no rewriting, no risk to content.
3. Update nav + footer in all 9 files (both blocks are duplicated per page).
4. Drop in client-supplied content gap by gap as it arrives.
