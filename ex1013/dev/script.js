var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(" ");

const a = Number(valores[0]);
const b = Number(valores[1]);
const c = Number(valores[2]);

const maiorAB = (a + b + Math.abs(a - b)) / 2;

const maiorC = (c > maiorAB) ? c : maiorAB;

console.log(`${maiorC} eh o maior`)