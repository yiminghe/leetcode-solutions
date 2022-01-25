/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map();
  for (const d of deck) {
    if (map.has(d)) {
      map.set(d, map.get(d) + 1);
    } else {
      map.set(d, 1);
    }
  }
  return getGroupSize(map) >= 2;
};

function gcd(h, l) {
  while (l) {
    [h, l] = [l, h % l];
  }
  return h;
}

function getGroupSize(map) {
  let g = -1;
  map.forEach((v) => {
    if (g === -1) {
      g = v;
    } else {
      g = gcd(g, v);
    }
  });
  return g;
}

const deck = [1, 2, 3, 4, 4, 3, 2, 1];

console.log(hasGroupsSizeX(deck));

/**
 *
 * 3 个城市的人进行分组比赛，
 * 每个城市人数不同，怎么进行公平比赛。要求分组后的组数小(每组人数多)
 */

const list = [2, 10, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const size = 3;
let array = new Array(size);
array.fill(1024);
let flag = 0;
for (const l of list) {
  array[flag] *= l;
  flag = (flag + 1) % size;
}
console.log(array);
console.log(getGroupSize(array));
