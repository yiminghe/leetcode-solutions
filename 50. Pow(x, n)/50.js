/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  let sign = 1;
  if (n < 0) {
    n = -n;
    sign = -1;
  }
  let ans = 1;
  while (n) {
    if (n % 2) {
      ans *= x;
      n--;
    }
    x = x * x;
    n = (n / 2) | 0;
  }
  return ans;
};

let x = 4;
let n = 113;

console.log(myPow(x, n) == Math.pow(x, n));
