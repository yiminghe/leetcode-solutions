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

const candidates = [2,3,5];
const target = 8;

console.log(combinationSum(candidates,target));
