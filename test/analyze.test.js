/* eslint-disable no-undef */

const analyze = require('../src/arrayAnalysis');

test('returns min, max, and length of the array', () => {
  const array = [1, 8, 3, 4, 2, 6];

  expect(analyze(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
