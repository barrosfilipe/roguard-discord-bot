'use strict';

const Discord = require('discord.js');
const dropinfo = require('../components/dropinfo');

module.exports = async (msg, command) => {
  if (command === '!dropinfo') {
    const monsterSearch = msg.content.split(command)[1].trim();
    const drop = await dropinfo(monsterSearch);

    if (!drop.error) {
      const embed = new Discord.RichEmbed()
        .setTitle('About Monster Drops')
        .setAuthor(`${drop.name}`, `${drop.thumb}`)
        .setURL(`${drop.url}`)
        .setColor(0x00ae86)
        .setThumbnail(`${drop.thumb}`)
        .addField('Drops', `${drop.itemdrops}`)
        .setFooter(
          'Data provided by ROGuard',
          'http://file5.ratemyserver.net/items/small/2125.gif'
        )
        .setTimestamp();
      msg.channel.send({ embed });
    } else {
      msg.reply(drop.error);
    }
  }
};
