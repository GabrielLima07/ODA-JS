var v1 = document.querySelector('#v1')              // valor 1
var v2 = document.querySelector('#v2')              // valor 2
var resultado = document.querySelector('span')      // resultado da operação entre os valores

function soma() {
    let soma = parseFloat(v1.value) + parseFloat(v2.value) // o parseFloat converte o o valor da variável para números flutuantes
    let res = "v1 + v2 = soma"                             // as variáveis são declaras como let por seu escopo de bloco
    res = res.replace("v1", v1.value)                      // o método replace serve para fazer a formatação do resultado de forma que fique:
    res = res.replace("v2", v2.value)                      // valor1 -operação- valor2 = resultado
    res = res.replace("soma", soma)
    resultado.innerHTML = res
}

function dif() {                                    // diferença (subtração)
    let dif = parseFloat(v1.value) - parseFloat(v2.value)
    let res = "v1 - v2 = dif"
    res = res.replace("v1", v1.value)
    res = res.replace("v2", v2.value)
    res = res.replace("dif", dif)
    resultado.innerHTML = res
}

function mult() {                                   // multiplicação
    let mult = parseFloat(v1.value) * parseFloat(v2.value)
    let res = "v1 * v2 = mult"
    res = res.replace("v1", v1.value)
    res = res.replace("v2", v2.value)
    res = res.replace("mult", mult)
    resultado.innerHTML = res
}

function div() {                                    // divisão
    let div = Math.floor(parseFloat(v1.value) / parseFloat(v2.value)) // o Math.floor é usada para que retorne um número inteiro
    let res = "v1 / v2 = div"
    let sobraDiv = parseFloat(v1.value) % parseFloat(v2.value)        // resto da divisão 
    let sobra = " Sobra: x"
    res = res.replace("v1", v1.value)
    res = res.replace("v2", v2.value)
    res = res.replace("div", div)
    sobra = sobra.replace("x", sobraDiv)
    resultado.innerHTML = res + sobra                                 // concatenação das stringss de resultado e sobra
}

function pot() {                                    // potenciação
    let pot = parseFloat(v1.value) ** parseFloat(v2.value)
    let res = "v1 ** v2 = pot"
    res = res.replace("v1", v1.value)
    res = res.replace("v2", v2.value)
    res = res.replace("pot", pot)
    resultado.innerHTML = res
}

function mod() {                                    // modulo
    let mod = parseFloat(v1.value) % parseFloat(v2.value)
    let res = "v1 % v2 = mod"
    res = res.replace("v1", v1.value)
    res = res.replace("v2", v2.value)
    res = res.replace("mod", mod)
    resultado.innerHTML = res
}
