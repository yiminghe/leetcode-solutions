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
  var len = 1, n = nums.length;
  if (n == 0) {
      return 0;
  }
  var d = new Array(n + 1);
  d[len] = nums[0];
  for (var i = 1; i < n; ++i) {
      if (nums[i] > d[len]) {
          d[++len] = nums[i];
      } else {
          var l = 1, r = len, pos = 0;
          while (l <= r) {
              var mid = (l + r) >> 1;
              if (d[mid] < nums[i]) {
                  pos = mid;
                  l = mid + 1;
              } else {
                  r = mid - 1;
              }
          }
          d[pos + 1] = nums[i];
      }
  }
  return len;
};


const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));
console.log(lengthOfLIS2(nums));