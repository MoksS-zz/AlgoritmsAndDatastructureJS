'use strict';
var quick_sort = function (array) {
  function partition(array, lo, hi) {
    var i = lo,
      j = hi + 1;
    while (true) {
      while (array[++i] < array[lo]) {
        if (i == hi) break;
      }
      while (array[--j] > array[lo]) {
        if (j == lo) break;
      }
      if (i >= j) break;
      [array[i], array[j]] = [array[j], array[i]]; //swap array
    }
    [array[lo], array[j]] = [array[j], array[lo]]; //swap array
    return j;
  }

  function sort(array, lo, hi) {
    if (hi <= lo) return;
    var j = partition(array, lo, hi);
    sort(array, lo, j - 1);
    sort(array, j + 1, hi);
  }
  sort(array, 0, array.length - 1);

  return array;
};

Array.prototype.generateNumber = function (n) {
  for (let i = 0; i < n; i++) {
    this.push(Math.floor(Math.random() * 999) + 1);
  }
};

function partition(arr, low, high, str = 'CENTER') {
  let i = low - 1;
  let pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  i++;
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quick_sort2(arr, low = 0, high = arr.length -1, str) {
  if (low < high) {
    const pi = partition(arr, low, high, str);
    quick_sort2(arr, low, pi - 1, 'LEFT');
    quick_sort2(arr, pi + 1, high, 'RIGTH');
  }
}

const arr2 = [
  200, 528, 610, 596, 438,
  778, 608, 416, 628,
  387, 334
];

// arr2.generateNumber(10);

console.time('quick_sort2');
console.log('START', arr2);
quick_sort2(arr2);
console.log('END', arr2);
console.timeEnd('quick_sort2');
