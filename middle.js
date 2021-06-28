const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let result = [];
  let midIndex = Math.floor(array.length/2);
  const numberElement = array.length;
  if(numberElement == 1 || numberElement == 2){
    return result;
  }else if(numberElement % 2 == 0){ 
    
    result.push(array[midIndex - 1]);
    result.push(array[midIndex]);
  } else if (numberElement % 2 !== 0) {
   
    result.push(array[midIndex]);
  }
  return result;

  
}
module.exports = middle;

 
 