 /**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(a) {
//my code here
let newArray = [];
for (let i = 0; i < a.length; i++) {
    newArray.push([]);
    for (let j = 0; j < a[i].length; j++) {
        newArray[i].push(a[j][i]);
    }
}
return newArray;
}
 
console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
module.exports = transpose;
