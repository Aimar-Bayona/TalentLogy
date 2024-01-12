/*Construir un programa que calcule y visualice por pantalla el factorial de todos los valores numéricos enteros entre 1 y 10.*/

let cont = 10, acum = 1

while(cont != 0) {
    acum *= cont 
    cont--
}

console.log(acum);