/*Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. */


let pago = parseFloat(prompt("Digite el pago sin descuento"))

console.log("El pago con descuento es: " + (pago - (pago * .15)));