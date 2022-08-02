const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((gerente) => gerente.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const equipe = [];
    const colabs = data.employees.filter((colaborador) =>
      colaborador.managers.includes(managerId));
    for (let index = 0; index < colabs.length; index += 1) {
      equipe.push(`${colabs[index].firstName} ${colabs[index].lastName}`);
    }
    return equipe;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
