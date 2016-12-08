// Mostra as opções do bot

const exec = (bot, msg) => {
  let text = `Digite: gfy alguma coisa | Retorna uma busca no Google para o amigo que tem preguiça.\n\nDigite: imdb algum título | Retorna o título digitado, caso encontrado.\n\nDigite: /ids | Retorna a lista de todos os viciados em CS.\n\nDigite: /quemvai | Retorna o status atual dos viciados em CS.`;
  bot.sendMessage(msg.chat.id, text)
}

module.exports = {
  exec,
  regex: /\/help/i
};
