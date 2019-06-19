'use strict'
const c = 41
function sortBubble (data) {
    let tmp
    const length = data.length
    for (let i = length - 1; i > 0; i--) {
        let counter = 0
        for (let j = 0; j < i - 1; j++) {
            if (data[j] > data[j + 1]) {
                tmp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = tmp
                counter++
            }
        }
        if (counter === 0) {
            break
        }
    }
    return data
};
console.log(c)
console.log(sortBubble([1, 2, 3, 4, 67, 324, 765, 234, 45, 123, 123, 124, 45, 6, 324, 234]))
