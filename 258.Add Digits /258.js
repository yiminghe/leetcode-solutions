/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return (num - 1) % 9 + 1;
};

module.exports = addDigits;
