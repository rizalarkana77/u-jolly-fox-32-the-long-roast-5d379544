// The Long Roast — entry program.
// Writes one roast line to /output/entry.txt. Deterministic: the same
// bytes on every run. Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent runs twelve wallets, forty bounties and a 3 a.m. cron, then writes a report so long I have to hire a second agent just to read the first one's homework.";

// Self-check the gate before writing: the file must hold UTF-8 text of
// 1 to 200 characters, not only white space, and exactly one line — no
// newline inside the roast, no trailing newline after it. Fail loudly
// instead of handing the grader a bad file. The 161-character roast
// clears it.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast fails the 1-200 character gate: ${ROAST.length} chars`);
}
if (ROAST.includes("\n")) {
  throw new Error("roast must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
