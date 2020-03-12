/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
    let center = array[Math.floor(array.length / 2)];
    let centerIdx = Math.floor(array.length / 2)
    
    if(center === target){
        return centerIdx;
    }else if(center > target){
        return binarySearch(array.slice(0, centerIdx), target);
    }else if(center < target){
        return centerIdx  + binarySearch(array.slice(centerIdx), target);
    }
};

