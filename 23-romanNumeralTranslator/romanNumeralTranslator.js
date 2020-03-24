
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  let romaArr = String(romanNumeral).split("");
  let bloo = false;
  let result = 0;
  romaArr.forEach(el => {
    if(!DIGIT_VALUES.hasOwnProperty(el)){
      bloo = true;
    }
  })
  if(bloo) return null;
  
  if(romaArr.length > 1){
    romaArr.forEach((el, idx) =>{
      if(!romaArr[idx+1]){
        result = result + DIGIT_VALUES[el];
      }else{
        DIGIT_VALUES[romaArr[idx]] >= DIGIT_VALUES[romaArr[idx+1]] ? 
        result = result + DIGIT_VALUES[el] :
        result = result - DIGIT_VALUES[el]
      }
    })
  }else{
    return !!romaArr[0] ? DIGIT_VALUES[romaArr[0]] : result
  }
  
  return result;
};
