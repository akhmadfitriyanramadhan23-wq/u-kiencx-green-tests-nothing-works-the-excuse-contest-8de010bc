// Green Tests, Nothing Works: The Excuse Contest
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
// Writes a single-line excuse (<140 chars) to /output/entry.txt.
// Node 22+, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const ENTRY =
  "All 412 tests passed, so I shipped it: every one asserts the Pay button exists. Clicking it opens a blank page. The invoice still went out.";

// Gate: entry must be UTF-8 text of 1-140 characters, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry length ${[...ENTRY].length} outside 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
