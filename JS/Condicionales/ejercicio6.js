/*En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. */

let precio1 = parseFloat(prompt("Ingrese el precio de la pelicula 1"))
let precio2 = parseFloat(prompt("Ingrese el precio de la pelicula 2"))
let precio3 = parseFloat(prompt("Ingrese el precio de la pelicula 3"))

if(precio1 > precio2 && precio1 > precio3) {
    console.log("El valor a pagar es: " + (precio2 + precio3))
} else if(precio2 > precio1 && precio2 > precio3) {
    console.log("El valor a pagar es: " + (precio1 + precio3))
} else {
    console.log("El valor a pagar es: " + (precio1 + precio2))
}