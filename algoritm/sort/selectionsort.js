"use strict";
var selectionSort = function(array) {
    var temp;

    for(var i=0; i<array.length; i++){
        var mi = i;
        
        for(var j = i + 1; j<array.length; j++) {
            if(array[j] < array[mi])
                mi = j;
        }

        temp = array[i];
        array[i] = array[mi];
        array[mi] = temp;
    }
    return array;
};
Array.prototype.generateNumber = function(n){
    for(let i = 0;i < n;i++){
      this.push(Math.floor(Math.random() * 999) +1)
    }
};

const arr = [];
arr.generateNumber(1000000);
  
  
console.time('select_sort');
selectionSort(arr);
console.timeEnd('select_sort');


