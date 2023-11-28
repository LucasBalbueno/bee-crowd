var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const hours = Number(lines[0]);
const speed = Number(lines[1]);
const average = 12;

const distance = hours * speed;
const liters = distance / average;

console.log(liters.toFixed(3));