// Buscador de títulos no IMDB
const request = require('request-promise');

const api_url = "http://www.omdbapi.com/?plot=short&r=json&t=";

const exec = (bot, msg) => {
  let titulo = msg.text.replace(/imdb /i, '');
  request(api_url.concat(titulo))
  .then(resp => {
    let _info = JSON.parse(resp);
    if (_info.Response != 'False') {
      let text = _info.Title + "\n\n" + "Gênero: " + _info.Genre + "\n" + "Tipo: " + _info.Type + "\n" + "Lançado em " + _info.Released + "\n" + "Sinopse: " + _info.Plot + "\n" + "Nota: " + _info.imdbRating + "\n" + "Poster: " + _info.Poster;
      bot.sendMessage(msg.chat.id, text)
    }
    else {
      bot.sendMessage(msg.chat.id, 'Vish, conheço não. Veja se você digitou certo, noob.')
    }
  })
}

module.exports = {
  exec,
  regex: /imdb /i
}
