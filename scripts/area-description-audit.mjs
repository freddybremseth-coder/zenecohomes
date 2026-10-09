import assert from "node:assert/strict";
import { splitAreaParagraphs, oneLineAreaText } from "../src/lib/areaDescriptionText.mjs";
import { readFileSync } from "node:fs";

const cases = [
  {
    name: "literal escaped double newline from RealtyFlow",
    input: "Første avsnitt.\\n\\nAndre avsnitt.",
    expected: ["Første avsnitt.", "Andre avsnitt."],
  },
  {
    name: "ordinary actual newlines",
    input: "Første avsnitt.\n\nAndre avsnitt.",
    expected: ["Første avsnitt.", "Andre avsnitt."],
  },
  {
    name: "mixed literal and actual newlines",
    input: "Første.\n\nAndre.\\n\\nTredje.",
    expected: ["Første.", "Andre.", "Tredje."],
  },
  {
    name: "literal Windows-style escaped CRLF",
    input: "Første.\\r\\n\\r\\nAndre.",
    expected: ["Første.", "Andre."],
  },
  {
    name: "double-escaped sequences",
    input: "Første.\\\\n\\\\nAndre.",
    expected: ["Første.", "Andre."],
  },
  {
    name: "single soft newline",
    input: "En setning med\\nfortsettelse.",
    expected: ["En setning med fortsettelse."],
  },
  {
    name: "preserve unrelated backslash codes",
    input: "Ikke endre \\t eller \\u2022.",
    expected: ["Ikke endre \\t eller \\u2022."],
  },
  {
    name: "empty/null",
    input: null,
    expected: [],
  },
];

for (const test of cases) {
  const result = splitAreaParagraphs(test.input);
  assert.deepEqual(result, test.expected, test.name);
  assert.ok(result.every((item) => !item.includes("\\n")), test.name + " exposed escaped newline");
  console.log("PASS", test.name);
}

assert.equal(
  oneLineAreaText("Kysten er kjent.\\n\\nHverdagen varierer."),
  "Kysten er kjent. Hverdagen varierer.",
  "summary text must be single-line"
);

const town = readFileSync(new URL("../src/app/omrader/[region]/[sted]/page.tsx", import.meta.url), "utf8");
const region = readFileSync(new URL("../src/app/omrader/[region]/page.tsx", import.meta.url), "utf8");
assert.ok(town.includes("descriptionParagraphs.map("), "town pages must render paragraphs separately");
assert.ok(town.includes("heroDescription"), "town hero must use normalized text");
assert.ok(region.includes("splitAreaParagraphs(profile.description).map("), "region cards must render paragraphs");
assert.ok(region.includes("oneLineAreaText(profile.hero_blurb)"), "region map summary must be single-line");
console.log("PASS", "both shared region templates render normalized paragraph breaks");
console.log("Area description normalization audit passed.");
