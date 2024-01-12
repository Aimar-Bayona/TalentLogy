/*Crear Función que determine si un string numérico es capicua EJ: “12321”*/

let numero = prompt("Digite una número")

function esCapicua(numero) {
    return numero == numero.split("").reverse().join("")
}

console.log(esCapicua(numero));