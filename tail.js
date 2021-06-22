// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    console.log(` ✅✅✅   Assertion passed: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: %s !== %s", ${ actual }, ${expected}`);
  }
};
 
const tail = function(arrayOfData) {
  let resut = [];
  if (arrayOfData.length <= 1) {
    return resut;
  } else {
    for (let i = 1; i < arrayOfData.length; i++) {
      resut.push(arrayOfData[i]);
      
    }
    return resut;
  }
};

 
// TEST CODE
const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 0);
 
