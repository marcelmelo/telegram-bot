// Retorna as ids da Steam

let id = {
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
  professor: '76561198099000805'
}

let idsStr = '';

for (let item in id) {
  let aux = id[item]
  if (aux) {
    idsStr = idsStr.concat(aux+',')
  }
}

module.exports = {
  uniqId: id,
  allIds: idsStr
}
