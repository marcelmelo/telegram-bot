// Bot responde às risadas

const arrRisadas = [
  'hehehehehe',
  'hahahahaha',
  'hIUAHIUHAiIUAA, zé buceta...'
];

let cont = 0;
let flag = true;

const exec = (bot, msg) => {
  if (cont < 3) {
    bot.sendMessage(msg.chat.id, arrRisadas[Math.floor(Math.random() * arrRisadas.length)]);
    cont++;
    flag = true;
  }
  else {
    if (flag) {
      bot.sendMessage(msg.chat.id, 'Tá tá... já deu');
      flag = false;
      setTimeout(() => {
        cont = 0;
      } ,60000)
    }
  }
}

module.exports = {
  exec,
  regex: /lol|kkk+|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/ig
}
