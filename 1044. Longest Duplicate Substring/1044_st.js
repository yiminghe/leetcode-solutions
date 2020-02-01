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

module.exports=longestDupSubstring;
