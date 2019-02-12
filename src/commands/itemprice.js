'use strict';

const Discord = require('discord.js');
const iteminfo = require('../components/iteminfo');
const utils = require('../components/utils');

const itemNotFoundMessages =
  utils.itemNotFoundMessages[
    Math.floor(Math.random() * utils.itemNotFoundMessages.length)
  ];

module.exports = async (msg, command) => {
  if (command === '!itemprice') {
    const itemSearch = msg.content.split(command)[1].trim();
    const item = await iteminfo(itemSearch);

    if (item.exchange) {
      const embed = new Discord.RichEmbed()
        .setTitle('About Item')
        .setDescription(item.desc)
        .setAuthor(`${item.name} (Global)`, item.thumb)
        .setURL(item.url)
        .setColor(0x00ae86)
        .setThumbnail(item.thumb)
        .addField('Price', item.exchange.price.toLocaleString('en-US') || '?')
        .addField('Volume', item.exchange.volume.toLocaleString('en-US') || '?')

        .setFooter(
          'Data provided by ROGuard',
          'http://file5.ratemyserver.net/items/small/2125.gif'
        )
        .setTimestamp();

      msg.channel.send({ embed });
    } else {
      msg.reply(itemNotFoundMessages);
    }
  }
};
