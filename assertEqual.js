// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅   Assertion passed: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: %s !== %s", ${ actual }, ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
