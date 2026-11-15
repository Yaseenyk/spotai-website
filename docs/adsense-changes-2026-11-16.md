# AdSense readiness changes, spotai.streamerosai.com (16 Nov 2026)

Context: streamerosai.com was rejected for "Low-value content" at domain level; subdomains are judged with it. Policy notes are in the portfolio repo, `docs/adsense-readiness-2026-11-16.md`. Ads stay OFF; `scripts/verify-no-ads.mjs` passes.

## Audit (fresh build, built `dist/`)

- 151 pages at build time, 30 in the sitemap before the change (7 languages: en, hi, te, ta, kn, mr, bn all indexed). 494 pages when every scheduled guide is built (`check:schedule`).
- No placeholder or "coming soon" text in pages (the grep hits are form input placeholders). Internal link check over every built page: no broken links (only `/404/` on the 404 page itself, harmless).
- `/demo/` is the offline member app (a script shell, no text). It is `Disallow`ed in robots.txt and not in the sitemap. It is an app, not a content page.
- Missing before: About, Contact, Terms pages. Privacy was 220 words and did not mention the first-party counter, cookies detail or future ads.

## Changes

| Page | Before | After |
| --- | --- | --- |
| /about/ | did not exist | new: who (Yaseen Khatib, Hyderabad), what SpotAI is, why, honest status (early product, no customer numbers), guides policy, contact |
| /contact/ | did not exist | new: email, WhatsApp, what to write for pilot, help, data, corrections; location |
| /terms/ | did not exist | new: use, health information limits, accuracy, pilot, third parties, liability, law |
| /privacy/ | 220 words; GA, Clarity, EmailJS | about 480 words: adds first-party pulse counter (no cookie, no IP, DNT/GPC respected, 90-day deletion), hosting logs, future AdSense with opt-out links, demo app stays on device |
| Footer (every page, all 7 languages) | Privacy + email | About, Contact, Privacy, Terms + email. Shown on all 150+ pages |
| Language switcher on English-only pages | pointed to non-existent /xx/privacy/ | falls back to the language home (removes 6 broken links per page) |

Trust pages are English only; the footer links in other languages go to the English pages. Sitemap: 30 to 33 pages.

## Live guides and the queue

- 16 English guides are live in the sitemap (12 markdown plus 4 hand-built); each rendered with 550 to 1,270 words (hand-built ones 440 to 860), a sourced answer box, FAQ and CTA. The thinnest are the calculators (1RM about 550 words, fee calculator about 590), which are real working tools with explanation.
- Queue: 73 English guides in total, release dates 3 Nov 2026 to 31 May 2027, about two per week; plus 300 translations (50 per language) following the English dates. No dates changed, nothing deleted. All markdown sources are 870 to 1,680 words.

## Remaining weaknesses (honest)

1. Templating risk: the 10 food guides (calories in dosa, idli, poha, rice, roti, biryani, dal and so on) share one structure (answer box, per-100g table, FAQ, CTA). Numbers are sourced and different per page, but a reviewer may see a template. They release from 10 Dec, not before.
2. Translations are 300 pages across six languages, all indexable. Native review is confirmed by the owner, but a domain-level reviewer sampling Hindi or Tamil pages will see a large multilingual footprint on a young domain. Consider whether all six are needed.
3. Non-English hub pages are short (guides index 150 to 220 words, pricing 190 to 260, features index 190 to 275 words) because the text is mostly card labels. Not noindexed: they are navigation and grow as translations release.
4. The product itself is early: no customers, reviews or results are shown (correct and honest, but "substantial unique value" rests on the guides and the demo app).
5. Domain-level: the guides serve gym members and owners, but the family also includes unrelated utility sites; that mix is out of this repo's control.

## Owner to-dos

- Read the Terms (jurisdiction: Hyderabad, liability wording) and confirm; I wrote them, not a lawyer.
- Confirm the WhatsApp number on the Contact page is the one you want public.
- Update the privacy notice before AdSense is enabled (cookie consent for EU visitors may be needed then).
