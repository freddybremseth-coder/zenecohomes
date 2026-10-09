/**
 * Static site-wide AA color-pair and button regression checks.
 * Intentionally covers explicit design tokens and risky CSS declarations,
 * not a replacement for computed-style browser / WCAG testing.
 */
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const tokens = read("src/app/design-system.css");
const globals = read("src/app/globals.css");
const guard = read("src/app/sitewide-contrast.css");
const layout = read("src/app/layout.tsx");
const appPath = new URL("src/app/", root).pathname;

function hexToken(name) {
  const found = tokens.match(new RegExp("(^|\\n)\\s*" + name + ":\\s*(#[a-f0-9]{6})\\s*;", "i"));
  assert.ok(found, "Missing token: " + name);
  return found[2];
}
function luminance(hex) {
  const channels = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
}
function contrast(a, b) {
  const l1 = luminance(a), l2 = luminance(b);
  return (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05);
}
const pairs = [
  ["primary on ink", hexToken("--ze-white"), hexToken("--ze-ink")],
  ["secondary on white", hexToken("--ze-ink"), hexToken("--ze-white")],
  ["dark on gold", hexToken("--ze-ink"), hexToken("--ze-travertine")],
  ["white on teal hover", hexToken("--ze-white"), hexToken("--ze-sea")],
  ["main text on paper", hexToken("--ze-ink"), hexToken("--ze-paper")],
  ["muted text on paper", hexToken("--ze-muted"), hexToken("--ze-paper")],
  ["accent text on paper", hexToken("--ze-accent-text"), hexToken("--ze-paper")],
  ["inland text on white", "#4c592a", hexToken("--ze-white")],
  ["dark gold hover with white", "#ffffff", "#745a2f"],
];
for (const [name, text, background] of pairs) {
  const ratio = contrast(text, background);
  assert.ok(ratio >= 4.5, name + ": " + ratio.toFixed(2) + ":1 (required 4.5:1)");
  console.log("PASS", name, ratio.toFixed(2) + ":1");
}

assert.ok(globals.includes(".hero-actions a:not(.contact-button):not(.text-button),"), "Old legacy ghost rule must exclude semantic CTAs");
assert.ok(!/^\s*\.hero-actions a,\s*$/m.test(globals), "Legacy blanket white-on-glass selector returned");
assert.ok(guard.includes(".hero-actions > a.contact-button"), "Primary buttons need canonical site-wide rules");
assert.ok(guard.includes(".hero-actions > a.text-button:not(.light)"), "Secondary buttons need canonical site-wide rules");
assert.ok(guard.includes("var(--ze-action-primary-bg)"), "Light section primary background missing");
assert.ok(guard.includes("var(--ze-action-secondary-fg)"), "Light section secondary foreground missing");
assert.ok(guard.includes(".hero-actions > a.text-button.light"), "Dark hero secondary variant missing");
assert.ok(guard.includes(".hero-actions > a.contact-button:hover"), "Hover needs safe contrast");
assert.ok(guard.includes("a:focus-visible"), "Keyboard focus guard missing");
assert.ok(guard.includes("@media (max-width: 640px)"), "Mobile CTA guard missing");
console.log("PASS", "site-wide semantic buttons, hero variants, focus and mobile");

const styleImports = [...layout.matchAll(/^import [^\n]+\.css";$/gm)].map((x) => x[0]);
assert.equal(styleImports.at(-1), 'import "./sitewide-contrast.css";', "Site-wide guardrails must load after all legacy CSS");
console.log("PASS", "site-wide CSS loaded last");

// Reject explicit white-on-light/gold rules anywhere in global app CSS.
// Dark photo overlays and white-on-dark-gold (#745a2f) are not rejected.
const white = /^(?:white|#fff(?:fff)?|rgba\(\s*255\s*,\s*255\s*,\s*255)/i;
const light = /^(?:var\(--(?:gold|ze-travertine|ze-paper|ze-white|paper)\)|#(?:c6a76d|c5a059|fcfbf8|f4f1ea|fff(?:fff)?))$/i;
const problems = [];
let filesChecked = 0;
for (const filename of readdirSync(appPath).filter((name) => name.endsWith(".css"))) {
  const source = readFileSync(join(appPath, filename), "utf8");
  filesChecked++;
  const blocks = source.match(/[^{}]+\{[^{}]*\}/g) || [];
  for (const block of blocks) {
    const foreground = block.match(/(?:^|[;\n])\s*color\s*:\s*([^;}\n]+)/);
    const background = block.match(/(?:^|[;\n])\s*background(?:-color)?\s*:\s*([^;}\n]+)/);
    if (!foreground || !background) continue;
    if (white.test(foreground[1].trim()) && light.test(background[1].trim())) {
      problems.push(filename + " " + block.split("{")[0].replace(/\s+/g, " ").slice(0, 75));
    }
  }
}
assert.deepEqual(problems, [], "Unsafe explicit white-on-light/gold CSS rules: " + problems.join("; "));
console.log("PASS", filesChecked, "app CSS files have no explicit white-on-light/gold pairs");
console.log("Site-wide contrast regression audit passed.");
