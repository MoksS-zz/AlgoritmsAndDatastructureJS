'use strict';

Array.prototype.generateNumber = function (n) {
  for (let i = 0; i < n; i++) {
    this.push(Math.floor(Math.random() * 999) + 1);
  }
};

function sortBubbleVer1(arr) {
  const length = arr.length;
  for (let i = length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const spaw = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = spaw;
      }
    }
  }
  return arr;
}

function sortBubbleVer2(arr) {
  const length = arr.length;
  let swaped;
  do {
    swaped = false;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        swaped = true;
      }
    }
  } while (swaped);

  return arr;
}

const arr = [];
arr.generateNumber(40);

console.table(sortBubbleVer2(arr));
