class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
}

class LinkedList {

    constructor() {
        this.head = null;
    };

    add(data) {

        const newNode = new LinkedListNode(data);

        if (this.head === null) {

            this.head = newNode;
        } else {

            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            };

            current.next = newNode;
        };
    };

    get(index) {

        if (index > -1) {

            let current = this.head;

            let i = 0;

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            };
            return current !== null ? current.data : undefined;

        } else {
            return undefined;
        };
    };

    remove(index) {

        if ((this.head === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        };

        if (index === 0) {

            const data = this.head.data;

            this.head = this.head.next;

            return data;
        };

        let current = this.head;

        let previous = null;

        let i = 0;

        while ((current !== null) && (i < index)) {

            previous = current;

            current = current.next;

            i++;
        };

        if (current !== null) {

            previous.next = current.next;

            return current.data;
        };

        throw new RangeError(`Index ${index} does not exist in the list.`);
    };

    *values(){//generator js

        let current = this.head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        };
    };

    [Symbol.iterator]() {
        return this.values();
    };
}

//TEST

const list = new LinkedList();
list.add("red");
list.add("orange");
list.add("yellow");


console.log(list.get(1));//orange


for (const color of list) {
    console.log("цвет", color);
}


console.log(list.remove(1));  //orange


console.log(list.get(1)); //yellow

// convert to array
const array1 = [...list.values()];
const array2 = [...list];

console.group(array1, array2);