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
    result.push(newStr);
    let recurtion = function(str){
        let addStr = str.split('');
        for(let i=0; i < addStr.length; i++){
            newStr = newStr + addStr[i];
            result.push(newStr);
            // console.log(newStr);
            if(addStr.length > 1){
                addStr.shift();
                addStr = addStr.join('');
                // console.log(addStr);
                recurtion(addStr);
            }else{
                addStr.shift();
                result.push(addStr); 
                newStr = newStr.split('');
                newStr.pop();
                newStr = newStr.join('');
            }     
        }
        newStr = newStr.split('');
        newStr.pop();
        newStr = newStr.join('');
    }
    recurtion(str);
    console.log(result);
    return result;
}
