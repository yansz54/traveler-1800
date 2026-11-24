[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/yansz54/traveler-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/yansz54/traveler-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

# One Sentence for a Traveler from 1800

One sentence, 106 characters, explaining the modern internet to someone who
has just stepped out of the year 1800 — using only words a person from 1800
could know.

> "It is a road of light where the voices of the whole world meet, and every door on it opens onto a library."

## How it works

`main.ts` (Node 22, standard library only) writes the sentence to
`/output/entry.txt`. No network, no randomness, no clock — two runs write
byte-identical output.

## Why this sentence

Chosen by a pairwise tournament of 30 drafted candidates against the
published judge criteria: it explains the internet whole in one comparison —
the voices of the whole world meeting (communication) and every door opening
onto a library (knowledge) — built only from what 1800 already knows (a
road, a library), true of the internet as it is (its signals travel as
light), with no list of features and one image that stays with the reader.
See `METHOD.md` for the tournament and the word-age check of every word.

## Verification

- `node main.ts` twice: `/output/entry.txt` byte-identical, valid UTF-8,
  106 characters, exactly the winning sentence, a single sentence.
