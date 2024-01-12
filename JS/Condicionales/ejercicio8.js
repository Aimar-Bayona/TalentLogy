/*Realizar un programa que pida tres números y diga cuáles son pares y cuáles impares. */

let numero1 = parseInt(prompt("Digite un número"))
let numero2 = parseInt(prompt("Digite un número"))
let numero3 = parseInt(prompt("Digite un número"))

if(numero1 % 2 == 0) {
    console.log("número " + numero1 + " es par");
} else {
    console.log("número " + numero1 + " es impar");
}

if(numero2 % 2 == 0) {
    console.log("número " + numero2 + " es par");
} else {
    console.log("número " + numero2 + " es impar");
}

if(numero3 % 2 == 0) {
    console.log("número " + numero3 + " es par");
} else {
    console.log("número " + numero3 + " es impar");
}