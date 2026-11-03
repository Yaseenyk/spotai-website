/**
 * Post-build: the sitemap integration writes sitemap-index.xml only. Some crawlers and audit tools
 * try /sitemap.xml first, so publish the same index there too.
 */
import { copyFileSync } from "node:fs";
copyFileSync("dist/sitemap-index.xml", "dist/sitemap.xml");
console.log("sitemap.xml: copied from sitemap-index.xml");
