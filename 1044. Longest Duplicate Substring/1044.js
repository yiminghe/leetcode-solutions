const suffixTree = require('@yiminghe/suffix-tree').default;

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (s) {
  s += '$';
  let st = new suffixTree(s);
  return st.getLongestDupSubstr();
};

const path = require('path');
const fs = require('fs');

const s='abcdabc';
// const s = fs.readFileSync(path.join(__dirname, './data.txt'), {
//   encoding: 'utf-8',
// });
console.log(longestDupSubstring(s));
