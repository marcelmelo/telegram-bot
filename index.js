const express = require('express');
const TeleBot = require('telebot');
const bot = new TeleBot('204639144:AAFFFSbjhkfeL45IBEJEHY0d-cBG_UZuslE');
const exec = require('child_process').exec;
const services = require('./services')

bot.connect();

var app = express();

let arrIds = [];

for (item in services.ids.uniqId) {
  arrIds.push(`/${item}`)
}

app.get('/', function(req, res) {

  var main = function () {

    bot.on(arrIds, msg => {
      services.findPlayer(bot, msg)
    })

    bot.on('text', msg => {
      let match = msg.text;

      for (item in services) {
        if (services[item].hasOwnProperty('regex')) {
          if (services[item].regex.test(match)) {
            return services[item].exec(bot, msg)
          }
        }
      }

     })
    }
    res.send(main());
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// 104.131.177.24:3000
exec('curl 104.131.177.24:3000', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
