const getOpeningHours = require('../src/getOpeningHours');

// describe('Testes da função getOpeningHours', () => {
//   it('Verifica se vazio retornar undefined', () => {
//     expect(getOpeningHours()).toBeUndefined();
//   });
//   it('Verifica funcionamento do Zoo', () => {
//     expect(getOpeningHours('hours')).toEqual({
//       Tuesday: { open: 8, close: 6 },
//       Wednesday: { open: 8, close: 6 },
//       Thursday: { open: 10, close: 8 },
//       Friday: { open: 10, close: 8 },
//       Saturday: { open: 8, close: 10 },
//       Sunday: { open: 8, close: 8 },
//       Monday: { open: 0, close: 0 },
//     });
//   });
//   it('Verifica se segunda-Feira está fechado', () => {
//     expect(getOpeningHours('Monday')).toEqual('The zoo is closed');
//   });
//   it('Verifica se AM / PM são válidos', () => {
//     expect(getOpeningHours('validateAbbreviation')).toBe('AM, PM');
//   });
//   it('Verifica horário de funcionamentode Quarta-Feira ', () => {
//     expect(getOpeningHours('Wednesday')).toEqual({ open: 8, close: 6 });
//   });
//   it('Verifica horário de funcionamentode Sábado ', () => {
//     expect(getOpeningHours('Saturday')).toEqual({ open: 8, close: 10 });
//   });
//   it('Verifica horário de funcionamento Domingo', () => {
//     expect(getOpeningHours('Sunday')).toEqual({ open: 8, close: 8 });
//   });
// });
