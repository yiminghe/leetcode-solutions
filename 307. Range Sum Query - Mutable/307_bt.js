function buildTree(tree, nums, treeIndex, i, j) {
  if (i === j) {
    tree[treeIndex] = nums[i];
    return;
  }
  const mid = ((i + j) / 2) | 0;
  const leftTreeIndex = 2 * treeIndex + 1;
  const rightTreeIndex = leftTreeIndex + 1;
  buildTree(tree, nums, leftTreeIndex, i, mid);
  buildTree(tree, nums, rightTreeIndex, mid + 1, j);
  tree[treeIndex] = tree[leftTreeIndex] + tree[rightTreeIndex];
}
// tree array
function updateTree(tree, treeIndex, i, j, val, arrIndex) {
  if (i === j) {
    tree[treeIndex] = val;
    return;
  }
  const mid = ((i + j) / 2) | 0;
  const left = 2 * treeIndex + 1;
  const right = left + 1;
  if (arrIndex > mid) {
    updateTree(tree, right, mid + 1, j, val, arrIndex);
  } else {
    updateTree(tree, left, i, mid, val, arrIndex);
  }
  tree[treeIndex] = tree[left] + tree[right];
}

function sumTree(tree, treeIndex, low, high, i, j) {
  if (low === i && high === j) {
    return tree[treeIndex];
  }
  const mid = ((low + high) / 2) | 0;
  if (j <= mid) {
    return sumTree(tree, 2 * treeIndex + 1, low, mid, i, j);
  } else if (i > mid) {
    return sumTree(tree, 2 * treeIndex + 2, mid + 1, high, i, j);
  }
  const left = 2 * treeIndex + 1;
  const right = left + 1;
  const leftSum = sumTree(tree, left, low, mid, i, mid);
  const rightSum = sumTree(tree, right, mid + 1, high, mid + 1, j);
  return leftSum + rightSum;
}

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  //const n = nums.length;
  this.numLength = nums.length - 1;
  if (this.numLength >= 0) {
    const tree = (this.tree = new Array(4 * nums.length));
    buildTree(tree, nums, 0, 0, this.numLength);
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  updateTree(this.tree, 0, 0, this.numLength, val, i);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return sumTree(this.tree, 0, 0, this.numLength, i, j);
};

module.exports = NumArray;
