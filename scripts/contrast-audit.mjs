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
  // Base and responsive CSS can define the same selector more than once.
  // Gather all declarations; region HTML inline styles provide the fallback.
  const chunks = source.split(selector + " {").slice(1);
  assert.ok(chunks.length > 0, "Missing CSS selector: " + selector);
  return chunks.map((chunk) => chunk.slice(0, chunk.indexOf("}"))).join("\n");
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
assert.equal(lastImport, 'import "./sitewide-contrast.css";', "Site-wide contrast safeguards must be the final CSS import");
assert.ok(layout.indexOf(importLine) < layout.indexOf(lastImport), "Contrast styles must load before the final reading guardrails");
console.log("PASS", "site-wide contrast safeguards loaded after existing styles");
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


// Mobile Safari regression: the closed advisor must not stretch left-to-right
// across the viewport, and adjacent editorial sections must not double-gap.
const mobileFixes = read("src/app/mobile-critical.css");
const layoutFixes = read("src/app/prod-layout-fixes.css");
const regionStyles = read("src/app/areas-regions-v2.css");
expectDeclaration(layoutFixes, ".chatbot-2027.chatbot-shell:not(:has(.chatbot-panel))", "left: auto !important;");
expectDeclaration(layoutFixes, ".chatbot-2027.chatbot-shell:not(:has(.chatbot-panel))", "width: max-content !important;");
expectDeclaration(mobileFixes, ".chatbot-2027 .chatbot-toggle", "width: 52px !important;");
expectDeclaration(mobileFixes, ".chatbot-2027 .chatbot-toggle span", "display: none !important;");
expectDeclaration(regionStyles, ".section.region-landing-grid", "padding-bottom: 12px;");
expectDeclaration(regionStyles, ".section.region-editorial", "padding-top: 24px;");
assert.ok(mobileFixes.includes(".chatbot-2027.chatbot-shell:has(.chatbot-panel)"), "The full-width open mobile advisor sheet must be preserved");
console.log("PASS", "mobile region spacing, compact right-aligned advisor, and open mobile sheet");


// The area-profile listing CTAs must meet AA and must stay explicitly scoped:
// selectors on image heroes and dark backgrounds have different color needs.
const areaProfile = read("src/app/omrader/[region]/[sted]/page.tsx");
assert.ok(areaProfile.includes('className="hero-actions area-property-cta-actions"'), "Area listing buttons must use their own scoped layout class");
expectDeclaration(guards, ".hero-actions.area-property-cta-actions > .contact-button", "background: var(--ze-ink);");
expectDeclaration(guards, ".hero-actions.area-property-cta-actions > .contact-button", "color: var(--ze-white);");
expectDeclaration(guards, ".hero-actions.area-property-cta-actions > .text-button", "background: var(--ze-white);");
expectDeclaration(guards, ".hero-actions.area-property-cta-actions > .text-button", "color: var(--ze-ink);");
testPair("area listing primary button on dark", token("--ze-white"), token("--ze-ink"));
testPair("area listing secondary button on paper", token("--ze-ink"), token("--ze-white"));
console.log("PASS", "high-contrast area listing buttons");


const areaReading = read("src/app/area-reading-mobile.css");
const areaEditorial = read("src/lib/areaVerifiedEditorial.ts");
const markdownRenderer = read("src/components/MarkdownArticle.tsx");
assert.ok(areaProfile.includes("verifiedAreaEditorial(profile.name)"), "Town page must use verified locality content");
assert.ok(areaProfile.includes("areaBuyerChecklist(profile.name)"), "Town page must include buyer checks");
assert.ok(areaProfile.includes("verifiedEditorial.source.url"), "Geographical claims require visible original sources");
assert.ok(areaProfile.includes("!genericPlaceholder"), "Do not repeat generic RealtyFlow description");
assert.ok(areaEditorial.includes("return AREAS[normalizeSearchText(name).trim()] || null;"), "Unknown towns cannot receive invented facts");
assert.ok(areaReading.includes("overflow-wrap: break-word;"), "Mobile long-form must wrap");
assert.ok(areaReading.includes("overflow-x: auto;"), "Wide tables must scroll rather than expand page");
assert.ok(markdownRenderer.includes("article-markdown-table-wrap"), "Markdown tables must use responsive table wrapper");
console.log("PASS", "verified local editorial and responsive article formatting");

console.log("Contrast regression audit passed.");
