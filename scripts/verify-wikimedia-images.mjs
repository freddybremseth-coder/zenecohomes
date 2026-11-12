import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/lib/areaVisuals.ts", import.meta.url), "utf8");
const block = source.match(/const VERIFIED_COMMONS:[^=]+=[ ]*[{]([\s\S]*?)[}];/);
assert.ok(block, "Missing verified photograph catalog");
const files = [...block[1].matchAll(/^  "([^"]+)": "([^"]+)",?$/gm)];
assert.ok(files.length >= 20, "Unexpectedly small catalog");

const broken = [];
const transient = [];
const ok = [];
let rateLimited = 0;
let abortedForRateLimit = false;
for (const [_, title, path] of files) {
  if (rateLimited >= 2) {
    abortedForRateLimit = true;
    break; // avoid hammering Wikimedia when their servers signal rate limiting
  }
  const url = `https://upload.wikimedia.org/wikipedia/commons/${path}`;
  try {
    const response = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "ZenEcoHomes-photo-audit/1.0 (editorial image integrity test)" },
      signal: AbortSignal.timeout(14000),
      redirect: "follow",
    });
    if (response.ok) {
      ok.push(title);
    } else if (response.status === 404 || response.status === 410) {
      broken.push(`${title}: HTTP ${response.status} ${url}`);
    } else {
      transient.push(`${title}: HTTP ${response.status}`);
      if (response.status === 429) rateLimited++;
    }
  } catch (err) {
    transient.push(`${title}: ${err instanceof Error ? err.message : String(err)}`);
  }
}
const untested = files.length - ok.length - broken.length - transient.length;
console.log(`WIKIMEDIA_IMAGE_CHECK: valid ${ok.length}, missing ${broken.length}, inconclusive ${transient.length}, untested ${untested}, total ${files.length}`);
if (abortedForRateLimit) console.warn(`::warning::Wikimedia rate-limited the CI runner. ${untested} requests intentionally skipped; this check is not evidence that the rest of the images are available.`);
for (const error of broken) console.error("BROKEN_IMAGE", error);
for (const warning of transient) console.warn("IMAGE_CHECK_INCONCLUSIVE", warning);
assert.deepEqual(broken, [], "One or more Wikimedia images return HTTP 404/410");
// Temporary Wikimedia rate limits or network failures remain visible as
// inconclusive and must never be falsely reported as verified.
if (process.env.IMAGE_NETWORK_STRICT === "1") {
  assert.deepEqual(transient, [], "Could not independently verify all Commons images");
  assert.equal(untested, 0, "Some Wikimedia images were not tested due to rate limits");
}
