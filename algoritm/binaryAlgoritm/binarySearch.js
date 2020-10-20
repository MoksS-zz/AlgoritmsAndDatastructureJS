"use strict";
Array.prototype.binSearch = function (item) {
    let low = 0;
    let high = this.length - 1;
    let mid,guess;

    while(low <= high){
    
        mid = Math.floor((low + high)/2);
        guess = this[mid]
        if (guess == item) return mid;
        guess > item ? high = mid - 1 : low = mid + 1;
    }

    return 'None';
}

const list = [1,3, 5, 7, 9];

console.log(list.binSearch(8));