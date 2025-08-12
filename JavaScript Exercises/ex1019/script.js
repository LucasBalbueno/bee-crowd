 var input = require("fs").readFileSync("dev/stdin", "utf8");
 var lines = input.split("\n");

let N = Number(lines[0]);

const hours = Math.trunc(N / 3600);
N %= 3600;

const minutes = Math.trunc(N / 60);
N %= 60;

const seconds = N;

console.log(`${hours}:${minutes}:${seconds}`);