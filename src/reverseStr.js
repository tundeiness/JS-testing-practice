const reverseStr = (str) => {
  const newStr = [];
  for (let i = 0; i <= str.length - 1; i += 1) {
    newStr.push(str[i]);
  }
  return newStr.reverse().join('');
};

module.exports = reverseStr;
