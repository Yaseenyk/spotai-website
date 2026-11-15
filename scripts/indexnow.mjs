// Tells IndexNow search engines (Bing, Yandex and others; Google does not use it) which pages are new or changed.
// Run after a deploy (needs fetch-depth: 2). By default it submits only pages whose source changed in the last commit,
// plus guides whose sitemap date is today (a scheduled guide goes live on its date with no commit of its own).
// Shared components, layouts and data are not mapped: a design change is not a content change. FORCE=1 submits the
// whole sitemap (capped at 10000, IndexNow's limit). DRY_RUN=1 prints the URLs without sending.
// The key is public by design: it is published at /<key>.txt so the engines can check that the site is ours.
import { execSync } from "node:child_process";
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const SITE = "https://spotai.streamerosai.com";
export const LIMIT = 10000;

/** Pure: sitemap URLs touched by a list of changed files. `entries` are { url, lastmod }. */
export function selectUrls({ site, changed, entries, today }) {
  const all = entries.map((e) => e.url);
  const set = new Set();
  for (const raw of changed) {
    const f = raw.split("\\").join("/");
    let m;
    if ((m = /^src\/content\/guides\/(?:([a-z]{2})\/)?([^/]+)\.md$/.exec(f))) {
      set.add(`${site}/${m[1] ? `${m[1]}/` : ""}guides/${m[2]}/`);
    } else if ((m = /^src\/pages\/(.+)\.astro$/.exec(f)) && !m[1].endsWith("404")) {
      // [lang] is an optional two-letter prefix, [slug] is any one segment, index is the folder itself.
      const segs = m[1].split("/").filter((s, i, a) => !(s === "index" && i === a.length - 1));
      const lang = segs[0] === "[lang]";
      const pattern = segs.map((s) => (s === "[lang]" ? "[a-z]{2}" : s === "[slug]" ? "[^/]+" : s)).join("/");
      const re = new RegExp(`^${site.split(".").join("[.]")}/${lang ? "" : "(?![a-z]{2}/)"}${pattern}${pattern ? "/" : ""}$`);
      all.filter((u) => re.test(u)).forEach((u) => set.add(u));
    }
  }
  for (const e of entries) if (e.url.includes("/guides/") && e.lastmod.slice(0, 10) === today) set.add(e.url);
  return [...set].filter((u) => all.includes(u)).slice(0, LIMIT);
}

async function main() {
  const keyFile = fs.readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  if (!keyFile) { console.log("No IndexNow key file in public/; nothing to do."); return; }
  const key = keyFile.replace(".txt", "");
  if (process.env.DRY_RUN !== "1") {
    let live = false;
    for (let i = 0; i < 12 && !live; i++) {
      try { live = (await (await fetch(`${SITE}/${keyFile}`)).text()).trim() === key; } catch { /* retry */ }
      if (!live) await new Promise((r) => setTimeout(r, 10000));
    }
    if (!live) { console.log("Key file is not live yet; skipping the ping."); return; }
  }
  // sitemap.xml is an index of sitemap-0.xml; read every child.
  const index = await (await fetch(`${SITE}/sitemap.xml`)).text();
  const children = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const entries = [];
  for (const c of children) {
    const xml = c.endsWith("sitemap.xml") || c.includes("sitemap-") ? await (await fetch(c)).text() : "";
    for (const m of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]+)<\/lastmod>)?/g)) entries.push({ url: m[1], lastmod: m[2] ?? "" });
  }
  const today = new Date().toISOString().slice(0, 10);
  let urls;
  if (process.env.FORCE === "1") urls = entries.map((e) => e.url).slice(0, LIMIT);
  else {
    let changed = [];
    // The daily scheduled rebuild has no commit of its own; diffing HEAD^ would resubmit the last push every day.
    if (process.env.GITHUB_EVENT_NAME !== "schedule") {
      try { changed = execSync("git diff --name-only HEAD^ HEAD", { encoding: "utf8" }).split("\n").filter(Boolean); } catch { changed = []; }
    }
    urls = selectUrls({ site: SITE, changed, entries, today });
  }
  if (!urls.length) { console.log("No indexable pages changed in this commit."); return; }
  console.log(`${process.env.DRY_RUN === "1" ? "Would submit" : "Submitting"} ${urls.length} URL(s) to IndexNow:\n  ${urls.join("\n  ")}`);
  if (process.env.DRY_RUN === "1") return;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST", headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls }),
  });
  console.log(`IndexNow answered HTTP ${res.status}`); // 200 or 202 means accepted
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) await main();
