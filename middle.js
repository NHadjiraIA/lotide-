// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(actual, expected) {
  let test = eqArrays(actual, expected);
  if (test) {
    console.log(` ✅✅✅   PASS: %firstArray == %secondArray, ${ actual }, ${expected}`);
  } else {
    console.log(` 🛑🛑🛑  FAILED: %firstArray !== %secondArray", ${ actual }, ${expected}`);
  }
};

const eqArrays = function(firstArrayOfData, seondArrayOfData) {
  let result = false;
  if(firstArrayOfData.length == 0 && seondArrayOfData.length == 0){
    return true;
  }else{
    for (let i = 0; i < firstArrayOfData.length; i = i + 1) {
      if (firstArrayOfData[i] === seondArrayOfData[i]) {
        result = true;
      }else {
        result = false;
      }
    }   
    return result;
  }
};
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

// TEST CODE 

const array = [1,2];
const array1 = [3,4,5,6,3,4,5,6];
const array2 = [2,3,4,5,6,7,8];
const array3 = [2];
console.log(middle(array));
console.log(middle(array1));
console.log(middle(array2));
console.log(middle(array3));
assertArraysEqual(middle(array),[]); 
assertArraysEqual(middle(array1),[6,3]); 
assertArraysEqual(middle(array2),[5]); 
assertArraysEqual(middle(array3),[]); 
 
 