/*Escribir un programa que pida por teclado
 cuatro números y calcule y presente la media de los cuatro. */

let numero1 = parseInt(prompt("Digite el número 1"))
let numero2 = parseInt(prompt("Digite el número 2"))
let numero3 = parseInt(prompt("Digite el número 3"))
let numero4 = parseInt(prompt("Digite el número 4"))

let promedio = (numero1 + numero2 + numero3 + numero4) / 4

console.log("La media de los cuatro números es: " + promedio)