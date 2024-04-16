/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const cur = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    cur[i] = i;
  }
  let pre, tmp;
  for (let i = 1; i <= m; i++) {
    pre = cur[0];
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      tmp = cur[j];
      if (word1[i-1] === word2[j-1]) {
        cur[j] = pre;
      } else {
        cur[j] = Math.min(cur[j - 1], pre, tmp) + 1;
      }
      pre = tmp;
    }
  }
  return cur[n];
};


let word1, word2;

word1 = "horse", word2 = "ros";

console.log(minDistance(word1, word2));
