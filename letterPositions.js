// const assertArraysEqual = function(firstArray, secondArray) {
//   let test = eqArrays(firstArray, secondArray);
//   if (test) {
//     console.log(` ✅✅✅   PASS: %firstArray == %secondArray, ${ firstArray }, ${secondArray}`);
//   } else {
//     console.log(` 🛑🛑🛑  FAILED: %firstArray !== %secondArray", ${ firstArray }, ${secondArray}`);
//   }
// };

// const eqArrays = function(firstArrayOfData, seondArrayOfData) {
//   let result = false;
//   for (let i = 0; i < firstArrayOfData.length; i = i + 1) {
//     if (firstArrayOfData[i] === seondArrayOfData[i]) {
//       result = true;
        
//     }else {
//       result = false;
//     }
//   }   
//   return result;
// };
 
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for ( let i = 0; i < sentence.length; i++){
      if (sentence[i] !== ' '){
        if(results[sentence[i]]){
          results[sentence[i]].push(i);
          
           
        }else{
          results[sentence[i]] = [i];
          
        }
      }
      
  }
  return results;
};
console.log(letterPositions("hello h ddoh")); 
