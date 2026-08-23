import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const js = readFileSync("app.js", "utf8");
const requiredIds = ["captureBanner", "downloadBannerBtn", "undoBtn", "redoBtn", "qualityChecks", "templateGrid", "exportProjectBtn", "importProjectFile"];
const missing = requiredIds.filter((id) => !html.includes(`id="${id}"`));
const duplicateIds = [...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]).filter((id, i, ids) => ids.indexOf(id) !== i);
if (missing.length || duplicateIds.length) {
  console.error(JSON.stringify({ missing, duplicateIds }, null, 2));
  process.exit(1);
}
for (const marker of ["function undo()", "function redo()", "function exportProjectBackup()", "function renderQualityChecks()", "function applyTemplate("]) {
  if (!js.includes(marker)) throw new Error(`Missing implementation marker: ${marker}`);
}
console.log("Source smoke check passed.");
