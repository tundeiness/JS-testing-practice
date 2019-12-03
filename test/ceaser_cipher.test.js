const ceaser = require('../src/ceaser_cipher');

test('should return "Pm ol ohk hufaopun jvumpkluaphs av zhf" string', () => {
  expect(ceaser('If he had anything confidential to say', 7)).toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf');
});

test('should return "VYBOW SZCEW myxpsnoxdskv dy cki" string', () => {
  expect(ceaser('LOREM IPSUM confidential to say', 10)).toBe('VYBOW SZCEW myxpsnoxdskv dy cki');
});

test('should return "ZCFSA WDGIA !..//\\ qcbtwrsbhwoz hc gom" string', () => {
  expect(ceaser('LOREM IPSUM !..//\\ confidential to say', 40)).toBe('ZCFSA WDGIA !..//\\ qcbtwrsbhwoz hc gom');
});
