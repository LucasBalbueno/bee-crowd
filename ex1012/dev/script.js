var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const entrada = lines[0].split(" ");

const A = parseFloat(entrada[0]);
const B = parseFloat(entrada[1]);
const C = parseFloat(entrada[2]);

const triangulo = (A, C) => {
    return (A * C) / 2;
}

const circulo = (C) => {
    const pi = 3.14159;
    return pi * (Math.pow(C, 2));
}

const trapezio = (A, B, C) => {
    return (A + B) * C / 2;
}

const quadrado = (B) => {
    return B * B;
}

const retangulo = (A, B) => {
    return A * B;
}

console.log(`TRIANGULO: ${triangulo(A, C).toFixed(3)}`);
console.log(`CIRCULO: ${circulo(C).toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio(A, B, C).toFixed(3)}`);
console.log(`QUADRADO: ${quadrado(B).toFixed(3)}`);
console.log(`RETANGULO: ${retangulo(A, B).toFixed(3)}`);