/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  let copy1 =[];
  let copy2 =[];
  let flag = false;
  for(let key of Object.keys(apple).sort()){
    copy1.push( {key : apple[key]});
  }
  for(let key of Object.keys(orange).sort()){
    copy2.push( {key : orange[key]});
  }
  if(JSON.stringify(copy1) === JSON.stringify(copy2)) return true;
  return false;
};
