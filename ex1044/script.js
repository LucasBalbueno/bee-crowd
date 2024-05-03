var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const nums = lines[0].split(' ');

const ordered = nums.sort((a, b) => a - b)

const menor = Number(nums[0]);
const maior = Number(nums[1]);

if (maior % menor === 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}