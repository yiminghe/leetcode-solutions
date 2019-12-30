function getAnsLength(l) {
  let sum = 1;
  while (l != 1) {
    sum *= l;
    --l;
  }
  return sum;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const l = nums.length;
  let ans = new Array(getAnsLength(l));
  let tmp = new Array(l);
  let ansL = -1;
  function dfs(index) {
    if (index === l) {
      ans[++ansL] = tmp.concat();
      return;
    }
    for (let i = 0; i < l; i++) {
      const n = nums[i];
      if (n !== undefined) {
        nums[i] = undefined;
        tmp[index] = n;
        dfs(index + 1);
        nums[i] = n;
      }
    }
  }
  dfs(0);
  return ans;
};

console.log(permute([1, 2, 3]));
