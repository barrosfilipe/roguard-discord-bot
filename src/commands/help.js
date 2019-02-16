'use strict';

const Discord = require('discord.js');

module.exports = (msg, command) => {
  if (command === '!commands') {
    const embed = new Discord.RichEmbed()
      .setAuthor('ROGuard', 'https://i.imgur.com/EsCTt3K.png')
      .setColor(0x00ae86)
      .addField(':pig:  !mobinfo <nome do monstro>', 'Exibe dados do monstro')
      .addField(
        ':crossed_swords:  !iteminfo <nome do item>',
        'Exibe dados do item'
      )
      .addField(
        ':moneybag:  !itemprice <nome do item>',
        'Exibe preço do item (Exchance Global)'
      )
      .addField(
        ':fallen_leaf:  !dropinfo <nome do monstro>',
        'Exibe drops do monstro'
      )
      .addField(
        ':map:  !mapinfo <nome do monstro>',
        'Exibe localização do monstro'
      )
      .addField(
        ':flower_playing_cards:  !cardinfo <nome do monstro>',
        'Exibe carta do monstro'
      )
      .addField(':black_joker:  !joke', 'Piadas da classe bardo')
      .addField(':helmet_with_cross:  !support', 'Discord para dúvidas')
      .addField(':package:  !github', 'Código fonte')
      .addField(':robot:   !invite', 'Me adicionar no seu servidor Discord')
      .addField(':star2:   !stats', 'Exibe meus status');
    msg.channel.send({ embed });
  }

  if (command === '!support') {
    msg.reply('`Support:` https://discord.gg/SugnWZm');
  }

  if (command === '!invite') {
    msg.reply(
      'Clique no link para me adicionar ao seu servidor Discord: <https://goo.gl/xzyuq8>'
    );
  }

  if (command === '!github') {
    msg.reply('`GitHub:` https://github.com/barrosfilipe/roguard-discord-bot');
  }
};
