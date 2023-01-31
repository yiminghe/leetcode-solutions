/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
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

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));
