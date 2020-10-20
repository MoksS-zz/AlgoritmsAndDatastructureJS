'use strict';
const selectionSort = function (array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    let mi = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) mi = j;
    }

    temp = array[i];
    array[i] = array[mi];
    array[mi] = temp;
  }
  return array;
};
Array.prototype.generateNumber = function (n) {
  for (let i = 0; i < n; i++) {
    this.push(Math.floor(Math.random() * 999) + 1);
  }
};

const arr = [];
arr.generateNumber(100);

console.time('select_sort');
console.table(selectionSort(arr));
console.timeEnd('select_sort');
