/*Hacer un programa que muestre 3 números ordenados ascendentemente, utilizando un procedimiento para cada operación. */

let x = parseInt(prompt("Digite el primer numero"));
let y = parseInt(prompt("Digite el segundo numero"));
let z = parseInt(prompt("Digite el tercer numero"));

function intercambio(x, y) {
    let aux = x;
    x = y;
    y = aux;
    return [x, y];
}

function ordenar(x, y, z) {
    if (x > y) {
        [x, y] = intercambio(x, y);
    }
    if (y > z) {
        [y, z] = intercambio(y, z);
    }
    if (x > z) {
        [x, z] = intercambio(x, z);
    }
    return x + " " + y + " " + z;
}

console.log(ordenar(x, y, z));
