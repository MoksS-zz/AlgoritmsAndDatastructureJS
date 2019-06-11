"use strict";
Array.prototype.generateNumber = function(n){
  for(let i = 0;i < n;i++){
    this.push(Math.floor(Math.random() * 999) +1)
  }
};


var merge_sort = function(array){ 
  
    function merge(left, right){
      var result = [];
      var il = 0;
      var ir = 0;
      while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      }
   
      //merge what is left
      return result.concat(left.slice(il)).concat(right.slice(ir));
    }
    function merge_Sort(items){
      //well it is only 1 element
      if (items.length < 2){
        return items;
      } 
      var middle = Math.floor(items.length / 2);
      //create two arrays
      var left = items.slice(0, middle);
      var right = items.slice(middle);
      return merge(merge_Sort(left), merge_Sort(right));
    }
    return merge_Sort(array);
  };

const arr = [];
arr.generateNumber(1000000);


console.time('merge_sort');
merge_sort(arr);
console.timeEnd('merge_sort');