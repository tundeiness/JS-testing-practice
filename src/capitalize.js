const capitalize = (str) => {
  const firstChar = str.slice(0, 1).toUpperCase();
  const secondPart = str.slice(1, str.length);
  const result = firstChar.concat(secondPart);
  return result;
};

module.exports = capitalize;
