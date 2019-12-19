const treeUtils=require('../utils/tree');

const WordDictionary = require('../211. Add and Search Word - Data structure design/211');
const { getCharIndex } = WordDictionary;


const directionX = [-1, 1, 0, 0];
const directionY = [0, 0, -1, 1];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const dict = new WordDictionary();

  for (const w of words) {
    dict.addWord(w);
  }

  const dictRoot = dict.root;

  //treeUtils.printTrie(dictRoot);


  const row = board.length;
  const col = board[0].length;
  const ans = [];

  function check(r, i, j, s) {
    if (!r) {
      return;
    }
    if (r.isWord) {
      if (ans.indexOf(s) === -1) {
        ans.push(s);
      }
    }
    if (i >= row || i < 0 || j >= col || j < 0) {
      return;
    }
    if (!board[i][j]) {
      return;
    }
    let w = board[i][j];
    let match=r.children[getCharIndex(w)];
    if (!match) {
      return;
    }
    s += w;
    board[i][j] = undefined;
    let ni;
    let nj;
    for (let d = 0; d < 4; d++) {
      ni = i + directionX[d];
      nj = j + directionY[d];
      check(match, ni, nj, s);
    }
    board[i][j] = w;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      check(dictRoot, i, j,'');
    }
  }

  return ans;
};

const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

const words = ["oath","pea","eat","rain"];
console.log(findWords(board, words));
