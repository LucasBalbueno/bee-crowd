var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const N = parseFloat(lines[0]);

function intervalNumber (N) {
    if (N < 0 || N > 100) {
        console.log('Fora de intervalo')
    } else if (N >= 0 && N <= 25) {
        console.log('Intervalo [0,25]')
    } else if (N > 25 && N <= 50) {
        console.log('Intervalo (25,50]')
    } else if (N > 50 && N <= 75) {
        console.log('Intervalo (50,75]')
    } else if (N > 75 && N <= 100) {
        console.log('Intervalo (75,100]')
    }
}

intervalNumber(N)