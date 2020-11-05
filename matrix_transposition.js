// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

const transpose = function(matrix) {
  const results = [];
  results.length = matrix[0].length;
  for (let i = 0; i < results.length; i++) {
    results[i] = [];
    results[i].length = matrix.length;
  }
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      results[col][row] = matrix[row][col];
    }
  }
  return results;
};

/* printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
])); */

module.exports = transpose;