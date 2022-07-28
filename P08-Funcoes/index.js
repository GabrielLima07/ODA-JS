// Node.js
// Função tradicional sem parâmetros
function iniciarCalculadora() {
    console.log("1 + 1 =", 1 + 1)
}


// Função tradicional com parâmetros
function somar(numero1, numero2) {
    return numero1 + numero2
}


// Arrow function com parâmetros
multiplicar = (numero1, numero2) => {
    return numero1 * numero2
}

// Testes funções
iniciarCalculadora()
console.log(somar(5, 5))
console.log(multiplicar(5, 5))
