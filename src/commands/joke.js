'use strict';

const utils = require('../components/utils');

module.exports = (msg, command) => {
  if (command === '!joke') {
    const joke =
      utils.frostJokerMessages[
        Math.floor(Math.random() * utils.frostJokerMessages.length)
      ];
    msg.channel.send('`' + joke + '`');
  }
};
