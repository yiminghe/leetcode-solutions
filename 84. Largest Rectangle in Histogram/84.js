/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const val = [0, ...heights, 0];
  const st = [];
  let ans = 0;
  for (let i = 0; i < val.length; i++) {
    while (st.length && val[i] < val[st[st.length - 1]]) {
      const right = i;
      const cur = val[st.pop()];
      const left = st[st.length - 1];
      ans = Math.max(ans, cur * (right - left - 1))
    }
    st.push(i);
  }
  return ans;
};

console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([2, 4, 2]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
