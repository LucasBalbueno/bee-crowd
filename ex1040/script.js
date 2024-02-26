var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(' ');
const exame = Number(lines[1]);

const n1 = Number(valores[0]);
const n2 = Number(valores[1]);
const n3 = Number(valores[2]);
const n4 = Number(valores[3]);

const average = (n1, n2, n3, n4, n5) => {
    let media = ( (n1*2) + (n2*3) + (n3*4) + (n4*1) ) / 10;
    const aprovado = 'Aluno aprovado.'
    const reprovado = 'Aluno reprovado.'

    console.log(`Media: ${media.toFixed(1)}`)

    if (media >= 7) {
        console.log(aprovado)
    } else if (media < 5) {
        console.log(reprovado)
    } else {
        console.log(`Aluno em exame.\nNota do exame: ${n5.toFixed(1)}`)
        media = (media + n5) / 2;

        if  (media >= 5) {
            console.log(`${aprovado}\nMedia final: ${media.toFixed(1)}`);
        } else {
            console.log(`${reprovado}\nMedia final: ${media.toFixed(1)}`);
        }
    }
}

average(n1, n2, n3, n4, exame)