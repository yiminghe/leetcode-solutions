/**
 * @param {string} target
 * @param {string} source
 * @return {boolean}
 */
var isSubsequence = function (source, target) {
  const index = {};
  let si = 0;
  let sl = target.length;
  for (; si < sl; si++) {
    index[target[si]] = index[target[si]] || [];
    index[target[si]].push(si);
  }
  let prevIndex = -1;
  for (let c of source) {
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
