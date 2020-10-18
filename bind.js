function sum(num) {
  return this.a + this.b + num;
}

const obj = {
  a: 5,
  b: 10
}

function bind (fn, context, ...rest) {
  console.log('this.bind');
  return function(...args) {
    return fn.call(context, ...rest, ...args);
  }
}

function bind2(fn, context, ...rest) {
  return function(...args) {
    const uuid = Date.now().toString();
    context[uuid] = fn;
    const res = context[uuid](...rest, ...args);
    delete context[uuid];
    return res;
  }
}

function call(fn, context, ...args) {
  const uuid = Date.now().toString();
  context[uuid] = fn;
  const res = context[uuid](...args);
  delete context[uuid];
  return res;
}

function apply(fn, context, args) {
  const uuid = Date.now().toString();
  context[uuid] = fn;
  const res = context[uuid](...args);
  delete context[uuid];
  return res;
}

const newSum = bind(sum, obj);

console.log(newSum(4));