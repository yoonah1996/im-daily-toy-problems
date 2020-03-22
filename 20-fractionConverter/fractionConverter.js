/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  let newArr = String(number).split('.');
  if(newArr.length !== 2){
    newArr.push(1);
    return newArr.join('/');
  }
  let denominator = newArr[1].length;
  let Division = '';
  if(Math.abs(newArr[0]) > 0){
    newArr[0] = newArr[0]+ newArr[1];
    newArr[1] = (Math.pow(10,denominator));
    Division = Math.abs(Math.floor(newArr[0]/2));
  }else{
    newArr.shift();
    newArr.push(Math.pow(10,denominator));
    Division = Math.floor(newArr[1]/2);
  }
  newArr = newArr.map(el => Number(el));
  for(let i=Division; i>0; i--){
    (newArr[0] % i === 0) && (newArr[1] % i === 0) ? newArr = newArr.map(el => Math.floor(el/i)) : 1;
  }
  return newArr.join('/');
};
