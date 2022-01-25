// [1,5,8,19] 6 -> 2
function lower_bound(nums, k) {
  let left = 0;
  let right = nums.length;
  let ans = right;
  while (left < right) {
    let middle = ((left + right) / 2) | 0;
    let value = nums[middle].v;
    if (value >= k) {
      ans = middle;
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return ans;
}

// console.log(lower_bound([1, 2, 3, 4].map(v=>({v})), 4)); // 3

function insert_into_sorted(nums, n) {
  const index = lower_bound(nums, n.v);
  nums.splice(index, 0, n);
}

// nums[i]+....+nums[j]<=k
function findBestSum(nums, k) {
  const l = nums.length;
  const sortedSums = [{ v: 0, i: -1 }];
  let sum = 0;
  let index;
  let c = Number.MIN_SAFE_INTEGER;
  let ans = c;
  let t;
  let v;
  for (let i = 0; i < l; i++) {
    sum = sum + nums[i];
    index = lower_bound(sortedSums, sum - k);
    if (index !== sortedSums.length) {
      t = sortedSums[index];
      v = sum - t.v;
      if (v > c) {
        ans = { v, start: t.i + 1, end: i };
        c = v;
      }
    }
    insert_into_sorted(sortedSums, { v: sum, i });
  }
  return ans;
}

// https://www.youtube.com/watch?v=yCQN096CwWM
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  debugger;
  let u = 0;
  let d = 0;
  let currentSum;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxL = -1;
  let maxR = -1;
  let maxUp = -1;
  let maxDown = -1;
  const ROW = matrix.length;
  const COL = matrix[0].length;
  for (u = 0; u < ROW; u++) {
    let sum = new Array(COL).fill(0);
    for (d = u; d < ROW; d++) {
      for (let m = 0; m < COL; m++) {
        sum[m] += matrix[d][m];
      }
      currentSum = findBestSum(sum, k);
      if (currentSum.v > maxSum) {
        maxSum = currentSum.v;
        maxL = currentSum.start;
        maxR = currentSum.end;
        maxUp = u;
        maxDown = d;
      }
    }
  }
  console.log(maxL, maxR, maxUp, maxDown);
  return maxSum;
};

// console.log(maxSumSubmatrix([[2,2,-1]],0));

console.log(maxSumSubmatrix([[1, 0, 1]], 2));
