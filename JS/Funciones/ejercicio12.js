/*Invertir un número entero con Recursividad.*/

let n = parseInt(prompt("Digite un número entero"))
let invertido = 0

function Invertir(x) {
    if (parseInt(x % 10) <= 0) return invertido
    invertido = (invertido * 10) + (x % 10)
    return Invertir(parseInt(x/10))
}

console.log(Invertir(n));