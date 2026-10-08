/**
 * Static WCAG AA contrast regression checks for brand tokens and known selectors.
 * No browser or third-party dependencies. This is a guardrail, not a full
 * computed-style / rendered WCAG audit.
 *
 * Run: npm run contrast:audit
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (file) => readFileSync(new URL("../" + file, import.meta.url), "utf8");
const tokens = read("src/app/design-system.css");
const premium = read("src/app/premium.css");
const chat = read("src/app/chatbot-2027.css");
const guards = read("src/app/contrast-standards.css");
const layout = read("src/app/layout.tsx");
const areaLayout = read("src/app/prod-layout-fixes.css");

function token(name) {
  const pattern = new RegExp("(^|\\n)\\s*" + name + ":\\s*(#[0-9a-f]{6})\\s*;", "i");
  const found = tokens.match(pattern);
  assert.ok(found, "Missing hex design token: " + name);
  return found[2];
}

function luminance(hex) {
  const linear = [1, 3, 5].map((i) => {
    const channel = parseInt(hex.slice(i, i + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}
function contrast(a, b) {
  const x = luminance(a);
  const y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
function testPair(label, a, b, min = 4.5) {
  const ratio = contrast(a, b);
  assert.ok(ratio >= min, label + " has " + ratio.toFixed(2) + ":1; needs " + min + ":1");
  console.log("PASS", label, ratio.toFixed(2) + ":1");
}
function block(source, selector) {
  /* The legacy CSS repeats selectors; the last matching rule wins. */
  const start = source.lastIndexOf(selector + " {");
  assert.notEqual(start, -1, "Missing CSS selector: " + selector);
  const opening = source.indexOf("{", start);
  const end = source.indexOf("}", opening + 1);
  assert.ok(end > opening, "Invalid rule block: " + selector);
  return source.slice(opening + 1, end);
}
function expectDeclaration(source, selector, declaration) {
  assert.ok(block(source, selector).includes(declaration), selector + " must contain " + declaration);
  console.log("PASS", selector, declaration);
}

testPair("body on paper", token("--ze-ink"), token("--ze-paper"));
testPair("secondary on paper", token("--ze-muted"), token("--ze-paper"));
testPair("secondary on white", token("--ze-muted"), token("--ze-white"));
testPair("accessible gold on paper", token("--ze-accent-text"), token("--ze-paper"));
testPair("accessible gold on white", token("--ze-accent-text"), token("--ze-white"));
testPair("dark text on gold buttons", token("--ze-ink"), token("--ze-travertine"));
testPair("white text on dark panels", token("--ze-white"), token("--ze-ink"));
testPair("white text on teal buttons", token("--ze-white"), token("--ze-sea"));

expectDeclaration(premium, ".region-landing-grid > aside", "color: var(--ze-ink);");
expectDeclaration(premium, ".region-landing-grid > aside span", "color: var(--ze-muted);");
expectDeclaration(premium, ".region-landing-grid > aside strong", "color: var(--ze-accent-text);");
expectDeclaration(chat, ".chatbot-privacy-note", "color: var(--chat-muted);");
expectDeclaration(areaLayout, ".region-area-section .area-guide-reading .eyebrow", "color: var(--ze-accent-text, #806436);");
expectDeclaration(guards, ".chatbot-shell:not(.chatbot-2027) .chatbot-messages .user", "color: var(--ze-ink);");

const importLine = 'import "./contrast-standards.css";';
assert.ok(layout.includes(importLine), "Contrast styles must be imported");
const lastImport = [...layout.matchAll(/^import [^\n]+\.css";$/gm)].at(-1)?.[0];
assert.equal(lastImport, importLine, "Contrast guardrails must be the final CSS import");
console.log("PASS", "last CSS import: contrast guardrails");
const legacy = read("src/app/globals.css");
const regionPage = read("src/app/omrader/[region]/page.tsx");

expectDeclaration(legacy, ".region-landing-grid aside", "background: var(--ze-white, #fcfbf8);");
expectDeclaration(legacy, ".region-landing-grid aside", "color: var(--ze-ink, #172027);");
expectDeclaration(legacy, ".region-landing-grid aside strong", "color: var(--ze-accent-text, #806436);");
expectDeclaration(legacy, ".region-landing-grid aside span", "color: var(--ze-muted, #596976);");
expectDeclaration(premium, ".region-landing-grid > aside", "background: var(--ze-white, #fcfbf8);");

// Inline colors are intentional: Next/Safari stylesheet chunk order must
// not be able to reintroduce invisible text to the region statistics.
assert.ok(regionPage.includes('style={{ backgroundColor: "#fcfbf8", color: "#172027" }}'), "Region statistics require server-rendered accessible background and text colors");
assert.equal(regionPage.split('style={{ color: "#806436" }}').length - 1, 2, "Both numbers must have accessible dark-gold text");
assert.equal(regionPage.split('style={{ color: "#596976" }}').length - 1, 2, "Both statistical labels must have accessible muted text");
console.log("PASS", "region statistics have server-rendered contrast, with both CSS layers consistent");

console.log("Contrast regression audit passed.");
