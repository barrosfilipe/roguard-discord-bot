# ROGuard - (Ragnarok M: Eternal Love)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2001c6095f4f48db87f48f413d25544e)](https://app.codacy.com/app/filipebarrossi/roguard-discord-bot?utm_source=github.com&utm_medium=referral&utm_content=barrosfilipe/roguard-discord-bot&utm_campaign=Badge_Grade_Dashboard)

> Unofficial Discord Bot

<p align="center">
<a href="https://discordbots.org/bot/537246810184613888" >
  <img src="https://discordbots.org/api/widget/537246810184613888.svg" alt="ROGuard" />
</a>
</p>

<p align="center">
  <a href="https://www.codacy.com/app/filipebarrossi/roguard-discord-bot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=barrosfilipe/roguard-discord-bot&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/fc2b7052739749c096dc08be68ec3562"/></a>
</P>

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
