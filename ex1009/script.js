var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const nome = lines[0];
const salary = parseFloat(lines[1]);
const sold = parseFloat(lines[2]);

const bonus = sold * 0.15;

const totalsalary = salary + bonus;

console.log(`TOTAL = R$ ${totalsalary.toFixed(2)}`)