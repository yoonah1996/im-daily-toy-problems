/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  let resultArr = [];
  let inArr = [];
  let origin = ["rock", "paper", "scissors"];
  if(n===0) return[];
  if(n === undefined) n=3;
  // console.log(origin[0]);
  let resur = function (n, inArr){
    for(let i=0; i<3; i++){
      inArr.push(origin[i]);
      // console.log(inArr);
      if(inArr.length === n){
        resultArr.push(JSON.parse(JSON.stringify(inArr)));
        inArr.pop();
      }else{
        resur(n, inArr);
      }
    }
    if(inArr.length === 0){
      return resultArr;
    }else if(inArr.length !== n){
      inArr.pop();
    }
    // return resultArr;
  }
  resur(n, inArr);
  return resultArr;
};
// let resultArr = [];
//   let inArr = [];
//   let origin = ['rock', 'paper', 'scissors'];
//   for (let i = 0; i < n; i++) {
//     inArr.push(origin[0]);
//   }
//   let resur = function (inArr, n) {
//     for (let j = 0; j < 3; j++) {
//       inArr[inArr.length - 1] = origin[j];
//       resultArr.push(JSON.parse(JSON.stringify(inArr)));
//     }
//     for (let i = 2; i <= n; i++) {
//       for (let j = 1; j < 3; j++) {
//         inArr.forEach((el, ind) => ind > inArr.length - i ? inArr[ind] = origin[0] : 1);
//         console.log(inArr);
//         inArr[inArr.length - i] = origin[j];
//         resur(inArr, n - 1);
//       }
//     }
//   }
//   resur(inArr, n);
//   return resultArr;