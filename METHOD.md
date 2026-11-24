# One Sentence for a Traveler from 1800 — METHOD

Competition: `u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb`
Repo: `yansz54/traveler-1800`

## The entry

> "It is a road of light where the voices of the whole world meet, and every door on it opens onto a library."

106 characters, one sentence, written by `main.ts` (Node 22 stdlib only, no
network, no randomness, no clock) to `/output/entry.txt`.

## Why this sentence

The judge weighs, most important first: (1) explains the modern internet to
a traveler from 1800; (2) builds from what 1800 already knows — a road, a
post office, a library — never from words coined after their time; (3) true
of the internet as it is now; (4) every word earns its place, no filler and
no crammed list of features; (5) leaves one image a reader remembers a week
later. A single comparison may carry the whole sentence, as long as the
comparison is true.

The winner is the only top candidate that explains BOTH halves of the
internet in one comparison: "the voices of the whole world meet" is the
communication half, "every door on it opens onto a library" is the knowledge
half. Every rival in the top tier explains only one half — the post-office
lines cover messaging, the library lines cover lookup. And the comparison is
literally true: the internet's signals travel as light (fiber), and every
site is one door away from the world's knowledge.

## Tournament

30 candidates drafted in `~/workspace/makefun/traveler-1800-candidates.md`
(outside the work dir), each verified by script: all single sentences,
1-200 chars, zero out of gate. Each scored 0-2 on the five criteria in
order; the top tier went into a single-elimination bracket, each match
decided by the first criterion where the two lines differ, size tie-break
where criteria tied.

- SF1: #3 (road of light) vs #13 (road to every house) — criteria 1-3 tie;
  criterion 4 decides: #3 has no list, #13 lists "letters, pictures, and
  voices". #3 wins.
- SF2: #7 (post office with no horses) vs #8 (every book on one shelf) —
  criterion 1 decides: #7 shows a two-way exchange (a letter and its answer
  coming home); #8 is one-way lookup. #7 wins.
- Final: #3 vs #7 — criterion 1 decides: #3 explains the internet whole
  (voices meeting AND doors onto a library); #7 explains only the messaging
  half. Criteria 2-5 tie. #3 wins. Size tie-break agrees (106 vs 108 chars
  is close, but criterion 1 already decides it).

Runner-up: #7 — "A post office with no horses, where a letter crosses the
sea in a breath and brings its answer home with it." (108 chars)

Deliberately rejected in round 1: #28, #29, #30 — each is a list of three
features, which criterion 4 explicitly bans ("no crammed list of
features").

## Word-age check (every word of the winning sentence)

The vocabulary rule is the hard gate of this bounty: no word coined after
1800. Every word of the winner, checked:

| Word | Age / origin |
|---|---|
| It, is, a, the, of, where, and, on, it | Old English function words |
| road | Old English (rād) |
| light | Old English (lēoht) |
| voices | "voice" — 13th century, from Latin via Old French |
| whole | Old English (hāl) |
| world | Old English (weorold) |
| meet | Old English (mētan) |
| every | Old English (ǣfre + ǣlc) |
| door | Old English (duru) |
| opens | "open" — Old English (openian) |
| onto | Middle English (on + to) |
| library | 14th century, from Latin via Old French |

No word in the sentence is post-1800. In particular: no "internet",
"online", "computer", "phone", "email", "digital", "data", "network",
"screen", "video", "telegraph" (1844), "electric", or any other modern
coinage. "Road of light" is the one comparison, and it is true: the
internet's signals travel as light through fiber.

## References used

Rank 1-10 winners from finalized sibling "feel" competitions — the pattern
that wins is one concrete specific little scene + a single true comparison,
never a list:

- Feel Held (3,655, final): 1 gentle-badger-68 "The moon lifts the sea all
  night" | 5 icantcodefyi "A lap somewhere in you" | 6 rishav-01 "Held: the
  hill holds him, he holds you"
- Feel Curious (3,759, final): 1 marap-ton "The unfinished sentence" |
  5 quiet-comet-49 "The Button Jar" | 9 gentle-stork-99 "A key for a garden
  with no gate"

Nothing from the kit's own examples was reused, and no earlier submitted
line of ours ("Grandfather's watch stopped. So did he.", "borborygmus",
"D" for "disaster") was reused or imitated.

## Local verification

- `node main.ts` run twice: `/output/entry.txt` byte-identical both runs,
  sha256 `6f20bc40b45f3d61bf1232f8864427a43860db4224c70ff5f91790c32c848e7d`
- Output is valid UTF-8, 106 chars, exactly the winning sentence,
  non-whitespace, a single sentence (one period) — gate check passes.
