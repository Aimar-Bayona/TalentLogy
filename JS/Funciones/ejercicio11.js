/*Pasar de número entero a número binario con Recursividad.*/

let n = parseInt(prompt("Digite un número entero"))
let binario = ""

function convertir(decimal) {
    binario = decimal % 2  + binario  
    if (decimal <= 1) return binario
    return convertir(parseInt(decimal / 2))
}
console.log(convertir(n));