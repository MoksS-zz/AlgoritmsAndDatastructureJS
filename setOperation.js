"use strict";
let fruits = new Set(["avocado", "tomato","bаnana"]);

let vegetables = new Set(["beets", "carrots", "tomato"]);

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    };
    return _union;
};
function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        };
    };
    return _intersection;
};
function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    };
    return _difference;
};

const unionSet = union(fruits,vegetables);
console.log(`unionSet - ${[...unionSet]}`);

const difSet = difference(fruits,vegetables);
console.log(`difSet - ${[...difSet]}`);

const insecSet = intersection(fruits,vegetables);
console.log(`intersection - ${[...insecSet]}`);
