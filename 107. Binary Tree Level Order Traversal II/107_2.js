var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  const ret = [];
  let queue = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    const cur = (ret[level] = ret[level] || []);
    cur.push(node.val);
    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return ret.reverse();
};

const { createTree } = require('../utils/tree');
const root = createTree([3, 9, 20, null, null, 15, 7]);

console.log(levelOrderBottom(root));
