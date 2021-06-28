const assertEqual = require('./assertEqual');   
const eqArrays = function(firstArrayOfData, seondArrayOfData) {
  let result = false;
  for (let i = 0; i < firstArrayOfData.length; i = i + 1) {
    if (firstArrayOfData[i] === seondArrayOfData[i]) {
      result = true;
        
    }else {
      result = false;
    }
  }   
  return result;
};
module.exports = eqArrays;
 