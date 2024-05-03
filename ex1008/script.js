var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const employee = {
    number: Number(lines[0]),
    hours: Number(lines[1]),
    salaryPHour: parseFloat(lines[2])
}

const salary = employee.hours * employee.salaryPHour;

console.log(`NUMBER = ${employee.number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)