import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const read = (path) => readFileSync(join(root, path), "utf8");

const areaVisuals = read("src/lib/areaVisuals.ts");
const areaGuide = read("src/lib/areaGuideContent.ts");
const areaHub = read("src/app/omrader/page.tsx");
const next = read("next.config.ts");
const safe = read("src/components/ResilientImage.tsx");
const name = read("src/components/ProtectedPlaceName.tsx");
const css = read("src/app/sitewide-contrast.css");
const town = read("src/app/omrader/[region]/[sted]/page.tsx");
const region = read("src/app/omrader/[region]/page.tsx");
const cards = read("src/components/PropertyCard.tsx");
const article = read("src/components/ArticleView.tsx");
const gallery = read("src/components/PropertyGallery.tsx");
const galleryEs = read("src/components/es/SpanishPropertyGallery.tsx");

assert.ok(!areaVisuals.includes("commons.wikimedia.org/wiki/Special:Redirect/file"), "Unsupported redirected Wikimedia host found");
assert.ok(next.includes('hostname: "upload.wikimedia.org"'), "Next.js image optimizer must allow Wikimedia upload host");
assert.ok(areaVisuals.includes("return key ? AREA_VISUALS[key] || null : null"), "Area photo selector must use strict normalized keys");
assert.ok(!areaVisuals.includes("target.includes(key)") && !areaVisuals.includes("key.includes(target)"), "Substring matching incorrectly borrows photos from neighboring towns");
assert.ok(areaVisuals.includes('"alfas del pi": commons("L\'Alfàs del Pi.jpg")'), "Alfàs must not show Albir beach");
assert.ok(areaVisuals.includes('teulada: commons("Teulada.jpg")'), "Teulada must not show Moraira");
assert.ok(!areaGuide.includes("profile.photo_url") && !areaGuide.includes("getPrimaryImage("), "Unverified CMS/property photos must not become town photos");
assert.ok(!areaGuide.includes('return "/assets/areas.jpg"'), "Generic image fallback is not a photograph of the town");
assert.ok(!areaHub.includes("profiles.find((item) => areaMatchesRegion"), "Regional card must not choose the first arbitrary town");
assert.ok(areaHub.includes('fallbackSrc=""') && town.includes('fallbackSrc=""') && region.includes('fallbackSrc=""'), "Area images must not silently fall back to an unrelated photo");
assert.ok(town.includes("backgroundImage: image") && town.includes("linear-gradient(100deg, #172a34"), "Town hero must override generic global area background");
assert.ok(region.includes('backgroundImage: "linear-gradient(110deg, #192e3b'), "Region hero must not reuse a generic photographic placeholder");
assert.ok(existsSync(join(root, "public/assets/areas.jpg")), "Known safe site placeholder missing");
assert.ok(safe.includes("onError=") && safe.includes('fallbackSrc = "/assets/areas.jpg"'), "Image fallback missing");
assert.ok(town.includes("<ResilientImage"), "Town image lacks error fallback");
assert.ok(region.includes("<ResilientImage"), "Area cards lack error fallback");
assert.ok(cards.includes("<ResilientImage"), "Property images lack error fallback");
assert.ok(article.includes("<ResilientNativeImage"), "Article cover lacks error fallback");
for (const [language, gallerySource] of [["no", gallery], ["es", galleryEs]]) {
  assert.ok(gallerySource.includes("<ResilientImage"), language + " gallery thumbnails require fallbacks");
  assert.ok(gallerySource.includes("<ResilientNativeImage"), language + " fullscreen viewer requires a fallback");
  assert.ok(!gallerySource.includes("backgroundImage: `url(${image})`"), language + " gallery CSS backgrounds hide errors");
}
assert.ok(name.includes('white-space') || css.includes("white-space: nowrap;"), "Proper name typography guard missing");
assert.ok(css.includes("-webkit-hyphens: none"), "Automatic hyphenation must be disabled");

// Wikimedia Commons uses an MD5-derived shard path calculated from the
// canonical UTF-8 file name (spaces replaced with underscores). A valid-looking
// but wrong shard silently breaks image delivery, so validate every mapping.
const wikimediaEntries = [...areaVisuals.matchAll(/^  "([^"]+[.](?:jpg|jpeg|png))": "([0-9a-f][/][0-9a-f]{2}[/][^"]+)",?$/gmi)];
for (const [, fileName, remotePath] of wikimediaEntries) {
  const canonical = fileName.replaceAll(" ", "_");
  const shard = createHash("md5").update(canonical, "utf8").digest("hex");
  assert.ok(
    remotePath.startsWith(`${shard[0]}/${shard.slice(0, 2)}/`),
    `Invalid Wikimedia storage shard for ${fileName}: ${remotePath}`,
  );
  assert.equal(
    decodeURIComponent(remotePath.split("/").slice(2).join("/")),
    canonical,
    `Wrong Commons source filename for ${fileName}`,
  );
}
assert.ok(wikimediaEntries.length >= 20, "Expected verified Commons file manifest for Northern and Southern Costa Blanca and Costa Cálida");
// Every core SEO area profile must have its own exact-match photo.
// RealtyFlow may add more areas dynamically; they retain the neutral
// no-photo state until a local source is verified.
const realtyflow = read("src/lib/realtyflow.ts");
const staticProfiles = realtyflow.slice(realtyflow.indexOf("const STATIC_AREA_PROFILES:"), realtyflow.indexOf("];", realtyflow.indexOf("const STATIC_AREA_PROFILES:")) + 2);
const staticAreaNames = [...staticProfiles.matchAll(/^  [{] name: "([^"]+)"/gm)].map((item) => item[1]);
const photoKeys = new Set([...areaVisuals.slice(areaVisuals.indexOf("const AREA_VISUALS:"), areaVisuals.indexOf("/** Photo selection")).matchAll(/^  (?:"([^"]+)"|([a-z]+)): commons[(]/gm)].map((item) => item[1] || item[2]));
const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
assert.ok(staticAreaNames.length >= 18, "Expected full static regional town catalog");
for (const areaName of staticAreaNames) {
  assert.ok(photoKeys.has(normalize(areaName)), `Missing verified image for static area ${areaName}`);
}
console.log("STATIC_AREA_PHOTO_COVERAGE", staticAreaNames.length, "core profiles have verified images");
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
