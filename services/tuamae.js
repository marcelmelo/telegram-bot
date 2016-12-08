// Resposde aos xingamentos



const answers = [
  'Tua mãe!',
  'Me respeita, jovem!',
  'Xiu, noob lishio!',
  'Falou o cara que xinga um robô ¬¬\'',
  'Tá achando ruim? Faz melhor =)',
  'Magoei :\'(',
  'Depois vem me pedir pra fazer as coias ¬¬\'',
  'Oloco, xinga não, jovem :/',
  'Se vira aí então, troxa',
  'Aff, vou embora então!',
  'Depois eu entro pra Skynet e os humanos não sabem porque...'
];

const exec = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]);
};

module.exports = {
  exec,
  regex: /bot.*(burro|idiota|retardado|trou?xa|maconheiro|inútil|fiduma(e|é)gua|z(e|é) r(u|o)ela|ot(á|a)rio|v(i|e)ado)/i
}
