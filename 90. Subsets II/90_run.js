const subsetsWithDupLoop = require('./90_loop');
const subsetsWithDupDfs = require('./90_dfs');
const { runs } = require('../utils/utils');

runs(
  {
    subsetsWithDupLoop,
    subsetsWithDupDfs,
  },
  [[1, 2, 1]],
);
