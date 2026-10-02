import fs from "node:fs";
import path from "node:path";
import { loadTsModule } from "./load-ts-module.mjs";

const root = process.cwd();

const sourceFiles = [
  "src/lib/content.ts",
  "src/lib/magazine.ts",
  "src/lib/seoLandingPages.ts",
  "src/lib/seoLandingPages.en.ts",
  "src/lib/seoLandingPages.de.ts",
  "src/lib/seoLandingPages.es.ts",
  "src/lib/localSeoLandingPages.ts",
  "src/lib/localSeoLandingPages.en.ts",
  "src/lib/localSeoLandingPages.de.ts",
  "src/lib/localSeoLandingPages.es.ts",
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

for (const locale of ["de", "en", "es"]) {
  const folder = path.join(root, "src/app", locale);
  for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = item.isDirectory() ? `src/app/${locale}/${item.name}/page.tsx` : `src/app/${locale}/${item.name}`;
    if (!file.endsWith("page.tsx") || !fs.existsSync(file)) continue;
    const source = fs.readFileSync(file, "utf8");
    if (source.includes("export const metadata") && !source.includes("index: false")) pageFiles.push(file);
  }
}

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

let dataCount = 0;
for (const file of sourceFiles) {
  const exports = loadTsModule(file);
  for (const records of Object.values(exports).filter(Array.isArray)) {
    for (const record of records) {
      if (!record || typeof record !== "object" || !("seoTitle" in record)) continue;
      dataCount++;
      checkRange(`${file} (${record.slug})`, "seoTitle", record.seoTitle, 50, 60);
      checkRange(`${file} (${record.slug})`, "seoDescription", record.seoDescription, 140, 160);
    }
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

  // Homepage v1 has explicitly approved copy; validate it exactly instead of
  // padding the wording to satisfy our general editorial length guideline.
  if (file === "src/app/page.tsx") {
    if (title !== "Bolig i Spania | Norsk rådgivning | Zen Eco Homes") errors.push(`${file}: homepage title differs from approved copy`);
    if (description !== "Finn bolig i Spania med norsk rådgivning. Sammenlign områder, nybygg, villaer og leiligheter på Costa Blanca, Costa Cálida og i innlandet.") errors.push(`${file}: homepage description differs from approved copy`);
    continue;
  }

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

console.log(`SEO metadata audit passed: ${dataCount} data records and ${pageFiles.length} pages; titles 50-60 chars, descriptions 140-160 chars; homepage uses approved exact copy.`);
