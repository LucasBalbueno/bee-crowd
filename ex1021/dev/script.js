// var input = require("fs").readFileSync("dev/stdin", "utf8");
// var lines = input.split("\n");

let N = parseFloat(lines[0]);

const calculaDinheiro = (N) => {
    console.log('NOTAS:')

    const arrNotas = [100, 50, 20, 10, 5, 2];

    arrNotas.forEach((nota) => {
        let quantidadeNotas = N / nota;
        console.log(`${Math.trunc(quantidadeNotas)} nota(s) de R$ ${nota}.00`)
        N %= nota
    })

    console.log('MOEDAS:');

    const arrMoedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

    arrMoedas.forEach((moeda) => {
        let quantidadeMoedas = N / moeda;
        console.log(`${Math.trunc(quantidadeMoedas)} moeda(s) de R$ ${moeda.toFixed(2)}`)
        N = parseFloat( N % moeda).toFixed(2);
    })

}

calculaDinheiro(N)