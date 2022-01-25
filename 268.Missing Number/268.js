var missingNumber = function (nums) {
  let sum = 0;
  const n = nums.length;
  for (var i of nums) {
    sum += i;
  }
  return (n * (n + 1)) / 2 - sum;
};

module.exports = missingNumber;
