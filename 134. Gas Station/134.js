/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let len = gas.length;
  let total = 0;
  let sum = 0;
  let r;
  let start = 0;
  for (let i = 0; i < len; i++) {
    r = gas[i] - cost[i];
    total += r;
    sum += r;
    if (sum < 0) {
      start = i + 1;
      sum = 0;
    }
  }
  return total >= 0 ? start : -1;
};


let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

// gas = [2, 3, 4]
// cost = [3, 4, 3]

console.log(canCompleteCircuit(gas, cost));