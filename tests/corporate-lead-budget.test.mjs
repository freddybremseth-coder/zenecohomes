import test from "node:test";
import assert from "node:assert/strict";
import { parseLeadBudgetEstimate } from "../src/lib/realtyflow.ts";

test("Corporate lead budget ranges use midpoint instead of concatenated digits", () => {
  assert.equal(parseLeadBudgetEstimate("€300 000–€500 000"), 400000);
  assert.equal(parseLeadBudgetEstimate("€500 000–€750 000"), 625000);
  assert.equal(parseLeadBudgetEstimate("€750 000–€1 000 000"), 875000);
});

test("Corporate lead budget parser handles single and unresolved values", () => {
  assert.equal(parseLeadBudgetEstimate("Over €1 000 000"), 1000000);
  assert.equal(parseLeadBudgetEstimate("Under €300 000"), 300000);
  assert.equal(parseLeadBudgetEstimate("Ikke avklart"), 0);
});
