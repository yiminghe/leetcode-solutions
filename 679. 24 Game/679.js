/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  return compute(cards);
};

function compute(cards) {
  const n = cards.length;
  if (n === 1) {
    return Math.abs(cards[0] - 24) < 1e-6;
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let newCards = new Array(n - 1);
      let ki = 0;
      for (let k = 0; k < n; k++) {
        if (k !== i && k !== j) {
          newCards[ki++] = (cards[k]);
        }
      }
      let i1 = cards[i];
      let j1 = cards[j];
      newCards[ki] = (i1 + j1);
      if (compute(newCards)) return true;
      newCards[ki] = (i1 - j1);
      if (compute(newCards)) return true;
      newCards[ki] = (j1 - i1);
      if (compute(newCards)) return true;
      newCards[ki] = (i1 * j1);
      if (compute(newCards)) return true;
      if (j1) {
        newCards[ki] = (i1 / j1);
        if (compute(newCards)) return true;
      }
      if (i1) {
        newCards[ki] = (j1 / i1);
        if (compute(newCards)) return true;
      }
    }
  }
  return false;
}



function compute2(cards) {
  const n = cards.length;
  if (n === 1) {
    return cards[0].v === 24 && cards[0].s;
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let newCards = new Array(n - 1);
      let ki = 0;
      for (let k = 0; k < n; k++) {
        if (k !== i && k !== j) {
          newCards[ki++] = (cards[k]);
        }
      }
      let i1 = cards[i];
      let j1 = cards[j];
      newCards[ki] = { v: (i1.v + j1.v), s: `(${i1.s}+${j1.s})` };
      let ret;
      if (ret = compute2(newCards)) return ret;
      newCards[ki] = { v: (i1.v + j1.v), s: `(${i1.s}-${j1.s})` };
      if (ret = compute2(newCards)) return ret;
      newCards[ki] = { v: (j1.v - i1.v), s: `(${j1.s}-${i1.s})` };
      if (ret = compute2(newCards)) return ret;
      newCards[ki] = { v: (i1.v * j1.v), s: `(${i1.s}*${j1.s})` };
      if (ret = compute2(newCards)) return ret;
      if (j1.v) {
        newCards[ki] = { v: (i1.v / j1.v) | 0, s: `(${i1.s}/${j1.s})` };
        if (ret = compute2(newCards)) return ret;
      }
      if (i1.v) {
        newCards[ki] = { v: (j1.v / i1.v) | 0, s: `(${j1.s}/${i1.s})` };
        if (ret = compute2(newCards)) return ret;
      }
    }
  }
  return false;
}

var judgePoint24_2 = function (cards) {
  cards = cards.map(v => ({ v, s: v + '' }));
  return compute2(cards);
};

function generate24() {
  let ret = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          const q = ([i, j, k, l]);
          const a = judgePoint24_2(q);
          if (a) {
            ret.push({
              q,
              a,
            });
          }
        }
      }
    }
  }
  return ret;
}

const data = [13, 13, 9, 2];
console.log(judgePoint24(data));
console.log(judgePoint24_2(data));
if (1 > 2) {
  const ret = generate24();
  const fs = require('fs');
  const path = require('path');
  console.log(ret.length);
  let str = [];
  for (const r of ret) {
    str.push(JSON.stringify(r.q) + '\t' + r.a);
  }
  fs.writeFileSync(path.join(__dirname, '24.txt'), str.join('\n'));
}