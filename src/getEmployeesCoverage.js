const data = require('../data/zoo_data');

const acharFunc = (valor) => {
  const nome = data.employees.find(
    (nomes) => nomes.firstName === valor.name || nomes.lastName === valor.name
     || nomes.id === valor.id,
  );
  if (!nome) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor } = nome;
  const fullName = `${firstName} ${lastName}`;
  const locations = [];
  const animais = responsibleFor.map((a) => {
    const bicho = data.species.find((especie) => especie.id === a);
    locations.push(bicho.location);
    return bicho.name;
  });
  return { id, fullName, species: animais, locations };
};

const funcionarios = () => {
  const todosFuncionarios = [];
  data.employees.forEach((func) => todosFuncionarios.push(acharFunc(func)));
  return todosFuncionarios;
};

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return funcionarios();
  }
  return acharFunc(objeto);
}

module.exports = getEmployeesCoverage;
