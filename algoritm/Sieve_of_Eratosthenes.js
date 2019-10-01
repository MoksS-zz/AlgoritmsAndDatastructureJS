const num = new Set();
let i = 0, p = 2;

for (i = 2; i < 100; i++) {
  num.add(i);
}

do {

  for (i = 2 * p; i < 100; i += p) {
    num.delete(i);
  }

  for (i = p + 1; i < 100; i++) {
    if (num.has(i)) break;
  }

  p = i;
} while (p * p < 100); 

console.table(num);