/*Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.*/

let n = parseInt(prompt("Digite un número"));

function rango(x) {
    console.log(x);
    if (x <= 1) {
        return x;
    }
    return rango(x - 1);
}
rango(n);

