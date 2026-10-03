import fs from "node:fs";

const checks = [
  ["src/components/Footer.tsx", "care.zenecohomes.com"],
  ["src/components/Footer.tsx", "costablancatours.pro"],
  ["src/components/Footer.tsx", "pinosoecolife.com"],
  ["src/app/visningstur/page.tsx", "costablancatours.pro"],
  ["src/app/inland/page.tsx", "pinosoecolife.com"],
  ["src/app/inland/page.tsx", "costablancatours.pro"],
  ["src/app/kjopsprosessen/page.tsx", "care.zenecohomes.com"],
  ["src/app/kjopsprosessen/page.tsx", "costablancatours.pro"],
];

let failed = false;
for (const [file, needle] of checks) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.includes(needle)) {
    console.error(`Missing ecosystem link: ${needle} in ${file}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log("Ecosystem link audit passed.");
