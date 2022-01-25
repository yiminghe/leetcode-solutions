function jump(nums) {
  let result = 0;
  let cur = 0;
  let next = 0;
  let i;
  for (i = 0; i < nums.length; i++) {
    if (i > cur) {
      result++;
      cur = next;
    }
    next = Math.max(i + nums[i], next);
  }
  return cur >= i - 1 ? result : -1;
}

let nums;

nums = [2, 3, 1, 1, 4];

nums = [3, 2, 1, 0, 5];

console.log(jump(nums));
