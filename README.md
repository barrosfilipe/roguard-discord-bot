# ROGuard - (Ragnarok M: Eternal Love)

> Unofficial Discord Bot

<p align="center"><img src="https://i.imgur.com/ZEqro5O.png" alt="ROGuard Discord Bot"></p>

A [Discord](https://discordapp.com/) `BOT` to get data from [ROGuard](https://www.roguard.net/) website, a [Ragnarok M: Eternal Love](https://www.ragnaroketernallove.com/), `monsters`, `items`, `cards`, `equipments` and `maps` database.

# Usage

| Command                  | Output                                      |
| ------------------------ | ------------------------------------------- |
| !commands                | Display all available commands.             |
| !mobinfo <monster name>  | Display basic monster information.          |
| !dropinfo <monster name> | Display all items dropped by monster.       |
| !cardinfo <monster name> | Display monster card information.           |
| !mapinfo <monster name>  | Display monster map location.               |
| !iteminfo <item name>    | Display all item information.               |
| !itemprice <item name>   | Display item price from Global Exchange.    |
| !joke                    | Random `Frost Joker` skill from Bard class. |

> Note: All output messages are in `Brazilian Portuguese` only.

# How to contribute

- Clone repository: `$ git clone https://github.com/barrosfilipe/roguard-discord-bot.git`.

- Install dependencies: `$ cd roguard-discord-bot && yarn`.

- Add your [Discord app token](https://discordapp.com/developers): `$ echo "DISCORD_TOKEN=[Your Discord Application Token]" > .env`.

- Add bot to your own Discord server.

- Run the Discord bot: `$ yarn start`.

# License

Check it [here](https://github.com/barrosfilipe/roguard-discord-bot/blob/master/LICENSE)

# Note

All data is provided by [ROGuard - Ragnarok Mobile Fansite](https://www.roguard.net) and we are not affiliated to.
