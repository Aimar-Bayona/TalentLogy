/*Escribir un programa que pregunte por consola por los productos de una cesta de la compra, separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.*/

let lista = prompt("Digite su lista de mercado separada por comas")
let productos = lista.split(",")

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}