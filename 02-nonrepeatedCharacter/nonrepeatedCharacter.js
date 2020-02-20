/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 //중복되지 않는 첫번째 값
var firstNonRepeatedCharacter = function(string) {
  let newArr = string.split('');
  let resultObj = {};
  for(let i=0; i<newArr.length; i++){
    if(resultObj.hasOwnProperty(newArr[i])){
      resultObj[newArr[i]]++;
    }else{
      resultObj[newArr[i]] = 1;
    }
  }
  for(let key in resultObj){
    if(resultObj[key] === 1) return key;
  }
};
