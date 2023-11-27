var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);
const D = Number(lines[3]);

const difference = ((A*B) - (C*D))

console.log(`DIFERENCA = ${difference}`)