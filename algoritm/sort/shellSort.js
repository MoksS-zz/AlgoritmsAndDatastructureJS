"use strict";
Array.prototype.generateNumber = function(n){
  for(let i = 0;i < n;i++){
    this.push(Math.floor(Math.random() * 999) +1)
  }
};

function shellSort(arr) {
  var increment = arr.length / 2;
  while (increment > 0) {
      for (i = increment; i < arr.length; i++) {
          var j = i;
          var temp = arr[i];
  
          while (j >= increment && arr[j-increment] > temp) {
              arr[j] = arr[j-increment];
              j = j - increment;
          }
  
          arr[j] = temp;
      }
  
      if (increment == 2) {
          increment = 1;
      } else {
          increment = parseInt(increment*5 / 11);
      }
  }
return arr;
}



const arr = [];
arr.generateNumber(10);


console.time('shell_sort');
console.log(shellSort(arr));
console.timeEnd('shell_sort');