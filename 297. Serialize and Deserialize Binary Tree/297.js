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

const sentry = 'null';

var serialize = function (root) {
  if (!root) {
    return '[]';
  }
  let queue = [root];
  const ret = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      ret.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      ret.push(sentry);
    }
  }

  while (ret[ret.length - 1] === sentry) {
    ret.pop();
  }
  return `[${ret.join(',')}]`;
};

var deserialize2 = function (data) {
  const arr = data.slice(1, -1).split(',');
  if (!arr[0]) {
    return null;
  }
  let index = 0;
  let root = {
    val: arr[0],
    left: null,
    right: null,
  };
  const queue = [];
  queue.push(root);
  while (queue.length && index < arr.length) {
    const node = queue.shift();
    const left = arr[++index] ?? sentry;
    if (left !== sentry) {
      node.left = {
        val: left,
        left: null,
        right: null,
      };
      queue.push(node.left);
    }
    const right = arr[++index] ?? sentry;
    if (right !== sentry) {
      node.right = {
        val: right,
        left: null,
        right: null,
      };
      queue.push(node.right);
    }
  }
  return root;
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
    if (arr[index] !== sentry) {
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

console.log(s);

tree = deserialize2(s);

s = serialize(tree);

console.log(s);
