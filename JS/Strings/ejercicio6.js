/*Escribir un programa que pregunte el correo electrónico del usuario en la consola y muestre por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) pero con dominio ceu.es.*/

let correo = prompt("Digite el correo electronico")
let usuario = correo.split("@").shift()

console.log(usuario + "@ceu.es");