/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ret = [];
  const ans = [];
  const l = candidates.length;

  function dfs(index, t) {
    if (t < 0) {
      return;
    }
    if (t === 0) {
      ret.push(ans.concat());
      return;
    }

    if (index === l) {
      return;
    }

    const m = candidates[index];
    ans.push(m);
    dfs(index, t - m);
    ans.pop();
    dfs(index + 1, t);
  }

  dfs(0, target);

  return ret;
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const ret = [];
  function dfs(start, cur, path) {
    if (cur === 0) {
      ret.push(path.concat());
      return;
    }
    if (cur < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const c = candidates[i];
      path.push(c);
      dfs(i, cur - c, path);
      path.pop();
    }
  }
  dfs(0, target, []);
  return ret;
};

const candidates = [2, 3, 5];
const target = 8;

console.log(combinationSum2(candidates, target));
console.log(combinationSum(candidates, target));
