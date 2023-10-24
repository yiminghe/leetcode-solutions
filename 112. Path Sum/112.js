/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, ans = [], path = [], tag = 'root') {
  if (root) {
    targetSum -= root.val;
    path.push(tag + ': ' + root.val);
    if (!root.left && !root.right) {
      const ret = targetSum === 0;
      if (ret) {
        ans.push(path.concat());
      }
      path.pop();
      return ret;
    }
    const left = hasPathSum(root.left, targetSum, ans, path, 'l');
    const right = hasPathSum(root.right, targetSum, ans, path, 'r');
    path.pop();
    return left || right;
  }
  return false;
};

(function () {
  const { createTree, visualizeTreeArr } = require('../utils/tree');

  const treeArr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 5];
  let root = createTree(treeArr.concat());
  // console.log(JSON.stringify(root,null,2));
  const ans = [];
  console.log(hasPathSum(root, 22, ans));
  console.log(ans);

  root = visualizeTreeArr(treeArr);
  // console.log(JSON.stringify(root,null,2));
})();
