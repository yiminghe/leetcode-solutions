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
