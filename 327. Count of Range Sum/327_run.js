const countRangeSumRBTree = require('./327_rbtree');
const countRangeSumMerge = require('./327_merge');
const now = require('performance-now');
const { padding } = require('../utils/utils');

let nums = [2147483647, -2147483648, -1, 0];
let lower = -1;
let upper = 0;

function run(tag, fn) {
  const start = now();
  let ret = fn(nums, lower, upper);
  const time = now() - start;
  console.log();
  console.log(padding(`${tag} result:`, 20), ret);
  console.log(padding(`${tag} time:`, 20), time);
}

// nums = [-2, 5, -1];
// lower = -2;
// upper = 2;

run('merge', countRangeSumMerge);
run('rbtree', countRangeSumRBTree);
