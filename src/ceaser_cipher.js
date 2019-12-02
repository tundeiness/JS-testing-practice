/* eslint-disable max-len */
const cipher = (str) => { // LBH QVQ VG!
  const arrT = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
  const inputStr = [];
  // store input string in an array called inputStr
  for (let l = 0; l < str.length; l += 1) {
    inputStr.push(str.charCodeAt(l));
  }
  // compare the values in the arrays
  const arr = [];
  for (let i = 0; i < inputStr.length; i += 1) {
    for (let j = 0; j < arrT.length; j += 1) {
      if (inputStr[i] === arrT[j]) {
        if (j < 13) {
          arr.push(arrT[j + 13]);
          break;
        } else if (j > 12) {
          arr.push(arrT[j - 13]);
          break;
        }
      } else if (j === arrT.length - 1) {
        arr.push(inputStr[i]);
      }
    }
  }

  return String.fromCharCode.apply(null, arr);
};


module.exports = cipher;
// Change the inputs below to test
// rot13("SERR PBQR PNZC");
// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
