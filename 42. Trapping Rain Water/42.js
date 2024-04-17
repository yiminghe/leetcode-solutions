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

//Monotonic Stack
var trap2 = (heights) => {
  const stack = [];
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    const cur = heights[i];
    while (stack.length && cur > heights[stack[stack.length - 1]]) {
      const middle = heights[stack.pop()];
      if (stack.length) {
        const leftIndex = stack[stack.length - 1];
        const left = heights[leftIndex];
        ans += Math.max(Math.min(cur, left) - middle, 0) * (i - leftIndex - 1);
      }
    }
    stack.push(i);
  }
  return ans;
};

let heights;

heights = [4, 2, 0, 3, 2, 5];

console.log(trap(heights));
debugger
console.log(trap2(heights));