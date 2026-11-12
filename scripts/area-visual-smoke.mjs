import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.AREA_SMOKE_BASE || "http://127.0.0.1:3000";
const paths = [
  "/omrader",
  "/omrader/costa-blanca-nord",
  "/omrader/costa-blanca-nord/altea",
  "/omrader/costa-blanca-nord/villajoyosa",
  "/omrader/costa-blanca-sor",
  "/omrader/costa-blanca-sor/guardamar",
  "/omrader/costa-calida",
];
const viewports = {
  desktop: { width: 1440, height: 900, isMobile: false },
  mobile: { width: 390, height: 844, isMobile: true },
};
await mkdir("artifacts/area-smoke", { recursive: true });
const browser = await chromium.launch({ headless: true });
const reports = [];
let hardFailures = 0;

try {
  for (const [device, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, isMobile: viewport.isMobile, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const route of paths) {
      const pathName = route.replace(/^[/]/, "").replaceAll("/", "-");
      const issues = [];
      const networkImageErrors = [];
      page.on("response", response => {
        if ((response.url().includes("/_next/image") || response.url().includes("upload.wikimedia.org")) && response.status() >= 400) {
          networkImageErrors.push({ status: response.status(), url: response.url().slice(0, 230) });
        }
      });
      try {
        const response = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
        if (!response || response.status() >= 400) issues.push("HTTP " + (response?.status() || "no response"));
        await page.locator("h1").first().waitFor({ timeout: 20000 });
        await page.waitForTimeout(1700);
        const details = await page.evaluate(() => {
          const h1 = document.querySelector("h1")?.textContent?.trim() || "";
          const visibleImages = [...document.images].filter(im => im.getBoundingClientRect().width > 0 && im.getBoundingClientRect().height > 0);
          const missing = visibleImages.filter(im => im.complete && im.naturalWidth === 0).map(im => im.alt || im.src.slice(0, 100));
          return {
            h1,
            horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 6,
            visibleImages: visibleImages.length,
            missing,
            neutralPanels: document.querySelectorAll(".resilient-image-placeholder").length,
            hasGenericPlacePhoto: !!document.querySelector('.areas-page img[src*="/assets/areas.jpg"]'),
          };
        });
        if (details.horizontalOverflow) issues.push("Horizontal overflow on " + device);
        if (details.missing.length) issues.push("Broken visible images: " + details.missing.slice(0, 5).join("; "));
        if (details.hasGenericPlacePhoto) issues.push("Generic place-photo placeholder reintroduced");
        if (!details.h1) issues.push("Missing heading");
        const filename = "artifacts/area-smoke/" + device + "-" + pathName + ".png";
        await page.screenshot({ path: filename, fullPage: true, timeout: 30000 });
        reports.push({ device, route, status: response?.status(), ...details, networkImageErrors, issues, screenshot: filename });
      } catch (err) {
        issues.push(err instanceof Error ? err.message : String(err));
        reports.push({ device, route, issues, networkImageErrors });
      }
      if (issues.length) hardFailures++;
    }
    await context.close();
  }
} finally {
  await browser.close();
}

await writeFile("artifacts/area-smoke/report.json", JSON.stringify(reports, null, 2));
for (const item of reports) {
  console.log((item.issues.length ? "FAIL" : "PASS") + " " + item.device + " " + item.route +
    " | h1: " + (item.h1 || "none") + " | visible images " + (item.visibleImages ?? 0) +
    " | neutral panels " + (item.neutralPanels ?? 0) +
    " | remote errors " + item.networkImageErrors.length);
  item.issues.forEach(issue => console.error("ISSUE", item.device, item.route, issue));
}
console.log("AREA_VISUAL_SMOKE", reports.length, "routes tested,", hardFailures, "with issues");
if (hardFailures) process.exitCode = 1;
