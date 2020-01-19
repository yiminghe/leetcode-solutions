const a = 96; //'a'.charCodeAt(0) - 1;

class RollingHash {
  constructor(s, dp) {
    this.s = s;
    const p = this.p = dp || 40;
    const hash = this.hash = new Array(s.length + 1);
    const m = this.m = 1<<30;
    const ps = this.ps = new Array(s.length + 1);

    ps[0] = 1;
    for (let i = 1; i < s.length; i++) {
      ps[i] = (ps[i - 1] * p) % m;
    }

    hash[0] = 0;

    for (let i = 1; i <= s.length; i++) {
      hash[i] = (hash[i - 1] * p + s.charCodeAt(i - 1)-a) % m;
    }
  }

  getHash(i, j) {
    const hash = this.hash;
    const m = this.m;
    const ps = this.ps;
    return (hash[j] + m - (hash[i] * ps[j - i]) % m) % m;
  }
}

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (s) {
  const len = s.length;
  let l = 0;
  let r = len;
  let mid;
  let ans = -1;
  let index;
  let ansLen;
  const rh = new RollingHash(s);

  function getIndex(k) {
    const map = {};
    let hash;
    let hashContent;
    let end;
    for (let i = 0; i < len - k + 1; i++) {
      end = i + k;
      hash = rh.getHash(i, end);
      if (hash < 0) {
        throw new Error('invalid hash');
      }
      hashContent = map[hash];
      if (hashContent) {
        //console.log(hashContent.length);
        for (let hi = 0; hi < hashContent.length; hi++) {
          let h = hashContent[hi];
          let ii = 0;
          for (; ii < k; ii++) {
            if (s[i + ii] !== s[h + ii]) {
              break;
            }
          }
          if (ii === k) {
            return i;
          }
        }
        map[hash].push(i);
      } else {
        map[hash] = [i];
      }
    }
    return -1;
  }

  while (l < r) {
    mid = (l + r) / 2 | 0;
    index = getIndex(mid);
    if (index !== -1) {
      ans = index;
      ansLen = mid;
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return ans === -1 ? '' : s.slice(ans, ans + ansLen);
};
