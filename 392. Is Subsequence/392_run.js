const isSubsequenceBs = require('./392_bs');
const isSubsequenceTp = require('./392_two_pointers');

let s = 'ahbgdc';

let t = 'acb';

const { runs } = require('../utils/utils');

runs({
  isSubsequenceBs,
  isSubsequenceTp,
}, [t,s]);
