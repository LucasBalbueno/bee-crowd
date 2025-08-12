var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(' ');

const A = Number(valores[0]);
const B = Number(valores[1]);
const C = Number(valores[2]);
const D = Number(valores[3]);

const aceitarValores = (A, B, C, D) => {
    if (B > C && D > A && C + D > A + B && C && D > 0 && A % 2 == 0) {
        console.log('Valores aceitos')
    } else {
        console.log('Valores nao aceitos')
    }
}

aceitarValores(A, B, C, D)