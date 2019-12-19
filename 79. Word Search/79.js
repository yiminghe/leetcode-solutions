/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const directionX = [-1, 1, 0, 0];
const directionY = [0, 0, -1, 1];

var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  const l = word.length;

  function check(start, i, j) {
    if (start === l) {
      return true;
    }
    if (i >= row || i < 0 || j >= col || j < 0) {
      return false;
    }
    if (!board[i][j]) {
      return false;
    }
    let w = board[i][j];
    if (w !== word[start]) {
      return false;
    }
    board[i][j] = undefined;
    let ni;
    let nj;
    for (let d = 0; d < 4; d++) {
      ni = i + directionX[d];
      nj = j + directionY[d];
      if (check(start + 1, ni, nj)) {
        return true;
      }
    }
    board[i][j] = w;
    return false;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (check(0, i, j)) {
        return true;
      }
    }
  }

  return false;
};

const board = [["a", "b"], ["c", "d"]];

console.log(exist(board, "abcd"));
