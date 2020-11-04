class Queue2 {
  constructor() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }

  size() {
    return this._newestIndex - this._oldestIndex;
  };

  enqueue(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
  };

  dequeue() {
    let oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
  };
}

function Queue() {
  let collection = []

  this.print = function () {
    console.log(collection)
  }

  // обычная тривиальная
  // this.enqueue = function(element) {
  //     collection.push(element)
  // }

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break;
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function () {
    return collection.shift()
  }

  this.front = function () {
    return collection[0]
  }

  this.isEmpty = function () {
    return collection.length === 0
  }

  this.size = function () {
    return collection.length
  }
}

let pQ = new Queue()
pQ.enqueue(["gannicus", 3])
pQ.enqueue(["spartacus", 1])
pQ.enqueue(["crixus", 2])
pQ.enqueue(["oenomaus", 4])
pQ.print()