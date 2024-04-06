/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const l = s.length;
  if (l === 0) {
    return 0;
  }
  let start = 0;
  const map = new Array(255);
  let ret = 1;
  let occurrenceIndex;
  let charCode;
  for (let end = 0; l > ret + start; end++) {
    charCode = s.charCodeAt(end);
    occurrenceIndex = map[charCode];
    if (occurrenceIndex !== undefined) {
      start = Math.max(start, occurrenceIndex + 1);
    }
    map[charCode] = end;
    ret = Math.max(ret, end - start + 1);
  }
  return ret;
};


/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring2 = function (s) {
  const l = s.length;
  if (l === 0) {
    return 0;
  }
  let start = 0;
  const map = new Map();
  let ret = 1;
  let occurrenceIndex;
  let charCode;
  for (let end = 0; l > ret + start; end++) {
    charCode = s[end];
    occurrenceIndex = map.get(charCode);
    if (occurrenceIndex !== undefined) {
      start = Math.max(start, occurrenceIndex + 1);
    }
    map.set(charCode,end);
    ret = Math.max(ret, end - start + 1);
  }
  return ret;
};

console.log(lengthOfLongestSubstring2('pwwkew'));


console.log(lengthOfLongestSubstring('pwwkew'));
