const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (!options) {
    return data.species.reduce((acc, cur) => {
      acc[cur.location].push(cur.name);
      return acc;
    }, { NE: [], NW: [], SW: [], SE: [] });
  }

  const { nome } = options;
  if (!nome) {
    return data.species.reduce((acc, cur) => {
      acc[cur.location].push(cur.name);
      return acc;
    }, { NE: [], NW: [], SW: [], SE: [] });
  }
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
