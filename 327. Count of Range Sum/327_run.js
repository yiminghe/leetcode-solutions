const countRangeSumRBTree = require('./327_rbtree');
const countRangeSumMerge = require('./327_merge');
const { runs } = require('../utils/utils');

let nums = [2147483647, -2147483648, -1, 0];
let lower = -1;
let upper = 0;

// nums = [-2, 5, -1];
// lower = -2;
// upper = 2;

runs({
  countRangeSumMerge,
  countRangeSumRBTree,
}, [nums,lower,upper])
