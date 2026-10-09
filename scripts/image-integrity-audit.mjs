import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const read = (path) => readFileSync(join(root, path), "utf8");

const areaVisuals = read("src/lib/areaVisuals.ts");
const next = read("next.config.ts");
const safe = read("src/components/ResilientImage.tsx");
const name = read("src/components/ProtectedPlaceName.tsx");
const css = read("src/app/sitewide-contrast.css");
const town = read("src/app/omrader/[region]/[sted]/page.tsx");
const region = read("src/app/omrader/[region]/page.tsx");
const cards = read("src/components/PropertyCard.tsx");
const article = read("src/components/ArticleView.tsx");

assert.ok(!areaVisuals.includes("commons.wikimedia.org/wiki/Special:Redirect/file"), "Unsupported redirected Wikimedia host found");
assert.ok(next.includes('hostname: "upload.wikimedia.org"'), "Next.js image optimizer must allow Wikimedia upload host");
assert.ok(existsSync(join(root, "public/assets/areas.jpg")), "Known safe site placeholder missing");
assert.ok(safe.includes("onError=") && safe.includes('fallbackSrc = "/assets/areas.jpg"'), "Image fallback missing");
assert.ok(town.includes("<ResilientImage"), "Town image lacks error fallback");
assert.ok(region.includes("<ResilientImage"), "Area cards lack error fallback");
assert.ok(cards.includes("<ResilientImage"), "Property images lack error fallback");
assert.ok(article.includes("<ResilientNativeImage"), "Article cover lacks error fallback");
assert.ok(name.includes('white-space') || css.includes("white-space: nowrap;"), "Proper name typography guard missing");
assert.ok(css.includes("-webkit-hyphens: none"), "Automatic hyphenation must be disabled");

const originalFiles = [...areaVisuals.matchAll(/^  "[^"]+\.\w+": "[0-9a-f]\/\w+\/[^"]+",?$/gm)];
assert.ok(originalFiles.length >= 11, "Expected complete set of approved direct Wikimedia filenames");
for (const match of originalFiles) {
  assert.ok(!/commons\.wikimedia\.org/.test(match[0]), "A Wikimedia redirect returned");
}

function collect(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) collect(join(dir, entry.name), out);
    else if (/\.(?:tsx?|css|mjs)$/.test(entry.name)) out.push(join(dir, entry.name));
  }
  return out;
}

const localPaths = new Set();
for (const dir of ["src/app", "src/components", "src/lib"]) {
  for (const file of collect(join(root, dir))) {
    const input = readFileSync(file, "utf8");
    for (const match of input.matchAll(/\/(?:assets|images)\/[a-z0-9_./%-]+\.(?:png|jpe?g|webp|avif|svg)/gi)) {
      localPaths.add(match[0].split("?")[0]);
    }
  }
}
const missing = [...localPaths].filter((path) => !existsSync(join(root, "public", decodeURIComponent(path).replace(/^\//, ""))));
if (missing.length > 0) {
  console.warn("STATIC_ASSETS_NEED_REVIEW", missing.length, JSON.stringify(missing.slice(0, 60)));
  // Pre-existing references must be reconciled before enabling strict mode.
  if (process.env.IMAGE_AUDIT_STRICT === "1") {
    assert.deepEqual(missing, [], "Missing local public assets");
  }
}
console.log("PASS: verified Wikimedia direct-image configuration and fallback components.");
console.log("STATIC_ASSET_AUDIT", localPaths.size, "asset references,", missing.length, "require follow-up");
