// http://poj.org/problem?id=2115
// https://blog.csdn.net/sdutstudent/article/details/78795643
// https://www.cnblogs.com/william-cheung/p/3660422.html
const now = require('performance-now');

function gcd(h, l) {
  while (l) {
    [h, l] = [l, h % l];
  }
  return h;
}

// a*x1 + by1 = gcd(a,b)
// b*x2 + (a%b)y2 = gcd(b, a%b)

/*
a*x1+by1=b*x2+(a%b)y2=b*x2+(a-(a/b)*b)y2=ay2+b(x2-a/b*y2)

x1=y2

y1=x2-a/b*y2
*/
function extend_gcd_raw(a, b, x = { v: 0 }, y = { v: 0 }) {
  if (b === 0) {
    x.v = 1;
    y.v = 0;
  } else {
    extend_gcd(b, a % b, x, y);
    const x2 = x.v;
    x.v = y.v;
    y.v = x2 - ((a / b) | 0) * y.v;
  }
  return { x, y };
}
function extend_gcd(a, b, x = { v: 0 }, y = { v: 0 }) {
  if (b === 0) {
    x.v = 1;
    y.v = 0;
  } else {
    extend_gcd(b, a % b, y, x);
    y.v -= ((a / b) | 0) * x.v;
  }
  return { x, y };
}

// a + cx = b (mod 2^k)
function compute(a, b, c, k) {
  a = a | 0;
  b = b | 0;
  c = c | 0;
  k = k | 0;
  const n = 2 ** k;
  const ba = (b - a + n) % n;
  // cx+ny=ba
  const gcd_cn = gcd(n, c);
  if (ba % gcd_cn) {
    return null;
  }
  const xy = extend_gcd(c, n);
  xy.x.v *= ba / gcd_cn;
  const r = xy.x.v;
  // all solutions:
  // x:r+gap y:y-gap
  // x: r+2gap y: y-2gap
  const gap = n / gcd_cn;
  return ((r % gap) + gap) % gap;
}

function compute_slow(a, b, c, k) {
  let loop = 0;
  const limit = 2 ** k;
  for (var i = a; i != b; i = (i + c) % limit) {
    loop++;
  }
  return loop;
}

const qs = [
  [3, 3, 2, 16],
  [3, 7, 2, 16],
  [7, 3, 2, 16],
  [3, 4, 2, 16],
  [13, 12, 15, 16],
];
let start;
for (const q of qs) {
  console.log('***************');
  start = now();
  const ret = compute.apply(null, q);
  const diff = now() - start;
  console.log(q);
  console.log('lcg algorithm:');
  console.log(ret ?? 'FOREVER', diff);
  if (typeof ret === 'number') {
    start = now();
    const slowRet = compute_slow.apply(null, q);
    const diff = now() - start;
    console.log('slow algorithm:');
    console.log(slowRet ?? 'FOREVER', diff);
    if (slowRet !== ret) {
      throw new Error('lcg error!');
    }
  }
}
