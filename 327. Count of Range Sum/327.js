const RBTree = require('@yiminghe/rbtree').default;


function distance(node1, node2) {
  let n = node1;
  let ret = 0;
  while (n && n !== node2) {
    ret += n.val.length;
    n = n.getNext();
  }
  return n === node2 ? ret+n.val.length : 0;
}

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  // upper>=sum[i] - sum[j]>=lower
  // sum[i]-lower>=sum[j]
  // sum[j]>=sum[i]-upper
  const tree = new RBTree(undefined, (a, b) => [...a, ...b]);
  const nLength = nums.length + 1;
  const sum = new Array(nLength);
  sum[0] = 0;
  nums.forEach((n, i) => {
    sum[i + 1] = sum[i] + n;
  });
  tree.insert(0, [0]);
  let sumi;
  let lowerBound;
  let upperBound;
  let lNode;
  let uNode;
  let ret = 0;
  for (let i = 1; i < nLength; i++) {
    sumi = sum[i];
    lowerBound = sumi - upper;
    lNode = tree.lowerBoundNode(lowerBound);
    if (lNode) {
      upperBound = sumi - lower;
      uNode = tree.upperBoundNode(upperBound);
      if (uNode) {
        let d = distance(lNode, uNode);
        ret += d;
      }
    }
    tree.insert(sumi, [i]);
  }
  return ret;
};

let nums = [-2, 0, 1];
let lower = -2;
let upper = 2;

console.log(countRangeSum(nums, lower, upper));
