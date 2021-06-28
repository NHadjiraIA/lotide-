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