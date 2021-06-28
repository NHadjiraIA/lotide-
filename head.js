const assertEqual = require('./assertEqual');  
const head = function(data) {
  if (data.length == 0) {
    return undefined;
  }  else {
    return data[0];
  }
}

