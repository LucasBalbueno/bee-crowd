var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const a = Number(lines[0]);
const b = Number(lines[1]);

const PROD = a * b;

console.log(`PROD = ${PROD}`)