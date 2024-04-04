/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ret = 0;
  for (let n of nums) {
    ret ^= n;
  }
  return ret;
};


var singleNumber2 = function (nums) {
  let ret = new Array(32).fill(0);
  for (let n of nums) {
    for (let i = 0; n && i < 32; i++) {
      ret[i] += n & 1;
      n >>= 1;
    }
  }
  for (let i = 0; i < 32; i++) {
    ret[i] %= 2;
  }
  let i;
  for (i = 31; i >= 0; i--) {
    if (ret[i]) {
      break;
    }
  }
  let n = 0;
  if (i >= 0) {
    n = 1;
  }
  while ((--i) >= 0) {
    n <<= 1;
    if (ret[i]) {
      n += 1;
    }
  }

  return n;
};
