// FUNCTION IMPLEMENTATION   

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅   PASS: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(`🛑🛑🛑  FAILED: %s !== %s", ${ actual }, ${expected}`);
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
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) ;
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 