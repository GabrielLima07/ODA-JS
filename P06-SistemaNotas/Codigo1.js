// Node.js
function cabecalho() {
    return "=======================================\n        SISTEMA DE NOTAS ESCOLAR        \n======================================="
}

var input = require('readline-sync')

console.log(cabecalho())
// operações de atribuição
const n1 = Number(input.question("Insira a primeira nota: "))
const n2 = Number(input.question("Insira a segunda nota: "))
const n3 = Number(input.question("Insira a terceira nota: "))
const media = ((n1 + n2 + n3) / 3)

console.clear()
console.log(cabecalho())

console.log(
`Nota 1: ${n1}
Nota 2: ${n2}
Nota 3: ${n3}
Média: ${media}`)

let situacao = (media >= 7 ? "Aluno APROVADO" : "Aluno REPROVADO") // operação ternária
console.log(situacao)
