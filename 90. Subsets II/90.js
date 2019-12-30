/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  const tmp = [];
  const l = nums.length;

  nums.sort();

  function dfs(index) {
    if (index >= l) {
      ans.push(tmp.concat());
      return;
    }
    tmp.push(nums[index]);
    dfs(index + 1);
    tmp.pop();
    while (nums[index] === nums[++index]);
    dfs(index);
  }

  dfs(0);

  return ans;
};

console.log(subsetsWithDup([1, 2, 1]));
