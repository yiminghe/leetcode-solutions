/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root, maxAnsPath = []) {
  let ans = Number.MIN_SAFE_INTEGER;

  function getMaxPath(n) {
    if (!n) {
      return 0;
    }

    const nodeValue = n.val;

    let subMaxPath = `[${nodeValue}]`;
    let max = nodeValue;
    let maxLeft = Math.max(getMaxPath(n.left), 0);
    let maxRight = Math.max(getMaxPath(n.right), 0);

    if (maxRight || maxLeft) {
      if (maxLeft > maxRight) {
        max += maxLeft;
        subMaxPath = `[${nodeValue} l:${n.left.maxPath}]`;
      } else {
        max += maxRight;
        subMaxPath = `[${nodeValue} r:${n.right.maxPath}]`;
      }
    }

    const subAns = nodeValue + maxLeft + maxRight;

    if (ans < subAns) {
      ans = subAns;
      maxAnsPath[0] = `[${nodeValue}`;
      if (maxLeft > 0) {
        maxAnsPath[0] += ` l:${n.left.maxPath}`;
      }
      if (maxRight > 0) {
        maxAnsPath[0] += ` r:${n.right.maxPath}`;
      }
      maxAnsPath[0] += ']';
    }

    n.maxPath = subMaxPath;

    return max;
  }

  getMaxPath(root);

  return ans;
};

const { createTree, visualizeTreeArr } = require('../utils/tree');
const treeArr = [-10, 9, 20, null, null, 15, 7];
let root = createTree(treeArr.concat());
visualizeTreeArr(treeArr);
const getNow = require('performance-now');
const now = getNow();
const path = [];
console.log('max sum:', maxPathSum(root, path));
console.log('path', path[0]);
console.log('time:', getNow() - now);
