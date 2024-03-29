/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function (n, k) {
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

function factorial(n, m) {
  if (n <= m) {
    return 1;
  }
  let r = n - m;
  if (r < m) {
    m = r;
  }
  let ret = 1;
  for (let i = n, t = m; t > 0; --t, --i) {
    ret *= i;
  }
  for (let i = 2; i <= m; i++) {
    ret /= i;
  }
  return ret;
}
/**
 * @param {number} l
 * @param {number} m
 * @return {number[][]}
 */
var combine = function (l, m) {
  const total = factorial(l, m);
  const ans = new Array(total);
  let tmp = new Array(m);
  let ansL = 0;

  function dfs(start, index) {
    if (index === m) {
      ans[ansL++] = tmp.concat();
      return;
    }
    let remain = l - start + 1;
    let need = m - index;
    if (remain < need) {
      return;
    }
    for (let i = start; i <= l; ++i) {
      tmp[index] = i;
      dfs(i + 1, index + 1);
    }
  }

  dfs(1, 0);
  return ans;
}

console.log(combine(4, 2));
