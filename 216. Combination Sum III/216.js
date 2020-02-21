/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const start = 1;
const end = 9;

var combinationSum3 = function (k, n) {
  const ret = [];
  const ans = [];
  function dfs(index, remain) {
    if (remain < 0) {
      return;
    }

    if (remain === 0 && ans.length === k) {
      ret.push(ans.concat());
      return;
    }
    if (index > end || ans.length === k) {
      return;
    }

    ans.push(index);
    dfs(index + 1, remain - index);
    ans.pop();
    dfs(index + 1, remain);
  }

  dfs(1, n);

  return ret;
};

console.log(combinationSum3(2, 6));