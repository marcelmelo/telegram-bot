// Let Me Google That For You
const url = require('url');

const exec = (bot, msg) => {
  const cmd = msg.text.replace(/gfy /ig, '');
  const _url = 'De nada, jovem:\n' + 'http://pt-br.lmgtfy.com/?q=' + encodeURIComponent(cmd);
  bot.sendMessage(msg.chat.id, _url);
};

module.exports = {
  exec,
  regex: /gfy /i
}
