const capitalize = require('../src/capitalize');

test('Returns string with first letter capitalized', () => {
    expect(capitalize('hello world')).toBe('Hello world');
}); 