/*Determinar si un número es par o no.*/

function esPar(x) {
    return x %2==0
}

let x = parseInt(prompt("Digite un número"))

console.log(esPar(x));