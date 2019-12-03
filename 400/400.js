var findNthDigit = function (n) {
    let limit = 9;
    let start = 1;
    let i = 1;
    while (n > limit * i) {
        n -= limit * i;
        i++;
        limit *= 10;
        start *= 10;
    }
    return ((start + ((n - 1) / i | 0)) / Math.pow(10, (i - n % i) % i) | 0) % 10
};

module.exports = findNthDigit;
