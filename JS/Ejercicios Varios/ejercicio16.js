/*Ingresar por teclado el nombre y el signo de cualquier persona e imprima, el nombre sólo si la persona es signo Aries, caso contrario imprima no es signo Aries.*/

let nombre = prompt("Digite el nombre")
let signo = prompt("Digite el signo")

if(signo == "aries" || signo == "Aries") {
    console.log(nombre);
} else {
    console.log("No es signo Aries");
}