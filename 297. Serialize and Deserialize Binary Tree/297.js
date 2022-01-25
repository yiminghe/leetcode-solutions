/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return '[]';
  }
  let queue = [root];
  const ret = [];
  while (queue.length) {
    let newQueue = [];
    for (const q of queue) {
      if (q) {
        ret.push(q.val);
        newQueue.push(q.left);
        newQueue.push(q.right);
      } else {
        ret.push('n');
      }
    }
    queue = newQueue;
  }
  while (ret[ret.length - 1] === 'n') {
    ret.pop();
  }
  return `[${ret.join(',')}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.slice(1, -1).split(',');
  if (!arr[0]) {
    return null;
  }
  arr.forEach((element, index) => {
    if (arr[index] !== 'n') {
      arr[index] = {
        val: element,
      };
    } else {
      arr[index] = null;
    }
  });
  const l = arr.length;
  let index = 0;
  let limit = 1;
  let element;
  let level = 0;
  while (index < l) {
    let count = 0;
    while (index < limit && index < l) {
      element = arr[index];
      if (element) {
        const base = count;
        const left = limit + 2 * base;
        const right = left + 1;
        element.left = arr[left];
        element.right = arr[right];
        element.level = level;
        element.count = count;
        count++;
      }
      index++;
    }
    level++;
    limit += count * 2;
  }
  return arr[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const { createTree } = require('../utils/tree');

let tree = createTree([1, 2, 3, 4, 5]);

let s = serialize(tree);

tree = deserialize(s);

s = serialize(tree);

console.log(s);
