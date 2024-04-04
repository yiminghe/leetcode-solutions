var singleNumber = function (nums) {
  let bits = new Array(32).fill(0);
  for (let n of nums) {
    for (let i = 0; n && i < 32; i++) {
      bits[i] += n & 1;
      n >>= 1;
    }
  }
  let ret = 0;
  for (let i = 31; i >= 0; i--) {
    ret <<= 1;
    ret |= bits[i] %= 3;
  }
  return ret;
};
