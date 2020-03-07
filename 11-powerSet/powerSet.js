/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("j' u' m' p")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
    let result =[];
    let newStr = '';
    let newArr = [];
    let addStr = str.split('');
    addStr = addStr.reduce(function(a,b) {if(a.indexOf(b)<0) a.push(b); return a;} ,[]);
    result.push(newStr);
    let recurtion = function(str){
        let addStr = str.split('');
        for(let i=0; i < addStr.length; i++){
            newStr = newStr + addStr[i];
            result.push(newStr);
            if(addStr.length > 0) recurtion(addStr.slice(i+1).join(""));    
        }
        newStr = newStr.split('');
        newStr.pop();
        newStr = newStr.join('');
    }
    recurtion(addStr.join(''));
    return result;
}
