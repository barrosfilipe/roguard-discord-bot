'use strict';

module.exports = (msg, command) => {
  if (command === '!commands') {
    msg.reply(
      'Digite `!mobinfo <nome do monstro>` ,  `!iteminfo <nome do item>` ,  `!dropinfo <nome do monstro>` ,  `!mapinfo <nome do monstro>`  ou  `!cardinfo <nome do monstro>`  para obter informações ou `!joke`'
    );
  }
};
