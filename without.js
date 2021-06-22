const assertArraysEqual = function(firstArray, secondArray) {
  let test = eqArrays(firstArray, secondArray);
  if (test) {
    console.log(` ✅✅✅   PASS: %firstArray == %secondArray, ${ firstArray }, ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑  FAILED: %firstArray !== %secondArray", ${ firstArray }, ${secondArray}`);
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
const isInSource = function(source, element){
let result = false;
for (let i = 0; i < source.length; i = i + 1 ){
  if (source[i] === element){
    result = true;
  }
}
return result;
}
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i = i + 1) {
    if (!isInSource(itemsToRemove,source[i])) {
      result.push(source[i]);
        
    } 
  }   
  return result;
};
console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
