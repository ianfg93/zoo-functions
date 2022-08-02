const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colabResp = data.employees.find((colaborador) => colaborador.id === id).responsibleFor[0];
  const { residents } = data.species.find((especie) => especie.id === colabResp);
  const animalVelho = residents.sort((idadeA, idadeB) => idadeA.age - idadeB.age);
  const resultado = animalVelho[animalVelho.length - 1];
  const { name, sex, age } = resultado;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
