'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('Ragnarok M Eternal Love', { type: 'PLAYING' });
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf('!') !== 0) return;
  const command = msg.content.split(' ')[0].trim();

  require('./commands/help')(msg, command);
  require('./commands/stats')(client, msg, command);
  require('./commands/dropinfo')(msg, command);
  require('./commands/iteminfo')(msg, command);
  require('./commands/itemprice')(msg, command);
  require('./commands/mobinfo')(msg, command);
  require('./commands/cardinfo')(msg, command);
  require('./commands/mapinfo')(msg, command);
  require('./commands/joke')(msg, command);
});

client.login(process.env.DISCORD_TOKEN);
