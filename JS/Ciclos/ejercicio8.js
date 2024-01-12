/*Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.*/

let num = parseInt(prompt("Digite el número"))

let cont = 1, acum = 1

while(cont <= num) {
    acum *= cont
    cont++
}

console.log(acum);