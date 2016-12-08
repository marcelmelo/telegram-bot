// Busca um jogador por vez
const http = require('http');
const ids = require('./idsteam');

let getStatus = (status) => {
  let stt = {
    0: 'Offline',
    1: 'Online',
    2: 'Ocupado',
    3: 'Away',
    4: 'Dormindo',
    5: 'Querendo trocar itens',
    6: 'Querendo jogar'
  }
  return status = stt[status];
}

const exec = (bot, msg) => {
  let userId = msg.text.replace('/', '');
  http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${ids.uniqId[userId]}`, (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        let reply = msg.message_id;
        let parsedData = JSON.parse(rawData);
        let game = parsedData.response.players[0].gameextrainfo;
        let inGame = game ? `📢 CLICKANDO! 📢 \n${game}` : '';
        let foto = parsedData.response.players[0].avatarfull;
        let caption = `\nNick: ${parsedData.response.players[0].personaname}\n- - - - - - - - - - - - - - -\nStatus: ${getStatus(parsedData.response.players[0].personastate)}\n- - - - - - - - - - - - - - -\n${inGame}`;

        bot.sendPhoto(msg.chat.id, foto, { caption, reply })

      } catch (e) {
        console.log(e.message);
      }
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

module.exports = exec;
