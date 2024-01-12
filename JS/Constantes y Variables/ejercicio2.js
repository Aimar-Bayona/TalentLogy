/*Escribe un programa que pregunte el precio, el tanto por ciento de descuento,
 y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300
  y el descuento 20%, el programa dirá que el precio final con descuento es de 240. */

let precio = prompt("Digite el precio del producto X");
let porcentaje_descuento  = prompt("Digite el tanto por ciento de descuento del producto X");

let precio_descuento = precio - (precio * (porcentaje_descuento / 100))

console.log("El precio final con descuento es de " + precio_descuento)
