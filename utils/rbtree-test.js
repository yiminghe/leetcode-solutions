const {default:RBTree,RBColor} = require('@yiminghe/rbtree');
const { RED } = RBColor;
const chalk = require('chalk');


(function () {
  function printTree(tree) {
    return tree.visualize(format, size);
  }

  function format(n) {
    const content = n.key || '*';
    return n.color === RED ? chalk.red(content+'') : (content + '');
  }

  function size(n) {
    return String(n.key || '*').length;
  }

  const tree = new RBTree();

  tree.insert(27);
  tree.insert(25);
  tree.insert(22);
  tree.insert(17);
  tree.insert(15);
  tree.insert(13);
  tree.insert(11,'11');
  tree.insert(8);
  tree.insert(6);
  tree.insert(1);

  console.log(tree.find(11));

  // tree.delete(11);
  // tree.delete(15);
  // tree.delete(22);
  // tree.delete(17);
  // tree.delete(6);
  // tree.delete(25);

  // tree.delete(8);
  // tree.delete(27);
  // tree.delete(1);
  // tree.delete(13);

  const count = (tree.getBlackCount());

  console.log('black path count: ' + count);

  console.log(printTree(tree));
})();
