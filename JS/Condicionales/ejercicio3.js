/*Pedir dos números y decir si non múltiplos o no. */

let numero1 = prompt("Digite un número")
let numero2 = prompt("Digite un número")

if(numero1 % numero2 == 0) {
    console.log("Los números son múltiplos")
} else {
    console.log("Los números no son múltiplos")
}
