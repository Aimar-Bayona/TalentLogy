/*Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, el número se pedirá en el programa principal. Usar procedimiento.*/

let x = parseInt(prompt("Digite un numero"))

function multiplicar(x) {
    for (let i = 1; i <= 20; i++) {
        console.log(x + " * " + i + " = " + x*i);     
    }
}

multiplicar(x)