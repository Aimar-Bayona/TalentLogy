/*Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.*/

let n = parseInt(prompt("Digite el tamaño del Array"))
let array = []

function llenar() {
    let multiplo = parseInt(prompt("Digite el múltiplo a evaluar"))
    for (let i = 1; i <= n; i++) {
        array.push(multiplo * i)
    }
}

function mostrar() {
    llenar()
    for (let i = 0; i < n; i++) {
        console.log(array[i]);
    }
}

mostrar()