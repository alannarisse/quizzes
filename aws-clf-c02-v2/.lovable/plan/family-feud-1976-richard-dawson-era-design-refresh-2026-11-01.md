# Family Feud (1976 Richard Dawson era) design refresh

## Step 1 — Bring in your app
- You upload your HTML, CSS, JS and image files in chat.
- I review them to learn every screen, button and game rule so nothing gets lost.
- I rebuild the app here with the same gameplay, then change the look.

## Step 2 — New look, inspired by the original set
- Background: warm wood-panel walls and a deep brown/orange palette, like the 70s studio.
- Answer board: the classic gold-framed board with a glowing amber grid, numbered tiles that flip to show the answer and points.
- Type: chunky, rounded 70s display lettering for titles and scores, plus a clean readable font for everything else.
- Team podiums: two family podiums (left and right) with big score readouts.
- Strike display: large red "X" marks that appear over the board.
- Face-off area: a center podium with a buzzer for the head-to-head round.
- Small touches: marquee bulb lights around the board, a tile flip animation, and optional "ding" and buzzer sounds.

## Step 3 — Layout
```text
+--------------------------------------------------+
|              FAMILY FEUD logo (marquee)          |
|  [Family A]   +-----------------------+  [Family B]
|   score       |  1 ______   5 ______  |   score  |
|               |  2 ______   6 ______  |          |
|               |  3 ______   7 ______  |          |
|               |  4 ______   8 ______  |          |
|               +-----------------------+          |
|           X X X        round points              |
|              [ face-off buzzer podium ]          |
+--------------------------------------------------+
```

## Step 4 — Check it
- Play through a full round to confirm scoring, strikes and reveals still work.
- Check it on a laptop and on a phone.

## Technical details
- Port the existing logic into the project's page structure, keeping the game rules as they are.
- Put all colors and fonts in shared theme settings; load the retro fonts in the page head.

**Next:** upload your files and I'll adjust this plan to match your actual screens.
