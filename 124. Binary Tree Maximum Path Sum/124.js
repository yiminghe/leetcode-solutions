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
var maxPathSum = function (root) {
  let ans = Number.MIN_SAFE_INTEGER;
  let maxAnsPath;

  function getMaxPath(n) {
    const nval = n.val;
    if (!n.left && !n.right) {
      if (ans < nval) {
        ans = nval;
        maxAnsPath = `[${nval}]`;
      }
      n.maxPath = `[${nval}]`;
      return nval;
    }

    let subAnsPath = `[${nval}`;
    let subMaxPath = `[${nval}]`;
    let max = nval;
    let subAns = nval;
    if (n.left) {
      const maxleft = getMaxPath(n.left);
      const nleftval = maxleft + nval;
      if (nleftval > max) {
        max = nleftval;
        subMaxPath = `[${nval} l:${n.left.maxPath}]`;
      }
      if (subAns < nleftval) {
        subAns = nleftval;
        subAnsPath += ` l:${n.left.maxPath}`;
      }
    }
    if (n.right) {
      const maxright = getMaxPath(n.right);
      const nrightval = maxright + nval;
      if (nrightval > max) {
        max = nrightval;
        subMaxPath = `[${nval} r:${n.right.maxPath}]`;
      }
      if (maxright > 0) {
        subAns += maxright;
        subAnsPath += ` r:${n.right.maxPath}`;
      }
    }

    if (ans < subAns) {
      ans = subAns;
      maxAnsPath = subAnsPath + ']';
    }

    n.maxPath = subMaxPath;

    return max;
  }
  
  getMaxPath(root);


  console.log(maxAnsPath);

  return ans;
};

const { createTree } = require('../utils/tree');

let root = createTree([1, null, 2, null, 3, null, 4, null, 5]);
root = createTree([-10, 9, 20, null, null, 15, 7]);

const getNow = require('performance-now');
const now = getNow();
console.log(maxPathSum(root));
console.log(getNow() - now);