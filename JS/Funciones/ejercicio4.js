/*Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un procedimiento muestre por pantalla el número escrito en letras.*/

let n = parseInt(prompt("Digite un numero"))

function convertirLetras(n) {
    switch (n) {
        case 1:
            return "uno"
        case 2:
            return "dos"
        case 3:
            return "tres"
        case 4:
            return "cuatro"
        case 5:
            return "cinco"
        case 6:
            return "seis"
        case 7:
            return "siete"
        case 8:
            return "ocho"
        case 9:
            return "nueve"
        default:
            return "diez"
    }

}

console.log(convertirLetras(n));