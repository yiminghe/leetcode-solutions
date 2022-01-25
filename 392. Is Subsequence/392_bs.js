/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (t, s) {
  const index = {};
  let si = 0;
  let sl = s.length;
  for (; si < sl; si++) {
    index[s[si]] = index[s[si]] || [];
    index[s[si]].push(si);
  }
  let prevIndex = -1;
  for (let c of t) {
    if (index[c]) {
      prevIndex = lowerbound(index[c], prevIndex);
      if (prevIndex === -1) {
        return false;
      }
      prevIndex++;
    } else {
      return false;
    }
  }
  return true;
};

function lowerbound(arr, t) {
  let left = 0;
  let right = arr.length;
  let middle;
  let ans = -1;
  while (left < right) {
    middle = left + (((right - left) / 2) | 0);
    if (arr[middle] === t) {
      return t;
    }
    if (arr[middle] < t) {
      left = middle + 1;
    } else {
      right = middle;
      ans = arr[middle];
    }
  }
  return ans;
}

module.exports = isSubsequence;
