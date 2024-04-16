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
  const rootI = findParent(i, parents);
  const rootJ = findParent(j, parents);
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
  parents[i] = findParent(j, parents);
  return parents[i];
}



/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNumDfs = function (isConnected) {
  const l = isConnected.length;
  const visited = new Array(l);

  function dfs(i){
    visited[i]=true;
    for(let j=0;j<l;j++){
      if(!visited[j]&&isConnected[i][j]){
        dfs(j);
      }
    }
  }

  let ret=0;

  for(let i=0;i<l;i++){
    if(!visited[i]){
      ret++;
      dfs(i);
    }
  }

  return ret;
};


let map=[[1, 1, 0], [1, 1, 0], [0, 0, 1]];
console.log(findCircleNum(map))
console.log(findCircleNumDfs(map))

map=[[1, 0, 0], [0, 1, 0], [0, 0, 1]];
console.log(findCircleNum(map))
console.log(findCircleNumDfs(map))
