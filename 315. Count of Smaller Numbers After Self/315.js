/**
 * @param {number[]} nums
 * @return {number[]}
 */

function TreeNode(val) {
  this.val = val;
  this.duplicated = 1;
  this.left = null;
  this.right = null;
  this.sum = 0;
}


function insert(val, node, ret, preSum, i) {
  if (!node) {
    node = new TreeNode(val);
    ret[i] = preSum;
  } else {
    const nval = node.val;
    if (nval === val) {
      node.duplicated++;
      ret[i] = preSum + node.sum;
    } else if (nval > val) {
      node.sum++;
      node.left = insert(val, node.left, ret, preSum, i);
    } else if (nval < val) {
      preSum += node.sum + node.duplicated;
      node.right = insert(val, node.right, ret, preSum, i);
    }
  }
  return node;
}

var countSmaller = function (nums) {
  let root;
  const l = nums.length;
  let ret = new Array(l);
  for (let i = l - 1; i >= 0; i--) {
    root = insert(nums[i], root, ret, 0, i);
  }
  return ret;
};


console.log(countSmaller([5, 5, 1, 1]));
