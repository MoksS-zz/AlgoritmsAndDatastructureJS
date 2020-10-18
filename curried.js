const sum = (a, b, c) => {
  return a + b + c;
}

// замыкание
const sum2 = a => b => a + b;

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(null, args);
    }

    return function(...args2) {
      return curried.apply(null, args.concat(args2));
    }
  };
}

function sum3(a,b,c) {
  if (arguments.length >= sum3.length)  return a + b + c;
  return (...args2) => sum3.call(null, ...arguments, ...args2); 
};

// const currySum = curry(sum);
// console.log(currySum(1)(7)(3));
console.log(sum3(5)(5)(5));