const arr = [[12,32], [-12, 32], [15, 32], [11, 9], [10, 9], [11, 9], [32, 45], [34, 56]];

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
})

console.table(arr)