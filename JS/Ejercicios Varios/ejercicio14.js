/*Calcular el mayor de dos números leídos del teclado y visualizarlo en pantalla.*/

let x = parseInt(prompt("Digite el primer número"))
let y = parseInt(prompt("Digite el segundo número"))

if (x < y) {
    console.log(y + " es mayor");
} else {
    console.log(x + " es mayor");
}