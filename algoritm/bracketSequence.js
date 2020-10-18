let string = "";
function gen(left = 0, right = 0, str = '') {
  if (left === 0 && right === 0) {
    string += (str + "\n");
  }
  if (left > 0) {
    gen(left - 1, right + 1, str + '(');
  }
  if (right > 0) {
    gen(left, right - 1, str + ')');
  }
}
gen(3)
console.log(string, '\n\n');
string = "";
gen(5)
console.log(string);

