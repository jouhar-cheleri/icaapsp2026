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

## 4b. Page-by-page rework against the reference site (July 2026, ongoing)

Second round: each page's **section order** is being matched to the equivalent ICAPSSP 2025
page, one page per pass. Workflow is codified in `.claude/skills/page-pass/SKILL.md`.

### ✅ Home — done

Reference order (scraped verbatim): hero banner → "Supported by:" logo strip → welcome
paragraph → Topics → Advisory Committee (flat list) → Important Dates → How to reach
(Flight/Train/Bus) → "Register Here" → fee cards → footer.

`index.html` as it now stands:

| # | Section | Tint | Notes |
|---|---|---|---|
| 1 | Hero | — | Photo banner via `.hero::after` → `assets/hero.jpg`. CTAs + ANOR line **commented out** |
| 2 | Supported by: | plain | Renamed from "Organized By…". 3 empty `.logo-card--empty` slots |
| 3 | Summary paragraph | plain | New, in the reference's voice, under the logo strip |
| — | ~~About the Conference~~ | — | **Commented out** at the client's request, kept in file |
| 4 | Topics to be covered | tint | 18 items, unchanged |
| 5 | Advisory (IAPC, 16 names) | plain | Plain `.namelist` text, no cards, no photos, no link |
| 6 | Important dates | tint | 6 rows, unchanged |
| 7 | How to reach | plain | Flight / Train / Map — Bus deliberately **not** added |
| 8 | Register here | tint | `.feelines` — ₹2,500 / ₹4,000 / ₹6,000 + one button |
| 9 | Footer | — | Unchanged, still uses the existing logo files |

Open on Home:
- `assets/hero.jpg` — client to supply. Landscape, ≥1920 px wide. Overlay is light
  (52%→28% teal) with a text-shadow behind the hero type; revisit contrast once it lands.
- Three "Supported by" logos — client to supply; captions are currently `Support 1/2/…`.
- Everything in §4 above still stands (payment, accommodation, Bus, Train verification).

### ✅ About — done

Reference order: banner → "ICAPSSP 2025" (the conference) → host institution → Department of
Mathematics → About Calicut. No partner-society sections — they had none.

`about.html` as it now stands:

| # | Section | Tint | Notes |
|---|---|---|---|
| 1 | Page head "About" | — | Intro line no longer mentions partner societies |
| 2 | **ICAAP & SP 2026** (`#conference`) | plain | `h2` renamed from "Advances in Applied Probability & Stochastic Processes". "Meet the committee" button removed |
| 3 | About the College (`#college`) | tint | Moved up from 4th; logo block kept |
| 4 | Department of Mathematics (`#department`) | plain | **Split out** — was nested inside the College section behind an `<hr>` |
| — | ~~RMS~~ / ~~KMA~~ (`#rms`, `#kma`) | — | **Commented out** — no counterpart on the reference site. Logo files still used by the footer |
| 5 | About Manjeri & Malabar (`#manjeri`) | tint | "How to reach the venue" button removed. Still a draft needing local verification |

No inbound links pointed at `#rms` or `#kma`, so hiding them left no dead anchors.

### ✅ Committee — done, no changes

Reference order: Patron → Chairman → Conveners → Committee Members (26 bare names, plain
text, no affiliations). Their academic/advisory committee sits on **Home**, not here.

Ours already matches that shape — IAPC → Convener & Co-Conveners → Organizing Committee,
whose own order runs President → Vice President → General Secretary → Manager → Treasurer →
Principal → department faculty. Client decisions this pass: **keep the IAPC on both** Home
and Committee (they stay in sync manually), and **keep the `.person` card layout** rather
than converting to plain text. `committee.html` was not edited.

### ✅ Speakers — no changes
Client reviewed and approved the page as-is (Keynote 5 / Plenary 21 / Invited 13).

### ✅ Schedule — done
"See the speakers" button commented out (no cross-page links). The page is otherwise the
`.pending` placeholder until the day-wise programme arrives.

### ✅ Call for Papers — done

Reference order: abstract template link → Call for Papers text → Important Dates →
Publication → submission email → note on online presentation.

`call-for-papers.html` as it now stands:

| # | Section | Tint | Notes |
|---|---|---|---|
| 1 | Present your research (`#call-for-papers`) | plain | Invitation trimmed to the invite + "authors must present". "Email Your Abstract" button and "For Submissions" card kept |
| 2 | Submission deadlines (`#deadlines`) | tint | **Moved up** from last; "Registration & fees" button removed |
| 3 | Where accepted papers appear (`#publication`) | plain | **New section** — the ANOR/Springer line split out of the invitation paragraph |
| 4 | Mode of participation (`#mode`) | tint | Unchanged; matches their closing "Note" about online presentation |
| — | ~~Topics for contributory paper presentation~~ | — | **Commented out** — Home's 18-topic scope list covers these 10 |

Client declined the abstract-template section — we have no template to link. No inbound
anchors pointed at anything moved or hidden.

### ✅ Registration — fee tables simplified

The three fee tables were side by side in a `grid--3`. They are now **three stacked
`.feegroup` blocks**, one under another, each a heading plus simple `.feelines` rows —
the same style used for the fee summary on Home. No figures changed.

A **How to register** block was added under the fee groups: pay the fee → fill the Google
form (`TODO`: live URL pending) → upload the payment-receipt screenshot in the form, plus
the "complete both" reminder and the non-refundable notice. The payment-details pending
notice stays until bank/UPI details arrive.

Section order is unchanged: Registration fee → Accommodation → Dates to remember.
`.fee` / `.table-wrap` CSS is now unused by any page — left in place for future tables.

### ✅ Gallery — done

The "photographs will be added soon" placeholder was replaced by two sections:

| # | Section | Tint | Notes |
|---|---|---|---|
| 1 | Photographs (featured) | plain | `.carousel` — horizontal scroll-snap strip of **8 empty slots** |
| 2 | More photos | tint | `.photogrid` — reflowing grid of **9 empty slots** |

Each slot is a `<div class="ph">` (dashed 16:9 box). To fill one, replace that div with
`<img src="assets/gallery/…" alt="…">` — the `img` rules are already written. Slots can be
added or removed freely; both layouts reflow.

### Remaining pages, in order
Participants

## 5. Order of work
1. Confirm the 9-page structure and nav labels.
2. Build the 5 new/split pages by **moving existing markup** — no rewriting, no risk to content.
3. Update nav + footer in all 9 files (both blocks are duplicated per page).
4. Drop in client-supplied content gap by gap as it arrives.
