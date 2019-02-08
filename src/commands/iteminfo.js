'use strict';

const Discord = require('discord.js');
const iteminfo = require('../components/iteminfo');

module.exports = async (msg, command) => {
  if (command === '!iteminfo') {
    const itemSearch = msg.content.split(command)[1].trim();
    const item = await iteminfo(itemSearch);

    if (!item.error) {
      const embed = new Discord.RichEmbed()
        .setTitle('About Item')
        .setDescription(item.desc)
        .setAuthor(item.name, item.thumb)
        .setURL(item.url)
        .setColor(0x00ae86)
        .setThumbnail(item.thumb)
        .addField('Level', item.level)
        .addField('Max Stack', item.maxstack)
        .addField('Sellable', item.sellable)
        .addField('Sell Price', item.sellprice)
        .addField('Auctionable', item.auctionable)
        .addField('Storageable', item.storageable)
        .addField('Dropped By', item.drop || 'No drop')

        .setFooter(
          'Data provided by ROGuard',
          'http://file5.ratemyserver.net/items/small/2125.gif'
        )
        .setTimestamp();

      msg.channel.send({ embed });
    } else {
      msg.reply(item.error);
    }
  }
};
