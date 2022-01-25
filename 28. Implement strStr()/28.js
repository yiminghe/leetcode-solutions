/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (str, pattern) {
  if (!pattern) {
    return 0;
  }
  const patternLength = pattern.length;
  const strLength = str.length;
  let sindex = 0;
  let pindex = 0;
  const next = getNext(pattern);
  while (sindex < strLength && pindex !== patternLength) {
    if (pindex === -1 || str[sindex] === pattern[pindex]) {
      sindex++;
      pindex++;
    } else {
      pindex = next[pindex];
    }
  }
  if (pindex === patternLength) {
    return sindex - pindex;
  }
  return -1;
};

function getNext(p) {
  const l = p.length;
  const next = new Array(l);
  let i = -1;
  let j = 0;
  next[0] = -1;
  while (j < l - 1) {
    if (i === -1 || p[i] === p[j]) {
      i++;
      j++;
      if (p[i] === p[j]) {
        let ii = i;
        while (ii !== -1 && p[ii] === p[j]) {
          ii = next[j] = next[ii];
        }
      } else {
        next[j] = i;
      }
    } else {
      i = next[i];
    }
  }
  return next;
}

let haystack = 'hello',
  needle = 'll';
console.log(strStr(haystack, needle));

(haystack = 'aaaaa'), (needle = 'bba');
console.log(strStr(haystack, needle));

needle = 'abcdabd';
console.log(getNext(needle));

needle = 'abab';
console.log(getNext(needle));
