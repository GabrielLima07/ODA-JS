// Node.js
function cabecalho() {
    return "=======================================\n        SISTEMA DE NOTAS ESCOLAR        \n======================================="
}

var input = require('readline-sync')

console.log(cabecalho())
const n1 = Number(input.question("Insira a primeira nota: "))
const n2 = Number(input.question("Insira a segunda nota: "))
const n_minima = 21 - (n1 + n2) 

console.clear()
console.log(cabecalho())

if (n1 + n2 < 21) {
    console.log(`Para passar com média sete você deve tirar ${n_minima} na próxima prova`)
}
else {
    console.log(`Você já está aprovado`)
}
