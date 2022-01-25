// https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a

/*

                100
               [+37]
              /     \
          010         110
         [+11]       [+80]
         /   \       /   \
       001   011   101   111
      [+10] [+15] [+52] [ +0]

*/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const numLength = (this.numLength = nums.length);
  const tree = (this.tree = new Array(numLength + 1));
  tree.fill(0, 0, numLength + 1);
  for (let i = 0; i < numLength; i++) {
    tree[i + 1] = nums[i];
  }
  for (let i = 0; i < numLength; i++) {
    const ii = i + 1;
    const j = getLargerAncestorNode(ii);
    if (j <= numLength) {
      tree[j] += tree[ii];
    }
  }
};

function getLargerAncestorNode(i) {
  return i + (i & -i);
}

function getSmallerAncestorNode(i) {
  return i - (i & -i);
}

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
    j = getLargerAncestorNode(j);
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
    j = getSmallerAncestorNode(j);
  }
  return ret;
}

module.exports = NumArray;
