/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 1;
  let right = height.length - 2;
  let leftMax = 0;
  let rightMax = 0;
  let ret = 0;
  while (left <= right) {
    let lv = height[left];
    let rv = height[right];
    leftMax = Math.max(leftMax, height[left - 1]);
    rightMax = Math.max(rightMax, height[right + 1]);
    if (leftMax > rightMax) {
      if (rightMax > rv)
        ret += rightMax - rv;
      --right;
    } else {
      if (leftMax > lv)
        ret += leftMax - lv;
      ++left;
    }
  }
  return ret;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
