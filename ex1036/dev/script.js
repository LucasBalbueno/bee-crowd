var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(' ');
const a = parseFloat(valores[0]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[2]);

const calculaBhaskara = (a, b, c) => {
    const delta = Math.pow(b , 2) - 4 * a * c;

    if (a === 0 || delta < 0) {
        console.log('Impossivel calcular')
    } else {
        const r1 = (-b + Math.sqrt(delta)) / (2 * a);
        const r2 = (-b - Math.sqrt(delta)) / (2 * a);
    
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }
}

calculaBhaskara(a,b,c)