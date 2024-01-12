/*Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.*/

let oracion = prompt("Digite la oración")
let palabras = oracion.split(" ")

console.log(palabras.length);