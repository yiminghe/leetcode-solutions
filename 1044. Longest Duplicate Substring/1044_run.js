const longestDupSubstringBs=require('./1044_bs');
const longestDupSubstringDp=require('./1044_dp');
const longestDupSubstringSt=require('./1044_st');
const {runs}=require('../utils/utils');

runs({
  longestDupSubstringBs,
  longestDupSubstringDp,
  longestDupSubstringSt,
},["abceabcf"]);
