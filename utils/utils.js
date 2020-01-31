exports.padding = function (str, n) {
  while (str.length < n) {
    str += ' ';
  }
  return str;
}
