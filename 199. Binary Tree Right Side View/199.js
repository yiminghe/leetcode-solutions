/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const queue = [{ l: 0, n: root }];
  const ret = [];
  let level = 0;
  while (queue.length) {
    let { l, n } = queue.shift();
    if (l === level) {
      ret.push(n.val);
      level++;
    }
    if (n.right) {
      queue.push({
        l: l + 1,
        n: n.right,
      });
    }
    if (n.left) {
      queue.push({
        l: l + 1,
        n: n.left,
      });
    }
  }
  return ret;
};

const { createTree } = require('../utils/tree');

const tree = createTree([1, 2, 3, null, 5, null, 4]);

console.log(rightSideView(tree));
