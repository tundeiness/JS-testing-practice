/* eslint-disable no-undef */

const reverseStr = require('../src/reverseStr');

test('Returns reversed string', () => {
  expect(reverseStr('hello world')).toBe('dlrow olleh');
});
