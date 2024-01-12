/*Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir, el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.*/

let opcion = parseInt(prompt("Elija una opcion:\n1. Suma\n2. Resta\n3. Multiplicación\n4. Division"))
let x = parseInt(prompt("Digite el primer numero"))
let y = parseInt(prompt("Digite el segundo numero"))

function operaciones(opcion, x, y) {
    if (opcion == 1) {
        return x + y
    } else if (opcion == 2) {
        return x - y
    } else if (opcion == 3) {
        return x * y
    } else {
        return x / y
    }
}

console.log(operaciones(opcion, x, y));