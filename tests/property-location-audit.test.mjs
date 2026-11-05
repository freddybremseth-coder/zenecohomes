import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("location audit flags broad towns and wrong provinces without mutating feed", () => {
  const dir = mkdtempSync(join(tmpdir(), "zeneco-location-audit-"));
  try {
    const feed = [
      { ref: "N10069", town: "Murcia", location: "Costa Calida", title: "Leilighet i Santiago de la Ribera, Murcia" },
      { ref: "SP1924", town: "Murcia", location: "Costa de Almeria", title: "Leilighet i Pulpí, Almería" },
      { ref: "N10067", town: "Torrevieja", location: "Costa Blanca South", title: "Leilighet i Torrevieja" },
      { ref: "N10050", town: "San Pedro del Pinatar", location: "Costa Blanca South", title: "Villa i San Pedro del Pinatar" },
    ];
    const path = join(dir, "feed.json");
    writeFileSync(path, JSON.stringify(feed));
    const result = spawnSync(process.execPath, ["scripts/audit-property-locations.mjs", path], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    const summary = JSON.parse(result.stdout);
    assert.equal(summary.total, 4);
    assert.equal(summary.flaggedProperties, 3);
    assert.equal(summary.byCode.BROAD_OR_MISSING_TOWN, 2);
    assert.equal(summary.byCode.TOWN_PROVINCE_CONFLICT, 1);
    assert.deepEqual(JSON.parse(readFileSync(path, "utf8")), feed);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
