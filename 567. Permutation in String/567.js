/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Length = s1.length;
  const s2Length = s2.length;
  if (s1Length > s2Length) {
    return false;
  }
  const s1Map = {};
  let s1Count = 0;
  for (const s of s1) {
    if (!s1Map[s]) {
      s1Count++;
      s1Map[s] = 0;
    }
    s1Map[s]++;
  }

  let left = 0;
  let right = 0;
  let windowCount = 0;
  const windowMap = {};
  for (; right < s2Length && left + s1Length <= s2Length; right++) {
    const cur = s2[right];
    windowMap[cur] = windowMap[cur] || 0;
    windowMap[cur]++;
    let curCount = windowMap[cur];
    if (curCount === s1Map[cur]) {
      windowCount++;
    } else if (curCount === s1Map[cur] + 1) {
      windowCount--;
    }
    if (right - left + 1 === s1Length) {
      if (windowCount === s1Count) {
        return true;
      }
      const leftChar = s2[left];
      if (s1Map[leftChar] === windowMap[leftChar]) {
        windowCount--;
      }
      windowMap[leftChar]--;
      if (s1Map[leftChar] === windowMap[leftChar]) {
        windowCount++;
      }
      left++;
    }
  }
  return false;
};


const matches = (s1Freq, s2Freq) => {
  for (let i = 0; i < 26; i++) {
    if (s1Freq[i] !== s2Freq[i]) return false
  }
  return true
}

/**
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/
var checkInclusion2 = function (s1, s2) {
  const s1Length = s1.length;
  const s2Length = s2.length;
  if (s1Length > s2Length) {
    return false;
  }
  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);
  for (let i = 0; i < s1Length; i++) {
    s1Map[s1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s1Length - 1; i++) {
    s2Map[s2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i + s1Length <= s2Length; i++) {
    s2Map[s2.charCodeAt(i + s1Length - 1) - 97]++;
    let checkI;
    for (checkI = 0; checkI < 26; checkI++) {
      if (s1Map[checkI] !== s2Map[checkI]) {
        break;
      }
    }
    if (checkI === 26) {
      return true;
    }

    s2Map[s2.charCodeAt(i) - 97]--;
  }
  return false;
};

let s1 = "ab", s2 = "eidbaooo";

console.log(checkInclusion2(s1, s2));

s1 = "abc", s2 = "bbbca"
debugger
console.log(checkInclusion2(s1, s2));