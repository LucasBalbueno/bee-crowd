var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let N = Number(lines[0]);

const calculaNotas = (N) => {
    console.log(N);

    const arrNotas = [100, 50, 20, 10, 5, 2, 1];

    arrNotas.forEach((nota) => {
        let QuantidadeNotas = N / nota;
        console.log(`${parseInt(QuantidadeNotas)} nota(s) de R$ ${nota},00`)
        N = N % nota
    })
}

calculaNotas(N)