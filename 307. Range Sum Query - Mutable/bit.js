// https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const numLength = this.numLength = nums.length;
  const tree = this.tree = new Array(numLength + 1);
  tree.fill(0, 0, numLength + 1);
  for (let i = 0; i < numLength; i++) {
    tree[i + 1] = nums[i];
  }
  for (let i = 0; i < numLength; i++) {
    const ii = i + 1;
    const j = ii + (ii & -ii);
    if (j <= numLength) {
      tree[j] += tree[ii];
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let j = i + 1;
  const tree = this.tree;
  const num = prefixSum(tree, i) - prefixSum(tree, i - 1);
  const diff = val - num;
  const numLength = this.numLength;
  while (j <= numLength) {
    tree[j] += diff;
    j += (j & -j);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  const tree = this.tree;
  return prefixSum(tree, j) - prefixSum(tree, i - 1);
};

function prefixSum(tree, index) {
  let j = index + 1;
  let ret = 0;
  while (j) {
    ret += tree[j];
    j -= (j & -j);
  }
  return ret;
}

let cmd = [
  "NumArray", "update", "update", "update", "sumRange", "update", "sumRange",
  //"update", "sumRange", "sumRange", "update"
]
let data = [
  [[7, 2, 7, 2, 0]], [4, 6], [0, 2], [0, 9], [4, 4], [3, 8], [0, 4],
  //[4, 1], [0, 3], [0, 4], [0, 4]
];

let na;

cmd.forEach((c, index) => {
  if (c === 'NumArray') {
    na = new NumArray(data[index][0]);
  } else if (c === 'update') {
    na.update(...data[index]);
  } else if (c === 'sumRange') {
    console.log(na.sumRange(...data[index]));
  }
});
