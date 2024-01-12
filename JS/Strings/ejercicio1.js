/*Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.*/

let nombre = prompt("Digite su nombre")
let nombreCompleto = nombre.toLowerCase().split(" ")

console.log(nombre.toLowerCase())
console.log(nombre.toUpperCase())
console.log(nombreCompleto.map(parte => parte.charAt(0).toUpperCase() + parte.slice(1)).join(" "));