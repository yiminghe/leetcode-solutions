function TreeNode() {
  this.children = new Array(26);
  this.isWord = false;
}

const aCharCode = 'a'.charCodeAt(0);
const cache = {};

function getCharIndex(w) {
  if (cache[w] !== undefined) {
    return cache[w];
  }
  return (cache[w] = w.charCodeAt(0) - aCharCode);
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TreeNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!word.length) {
    return;
  }
  let node = this.root;
  for (var w of word) {
    const index = getCharIndex(w);
    const children = node.children;
    if (!children[index]) {
      children[index] = new TreeNode(node);
    }
    node = children[index];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const l = word.length;

  function search2(node, start) {
    if (start === l) {
      return node.isWord;
    }
    let w;
    for (; start < l; start++) {
      w = word[start];
      if (w === '.') {
        for (const c of node.children) {
          if (c && search2(c, start + 1)) {
            return true;
          }
        }
        return false;
      }
      const index = getCharIndex(w);
      node = node.children[index];
      if (!node) {
        return false;
      }
    }
    return node.isWord;
  }

  return search2(this.root, 0);
};

WordDictionary.getCharIndex = getCharIndex;

module.exports = WordDictionary;

const w = new WordDictionary();

w.addWord('bad');
w.addWord('dad');
w.addWord('mad');

console.log(w.search('bad'));

console.log(w.search('pad'));

console.log(w.search('.ad'));
console.log(w.search('b..'));

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
