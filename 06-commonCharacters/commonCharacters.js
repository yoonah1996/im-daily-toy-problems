/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let result = [];
  let newString1 = string1.split("");
  let newString2 = string2.split("");

  for(let i=0; i<newString1.length; i++){
    for(let j=0; j<newString2.length; j++){
      if(newString1[i] === newString2[j]){
        result.push(newString2[j]);
      }
    }
  }
  return result.join("");
};
