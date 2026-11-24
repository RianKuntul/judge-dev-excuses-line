// Make the AI Judge Laugh: Developer Excuses
//
// The excuse is assembled in three beats so the punchline lands last:
//   1. a flat denial nobody in the incident call believes,
//   2. a confession list that quietly convicts the speaker, and
//   3. the reveal — the "off" feature flag was never a flag at all.
//
// The program writes the finished line to entry.txt, reads it back,
// and refuses to succeed if the result would fail the competition gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GATE_MIN = 1;
const GATE_MAX = 200;

function buildExcuse() {
  const denial = "I didn't break prod";
  const confession =
    "I merged my own PR at 2am and skipped staging because it passed locally";
  const reveal =
    "the feature flag I swore was off was just my monitor brightness";

  return `${denial} — ${confession}, and ${reveal}.`;
}

function assertInsideGate(text) {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Gate check failed: entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("Gate check failed: entry is blank");
  }
  if (text.length < GATE_MIN || text.length > GATE_MAX) {
    throw new Error(
      `Gate check failed: entry is ${text.length} chars, need ${GATE_MIN}-${GATE_MAX}`,
    );
  }
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const target = join(outDir, "entry.txt");
  writeFileSync(target, buildExcuse(), "utf8");

  // Trust nothing we just wrote: re-read from disk and gate the real bytes.
  assertInsideGate(readFileSync(target, "utf8"));
}

main();
