/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = matrix.length;
  let l = matrix[0][0];
  let r = matrix[n - 1][n - 1];
  let ans;
  let middle;
  while (l <= r) {
    middle = (l + r) / 2 | 0;
    if (judge(matrix, middle, k)) {
      ans = middle;
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }
  return ans;
};

function judge(matrix, t, k) {
  let n = matrix.length;
  let i = n - 1;
  let j = 0;
  let ans = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] < t) {
      ans += i + 1;
      j++;
    } else {
      i--;
    }
  }
  return k > ans;
}


let matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
],
k = 8;

console.log(kthSmallest(matrix, k));
