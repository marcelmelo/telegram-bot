require('dotenv').config();
const express = require('express');
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_BOT_KEY);
const exec = require('child_process').exec;
const services = require('./services')
var app = express();

let arrIds = [];

for (item in services.ids.uniqId) {
  arrIds.push(`/${item}`)
}

app.get('/', function(req, res) {
bot.connect();
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

app.listen(process.env.HOST_PORT, function () {
  console.log(`Example app listening on port ${process.env.HOST_PORT}!`);
});
exec(`curl localhost:${process.env.HOST_PORT}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
