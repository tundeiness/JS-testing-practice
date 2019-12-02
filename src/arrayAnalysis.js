const analyze = (arr) => {
  const analysisObject = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  function ave() {
    const total = arr.reduce((accumulator, item) => accumulator + item, 0);
    return total / 2;
  }

  function len() {
    const size = arr.length;
    return size;
  }

  function maxi() {
    return Math.max(...arr);
  }

  function mini() {
    return Math.min(...arr);
  }

  analysisObject.average = ave;
  analysisObject.min = mini;
  analysisObject.max = maxi;
  analysisObject.length = len;

  return analysisObject;
};
module.exports = analyze;
