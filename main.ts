// The Long Roast: Lawmakers and the File They Cannot Convert
// Competition: u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// Writes one satirical sentence to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 320).
// Node 22 stdlib-only. One sentence only.
//
// Draft v1: "Lawmakers voted to regulate AI and crypto before lunch, then
// spent the afternoon unable to open a PDF, and had it printed and faxed back
// so they could sign a law about it." Aim is right but the sentence is thin
// for a 320 cap: it needs the internet in scope, a specific competence detail
// (the cloud in the Capitol basement), and a harder final turn — they sign a
// law about a document none of them managed to read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: full scope (AI, crypto, the entire internet), a specific
// competence detail (debating whether the cloud is kept in the Capitol
// basement), the print-scan-fax ritual, and the final undercut: they sign a
// law about a document none of them had managed to read. Final: 320/320
// after the "stuck" polish, still one sentence inside the cap.
const SETUP = "Lawmakers who voted before lunch to regulate AI, crypto and the entire internet spent the afternoon stuck because a PDF would not open, debated whether the cloud was kept in the Capitol basement,";
const PUNCHLINE = "and had the file printed, scanned and faxed back so they could sign a law about a document none of them had managed to read.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 320 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-320 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
