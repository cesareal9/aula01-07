const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt("Insira um numero ");

function maiorNumeroPossivel(num) {
return parseInt(
    num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join(""),
    10
);
}
const resultado = maiorNumeroPossivel(numero);
console.log("O maior numero possivel com os algarismos fornecidos é: " + resultado
);
