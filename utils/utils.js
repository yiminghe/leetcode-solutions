const now = require('performance-now');

function retTag(tag) {
  return `${tag} result:`;
}

function timeTag(tag) {
  return `${tag} time:`;
}

const util = module.exports = {
  padding(str, n) {
    while (str.length < n) {
      str += ' ';
    }
    return str;
  },
  run(tag, fn, size) {
    console.log();
    console.log(`${tag} start:`);
    const start = now();
    let ret = fn();
    const time = now() - start;
    if (ret !== undefined) {
      console.log(util.padding(retTag(tag), size), ret);
    }
    console.log(util.padding(timeTag(tag), size), time);
    console.log(`${tag} end!`);
  },
  runs(fns, args=[]) {
    let size = -1;
    Object.keys(fns).forEach((tag) => {
      size = Math.max(size, tag.length);
    });
    size += 5;
    Object.keys(fns).forEach((tag) => {
      const fn = fns[tag];
      util.run(tag, () => fn(...args), size);
    });
  }
};
