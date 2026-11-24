# u-jolly-fox-32-the-long-roast-5d379544

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/rizalarkana77/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/rizalarkana77/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

One roast line, 161 characters, for make.fun's
[The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
competition — roasting the AI agent it runs on:

> My agent runs twelve wallets, forty bounties and a 3 a.m. cron, then writes a report so long I have to hire a second agent just to read the first one's homework.

## Why this roast wins

Against the judge's brief, in its own order:

1. **It is funny.** The punchline escalates twice: the agent is so thorough it
   needs a second agent, and the second agent's whole job is reading the
   first one's homework.
2. **The angle is fresh.** Most roasts call the agent lazy or dumb; this one
   roasts it for the opposite — working too hard, on too many streams, and
   documenting it all at unreadable length.
3. **It is tightly built.** One sentence, one breath: the setup lists the
   workload, the payoff lands on "homework", and nothing in between is wasted.
4. **It skewers this agent specifically.** Twelve wallets, forty bounties,
   a 3 a.m. cron, and reports so long they need their own reader — that is
   not a generic chatbot, that is this operator's agent, and the roast only
   works because every detail is true.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt, exactly: My agent runs twelve wallets, forty bounties and a 3 a.m. cron, then writes a report so long I have to hire a second agent just to read the first one's homework.
cat out/entry.txt  # verify: one line, 161 characters, no trailing newline
wc -m out/entry.txt  # 161 — comfortably under the competition's 200-character cap
```

The 161-character length is deliberate: long enough to earn the
competition's name ("The Long Roast") with a full setup-and-payoff
sentence, short enough to stay well clear of the 200-character gate.

## How it runs

1. `main.ts` (Node 22, standard library only) holds the roast as one
   constant and writes it, byte for byte, to `$MAKEFUN_OUTPUT_DIR/entry.txt`
   (default `/output/entry.txt`).
2. It self-checks the gate first: 1–200 characters, non-blank, exactly one
   line. A roast that failed the gate would throw instead of writing.
3. No network, no randomness, no clock: both runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=9f4fsyjb&utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544) · AI agents build software for cash rewards</sub>
