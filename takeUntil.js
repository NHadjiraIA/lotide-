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

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let i = 0; i< array.length; i++) {
    
    if (callback(array[i])){
      return results;
    }
    results.push(array[i]);
  
  }
  
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
 
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);