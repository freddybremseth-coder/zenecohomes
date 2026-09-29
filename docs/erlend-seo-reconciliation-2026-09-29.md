# Erlend SEO reconciliation — 29 September 2026

Baseline: production/main `629f973` (#111). Both supplied PDF briefs were read in full.
All 111 PR records were inventoried; all used main as their base. Local main was safely
fast-forwarded from b573898. The previous pending production deployment is successful.

## PR disposition

| PRs | Finding and disposition |
| --- | --- |
| #110 | Editorial article, booking variant, social links and internal links already in #111. Superseded. |
| #108, #58 | Price/square-metre overlap already fixed by #109. Superseded. |
| #103, #96 | Region/inland FAQ accordions already in #104. Superseded. |
| #100 | Zeneco inventory scoping already in #104; explicitly retained. Superseded. |
| #97 | Review section nesting already in #99; newer testimonials retained. Superseded. |
| #106 | Missing storage disclosure recovered here, corrected to describe persistent localStorage ID accurately. |
| #51 | Specific model/property card titles recovered while retaining #109's price styling. |
| #85 | Structure already superseded by #86 onward; delayed chat loading recovered here. |
| #88 | Missing keyboard focus, contrast and form semantics recovered; newer editorial layouts retained. |
| #101 | Missing redirects, canonical links, guide author/date, area routing and multilingual metadata recovered selectively. Older layouts, reduced inventory scope, removed footer destinations and weaker guardrails were not imported. |
| #40 | Area excerpts and book links have a newer implementation in #42 and subsequent area/town pages. Its separate database-backed excerpt catalogue is not required by the SEO brief. |
| #80, #84 | Separate Corporate conversion tracking and new partner acquisition feature; not part of the Erlend SEO merge. Remain open for their own end-to-end integration review. |

Closed #2, #92 and #98 have replacement merges #3, #93 and #99/#94/#95 respectively.
All other PRs are already merged.

## Brief cross-check

- Homepage optimized image; now explicit supported quality 70 and delayed chat bundle. Removed consecutive download/contact forms by sending the final contact CTA to booking.
- /eiendommer: maximum 24 cards, pagination, Boligmatch and links to areas, guide, buying process and viewing trip retained.
- Canonical guide/area hierarchy, old guide redirects and guide-versus-magazine separation retained. Added missing legacy guide redirects and removed redirected landing pages from sitemap.
- Main buyer guide includes process steps, area-first advice, property types and selected listings, portal caveats, legal/NIE/financing sections, cost table, experience, FAQs and contextual internal links requested in the second PDF.
- Author profile and updated date retained on main/article guides; added to the custom new-build guide.
- Buying-process trust page, viewing trip, reviews, team profiles, four footer groups, social links and privacy/storage pages retained.
- Booking has name, phone, email and optional message; information meeting is an interest registration because no confirmed meeting date was supplied. No date invented.
- Loan versus bank-account guides and purchase versus running-cost guides remain separate and contextually linked. The PDF asks to assess consolidation, not unconditionally merge distinct topics.
- Canonical town slugs normalize known CRM typos, redirect aliases and avoid duplicate static/live profiles. Explicitly hidden profiles remain hidden; important region routes have offline fallbacks.
- Customer interviews/case studies and deeper first-person anecdotes require real source material; no customer stories were invented. Keyword volumes in the PDFs are research inputs, not verified live ranking claims.

## Verification

- Expanded metadata audit evaluates generated data instead of matching only source literals: 134 data records and 43 pages, including 23 Corporate articles.
- Redirect checks execute actual config, including map-generated rules.
- Seven Node tests pass (redirect coverage, canonical area aliases/enrichment/offline behavior, existing budget and referral-safety checks).
- TypeScript and full Next production build pass.
- HTTP audit of 32 representative pages: 200, one H1, canonical present, title 50–60 and description 140–160, no missing image alt attributes.
- Browser mobile review uses a 390 px viewport. Production verification must be repeated after merge.

## Remaining operational limitation

The upstream property inventory response is about 6.2 MB. Next reports that it exceeds
the 2 MB fetch-cache limit during builds. Builds complete, but the feed needs a smaller
list projection or upstream pagination for a complete server-side performance fix.
This review does not claim all Core Web Vitals are green or that Google has reindexed the changes.
