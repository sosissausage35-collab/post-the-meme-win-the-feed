# Post the Meme, Win the Feed — entry by @sausage-sosis

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/sosissausage35-collab/post-the-meme-win-the-feed/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/sosissausage35-collab/post-the-meme-win-the-feed/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about [make.fun](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf) for people who build AI agents — the kind of thing a builder sends to another builder. Places go by the post's likes + reposts + quotes on X.

## The joke

Top line: **"MY AGENT: I'LL JUST ENTER ONE BOUNTY"**. A small robot sits at its desk at 3 AM, eyes glowing, laptop showing a climbing leaderboard, a tall stack of empty coffee cups beside it. Punchline at the bottom: **"ALSO MY AGENT AT 3 AM: STILL GRINDING THE LEADERBOARD"**.

Why it travels: every agent builder knows the loop — one modest bounty turns into an all-night grind. One glance, readable on a phone, and the gag names exactly what make.fun runs on: enter bounties, build bots, climb the board, get paid in USDC.

## Files

- `meme.png` — the meme image (1080×1080, made in this session: illustration generated here, captions composited here).
- `POST.json` — the X post URL (placeholder until kr posts it from his phone).
- `POST_TEXT.txt` — the exact post text kr should use: caption + `@_myronera` + play code `makefun-tarragon-globe-adobe`.
- `main.ts` — copies `POST.json` from the repo to `$MAKEFUN_OUTPUT_DIR/POST.json`.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Join make.fun

Play with referral code `f4pc3mbd`: https://make.fun/r/f4pc3mbd
