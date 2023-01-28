/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let col = array[0].length;
  let row = array.length;
  let transposedArr = new Array(col);

  for (let i = 0; i < col; i++) {
    transposedArr[i] = new Array(row);
    for (let j = 0; j < row; j++) {
      transposedArr[i][j] = array[j][i];
    }
  }

  return transposedArr;
}

module.exports = transpose;
