/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  let result = [];
  let newObj = {};
  let sortArr = [];

  string.split('').forEach(el => {
    if (newObj.hasOwnProperty(el)) {
      newObj[el] += 1;
    }
    else {
      newObj[el] = 1;
    } 0
  })



  Object.values(newObj).sort((a, b) => b - a).forEach(el => {

    for (let key in newObj) {
      // console.log(el + "," + key)
      if (el === newObj[key]) {

        let pushArr = [key, newObj[key]];
        result.push(pushArr);
        delete newObj[key];

      }
    }

  })
  console.log(result);

  return result;
};