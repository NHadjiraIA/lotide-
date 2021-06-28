const assertEqual = require('./assertEqual');   
const tail = function(arrayOfData) {
  let resut = [];
  if (arrayOfData.length <= 1) {
    return resut;
  } else {
    for (let i = 1; i < arrayOfData.length; i++) {
      resut.push(arrayOfData[i]);
      
    }
    return resut;
  }
}; 
module.exports = tail;