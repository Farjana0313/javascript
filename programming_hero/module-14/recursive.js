function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const recursive = factorial(10);
console.log(recursive);