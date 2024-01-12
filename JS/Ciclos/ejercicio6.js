/*Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …*/

let rango = parseInt(prompt("Digite el rango de Fibonacci"));

let cont = 0;
let x = 0;
let y = 1;

while (cont < rango) {
    console.log(x);
    let aux = x + y;
    x = y;
    y = aux;
    cont++;
}
