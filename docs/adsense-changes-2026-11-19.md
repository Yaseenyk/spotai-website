# AdSense readiness changes, spotai.streamerosai.com (19 Nov 2026)

Follow-up to `docs/adsense-changes-2026-11-16.md`, after the owner lifted the content freeze. Ads stay OFF: no ad code, no `ADSENSE_CLIENT`; `scripts/verify-no-ads.mjs` passes (353 built files). No text was machine-translated.

## Which languages are indexable (checked in code and in `dist/`)

The earlier decision "Hindi indexed, other languages noindex" is out of date. `src/i18n/indexed.mjs` has `INDEXED_LANGS = ['en', 'hi', 'te', 'ta', 'kn', 'mr', 'bn']`: te, ta, kn, mr and bn were promoted on 15 Nov 2026 (commit `bab3ca1`) after the owner confirmed the translations. The built pages agree: every language's pages carry `index, follow`, and all seven languages were in the sitemap (169 URLs). No language is non-indexed, so there was nothing to remove from the sitemap on that ground. I did not reverse the owner's decision.

## Changes

| Page(s) | Change | Why |
| --- | --- | --- |
| `/hi/guides/`, `/te/guides/`, `/ta/guides/`, `/kn/guides/`, `/mr/guides/`, `/bn/guides/` (guides index, 177 to 250 words) | `noindex, follow`; removed from the sitemap; dropped from every hreflang list | Their language is indexed, and the page is a thin list of card labels. Stays live and linked. |
| `/hi/features/` ... `/bn/features/` (features index, 181 to 264 words) | same | same |
| `/hi/pricing/` ... `/bn/pricing/` (pricing, 177 to 248 words) | same | same |
| English `/guides/`, `/features/`, `/pricing/` | hreflang now lists only `en-IN` and `x-default` | hreflang must not point at noindexed pages; reciprocal pairs stay consistent. |
| `sitemap.xml` | 169 to 151 URLs (minus the 18 pages above) | Only pages meant for the index. |

Mechanism: `THIN_HUBS` and `isThinHub()` in `src/i18n/indexed.mjs`, used by `src/layouts/Layout.astro` (robots meta and hreflang) and the sitemap filter in `astro.config.mjs`. Canonicals stay self-referencing, as for any noindexed language.

Not noindexed, on purpose: `/xx/install-iphone/` (262 to 355 words; a real step-by-step page, and Indic-script word counts run low against English for the same content), all translated feature pages (434 words and up), language homes (1,435 words and up), and the translated guides (each a full article).

When the scheduled translations release, the translated guides indexes grow to about 930 to 1,310 words (measured in the `check:schedule` build as of 31 May 2027). Once a language's index has well over 500 words of real blurbs, remove `'/guides/'` from `THIN_HUBS` to index it again. The features index and pricing will stay short unless a person writes more for them.

## The 10 food guides

Checked, and no edit needed:

- **Release spacing:** they go out on 10, 14, 17, 21, 24, 28, 31 Dec 2026 and 4, 7, 11 Jan 2027, Monday and Thursday: never more than two in a week. That meets the cap without moving any date (moving them would also shift translated guides, which must keep the English publish date).
- **Structure:** apart from the site-wide guide frame (answer box, FAQ, CTA, sources list, which every guide has), the section plans differ by food. Rice has raw vs cooked and katori/bowl/cup portions; roti has atta-weight vs finished-size methods, phulka vs chapati and multigrain; poha builds a plate from its parts and compares upma; idli covers fermentation protein sources and the NIN portion guidance; dosa covers the oil and size; biryani covers why recipes vary; rice vs chapati makes four separate comparisons (cooked, raw, portion, per 100 kcal) plus fibre and brown rice; dal pages rank split dals and give cooked values and target maths; roti plus sabzi tabulates eight sabzis. All are 1,485 to 1,676 words with their own sourced tables (sources read 16 Nov 2026).

I did not add further sections: each would need new sourced facts, and the existing pages already carry their own food-specific sections.

## Gates run

- `npm run build` (astro build, llms-full: 37 of 37 sitemap pages, copy-sitemap, verify-no-ads): pass.
- `npm run check:schedule`: 73 guides and 300 translations build, sit in their index and (indexed languages) the sitemap, and link only to live pages: pass.
- `node --test scripts/indexnow.test.mjs`: 5 of 5 pass.
- `astro check` could not run: `@astrojs/check` is not installed in `node_modules` (it asks to install interactively). Unchanged from before.

## What remains

1. Cadence of the near-term English guides: 21, 23, 26 and 28 Nov put three guides in the week of 23 to 29 Nov, and the week of 16 to 22 Nov has five (16 to 19 are already live). That is above the two-a-week rule the portfolio site uses. I did not move them (two of them have translations tied to the same date). The owner may want to push `weight-loss-diet-plan-in-hindi` (21 Nov) and `gym-diet-plan-in-hindi` (28 Nov) back by a few weeks.
2. 300 translated guides across six languages is a large multilingual footprint for a young domain. All six are owner-confirmed and indexed; whether all six are needed is the owner's call.
3. English `/pricing/` (222 words) and `/features/` (233 words) are short too. They are core product pages and stay indexed; more real text (written by the owner) would help.
4. The product is early, with no customers or reviews shown (honest, but the "unique value" rests on the guides and the demo).
5. Owner to-dos from 16 Nov still stand: read the Terms, confirm the public WhatsApp number, update the privacy notice before ads are enabled.
