'use strict';

const Discord = require('discord.js');
const itemprice = require('../components/itemprice');
const utils = require('../components/utils');

const errorMessage =
  utils.itemNotFoundMessages[
    Math.floor(Math.random() * utils.itemNotFoundMessages.length)
  ];

module.exports = async (msg, command) => {
  if (command === '!itemprice') {
    const itemSearch = msg.content.split(command)[1].trim();
    const item = await itemprice(itemSearch);

    if (!item.error) {
      const embed = new Discord.RichEmbed()
        .setTitle('About Item')
        .setAuthor(`${item.name} (Global)`, item.thumb)
        .setURL(item.url)
        .setColor(0x00ae86)
        .setThumbnail(item.thumb)
        .addField('Price', `${item.price} z`)
        .addField('Volume', `${item.volume} ea`)
        .addField('Last Update', `${item.update}`)

        .setFooter(
          'Data provided by Poporing Life',
          'http://file5.ratemyserver.net/mobs/1031.gif'
        )
        .setTimestamp();

      msg.channel.send({ embed });
    } else {
      msg.reply(errorMessage);
    }
  }
};
