var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const nums = lines[0].split(' ');

const ordered = nums.sort((a, b) => b - a);

const A = Number(ordered[0]);
const B = Number(ordered[1]);
const C = Number(ordered[2]);

if (A >= B + C)
    console.log('NAO FORMA TRIANGULO');
else {
    if (A * A === B * B + C * C)
        console.log('TRIANGULO RETANGULO');
    else if (A * A > B * B + C * C)
        console.log('TRIANGULO OBTUSANGULO');
    else
        console.log('TRIANGULO ACUTANGULO');

    if (A === B && B === C)
        console.log('TRIANGULO EQUILATERO');
    else if (A === B || A === C || B === C)
        console.log('TRIANGULO ISOSCELES');
}