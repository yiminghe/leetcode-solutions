/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ret = 0;
  while (left !== right) {
    let lv = height[left];
    let rv = height[right];
    leftMax = Math.max(lv, leftMax);
    rightMax = Math.max(rv, rightMax);
    if (lv > rv) {
      ret += rightMax - rv;
      --right;
    } else {
      ret += leftMax - lv;
      ++left;
    }
  }
  return ret;
};
