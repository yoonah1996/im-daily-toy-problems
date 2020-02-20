/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset..
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  let newArr = this;
  let result = false;
  for(let i=0; i<newArr.length; i++){
    for(let j=0; j<array.length; j++){
      if(String(newArr[i]) === String(array[j])){ //JSON.stringify(newArr[i]) === JSON.stringify(array[j])도 됨
        result = true;
        break;
      }
    }
    if(result === false) return result;
    result = false;
  }
  return true;
};
