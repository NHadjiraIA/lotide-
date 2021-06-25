// FUNCTION IMPLEMENTATION         
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅   Assertion passed: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion failed: %s !== %s", ${ actual }, ${expected}`);
  }
};
const findKey = function (source, callback){
  const result = '';
  myTableOfKey = Object.keys(source); 
  for (const item of myTableOfKey){ 
   
    if(callback(source[item])){ 
      return item;
    } 
  }
  return undefined;   
}
result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(result1,'noma');