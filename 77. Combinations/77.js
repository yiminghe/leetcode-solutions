/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  const tmp = [];

  function dfs(start) {
    if (tmp.length === k) {
      ans.push(tmp.concat());
      return;
    }
    for (let i = start; i <= n; i++) {
      tmp.push(i);
      dfs(i + 1);
      tmp.pop();
    }
  }

  function dfs2(start) {
    if (tmp.length === k) {
      ans.push(tmp.concat());
      return;
    }

    if (start > n) {
      return;
    }

    tmp.push(start);
    dfs(start + 1);
    tmp.pop();
    dfs(start + 1);
  }

  dfs2(1);

  // dfs(1);

  return ans;
};

console.log(combine(4, 2));