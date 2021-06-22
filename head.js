const assertEqual = function(actual, expected) {
 
  
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion passed: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion failed: %s !== %s", ${ actual }, ${expected}`);
  }


};
const head = function(data) {
  if (data.length == 0) {
    return undefined;
  }  else {
    return data[0];
  }
}
// TEST CODE
 
assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([5,6,7]))
