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

function partition(arr, low, high) {
  let i = low - 1;
  let pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i = i + 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quick_sort2(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quick_sort2(arr, low, pi - 1);
    quick_sort2(arr, pi + 1, high);
  }
}
const arr = [];
arr.generateNumber(100);
const arr2 = [];
arr2.generateNumber(100);

console.time('quick_sort');
quick_sort(arr);
console.log(arr);
console.timeEnd('quick_sort');

console.time('quick_sort2');
quick_sort2(arr2, 0, arr2.length - 1);
console.log(arr2);
console.timeEnd('quick_sort2');
