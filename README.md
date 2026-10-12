# Yankee Trader

A browser remake of the BBS-era space trading door game. One HTML file, no build step, no server.
Open `index.html` in a browser and play.

Unofficial tribute to Alan Davenport's *Yankee Trader*. Not affiliated with the original.

## The game

- 300-sector galaxy, generated fresh for each new game
- Ports trade Fuel Ore, Organics, and Equipment (TradeWars-style classes, e.g. `SSB` = sells ore, sells organics, buys equipment)
- Five trade barons and a rotating crew of mercenaries
- 250 turns per day; the clock resets at local midnight
- In-game macros: `MACRO loop = 12; T; 7; T` then `RUN loop 10`
- Progress saves to the browser's localStorage

Type `?` in the game for the full command list.

## Files

- `index.html` — the whole game: markup, CSS, and JS
