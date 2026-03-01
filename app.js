console.log("Hello World!");
randomOperator = function() {
    operator = Math.floor(Math.random() * 4 + 1);
    if (operator === 1) {
        return "+";
    } else if (operator === 2) {
        return "-";
    } else if (operator === 3) {
        return "*";
    } else if (operator === 4) {
        return "/";
    } else {
        return "error";
    }
}
A = Math.floor(Math.random() * 100 + 1);
B = Math.floor(Math.random() * 100 + 1);
operator = randomOperator();
if (operator === "+") {
    X = A + B;
} else if (operator === "-") {
    X = A - B;
} else if (operator === "*") {
    X = A * B;
} else if (operator === "/") {
    X = A / B;
}
console.log("random time!!! your first random number is " + A + " your random operator is " + operator + " and your second random number is " + B + " and the result of the operation is " + X);

var name = "alice";
var age = 30;
const PI = 3.14159;
,et sckre = 0;
score = 10;
const max = 100;
