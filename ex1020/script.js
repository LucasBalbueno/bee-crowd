var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let age = Number(lines[0]);

const years = Math.trunc(age / 365);
age %= 365;

const months = Math.trunc(age / 30);
age %= 30;

const days = age;

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);