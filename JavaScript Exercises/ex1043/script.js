var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const num = lines[0].split(' ');

const numA = parseFloat(num[0]);
const numB = parseFloat(num[1]);
const numC = parseFloat(num[2]);



function verificaTriangulo (a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        const resp =  a + b + c;
        console.log(`Perimetro = ${resp.toFixed(1)}`)
    } else {
        const resp =  ((a + b) * c) / 2
        console.log(`Area = ${resp.toFixed(1)}`)
    }

}

verificaTriangulo(numA, numB, numC)