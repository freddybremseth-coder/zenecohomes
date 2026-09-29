import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const sourceFiles = [
  "src/lib/content.ts",
  "src/lib/magazine.ts",
  "src/lib/seoLandingPages.ts",
  "src/lib/localSeoLandingPages.ts",
  "src/lib/corporate-content.ts",
];

const pageFiles = [
  "src/app/page.tsx",
  "src/app/eiendommer/page.tsx",
  "src/app/omrader/page.tsx",
  "src/app/guide/page.tsx",
  "src/app/kjopsprosessen/page.tsx",
  "src/app/visningstur/page.tsx",
  "src/app/booking/page.tsx",
  "src/app/kundeomtaler/page.tsx",
  "src/app/om-oss/page.tsx",
  "src/app/om-oss/freddy/page.tsx",
  "src/app/om-oss/andrea/page.tsx",
  "src/app/personvern/page.tsx",
  "src/app/informasjonskapsler/page.tsx",
  "src/app/guide/kjope-bolig-i-spania/page.tsx",
  "src/app/guide/nybygg-i-spania/page.tsx",
  "src/app/bedriftshytte-spania/page.tsx",
  "src/app/bedriftshytte-spania/guider/page.tsx",
  "src/app/inland/page.tsx",
  "src/app/tomter/page.tsx",
];

const errors = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function length(value) {
  return [...value].length;
}

function checkRange(file, kind, value, min, max) {
  const len = length(value);
  if (len < min || len > max) {
    errors.push(`${file}: ${kind} is ${len} chars (expected ${min}-${max}): "${value}"`);
  }
}

for (const file of sourceFiles) {
  const content = read(file);

  for (const match of content.matchAll(/seoTitle:\s*"([^"]+)"/g)) {
    checkRange(file, "seoTitle", match[1], 50, 60);
  }

  for (const match of content.matchAll(/seoDescription:\s*"([^"]+)"/g)) {
    checkRange(file, "seoDescription", match[1], 140, 160);
  }
}

for (const file of pageFiles) {
  const content = read(file);
  const staticStart = content.indexOf("export const metadata");
  const dynamicStart = content.indexOf("export async function generateMetadata");
  const start = staticStart >= 0 ? staticStart : dynamicStart;

  if (start < 0) {
    errors.push(`${file}: missing metadata export/generator`);
    continue;
  }

  // Read enough of the metadata block/function to capture title + description,
  // while ignoring unrelated card/content objects later in the file.
  const block = content.slice(start, start + 3200);
  const directTitle = block.match(/title:\s*"([^"]+)"/)?.[1];
  const fallbackTitle = block.match(/const title\s*=\s*[\s\S]*?\|\|\s*"([^"]+)"/)?.[1];
  const title = directTitle || fallbackTitle;

  const directDescription = block.match(/description:\s*\n?\s*"([^"]+)"/)?.[1];
  const fallbackDescription = block.match(/const description\s*=\s*[\s\S]*?\|\|\s*\n?\s*"([^"]+)"/)?.[1];
  const description = directDescription || fallbackDescription;

  if (!title) errors.push(`${file}: could not read metadata title/fallback`);
  else checkRange(file, "metadata title", title, 50, 60);

  if (!description) errors.push(`${file}: could not read metadata description/fallback`);
  else checkRange(file, "metadata description", description, 140, 160);
}

if (errors.length) {
  console.error("\nSEO metadata audit failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEO metadata audit passed: titles 50-60 chars and descriptions 140-160 chars.");
