/*Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.*/

let cont = 0, acum = 0

while (cont < 5 ) {
    let n = parseFloat(prompt("Digite nota"))
    if (n >= 3) {
        acum++
    }
    cont++
}

console.log("Cantidad de notas superiores o iguales a 3.0: " + acum);
