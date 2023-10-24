/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let INT_MAX = (0x7fffffff / 10) | 0; // % = 7
  let INT_MIN = ((0x80000000 | 0) / 10) | 0; // % = 8
  let rev = 0;
  let pop = 0;
  while (x) {
    pop = x % 10;
    x = (x / 10) | 0;
    if (rev > INT_MAX || (rev == INT_MAX && pop > 7)) return 0;
    if (rev < INT_MIN || (rev == INT_MIN && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};

console.log(reverse(1234));

console.log(reverse(-1234));

console.log(reverse(1999999999999));
