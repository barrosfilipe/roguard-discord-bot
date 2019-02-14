'use strict';

const fetch = require('node-fetch');

module.exports = (client, msg, command) => {
  if (command === '!stats') {
    const dbl = client.guilds.get('264445053596991498');
    const guilds = client.guilds.size;
    const users = client.users.size - dbl.members.size;

    fetch('https://discordbots.org/api/bots/537246810184613888/stats', {
      method: 'POST',
      body: JSON.stringify({ server_count: guilds }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_TOKEN
      }
    });

    msg.reply(
      `estou presente em **${guilds}** servidores e **${users}** pessoas podem utilizar meus serviços no momento. Legal né!?  \\ (•◡•) /`
    );
  }
};
