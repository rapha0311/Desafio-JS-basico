
let numero1 = parseInt(prompt('Digite o primeiro número:'))
let numero2 = parseInt(prompt('Digite o segundo número:'))

function soma(numero1, numero2){
    return numero1 + numero2;
}

let resultadoDaSoma = soma(numero1, numero2)
console.log('A soma dos dois números é: '+ resultadoDaSoma)

function subtrai(numero1, numero2){
    return numero1 - numero2
}

let resultadoDaSubtracao = subtrai(numero1, numero2)
console.log('A diferença entre os dois números é: '+ resultadoDaSubtracao)

function multiplica(numero1, numero2){
    return numero1 * numero2
}

let resultadoDaMultiplicacao = multiplica(numero1, numero2)
console.log('O produto dos dois números é: '+ resultadoDaMultiplicacao)

function divide(numero1, numero2){
    return numero1 / numero2
}

let resultadoDaDivisao = divide(numero1, numero2)
console.log('A divisão dos dois números é: '+ resultadoDaDivisao)

