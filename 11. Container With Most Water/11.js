/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let ret = 0;
  while (left !== right) {
    const l = right - left;
    const lv = height[left];
    const rv = height[right];
    const h = Math.min(lv, rv);
    ret = Math.max(l * h, ret);
    if (lv > rv) {
      right--;
    } else {
      left++;
    }
  }
  return ret;
};
