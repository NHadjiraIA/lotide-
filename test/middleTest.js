const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// TEST CODE 
const array = [1,2];
const array1 = [3,4,5,6,3,4,5,6];
const array2 = [2,3,4,5,6,7,8];
const array3 = [2]; 
assertArraysEqual(middle(array),[]); 
assertArraysEqual(middle(array1),[6,3]); 
assertArraysEqual(middle(array2),[5]); 
assertArraysEqual(middle(array3),[]); 