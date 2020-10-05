function pair(n) {
  if (n == 0)
      return [""];

  const result = [];
  for (var i = 0; i < n; ++i) {

      const lefts = pair(i);
      const rights = pair(n - i - 1);

      for (let l = 0; l < lefts.length; ++l)
          for (let r = 0; r < rights.length; ++r)
              result.push("(" + lefts[l] + ")" + rights[r]);
  }

  return result;
}

const res = pair(4);
console.log(res);