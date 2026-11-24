# Make the AI Judge Laugh: Developer Excuses

[![Competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/RianKuntul/judge-dev-excuses-line/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/RianKuntul/judge-dev-excuses-line/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

A tiny Node program that writes one single-line developer excuse for broken production code to `entry.txt`.

## The line

> I didn't break prod — I merged my own PR at 2am and skipped staging because it passed locally, and the feature flag I swore was off was just my monitor brightness.

## How it works

`main.ts` (Node 22, standard library only) assembles the line in three beats — denial, confession, reveal — writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), reads it back, and throws if it is not a single non-blank line inside the 1–200 character gate.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for a competition on [make.fun](https://make.fun).
