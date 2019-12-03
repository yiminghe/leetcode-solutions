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
    } else if (current < '0' || current > '9') {
        return 0;
    }
    const l = str.length;
    let rev = 0;
    let pop = 0;
    let INT_MAX = 0x7fffffff / 10 | 0;
    for (; index < l; index++) {
        current = str[index];
        if (current >= '0' && current <= '9') {
            pop = current - '0';
            if (flag) {
                if (rev > INT_MAX || (rev == INT_MAX && pop > 7)) return 0;
            } else {
                if (rev > INT_MAX || (rev == INT_MAX && pop > 8)) return 0;
            }
            rev = rev * 10 + pop;
        }
    }
    return rev;
};

module.exports = myAtoi;
