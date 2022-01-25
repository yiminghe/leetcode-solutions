var myAtoi = function (str) {
  str = str.trim();
  let flag = 1;
  let index = 0;
  let current = str[index];
  if (current == '-') {
    flag = 0;
    index++;
  } else if (current == '+') {
    index++;
  }
  const l = str.length;
  let rev = 0;
  let pop = 0;
  let INT_MAX = 0x7fffffff;
  let INT_MIN = 0x80000000 | 0;
  let INT_MAX_10 = (0x7fffffff / 10) | 0;
  for (; index < l; index++) {
    current = str[index];
    if (current >= '0' && current <= '9') {
      pop = current - '0';
      if (flag) {
        if (rev > INT_MAX_10 || (rev == INT_MAX_10 && pop > 7)) return INT_MAX;
      } else {
        if (rev > INT_MAX_10 || (rev == INT_MAX_10 && pop > 8)) return INT_MIN;
      }
      rev = rev * 10 + pop;
    } else {
      return flag ? rev : -rev;
    }
  }
  return flag ? rev : -rev;
};

module.exports = myAtoi;
