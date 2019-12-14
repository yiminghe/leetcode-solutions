/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let prev1 = 0;
  let prev2 = 1;
  if (N == 0) {
    return prev1;
  }
  if (N === 1) {
    return prev2;
  }
  let ret = 0;
  for (let n = 2; n <= N; n++) {
    ret = prev1 + prev2;
    prev1 = prev2;
    prev2 = ret;
  }
  return ret;
};

// https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors
// https://zhuanlan.zhihu.com/p/33295067
// proximity
var fibEigen = function (N) {
  const sqrt5 = Math.sqrt(5);
  const lamda = (1 + sqrt5) / 2;
  return Math.pow(lamda, N) / sqrt5;
}

// fk=[[11][10]]f0;
function multiplyMatrix(a1, a2) {
  const a00 = a1[0][0] * a2[0][0] + a1[0][1] * a2[1][0];
  const a01 = a1[0][0] * a2[0][1] + a1[0][1] * a2[1][1];
  const a10 = a1[1][0] * a2[0][0] + a1[1][1] * a2[1][0];
  const a11 = a1[1][0] * a2[0][1] + a1[1][1] * a2[1][1];
  a1[0][0] = a00;
  a1[0][1] = a01;
  a1[1][0] = a10;
  a1[1][1] = a11;
  return a1;
}

function copy(a1, a2) {
  a1[0][0] = a2[0][0];
  a1[0][1] = a2[0][1];
  a1[1][0] = a2[1][0];
  a1[1][1] = a2[1][1];
  return a1;
}

const m = [[1, 1], [1, 0]];

function fibMatrix(n) {
  debugger
  if (n == 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let ret = [[1, 0], [0, 1]];
  let total = [[1, 1], [1, 0]];
  n--;
  while (n) {
    if (n % 2) {
      multiplyMatrix(ret, total);
    }
    n = n / 2 | 0;
    multiplyMatrix(total, total);
  }
  return ret[0][0];
}

var performanceNow = require("performance-now")
let n = 70;
let start=performanceNow();
console.log(fib(n));
console.log('d:',performanceNow()-start);
start=performanceNow();
console.log(fibEigen(n));
console.log('d:',performanceNow()-start);
start=performanceNow();
console.log(fibMatrix(n));
console.log('d:',performanceNow()-start);