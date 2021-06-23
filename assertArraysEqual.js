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


// TEST CODE 
assertArraysEqual([1, 2, 5], [1, 2, 3]);
assertArraysEqual([1, 2, 5], [1, 2, 5]);
