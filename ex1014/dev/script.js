var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const distance = Number(lines[0]);
const liters = parseFloat(lines[1]);

const media = distance / liters;

console.log(`${media.toFixed(3)} km/l`)