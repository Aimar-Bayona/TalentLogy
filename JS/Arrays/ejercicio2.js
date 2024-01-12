/*Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees de la manera que quieras y muestra por pantalla la media de valores del array.*/

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let suma = n.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(suma / n.length);

