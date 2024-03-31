

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort();
  const l = nums.length;
  let ans = [];
  let tmp = new Array(l);
  let visited = new Array(l).fill(false);
  function dfs(index) {
    if (index === l) {
      ans.push(tmp.concat());
      return;
    }
    for (let i = 0; i < l; i++) {
      const n = nums[i];
      if (i && n === nums[i - 1] && !visited[i - 1]) { continue; }
      if (visited[i]) { continue; }
      visited[i] = true;
      tmp[index] = n;
      dfs(index + 1);
      visited[i] = false;
    }
  }
  dfs(0);
  return ans;
};

console.log(permuteUnique([1, 1, 3]));
