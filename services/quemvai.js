// Quem está On no CSGO
const http = require('http');
const ids = require('./idsteam');

const exec = (bot, msg) => {
  http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${ids.allIds}`, (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData);
        let foto = 'http://happywithgame.com/wp-content/uploads/2015/04/video-games-to-play-zo7cctf5.jpg'
        let blocoStr = '';
        let jogando = '';
        let players = parsedData.response.players;
        let aux;

        players.map(player => {
          aux = `${jogando = player.gameextrainfo ? 'Jogando?: ✅' : 'Jogando?: 🙅‍♀️'}\t\t\t\t\t${player.personaname}\n`;
          blocoStr = blocoStr.concat(aux);
        })
        bot.sendMessage(msg.chat.id, blocoStr)

      } catch (e) {
        console.log(e.message);
      }
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

module.exports = {
  exec,
  regex: /quemvai/i
}
