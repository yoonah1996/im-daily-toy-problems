/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
    let newArr = [];
    let inputstr = input.split("");
    // console.log(inputstr);
    for(let i=0; i < inputstr.length; i++){
        switch(inputstr[i]){
            case '(':
            case '{':
            case '[':
                newArr.push(inputstr[i]);
                break;
            case ')':
                if(newArr[newArr.length-1] === '('){
                    newArr.pop();
                }else{
                    return false;
                }
                break;
            case '}':
                if(newArr[newArr.length-1] === '{'){
                    newArr.pop();
                }else{
                    return false;
                }
                break;
            case ']':
                if(newArr[newArr.length-1] === '['){
                    newArr.pop();
                }else{
                    return false;
                }
                break;
        }
    }
    if(newArr.length === 0) return true;
    return false;
};


