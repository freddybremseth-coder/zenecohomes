import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

// Evaluate trusted, pure repository data modules so template-generated metadata
// is audited as well as string literals. No application server is started.
const cache = new Map();
export function loadTsModule(filename) {
  filename = path.resolve(filename);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const nativeRequire = createRequire(filename);
  const localRequire = (specifier) => {
    if (!specifier.startsWith(".") && !specifier.startsWith("@/")) return nativeRequire(specifier);
    const base = specifier.startsWith("@/")
      ? path.resolve("src", specifier.slice(2))
      : path.resolve(path.dirname(filename), specifier);
    const target = [base, `${base}.ts`, `${base}.tsx`].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!target) throw new Error(`Cannot resolve ${specifier} from ${filename}`);
    return loadTsModule(target);
  };
  const js = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: filename,
  }).outputText;
  new Function("require", "module", "exports", js)(localRequire, module, module.exports);
  return module.exports;
}
