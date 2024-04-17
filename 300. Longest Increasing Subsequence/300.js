/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_slow = function (nums) {
  const len = nums.length;
  const dp = new Array(len);
  dp.fill(1);

  for (var i = 1; i < len; i++) {
    const current = nums[i];
    for (var j = 0; j < i; j++) {
      if (current > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let current = -1;
  for (const d of dp) {
    current = Math.max(d, current);
  }

  return current;
};

var lengthOfLIS = function (nums) {
  var len = 0,
    n = nums.length;
  if (n == 0) {
    return 0;
  }
  var d = new Array(n);
  d[len++] = nums[0];
  for (var i = 1; i < n; ++i) {
    if (nums[i] > d[len-1]) {
      d[len++] = nums[i];
    } else {
      var l = 0,
        r = len,
        pos = -1;
      while (l < r) {
        var mid = l+(r-l)/2 | 0;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));
console.log(lengthOfLIS_slow(nums));
