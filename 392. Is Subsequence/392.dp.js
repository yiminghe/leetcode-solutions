function c(s) {
  return s.charCodeAt(0);
}
const a = c('a');

var isSubsequence = function (s, t) {
  let n = s.length,
    m = t.length;

  let f = [];
  f[m] = [];
  for (let i = 0; i < 26; i++) {
    f[m][i] = m;
  }

  for (let i = m - 1; i >= 0; i--) {
    f[i] = [];
    for (let j = 0; j < 26; j++) {
      if (c(t[i]) - a == j) f[i][j] = i;
      else f[i][j] = f[i + 1][j];
    }
  }
  let add = 0;
  for (let i = 0; i < n; i++) {
    const n = f[add][c(s[i]) - a];
    if (n == m) {
      return false;
    }
    add = n + 1;
  }
  return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
