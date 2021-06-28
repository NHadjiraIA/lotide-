const eqArrays = require('./eqArrays');
const assertArraysEqual = function(firstArray, secondArray) {
  let test = eqArrays(firstArray, secondArray);
  if (test) {
    console.log(` ✅✅✅   PASS: %firstArray == %secondArray, ${ firstArray }, ${secondArray}`);
  } else {
    console.log(` 🛑🛑🛑  FAILED: %firstArray !== %secondArray", ${ firstArray }, ${secondArray}`);
  }
};

module.exports = assertArraysEqual;

