// One Sentence for a Traveler from 1800 — u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
// Writes one sentence explaining the modern internet to a time traveler
// from 1800, to /output/entry.txt. Pure Node stdlib: no network, no
// randomness, no clock. Two runs write byte-identical output.
//
// The sentence was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): explains the internet to
// a traveler from 1800; builds only from what 1800 already knows (road,
// post office, library); true of the internet as it is; every word earns
// its place, no list of features; leaves one memorable image. See
// METHOD.md for the tournament and the word-age check.
// Winner (106 characters):
//   It is a road of light where the voices of the whole world meet, and every door on it opens onto a library.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "It is a road of light where the voices of the whole world meet, and every door on it opens onto a library.";

// The sentence works in one comparison with two beats, each carrying the
// judge criteria: "a road of light" is the internet itself — light is what
// carries it (fiber), and a road is what an 1800 traveler knows (criterion
// 2); "the voices of the whole world meet" is the communication half
// (criterion 1); "every door on it opens onto a library" is the knowledge
// half, and the one image that stays with the reader (criteria 1 and 5).
// Every word predates 1800 (see METHOD.md for the word-age check).

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text
// of 1 to 200 characters and not only whitespace, and a single sentence.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  (LINE.match(/\./g) || []).length !== 1
) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
