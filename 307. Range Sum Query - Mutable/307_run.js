const NumArrayBt = require('./307_bt');
const NumArrayBit = require('./307_bit');
const { runs } = require('../utils/utils');

function run(NumArray) {
  return () => {
    let cmd = [
      'NumArray',
      'update',
      'update',
      'update',
      'sumRange',
      'update',
      'sumRange',
      //"update", "sumRange", "sumRange", "update"
    ];
    let data = [
      [[7, 2, 7, 2, 0]],
      [4, 6],
      [0, 2],
      [0, 9],
      [4, 4],
      [3, 8],
      [0, 4],
      //[4, 1], [0, 3], [0, 4], [0, 4]
    ];

    let na;

    cmd.forEach((c, index) => {
      if (c === 'NumArray') {
        na = new NumArray(data[index][0]);
      } else if (c === 'update') {
        na.update(...data[index]);
      } else if (c === 'sumRange') {
        console.log(na.sumRange(...data[index]));
      }
    });
  };
}

runs({
  NumArrayBt: run(NumArrayBt),
  NumArrayBit: run(NumArrayBit),
});
