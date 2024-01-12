/*Escribir un programa que imprima todos los números pares entre dos números que se le pida al usuario.*/

let x = parseInt(prompt("Ingrese número de inicio"))
let y = parseInt(prompt("Ingrese número de fin"))

let cont  = x
while(cont<=y) {
    if(cont%2==0) console.log(cont);
    cont++
}