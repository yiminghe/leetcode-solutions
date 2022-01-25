/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let ret = 0;
  while (n) {
    n = (n / 5) | 0;
    ret += n;
  }
  return ret;
};

module.exports = trailingZeroes;
