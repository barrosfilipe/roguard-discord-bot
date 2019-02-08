'use strict';

const Discord = require('discord.js');
const mobinfo = require('../components/mobinfo');

module.exports = async (msg, command) => {
  if (command === '!cardinfo') {
    const monsterSearch = msg.content.split(command)[1].trim();
    const monster = await mobinfo(monsterSearch);

    if (!monster.error) {
      const embed = new Discord.RichEmbed()
        .setTitle('About Monster')
        .setAuthor(`${monster.name} (${monster.type})`, `${monster.thumb}`)
        .setURL(`${monster.url}`)
        .setImage(monster.cardimg ? monster.cardimg : null)
        .setColor(0x00ae86)
        .setThumbnail(`${monster.thumb}`)
        .addField('Card', `${monster.cardinfo}`)
        .setFooter(
          'Data provided by ROGuard',
          'http://file5.ratemyserver.net/items/small/2125.gif'
        )
        .setTimestamp();
      msg.channel.send({ embed });
    } else {
      msg.reply(monster.error);
    }
  }
};
