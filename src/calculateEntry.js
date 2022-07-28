const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrada) => entrada.age < 18);
  const adult = entrants.filter((entrada) => entrada.age >= 18 && entrada.age < 50);
  const senior = entrants.filter((entrada) => entrada.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const publico = countEntrants(entrants);
  const childValor = publico.child * data.prices.child;
  const adultValor = publico.adult * data.prices.adult;
  const seniorValor = publico.senior * data.prices.senior;
  return childValor + adultValor + seniorValor;
}
module.exports = { calculateEntry, countEntrants };
