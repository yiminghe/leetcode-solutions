/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  const tmp = new Array(k);

  function dfs(start, index) {
    if (index == k) {
      ans.push(tmp.concat());
      return;
    }
    for (let i = start; i <= n; i++) {
      tmp[index] = i;
      dfs(i + 1, index + 1);
    }
  }

  dfs(1, 0);

  return ans;
};

console.log(combine(4, 2));