/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
  const matrix = new Array(m);
  for (let row = 0; row < m; row++) {
    matrix[row] = new Array(n);
    matrix[row][0] = 1;
  }
  matrix[0].fill(1);
  for (let col = 1; col < n; col++) {
    for (let row = 1; row < m; row++) {
      matrix[row][col] = (matrix[row][col - 1]) + (matrix[row - 1][col]);
    }
  }
  return matrix[m - 1][n - 1];
};



/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cols = new Array(m);
  cols.fill(1);
  for (let col = 1; col < n; col++) {
    for (let row = 1; row < m; row++) {
      cols[row] += cols[row - 1];
    }
  }
  return cols[m - 1];
};

console.log(uniquePaths2(3, 3))

console.log(uniquePaths(3, 3))