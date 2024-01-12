/*Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.*/

let frase = prompt("Digite la frase y una vocal")
let vocal = frase.charAt(frase.length-1).toUpperCase()
console.log(frase.slice(0, frase.length-1) + vocal);

