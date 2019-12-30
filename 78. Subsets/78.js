/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const tmp = [];
  const l = nums.length;

  function dfs(index) {
    if (index === l) {
      ans.push(tmp.concat());
      return;
    }
    tmp.push(nums[index]);
    dfs(index + 1);
    tmp.pop();
    dfs(index + 1);
  }

  debugger

  dfs(0);

  return ans;
};

const nums = [1, 2, 3];

console.log(subsets(nums));
