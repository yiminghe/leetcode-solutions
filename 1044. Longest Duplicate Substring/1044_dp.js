/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (s) {
  const l = s.length;
  let lastDp = new Array(l + 1);
  let tmp;
  let dp = new Array(l + 1);
  lastDp.fill(0);
  let maxEndIndex = -1;
  let max = 0;
  for (let start = 1; start <= l; start++) {
    for (let end = start + 1; end <= l; end++) {
      if (s[end - 1] === s[start - 1]) {
        dp[end] = lastDp[end - 1] + 1;
        if (dp[end] > max) {
          max = dp[end];
          maxEndIndex = end;
        }
      } else {
        dp[end] = 0;
      }
    }
    tmp = dp;
    dp = lastDp;
    lastDp = tmp;
  }
  return max ? s.slice(maxEndIndex - max, maxEndIndex) : '';
};

module.exports=longestDupSubstring;
