var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(' ');

const Xcode = Number(valores[0]);
const Yquantity = Number(valores[1]);

const products = [0, 4, 4.5, 5, 2, 1.5]

const total = products[Xcode] * Yquantity;

console.log(`Total: R$ ${total.toFixed(2)}`)