/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (t,s) {
  let si = 0;
  let ti = 0;
  let sl = s.length;
  let tl = t.length;

  while (si < sl && ti < tl) {
    if (t[ti] === s[si]) {
      ti++;
    }
    si++;
  }

  return ti === tl;
};

module.exports = isSubsequence;
