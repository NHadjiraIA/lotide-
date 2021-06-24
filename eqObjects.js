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

 
const eqObjects = function(object1, object2) {
  let keyOfObject1 = Object.keys(object1);
  let keyOfObject2 = Object.keys(object2);
  if (keyOfObject1.length !== keyOfObject2.length){
    return false;
  }else {
    for (let i = 0; i < keyOfObject1.length; i++ ){
      if(Array.isArray(object1[keyOfObject1[i]]) && Array.isArray(object2[keyOfObject1[i]])){
        if (!eqArrays(object1[keyOfObject1[i]],object2[keyOfObject1[i]])){
          return false;
         }
      }else if (object1[keyOfObject1[i]] !== object2[keyOfObject1[i]] ){
        return false;
      } 
    }
    return true;
  }
};
const ab = { a: [1,3], b: "2" };
const ba = { b: "2", a: [1,3] };
console.log(eqObjects(ab, ba)); // => true
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); 
 