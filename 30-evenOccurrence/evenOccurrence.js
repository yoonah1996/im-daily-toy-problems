/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function (arr) {
  let newobj = {};

  arr.forEach(el => {
    if (newobj.hasOwnProperty(el)) {
      newobj[el] = newobj[el] + 1;
    } else {
      newobj[el] = 1;
    }
  })
  console.log(newobj)
  for (let key in newobj) {
    if (newobj[key] % 2 === 0) {
      if(isNaN(key)) return key;
      return Number(key);
    }
  }
  return null;
};
