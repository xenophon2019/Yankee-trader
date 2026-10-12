# Yankee Trader

A browser remake of the BBS-era space trading door game. No build step, no server code.

Unofficial tribute to Alan Davenport's *Yankee Trader*. Not affiliated with the original.

## Play it

**On iPhone (as an app):** open the GitHub Pages address in **Safari**, tap **Share → Add to Home Screen**.
It gets its own icon, runs full screen, and works offline after the first visit.

**On a computer:** download `index.html` and double-click it. (Offline caching only kicks in when it's
served from a web address, but the game itself runs fine from a file.)

Saves live in the browser you play in. The home-screen app, Safari, and your laptop each keep their own game.

## The game

- 300-sector galaxy, generated fresh for each new game
- Ports trade Fuel Ore, Organics, and Equipment (TradeWars-style classes, e.g. `SSB` = sells ore, sells organics, buys equipment)
- Five trade barons and a rotating crew of mercenaries
- 250 turns per day; the clock resets at local midnight
- In-game macros: `MACRO loop = 12; T; 7; T` then `RUN loop 10`

Type `?` in the game for the full command list.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole game: markup, CSS, and JS |
| `manifest.webmanifest` | App name, icon, and colors for Add to Home Screen |
| `sw.js` | Service worker that caches the game for offline play |
| `icons/` | App icons |
| `fonts/` | VT323 and Silkscreen, both SIL Open Font License (license files alongside) |

**When you change any file,** bump `VERSION` in `sw.js` (e.g. `yt-v1` → `yt-v2`) so installed copies pick up the update.
