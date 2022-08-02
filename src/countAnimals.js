const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal || typeof animal !== 'object') {
    return data.species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  const { specie, sex } = animal;
  const acharSpecie = data.species.find((bicho) => bicho.name === specie);
  const { residents } = acharSpecie;
  if (sex === undefined) {
    return residents.length;
  }
  return residents.filter((reside) => reside.sex === sex).length;
}
module.exports = countAnimals;
