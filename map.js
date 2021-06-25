
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

const map = function(array,callback) {
   const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
 return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const oneElement = ["ground"]; [];
const results1 = map(words, word => word[0]);
const results2 = map(oneElement, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 'g']);
 
 
 
