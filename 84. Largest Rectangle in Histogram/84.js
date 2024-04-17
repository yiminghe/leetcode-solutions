/**
 * @param {number[]} val
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const val = [0, ...heights, 0];
  const stack = [];
  let ans = 0;
  for (let i = 0; i < val.length; i++) {
    while (stack.length && val[i] < val[stack[stack.length - 1]]) {
      const cur = val[stack.pop()];
      if (stack.length) {
        const left = stack[stack.length - 1];
        ans = Math.max(ans, cur * (i - left - 1));
      }
    }
    stack.push(i);
  }
  return ans;
};

console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([2, 4, 2]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
