var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const n =  3.14159

const R = parseFloat(lines[0]);

const area = n * (R * R)

console.log(`A=${area.toFixed(4)}`)
