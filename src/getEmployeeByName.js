const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.filter((pessoa) => (pessoa.firstName === employeeName
      || pessoa.lastName === employeeName)).shift() || {};
}

module.exports = getEmployeeByName;
