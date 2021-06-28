// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// // TEST CODE 
// const array = [1,2];
// const array1 = [3,4,5,6,3,4,5,6];
// const array2 = [2,3,4,5,6,7,8];
// const array3 = [2]; 
// assertArraysEqual(middle(array),[]); 
// assertArraysEqual(middle(array1),[6,3]); 
// assertArraysEqual(middle(array2),[5]); 
// assertArraysEqual(middle(array3),[]); 
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]); 
  });
  it("returns [6,3] for  [3,4,5,6,3,4,5,6]", () => {
   assert.deepEqual(middle([3,4,5,6,3,4,5,6]),[6,3]); 
  });
  it("returns [5] for  [2,3,4,5,6,7,8]", () => {
    assert.deepEqual(middle([2,3,4,5,6,7,8]),[5]); 
  });
  it("returns [] for  [2]", () => {
   assert.deepEqual(middle([2]),[]); 
  });
});