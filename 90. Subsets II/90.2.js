// https://leetcode.com/problems/subsets-ii/discuss/453641/javascript-solution-beats-91.56

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  if (!nums || !nums.length) {
      return [];
  }
  
  nums.sort((a, b) => a - b);
  
  const subsets = [[]];
  let start = 0;
  let end = 0;
  
  for (let i = 0, len = nums.length; i < len; i++) {
      if (i > 0 && nums[i] == nums[i-1]) {
          start = end;
      } else {
          start = 0;
      }
      
      end = subsets.length;
      
      for (let j = start, size = subsets.length; j < size; j++) {
          subsets.push([...subsets[j], nums[i]]);
      }
  }
  
  return subsets;
};