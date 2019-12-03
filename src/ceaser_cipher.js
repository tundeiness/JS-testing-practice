
const caesar = (str, value) => {
  if (value < 0) {
    return caesar(str, value + 26);
  }
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90)) char = String.fromCharCode(((code - 65 + value) % 26) + 65);
      else { char = String.fromCharCode(((code - 97 + value) % 26) + 97); }
    }
    result += char;
  }
  return result;
};


module.exports = caesar;
