/*Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos. */

let catetoA = parseInt(prompt("Digite la medida del cateto A"))
let catetoB = parseInt(prompt("Digite la medida del cateto B"))

console.log("La Hipotenusa es: " + Math.sqrt((catetoA*catetoA) + (catetoB*catetoB)))