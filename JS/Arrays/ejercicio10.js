/*    Diseñar el algoritmo correspondiente a un programa, que:

    Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
    Carga la tabla con valores numéricos enteros.
    Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.*/

let matriz = []

for (let row = 0; row < 2; row++) {
    matriz[row] = []
    for (let col = 0; col < 3; col++) {
        matriz[row][col] = parseInt(prompt("digite número"))
    }
}

for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
        console.log(matriz[row][col]);
    }
    console.log();
}

console.log("Suma de cada fila:");
for (let row = 0; row < 2; row++) {
    let sumaFila = matriz[row].reduce((acum, valor) => acum + valor, 0);
    console.log(`Fila ${row + 1}: ${sumaFila}`);
}

console.log("Suma de cada columna:");
for (let col = 0; col < 3; col++) {
    let sumaColumna = matriz.reduce((acum, fila) => acum + fila[col], 0);
    console.log(`Columna ${col + 1}: ${sumaColumna}`);
}