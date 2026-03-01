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
function CheckLotto() {
    A = Math.floor(Math.random() * 5) + 1;
    console.log("Generated Lottery Number: " + A);
    const lotteryNumber = document.getElementById("lottery").value;
    if (isNaN(lotteryNumber) || lotteryNumber < 1 || lotteryNumber > 5) {
        alert("Please enter a valid number between 1 and 5.");
        return;
    }
    if (lotteryNumber === A.toString()) {
        alert("Congratulations! You won the lottery!");
    } else {
        alert("Sorry, better luck next time.");
            }
    }

var name = "alice"; // Function - scoped, hoisted - avoid using in modern JavaScript
let age = 30; //Block scoped, can be reasigned
const PI = 3.14159; //Block scoped, cannot be reasigned
let sckre = 0;
score = 10; // OK - reassignment allowed for let
const max = 100; // max = 200; This will cause an error because max is a constant

let address = "29 Woodstock Place";
let userAge = 24;

console.log(typeof userAge);
// Arithmetic
// 5 + 3 = 8       10 - 4 = 6       6 * 7 = 42      20 / 5 = 4
// 10 % 3 = 1      2 ** 4 = 16
// comparison
// 5 > 3 = true    10 < 4 = false   6 >= 7 = false   20 <= 5 = false
// 5 == "5" = true  5 === "5" = false (strict equality)
// Logical
// true && false = false   true || false = true   !true = false
//assignment shorthands
// let x = 10; x += 5; // x is now 15

