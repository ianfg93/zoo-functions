const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colabResp = data.employees.find((colaborador) => colaborador.id === id).responsibleFor[0];
  const selectEspecie = data.species.find((especie) => especie.id === colabResp).residents;
  const animalVelho = selectEspecie.sort((idadeA, idadeB) => idadeA.age - idadeB.age)[0];
  return Object.values(animalVelho);
}

module.exports = getOldestFromFirstSpecies;
