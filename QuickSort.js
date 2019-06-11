"use strict";
var quick_sort = function(array){ 

    function partition(array, lo, hi){
      var i = lo, j = hi + 1;
      while(true){
        while(array[++i] < array[lo]){
          if ( i == hi ) break;
        }
        while (array[--j] > array[lo]){
          if ( j == lo ) break;
        }
        if (i >= j) break;
        [array[i],array[j]]=[array[j],array[i]];//swap array
      }
      [array[lo],array[j]]=[array[j],array[lo]];//swap array
      return j;
    }

    function sort(array, lo, hi){
      if (hi <= lo) return;
      var j = partition(array, lo, hi);
      sort(array, lo, j-1);
      sort(array, j+1, hi);
    }
    sort(array, 0, array.length - 1);
   
    return array;
};


Array.prototype.generateNumber = function(n){
    for(let i = 0;i < n;i++){
      this.push(Math.floor(Math.random() * 999) +1)
    }
};


const arr = [];
arr.generateNumber(1000000);
const arr1 = [];
arr1.generateNumber(1000000);


console.time('quick_sort');
quick_sort(arr1);
console.timeEnd('quick_sort');

console.time('sort');
arr.sort((a,b)=> a-b);
console.timeEnd('sort');
