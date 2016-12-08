const express = require('express');
const TeleBot = require('telebot');
const bot = new TeleBot('204639144:AAFFFSbjhkfeL45IBEJEHY0d-cBG_UZuslE');
const http = require('http');
const exec = require('child_process').exec;


let id = {
  ids: '',
  quemvai: '',
  mtrx: '76561198019089395',
  frag: '76561198227808100',
  naka: '76561198032526059',
  massao: '76561198070349862',
  juba: '76561198194815942',
  tuty: '76561198166695673',
  gabriel: '76561198090538827',
  donalld: '76561197993981859',
  ferraz: '76561198006068849',
  marcel: '76561197982837874',
  frota: '76561197989629131',
  vini: '76561198059488735',
  shp: '76561198012908988',
  professor: '76561198099000805',
  freela: '76561198009585632'
}

let nicksArray = [];
let idsStr = ''

for (let item in id) {
  nicksArray.push(`/${item}`)
}

for (let item in id) {
  let aux = id[item]
  if (aux) {
    idsStr = idsStr.concat(aux+',')
  }
}


var app = express();

app.get('/', function(req, res) {

  var main = function () {

    var getStatus = function (status) {
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

    var getSteam = function (chat, comando, reply) {
      let texto = '';

      if (comando == 'ids') {
        texto = `/mtrx\t\t\t/frag\t\t\t/naka\t\t\t/massao\n\n/juba\t\t\t/tuty\t\t\t/gabriel\t\t\t/donalld\n\n/ferraz\t\t\t/marcel\t\t\t/frota\t\t\t/vini\n\n/shp\t\t\t/professor`
        bot.sendMessage(chat, texto, { reply })
      }
      if (comando == 'quemvai') {
        http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${idsStr}`, (res) => {
          res.setEncoding('utf8');
          let rawData = '';
          res.on('data', (chunk) => rawData += chunk);

          root@nodejs-512mb-nyc3-01:~/bot#
          root@nodejs-512mb-nyc3-01:~/bot# ls
          index.js  node_modules  package.json
          root@nodejs-512mb-nyc3-01:~/bot# nano index.js


















































            GNU nano 2.2.6                                               File: index.js

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

              var getSteam = function (chat, comando, reply) {
                let texto = '';

                if (comando == 'ids') {
                  texto = `/mtrx\t\t\t/frag\t\t\t/naka\t\t\t/massao\n\n/juba\t\t\t/tuty\t\t\t/gabriel\t\t\t/donalld\n\n/ferraz\t\t\t/marcel\t\t\t/frota\t\t\t/vini\n\n/shp\t\t\t/professor`
                  bot.sendMessage(chat, texto, { reply })
                }
                if (comando == 'quemvai') {
                  http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${idsStr}`, (res) => {
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
                          aux = `${jogando = player.gameextrainfo ? 'Jogando?: ?^?^?' : 'Jogando?: ?^?^?^??^?^??^?^??^?'}\t\t\t\t\t${player.personaname}\n`;
                          blocoStr = blocoStr.concat(aux);
                        })
                        bot.sendMessage(chat, blocoStr)

                      } catch (e) {
                        console.log(e.message);
                      }
                    });
                  }).on('error', (e) => {
                    console.log(`Got error: ${e.message}`);
                  });
                }
                else {
                  http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${id[comando]}`, (res) => {

          ^G Get Help                  ^O WriteOut                  ^R Read File                 ^Y Prev Page                 ^K Cut Text                  ^C Cur Pos
          ^X Exit                      ^J Justify                   ^W Where Is                  ^V Next Page                 ^U UnCut Text                ^T To Spell
          root@nodejs-512mb-nyc3-01:~/bot#
          root@nodejs-512mb-nyc3-01:~/bot# ls
          index.js  node_modules  package.json
          root@nodejs-512mb-nyc3-01:~/bot# nano index.js


















































            GNU nano 2.2.6                                               File: index.js

                      try {
                        let parsedData = JSON.parse(rawData);
                        let foto = 'http://happywithgame.com/wp-content/uploads/2015/04/video-games-to-play-zo7cctf5.jpg'
                        let blocoStr = '';
                        let jogando = '';
                        let players = parsedData.response.players;
                        let aux;

                        players.map(player => {
                          aux = `${jogando = player.gameextrainfo ? 'Jogando?: ?^?^?' : 'Jogando?: ?^?^?^??^?^??^?^??^?'}\t\t\t\t\t${player.personaname}\n`;
                          blocoStr = blocoStr.concat(aux);
                        })
                        bot.sendMessage(chat, blocoStr)

                      } catch (e) {
                        console.log(e.message);
                      }
                    });
                  }).on('error', (e) => {
                    console.log(`Got error: ${e.message}`);
                  });
                }
                else {
                  http.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5D35A39E56FA573F20FE00C15E2FF60F&steamids=${id[comando]}`, (res) => {
                    res.setEncoding('utf8');
                    let rawData = '';
                    res.on('data', (chunk) => rawData += chunk);
                    res.on('end', () => {
                      try {
                        let parsedData = JSON.parse(rawData);
                        let game = parsedData.response.players[0].gameextrainfo;
                        let inGame = game ? `?^?^Ӣ CLICKANDO! ?^?^Ӣ \n${game}` : '';
                        let foto = parsedData.response.players[0].avatarfull;
                        let caption = `\nNick: ${parsedData.response.players[0].personaname}\n- - - - - - - - - - - - - - -\nStatus: ${getStatus(parsedData.response.players[0].personastate$

                        bot.sendPhoto(chat, foto, { caption, reply })

                      } catch (e) {
                        console.log(e.message);
                      }
                    });
                  }).on('error', (e) => {
                    console.log(`Got error: ${e.message}`);
                  });
                }


              }


          ^G Get Help                  ^O WriteOut                  ^R Read File                 ^Y Prev Page                 ^K Cut Text                  ^C Cur Pos
          ^X Exit                      ^J Justify                   ^W Where Is                  ^V Next Page                 ^U UnCut Text                ^T To Spell
          root@nodejs-512mb-nyc3-01:~/bot#
          root@nodejs-512mb-nyc3-01:~/bot# ls
          index.js  node_modules  package.json
          root@nodejs-512mb-nyc3-01:~/bot# nano index.js


















































            GNU nano 2.2.6                                               File: index.js

                    let rawData = '';
                    res.on('data', (chunk) => rawData += chunk);
                    res.on('end', () => {
                      try {
                        let parsedData = JSON.parse(rawData);
                        let game = parsedData.response.players[0].gameextrainfo;
                        let inGame = game ? `?^?^Ӣ CLICKANDO! ?^?^Ӣ \n${game}` : '';
                        let foto = parsedData.response.players[0].avatarfull;
                        let caption = `\nNick: ${parsedData.response.players[0].personaname}\n- - - - - - - - - - - - - - -\nStatus: ${getStatus(parsedData.response.players[0].personastate$

                        bot.sendPhoto(chat, foto, { caption, reply })

                      } catch (e) {
                        console.log(e.message);
                      }
                    });
                  }).on('error', (e) => {
                    console.log(`Got error: ${e.message}`);
                  });
                }


              }



              bot.on(nicksArray, msg => {
                let chat = msg.chat.id
                let fromId = msg.from.id;
                let firstName = msg.from.first_name;
                let reply = msg.message_id;
                let texto = msg.text;
                let comando = msg.text.slice(1);
                comando = comando.split('@')[0]

                getSteam(chat, comando, reply);

               })
              }
              bot.connect();





              res.send(main());
            })

          app.listen(3000, function () {

          ^G Get Help                  ^O WriteOut                  ^R Read File                 ^Y Prev Page                 ^K Cut Text                  ^C Cur Pos
          ^X Exit                      ^J Justify                   ^W Where Is                  ^V Next Page                 ^U UnCut Text                ^T To Spell
          root@nodejs-512mb-nyc3-01:~/bot#
          root@nodejs-512mb-nyc3-01:~/bot# ls
          index.js  node_modules  package.json
          root@nodejs-512mb-nyc3-01:~/bot# nano index.js


















































            GNU nano 2.2.6                                               File: index.js


              bot.on(nicksArray, msg => {
                let chat = msg.chat.id
                let fromId = msg.from.id;
                let firstName = msg.from.first_name;
                let reply = msg.message_id;
                let texto = msg.text;
                let comando = msg.text.slice(1);
                comando = comando.split('@')[0]

                getSteam(chat, comando, reply);

               })
              }
              bot.connect();





              res.send(main());
            })

          app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
          });

          exec('curl 104.131.177.24:3000', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          });















          ^G Get Help                  ^O WriteOut                  ^R Read File                 ^Y Prev Page                 ^K Cut Text                  ^C Cur Pos
          ^X Exit                      ^J Justify                   ^W Where Is                  ^V Next Page                 ^U UnCut Text                ^T To Spell
