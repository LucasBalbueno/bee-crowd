 var input = require("fs").readFileSync("dev/stdin", "utf8");
 var lines = input.split("\n");

const valores1 = lines[0].split(" ");
const valores2 = lines[1].split(" ");

const x1 = valores1[0];
const x2 = valores2[0];
const y1 = valores1[1];
const y2 = valores2[1];

const distance = (x1, x2, y1, y2) => {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

console.log(distance(x1, x2, y1, y2).toFixed(4));