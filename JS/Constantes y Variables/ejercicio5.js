/*Escribir un programa que pida por teclado 
dos resistencias y calcule y presente la resistencia
equivalente en paralelo (Req=(R1*R2)/(R1+R2)). */

let resistencia1 = parseFloat(prompt("Digite el valor de la resitencia 1"))

let resistencia2 = parseFloat(prompt("Digite el valor de la resitencia 2"))

let resistencia_paralelo = (resistencia1 * resistencia2) / (resistencia1 + resistencia2)

console.log("El equivalente de la resistencia en paralelo es: " + resistencia_paralelo)
