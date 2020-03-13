/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */
// 이해 안됐던 부분 => 
// var greet = function(name){return 'hi: ' + name;};
// var exclaim = function(statement){return statement.toUpperCase() + '!'};
// var welcome = compose(greet, exclaim);
// welcome('phillip')
// 인 경우 대체 'phillip'를 어떤식으로 받아야 하나 고민 했었는데
// compose(greet, exclaim)('phillip') 이런식으로 이해하는 것보다
// function welcome('phillip'){
//   compose(greet, exclaim)
// }
// 이런식으로 생각..?

'use strict';

var compose = function (...arg) {
    // console.log(arg);
    return function (val) {
        // console.log(val);
        let result = val;
        for (let i = arg.length - 1; i >= 0; i--) {
            result = arg[i](result);
        }
        return result;
    }
};

var pipe = function (...arg) {
    return function (val) {
        let result = val;
        for (let i = 0; i < arg.length; i++) {
            result = arg[i](result);
        }
        return result;
    }
};
