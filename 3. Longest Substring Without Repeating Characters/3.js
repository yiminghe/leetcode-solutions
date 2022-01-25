/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const l = s.length;
  let start = -1;
  const map = new Array(255);
  let ret = -1;
  map.fill(start);
  let occurenceIndex;
  let charCode;
  for (let end = 0; end < l; end++) {
    charCode = s.charCodeAt(end);
    occurenceIndex = map[charCode];
    start = Math.max(start, occurenceIndex);
    map[charCode] = end;
    ret = Math.max(ret, end - start);
  }
  return ret;
};

console.log(lengthOfLongestSubstring('abccdf'));
