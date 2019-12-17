/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if(!root){
    return [];
  }
  const ret = [];
  let queue = [root];
  while (queue.length) {
    let nextQueue = [];
    const subRet = [];
    for (var q of queue) {
      if (q.left) {
        nextQueue.push(q.left);
      }
      if (q.right) {
        nextQueue.push(q.right);
      }
      subRet.push(q.val);
    }
    ret.unshift(subRet);
    queue = nextQueue;
  }
  return ret;
};

const {createTree} = require('../utils/tree');
const root = createTree([3,9,20,null,null,15,7]);

console.log(levelOrderBottom(root));

