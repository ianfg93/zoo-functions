const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se vazio retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica quantidade de Elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica os nomes dos Elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se idade média dos Elefantes é algo próximo de 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica a localização dos Elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica a popularity de Elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica dias de vistas dos Elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se o nome da espécie é elephants', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
});
