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
      if (word1[i - 1] === word2[j - 1]) {
        cur[j] = pre;
      } else {
        cur[j] = Math.min(cur[j - 1], pre, tmp) + 1;
      }
      pre = tmp;
    }
  }
  return cur[n];
};




var minDistanceTrace = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const matrix = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    matrix[i] = [i];
  }
  for (let i = 0; i <= n + 1; i++) {
    matrix[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
      }
    }
  }

  let ops = [];
  let row = m;
  let col = n;
  const word = word1.split('');
  while (row && col) {
    if (word[row - 1] === word2[col - 1]) {
      row--;
      col--;
      continue;
    }
    const min = Math.min(
      matrix[row - 1][col - 1],
      matrix[row - 1][col],
      matrix[row][col - 1]
    )
    const o = word.join('');
    if (matrix[row - 1][col - 1] === min) {
      word[row - 1] = word2[col - 1];
      row--;
      col--;
    } else if (matrix[row - 1][col] === min) {
      word[row - 1] = '';
      row--;
    } else if (matrix[row][col - 1] === min) {
      word.splice(row - 1, 0, word2[col - 1]);
      col--;
    }
    ops.push(`${o} -> ${word.join('')}`);
  }
  if (row || col) {
    console.log('??')
    const o = word.join('');
    if (row) {
      word.splice(0, row);
      ops.push(`${o} -> ${word.join('')}`);
    } else {
      word.splice(0, 0, word2.slice(0, col));
      ops.push(`${o} -> ${word.join('')}`);
    }
  }
  return { d: matrix[m][n], o: ops };
};

function run() {
  console.log(minDistance(word1, word2));

  console.log(minDistanceTrace(word1, word2));
}

let word1, word2;

word1 = "horse", word2 = "ros";

run();

word1 = "intention", word2 = "execution"

run();
