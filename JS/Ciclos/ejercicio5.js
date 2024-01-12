/*Escribir un programa que dado un número entero positivo n, calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n*/

let divisor = parseInt(prompt("Digite número"))
let acum = 0, cont = 1

while (cont <= divisor) {
    acum +=  1 / cont
    cont ++ 
}
console.log(acum);