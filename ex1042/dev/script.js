// var input = require("fs").readFileSync("dev/stdin", "utf8");
// var lines = input.split("\n");

const numbers = lines[0].split(' ');

const numA = Number(numbers[0]);
const numB = Number(numbers[1]);
const numC = Number(numbers[2]);

const ordered = numbers.sort((a, b) => a - b)

console.log(ordered[0])
console.log(ordered[1])
console.log(ordered[2])

console.log()

console.log(numA)
console.log(numB)
console.log(numC)