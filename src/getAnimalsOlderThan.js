const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const todosAnimais = data.species.find((especie) => especie.name === animal);
  return todosAnimais.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
