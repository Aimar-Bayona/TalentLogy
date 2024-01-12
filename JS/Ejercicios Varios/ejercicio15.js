/*Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo  imprima el número y un mensaje que diga “tiene raíz imaginaria”.*/

let num = parseInt(prompt("Digite un número"))

if(num>0) {
    console.log("La raíz cuadrada es: "  + Math.sqrt(num));
} else {
    console.log("La raíz cuadrada es: "  + Math.sqrt(num*-1) + " tiene raíz imginaria");
}