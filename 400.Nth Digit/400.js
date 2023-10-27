var findNthDigit = function (n) {
  let d = 1, count = 9;
  while (n >  d * count) {
      n -= d * count;
      d++;
      count *= 10;
  }
  let index = n - 1;
  let start =  Math.pow(10, d - 1);
  let num = start + index / d;
  let digitIndex = index % d;
  let digit = (num / (Math.pow(10, d - digitIndex - 1))) % 10;
  return digit;
};

module.exports = findNthDigit;
