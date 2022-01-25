/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(n) {
    let ret = 0;
    let tmp;
    while (n) {
      tmp = n % 10;
      ret += tmp * tmp;
      n = (n / 10) | 0;
    }
    return ret;
  }

  let slow = n;
  let fast = n;
  do {
    slow = getNext(slow);
    fast = getNext(fast);
    fast = getNext(fast);
  } while (slow !== fast && fast !== 1);
  return fast == 1 ? true : false;
};

module.exports = isHappy;
