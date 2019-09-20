"use strict";
function sum(arr,i = 0){
    if(i>arr.length - 1) return 0;
    console.log(i);
    return arr[i] + sum(arr,++i);
};

console.log(sum([4,2,10,4]));