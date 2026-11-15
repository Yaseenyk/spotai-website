// Run with: node --test scripts/indexnow.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { selectUrls } from "./indexnow.mjs";

const site = "https://spotai.example";
const u = (p, lastmod = "") => ({ url: `${site}${p}`, lastmod });
const entries = [u("/"), u("/hi/"), u("/pricing/"), u("/hi/pricing/"), u("/guides/"), u("/guides/gym-etiquette/", "2026-11-01T00:00:00.000Z"), u("/hi/guides/gym-etiquette/"), u("/features/squat/"), u("/guides/new-one/", "2026-11-15T00:00:00.000Z")];
const pick = (changed, today = "2026-11-20") => selectUrls({ site, entries, changed, today }).map((x) => x.slice(site.length));

test("an English guide change selects that guide only; a translation selects the translated URL", () => {
  assert.deepEqual(pick(["src/content/guides/gym-etiquette.md"]), ["/guides/gym-etiquette/"]);
  assert.deepEqual(pick(["src/content/guides/hi/gym-etiquette.md"]), ["/hi/guides/gym-etiquette/"]);
});
test("a page file selects its English URL, and [lang] files their translated URLs", () => {
  assert.deepEqual(pick(["src/pages/pricing.astro"]), ["/pricing/"]);
  assert.deepEqual(pick(["src/pages/[lang]/pricing.astro"]), ["/hi/pricing/"]);
  assert.deepEqual(pick(["src/pages/index.astro"]), ["/"]);
});
test("a dynamic [slug] page selects every URL it renders", () => {
  assert.deepEqual(pick(["src/pages/features/[slug].astro"]), ["/features/squat/"]);
});
test("a guide whose sitemap date is today is submitted without any commit", () => {
  assert.deepEqual(pick([], "2026-11-15"), ["/guides/new-one/"]);
});
test("shared components and unrelated files select nothing", () => {
  assert.deepEqual(pick(["src/components/Nav.astro", "README.md", "public/og/a.png"]), []);
});
