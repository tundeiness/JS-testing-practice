/* eslint-disable no-undef */
const calculator = require('../src/calculator');

test('returns result of add method', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('returns result of substract method', () => {
  expect(calculator.substract(6, 4)).toBe(2);
});

test('returns result of divide method', () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test('returns result of add method', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
