/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
    array.sort((a,b) => b-a);
    let newArr = array.slice(0,3);
    let result = array.filter(el => el < 0)
    if(result.length > 1){
      result = result.map(el => el * -1).sort((a,b) => b-a).slice(0,2);
      result.push(array[0]);
      if(newArr.reduce((a,b) => a*b) > result.reduce((a,b) => a*b)){
        return newArr.reduce((a,b) => a*b);
      }else{
        return result.reduce((a,b) => a*b);
      }
    }
      return newArr.reduce((a,b) => a*b);
};
