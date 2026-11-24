import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Read POST.json and refuse to copy a placeholder or malformed entry: the
// grader reads the post address from it, so a bad value must fail loudly
// here instead of being submitted as a silent no-op.
const raw = readFileSync(join(botDir, "POST.json"), "utf8");
let post;
try {
  post = JSON.parse(raw);
} catch {
  throw new Error("POST.json is not valid JSON");
}
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a string url");
}
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\S+\/status\/\d+$/.test(post.url)) {
  throw new Error("POST.json url is not an X post address");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
