/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  function isPass(middle) {
    let sum = 0;
    let count = 0;
    for (const n of nums) {
      const next = sum + n;
      if (next > middle) {
        if (n > middle) {
          return false;
        }
        sum = n;
        count++;
      } else {
        sum = next;
      }
    }
    return count < m;
  }

  let l = 0;
  let r = 1;
  for (const n of nums) {
    r += n;
  }
  let ans = 0;
  while (l < r) {
    const middle = ((l + r) / 2) | 0;
    if (isPass(middle)) {
      ans = middle;
      r = middle;
    } else {
      l = middle + 1;
    }
  }

  return ans;
};

var splitArray_dp_slow = function (nums, m) {
  let n = nums.length;
  let f = [];
  for (let i = 0; i <= n; i++) {
    f[i] = new Array(m + 1);
    f[i].fill(Number.MAX_SAFE_INTEGER);
  }
  let sub = new Array(n + 1);
  sub[0] = 0;
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, m); j++) {
      for (let k = 0; k < i; k++) {
        f[i][j] = Math.min(f[i][j], Math.max(f[k][j - 1], sub[i] - sub[k]));
      }
    }
  }
  return f[n][m];
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
