/*Escriba un programa que reciba cuatro calificaciones de un estudiante y devuelva el promedio y la máxima y la mínima calificación.*/

let nota1 = parseFloat(prompt("primera nota"))
let nota2 = parseFloat(prompt("segunda nota"))
let nota3 = parseFloat(prompt("tercera nota"))
let nota4 = parseFloat(prompt("cuarta nota"))

let promedio = (nota1 + nota2 + nota3 + nota4) / 4

let max = Math.max(nota1,nota2,nota3,nota4)
let min = Math.min(nota1,nota2,nota3,nota4)

console.log("Promedio: " + promedio + "\nNota máxima: " + max + "\nNota mínima: " + min)