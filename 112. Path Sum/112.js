/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum, path, tag = 'root') {
  if (root) {
    sum -= root.val;
    path.push(tag + ': ' + root.val);
    if (!root.left && !root.right) {
      const ret = (sum === 0);
      if (!ret) {
        path.pop();
      } else {
        console.log(path);
      }
      return ret;
    }
    const left = hasPathSum(root.left, sum, path, 'l');
    const right = hasPathSum(root.right, sum, path, 'r');
    path.pop();
    return left || right;
  }
  return false;
};

(function () {
  const { createTree, visualizeTreeArr } = require('../utils/tree');

  const treeArr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
  let root = createTree(treeArr.concat());
  // console.log(JSON.stringify(root,null,2));

  console.log(hasPathSum(root, 22, []));

  root = (visualizeTreeArr(treeArr));
  // console.log(JSON.stringify(root,null,2));
})();


