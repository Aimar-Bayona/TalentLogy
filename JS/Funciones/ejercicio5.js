/*Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.

Celsius a Fahrenheit: F = (9*C)/5 + 32;
Celsius a Kelvin: K = C + 273.15;
*/

function convertirGrados(opcion, celsius) {
    if(opcion==1){
        return (9*celsius)/5 + 32
    } else {
        return celsius + 273.15
    }
}

let celsius = parseFloat(prompt("Digite los grados celsius"))
let opcion = parseInt(prompt("Convertir a:\n1. Fahrenheit\n2. Kelvin"))

console.log(convertirGrados(opcion, celsius));