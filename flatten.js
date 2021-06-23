const assertArraysEqual = function(firstArray, secondArray) {
  let test = eqArrays(firstArray, secondArray);
  if (test) {
    console.log(` ✅✅✅   PASS: %firstArray == %secondArray, ${ firstArray }, ${secondArray}`);
  } else {
    console.log(` 🛑🛑🛑  FAILED: %firstArray !== %secondArray", ${ firstArray }, ${secondArray}`);
  }
};

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
const flatten = function(ArrayOfData) {
  let result = [];
  for (let i = 0; i < ArrayOfData.length; i = i + 1) {
    if (Array.isArray(ArrayOfData[i])) {
      let subArray = ArrayOfData[i];
      for (let j = 0; j < subArray.length; j = j + 1){
       result.push(subArray[j]);
      }
      
    }else {
     result.push(ArrayOfData[i]);
    }
 
  }   
  return result;
};
// TEST CODE 
console.log (flatten([1, 2, [3, 4], 5, [6]]) );
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4,5,6]);
