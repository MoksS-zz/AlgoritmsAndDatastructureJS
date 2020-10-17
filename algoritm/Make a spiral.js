const createMatrix = n => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  return arr;
}

const top = (row, column, n) => row < n / 2 && row % 2 === 0 && column >= row - 2 && column <= n - row - 1;
const right = (row, column, n) => (n - column) % 2 === 1 && row > n - column - 1 && row <= column;
const bottom = (row, column, n) => (n - row) % 2 === 1 && column > n - row - 1 && column < row;
const left = (row, column, n) => column % 2 === 0 && row > column + 1 && row < n - column;

function setNumber(row, column, n) {
  const boolean = (
    top(row, column, n) ||
    right(row, column, n) ||
    bottom(row, column, n) ||
    left(row, column, n)
  );
  
  return boolean ? 1 : 0;
}

function spiralize(n) {
  const arr = createMatrix(n);
  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      arr[row][column] = setNumber(row, column, n);
    }
  }
  return arr;
};

const spiral = spiralize(8);

console.table(spiral);
