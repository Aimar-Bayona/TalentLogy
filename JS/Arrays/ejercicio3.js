/*Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (FindIndex)*/

let index = prompt("Digite elemento a buscar")
let n = ["a","a","i","a","u"]
let datos = []

for (let i = 0; i < n.length; i++) {
    if (index == n[i]) datos.push(i) 
}

console.log(datos);
