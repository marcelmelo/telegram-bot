// Mostra as ids dos jogadores cadastrados
const ids = require('./idsteam');

const exec = (bot, msg) => {
  let reply = msg.message_id;
  let count = 0;
  let texto = '';

  for (var item in ids.uniqId) {
    if (count == 3) {
      texto = texto.concat(`/${item}\n\n`);
      count = 0
    }
    else {
      texto = texto.concat(`/${item}\t\t\t`);
      count++;
    }
  }

  bot.sendMessage(msg.chat.id, texto, { reply });
}

module.exports = {
  exec,
  regex: /\/ids/i
}
