var reverseBits = function (n) {
  let ret = 0;
  let i = 0;

  while (n) {
    i++;
    ret = (ret << 1) | (n & 1);
    n = n >>> 1;
  }

  if (i < 32) {
    ret = ret << (32 - i);
  }

  return ret >>> 0;
};

module.exports = reverseBits;
