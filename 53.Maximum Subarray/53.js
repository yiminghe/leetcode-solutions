/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let i = 0,
    j;
  let maxi = 0,
    maxj = 1;
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (j = 0; j < nums.length; j++) {
    sum += nums[j];
    if (maxSum < sum) {
      maxSum = sum;
      maxi = i;
      maxj = j;
    }
    if (sum < 0) {
      i = j + 1;
      sum = 0;
    }
  }

  console.log(`[${maxi},${maxj}]`);
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
