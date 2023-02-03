var a = 5;
var b = 7;
// console.log("before swap a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
// console.log("after swap a =", a, "b =", b);
var x = 5;
var y = 7;

// console.log("after swap x =", x, "y =", y);
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap x =", x, "y =", y);
var p = 5;
var q = 7;

console.log("after swap p =", p, "q =", q);
[p, q] = [7, 5];

console.log("after swap p =", p, "q =", q);