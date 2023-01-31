function setValue(v, x, y, a) {
  v[x] = v[x] || [];
  v[x][y] = a;
}

function getValue(arr, x, y) {
  if (arr[x]) {
    return arr[x][y];
  }
  return;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  const arr = [];

  // if(str[i]===str[j]) { if(arr[i+1][j-1]) arr[i][j] = arr[i+1][j-1]+2}
  // else {arr[i][j] = 0}


  for (var i = 0; i < len; i++) {
    setValue(arr, i, i, 1);
  }

  let max = 1;
  let ret = [0, 0];

  for (i = len - 2; i >= 0; i--) {
    for (j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        let cur = -1;
        if (j - 1 >= i + 1) {
          if (getValue(arr, i + 1, j - 1)) {
            setValue(arr, i, j, 1);
            cur = j - i + 1;
          }
        } else {
          setValue(arr, i, j, 1);
          cur = j - i + 1;
        }

        if (max < cur) {
          max = cur;
          ret = [i, j];
        }
      }

    }
  }

  return s.slice(ret[0], ret[1] + 1);
}

console.log(longestPalindrome('babbad'));
