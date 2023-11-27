 var input = require("fs").readFileSync("dev/stdin", "utf8");
 var lines = input.split("\n");


const product1 = lines[0].split(" ");
const product2 = lines[1].split(" ");

const productCode1 = Number(product1[0]);
const units1 = Number(product1[1]);
const price1 = parseFloat(product1[2]);

const productCode2 = Number(product2[0]);
const units2 = Number(product2[1]);
const price2 = parseFloat(product2[2]);

const soma1 = units1 * price1;
const soma2 = units2 * price2;

console.log(`VALOR A PAGAR: R$ ${(soma1 + soma2).toFixed(2)}`)