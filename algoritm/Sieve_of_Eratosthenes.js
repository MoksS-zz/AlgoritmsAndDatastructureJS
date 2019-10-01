let arr = [];
let i = 0, p = 2;

for (i = 2; i < 100; i++) {
  arr[i] = true
}

do {

  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100); 

arr = arr.map( (e,i) => e === true ? i : false ).filter(e => e !== false);

console.table(arr);