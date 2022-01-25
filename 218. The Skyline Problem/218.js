/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  if (!buildings.length) {
    return [];
  }
  const root = new Node(0, Number.MAX_SAFE_INTEGER, 0);
  for (const b of buildings) {
    insert(root, b[0], b[1] - 1, b[2]);
  }
  const ret = [];
  output(root, ret);
  return ret;
};

function Node(s, e, h) {
  this.s = s;
  this.e = e;
  this.h = h;
  this.left = null;
  this.right = null;
}

function insert(r, s, e, h) {
  if (r.s > e || r.e < s) {
    return;
  }
  if (r.left === null && r.right === null) {
    if (r.s >= s && r.e <= e) {
      r.h = Math.max(r.h, h);
    } else if (r.s < s) {
      r.left = new Node(r.s, s - 1, r.h);
      r.right = new Node(s, r.e, r.h);
      insert(r.right, s, e, h);
    } else {
      r.left = new Node(r.s, e, r.h);
      r.right = new Node(e + 1, r.e, r.h);
      insert(r.left, s, e, h);
    }
  } else {
    insert(r.left, s, e, h);
    insert(r.right, s, e, h);
  }
}

function output(r, ret, last = [0]) {
  if (r) {
    if (!r.left && !r.right) {
      if (r.h !== last[0]) {
        ret.push([r.s, r.h]);
        last[0] = r.h;
      }
    }
    output(r.left, ret, last);
    output(r.right, ret, last);
  }
}

let buildings = [
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
];

// buildings = [[2, 4, 7], [2, 4, 5], [2, 4, 6]];

console.log(getSkyline(buildings));
