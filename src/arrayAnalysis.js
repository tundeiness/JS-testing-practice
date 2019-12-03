const ave = (arr) => {
  const total = arr.reduce((item, accumulator) => accumulator + item, 0) / arr.length;
  return total;
};

const analyze = (arr) => {

  const analysisObject = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  analysisObject.average = ave(arr);
  analysisObject.min = Math.min(...arr);
  analysisObject.max = Math.max(...arr);
  analysisObject.length = arr.length;

  return analysisObject;
};
module.exports = analyze;
