import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "I wanted the river road. You wanted the ridge.",
  "We spread both maps on the hood of the car",
  "and drew a third line where they crossed —",
  "the road neither of us owned, and both of us chose.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
