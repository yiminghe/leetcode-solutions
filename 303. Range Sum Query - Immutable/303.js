/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const l = nums.length;
  const ret = (this.ret = new Array(l + 1));
  ret[0] = 0;
  for (let i = 1; i <= l; i++) {
    ret[i] = ret[i - 1] + nums[i - 1];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.ret[j + 1] - this.ret[i];
};

const na = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(na.sumRange(0, 2));
console.log(na.sumRange(2, 5));
console.log(na.sumRange(0, 5));

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
