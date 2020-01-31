/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const l = nums.length + 1;
  const sum = new Array(l);
  sum[0] = 0;
  for (let i = 1; i < l; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  const ret = merge(sum, 0, l, lower, upper);
  return ret;
};

function merge(sum, start, end, lower, upper) {
  if (end - start <= 1) {
    return 0;
  }
  const mid = start + ((end - start) / 2 | 0);
  let lret = merge(sum, start, mid, lower, upper);
  let rret = merge(sum, mid, end, lower, upper);
  let tmp = [];
  let ret = 0;
  let ti = 0;
  let midI = mid;
  // upper>=sum[i] - sum[j]>=lower
  // sum[i]>=sum[j]+lower
  // sum[i]<=sum[j]+upper
  for (let j = start; j < mid; j++) {
    let startV = sum[j];
    let lowerBound = startV + lower;
    let upperBound = startV +upper;
    let startI = mid;
    while (startI < end && sum[startI] < lowerBound) {
      startI++;
    }
    if (startI !== end) {
      //console.log('ret start:',sum[startI]);
      let endI = startI;
      while (endI < end && sum[endI] <= upperBound) {
        endI++;
      }
      if (endI !== startI) {
        // let startRet=startI;
        // console.log('count:',endI-startI);
        // console.log('sum:',sum);
        // while(startRet<endI){
        //   console.log('ret:',startRet,j,sum[startRet]+'-'+startV);
        //   startRet++;
        // }
        ret += endI - startI;
      } else {
        //console.log('ret break');
      }
    }

    while (midI < end && sum[midI] < startV) {
      tmp[ti++] = sum[midI++];
    }
    tmp[ti++] = startV;
  }

  for (let i = 0; i < ti; i++) {
    sum[start + i] = tmp[i];
  }

  return ret + lret + rret;
}

module.exports = countRangeSum;
