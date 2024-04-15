// Disjoint-set data structure
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const l = isConnected.length;
  var parents = new Array(l);
  let ret = l;
  for (let i = 0; i < l; i++) {
    parents[i] = i;
  }
  var rank = new Array(l).fill(0);

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (isConnected[i][j]) {
        ret = union(i, j, parents, rank, ret);
      }
    }
  }

  return ret;
};

function union(i, j, parents, rank, ret) {
  const rootI = findParent(i,parents);
  const rootJ = findParent(j,parents);
  if (rootI === rootJ) {
    return ret;
  }

  if (rank[rootI] > rank[rootJ]) {
    parents[rootJ] = rootI;
  } else if (rank[rootI] < rank[rootJ]) {
    parents[rootI] = rootJ;
  } else {
    rank[rootI]++;
    parents[rootJ] = rootI;
  }

  return ret - 1;
}

function findParent(i, parents) {
  const j = parents[i];
  if (j === i) {
    return i;
  }
  parents[i] = findParent(j,parents);
  return parents[i];
}

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))


console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
