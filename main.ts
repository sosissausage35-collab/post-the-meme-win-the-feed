// Entry program for the make.fun bounty "Post the Meme, Win the Feed"
// (competition u-myronera-post-the-meme-win-the-feed-2de960bf).
// Runs on Node 22 using only the standard library. Its only job is to copy
// POST.json from the repository root into the output directory, where the
// house reads the X post address from it. The entry itself is the X post:
// its likes, reposts and quotes decide the places, not anything here.
//
// Local test (mirrors the grader's paths):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
