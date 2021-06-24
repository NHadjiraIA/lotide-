// FUNCTION IMPLEMENTATION         
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅   Assertion passed: %s == %s, ${ actual }, ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion failed: %s !== %s", ${ actual }, ${expected}`);
  }
};
const existInSentence =  function (sentence , letter){
  let countLetter = 0;
  let arraySentence = sentence.split('').join('');
  for  (let i = 0; i < arraySentence.length ; i++) {
    if (letter === arraySentence[i]){
      countLetter = countLetter + 1; 
    }else if (arraySentence[i] === ' '){
      i = i +1;
    }
   
  }
  return countLetter;
}
const countLetters = function(sentence){
  const results = {};
  for ( i = 0; i < sentence.length; i++){
    if( sentence[i] !== ' '){
      key = sentence[i];
      value = existInSentence(sentence, sentence[i]);
      results[key]= value;
    }   
  }
  return results;
}
 
console.log(countLetters('how are you'));