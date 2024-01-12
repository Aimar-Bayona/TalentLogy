/*Hacer un programa que realice la media aritmética de 2 números.*/

function obtenerMedia(x, y){
    return (x + y) / 2
}

let x = parseInt(prompt("Digite el primer numero"))
let y = parseInt(prompt("Digite el segundo numero"))

console.log(obtenerMedia(x, y));