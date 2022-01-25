const { createTree, traverse } = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  return traverse(root, 'post');
};

const root = createTree([1, 4, 2, 3, 5, null, null, null, null, 7]);

console.log(postorderTraversal(root));

console.log(traverse(root, 'pre'));

console.log(traverse(root, 'in'));
