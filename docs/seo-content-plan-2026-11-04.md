# SpotAI story guides: research and plan, 4 November 2026

Five first-person story guides, each built on one verifiable episode and aimed at one search keyword. India, English. Tool: treg (DataForSEO Labs, SERP). Spend about $0.19 of a $0.40 cap (6 seeds at 0.012 to 0.013, 4 more seeds at 0.012 to 0.015, 4 ranked-keywords at 0.014 to 0.015, 8 SERPs at $0.00015).

## Seeds searched (India, volumes are monthly)

gym fee reminder, ai squat form check, gym app in hindi (all three returned nothing: no measurable volume), gym attendance app (40), gym management software free, gym member management (10), squat form, gym membership fees, gym attendance (20), gym software.

## Keyword table

| Keyword | Vol | KD | Intent | Who ranks (SERP, Nov 2026) |
|---|---|---|---|---|
| gym software | 720 | 22 | commercial | Capterra India, koreapp.fit, gyms24.in, fitsync.co.in guide, okfit.in |
| gym software india | 70 | 52 | commercial | same set |
| gym management software free | 110 | 51 | commercial | Capterra free list, GymBook (Play), PushPress, Zoho Creator, thegympilot blog |
| free gym software / free gym management app | 50 / 20 | 54 / - | commercial | same |
| best gym management software in india | 110 | - | listicle | okfit, koreapp, fitpluscrm, Capterra, fitsync, gymforce, mygymdesk |
| gym attendance app | 40 | - | transactional | Play Store apps (GymOpsHQ), okfit, koreapp, gyms24 |
| squat form | 1,000 | 35 | informational | grindkaro, repfitness, sensai blog, App Store Squat Checker, formchecker.ai, Reddit |
| ai squat form checker | unmeasured (seed empty) | - | commercial | App Store Squat Checker, gymaholic tool, formchecker.ai: no strong incumbent |
| best gym app | 390 | 21 | commercial | (from 3 Nov research) |
| gym membership fees | 480 | 6 | informational | mygymdesk at 10 (covered by existing fee guides, so skipped) |
| gym fee reminder, gym app in hindi | 0 measured | - | - | keyword tool returned no data |

Honest read: this niche is tiny. Only "squat form" (1,000) and "gym software" (720) have real volume; the rest are 10 to 140. These stories are a test of format and ranking potential, not a traffic bet.

## Competitor analysis (ranked-keywords, plus public pages read in November 2026)

- gymforce.in: 42 ranked keywords. Wins "gym management software" at 5 and "gym software" at 2, plus eSSL biometric device model names (KD 15 to 39, 720 to 1,300).
- okfit.in: 47 keywords, led by calculators (1RM at 5,400 per variant) and "gym website". Utility pages beat product pages.
- mygymdesk.com: 15 keywords, wins gym fee pages ("gym membership fees" at 10). Its pricing page, read in November 2026: paid plans from 699 rupees a month plus GST, a 7-day trial, a free plan at 1.5% of collections, member apps on all plans.
- gyms24.in, read in November 2026: 399 rupees a month flat for unlimited members after a one-month trial, QR/ID/name check-in, WhatsApp reminders, web-based with no member app mentioned.
- sensai.fit: 19 keywords, mostly brand and health explainers; its AI form-check roundup (read November 2026) states single-camera limits (about 5.8 degrees average angle error in one study) and does not say where other apps process video.

Gap for stories: nobody in the SERPs writes about building this from the inside. Competitors publish listicles and feature pages; a dated, sourced first-person account is a different format with different anchors.

## The five stories

All episodes come from this repo: `git log`, `src/site.ts`, `src/i18n/features/en.ts`, `public/llms.txt`. Nothing invented; where I could not verify a personal incident (e.g. a specific wrongly flagged rep, a specific mismatched register) the guides describe the design decision instead and label hypotheticals.

1. **free-gym-management-software** (publish 2026-11-05). Primary: free gym management software. Secondary: gym management software free, free gym software, pilot, day 91. Episode: commit 672a61b (2 Nov 2026, "Pilot open India-wide") deleting `city: 'Hyderabad'` from `SITE.pilot` in `src/site.ts`. Why it can win: KD 51 head is hard, but the SERP is directories and vendor pages; an honest "what free means" with cited pricing models is distinct.
2. **gym-software-for-small-gyms** (2026-11-08). Primary: gym software (720, KD 22). Secondary: gym software india, gym software price. Episode: commits 727fe5a and 6c41667 (2 Nov, staff console in the app; desk checks in by QR or name; FAQ says members need not install). Why: lowest KD with real volume; nobody ranks a desk-first narrative.
3. **ai-squat-form-checker** (2026-11-11). Primary: ai squat form checker. Secondary: squat form, squat form check app, ai form check. Episode: hero commits 4067fe1 (02:42), ab7be06 (02:50), bdb1883 (02:57) on 1 Nov, plus the "This was wrong" button and trainer wrong-rate in `features/en.ts` ai-coach. Why: no incumbent owns the phrase; the on-device and fallibility angle is concrete.
4. **gym-attendance-app** (2026-11-14). Primary: gym attendance app. Secondary: gym check in app, gym attendance register. Episode: check-in page facts (QR refresh 100 s, desk by name, live arrivals) in `features/en.ts` check-in and owners. Risk: close to existing `gym-attendance-tracking-app` (19 Nov); this one is the build story, that one the comparison. Why: SERP is mostly Play Store apps and software pages.
5. **best-gym-app-in-your-language** (2026-11-17). Primary: best gym app (390, KD 21). Secondary: gym app in hindi, gym app india, regional languages. Episode: commit 511dff8 (2 Nov, 7 languages) and the English-only coach tips in `site.ts` FAQ. Why: low KD; honest scope split is distinctive.

## Not done / limits

- The SpotAI app repo is not on this machine, so no app commit history was used.
- No Search Console or GA4 data pulled; measure after 3 weeks by page.
- "gym fee reminder", "ai squat form check" and "gym app in hindi" returned no volume data, so those are unmeasured, not zero.
